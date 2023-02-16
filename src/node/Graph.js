import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Node } from './Node.js';
import { Panel } from '../panels/Panel.js';
import { GRID_SIZE } from '../constants.js';
import { IMAGE_NODE_GRID } from '../constants.js';

class Graph extends Panel {

    #scale = 1;
    #snapToGrid = true;

    constructor() {
        super();
        const self = this;

        // Elements
        this.bg = new Div().setClass('GraphBackground');
        this.grid = new Div().setClass('GraphGrid');
		this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas().setClass('GraphLines');
        this.minimap = new Canvas().setClass('MiniMap');
        this.add(this.bg, this.grid, this.nodes, this.lines, this.minimap);

        // Init Style
        onMouseZoom();

        // Scale Getter
        this.nodes.getScale = function() { return self.#scale; };

        // Zoom
        function onMouseZoom(event) {
            if (event) {
                event.preventDefault();
                self.zoomTo(self.#scale - (event.deltaY * 0.002), event.clientX, event.clientY);
            }
            self.grid.setStyle('background-image', `url('${IMAGE_NODE_GRID}')`);
            self.grid.setStyle('background-size', `${(GRID_SIZE * self.#scale)}px`);
            self.grid.setStyle('opacity', (self.#scale < 1) ? (self.#scale * self.#scale) : '1');
		};
        this.onWheel(onMouseZoom);

        // Deselect
        function onPointerDown() {
            const panels = document.querySelectorAll(`.NodeSelected`);
            panels.forEach(el => el.classList.remove('NodeSelected'));
        }
        this.onPointerDown(onPointerDown);
    }

    getScale() {
        return this.#scale;
    }

    snap(enabled = true) {
        this.#snapToGrid = enabled;
        this.traverseNodes((node) => node.snap(enabled));
    }

    snapToGrid() {
        return this.#snapToGrid;
    }

    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        for (let i = 0; i < this.nodes.children.length; i++) {
            const node = this.nodes.children[i];
            if (! node || ! node.isNode) continue;
            callback(node);
        }
    }

    zoomTo(zoom, clientX, clientY) {
        const rect = this.dom.getBoundingClientRect();
        if (clientX == undefined) clientX = rect.width / 2;
        if (clientY == undefined) clientY = rect.height / 2;

        // Set Scale
        zoom = Math.round(Math.min(Math.max(zoom, 0.1), 2) * 100) / 100;
        this.nodes.setStyle('transform', `scale(${zoom})`);

        // Align Grid
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        this.grid.setStyle('background-position', `left ${diffX}px top ${diffY}px`);

        // Save
        this.#scale = zoom;
    }

}

export { Graph };
