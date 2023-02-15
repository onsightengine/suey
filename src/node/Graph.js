import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Node } from './Node.js';
import { Panel } from '../panels/Panel.js';

class Graph extends Panel {

    #scale = 1;

    constructor() {
        super();
        const self = this;

        this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas().setClass('GraphLines');
		this.map =  new Canvas().setClass('GraphMap');;
        this.add(this.nodes, this.lines, this.map);

		this.selected = null;

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

    zoomTo(zoom, clientX = this.dom.clientX, clientY = this.dom.clientY) {
        zoom = Math.min(Math.max(zoom, 0.1), 1);
        this.nodes.dom.scrollLeft -= (clientX / this.#scale) - (clientX / zoom);
        this.nodes.dom.scrollTop -= (clientY / this.#scale) - (clientY / zoom);
        this.#scale = zoom;
        this.lines.setStyle('transform', `scale(${zoom})`);
        this.nodes.setStyle('transform', `scale(${zoom})`);
    }

}

export { Graph };
