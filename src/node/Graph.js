import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Node } from './Node.js';
import { Panel } from '../panels/Panel.js';
import { GRID_SIZE } from '../constants.js';
import { IMAGE_NODE_GRID } from '../constants.js';

class Graph extends Panel {

    #scale = 1;

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

        // Style
        onMouseZoom();

        // Zoom
        function onMouseZoom(event) {
			let delta = 0;
            if (event) {
                event.preventDefault();
			    delta = event.deltaY * 0.002;
            }
			self.zoomTo(self.#scale - delta);
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

        ///// TEMP

        this.addNode();
    }

    addNode() {

        const node1 = new Node();
        const node2 = new Node({ x: 500, y: 300 });

        this.nodes.add(node1, node2);

    }

    getScale() {
        return this.#scale;
    }

    zoomTo(zoom, clientX = this.dom.clientX, clientY = this.dom.clientY) {
        zoom = Math.round(Math.min(Math.max(zoom, 0.1), 2) * 100) / 100;
        for (let i = 0; i < this.nodes.children.length; i++) {
            const node = this.nodes.children[i];
            if (node && node.isNode) node.setScale(zoom);
        }
        this.#scale = zoom;
    }

}

export { Graph };
