import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Node } from './Node.js';
import { Panel } from '../panels/Panel.js';

class Graph extends Panel {

    #scale = 1;

    constructor() {
        super();
        const self = this;

		this.map = new Canvas().setClass('MiniMap');
        this.nodes = new Div().setClass('GraphNodes')
        this.nodes.scale = 1;
        this.lines = new Canvas().setClass('GraphLines');
        this.add(this.map);
        this.add(this.nodes);
        this.add(this.lines);

        function onMouseZoom(event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			const delta = event.deltaY * .003;
			self.zoomTo(self.#scale - delta);
		};
        this.onWheel(onMouseZoom);

        this.addNode();
    }

    addNode() {

        const node = new Node();
        this.nodes.add(node);

    }

    getScale() {
        return this.#scale;
    }

    zoomTo(zoom, clientX = this.dom.clientX, clientY = this.dom.clientY) {
        zoom = Math.min(Math.max(zoom, 0.1), 1);

        this.nodes.dom.scrollLeft -= (clientX / this.#scale) - (clientX / zoom);
        this.nodes.dom.scrollTop -= (clientY / this.#scale) - (clientY / zoom);
        this.nodes.setStyle('transform', `scale(${zoom})`);

        for (let i = 0; i < this.nodes.children.length; i++) {
            const node = this.nodes.children[i];
            if (node && node.isNode) node.setScale(zoom);
        }
        this.#scale = zoom;
    }

}

export { Graph };
