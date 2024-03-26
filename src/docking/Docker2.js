import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel } from '../panels/Panel.js';
import { Tabbed } from './Tabbed.js';

import { DOCK_SIDES } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { RESIZERS } from '../constants.js';

const MINIMUM_NORMAL = 100;

class Docker2 extends Panel {

    #primary = false;

    constructor(primary = true) {
        super({ style: PANEL_STYLES.NONE });
        const self = this;
        this.addClass('suey-docker2');

        // Properties
        this.initialSide = 'center';
        this.isHorizontal = false;
        this.isVertical = false;
        this.minimumSize = MINIMUM_NORMAL;
        this.expandSize = null;
        this.expandSide = '';

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

    isPrimary() {
        return this.#primary; // return this.hasClass('suey-docker2-primary');
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

    addDock(side = DOCK_SIDES.LEFT, size = '20%', primaryContents = true) {
        // Create Docks
        const dock = new Docker2(false /* primary */);
        const twin = new Docker2(false /* primary */);

        /***** INIT */

        if (this.hasClass('suey-collapsed')) {
            dock.addClass('suey-collapsed');
            twin.addClass('suey-collapsed');
        }

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
        const childrenOf = primaryContents ? this.contents() : this;
        const children = [];
        for (const child of childrenOf.children) {
            if (!child.hasClass('suey-resizer') &&              // Leave Resizer (stays on major axis)
                !child.hasClass('suey-dock-locations')) {       // Leave DockLocations
                children.push(child);
            }
        }
        twin.add(...children);
        if (primaryContents) this.add(twin, dock);
        else this.addToSelf(twin, dock);

        // Dock Data
        dock.isVertical = dock.hasClass('suey-docker2-vertical');
        dock.isHorizontal = dock.hasClass('suey-docker2-horizontal');
        dock.dockSide = twin.dockSide = side;
        dock.initialSide = (this.initialSide === 'center') ? side : this.initialSide;
        twin.initialSide = (this.contents().initialSide === 'center') ? 'center' : this.initialSide;

        // Collapsed Positioning
        if (dock.isHorizontal) {
            if (dock.initialSide === DOCK_SIDES.LEFT) { dock.setStyle('left', 0); twin.setStyle('left', 0); }
            if (dock.initialSide === DOCK_SIDES.RIGHT) { dock.setStyle('right', 0); twin.setStyle('right', 0); }
        } else if (dock.isVertical) {
            if (dock.initialSide === DOCK_SIDES.TOP) { dock.setStyle('top', 0); twin.setStyle('top', 0); }
            if (dock.initialSide === DOCK_SIDES.BOTTOM) { dock.setStyle('bottom', 0); twin.setStyle('bottom', 0); }
        }

        // Set new 'Contents'
        if (primaryContents) this.contents = function() { return twin; }

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
            if (newWidth != null) dock.setStyle('width', `${newWidth}px`);
            if (newHeight != null) dock.setStyle('height', `${newHeight}px`);
            if (newWidth != null || newHeight != null) dock.dom.dispatchEvent(new Event('resized'));
        }
        Interaction.makeResizeable(dock, resizerDown, resizerMove, null, checkCancel);
        dock.addResizers(this.wantsResizer(side), true /* offset */);

        // Limit Size, Resize Twin
        function resizeTwin() {
            const twin = dock.getTwin();
            let maxSize = Infinity;
            if (twin.dom.children.length > 0) {
                const computed = getComputedStyle(twin.dom);
                if (dock.isVertical) maxSize = dock.parent.getWidth() - parseFloat(computed.minWidth);
                if (dock.isHorizontal) maxSize = dock.parent.getHeight() - parseFloat(computed.minHeight);
            }
            if (dock.isVertical) {
                let newSize = Math.max(dock.getWidth(), dock.minimumSize);
                if (Number.isFinite(maxSize)) newSize = Math.min(newSize, maxSize);
                dock.setStyle('width', `${newSize}px`);
            }
            if (dock.isHorizontal) {
                let newSize = Math.max(dock.getHeight(), dock.minimumSize);
                if (Number.isFinite(maxSize)) newSize = Math.min(newSize, maxSize);
                dock.setStyle('height', `${newSize}px`);
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
        if (this.isPrimary()) {
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
        const wasCollapsed = twin.hasClass('suey-collapsed');
        parent.addToSelf(...children);
        parent.remove(this, twin);
        parent.contents = function() { return parent; }

        // Remove old DockLocations
        parent.hideDockLocations();

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

        // Collapsed?
        if (wasCollapsed) parent.collapseTabs();
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
                if (this.isPrimary()) {
                    leftDock.setStyle('width', '50px');
                    rightDock.setStyle('width', '50px');
                    topDock.setStyle('height', '50px');
                    bottomDock.setStyle('height', '50px');
                    dockLocations.add(leftDock, rightDock, topDock, bottomDock);
                } else {
                    const centerDock = new Div().addClass('suey-dock-location', 'suey-dock-center');
                    topDock.setStyle('left', '20%', 'width', '60%');
                    bottomDock.setStyle('left', '20%', 'width', '60%');
                    dockLocations.add(leftDock, rightDock, topDock, bottomDock, centerDock);
                }
            }
            this.addToSelf(dockLocations);
            this.dockLocations = dockLocations;
        }
        for (const child of this.dockLocations.children) {
            child.removeClass('suey-dock-drop');
        }
    }

    /******************** TABS */

    enableTabs() {
        if (this.isPrimary()) {
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

    collapseTabs() {
        // Disable Animations
        Css.setVariable('--tab-timing', '0');
        // Collapse Class
        this.addClass('suey-collapsed');

        // Find top most dock that wants collapsing (all child docks are collapsed)
        let collpaseDock = this;
        this.traverseAncestors((parent) => {
            if (!parent.hasClass('suey-docker2')) return;
            let childrenCollapsed = true;
            for (const child of parent.children) {
                if (child.hasClass('suey-docker2')) {
                    childrenCollapsed = childrenCollapsed && child.hasClass('suey-collapsed');
                }
            }
            if (childrenCollapsed) collpaseDock = parent;
        });

        // Collapse Docks
        collpaseDock.traverse((child) => {
            if (child.hasClass('suey-docker2') && child.children.length > 0) {
                child.addClass('suey-collapsed');
                if (child.expandSize == null) {
                    if (child.initialSide === 'left' || child.initialSide === 'right') {
                        child.expandSize = child.dom.style.width;
                        child.expandSide = 'width';
                    } else if (child.initialSide === 'top' || child.initialSide === 'bottom') {
                        child.expandSize = child.dom.style.height;
                        child.expandSide = 'height';
                    }
                    child.setStyle(child.expandSide, '0');
                    child.minimumSize = 0;
                    child.dom.dispatchEvent(new Event('resized'));
                }
            }
        }, !this.isPrimary() /* applyToSelf */);
        // Enable animations
        setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);
    }

    expandTabs() {
        // Disable Animations
        Css.setVariable('--tab-timing', '0');

        // Expand Dock
        function removeCollapsed(dock) {
            if (dock && dock.hasClass('suey-docker2')) {
                dock.removeClass('suey-collapsed');
                dock.minimumSize = MINIMUM_NORMAL;
                if (dock.expandSide !== '' && !dock.isPrimary()) {
                    dock.setStyle(dock.expandSide, dock.expandSize);
                }
                dock.expandSize = null;
                dock.expandSide = '';
            }
        }
        if (this.isPrimary()) {
            this.traverse((child) => removeCollapsed(child), false /* applyToSelf */);
        } else {
            this.traverseAncestors((parent) => removeCollapsed(parent), true /* applyToSelf */);
        }

        // Force all Docks to update sizes
        window.dispatchEvent(new Event('resize'));
        // Enable animations
        setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);
    }

}

export { Docker2 };
