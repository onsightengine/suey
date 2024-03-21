import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Dom } from '../utils/Dom.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
import { Panel } from '../panels/Panel.js';
import { VectorBox } from '../layout/VectorBox.js';

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

        // Dock
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
        let currentParent = undefined;
        let tabIndex = -1;
        let lastUnder = undefined;
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
            if (!self.hasClass('suey-dragging')) {
                if (minDistance < MOUSE_SLOP_LARGE) return;
                // Drag Start
                self.addClass('suey-dragging');
                Css.setCursor('pointer');
                currentParent = self.dom.parentElement;
                if (currentParent) tabIndex = Array.from(currentParent.children).indexOf(self.dom);
                document.body.appendChild(self.dom);
            }
            const newLeft = event.pageX - (self.getWidth() / 2);
            const newTop = event.pageY - (self.getHeight() / 2);
            self.setStyle('left', `${newLeft}px`, 'top', `${newTop}px`);
            // Dock Locations
            const dockerUnder = Dom.findElementAt('suey-docker2', event.pageX, event.pageY, self.dom);
            if (dockerUnder !== lastUnder && lastUnder && lastUnder.isElement && lastUnder.hasClass('suey-docker2')) {
                lastUnder.hideDockLocations();
            }
            if (dockerUnder && dockerUnder.isElement && dockerUnder.hasClass('suey-docker2')) {
                dockerUnder.showDockLocations(event.pageX, event.pageY);
                const locationUnder = Dom.findElementAt('suey-dock-location', event.pageX, event.pageY);
                if (locationUnder) {
                    locationUnder.addClass('suey-dock-drop');
                }
            }
            lastUnder = dockerUnder;
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            // Drag End
            if (self.hasClass('suey-dragging')) {
                self.removeClass('suey-dragging');
                Css.setCursor('');
                if (currentParent) {
                    if (tabIndex >= 0 && tabIndex < currentParent.children.length) {
                        currentParent.insertBefore(self.dom, currentParent.children[tabIndex]);
                    } else {
                        currentParent.appendChild(self.dom);
                    }
                }
                // Clear Dock Locations
                if (lastUnder && lastUnder.isElement && lastUnder.hasClass('suey-docker2')) {
                    lastUnder.hideDockLocations();
                }
                lastUnder = null;
                // Reset Drop
                currentParent = null;
                tabIndex = -1;
                self.setStyle('left', '', 'top', '');
                // Handle Drop
                self.tabPanel.dock.handleTabDrop(self, event.pageX, event.pageY);
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
