import { Button } from '../input/Button.js';
import { ShadowBox } from '../layout/ShadowBox.js';

import { IMAGE_CLOSE } from '../constants.js';

export const CLOSE_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
    BOTH:       'both',
}

class CloseButton extends Button {

    constructor(parent, closeSide = CLOSE_SIDES.BOTH, sizeScale = 1.0, offsetScale = 1.0) {
        if (! parent || ! parent.isElement) {
            console.warn(`CloseButton: A parent osui element to be attached to is required.`);
            return;
        }

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
            'min-height', `${sizeScale}em`,
            'min-width', `${sizeScale}em`,
        );

        const offset = `${sizeScale * offsetScale * 0.1}em`;
        this.setStyle('top', offset);
        this.setStyle((closeSide === CLOSE_SIDES.RIGHT) ? 'right' : 'left', offset);

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
                        self.setStyle('right', offset);
                        opacityGhost();
                    }, 200);
                    lastSide = CLOSE_SIDES.RIGHT;
                } else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) {
                    opacityTransparent();
                    setTimeout(() => {
                        self.dom.style.removeProperty('right');
                        self.setStyle('left', offset);
                        opacityGhost();
                    }, 200);
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
