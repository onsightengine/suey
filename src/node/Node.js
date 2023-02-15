import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel, PANEL_STYLES } from '../panels/Panel.js';
import { RESIZERS } from '../constants.js';

const MIN_W = 300;
const MIN_H = 150;

class Node extends Panel {

    #resizers = {};
    #scale = 1;

    constructor({
        style = PANEL_STYLES.FANCY,
        width = 600,
        height = 600,
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
            let nodeRect, parentRect, relativeRect = {};
            function onPointerDown(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                downX = event.pageX;
                downY = event.pageY;
                nodeRect = self.dom.getBoundingClientRect();
                parentRect = self.parent.dom.getBoundingClientRect();
                relativeRect.top = (nodeRect.top - parentRect.top) * (1 / self.#scale);
                relativeRect.right = (nodeRect.right - parentRect.left) * (1 / self.#scale);
                relativeRect.bottom = (nodeRect.bottom - parentRect.top) * (1 / self.#scale);
                relativeRect.left = (nodeRect.left - parentRect.left) * (1 / self.#scale);
                relativeRect.width = (relativeRect.right - relativeRect.left);
                relativeRect.height = relativeRect.bottom - relativeRect.top;
                self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
                self.bringToTop();
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
                    const newLeft = Math.min(relativeRect.right - MIN_W, relativeRect.left + diffX);
                    const newWidth = relativeRect.right - newLeft;
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newTop = Math.min(relativeRect.bottom - MIN_H, relativeRect.top + diffY);
                    const newHeight = relativeRect.bottom - newTop;
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.max(MIN_W, relativeRect.width + diffX);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.max(MIN_H, relativeRect.height + diffY);
                    self.setStyle('height', `${newHeight}px`);
                }
            }
            resizer.dom.addEventListener('pointerdown', onPointerDown);
            this.toggleResize(resizerName, resizers.includes(resizerName));
        }

        // Initial Size
        this.setStyle('left', '0', 'top', '0');
        this.setStyle('width', `${parseInt(width)}px`);
        this.setStyle('height', `${parseInt(height)}px`);

        // Center first time shown
        this.dom.addEventListener('displayed', () => self.center(), { once: true });
    }

    /**
     * Centers 'Window' panel in document window
     */
    center() {
        const side = (window.innerWidth - this.getWidth()) / 2;
        const top = (window.innerHeight - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
    }

    setScale(scale) {
        if (scale == null || Number.isNaN(scale)) scale = 1;
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
