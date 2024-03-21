import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { FlexBox } from '../layout/FlexBox.js';
import { Iris } from '../utils/Iris.js';
import { PANEL_STYLES } from '../panels/Panel.js';
import { Resizeable } from '../panels/Resizeable.js';
import { RESIZERS } from '../constants.js';
import { Tabbed } from './Tabbed.js';
import { TAB_SIDES } from './Tabbed.js';

export const DOCK_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    TOP:        'top',
    BOTTOM:     'bottom',
};

class Docker2 extends Resizeable {

    #primary = false;
    #tabbed = null;

    constructor(primary = false, resizers = []) {
        super({ style: PANEL_STYLES.NONE, resizers });
        const self = this;
        this.addClass('suey-docker2');

        this.#primary = primary;
        if (primary) {
            this.addClass('suey-docker2-primary');

            window.addEventListener('resize', () => {
                self.traverse((child) => {
                    child.dom.dispatchEvent(new Event('resized'));
                })
            });
        }
    }

    isPrimary() {
        return this.#primary;
    }

    wantsResizer(side) {
        const resizers = [];
        switch (side) {
            case DOCK_SIDES.LEFT: resizers.push(RESIZERS.RIGHT); break;
            case DOCK_SIDES.RIGHT: resizers.push(RESIZERS.LEFT); break;
            case DOCK_SIDES.TOP: resizers.push(RESIZERS.BOTTOM); break;
            case DOCK_SIDES.BOTTOM: resizers.push(RESIZERS.TOP); break;
        }
        return resizers
    }

    addDock(side = DOCK_SIDES.LEFT, size = '20%') {
        // Create Docks
        const dock = new Docker2(false, this.wantsResizer(side));
        const twin = new Docker2();

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
            twin.add(...this.contents().children);
        }
        this.add(twin, dock);

        // Dock Data
        dock.isVertical = dock.hasClass('suey-docker2-vertical');
        dock.isHorizontal = dock.hasClass('suey-docker2-horizontal');
        dock.dockSide = side;

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

    enableTabs() {
        if (this.#tabbed) return this.#tabbed;
        if (this.#primary) {
            console.warn('Docker2.enableTabs: Cannot enable tabs on the primary dock');
            return undefined;
        }

        // Create 'Tabbed'
        const tabbed = new Tabbed();
        tabbed.setTabSide(this.dockSide, true /* opposite? */)
        tabbed.setStyle('width', '100%');
        tabbed.setStyle('height', (this.isHorizontal) ? '100%' : 'auto');

        // Resize Resizers
        function resizeResizers() {
            const tabbedRect = tabbed.dom.getBoundingClientRect();
            const parentRect = tabbed.parent.dom.getBoundingClientRect();
            const height = `${tabbedRect.height / parentRect.height * 100}%`;
            const width = `${tabbedRect.width / parentRect.width * 100}%`;
            // Find Resizers
            const resizers = [];
            for (const child of tabbed.parent.children) {
                if (child.hasClass('suey-resizer')) resizers.push(child)
            }
            // Resize Resizers
            for (const resizer of resizers) {
                Css.setVariable('--width', width, resizer);
                Css.setVariable('--height', height, resizer);
            }
        }
        tabbed.dom.addEventListener('resized', resizeResizers);
        tabbed.dom.addEventListener('tab-changed', () => {
            if (tabbed.tabCount() === 0) {
                if (tabbed.parent.hasClass('suey-docker2')) tabbed.parent.removeDock();
            } else {
                resizeResizers();
            }
        });

        // Save, Add, Return
        this.#tabbed = tabbed;
        this.add(tabbed);
        return tabbed;
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

        // Move the contents of the twin to the parent, remove docks
        const children = [];
        for (const child of twin.children) {
            if (!child.hasClass('suey-resizer')) {
                children.push(child);
            }
        }
        parent.addToSelf(...children);
        parent.remove(this, twin);
        parent.contents = function() { return parent; }

        // Add back new Resizer
        parent.addResizers(parent.wantsResizer(parent.dockSide));

        // Set Tabbed Sizes
        for (const child of parent.children) {
            if (child.hasClass('suey-tabbed')) {
                child.setStyle('height', (parent.isHorizontal) ? '100%' : 'auto');
            }
        }

        // Resize the parent
        parent.traverse((child) => { child.dom.dispatchEvent(new Event('resized')); })
    }

}

export { Docker2 };
