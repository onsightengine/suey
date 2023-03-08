import { Div } from '../core/Div.js';
import { VectorBox } from '../layout/VectorBox.js';
import { IMAGE_BREAK, IMAGE_CLOSE, NODE_TYPES } from '../constants.js';

class NodeItem extends Div {

    constructor({
        quantity = 1, /* number of connections allowed */
        type = NODE_TYPES.INPUT,
        title = '',
    } = {}) {
        super(title);
        const self = this;
        this.addClass('NodeItem');

        // Elements
        const disconnect = new VectorBox(IMAGE_CLOSE);
        this.point = new Div().addClass('NodeItemPoint');
        this.detach = new Div().addClass('NodeItemDetach').add(disconnect);
        this.add(this.point, this.detach);

        // Properties
        this.connections = [];
        this.quantity = quantity;
        this.type = type;
        this.node = this;

        switch (type) {
            case NODE_TYPES.INPUT: this.addClass('NodeLeft'); break;
            case NODE_TYPES.OUTPUT: this.addClass('NodeRight'); break;
        }

        // Graph
        this.graph = () => { return (self.node && self.node.graph) ? self.node.graph : undefined; };

        // Point Pointer Events
        function pointPointerDown(event) {
            if (event.button !== 0) return;
            if (! self.graph()) return;
            event.stopPropagation();
            event.preventDefault();
            self.point.dom.ownerDocument.addEventListener('pointermove', pointPointerMove);
            self.point.dom.ownerDocument.addEventListener('pointerup', pointPointerUp);
            self.point.addClass('ActiveItem');
            self.graph().activeItem = self;
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.point.removeClass('ActiveItem');
            self.graph().connect();
            self.point.dom.ownerDocument.removeEventListener('pointermove', pointPointerMove);
            self.point.dom.ownerDocument.removeEventListener('pointerup', pointPointerUp);
        }
        function pointPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerEnter(event) {
            if (self.graph() && self.graph().activeItem) {
                if (self.type !== self.graph().activeItem.type) {
                    self.graph().connectItem = self;
                    self.point.addClass('HoverPoint');
                }
            } else {
                self.point.addClass('HoverPoint');
            }
        }
        function pointPointerLeave(event) {
            if (self.graph()) self.graph().connectItem = undefined;
            self.point.removeClass('HoverPoint');
        }
        this.point.onPointerDown(pointPointerDown);
        this.point.onPointerEnter(pointPointerEnter);
        this.point.onPointerLeave(pointPointerLeave);

        // Detach Pointer Events
        function breakPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            self.connections.length = 0;
            self.removeClass('ItemConnected');
            if (self.graph()) self.graph().drawLines();
        }
        this.detach.onPointerDown(breakPointerDown);
    }

    /******************** CONNECTION */

    connect(item) {
        if (item === this) return;
        if (! this.connections.includes(item)) {
            // Make room
            if (this.connections.length >= this.quantity) {
                this.connections.length = Math.max(0, this.connections.length - 1);
            }
            // Connect
            if (this.connections.length < this.quantity) {
                this.connections.push(item);
            }
        }
        if (this.connections.length > 0) {
            this.addClass('ItemConnected');
        } else {
            this.removeClass('ItemConnected');
        }
    }

}

export { NodeItem };
