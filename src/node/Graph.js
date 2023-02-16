import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Node } from './Node.js';
import { Panel } from '../panels/Panel.js';
import { IMAGE_NODE_GRID } from '../constants.js';

class Graph extends Panel {

    #scale = 1;

    constructor() {
        super();
        const self = this;

        // Elements
		this.minimap = new Canvas().setClass('MiniMap');
        this.nodes = new Div().setClass('GraphNodes')
        this.lines = new Canvas().setClass('GraphLines');
        this.add(this.minimap, this.nodes, this.lines);

        // Style
        this.nodes.setStyle('background-image', `url('${IMAGE_NODE_GRID}')`);
        this.nodes.setStyle('background-size', `20px`);

        // Zoom
        function onMouseZoom(event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			const delta = event.deltaY * .003;
			self.zoomTo(self.#scale - delta);
            if (self.#scale > 0.5) {
                this.nodes.setStyle('background-image', `url('${IMAGE_NODE_GRID}')`);
                self.nodes.setStyle('background-size', `${(20 * self.#scale)}px`);
            } else {
                this.nodes.setStyle('background-image', `none`);
            }
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
        zoom = Math.min(Math.max(zoom, 0.1), 2);

        // this.nodes.dom.scrollLeft -= (clientX / this.#scale) - (clientX / zoom);
        // this.nodes.dom.scrollTop -= (clientY / this.#scale) - (clientY / zoom);
        // this.nodes.setStyle('transform', `scale(${zoom})`);

        for (let i = 0; i < this.nodes.children.length; i++) {
            const node = this.nodes.children[i];
            if (node && node.isNode) node.setScale(zoom);
        }
        this.#scale = zoom;
    }

}

export { Graph };
