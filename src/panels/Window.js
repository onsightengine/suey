import { Css } from '../utils/Css.js';
import { Draggable } from '../interactive/Draggable.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { RESIZERS } from '../constants.js';
import { Resizeable } from '../interactive/Resizeable.js';

export const RESIZE_MODE = {
    FIXED:      'fixed',
    STRETCH:    'stretch',
}

const MIN_W = 300;
const MIN_H = 150;

class Window extends Panel {

    #resizeMode = RESIZE_MODE.FIXED;
    #lastKnownRect;
    #maximized = false;

    constructor({
        style = PANEL_STYLES.FANCY,
        resizeMode = RESIZE_MODE.FIXED,
        width = 600,
        height = 600,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super({ style, bringToTop: true });
        const self = this;
        this.addClass('Window');
        this.addClass('Resizeable');

        this.isWindow = true;
        this.#resizeMode = resizeMode;

        // Resizers
        let rect = {};
        function resizerDown() {
            Draggable.bringToTop(self.dom);
            rect = self.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (self.#resizeMode === RESIZE_MODE.FIXED) {
                if (resizer.hasClassWithString('Left')) {
                    const newLeft = Math.max(0, Math.min(rect.right - MIN_W, rect.left + diffX));
                    const newWidth = rect.right - newLeft;
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, rect.top + diffY));
                    const newHeight = rect.bottom - newTop;
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), window.innerWidth - rect.left);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), window.innerHeight - rect.top);
                    self.setStyle('height', `${newHeight}px`);
                }
            } else if (self.#resizeMode === RESIZE_MODE.STRETCH) {
                const newLeft = Math.max(0, rect.left + diffX);
                const newTop = Math.max(0, rect.top + diffY);
                const newRight = Math.min(window.innerWidth - (rect.left + MIN_W), Math.max(0, (window.innerWidth - rect.right) - diffX));
                const newBottom = Math.min(window.innerHeight - (rect.top + MIN_H), Math.max(0, (window.innerHeight - rect.bottom) - diffY));
                if (resizer.hasClassWithString('Left')) self.setStyle('left', `${newLeft}px`);
                if (resizer.hasClassWithString('Top')) self.setStyle('top', `${newTop}px`);
                if (resizer.hasClassWithString('Right')) self.setStyle('right', `${newRight}px`);
                if (resizer.hasClassWithString('Bottom')) self.setStyle('bottom', `${newBottom}px`);
            }
        }
        Resizeable.enable(this, this, resizers, resizerDown, resizerMove);

        // Initial Size
        this.setStyle('left', '0', 'top', '0');
        if (resizeMode === RESIZE_MODE.FIXED) {
            this.setStyle('width', `${parseInt(width)}px`);
            this.setStyle('height', `${parseInt(height)}px`);
        } else if (resizeMode === RESIZE_MODE.STRETCH) {
            if (String(width).includes('%')) this.setStyle('right', `${window.innerWidth - (window.innerWidth * (parseFloat(width)/100))}px`);
            else this.setStyle('right', `${window.innerWidth - parseInt(Css.toPx(width))}px`);
            if (String(height).includes('%')) this.setStyle('bottom', `${window.innerHeight - (window.innerHeight * (parseFloat(height)/100))}px`);
            else this.setStyle('bottom', `${window.innerHeight - parseInt(Css.toPx(height))}px`);
        }

        // Window resize
        window.addEventListener('resize', () => {
            const rect = self.dom.getBoundingClientRect();
            if (resizeMode === RESIZE_MODE.FIXED) {
                if (rect.right > window.innerWidth) self.setStyle('left', `${Math.max(0, window.innerWidth - rect.width)}px`);
                if (rect.bottom > window.innerHeight) self.setStyle('top', `${Math.max(0, window.innerHeight - rect.height)}px`);
            }
        });

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
        if (this.#resizeMode === RESIZE_MODE.STRETCH) this.setStyle('right', `${side}px`, 'bottom', `${top}px`);
    }

    toggleMinMax() {
        if (! this.#maximized) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('right', `0`);
            this.setStyle('top', `0`);
            this.setStyle('bottom', `0`);
            this.dom.style.removeProperty('width');
            this.dom.style.removeProperty('height');
            this.#maximized = true;
        } else {
            const newLeft = Math.max(0, Math.min(window.innerWidth - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(window.innerHeight - this.#lastKnownRect.height, this.#lastKnownRect.top));
            this.setStyle('left', `${newLeft}px`);
            this.setStyle('top', `${newTop}px`);
            this.setStyle('width', `${this.#lastKnownRect.width}px`);
            this.setStyle('height', `${this.#lastKnownRect.height}px`);
            this.dom.style.removeProperty('right');
            this.dom.style.removeProperty('bottom');
            this.#maximized = false;
        }
    }

}

export { Window };
