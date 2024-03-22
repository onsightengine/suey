import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel } from '../panels/Panel.js';
import { PANEL_STYLES } from '../panels/Panel.js';
import { Tabbed } from './Tabbed.js';

import { RESIZERS } from '../constants.js';

export const DOCK_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    TOP:        'top',
    BOTTOM:     'bottom',
};

class Docker2 extends Panel {

    #primary = false;

    constructor(primary = false) {
        super({ style: PANEL_STYLES.NONE });
        const self = this;
        this.addClass('suey-docker2');

        // Primary Dock
        this.#primary = primary;
        if (primary) {
            this.addClass('suey-docker2-primary');
            this.initialSide = 'center';
            window.addEventListener('resize', () => {
                self.traverse((child) => {
                    child.dom.dispatchEvent(new Event('resized'));
                })
            });
        }
    }

    /******************** RESIZERS */

    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || !Number.isFinite(width)) width = null;
        if (width == null) return this.dom.style.removeProperty('width');
        this.setStyle('width', Css.toEm(parseFloat(width), this.dom));
        this.dom.dispatchEvent(new Event('resized'));
    }

    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || !Number.isFinite(height)) height = null;
        if (height == null) return this.dom.style.removeProperty('height');
        this.setStyle('height', Css.toEm(parseFloat(height), this.dom));
        this.dom.dispatchEvent(new Event('resized'));
    }

    wantsResizer(side) {
        const resizers = [];
        switch (side) {
            case DOCK_SIDES.LEFT: resizers.push(RESIZERS.RIGHT); break;
            case DOCK_SIDES.RIGHT: resizers.push(RESIZERS.LEFT); break;
            case DOCK_SIDES.TOP: resizers.push(RESIZERS.BOTTOM); break;
            case DOCK_SIDES.BOTTOM: resizers.push(RESIZERS.TOP); break;
        }
        return resizers;
    }

    /******************** DOCK */

    addDock(side = DOCK_SIDES.LEFT, size = '20%') {
        // Create Docks
        const dock = new Docker2(false);
        const twin = new Docker2();

        // Resizers
        const rect = {};
        function resizerDown() {
            rect.width = dock.getWidth();
            rect.height = dock.getHeight();
            dock.dom.dispatchEvent(new Event('clicked', { 'bubbles': true, 'cancelable': true }));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) dock.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('right')) dock.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('top')) dock.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('bottom')) dock.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(dock, resizerDown, resizerMove).addResizers(this.wantsResizer(side));

        /***** INIT */

        // Initial Size
        switch (side) {
            case DOCK_SIDES.LEFT:
            case DOCK_SIDES.RIGHT:
                dock.addClass('suey-docker2-vertical');
                twin.addClass('suey-docker2-vertical');
                dock.setStyle('width', Css.toPx(size, this.dom, 'w'));
                if (side === DOCK_SIDES.LEFT) { dock.setStyle('left', 0); twin.setStyle('right', 0); }
                if (side === DOCK_SIDES.RIGHT) { dock.setStyle('right', 0); twin.setStyle('left', 0); }
                break;
            case DOCK_SIDES.TOP:
            case DOCK_SIDES.BOTTOM:
                dock.addClass('suey-docker2-horizontal');
                twin.addClass('suey-docker2-horizontal');
                dock.setStyle('height', Css.toPx(size, this.dom, 'h'));
                if (side === DOCK_SIDES.TOP) { dock.setStyle('top', 0); twin.setStyle('bottom', 0); }
                if (side === DOCK_SIDES.BOTTOM) { dock.setStyle('bottom', 0); twin.setStyle('top', 0); }
                break;
        }

        // Split Parent, Add Docks
        if (!this.#primary) twin.add(...this.contents().children);
        this.add(twin, dock);

        // Dock Data
        dock.isVertical = dock.hasClass('suey-docker2-vertical');
        dock.isHorizontal = dock.hasClass('suey-docker2-horizontal');
        dock.dockSide = twin.dockSide = side;
        dock.initialSide = (this.initialSide === 'center') ? side : this.initialSide;
        twin.initialSide = (this.contents().initialSide === 'center') ? 'center' : this.initialSide;

        // Set new 'Contents'
        this.contents = function() { return twin; }

        /***** EVENTS */

        // Twin Sizing
        function sizeTwin() {
            const twin = dock.getTwin();
            if (dock.isVertical) twin.setStyle('width', `${dock.parent.getWidth() - dock.getWidth()}px`);
            if (dock.isHorizontal) twin.setStyle('height', `${dock.parent.getHeight() - dock.getHeight()}px`);
            for (const child of dock.children) child.dom.dispatchEvent(new Event('resized'));
            for (const child of twin.children) child.dom.dispatchEvent(new Event('resized'));
        }
        sizeTwin();

        // Limit Resize
        let parentSize;
        dock.dom.addEventListener('resizeStart', () => {
            if (dock.isVertical) parentSize = dock.parent.getWidth();
            if (dock.isHorizontal) parentSize = dock.parent.getHeight();
        });
        dock.dom.addEventListener('resized', () => {
            if (!dock.parent || !dock.parent.isElement) return;
            const twin = dock.getTwin();
            if (dock.isVertical) {
                let dockWidth = Math.max(100, Math.min(dock.getWidth(), parentSize));
                if (twin.dom && twin.dom.children.length > 0) {
                    const computed = getComputedStyle(twin.dom);
                    dockWidth = Math.min(dockWidth, parentSize - parseFloat(computed.minWidth));
                }
                dock.setStyle('width', `${dockWidth}px`);
            }
            if (dock.isHorizontal) {
                let dockHeight = Math.max(100, Math.min(dock.getHeight(), parentSize));
                if (twin.dom && twin.dom.children.length > 0) {
                    const computed = getComputedStyle(twin.dom);
                    dockHeight = Math.min(dockHeight, parentSize - parseFloat(computed.minHeight));
                }
                dock.setStyle('height', `${dockHeight}px`);
            }
            sizeTwin();
        });

        // Return new Dock
        return dock;
    }

    getTwin() {
        const parent = this.parent;
        if (!parent || !parent.isElement || !parent.hasClass('suey-docker2')) return undefined;
        const twin = parent.children.find(child => child !== this && child.hasClass('suey-docker2'));
        return twin;
    }

    removeDock() {
        if (this.#primary) {
            console.warn('Docker2.removeDock: Cannot remove the primary dock');
            return;
        }

        const parent = this.parent;
        if (!parent || !parent.isElement || !parent.hasClass('suey-docker2')) {
            console.warn('Docker2.removeDock: Dock does not have a valid parent.');
            return;
        }

        const twin = this.getTwin();
        if (!twin) {
            console.warn('Docker2.removeDock: Could not find the twin Docker2.');
            return;
        }

        // Move contents of the twin to the parent, remove this level docks
        const children = [];
        for (const child of twin.children) {
            if (child.hasClass('suey-tabbed') ||
                child.hasClass('suey-tab-buttons') ||
                child.hasClass('suey-docker2')) {
                children.push(child);
            }
        }
        parent.addToSelf(...children);
        parent.remove(this, twin);
        parent.contents = function() { return parent; }

        // Set Tabbed, Remove old DockLocations
        if (parent.dockLocations) {
            parent.remove(parent.dockLocations);
            parent.dockLocations = undefined;
        }

        // Reset Empty Dock to 'center'
        if (parent.children.length === 0) {
            parent.initialSide = 'center';
        }

        // Add back new Resizer
        const childTabbed = parent.children.find(child => child !== this && child.hasClass('suey-tabbed'));
        if (childTabbed) parent.addResizers(parent.wantsResizer(parent.dockSide));

        // Set Tabbed Sizes
        for (const child of parent.children) {
            if (child.hasClass('suey-tabbed')) {
                child.setStyle('height', (parent.isHorizontal) ? '100%' : 'auto');
            }
        }

        // Resize the parent
        parent.traverse((child) => { child.dom.dispatchEvent(new Event('resized')); })
    }

    /******************** DROP LOCATIONS */

    hideDockLocations() {
        if (this.dockLocations) {
            this.dockLocations.addClass('suey-hidden');
        }
    }

    showDockLocations() {
        if (!this.dockLocations) {
            this.dockLocations = new Div().addClass('suey-dock-locations');
            this.dockLocations.addClass('suey-hidden');
            if (this.initialSide === 'left' || this.initialSide === 'right') {
                const topDock = new Div().addClass('suey-dock-location', 'suey-dock-top');
                const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-bottom');
                const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle-horizontal');
                this.dockLocations.add(topDock, bottomDock, middleDock);
            } else if (this.initialSide === 'top' || this.initialSide === 'bottom') {
                const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-left');
                const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-right');
                const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle-vertical');
                this.dockLocations.add(leftDock, rightDock, middleDock);
            } else /* if (this.initialSide === 'center') */ {
                const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-left');
                const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-right');
                const topDock = new Div().addClass('suey-dock-location', 'suey-dock-top');
                const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-bottom');
                const centerDock = new Div().addClass('suey-dock-location', 'suey-dock-center');
                topDock.setStyle('left', '20%', 'width', '60%');
                bottomDock.setStyle('left', '20%', 'width', '60%');
                this.dockLocations.add(leftDock, rightDock, topDock, bottomDock, centerDock);
            }
            this.add(this.dockLocations);
        }
        for (const child of this.dockLocations.children) {
            child.removeClass('suey-dock-drop');
        }
        this.dockLocations.removeClass('suey-hidden');
    }

    /******************** TABS */

    enableTabs() {
        if (this.#primary) {
            console.warn('Docker2.enableTabs: Cannot enable tabs on the primary dock');
            return undefined;
        }

        // Check for Tabbed
        let tabbed = this.children.find(child => child !== this && child.hasClass('suey-tabbed'));
        if (tabbed) return tabbed;

        // Create New Tabbed
        tabbed = new Tabbed();
        tabbed.setTabSide(this.initialSide, true /* opposite? */)
        const wantsTall = this.initialSide === 'top' || this.initialSide === 'bottom';
        tabbed.setStyle('width', '100%');
        tabbed.setStyle('height', (wantsTall) ? '100%' : 'auto');

        // Event: 'tab-changed'
        tabbed.dom.addEventListener('tab-changed', () => {
            if (tabbed.tabCount() === 0) {
                if (tabbed.parent.hasClass('suey-docker2')) tabbed.parent.removeDock();
            }
        });

        // Save, Add, Return
        this.add(tabbed);
        return tabbed;
    }

}

export { Docker2 };
