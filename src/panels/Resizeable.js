import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel, PANEL_STYLES } from './Panel.js';

class Resizeable extends Panel {

    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;

    constructor({
        style = PANEL_STYLES.FANCY,
        resizers = [],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-resizeable');

        // Private Properties
        this.#startWidth = parseFloat(startWidth);
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = parseFloat(startHeight);
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;

        // Add Resizers
        const rect = {};
        function resizerDown() {
            rect.width = self.getWidth();
            rect.height = self.getHeight();
            self.dom.dispatchEvent(new Event('clicked', { 'bubbles': true, 'cancelable': true }));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) self.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('right')) self.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('top')) self.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('bottom')) self.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(this, resizerDown, resizerMove).addResizers(resizers);

        // Initial Sizes
        if (startWidth != null) this.changeWidth(startWidth);
        if (startHeight != null) this.changeHeight(startHeight);
    }

    /******************** RESIZE */

    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || !Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = Number.isFinite(this.#maxWidth) ? this.#maxWidth * Css.guiScale(this.dom) : Infinity;
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));//, { 'bubbles': true }));
        return width;
    }

    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || !Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = Number.isFinite(this.#maxHeight) ? this.#maxHeight * Css.guiScale(this.dom) : Infinity;
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));//, { 'bubbles': true }));
        return height;
    }

}

export { Resizeable };
