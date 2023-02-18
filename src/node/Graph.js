import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Panel } from '../panels/Panel.js';
import { GRID_SIZE } from '../constants.js';

class Graph extends Panel {

    #scale = 1;
    #snapToGrid = true;
    #offset = { x: 0, y: 0 };

    constructor(snapToGrid = true) {
        super();
        const self = this;

        this.#snapToGrid = snapToGrid;

        // Elements
        this.input = new Div().setClass('GraphInput');
        this.grid = new Div().setClass('GraphGrid');
		this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas().setClass('GraphLines');
        this.minimap = new Canvas().setClass('MiniMap');
        this.add(this.input, this.grid, this.nodes, this.lines, this.minimap);

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

        // Scale Getter
        this.nodes.getScale = function() { return self.#scale; };

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

        // this.minimap = new Canvas().setClass('MiniMap');
        // squares.ctx.clearRect(0, 0, squares.width, squares.height);
        // squares.ctx.fillStyle = 'rgb(255, 255, 255)';
        // squares.ctx.globalAlpha = 0.04;
        // squares.ctx.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);

        const map = this.minimap;
        const ctx = map.ctx;
        ctx.clearRect(0, 0, map.width, map.height);



    }

    /* Updates list of all node rects in Graph */
    nodeRects() {
        // const
        // function expandRect(node) {
        //     const computed = getComputedStyle(node.dom);
        //     const left = parseFloat(computed.left);
        //     const top = parseFloat(computed.top);
        //     const right = left + parseFloat(computed.width);
        //     const bottom = top + parseFloat(computed.height);
        //     xMin = Math.min(xMin, left);
        //     yMin = Math.min(yMin, top);
        //     xMax = Math.max(xMax, right);
        //     yMax = Math.max(yMax, bottom);
        // }
        // this.traverseNodes(expandRect);
    }

    resetView() {
        let xMin = Infinity, xMax = -Infinity;
        let yMin = Infinity, yMax = -Infinity;
        function expandRect(node) {
            const computed = getComputedStyle(node.dom);
            const left = parseFloat(computed.left);
            const top = parseFloat(computed.top);
            const right = left + parseFloat(computed.width);
            const bottom = top + parseFloat(computed.height);
            xMin = Math.min(xMin, left);
            yMin = Math.min(yMin, top);
            xMax = Math.max(xMax, right);
            yMax = Math.max(yMax, bottom);
        }
        this.traverseNodes(expandRect);
        this.zoomTo(1);
        const rect = this.nodes.dom.getBoundingClientRect();
        const targetX = (xMax > xMin) ? xMin + ((xMax - xMin) / 2) : (rect.width / 2);
        const targetY = (yMax > yMin) ? yMin + ((yMax - yMin) / 2) : (rect.height / 2);
        this.#offset.x = (rect.width / 2) - targetX;
        this.#offset.y = (rect.height / 2) - targetY;
        this.zoomTo(1);
    }

    snap(enabled = true) {
        this.#snapToGrid = enabled;
        // Apply to children nodes
        this.traverseNodes((node) => node.snap(enabled));
    }

    snapToGrid() {
        return this.#snapToGrid;
    }

    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        if (! this.nodes) return;
        for (let i = 0; i < this.nodes.children.length; i++) {
            const node = this.nodes.children[i];
            if (! node || ! node.isNode) continue;
            callback(node);
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
    }

}

export { Graph };
