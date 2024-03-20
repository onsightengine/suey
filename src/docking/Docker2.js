import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
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

class Docker2 extends Div {

    #tabbed = null;

    constructor() {
        super();
        this.addClass('suey-docker2');
    }

    addDock(side = DOCK_SIDES.LEFT, size = '20%') {
        const split = new Docker2();
        const contents = new Docker2();
        split.twin = contents;

        // TEMP: Color
        split.setStyle('background-color', `rgba(${_clr.setRandom().rgbString(0.5)})`);

        // Initial Size
        switch (side) {
            case DOCK_SIDES.LEFT:
            case DOCK_SIDES.RIGHT:
                this.contents().addClass('suey-docker2-vertical');
                split.addClass('suey-docker2-vertical');
                split.setStyle('width', Css.toPx(size, this.dom, 'w'));
                if (side === DOCK_SIDES.LEFT) {
                    this.contents().addClass('suey-docker2-right');
                    split.addClass('suey-docker2-left');
                    this.add(split, contents);
                }
                if (side === DOCK_SIDES.RIGHT) {
                    this.contents().addClass('suey-docker2-left');
                    split.addClass('suey-docker2-right');
                    this.add(contents, split);
                }
                break;
            case DOCK_SIDES.TOP:
            case DOCK_SIDES.BOTTOM:
                this.contents().addClass('suey-docker2-horizontal');
                split.addClass('suey-docker2-horizontal');
                split.setStyle('height', Css.toPx(size, this.dom, 'h'));
                if (side === DOCK_SIDES.TOP) {
                    this.contents().addClass('suey-docker2-bottom');
                    split.addClass('suey-docker2-top');
                    this.add(split, contents);
                }
                if (side === DOCK_SIDES.BOTTOM) {
                    this.contents().addClass('suey-docker2-top');
                    split.addClass('suey-docker2-bottom');
                    this.add(contents, split);
                }
                break;
        }

        // Set new 'Contents'
        this.contents = function() { return contents; }

        // Return new Dock
        return split;
    }

    enableTabs(minSize = 100) {
        if (this.#tabbed) return this.#tabbed;
        if (!this.twin) return null;
        const twin = this.twin;
        const parent = this.parent;

        // Create 'Tabbed'
        let options = {};
        if (this.hasClass('suey-docker2-left') || this.hasClass('suey-docker2-right')) {
            options.startWidth = parseFloat(getComputedStyle(this.dom).width);
            options.minWidth = minSize;
            if (this.hasClass('suey-docker2-left')) {
                options.tabSide = TAB_SIDES.RIGHT;
                options.resizers = [ RESIZERS.RIGHT ];
            } else if (this.hasClass('suey-docker2-right')) {
                options.tabSide = TAB_SIDES.LEFT;
                options.resizers = [ RESIZERS.LEFT ];
            }
            this.setStyle('width', 'fit-content');
        } else {
            options.startHeight = parseFloat(getComputedStyle(this.dom).height);
            options.minHeight = minSize;
            if (this.hasClass('suey-docker2-top')) {
                options.tabSide = TAB_SIDES.BOTTOM;
                options.resizers = [ RESIZERS.BOTTOM ];
            } else if (this.hasClass('suey-docker2-bottom')) {
                options.tabSide = TAB_SIDES.TOP;
                options.resizers = [ RESIZERS.TOP ];
            }
            this.setStyle('height', 'fit-content');
        }
        const tabbed = new Tabbed(options);

        // Limit Resize
        tabbed.dom.addEventListener('resized', () => {
            if (!parent || !parent.isElement) return;
            if (options.tabSide === TAB_SIDES.RIGHT || options.tabSide === TAB_SIDES.LEFT) {
                const availWidth = parent.getWidth() - twin.getWidth();
                if (tabbed.getWidth() > availWidth) tabbed.setStyle('width', Css.toEm(availWidth, tabbed.dom));
            }
            if (options.tabSide === TAB_SIDES.TOP || options.tabSide === TAB_SIDES.BOTTOM) {
                const availHeight = parent.getHeight() - twin.getHeight();
                if (tabbed.getHeight() > availHeight) tabbed.setStyle('height', Css.toEm(availHeight, tabbed.dom));
            }
        });

        // Save, Add, Return
        this.#tabbed = tabbed;
        this.add(tabbed);
        return tabbed;
    }

}

export { Docker2 };
