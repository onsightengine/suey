import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { RESIZERS } from '../constants.js';

export const RESIZE_MODE = {
    FIXED:      'fixed',
    STRETCH:    'stretch',
}

const MIN_SIZE = 100;

class Resizeable extends Panel {

    #resizers = {};
    #enabled = {};
    #resizeMode = RESIZE_MODE.FIXED;

    constructor({
        style = PANEL_STYLES.FANCY,
        resizeMode = RESIZE_MODE.FIXED,
        width = 600,
        height = 600,
        bringToTop = false,
        resizers = [
            RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT,
            RESIZERS.TOP_LEFT, RESIZERS.TOP_RIGHT, RESIZERS.BOTTOM_LEFT, RESIZERS.BOTTOM_RIGHT,
        ],
    } = {}) {
        super({ style, bringToTop });
        this.addClass('Resizeable');

        const self = this;

        this.#resizeMode = resizeMode;

        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            this.addToSelf(resizer);
            this.#resizers[resizerName] = resizer;
            this.#enabled[resizerName] = false;
            if (resizers.includes(resizerName)) {
                this.toggleResize(resizerName);
            }
        }

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

        window.addEventListener('resize', () => {
            const rect = self.dom.getBoundingClientRect();
            if (resizeMode === RESIZE_MODE.FIXED) {
                if (rect.right > window.innerWidth) self.setStyle('left', `${Math.max(0, window.innerWidth - rect.width)}px`);
                if (rect.bottom > window.innerHeight) self.setStyle('top', `${Math.max(0, window.innerHeight - rect.height)}px`);
            }
        });

        this.dom.addEventListener('displayed', () => self.center(), { once: true });
    }

    center() {
        const side = (window.innerWidth - this.getWidth()) / 2;
        const top = (window.innerHeight - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
        if (this.#resizeMode === RESIZE_MODE.STRETCH) this.setStyle('right', `${side}px`, 'bottom', `${top}px`);
    }

    /**
     * Turns a resizing handle on / off
     *
     * @param {RESIZERS} resizerName
     * @param {Boolean} enable
     * @returns
     */
    toggleResize(resizerName, enable = true) {
        if (! resizerName) return;
        const self = this;
        const resizer = this.#resizers[resizerName];
        const wasEnabled = this.#enabled[resizerName];
        let downX, downY, rect;

        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            downX = event.pageX;
            downY = event.pageY;
            rect = self.dom.getBoundingClientRect();
            self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
            self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
        }

        function onPointerUp(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
            self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
        }

        function onPointerMove(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            const diffX = event.pageX - downX;
            const diffY = event.pageY - downY;

            if (self.#resizeMode === RESIZE_MODE.FIXED) {
                if (resizer.hasClassWithString('Left')) {
                    const newLeft = Math.max(0, Math.min(rect.right - MIN_SIZE, rect.left + diffX));
                    const newWidth = rect.right - newLeft;
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newTop = Math.max(0, Math.min(rect.bottom - MIN_SIZE, rect.top + diffY));
                    const newHeight = rect.bottom - newTop;
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.min(Math.max(MIN_SIZE, rect.width + diffX), window.innerWidth - rect.left);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.min(Math.max(MIN_SIZE, rect.height + diffY), window.innerHeight - rect.top);
                    self.setStyle('height', `${newHeight}px`);
                }
            } else if (self.#resizeMode === RESIZE_MODE.STRETCH) {
                const newLeft = Math.max(0, rect.left + diffX);
                const newTop = Math.max(0, rect.top + diffY);
                const newRight = Math.min(window.innerWidth - (rect.left + MIN_SIZE), Math.max(0, (window.innerWidth - rect.right) - diffX));
                const newBottom = Math.min(window.innerHeight - (rect.top + MIN_SIZE), Math.max(0, (window.innerHeight - rect.bottom) - diffY));
                if (resizer.hasClassWithString('Left')) self.setStyle('left', `${newLeft}px`);
                if (resizer.hasClassWithString('Top')) self.setStyle('top', `${newTop}px`);
                if (resizer.hasClassWithString('Right')) self.setStyle('right', `${newRight}px`);
                if (resizer.hasClassWithString('Bottom')) self.setStyle('bottom', `${newBottom}px`);
            }
        }

        if (enable && ! wasEnabled) {
            resizer.dom.addEventListener('pointerdown', onPointerDown);
            resizer.setPointerEvents('auto');
        } else if (! enable && wasEnabled) {
            resizer.dom.removeEventListener('pointerdown', onPointerDown);
            resizer.setPointerEvents('none');
        }

        this.#enabled[resizerName] = enable;
        return this;
    }

}

export { Resizeable };
