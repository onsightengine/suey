import { Div } from '../core/Div.js';
import { Draggable } from '../interactive/Draggable.js';
import { Iris } from '../utils/Iris.js';
import { Span } from '../core/Span.js';
import { VectorBox } from '../layout/VectorBox.js';
import { GRID_SIZE, RESIZERS } from '../constants.js';

const MIN_W = 100;
const MIN_H = 100;

const _color1 = new Iris();
const _color2 = new Iris();

class Node extends Div {

    #resizers = {};
    #snapToGrid = true;
    #color = new Iris();

    constructor({
        width = 200,
        height = 150,
        x = 0,
        y = 0,
        color = 0x888888,
        resizers = [
            RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT,
            RESIZERS.TOP_LEFT, RESIZERS.TOP_RIGHT, RESIZERS.BOTTOM_LEFT, RESIZERS.BOTTOM_RIGHT,
        ],
    } = {}) {
        super();
        const self = this;
        this.setClass('Panel');
        this.addClass('Node');

        this.isNode = true;

        this.#color.set(color);

        // Children
        const background = new Div().addClass('NodeBackground');
        const panel = new Div().addClass('NodePanel');
        const border = new Div().addClass('NodeBorder');
        const sizers = new Div().addClass('NodeResizers');
        this.addToSelf(background, panel, border, sizers);
        this.contents = function() { return panel; }

        // Stacking
        this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
        this.dom.addEventListener('focusin', () => Draggable.bringToTop(self.dom));
        this.dom.addEventListener('displayed', () => Draggable.bringToTop(self.dom));
        this.dom.addEventListener('pointerdown', () => Draggable.bringToTop(self.dom));

        // Disable context menu
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);

        // Resizers
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            resizer.setPointerEvents('none');
            sizers.add(resizer);
            this.#resizers[resizerName] = resizer;
            let downX, downY;
            let computed = getComputedStyle(this.dom);
            let rect = {};
            function roundNearest(x, increment = GRID_SIZE) {
                if (! self.#snapToGrid) return x;
                return Math.ceil(x / increment) * increment;
            }
            function onPointerDown(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                resizer.dom.setPointerCapture(event.pointerId);
                selectNode();
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
                resizer.dom.releasePointerCapture(event.pointerId);
                self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            }
            function onPointerMove(event) {
                if (! event.isPrimary) { return; } event.stopPropagation(); event.preventDefault();
                const scale = self.getScale();
                const diffX = (event.pageX - downX) * (1 / scale);
                const diffY = (event.pageY - downY) * (1 / scale);
                if (resizer.hasClassWithString('Left')) {
                    const newWidth = Math.max(roundNearest(rect.width - diffX), MIN_W);
                    const newLeft = rect.left + (rect.width - newWidth);
                    self.setStyle('left', `${newLeft}px`);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newHeight = Math.max(roundNearest(rect.height - diffY), MIN_H);
                    const newTop = rect.top + (rect.height - newHeight);
                    self.setStyle('top', `${newTop}px`);
                    self.setStyle('height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.max(roundNearest(rect.width + diffX), MIN_W);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.max(roundNearest(rect.height + diffY), MIN_H);
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
        Draggable.enable(self);

        // Selectable
        function selectNode() {
            const panels = document.querySelectorAll(`.NodeSelected`);
            panels.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
            self.addClass('NodeSelected');
        }
        this.onPointerDown(selectNode);
    }

    getScale() {
        return ((this.parent && this.parent.getScale) ? this.parent.getScale() : 1);
    }

    snap(enabled = true) {
        this.#snapToGrid = enabled;
    }

    snapToGrid() {
        return this.#snapToGrid;
    }

    /** Turns a resizing handle on / off */
    toggleResize(resizerName, enable = true) {
        if (! resizerName) return;
        this.#resizers[resizerName].setPointerEvents((enable) ? 'auto' : 'none');
        return this;
    }

    /******************** NODE BUILDING */

    createHeader(text = '', iconUrl, addToContents = true) {
        if (this.header) return undefined;
        const header = new Div().setClass('NodeHeaderTitle');
        const icon = new VectorBox(iconUrl);
        header.iconHolder = new Span().setClass('NodeHeaderIcon').add(icon);
        header.textHolder = new Span().setClass('NodeHeaderText').setTextContent(text);
        const boxShadow = new Div().setClass('NodeHeaderBoxShadow');
        header.add(header.iconHolder, header.textHolder, boxShadow);
        if (addToContents) this.add(header);
        this.header = header;
        this.applyColor();
        return header;
    }

    /******************** STYLING */

    applyColor(color) {
        if (color !== undefined) this.#color.set(color);
        const colorLight = _color2.set(this.#color).darken(1.3).rgbString();
        const colorDark = _color1.set(this.#color).darken(0.7).rgbString();
        if (this.header) this.header.setStyle('background-image', `linear-gradient(to bottom, rgba(${colorLight}, 0.5), rgba(${colorDark}, 0.5))`);
    }

}

export { Node };
