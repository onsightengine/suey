import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel, PANEL_STYLES } from '../panels/Panel.js';
import { RESIZERS } from '../constants.js';

const MIN_W = 300;
const MIN_H = 150;

class Node extends Panel {

    #resizers = {};

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

        // Resizers
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            resizer.setPointerEvents('none');
            this.addToSelf(resizer);
            this.#resizers[resizerName] = resizer;
            let downX, downY, rect;
            function onPointerDown(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                downX = event.pageX;
                downY = event.pageY;
                rect = self.dom.getBoundingClientRect();
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
                const diffX = event.pageX - downX;
                const diffY = event.pageY - downY;
                if (resizer.hasClassWithString('Left')) {
                    const newLeft = Math.min(rect.right - MIN_W, rect.left + diffX);
                    const newWidth = rect.right - newLeft;
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newTop = Math.min(rect.bottom - MIN_H, rect.top + diffY);
                    const newHeight = rect.bottom - newTop;
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.max(MIN_W, rect.width + diffX);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.max(MIN_H, rect.height + diffY);
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
