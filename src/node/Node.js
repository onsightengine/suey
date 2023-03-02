import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Iris } from '../utils/Iris.js';
import { Span } from '../core/Span.js';
import { VectorBox } from '../layout/VectorBox.js';
import { GRID_SIZE, NODE_TYPES, RESIZERS } from '../constants.js';

const MIN_W = 200;
const MIN_H = 100;

const _color1 = new Iris();
const _color2 = new Iris();

class Node extends Div {

    #color = new Iris();
    #style = {};
    #needsUpdate = true;
    #startPosition = { x: 0, y: 0 };

    constructor({
        width = 200,
        height = 150,
        x = 0,
        y = 0,
        color = 0x888888,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super();
        const self = this;
        this.addClass('Node');

        // Enable mouse focus, needs >= 0 for keyboard focus
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#using_tabindex
        this.dom.setAttribute('tabindex', '-1');

        // Prototype
        this.isNode = true;

        // Properties
        this.graph = undefined;
        this.#color.set(color);

        // Children
        const panel = new Div().addClass('NodePanel');
        const border = new Div().addClass('NodeBorder');
        const sizers = new Div().addClass('NodeResizers');
        this.addToSelf(sizers, panel, border);
        this.contents = function() { return panel; }

        // Interior
        this.header = new Div().setClass('NodeHeaderTitle').setStyle('display', 'none');
        const lists = new Div().setClass('NodeInterior');
        this.inputList = new Div().setClass('NodeItemList');
        this.outputList = new Div().setClass('NodeItemList');
        lists.add(this.inputList, this.outputList);
        this.add(this.header, lists);

        // Stacking
        this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
        this.dom.addEventListener('focusin', () => Interaction.bringToTop(self.dom));
        this.dom.addEventListener('displayed', () => Interaction.bringToTop(self.dom));
        this.dom.addEventListener('pointerdown', () => Interaction.bringToTop(self.dom));

        // Disable context menu
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);

        // Snapping
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (! self.graph || ! self.graph.snapToGrid) return decimal;
            return Math.round(decimal / increment) * increment;
        }

        // Resizers
        let rect = {};
        function resizerDown() {
            rect.left = self.left;
            rect.top = self.top;
            rect.width = self.width;
            rect.height = self.height;
            nodePointerDown();
        }
        function resizerMove(resizer, diffX, diffY) {
            const scale = self.getScale();
            diffX *= (1 / scale);
            diffY *= (1 / scale);
            if (resizer.hasClassWithString('Left')) {
                const newWidth = Math.max(roundNearest(rect.width - diffX), MIN_W);
                const newLeft = rect.left + (rect.width - newWidth);
                self.setStyle('left', `${newLeft}px`, 'width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Top')) {
                const newHeight = Math.max(roundNearest(rect.height - diffY), MIN_H);
                const newTop = rect.top + (rect.height - newHeight);
                self.setStyle('top', `${newTop}px`, 'height', `${newHeight}px`);
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
        Interaction.makeResizeable(this, sizers, resizers, resizerDown, resizerMove);

        // Style Observer
        let styleTimeout = undefined;
        const observer = new MutationObserver(() => {
            self.needsUpdate = true;
            clearTimeout(styleTimeout);
            styleTimeout = setTimeout(() => self.#updateSizes(), 4);
        });
        observer.observe(this.dom, { attributes: true, attributeFilter: [ 'style', 'class' ] });

        // Initial Size
        this.setStyle(
            'left', `${roundNearest(parseFloat(x))}px`,
            'top', `${roundNearest(parseFloat(y))}px`,
            'width', `${parseFloat(width)}px`,
            'height', `${parseFloat(height)}px`,
        );

        // Dragging (Handle Multiple)
        let watchForSingleClick = false;
        let singleClickTimer;
        function dragDown() {
            if (! self.graph) return;
            self.graph.getNodes().forEach((node) => node.setStartPosition(node.left, node.top));
        }
        function dragMove(diffX, diffY) {
            watchForSingleClick = false;
            if (! self.graph) return;
            self.graph.getNodes().forEach((node) => {
                if (node.hasClass('NodeSelected')) {
                    node.setStyle('left', `${roundNearest(node.getStartPosition().x + diffX)}px`);
                    node.setStyle('top', `${roundNearest(node.getStartPosition().y + diffY)}px`);
                }
            });
        }
        Interaction.makeDraggable(self, self, false, dragDown, dragMove);

        // Selectable
        function nodePointerDown(event) {
            // Forward right click to Graph
            if (event && event.button !== 0) {
                if (self.graph) setTimeout(() => self.graph.input.dom.dispatchEvent(event), 0);
                return;
            }
            // Bring to top
            if (self.graph) {
                const nodes = self.graph.getNodes();
                if (self.zIndex !== nodes.length) {
                    nodes.forEach(node => node.setStyle('zIndex', `${node.zIndex - 1}`));
                    self.setStyle('zIndex', nodes.length);
                }
            }
            // Select
            if (! self.hasClass('NodeSelected')) {
                const selected = document.querySelectorAll(`.NodeSelected`);
                selected.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
                self.addClass('NodeSelected');
            }
            watchForSingleClick = ! watchForSingleClick;
            self.dom.ownerDocument.addEventListener('pointerup', nodePointerUp);
        }
        function nodePointerUp() {
            clearTimeout(singleClickTimer);
            singleClickTimer = setTimeout(() => {
                if (watchForSingleClick) {
                    const selected = document.querySelectorAll(`.NodeSelected`);
                    selected.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
                    self.addClass('NodeSelected');
                    watchForSingleClick = false;
                }
            }, 250);
            self.dom.ownerDocument.removeEventListener('pointerup', nodePointerUp);
        }
        this.onPointerDown(nodePointerDown);

        // Double Click (Focus)
        function nodeDoubleClick() {
            if (! self.graph) return;
            self.graph.centerView(false /* resetZoom */, true /* animate */);
        }
        this.onDblClick(nodeDoubleClick);

        // Destroy
        this.dom.addEventListener('destroy', function() {
            if (observer) observer.disconnect();
        }, { once: true });

    } // end ctor

    /******************** RECT */

    get needsUpdate() { return this.#needsUpdate; }
    set needsUpdate(update) { this.#needsUpdate = update; }

    #updateSizes() {
        if (! this.#needsUpdate) return;
        const computed = getComputedStyle(this.dom);
        const style = this.#style;
        style.left = parseFloat(computed.left);
        style.top = parseFloat(computed.top);
        style.width = parseFloat(computed.width);
        style.height = parseFloat(computed.height);
        style.right = style.left + style.width;
        style.bottom = style.top + style.height;
        style.zIndex = parseInt(computed.zIndex);
        this.#needsUpdate = false;
        const self = this;
        if (this.graph) setTimeout(() => self.graph.drawMiniMap(), 20);
    }

    get left()   { this.#updateSizes(); return this.#style.left; }
    get top()    { this.#updateSizes(); return this.#style.top; }
    get width()  { this.#updateSizes(); return this.#style.width; }
    get height() { this.#updateSizes(); return this.#style.height; }
    get right()  { this.#updateSizes(); return this.#style.right; }
    get bottom() { this.#updateSizes(); return this.#style.bottom; }
    get zIndex() { this.#updateSizes(); return this.#style.zIndex; }

    /******************** SCALE / SNAP / RESIZE */

    getScale() {
        return (this.graph ? this.graph.getScale() : 1.0);
    }

    getStartPosition() { return this.#startPosition; }
    setStartPosition(x = 0, y = 0) { this.#startPosition.x = x; this.#startPosition.y = y; }

    /******************** NODE BUILDING */

    addItem(item) {
        item.node = this;
        switch (item.type) {
            case NODE_TYPES.INPUT: this.inputList.add(item); break;
            case NODE_TYPES.OUTPUT: this.outputList.add(item); break;
        }
    }

    createHeader(text = '', iconUrl) {
        if (this.header.children.length > 0) return;
        const icon = new VectorBox(iconUrl);
        this.header.iconHolder = new Span().setClass('NodeHeaderIcon').add(icon);
        this.header.textHolder = new Span().setClass('NodeHeaderText').setTextContent(text);
        this.header.add(this.header.iconHolder, this.header.textHolder);
        this.applyColor();
        this.header.setStyle('display', '');
    }

    /******************** STYLING */

    applyColor(color) {
        if (color !== undefined) this.#color.set(color);
        const colorLight = _color2.set(this.#color).darken(1.3).rgbString();
        const colorDark = _color1.set(this.#color).darken(0.7).rgbString();
        if (this.header) this.header.setStyle('background-image', `linear-gradient(to bottom, rgba(${colorLight}, 0.75), rgba(${colorDark}, 0.75))`);
    }

    colorString() {
        return this.#color.cssString();
    }

}

export { Node };
