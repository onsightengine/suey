import { Canvas } from '../core/Canvas.js';
import { ColorScheme } from '../utils/ColorScheme.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
import { Panel } from '../panels/Panel.js';
import { GRID_SIZE, TRAIT } from '../constants.js';

const _color = new Iris();

class Graph extends Panel {

    #scale = 1;
    #snapToGrid = true;
    #offset = { x: 0, y: 0 };

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
        this.minimap = new Canvas(1024, 1024).setClass('MiniMap');
        this.add(this.input, this.grid, this.nodes, this.lines, this.minimap);

        // Nodes Parent Prototype
        this.nodes.isNodeGraph = true;
        this.nodes.getScale = function() { return self.#scale; };
        this.nodes.drawMiniMap = function() { self.drawMiniMap(); };

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
            self.zoomTo(self.#scale - delta, event.clientX, event.clientY);
		};
        this.onWheel(onMouseZoom);

        // Window Resize
        function onWindowResize() {
            self.zoomTo(self.#scale);
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
    }

    getScale() {
        return this.#scale;
    }

    drawMiniMap() {
        if (! this.minimap) return;
        if (this.dom.style.display === 'none') return;

        // Bounds
        const bounds = this.nodeBounds();
        if (! bounds.isFinite) return;
        const BUFFER = 200;
        bounds.x.min -= BUFFER; bounds.x.max += BUFFER;
        bounds.y.min -= BUFFER; bounds.y.max += BUFFER;

        // Clear
        const map = this.minimap;
        const ctx = map.ctx;
        ctx.clearRect(0, 0, map.width, map.height);

        // Aspect Ratio
        let canvasWidth = map.width;
        let canvasHeight = map.height;
        let adjustX = 0, adjustY = 0;
        const ratioX = map.width / bounds.width();
        const ratioY = (map.height / bounds.height()) * this.minimap.ratio();
        if (ratioX > ratioY) {
            canvasWidth *= (ratioY / ratioX);
            adjustX = (canvasWidth - map.width) / 2;
        } else {
            canvasHeight *= (ratioX / ratioY);
            adjustY = (canvasHeight - map.height) / 2;
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
            const x = canvasWidth * ((scaled.left - bounds.x.min) / bounds.width());
            const w = canvasWidth * (scaled.width / bounds.width());
            const y = canvasHeight * ((scaled.top - bounds.y.min) / bounds.height());
            const h = canvasHeight * (scaled.height / bounds.height());
            ctx.fillRect(x - adjustX, y - adjustY, w, h);
        }

        // Draw Nodes
        ctx.globalAlpha = 0.75;
        this.traverseNodes((node) => {
            ctx.fillStyle = node.colorString();
            const x = canvasWidth * ((node.left - bounds.x.min) / bounds.width());
            const w = canvasWidth * (node.width / bounds.width());
            const y = canvasHeight * ((node.top - bounds.y.min) / bounds.height());
            const h = canvasHeight * (node.height / bounds.height());
            ctx.fillRect(x - adjustX, y - adjustY, w, h);
        });
    }

    nodeBounds() {
        const bounds = {
            x: { min: Infinity, max: -Infinity },
            y: { min: Infinity, max: -Infinity },
            isFinite: false,
        };
        this.traverseNodes((node) => {
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
        }
        return bounds;
    }

    resetView() {
        const bounds = this.nodeBounds();
        this.zoomTo(1);
        const rect = this.nodes.dom.getBoundingClientRect();
        const targetX = bounds.isFinite ? bounds.center().x : rect.width / 2;
        const targetY = bounds.isFinite ? bounds.center().y : rect.height / 2;
        this.#offset.x = (rect.width / 2) - targetX;
        this.#offset.y = (rect.height / 2) - targetY;
        this.zoomTo(1.0);
    }

    snap(enabled = true) {
        this.#snapToGrid = enabled;
        this.traverseNodes((node) => node.snap(enabled)); /* apply to child nodes */
    }

    snapToGrid() {
        return this.#snapToGrid;
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

    zoomTo(zoom, clientX, clientY) {
        if (zoom === undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, 0.1), 2) * 100) / 100;

        // Scroll To
        if (clientX !== undefined && clientY !== undefined) {
            const before = this.nodes.dom.getBoundingClientRect();
            this.nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
            const after = this.nodes.dom.getBoundingClientRect();
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offset.x -= ((shiftW - dw) / zoom);
            this.#offset.y -= ((shiftH - dh) / zoom);
        }

        // Set Scale
        this.nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
        this.#scale = zoom;

        // Align Grid
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offset.x * zoom;
        const oy = this.#offset.y * zoom;
        this.grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);
        this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        this.grid.setStyle('opacity', (this.#scale < 1) ? (this.#scale * this.#scale) : '1');

        // Redraw
        this.drawMiniMap();
    }

}

export { Graph };
