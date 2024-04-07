import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { FlexSpacer } from '../layout/FlexSpacer.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel } from '../panels/Panel.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { Tabbed } from './Tabbed.js';
import { Window } from './Window.js';

import { DOCK_SIDES } from '../constants.js';
import { IMAGE_ADD } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { RESIZERS } from '../constants.js';

const MINIMUM_NORMAL = 100;

class Docker extends Panel {

    #primary = false;

    constructor(primary = true) {
        super({ style: PANEL_STYLES.NONE });
        const self = this;
        this.addClass('suey-docker');

        // Properties
        this.initialSide = 'center';
        this.dockSide = 'center';
        this.isHorizontal = false;
        this.isVertical = false;
        this.minimumSize = MINIMUM_NORMAL;
        this.expandSize = null;
        this.expandSide = '';

        // Primary Dock
        this.#primary = primary;
        if (primary) {
            this.addClass('suey-docker-primary');
            this.initialSide = 'center';
            window.addEventListener('resize', () => {
                for (const child of self.children) {
                    child.dom.dispatchEvent(new Event('resized'));
                }
            });
        }
    }

    /******************** PRIMARY */

    getPrimary() {
        let primary = undefined;
        this.traverseAncestors((parent) => {
            if (!primary && parent.hasClass('suey-docker-primary')) primary = parent;
        }, true /* applyToSelf */);
        return primary;
    }

    isPrimary() {
        return this.#primary;
    }

    /******************** DOCK */

    clearDocks() {
        const self = this;
        this.remove(...this.children);
        this.contents = function() { return self; };
    }

    /**
     * Splits the current Docker in two and adds new Docker children.
     * @param {DOCK_SIDES} side Side to add the new Docker.
     * @param {Number|String} size Starting size of new Docker.
     * @param {Boolean} primaryContents If true, adds new dock to the innermost 'center' dock. Otherwise, adds to self (parent most dock).
     * @returns Newly added Docker.
     */
    addDock(side = DOCK_SIDES.LEFT, size = '20%', primaryContents = true) {
        if (!Object.values(DOCK_SIDES).includes(side)) {
            console.warn(`Docker.addDock(): Unkown dock side '${side}', defaulting to 'left'`);
            side = 'left';
        }

        // Create Docks
        const dock = new Docker(false /* primary */);
        const twin = new Docker(false /* primary */);

        // Collapsed?
        if (this.hasClass('suey-collapsed')) {
            dock.addClass('suey-collapsed');
            twin.addClass('suey-collapsed');
        }

        // Initial Size
        switch (side) {
            case DOCK_SIDES.LEFT:
            case DOCK_SIDES.RIGHT:
                dock.addClass('suey-docker-vertical').setStyle('width', Css.toPx(size, this.dom, 'w'));
                twin.addClass('suey-docker-vertical');
                if (side === DOCK_SIDES.LEFT) { dock.setStyle('left', 0); twin.setStyle('right', 0); }
                if (side === DOCK_SIDES.RIGHT) { dock.setStyle('right', 0); twin.setStyle('left', 0); }
                break;
            case DOCK_SIDES.TOP:
            case DOCK_SIDES.BOTTOM:
                dock.addClass('suey-docker-horizontal').setStyle('height', Css.toPx(size, this.dom, 'h'));
                twin.addClass('suey-docker-horizontal');
                if (side === DOCK_SIDES.TOP) { dock.setStyle('top', 0); twin.setStyle('bottom', 0); }
                if (side === DOCK_SIDES.BOTTOM) { dock.setStyle('bottom', 0); twin.setStyle('top', 0); }
                break;
        }

        // Split Parent, Add Docks
        const childrenOf = primaryContents ? this.contents() : this;
        const children = [];
        for (const child of childrenOf.children) {
            // Only move dividable content (not Window, Resizers, DockLocations, etc.)
            if (child.hasClass('suey-docker') ||
                child.hasClass('suey-tabbed') ||
                child.hasClass('suey-flex-spacer')) {
                children.push(child);
                if (child.hasClass('suey-flex-spacer)')) child.addClass('suey-hidden');
            }
        }
        twin.add(...children);
        if (primaryContents) this.add(twin, dock);
        else this.addToSelf(twin, dock);

        // Dock Data
        dock.isVertical = twin.isVertical = dock.hasClass('suey-docker-vertical');
        dock.isHorizontal = twin.isHorizontal = dock.hasClass('suey-docker-horizontal');
        dock.dockSide = side;
        twin.dockSide = this.dockSide;
        dock.initialSide = (this.initialSide === 'center') ? side : this.initialSide;
        twin.initialSide = this.initialSide;

        dock.addClass(`initalside-${dock.initialSide}`); dock.addClass(`dockside-${dock.dockSide}`);
        twin.addClass(`initalside-${twin.initialSide}`); twin.addClass(`dockside-${twin.dockSide}`);

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

        // Initial Size
        dock.on('resized', () => {
            dock.updateSize(); // update twin size
        });
        dock.updateSize();

        // Rebuild Tabbed Resizers
        this.buildResizers();

        // Return new Dock
        return dock;
    }

    getTwin() {
        const parent = this.parent;
        if (!parent || !parent.isElement || !parent.hasClass('suey-docker')) return undefined;
        const twin = parent.children.find(child => child !== this && child.hasClass('suey-docker'));
        return twin;
    }

    removeDock() {
        // Checks
        if (this.isPrimary()) {
            console.warn('Docker.removeDock(): Cannot remove the primary dock');
            return;
        }
        const parent = this.parent;
        if (!parent || !parent.isElement || !parent.hasClass('suey-docker')) {
            console.warn('Docker.removeDock(): Dock does not have a valid parent');
            return;
        }
        const twin = this.getTwin();
        if (!twin) {
            console.warn('Docker.removeDock(): Could not find the twin Docker');
            return;
        }

        // Move contents of the twin to the parent, remove this level docks
        const children = [];
        for (const child of twin.children) {
            if (child.hasClass('suey-tabbed') ||
                child.hasClass('suey-docker') ||
                child.hasClass('suey-flex-spacer')) {
                children.push(child);
                if (child.hasClass('suey-flex-spacer')) child.removeClass('suey-hidden');
            }
        }
        const wasCollapsed = twin.hasClass('suey-collapsed');
        const primary = this.getPrimary();
        parent.addToSelf(...children);
        parent.remove(this, twin);
        parent.contents = function() { return parent; }

        // Check Primary Contents
        if (primary.contents() === twin || primary.contents() === this) {
            primary.contents = function() { return parent; }
        }

        // Remove old DockLocations
        parent.hideDockLocations();

        // Set Tabbed Sizes
        for (const child of parent.children) {
            if (child.hasClass('suey-tabbed')) {
                child.setStyle('height', (parent.isHorizontal) ? '100%' : 'auto');
            }
        }

        // Resize the parent
        parent.traverse((child) => child.dom.dispatchEvent(new Event('resized')));

        // Rebuild Tabbed Resizers
        parent.buildResizers();

        // Collapsed?
        if (wasCollapsed) parent.collapseTabs();
    }

    /******************** TABS */

    enableTabs(flexBefore = false) {
        if (this.isPrimary()) {
            console.warn('Docker.enableTabs(): Cannot enable tabs on the primary dock');
            return undefined;
        }

        // See if Tabbed already exists
        let tabbed = Dom.childWithClass(this.contents(), 'suey-tabbed', false /* recursive? */);
        if (tabbed) return tabbed;

        // Create New Tabbed
        tabbed = new Tabbed({ tabSide: this.initialSide, opposite: true, closeButton: true });
        const wantsTall = this.dockSide === 'top' || this.dockSide === 'bottom';
        tabbed.setStyle('width', '100%');
        tabbed.setStyle('height', wantsTall ? '100%' : 'auto');

        // Event: 'tabs-changed'
        tabbed.on('tabs-changed', () => {
            if (tabbed.tabCount() === 0 && tabbed.parent.hasClass('suey-docker')) {
                tabbed.parent.removeDock();
            }
        });

        // Add Some Spacing?
        if (flexBefore) this.add(new FlexSpacer());

        // Add Tabbed
        this.add(tabbed);

        // Rebuild Tabbed Resizers
        this.buildResizers();

        return tabbed;
    }

    collapseTabs() {
        // Disable Animations
        Css.setVariable('--tab-timing', '0');

        // Collapse Class
        if (!this.isPrimary()) this.addClass('suey-collapsed');

        // Find top most dock that wants collapsing (all child docks are collapsed)
        let collpaseDock = this;
        this.traverseAncestors((parent) => {
            if (!parent.hasClass('suey-docker')) return;
            let childrenCollapsed = true;
            for (const child of parent.children) {
                if (child.hasClass('suey-docker')) {
                    childrenCollapsed = childrenCollapsed && child.hasClass('suey-collapsed');
                }
            }
            if (childrenCollapsed) collpaseDock = parent;
        });

        // Collapse Docks
        collpaseDock.traverse((child) => {
            if (child.hasClass('suey-docker') && child.children.length > 0) {
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
            if (dock && dock.hasClass('suey-docker')) {
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

    /******************** RESIZERS */

    updateSize(width, height) {
        if (width != null) this.setStyle('width', `${width}px`);
        if (height != null) this.setStyle('height', `${height}px`);
        if (!this.parent) return;

        // Resize Twin
        const twin = this.getTwin();
        if (!twin) return;
        let maxSize = Infinity;
        if (twin.dom.children.length > 0) {
            const computed = getComputedStyle(twin.dom);
            if (this.isVertical) maxSize = this.parent.getWidth() - parseFloat(computed.minWidth);
            if (this.isHorizontal) maxSize = this.parent.getHeight() - parseFloat(computed.minHeight);
        }
        if (this.isVertical) {
            let newSize = Math.max(this.getWidth(), this.minimumSize);
            if (Number.isFinite(maxSize)) newSize = Math.min(newSize, maxSize);
            this.setStyle('width', `${newSize}px`);
        }
        if (this.isHorizontal) {
            let newSize = Math.max(this.getHeight(), this.minimumSize);
            if (Number.isFinite(maxSize)) newSize = Math.min(newSize, maxSize);
            this.setStyle('height', `${newSize}px`);
        }
        if (this.isVertical) twin.setStyle('width', `${this.parent.getWidth() - this.getWidth()}px`);
        if (this.isHorizontal) twin.setStyle('height', `${this.parent.getHeight() - this.getHeight()}px`);
        for (const child of this.children) child.dom.dispatchEvent(new Event('resized'));
        for (const child of twin.children) child.dom.dispatchEvent(new Event('resized'));

        // Emit new event?
        if (width != null || height != null) this.dom.dispatchEvent(new Event('resized'));
    }

    /** Recursively rebuild Resizers on Tabbed children */
    buildResizers() {
        this.traverse((docker) => {
            const tabbedElements = docker.children.filter(child => child.hasClass('suey-tabbed'));
            for (const tabbed of tabbedElements) {
                // Remove Resizers
                const resizers = tabbed.children.filter(child => child.hasClass('suey-resizer'));
                tabbed.remove(...resizers);

                // Add Resizers
                function createResizer(resizerClass, dock) {
                    const resizer = new Div().addClass('suey-resizer', resizerClass);
                    Css.setVariable('--resize-size', '1em', resizer);
                    Css.setVariable('--offset', '0em', resizer);
                    let downX, downY, lastX, lastY, isDown = false;
                    const rect = {};
                    function resizePointerDown(event) {
                        if (event.button !== 0) return;
                        event.stopPropagation();
                        event.preventDefault();
                        resizer.dom.setPointerCapture(event.pointerId);
                        isDown = true;
                        downX = event.pageX;
                        downY = event.pageY;
                        lastX = event.pageX;
                        lastY = event.pageY;
                        document.addEventListener('pointerup', resizePointerUp);
                        document.dispatchEvent(new Event('closemenu'));
                        rect.width = dock.getWidth();
                        rect.height = dock.getHeight();
                    }
                    function resizePointerMove(event) {
                        if (!isDown) return;
                        event.stopPropagation();
                        event.preventDefault();
                        if (event.isTrusted /* not generated programmatically */) {
                            lastX = event.pageX;
                            lastY = event.pageY;
                        }
                        const diffX = lastX - downX;
                        const diffY = lastY - downY;
                        if (!dock.parent || !dock.parent.isElement) return;
                        let newWidth = null;
                        let newHeight = null;
                        if (resizer && resizer.hasClassWithString('left')) newWidth = rect.width - diffX;
                        if (resizer && resizer.hasClassWithString('right')) newWidth = rect.width + diffX;
                        if (resizer && resizer.hasClassWithString('top')) newHeight = rect.height - diffY;
                        if (resizer && resizer.hasClassWithString('bottom')) newHeight = rect.height + diffY;
                        dock.updateSize(newWidth, newHeight);
                    }
                    function resizePointerUp(event) {
                        event.stopPropagation();
                        event.preventDefault();
                        resizer.dom.releasePointerCapture(event.pointerId);
                        isDown = false;
                        document.removeEventListener('pointerup', resizePointerUp);
                    }
                    resizer.on('pointerdown', resizePointerDown);
                    resizer.on('pointermove', resizePointerMove);
                    return resizer;
                }

                // Search for Docks to attach Resizers
                const sizers = [ RESIZERS.LEFT , RESIZERS.RIGHT, RESIZERS.TOP, RESIZERS.BOTTOM ];
                const myRect = docker.dom.getBoundingClientRect();
                let parent = docker.parent;
                while (sizers.length > 0 && parent && parent.hasClass('suey-docker')) {
                    for (const child of parent.children) {
                        if (child === docker) continue;
                        if (!child.hasClass('suey-docker')) continue;
                        function addResizer(side) {
                            const twin = child.getTwin();
                            if (twin) tabbed.addToSelf(createResizer(`suey-resizer-${side}`, twin)); else console.log('missing twin!');
                            sizers.splice(sizers.indexOf(side), 1);
                        }
                        const childRect = child.dom.getBoundingClientRect();
                        if (sizers.includes(RESIZERS.LEFT) && childRect.left < myRect.left) addResizer(RESIZERS.LEFT);
                        if (sizers.includes(RESIZERS.RIGHT) && childRect.right > myRect.right) addResizer(RESIZERS.RIGHT);
                        if (sizers.includes(RESIZERS.TOP) && childRect.top < myRect.top) addResizer(RESIZERS.TOP);
                        if (sizers.includes(RESIZERS.BOTTOM) && childRect.bottom > myRect.bottom) addResizer(RESIZERS.BOTTOM);
                    }
                    parent = parent.parent;
                }

            }
        }, true /* applyToSelf */);
    }

    /******************** DROP LOCATIONS */

    hideDockLocations() {
        this.removeClass('suey-dock-self');
        if (this.dockLocations) {
            this.remove(this.dockLocations);
            this.dockLocations = undefined;
        }
    }

    showDockLocations(edgesOnly = false) {
        if (!this.dockLocations) {
            const dockLocations = new Div().addClass('suey-dock-locations');
            if (this.initialSide === 'left' || this.initialSide === 'right') {
                if (this.getHeight() > 160) {
                    const topDock = new Div().addClass('suey-dock-location', 'suey-dock-split-top');
                    const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-split-bottom');
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-horizontal');
                    dockLocations.add(topDock, bottomDock, middleDock);
                } else {
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-horizontal');
                    middleDock.setStyle('top', '0%', 'height', '100%');
                    dockLocations.add(middleDock);
                }
            } else if (this.initialSide === 'top' || this.initialSide === 'bottom') {
                if (this.getWidth() > 200) {
                    const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-split-left');
                    const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-split-right');
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-vertical');
                    dockLocations.add(leftDock, rightDock, middleDock);
                } else {
                    const middleDock = new Div().addClass('suey-dock-location', 'suey-dock-middle', 'suey-dock-middle-vertical');
                    middleDock.setStyle('left', '0%', 'width', '100%');
                    dockLocations.add(middleDock);
                }
            } else /* if (this.initialSide === 'center') */ {
                const leftDock = new Div().addClass('suey-dock-location', 'suey-dock-left');
                const rightDock = new Div().addClass('suey-dock-location', 'suey-dock-right');
                const topDock = new Div().addClass('suey-dock-location', 'suey-dock-top');
                const bottomDock = new Div().addClass('suey-dock-location', 'suey-dock-bottom');
                if (edgesOnly) {
                    const edgeSize = '2em';
                    leftDock.setStyle('width', edgeSize);
                    rightDock.setStyle('width', edgeSize);
                    topDock.setStyle('height', edgeSize);
                    bottomDock.setStyle('height', edgeSize);
                    dockLocations.add(leftDock, rightDock, topDock, bottomDock);
                } else {
                    topDock.setStyle('left', '20%', 'width', '60%');
                    bottomDock.setStyle('left', '20%', 'width', '60%');
                    const centerDock = new Div().addClass('suey-dock-location', 'suey-dock-center');
                    const imageBox = new ShadowBox(IMAGE_ADD).evenShadow();
                    imageBox.addClass('suey-complement-colorize');
                    imageBox.setStyle('width', '20%', 'height', '20%');
                    centerDock.add(imageBox);
                    dockLocations.add(leftDock, rightDock, topDock, bottomDock, centerDock);
                }
            }
            this.addToSelf(dockLocations);
            this.dockLocations = dockLocations;
        }
        this.removeClass('suey-dock-self');
        for (const child of this.dockLocations.children) {
            child.removeClass('suey-dock-drop');
            child.removeClass('suey-dock-self');
        }
    }

    /******************** FLOATERS */

    addFloater(floater, location = 'center') {
        let dock = undefined;
        if (location === 'center' || this.isPrimary()) {
            dock = new Window({ title: floater.id, width: '50%', height: '70%' });
            this.getPrimary().addToSelf(window);
            window.display();
        } else {
            dock = this.enableTabs();
        }
        dock.addTab(floater);
        dock.selectTab(floater.id);
    }

    floaters() {
        return Dom.childrenWithClass(this, 'suey-floater', true /* recursive? */);
    }

    getFloaterByID(id) {
        if (id == undefined || id === '') return undefined;
        const floaters = this.floaters();
        for (const floater of floaters) {
            if (floater.id === id) return floater;
        }
        return undefined;
    }

}

export { Docker };
