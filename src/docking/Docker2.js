import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
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

const _clr = new Iris();

class Docker2 extends Resizeable {

    #primary = false;
    #tabbed = null;

    constructor(primary = false, resizers = []) {
        super({ style: PANEL_STYLES.NONE, resizers });
        this.addClass('suey-docker2');

        this.#primary = primary;
        if (primary) {
            window.addEventListener('resize', () => {
                for (const child of this.children) child.dom.dispatchEvent(new Event('resized'));
            });
        } else {
            this.dom.addEventListener('resized', () => {
                for (const child of this.children) child.dom.dispatchEvent(new Event('resized'));
            });
        }
    }

    addDock(side = DOCK_SIDES.LEFT, size = '20%') {
        const parent = this.contents();
        const resizers = [];
        switch (side) {
            case DOCK_SIDES.LEFT: resizers.push(RESIZERS.RIGHT); break;
            case DOCK_SIDES.RIGHT: resizers.push(RESIZERS.LEFT); break;
            case DOCK_SIDES.TOP: resizers.push(RESIZERS.BOTTOM); break;
            case DOCK_SIDES.BOTTOM: resizers.push(RESIZERS.TOP); break;
        }
        const dock = new Docker2(false, resizers);//.setStyle('background-color', `rgba(${_clr.setRGBF(1, 0, 0).rgbString(0.25)})`);
        const twin = new Docker2();

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
        if (!this.#primary) {
            twin.add(...this.contents().children);
        }
        this.add(twin, dock);

        dock.isVertical = dock.hasClass('suey-docker2-vertical');
        dock.isHorizontal = dock.hasClass('suey-docker2-horizontal');
        dock.dockSide = side;

        function sizeTwin() {
            if (dock.isVertical) twin.setStyle('width', `${parent.getWidth() - dock.getWidth()}px`);
            if (dock.isHorizontal) twin.setStyle('height', `${parent.getHeight() - dock.getHeight()}px`);
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
            if (dock.isVertical) {
                const dockWidth = Math.max(100, Math.min(dock.getWidth(), parentSize));
                dock.setStyle('width', `${dockWidth}px`);
            }
            if (dock.isHorizontal) {
                const dockHeight = Math.max(100, Math.min(dock.getHeight(), parentSize));
                dock.setStyle('height', `${dockHeight}px`);
            }
            sizeTwin();
        });

        // Set new 'Contents'
        this.contents = function() { return twin; }

        // Return new Dock
        return dock;
    }

    enableTabs() {
        if (this.#tabbed) return this.#tabbed;
        const self = this;

        // Create 'Tabbed'
        const tabbed = new Tabbed();
        tabbed.setTabSide(this.dockSide, true /* opposite? */)
        tabbed.setStyle('width', '100%');
        tabbed.setStyle('height', (this.isHorizontal) ? '100%' : 'fit-content');

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
        tabbed.dom.addEventListener('tab-changed', resizeResizers);
        tabbed.dom.addEventListener('resized', resizeResizers);

        // Save, Add, Return
        this.#tabbed = tabbed;
        this.add(tabbed);
        return tabbed;
    }

}

export { Docker2 };
