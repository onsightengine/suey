import { CloseButton, CLOSE_SIDES } from '../interactive/CloseButton.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel } from './Panel.js';

class Draggable extends Panel {

    constructor(style) {
        super(style);
        this.addClass('Draggable');

        // Close Button
        const closeButton = new CloseButton(this, CLOSE_SIDES.BOTH, 1.45 /* sizeScale */, -1.8 /* offsetScale */);
        this.addToSelf(closeButton);

        // function onPointerDown(event) {
        //     if (event.isPrimary === false) return;
        //     this.downX = event.clientX;
        //     this.downY = event.clientY;
        //     this.downW = this.parent.getWidth();
        //     this.downH = this.parent.getHeight();
        //     this.dom.ownerDocument.addEventListener('pointermove', this._onPointerMove, false);
        //     this.dom.ownerDocument.addEventListener('pointerup', this._onPointerUp, false);
        // }

    }

}

export { Draggable };
