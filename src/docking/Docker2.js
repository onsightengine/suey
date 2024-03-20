import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
import { Tabbed } from './Tabbed.js';

export const DOCK_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    TOP:        'top',
    BOTTOM:     'bottom',
};

const _clr = new Iris();

class Docker2 extends Div {

    constructor() {
        super();
        this.addClass('suey-docker2');
    }

    addDock(side = DOCK_SIDES.LEFT, size = '20%') {
        const split = new Docker2();
        const contents = new Docker2();

        // TEMP: Color
        split.setStyle('background-color', `rgba(${_clr.setRandom().rgbString(0.5)})`);

        // Initial Size
        let splitSize;
        switch (side) {
            case DOCK_SIDES.LEFT:
            case DOCK_SIDES.RIGHT:
                this.contents().addClass('suey-docker2-vertical');
                split.addClass('suey-docker2-vertical');
                split.setStyle('width', Css.toPx(size, this.dom, 'w'));
                if (side === DOCK_SIDES.LEFT) this.add(split, contents);
                if (side === DOCK_SIDES.RIGHT) this.add(contents, split);
                break;

            case DOCK_SIDES.TOP:
            case DOCK_SIDES.BOTTOM:
                this.contents().addClass('suey-docker2-horizontal');
                split.addClass('suey-docker2-horizontal');
                split.setStyle('height', Css.toPx(size, this.dom, 'h'));
                if (side === DOCK_SIDES.TOP) this.add(split, contents);
                if (side === DOCK_SIDES.BOTTOM) this.add(contents, split);
                break;
        }

        // Set new 'Contents'
        this.contents = function() { return contents; }

        // Return new Dock
        return split;
    }

    addTabbed() {
        const tabbed = new Tabbed();

        // split.dom.addEventListener('resized', (event) => {
        //     console.log('Resized', event);
        // })

        return Tabbed;
    }

}

export { Docker2 };
