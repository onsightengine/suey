import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { RESIZERS } from '../constants.js';

class Resizeable extends Panel {

    #resizers = {};
    #enabled = {};

    constructor({
        style = PANEL_STYLES.FANCY,
        width = 600,
        height = 600,
        bringToTop = false,
        resizers = [
            RESIZERS.TOP,
            RESIZERS.BOTTOM,
            RESIZERS.LEFT,
            RESIZERS.RIGHT,
            RESIZERS.TOP_LEFT,
            RESIZERS.TOP_RIGHT,
            RESIZERS.BOTTOM_LEFT,
            RESIZERS.BOTTOM_RIGHT,
        ],
    } = {}) {
        super({ style, bringToTop });
        this.addClass('Resizeable');
        this.addClass('FloatingPanel');

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

        this.setStyle(
            'left', '0',
            'top', '0',
            'right', `${window.innerWidth - width}px`,
            'bottom', `${window.innerHeight - height}px`,
        );

        let hasShown = false;
        this.dom.addEventListener('displayed', () => {
            if (!hasShown) {
                this.center();
                hasShown = true;
            }
        });
    }

    center() {
        const side = (window.innerWidth - this.getWidth()) / 2;
        const top = (window.innerHeight - this.getHeight()) / 2;
        this.setStyle(
            'left', `${side}px`,
            'right', `${side}px`,
            'top', `${top}px`,
            'bottom', `${top}px`,
        );
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
        let downX, downY;
        let downW, downH;

        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();

            downX = event.pageX;
            downY = event.pageY;

            // downW = self.parent.getWidth();
            // downH = self.parent.getHeight();

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
