
import {
    DOCK_SIDES,
    IMAGE_EMPTY,
    MOUSE_CLICK,
    MOUSE_SLOP_LARGE,
    TRAIT,
} from '../constants.js';
import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Dom } from '../utils/Dom.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
import { Panel } from '../panels/Panel.js';
import { Strings } from '../utils/Strings.js';
import { Text } from '../core/Text.js';
import { VectorBox } from '../layout/VectorBox.js';

const _color = new Iris();

class Floater extends Panel {

    constructor(id = 'unknown', options = {}) {
        super();
        this.setID(id);
        this.addClass('suey-floater', 'suey-hidden');

        // Parent AbstractDock holding Floater (Tabbed, Window, etc.)
        this.dock = null;

        // Tab Button
        if (typeof options !== 'object') options = {};
        if (!('color' in options) || options.color == null) options.color = ColorScheme.color(TRAIT.ICON);
        if (!('alpha' in options)) options.alpha = 1.0;
        if (!('icon' in options))options.icon = IMAGE_EMPTY;
        if (!('shadow' in options)) options.shadow = 0x000000;
        if (!('shrink' in options)) options.shrink = 1;
        if (options.shrink === true) options.shrink = 0.7;
        if (typeof options.shrink === 'string') {
            options.shrink = parseFloat(options.shrink) / (options.shrink.includes('%') ? 100 : 1);
        }

        this.button = new TabButton(this, Strings.capitalize(id), options);

        // Title
        if (!('titled' in options)) options.titled = true;
        if (typeof options.title !== 'string') options.title = id;

        if (options.titled) {
            // Tab Title
            const tabTitle = new Div().addClass('suey-tab-title');
            tabTitle.add(new Text(Strings.capitalize(options.title)).addClass('suey-tab-title-text'));
            this.add(tabTitle);
            this.tabTitle = tabTitle;

            // Scroller
            this.scroller = new Div().addClass('suey-scroller');
            this.add(this.scroller);

            // Override Contents
            this.contents = function() { return this.scroller; };
        }
    }

    destroy() {
        this.button.destroy();
        super.destroy();
    }

    removeSelf() {
        if (this.dock) {
            this.dock.removeFloater(this, true);
        } else {
            super.removeSelf();
        }
    }

    setTitle(title = '') {
        title = Strings.capitalize(title);
        const titleTextElement = this.dom.querySelector('.suey-tab-title-text');
        if (titleTextElement) {
            titleTextElement.textContent = title;
        }
    }

}

class TabButton extends Div {

    constructor(tabPanel, tooltip, options = {}) {
        super();
        const self = this;
        this.setClass('suey-tab-button');
        if (options.shadow) this.addClass('suey-tab-shadow');

        // Draggable!
        this.dom.draggable = true;

        // Parent Reference
        this.tabPanel = tabPanel;

        // Overload 'id'
        Object.defineProperty(this, 'id', {
            get: function() { return (tabPanel) ? tabPanel.id : ''; },
            set: function(value) {
                if (tabPanel) {
                    tabPanel.id = value;
                } else {
                    console.warn(`TabButton: TabPanel not found`);
                }
            },
        });

        // Icon
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('suey-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setTooltip = function(tooltip) { self.iconBorder.setAttribute('tooltip', tooltip); };
        this.setTooltip(tooltip);

        // Background Color
        if (typeof options.color === 'string' && options.color.includes('var(--')) {
            this.iconVector.setStyle('background-color', `rgba(${options.color}, ${options.alpha})`);
        } else {
            _color.set(options.color);
            const light = `rgba(${_color.rgbString(options.alpha)})`;
            const dark = `rgba(${_color.darken(0.75).rgbString(options.alpha)})`;
            const background = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', background);
        }

        // Drop Shadow
        const shadow = options.shadow;
        if (this.iconVector.img && shadow !== false) {
            _color.set(shadow);
            const dropShadow = `drop-shadow(0 0 var(--pad-micro) rgba(${_color.rgbString()}, 0.8))`;
            this.iconVector.img.setStyle('filter', dropShadow);
        }

        // Shrink?
        const shrink = options.shrink;
        if (this.iconVector.img && !isNaN(shrink)) {
            this.iconVector.img.setStyle('transform', `scale(${shrink})`);
        }

        // Dragging Tabs
        let downX = 0, downY = 0, downTime = 0;
        let minDistance = 0;
        let buttonClone = undefined;
        let lastUnder = undefined;
        let locationUnder = undefined;
        let wasSelected = false;
        let lastClickTime = performance.now() - 1000;
        let lastCheckTime = performance.now();

        function tabPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            downTime = performance.now();
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            document.addEventListener('pointermove', tabPointerMove);
            document.addEventListener('pointerup', tabPointerUp);
            lastCheckTime = performance.now();
        }
        function tabPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (performance.now() - lastCheckTime < 30) return; /* limit updates */
            lastCheckTime = performance.now();
            minDistance = Math.max(minDistance, Math.abs(downX - event.pageX));
            minDistance = Math.max(minDistance, Math.abs(downY - event.pageY));

            if (!buttonClone) {
                if (minDistance < MOUSE_SLOP_LARGE) return;

                // Drag Start
                Css.setCursor('pointer');
                document.body.classList.add('suey-dock-drag');
                wasSelected = self.hasClass('suey-selected');

                // Clone
                buttonClone = self.dom.cloneNode(true);
                buttonClone.classList.add('suey-drag-tab-button');
                document.body.appendChild(buttonClone);

                // Close Popup Menus
                document.dispatchEvent(new Event('closemenu'));
            }

            // Button Follows Mouse
            const newLeft = event.pageX - (self.getWidth() / 2);
            const newTop = event.pageY - (self.getHeight() / 2);
            buttonClone.style.left = `${newLeft}px`;
            buttonClone.style.top = `${newTop}px`;

            // Find Element Under Pointer
            let elementUnder = null;
            let pastEdge = '';
            // Check for Window
            if (!elementUnder) elementUnder = Dom.findElementAt('suey-window', event.pageX, event.pageY);
            if (elementUnder) {
                if (elementUnder === self.tabPanel.dock) {
                    self.tabPanel.dock.addClass('suey-drop-target');
                } else {
                    elementUnder = null;
                }
            }
            if (!elementUnder) {
                // Check for Edges
                const primary = self.tabPanel.dock?.parent?.getPrimary();
                if (primary) {
                    const primaryRect = primary.dom.getBoundingClientRect();
                    const edgeSize = parseFloat(Css.toPx('0.25em'));
                    if (event.pageX < primaryRect.left + edgeSize) pastEdge = 'left';
                    if (event.pageY < primaryRect.top + edgeSize) pastEdge = 'top';
                    if (event.pageX > primaryRect.right - edgeSize) pastEdge = 'right';
                    if (event.pageY > primaryRect.bottom - edgeSize) pastEdge = 'bottom';
                    if (pastEdge !== '') {
                        const primaries = document.body.getElementsByClassName('suey-docker-primary');
                        if (primaries) elementUnder = primaries[0].suey;
                    }
                }
                // Not Outside Primary
                if (!elementUnder) {
                    // Check for Buttons
                    const tabButtons = document.elementsFromPoint(event.pageX, event.pageY);
                    if (tabButtons.includes(self.parent.dom)) elementUnder = self.parent;
                    // Check for Docker
                    if (!elementUnder) elementUnder = Dom.findElementAt('suey-docker', event.pageX, event.pageY);
                }
            }

            // Drag Over
            if (elementUnder && elementUnder.isElement) {
                // Drag Over TabButtons (reorganize TabButtons)
                if (elementUnder.hasClass('suey-tab-buttons')) {
                    const buttonUnder = Dom.findElementAt('suey-tab-button', event.pageX, event.pageY);
                    if (buttonUnder) {
                        if (elementUnder.children.indexOf(self) === -1) {
                            // Remove from current Tabbed
                            if (self.tabPanel.dock) {
                                self.tabPanel.dock.removeFloater(self.tabPanel);
                            }
                            // Add to New Tabbed
                            buttonUnder.tabPanel.dock.addFloater(self.tabPanel);
                            if (wasSelected) buttonUnder.tabPanel.dock.selectFloater(self.tabPanel.id);
                        }

                        buttonUnder.addClass('suey-drop-target');
                        const childrenArray = Array.from(elementUnder.dom.children);
                        const newIndex = childrenArray.indexOf(buttonUnder.dom);
                        const oldIndex = childrenArray.indexOf(self.dom);
                        if (newIndex !== oldIndex) {
                            elementUnder.dom.appendChild(self.dom); // send to back
                            elementUnder.dom.insertBefore(self.dom, elementUnder.dom.children[newIndex]); // insert in new position
                        }
                        elementUnder = buttonUnder;
                    }

                // Drag Over Docker (show new Dock Locations)
                } else if (elementUnder.hasClass('suey-docker')) {
                    elementUnder.showDockLocations(pastEdge !== '');
                    if (pastEdge !== '') { /* primary edge */
                        locationUnder = Dom.childWithClass(elementUnder, `suey-dock-${pastEdge}`);
                    } else {
                        locationUnder = Dom.findElementAt('suey-dock-location', event.pageX, event.pageY);
                    }
                    if (locationUnder) {
                        locationUnder.addClass('suey-dock-drop');
                        if (locationUnder.hasClass('suey-dock-middle')) {
                            locationUnder.addClass('suey-dock-self');
                            locationUnder.parent.parent.addClass('suey-dock-self');
                        }
                    }
                }
            }

            // Hide Previous Element Under
            if (elementUnder !== lastUnder && lastUnder && lastUnder.isElement) {
                if (lastUnder.hasClass('suey-docker')) lastUnder.hideDockLocations();
                if (lastUnder.hasClass('suey-tab-button')) lastUnder.removeClass('suey-drop-target');
                if (lastUnder.hasClass('suey-window')) lastUnder.removeClass('suey-drop-target');
            }

            lastUnder = elementUnder;
        }
        function tabPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();

            // Drag End
            if (buttonClone) {
                Css.setCursor('');
                document.body.classList.remove('suey-dock-drag');
                document.body.removeChild(buttonClone);

                // Last Under Element was TabButton
                if (lastUnder && lastUnder.hasClass('suey-tab-button')) {
                    lastUnder.removeClass('suey-drop-target');
                // Last Under Element was Docker
                } else if (lastUnder && lastUnder.hasClass('suey-docker')) {
                    if (locationUnder) {
                        let droppedOnDock = null;
                        // New Dock (Tabbed)
                        if (locationUnder.hasClassWithString('middle')) {
                            droppedOnDock = lastUnder.children.find(child => child.hasClass('suey-tabbed'));
                        } else if (locationUnder.hasClassWithString('top')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.TOP, '25%', false).enableTabs();
                        } else if (locationUnder.hasClassWithString('bottom')) {
                            const flexBefore = (lastUnder.initialSide === 'left') || (lastUnder.initialSide === 'right');
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.BOTTOM, '25%', false).enableTabs(flexBefore);
                        } else if (locationUnder.hasClassWithString('left')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.LEFT, '20%', false).enableTabs();
                        } else if (locationUnder.hasClassWithString('right')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.RIGHT, '20%', false).enableTabs();
                        // New Window
                        } else if (locationUnder.hasClassWithString('center')) {
                            const mainWindow = lastUnder.getMainWindow();
                            if (mainWindow) droppedOnDock = mainWindow.addWindow({ title: self.tabPanel.id, width: '50%', height: '70%' });
                        // Unknown Dock Location
                        } else {
                            console.warn('TabButton.tabPointerUp(): Unknown dock location', locationUnder);
                        }
                        // Have New Dock Panel
                        if (droppedOnDock) {
                            // Remove from current Tabbed
                            if (droppedOnDock !== self.tabPanel.dock) {
                                self.tabPanel.dock.removeFloater(self.tabPanel);
                            }
                            // Add to New Tabbed
                            droppedOnDock.addFloater(self.tabPanel);
                            droppedOnDock.selectFloater(self.tabPanel.id);
                            droppedOnDock.focus();
                        }
                    }
                    // Clear Dock Locations
                    lastUnder.hideDockLocations();
                // Last Under Element was Window
                } else if (lastUnder && lastUnder.hasClass('suey-window')) {
                    lastUnder.removeClass('suey-drop-target');
                }
                // Reset Drop Variables
                buttonClone = undefined;
                lastUnder = null;
                locationUnder = null;
            // Click?
            } else {
                if (performance.now() - downTime < MOUSE_CLICK) {
                    // Double Click
                    if (performance.now() - lastClickTime < MOUSE_CLICK * 1.5) {
                        if (typeof self.tabPanel.dock.toggleTabs === 'function') {
                            self.tabPanel.dock.toggleTabs();
                        }
                    // Single Click
                    } else {
                        document.dispatchEvent(new Event('closemenu'));
                        self.tabPanel.dock.selectFloater(self.tabPanel.id, true);
                    }
                }
                lastClickTime = performance.now();
            }
            document.removeEventListener('pointermove', tabPointerMove);
            document.removeEventListener('pointerup', tabPointerUp);
        }
        this.on('pointerdown', tabPointerDown);
    }

}

export { Floater };
