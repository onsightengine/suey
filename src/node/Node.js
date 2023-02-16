import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Draggable } from '../interactive/Draggable.js';
import { Panel, PANEL_STYLES } from '../panels/Panel.js';
import { RESIZERS } from '../constants.js';

const MIN_W = 100;
const MIN_H = 100;

class Node extends Panel {

    #resizers = {};
    #scale = 1;

    constructor({
        style = PANEL_STYLES.SIMPLE,
        width = 300,
        height = 200,
        x = 0,
        y = 0,
        resizers = [
            RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT,
            RESIZERS.TOP_LEFT, RESIZERS.TOP_RIGHT, RESIZERS.BOTTOM_LEFT, RESIZERS.BOTTOM_RIGHT,
        ],
    } = {}) {
        super({ style, bringToTop: true });
        this.addClass('Node');
        const self = this;

        this.isNode = true;

        // Resizers
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            resizer.setPointerEvents('none');
            this.addToSelf(resizer);
            this.#resizers[resizerName] = resizer;
            let downX, downY;
            let computed = getComputedStyle(this.dom);
            let rect = {};
            function onPointerDown(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                Draggable.bringToTop(self.dom);
                downX = event.pageX;
                downY = event.pageY;
                computed = getComputedStyle(self.dom);
                rect.left = parseFloat(computed.left);
                rect.top = parseFloat(computed.top);
                rect.width = parseFloat(computed.width);
                rect.height = parseFloat(computed.height);
                self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
            }
            function onPointerUp(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            }
            function onPointerMove(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                const diffX = (event.pageX - downX) * (1 / self.#scale);
                const diffY = (event.pageY - downY) * (1 / self.#scale);
                if (resizer.hasClassWithString('Left')) {
                    const newWidth = Math.max(rect.width - diffX, MIN_W);
                    const diffBefore = (rect.width - (rect.width * self.#scale)) / 2;
                    const diffAfter = (newWidth - (newWidth * self.#scale)) / 2;
                    const newLeft = (rect.left + (rect.width - newWidth)) + (diffAfter - diffBefore);
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newHeight = Math.max(rect.height - diffY, MIN_H);
                    const diffBefore = (rect.height - (rect.height * self.#scale)) / 2;
                    const diffAfter = (newHeight - (newHeight * self.#scale)) / 2;
                    const newTop = (rect.top + (rect.height - newHeight)) + (diffAfter - diffBefore);
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.max(MIN_W, rect.width + diffX);
                    const diffBefore = (rect.width - (rect.width * self.#scale)) / 2;
                    const diffAfter = (newWidth - (newWidth * self.#scale)) / 2;
                    const newLeft = rect.left - (diffAfter - diffBefore);
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.max(MIN_H, rect.height + diffY);
                    const diffBefore = (rect.height - (rect.height * self.#scale)) / 2;
                    const diffAfter = (newHeight - (newHeight * self.#scale)) / 2;
                    const newTop = rect.top - (diffAfter - diffBefore);
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
            }
            resizer.dom.addEventListener('pointerdown', onPointerDown);
            this.toggleResize(resizerName, resizers.includes(resizerName));
        }

        // Initial Size
        this.setStyle('left', `${parseFloat(x)}px`, 'top', `${parseFloat(y)}px`);
        this.setStyle('width', `${parseFloat(width)}px`, 'height', `${parseFloat(height)}px`);

        // Draggable
        Draggable.enable(self.dom, self.dom);

        // Selectable
        this.dom.addEventListener('pointerdown', (event) => {
            const panels = document.querySelectorAll(`.NodeSelected`);
            panels.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
            self.addClass('NodeSelected');
        });
    }

    /** Applies a zoom scale */
    setScale(scale) {
        if (scale == null || Number.isNaN(scale)) scale = 1;
        const computed = getComputedStyle(this.dom);
        const fullWidth = parseFloat(computed.width);
        const fullHeight = parseFloat(computed.height);
        const widthNowDiff = (fullWidth - (fullWidth * this.#scale)) / 2;
        const widthNewDiff = (fullWidth - (fullWidth * scale)) / 2;
        const heightNowDiff = (fullHeight - (fullHeight * this.#scale)) / 2;
        const heightNewDiff = (fullHeight - (fullHeight * scale)) / 2;
        const left = ((((parseFloat(computed.left) + widthNowDiff) / this.#scale)) * scale) - widthNewDiff;
        const top = ((((parseFloat(computed.top) + heightNowDiff) / this.#scale)) * scale) - heightNewDiff;
        this.setStyle('left', `${left}px`);
        this.setStyle('top', `${top}px`);
        this.setStyle('transform', `scale(${scale})`);
        this.#scale = scale;
    }

    /**
     * Turns a resizing handle on / off
     *
     * @param {RESIZERS} resizerName
     * @param {Boolean} enable
     */
    toggleResize(resizerName, enable = true) {
        if (! resizerName) return;
        this.#resizers[resizerName].setPointerEvents((enable) ? 'auto' : 'none');
        return this;
    }

}

export { Node };
