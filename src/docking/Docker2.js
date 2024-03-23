import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel } from '../panels/Panel.js';
import { Tabbed } from './Tabbed.js';

import { DOCK_SIDES } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { RESIZERS } from '../constants.js';

class Docker2 extends Panel {

    #primary = false;

    constructor(primary = true) {
        super({ style: PANEL_STYLES.NONE });
        const self = this;
        this.addClass('suey-docker2');

        // Primary Dock
        this.#primary = primary;
        if (primary) {
            this.addClass('suey-docker2-primary');
            this.initialSide = 'center';
            window.addEventListener('resize', () => {
                for (const child of self.children) {
                    child.dom.dispatchEvent(new Event('resized'));
                }
            });
        }
    }

    /******************** RESIZERS */

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
        const dock = new Docker2(false /* primary */);
        const twin = new Docker2(false /* primary */);

        /***** INIT */

        // Initial Size
        switch (side) {
            case DOCK_SIDES.LEFT:
            case DOCK_SIDES.RIGHT:
                dock.addClass('suey-docker2-vertical').setStyle('width', Css.toPx(size, this.dom, 'w'));
                twin.addClass('suey-docker2-vertical');
                if (side === DOCK_SIDES.LEFT) { dock.setStyle('left', 0); twin.setStyle('right', 0); }
                if (side === DOCK_SIDES.RIGHT) { dock.setStyle('right', 0); twin.setStyle('left', 0); }
                break;
            case DOCK_SIDES.TOP:
            case DOCK_SIDES.BOTTOM:
                dock.addClass('suey-docker2-horizontal').setStyle('height', Css.toPx(size, this.dom, 'h'));
                twin.addClass('suey-docker2-horizontal');
                if (side === DOCK_SIDES.TOP) { dock.setStyle('top', 0); twin.setStyle('bottom', 0); }
                if (side === DOCK_SIDES.BOTTOM) { dock.setStyle('bottom', 0); twin.setStyle('top', 0); }
                break;
        }

        // Split Parent, Add Docks
        if (!this.#primary) {
            const children = [];
            for (const child of this.contents().children) {
                if (!child.hasClass('suey-resizer')) { /* leave resizer along major axis*/
                    children.push(child);
                }
            }
            twin.add(...children);
        }
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

        // Resizers
        const rect = {};
        function checkCancel(event) {
            if (event && event.isTrusted /* not generated programmatically */) {
                const tabbed = Dom.findElementAt('suey-tabbed', event.pageX, event.pageY);
                const button = Dom.findElementAt('suey-tab-button', event.pageX, event.pageY);
                if (button || !tabbed) document.body.classList.add('suey-no-resize');
            }
        }
        function resizerDown() {
            rect.width = dock.getWidth();
            rect.height = dock.getHeight();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (!dock.parent || !dock.parent.isElement) return;
            let newWidth = null;
            let newHeight = null;
            if (resizer && resizer.hasClassWithString('left')) newWidth = rect.width - diffX;
            if (resizer && resizer.hasClassWithString('right')) newWidth = rect.width + diffX;
            if (resizer && resizer.hasClassWithString('top')) newHeight = rect.height - diffY;
            if (resizer && resizer.hasClassWithString('bottom')) newHeight = rect.height + diffY;
            if (newWidth != null) dock.setStyle('width', `${Math.max(100, newWidth)}px`);
            if (newHeight != null) dock.setStyle('height', `${Math.max(100, newHeight)}px`);
            if (newWidth != null || newHeight != null) dock.dom.dispatchEvent(new Event('resized'));
        }
        Interaction.makeResizeable(dock, resizerDown, resizerMove, null, checkCancel);
        dock.addResizers(this.wantsResizer(side), true /* offset */);

        // Limit Size, Resize Twin
        function resizeTwin() {
            const twin = dock.getTwin();
            if (twin.dom && twin.dom.children.length > 0) {
                const computed = getComputedStyle(twin.dom);
                if (dock.isVertical) {
                    const maxWidth = dock.parent.getWidth() - parseFloat(computed.minWidth);
                    dock.setStyle('width', `${Math.min(dock.getWidth(), maxWidth)}px`);
                }
                if (dock.isHorizontal) {
                    const maxHeight = dock.parent.getHeight() - parseFloat(computed.minHeight);
                    dock.setStyle('height', `${Math.min(dock.getHeight(), maxHeight)}px`);
                }
            }
            if (dock.isVertical) twin.setStyle('width', `${dock.parent.getWidth() - dock.getWidth()}px`);
            if (dock.isHorizontal) twin.setStyle('height', `${dock.parent.getHeight() - dock.getHeight()}px`);
            for (const child of dock.children) child.dom.dispatchEvent(new Event('resized'));
            for (const child of twin.children) child.dom.dispatchEvent(new Event('resized'));

        }
        dock.dom.addEventListener('resized', resizeTwin);

        // Initial Size
        resizeTwin();

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
        if (childTabbed && parent.addResizers) {
            parent.addResizers(parent.wantsResizer(parent.dockSide), true /* offset */);
        }

        // Set Tabbed Sizes
        for (const child of parent.children) {
            if (child.hasClass('suey-tabbed')) {
                child.setStyle('height', (parent.isHorizontal) ? '100%' : 'auto');
            }
        }

        // Resize the parent
        parent.traverse((child) => child.dom.dispatchEvent(new Event('resized')));
    }

    /******************** DROP LOCATIONS */

    hideDockLocations() {
        if (this.dockLocations) {
            this.remove(this.dockLocations);
            this.dockLocations = undefined;
        }
    }

    showDockLocations() {
        if (!this.dockLocations) {
            const dockLocations = new Div().addClass('suey-dock-locations');
            if (this.initialSide === 'left' || this.initialSide === 'right') {
                if (this.getHeight() > 160) {
                    const topDock = new Div().addClass('suey-dock-location', 'suey-dock-top');
                    const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-bottom');
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle-horizontal');
                    dockLocations.add(topDock, bottomDock, middleDock);
                } else {
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle-horizontal');
                    middleDock.setStyle('top', '0%', 'height', '100%');
                    dockLocations.add(middleDock);
                }
            } else if (this.initialSide === 'top' || this.initialSide === 'bottom') {
                if (this.getWidth() > 200) {
                    const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-left');
                    const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-right');
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle-vertical');
                    dockLocations.add(leftDock, rightDock, middleDock);
                } else {
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle-vertical');
                    middleDock.setStyle('left', '0%', 'width', '100%');
                    dockLocations.add(middleDock);
                }
            } else /* if (this.initialSide === 'center') */ {
                const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-left');
                const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-right');
                const topDock = new Div().addClass('suey-dock-location', 'suey-dock-top');
                const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-bottom');
                const centerDock = new Div().addClass('suey-dock-location', 'suey-dock-center');
                topDock.setStyle('left', '20%', 'width', '60%');
                bottomDock.setStyle('left', '20%', 'width', '60%');
                dockLocations.add(leftDock, rightDock, topDock, bottomDock, centerDock);
            }
            this.add(dockLocations);
            this.dockLocations = dockLocations;
        }
        for (const child of this.dockLocations.children) {
            child.removeClass('suey-dock-drop');
        }
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
        tabbed.setStyle('height', wantsTall ? '100%' : 'auto');

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
