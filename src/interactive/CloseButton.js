import { Button } from '../input/Button.js';
import { ShadowBox } from '../layout/ShadowBox.js';

import { IMAGE_CLOSE } from '../constants.js';

export const CLOSE_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
}

class CloseButton extends Button {

    constructor(parent, closeSide = CLOSE_SIDES.LEFT, sizeScale = 1.1, offsetScale = 1.0) {
        if (! parent || ! parent.isElement) {
            console.warn(`CloseButton: A parent osui element to be attached to is required.`);
            return;
        }

        super();
        const self = this;
        let closeImageBox;

        function opacityTransparent() {
            self.setStyle('opacity', '0');
        }

        function opacityGhost() {
            self.setStyle('opacity', '1.0');
            closeImageBox.setStyle('filter', 'var(--drop-shadow) brightness(100%)');
        }

        function opacityOpaque() {
            self.setStyle('opacity', '1.0');
            closeImageBox.setStyle('filter', 'var(--drop-shadow) brightness(125%)');
        }

        function clickedClose() {
            parent.setDisplay('none');
            parent.dom.dispatchEvent(new Event('closed'));
        }

        this.dom.setAttribute('tooltip', 'Close Panel');

        closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow();
        closeImageBox.setStyle(
            'width', '105%',
            'height', '105%',
            'transition', 'filter var(--menu-timing) ease-in-out',
        );
        this.add(closeImageBox);

        this.setStyle(
            'display', '',
            'background', 'rgb(var(--background-dark))',
            'box-shadow', 'none',
            'border', 'none',
            'border-radius', '100%',
            'outline', 'none',
            'min-height', `${sizeScale}em`,
            'min-width', `${sizeScale}em`,
            'position', 'absolute',
            'opacity', '0',
            'overflow', 'visible',
            'transition', 'opacity var(--menu-timing) ease-in-out',
            'z-index', '1001', /* Close Button */
        );

        if (closeSide === CLOSE_SIDES.RIGHT) {
            this.setStyle('right', `${sizeScale * offsetScale * 0.1}em`);
            this.setStyle('top', `${sizeScale * offsetScale * 0.1}em`);
        } else {
            this.setStyle('left', `${sizeScale * offsetScale * 0.1}em`);
            this.setStyle('top', `${sizeScale * offsetScale * 0.1}em`);
        }

        this.dom.addEventListener('pointerenter', opacityOpaque);
        this.dom.addEventListener('pointerleave', opacityGhost);
        this.dom.addEventListener('click', clickedClose);
        parent.dom.addEventListener('pointerenter', opacityGhost);
        parent.dom.addEventListener('pointerleave', opacityTransparent);
    }

}

export { CloseButton };
