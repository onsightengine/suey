import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Dom } from '../utils/Dom.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
import { Panel } from '../panels/Panel.js';
import { VectorBox } from '../layout/VectorBox.js';

import { DOCK_SIDES } from '../constants.js';
import { IMAGE_EMPTY } from '../constants.js';
import { MOUSE_CLICK, MOUSE_SLOP_LARGE } from '../constants.js';
import { TRAIT } from '../constants.js';

const _color = new Iris();

class Floater extends Panel {

    constructor(id = 'unknown', content, options = {}) {
        super();
        this.setID(id);
        this.addClass('suey-floater', 'suey-hidden');
        this.add(content);

        // Parent Dock Holding Floater (Tabbed, Window, etc.)
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
        this.button = new TabButton(this, capitalize(id), options);
    }

}

class TabButton extends Div {

    constructor(tabPanel, label, options = {}) {
        super();
        const self = this;
        this.setClass('suey-tab-button');
        if (options.shadow) this.addClass('suey-tab-shadow');

        // Draggable!
        this.dom.draggable = true;

        // Parent Reference
        this.tabPanel = tabPanel;

        // Icon / Label
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('suey-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) { self.iconBorder.dom.setAttribute('tooltip', label); };
        this.setLabel(label);

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
            this.iconVector.img.setStyle('position', 'absolute');
            this.iconVector.img.setStyle('left', '0', 'right', '0', 'top', '0', 'bottom', '0');
            this.iconVector.img.setStyle('margin', 'auto');
            this.iconVector.img.setStyle('width', `${shrink * 100}%`);
            this.iconVector.img.setStyle('height', `${shrink * 100}%`);
        }

        // Dragging Tabs
        let downX = 0, downY = 0, downTime = 0;
        let minDistance = 0;
        let buttonClone = undefined;
        let lastUnder = undefined;
        let locationUnder = undefined;

        function onPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            downTime = performance.now();
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
        }
        function onPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            minDistance = Math.max(minDistance, Math.abs(downX - event.pageX));
            minDistance = Math.max(minDistance, Math.abs(downY - event.pageY));

            if (!buttonClone) {
                if (minDistance < MOUSE_SLOP_LARGE) return;

                // Drag Start
                Css.setCursor('pointer');

                // Clone
                buttonClone = self.dom.cloneNode(true);
                buttonClone.classList.add('suey-drag-tab-button');
                document.body.appendChild(buttonClone);
            }

            // Button Follows Mouse
            const newLeft = event.pageX - (self.getWidth() / 2);
            const newTop = event.pageY - (self.getHeight() / 2);
            buttonClone.style.left = `${newLeft}px`;
            buttonClone.style.top = `${newTop}px`;

            // Find Element Under Pointer
            let elementUnder = null;
            const domElements = document.elementsFromPoint(event.pageX, event.pageY);
            if (domElements.includes(self.parent.dom)) {
                elementUnder = self.parent; // i.e., parent 'suey-tab-buttons'
            } else {
                for (const dom of domElements) {
                    if (dom.classList.contains('suey-docker2')) {
                        elementUnder = dom.suey;
                        break;
                    }
                }
            }

            // Drag Over
            if (elementUnder && elementUnder.isElement) {
                // Drag Over TabButtons (reorganize TabButtons)
                if (elementUnder.hasClass('suey-tab-buttons')) {
                    if (elementUnder === self.tabPanel.dock.buttons) {
                        const buttonUnder = Dom.findElementAt('suey-tab-button', event.pageX, event.pageY);
                        if (buttonUnder) {
                            buttonUnder.addClass('suey-drop-target');
                            const newIndex = Array.from(elementUnder.dom.children).indexOf(buttonUnder.dom);
                            if (newIndex !== Array.from(elementUnder.dom.children).indexOf(self.dom)) {
                                elementUnder.dom.appendChild(self.dom); // send to back
                                elementUnder.dom.insertBefore(self.dom, elementUnder.dom.children[newIndex]); // insert in new position
                            }
                            elementUnder = buttonUnder;
                        }
                    }

                // Drag Over Docker2 (show new Dock Locations)
                } else if (elementUnder.hasClass('suey-docker2')) {
                    elementUnder.showDockLocations(event.pageX, event.pageY);
                    locationUnder = Dom.findElementAt('suey-dock-location', event.pageX, event.pageY);
                    if (locationUnder) locationUnder.addClass('suey-dock-drop');
                }
            }

            // Hide Previous Element Under
            if (elementUnder !== lastUnder && lastUnder && lastUnder.isElement) {
                if (lastUnder.hasClass('suey-docker2')) lastUnder.hideDockLocations();
                if (lastUnder.hasClass('suey-tab-button')) lastUnder.removeClass('suey-drop-target');
            }

            lastUnder = elementUnder;
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();

            // Drag End
            if (buttonClone) {
                Css.setCursor('');
                document.body.removeChild(buttonClone);

                // Last Under Element was TabButton
                if (lastUnder && lastUnder.hasClass('suey-tab-button')) {
                    lastUnder.removeClass('suey-drop-target');

                // Last Under Element was Docker2
                } else if (lastUnder && lastUnder.hasClass('suey-docker2')) {
                    if (locationUnder) {
                        let droppedOnDock = null;
                        if (locationUnder.hasClass('suey-dock-middle-vertical') ||
                            locationUnder.hasClass('suey-dock-middle-horizontal')) {
                            droppedOnDock = lastUnder.children.find(child => child.hasClass('suey-tabbed'));
                        } else if (locationUnder.hasClass('suey-dock-top')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.TOP, '20%').enableTabs();
                        } else if (locationUnder.hasClass('suey-dock-bottom')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.BOTTOM, '20%').enableTabs();
                        } else if (locationUnder.hasClass('suey-dock-left')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.LEFT, '20%').enableTabs();
                        } else if (locationUnder.hasClass('suey-dock-right')) {
                            droppedOnDock = lastUnder.addDock(DOCK_SIDES.RIGHT, '20%').enableTabs();
                        } else if (locationUnder.hasClass('suey-dock-center')) {
                            //
                            // TODO: Window Panel
                            //
                        } else {
                            console.log(locationUnder);
                        }
                        // Have New Dock Panel
                        if (droppedOnDock) {
                            // Remove from current Tabbed
                            if (self.tabPanel.dock && droppedOnDock !== self.tabPanel.dock) {
                                const existing = self.tabPanel.dock;
                                const tabIndex = existing.buttons.children.indexOf(self);
                                existing.removeTab(tabIndex);
                                if (existing.selectedID === self.tabPanel.getID() && tabIndex > 0) {
                                    existing.selectTab(existing.buttons.children[tabIndex - 1].getID());
                                } else {
                                    existing.selectFirst();
                                }
                            }
                            // Add to New Tabbed
                            droppedOnDock.addTab(self.tabPanel);
                            droppedOnDock.selectTab(self.tabPanel.id, true /* wasClicked */);
                        }
                    }
                    // Clear Dock Locations
                    lastUnder.hideDockLocations();
                }
                // Reset Drop Variables
                buttonClone = undefined;
                lastUnder = null;
                locationUnder = null;
            // Click?
            } else {
                if (performance.now() - downTime < MOUSE_CLICK) {
                    self.tabPanel.dock.selectTab(self.tabPanel.getID(), true);
                    self.tabPanel.dock.dom.dispatchEvent(new Event('resized'));
                }
            }
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        }
        function onPointerEnter() {
            document.body.classList.add('suey-no-resize');
        }
        function onPointerLeave() {
            document.body.classList.remove('suey-no-resize');
        }
        this.dom.addEventListener('pointerenter', onPointerEnter);
        this.dom.addEventListener('pointerleave', onPointerLeave);
        this.dom.addEventListener('pointerdown', onPointerDown);
    }

    getID() {
        return this.tabPanel?.getID();
    }

}

export { Floater };

/******************** INTERNAL ********************/

function capitalize(string) {
    const words = String(string).split(' ');
    for (let i = 0; i < words.length; i++) words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    return words.join(' ');
}
