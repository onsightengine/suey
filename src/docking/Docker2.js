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

    #tabbed = null;

    constructor(resizers = []) {
        super({ style: PANEL_STYLES.NONE, resizers });
        this.addClass('suey-docker2');

        if (resizers.length === 0) {
            window.addEventListener('resize', () => {
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
        const dock = new Docker2(resizers).setStyle('background-color', `rgba(${_clr.setRGBF(1, 0, 0).rgbString(0.25)})`);
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

        // Create 'Tabbed'
        let options = {};
        if (this.dockSide = DOCK_SIDES.LEFT) { options.tabSide = TAB_SIDES.RIGHT; options.resizers = [ RESIZERS.RIGHT ]; }
        if (this.dockSide = DOCK_SIDES.RIGHT) { options.tabSide = TAB_SIDES.LEFT; options.resizers = [ RESIZERS.LEFT ]; }
        if (this.dockSide = DOCK_SIDES.TOP) { options.tabSide = TAB_SIDES.BOTTOM; options.resizers = [ RESIZERS.BOTTOM ]; }
        if (this.dockSide = DOCK_SIDES.BOTTOM) { options.tabSide = TAB_SIDES.TOP; options.resizers = [ RESIZERS.TOP ]; }
        const tabbed = new Tabbed(options);
        tabbed.setStyle('width', '100%');
        tabbed.setStyle('height', '100%');

        // Save, Add, Return
        this.#tabbed = tabbed;
        this.add(tabbed);
        return tabbed;
    }

}

export { Docker2 };
