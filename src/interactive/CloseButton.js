import { Button } from '../input/Button.js';
import { ShadowBox } from '../layout/ShadowBox.js';

import { IMAGE_CLOSE } from '../constants.js';

export const CLOSE_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
    BOTH:       'both',
}

class CloseButton extends Button {

    constructor(parent, closeSide = CLOSE_SIDES.BOTH, scale = 1.3, offset = 0) {
        if (! parent || ! parent.isElement) return console.warn(`CloseButton: Missing parent osui element to be attached to`);

        super();
        const self = this;
        this.setClass('CloseButton');

        const closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow();
        this.add(closeImageBox);

        function opacityTransparent() {
            self.setStyle('opacity', '0');
        }

        function opacityGhost() {
            self.setStyle('opacity', '1.0');
            self.setStyle('filter', 'brightness(100%)');
        }

        function opacityOpaque() {
            self.setStyle('opacity', '1.0');
            self.setStyle('filter', 'brightness(125%)');
        }

        function clickedClose() {
            parent.setDisplay('none');
            parent.dom.dispatchEvent(new Event('closed'));
        }

        this.dom.setAttribute('tooltip', 'Close Panel');
        this.setStyle(
            'min-height', `${scale}em`,
            'min-width', `${scale}em`,
        );

        const sideways = `${0.8 - ((scale + 0.28571) / 2) + offset}em`;
        this.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);
        this.setStyle((closeSide === CLOSE_SIDES.RIGHT) ? 'right' : 'left', sideways);

        if (closeSide === CLOSE_SIDES.BOTH) {
            let lastSide = CLOSE_SIDES.LEFT;
            parent.dom.addEventListener('pointermove', function(event) {
                const rect = parent.dom.getBoundingClientRect();
                const middle = rect.left + (rect.width / 2);
                const x = event.pageX;
                if (x > middle && lastSide !== CLOSE_SIDES.RIGHT) {
                    opacityTransparent();
                    setTimeout(() => {
                        self.dom.style.removeProperty('left');
                        self.setStyle('right', sideways);
                        opacityGhost();
                    }, 100);
                    lastSide = CLOSE_SIDES.RIGHT;
                } else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) {
                    opacityTransparent();
                    setTimeout(() => {
                        self.dom.style.removeProperty('right');
                        self.setStyle('left', sideways);
                        opacityGhost();
                    }, 100);
                    lastSide = CLOSE_SIDES.LEFT;
                }
            });
        }

        this.dom.addEventListener('pointerenter', opacityOpaque);
        this.dom.addEventListener('pointerleave', opacityGhost);
        this.dom.addEventListener('click', clickedClose);
        parent.dom.addEventListener('pointerenter', opacityGhost);
        parent.dom.addEventListener('pointerleave', opacityTransparent);
    }

}

export { CloseButton };
