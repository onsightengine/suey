import { Canvas } from '../core/Canvas.js';
import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Iris } from '../utils/Iris.js';
import { Panel } from '../panels/Panel.js';
import { GRID_SIZE, RESIZERS, TRAIT } from '../constants.js';

const MIN_W = 100;
const MIN_H = 100;
const MAP_BUFFER = 200;

const _color = new Iris();

class Graph extends Panel {

    #scale = 1;
    #snapToGrid = true;
    #offset = { x: 0, y: 0 };
    #previous = { x: 0, y: 0 };
    #drawWidth = 0;
    #drawHeight = 0;

    constructor(snapToGrid = true) {
        super();
        const self = this;

        // Properties
        this.#snapToGrid = snapToGrid;

        // Elements
        this.input = new Div().setClass('GraphInput');
        this.grid = new Div().setClass('GraphGrid');
		this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas().setClass('GraphLines');
        this.minimap = new Div().setClass('MiniMap');
        this.add(this.input, this.grid, this.nodes, this.lines, this.minimap);

        // MiniMap
        this.mapCanvas = new Canvas(1024, 1024).setClass('MiniMapCanvas');
        const mapResizers = new Div().addClass('MiniMapResizers');
        this.minimap.add(this.mapCanvas, mapResizers);

        // Grid
        const SIZE = GRID_SIZE * 4;
        const HALF = SIZE / 2;
        const BORDER = 2;
        const B2 = BORDER * 2;
        const squares = new Canvas(SIZE, SIZE);
        squares.ctx.clearRect(0, 0, squares.width, squares.height);
        squares.ctx.fillStyle = 'rgb(255, 255, 255)';
        squares.ctx.globalAlpha = 0.04;
        squares.ctx.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
        squares.ctx.fillRect(HALF + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
        squares.ctx.globalAlpha = 0.02;
        squares.ctx.fillRect(HALF + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
        squares.ctx.fillRect(0 + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
        this.grid.setStyle('background-image', `url('${squares.dom.toDataURL()}')`);
        this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);

        // Zoom
        function onMouseZoom(event) {
            event.preventDefault();
            const delta = (event.deltaY * 0.002);
            self.zoomTo(self.#scale - delta, false /* animate */, event.clientX, event.clientY);
		};
        this.onWheel(onMouseZoom);

        // Window Resize
        function onWindowResize() {
            self.zoomTo();
        }
        window.addEventListener('resize', onWindowResize);

        // Keys
        let grabbing = false;
        let spaceKey = false;
        function onKeyDown(event) {
            if (self.dom.style.display === 'none') return;
            if (event.code === 'Space') {
                spaceKey = true;
                self.dom.style.cursor = (grabbing) ? 'grabbing' : 'grab';
                self.input.setStyle('z-index', '100');
            }
        }
        function onKeyUp(event) {
            if (self.dom.style.display === 'none') return;
            if (event.code === 'Space') {
                spaceKey = false;
                self.dom.style.cursor = 'auto';
                self.input.setStyle('z-index', '-1');
            }
        }
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        // Translate
        let downX, downY, offset = { x: 0, y: 0 };
        function onPointerDown(event) {
            const panels = document.querySelectorAll(`.NodeSelected`);
            panels.forEach(el => el.classList.remove('NodeSelected'));
            if (event.button === 0 && ! spaceKey) return;
            event.stopPropagation();
            event.preventDefault();
            self.dom.setPointerCapture(event.pointerId);
            grabbing = true;
            downX = event.pageX;
            downY = event.pageY;
            offset.x = self.#offset.x;
            offset.y = self.#offset.y;
            self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
            self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
            self.dom.style.cursor = 'grabbing';
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.releasePointerCapture(event.pointerId);
            grabbing = false;
            self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
            self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            self.dom.style.cursor = (spaceKey) ? 'grab' : 'auto';
        }
        function onPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            const diffX = (event.pageX - downX) * (1 / self.#scale);
            const diffY = (event.pageY - downY) * (1 / self.#scale);
            self.#offset.x = (offset.x + diffX);
            self.#offset.y = (offset.y + diffY);
            self.zoomTo();
        }
        this.input.onPointerDown(onPointerDown);

        // Resize Minimap
        let rect = {};
        function resizerDown() {
            rect = self.minimap.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('Left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.minimap.setStyle('left', `${newLeft}px`);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.minimap.setStyle('top', `${newTop}px`);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('Right')) {
                const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), window.innerWidth - rect.left);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('Bottom')) {
                const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), window.innerHeight - rect.top);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            self.drawMiniMap();
        }
        Interaction.makeResizeable(this.minimap, mapResizers, [ RESIZERS.LEFT, RESIZERS.BOTTOM ], resizerDown, resizerMove);

        // Pointer Minimap
        let translating = false;
        function calculateOffset(clientX, clientY) {
            const rect = self.minimap.dom.getBoundingClientRect();
            const nodes = self.nodes.dom.getBoundingClientRect();
            let downX = clientX - rect.left;
            let downY = clientY - rect.top;
            let percentX = ((rect.width / 2) - downX) / (rect.width / 2);
            let percentY = ((rect.height / 2) - downY) / (rect.height / 2);
            const bounds = self.nodeBounds(MAP_BUFFER);
            if (! bounds.isFinite) return;
            // Empty space on top and bottom
            if (self.#drawWidth > self.#drawHeight) {
                const ratio = (self.#drawWidth / self.#drawHeight);
                let x = bounds.center().x - ((bounds.width() / 2) * percentX);
                let y = bounds.center().y - ((bounds.height() / 2) * ratio * percentY);
                self.#offset.x = (nodes.width / 2) - x;
                self.#offset.y = (nodes.height / 2) - y;
            // Empty space on sides
            } else {
                const ratio = (self.#drawHeight / self.#drawWidth);
                let x = bounds.center().x - ((bounds.width() / 2) * ratio * percentX);
                let y = bounds.center().y - ((bounds.height() / 2) * percentY);
                self.#offset.x = (nodes.width / 2) - x;
                self.#offset.y = (nodes.height / 2) - y;
            }
            self.zoomTo();
        }
        function downOnMinimap(event) {
            self.minimap.dom.setPointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grabbing');
            calculateOffset(event.clientX, event.clientY);
            translating = true;
        }
        function moveOnMinimap(event) {
            if (! translating) return;
            calculateOffset(event.clientX, event.clientY);
        }
        function upOnMinimap(event) {
            self.minimap.dom.releasePointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grab');
            translating = false
        }
        this.minimap.onPointerDown(downOnMinimap);
        this.minimap.onPointerMove(moveOnMinimap);
        this.minimap.onPointerUp(upOnMinimap);
    }

    /******************** GET / SET */

    getScale() {
        return this.#scale;
    }

    get snapToGrid() { return this.#snapToGrid; }
    set snapToGrid(enabled = true) {
        this.#snapToGrid = enabled;
        this.traverseNodes((node) => node.snapToGrid = enabled); /* apply to nodes */
    }

    /******************** NODES */

    addNode(/* node, node, node, ...*/) {
        for (let i = 0, l = arguments.length; i < l; i++) {
            const node = arguments[i];
            if (this.nodes) {
                node.graph = this;
                this.nodes.add(node);
                node.setStyle('zIndex', this.nodes.children.length);
            }
        }
    }

    getNodes() {
        return this.nodes.children;
    }

    removeNode(removeNode) {
        if (! removeNode || ! removeNode.isElement) return;
        const currentZ = removeNode.zIndex;
        const nodes = this.nodes.children;
        const lengthBefore = nodes.length;
        nodes.remove(removeNode);
        const lengthAfter = nodes.length;
        if (lengthBefore === lengthAfter) return;
        // Adjust z stack
        nodes.forEach((node) => {
            if (node.zIndex > currentZ) node.setStyle('zIndex', `${node.zIndex - 1}`);
        });
    }

    nodeBounds(buffer = 0, nodes = this.nodes.children) {
        const bounds = {
            x: { min: Infinity, max: -Infinity },
            y: { min: Infinity, max: -Infinity },
            isFinite: false,
        };
        nodes.forEach((node) => {
            bounds.x.min = Math.min(bounds.x.min, node.left);
            bounds.x.max = Math.max(bounds.x.max, node.right);
            bounds.y.min = Math.min(bounds.y.min, node.top);
            bounds.y.max = Math.max(bounds.y.max, node.bottom);
        });
        if ((bounds.x.max > bounds.x.min) && (bounds.y.max > bounds.y.min)) {
            bounds.isFinite = true;
            bounds.center = function() {
                const x = bounds.x.min + ((bounds.x.max - bounds.x.min) / 2);
                const y = bounds.y.min + ((bounds.y.max - bounds.y.min) / 2);
                return { x, y };
            };
            bounds.width = () => { return (bounds.x.max - bounds.x.min); };
            bounds.height = () => { return (bounds.y.max - bounds.y.min); };
            bounds.x.min -= buffer; bounds.x.max += buffer;
            bounds.y.min -= buffer; bounds.y.max += buffer;
        }
        return bounds;
    }

    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        if (! this.nodes) return;
        const nodes = this.nodes.children;
        nodes.sort((x, y) => x.zIndex - y.zIndex); /* sort zIndex low to high */
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node && node.isNode) callback(node);
        }
    }

    /******************** MAP */

    drawMiniMap() {
        if (! this.mapCanvas) return;
        if (this.dom.style.display === 'none') return;

        // Bounds
        const bounds = this.nodeBounds(MAP_BUFFER);
        if (! bounds.isFinite) return;

        // Clear
        const map = this.mapCanvas;
        const ctx = map.ctx;
        ctx.clearRect(0, 0, map.width, map.height);

        // Aspect Ratio
        this.#drawWidth = map.width;
        this.#drawHeight = map.height;
        let adjustX = 0, adjustY = 0;
        const ratioX = map.width / bounds.width();
        const ratioY = (map.height / bounds.height()) * this.mapCanvas.ratio();
        if (ratioX > ratioY) {
            this.#drawWidth *= (ratioY / ratioX);
            adjustX = (this.#drawWidth - map.width) / 2;
        } else {
            this.#drawHeight *= (ratioX / ratioY);
            adjustY = (this.#drawHeight - map.height) / 2;
        }

        // Draw View
        const rect = this.dom.getBoundingClientRect();
        if (rect) {
            const scaled = {};
            const centerX = rect.left + ((rect.right - rect.left) / 2);
            const centerY = rect.top + ((rect.bottom - rect.top) / 2);
            scaled.left = (centerX - ((rect.width / this.#scale) / 2)) - this.#offset.x;
            scaled.top = (centerY - ((rect.height / this.#scale) / 2)) - this.#offset.y;
            scaled.width = rect.width / this.#scale;
            scaled.height = rect.height / this.#scale;
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            const x = this.#drawWidth * ((scaled.left - bounds.x.min) / bounds.width());
            const w = this.#drawWidth * (scaled.width / bounds.width());
            const y = this.#drawHeight * ((scaled.top - bounds.y.min) / bounds.height());
            const h = this.#drawHeight * (scaled.height / bounds.height());
            ctx.fillRect(x - adjustX, y - adjustY, w, h);
        }

        // Draw Nodes
        const RADIUS = 10;
        ctx.globalAlpha = 0.75;
        this.traverseNodes((node) => {
            ctx.fillStyle = node.colorString();
            const x = this.#drawWidth * ((node.left - bounds.x.min) / bounds.width());
            const w = this.#drawWidth * (node.width / bounds.width());
            const y = this.#drawHeight * ((node.top - bounds.y.min) / bounds.height());
            const h = this.#drawHeight * (node.height / bounds.height());
            ctx.beginPath();
            ctx.roundRect(x - adjustX, y - adjustY, w, h, 0); // RADIUS * (w / node.width));
            ctx.fill();
        });
    }

    /******************** TRANSFORM */

    /**
     * Centers on Selected nodes, if there are nodes selected. Otherwise centers on all nodes.
     *
     * @param {*} resetZoom reset scale to 1.0?
     */
    centerView(resetZoom = true) {
        const selected = [];
        this.traverseNodes((node) => { if (node.hasClass('NodeSelected')) selected.push(node); });
        const bounds = this.nodeBounds(0, (selected.length > 0) ? selected : this.nodes.childre);
        this.focusView(bounds.center().x, bounds.center().y, resetZoom);
    }

    focusView(targetX, targetY, resetZoom = false) {
        if (targetX == null || targetY == null) return;
        const rect = this.nodes.dom.getBoundingClientRect();
        this.#offset.x = ((rect.width / 2) / this.#scale) - targetX;
        this.#offset.y = ((rect.height / 2) / this.#scale) - targetY;
        this.zoomTo((resetZoom) ? 1.0 : undefined, true /* animate */);
    }

    zoomTo(zoom, animate = false, clientX, clientY) {
        if (zoom === undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, 0.1), 2) * 100) / 100;
        const nodes = this.nodes;
        const grid = this.grid;

        // Scroll To
        if (clientX != undefined && clientY != undefined) {
            const before = nodes.dom.getBoundingClientRect();
            nodes.removeClass('GraphAnimate');
            nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
            const after = nodes.dom.getBoundingClientRect();
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offset.x -= ((shiftW - dw) / zoom);
            this.#offset.y -= ((shiftH - dh) / zoom);
        }

        // Animate
        const timeFloat = parseFloat(Css.getVariable('--menu-timing')) * 1000.0
        if (animate) {
            nodes.addClass('GraphAnimate');
            grid.addClass('GraphAnimate');
        }

        // Set Scale
        nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
        this.#scale = zoom;
        this.#previous.x = this.#offset.x;
        this.#previous.y = this.#offset.y;

        // Align Grid
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offset.x * zoom;
        const oy = this.#offset.y * zoom;
        grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);
        grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        grid.setStyle('opacity', (this.#scale < 1) ? (this.#scale * this.#scale) : '1');
        setTimeout(() => {
            nodes.removeClass('GraphAnimate');
            grid.removeClass('GraphAnimate');
        }, timeFloat);

        // Hide Resizers
        const resizeables = document.querySelectorAll(`.Node`);
        resizeables.forEach(el => {
            if (zoom < 0.5) el.classList.add('TooSmall');
            else el.classList.remove('TooSmall');
        });

        // Redraw
        this.drawMiniMap();
    }

}

export { Graph };
