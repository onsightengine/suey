import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { RESIZERS } from '../constants.js';

class ResizeFlex extends Panel {

    #resizers = {};
    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;

    constructor({
        style = PANEL_STYLES.FANCY,
        resizers = [
            RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT,
            RESIZERS.TOP_LEFT, RESIZERS.TOP_RIGHT, RESIZERS.BOTTOM_LEFT, RESIZERS.BOTTOM_RIGHT,
        ],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('ResizeFlex');

        // Properties
        this.#startWidth = startWidth;
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = startHeight;
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;

        // Resizers
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);

            let downX, downY;
            let rect = {};

            function onPointerDown(event) {
                if (! event.isPrimary) return;
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.setPointerCapture(event.pointerId);
                downX = event.pageX;
                downY = event.pageY;
                self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);

                rect.width = self.getWidth();
                rect.height = self.getHeight();
            }

            function onPointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            }

            function onPointerMove(event) {
                event.stopPropagation();
                event.preventDefault();

                let diffX = event.pageX - downX;
                let diffY = event.pageY - downY;
                if (resizer.hasClassWithString('Left')) self.changeWidth(rect.width - diffX);
                if (resizer.hasClassWithString('Right')) self.changeWidth(rect.width + diffX);
                if (resizer.hasClassWithString('Top')) self.changeHeight(rect.height - diffY);
                if (resizer.hasClassWithString('Bottom')) self.changeHeight(rect.height + diffY);

                // Dispatch resize event
                if (window.signals) signals.windowResize.dispatch();
            }

            resizer.dom.addEventListener('pointerdown', onPointerDown);
            resizer.setPointerEvents('none');
            this.#resizers[resizerName] = resizer;
            this.toggleResize(resizerName, resizers.includes(resizerName));
            this.addToSelf(resizer);
        }
    }

    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || ! Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = this.#maxWidth * Css.guiScale(this.dom);
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return width;
    }

    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || ! Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = this.#maxHeight * Css.guiScale(this.dom);
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return height;
    }

    /** Turns a resizing handle on / off */
    toggleResize(resizerName, enable = true) {
        if (! resizerName || ! this.#resizers[resizerName]) return;
        this.#resizers[resizerName].setPointerEvents((enable) ? 'auto' : 'none');
        return this;
    }

}

export { ResizeFlex };
