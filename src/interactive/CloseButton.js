import { Button } from '../input/Button.js';
import { ShadowBox } from '../layout/ShadowBox.js';

import { IMAGE_CLOSE } from '../constants.js';

export const CLOSE_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
    BOTH:       'both',
    NONE:       'none',
}

class CloseButton extends Button {

    constructor(parent, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        if (! parent || ! parent.isElement) return console.warn(`CloseButton: Missing parent element`);

        super();
        const self = this;
        this.setClass('CloseButton');
        this.addClass('PanelButton');

        const closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow().addClass('CloseImage');
        this.add(closeImageBox);

        this.dom.setAttribute('tooltip', 'Close Panel');
        this.setStyle(
            'min-height', `${scale}em`,
            'min-width', `${scale}em`,
        );

        const sideways = `${0.8 - ((scale + 0.28571) / 2) + offset}em`;
        this.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);
        this.setStyle((closeSide === CLOSE_SIDES.LEFT) ? 'left' : 'right', sideways);

        if (closeSide === CLOSE_SIDES.BOTH) {
            let lastSide = CLOSE_SIDES.RIGHT;

            parent.dom.addEventListener('pointermove', function(event) {
                const rect = parent.dom.getBoundingClientRect();
                const middle = rect.left + (rect.width / 2);
                const x = event.pageX;

                let changeSide = CLOSE_SIDES.NONE;
                if (x > middle && lastSide !== CLOSE_SIDES.RIGHT) changeSide = CLOSE_SIDES.RIGHT;
                else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) changeSide = CLOSE_SIDES.LEFT;

                if (changeSide !== CLOSE_SIDES.NONE) {
                    self.addClass('ItemHidden');
                    setTimeout(() => {
                        self.dom.style.removeProperty('left');
                        self.dom.style.removeProperty('right');
                        self.setStyle(changeSide, sideways);
                        self.removeClass('ItemHidden');
                    }, 100);
                    lastSide = changeSide;
                }
            });
        }

        this.dom.addEventListener('click', () => parent.hide());
        parent.dom.addEventListener('pointerenter', () => self.addClass('ItemShown'));
        parent.dom.addEventListener('pointerleave', () => self.removeClass('ItemShown'));
    }

}

export { CloseButton };
