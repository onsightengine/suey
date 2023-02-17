import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { RESIZERS } from '../constants.js';

class ResizeFlex extends Panel {

    #resizers = {};

    constructor({
        style = PANEL_STYLES.FANCY,
    } = {}) {
        super({ style });
        this.addClass('ResizeFlex');

        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            this.addToSelf(resizer);
            this.#resizers[resizerName] = resizer;
        }

        this.setXSizes();
        this.setYSizes();
    }

    changeWidth(width) {
        if (width == null) return;
        width = parseFloat(width);
        width = Math.min(Math.max(width, this.minWidth), this.maxWidth).toFixed(1);
        this.setWidth(Css.toEm(width, this.dom));
    }

    changeHeight(height) {
        if (height == null) return;
        height = parseFloat(height);
        height = Math.min(Math.max(height, this.minHeight), this.maxHeight).toFixed(1);
        this.setHeight(Css.toEm(height, this.dom));
    }

    setXSizes(start = null, min = 0, max = Infinity) {
        this.minWidth = min;
        this.maxWidth = max;
        this.defaultWidth = start;
    }

    setYSizes(start = null, min = 0, max = Infinity) {
        this.minHeight = min;
        this.maxHeight = max;
        this.defaultHeight = start;
    }

    toggleResize(resizerName, enabled) {
        const resizer = this.#resizers[resizerName];
        let downX, downY;
        let downW, downH;

        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            resizer.dom.setPointerCapture(event.pointerId);
            downX = event.clientX;
            downY = event.clientY;
            downW = this.parent.getWidth();
            downH = this.parent.getHeight();
            this.dom.ownerDocument.addEventListener('pointermove', this._onPointerMove);
            this.dom.ownerDocument.addEventListener('pointerup', this._onPointerUp);
        }

        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            resizer.dom.releasePointerCapture(event.pointerId);
            this.dom.ownerDocument.removeEventListener('pointermove', this._onPointerMove);
            this.dom.ownerDocument.removeEventListener('pointerup', this._onPointerUp);
        }

        function onPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();

            let newWidth = downW;
            let newHeight = downH;
            let diffX = event.clientX - downX;
            let diffY = event.clientY - downY;

            // Handle resizing
            if (this.hasClassWithString('Left')) newWidth = downW - diffX;
            if (this.hasClassWithString('Right')) newWidth = downW + diffX;
            if (this.hasClassWithString('Top')) newHeight = downH - diffY;
            if (this.hasClassWithString('Bottom')) newHeight = downH + diffY;

            // Check Min / Max Sizes
            if (newWidth < this.parent.minWidth * Css.guiScale(this.dom)) newWidth = this.parent.minWidth * Css.guiScale(this.dom);
            if (newWidth > this.parent.maxWidth * Css.guiScale(this.dom)) newWidth = this.parent.maxWidth * Css.guiScale(this.dom);
            if (newHeight < this.parent.minHeight * Css.guiScale(this.dom)) newHeight = this.parent.minHeight * Css.guiScale(this.dom);
            if (newHeight > this.parent.maxHeight * Css.guiScale(this.dom)) newHeight = this.parent.maxHeight * Css.guiScale(this.dom);

            // Set New Dimensions
            if (downW !== newWidth) this.parent.changeWidth(newWidth);
            if (downH !== newHeight) this.parent.changeHeight(newHeight);

            // Dispatch resize event
            if (window.signals) signals.windowResize.dispatch();
        }

        if (enabled && resizer.resizeEnabled !== true) {
            if (resizer._onPointerDown === undefined) resizer._onPointerDown = onPointerDown.bind(resizer);
            if (resizer._onPointerMove === undefined) resizer._onPointerMove = onPointerMove.bind(resizer);
            if (resizer._onPointerUp === undefined) resizer._onPointerUp = onPointerUp.bind(resizer);
            resizer.dom.addEventListener('pointerdown', resizer._onPointerDown);
            resizer.setPointerEvents('auto');
        } else if (! enabled && resizer.resizeEnabled === true) {
            resizer.dom.removeEventListener('pointerdown', resizer._onPointerDown);
            resizer.setPointerEvents('none');
        }

        resizer.resizeEnabled = enabled;
        return this;
    }

}

export { ResizeFlex };
