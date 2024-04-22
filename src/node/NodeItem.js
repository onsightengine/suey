import { Div } from '../core/Div.js';
import { VectorBox } from '../layout/VectorBox.js';

import { IMAGE_CLOSE } from '../constants.js';
import { NODE_TYPES } from '../constants.js';

class NodeItem extends Div {

    constructor({
        quantity = 1, /* number of connections allowed */
        type = NODE_TYPES.INPUT,
        title = '',
    } = {}) {
        super(title);
        const self = this;
        this.addClass('suey-node-item');

        // Elements
        const disconnect = new VectorBox(IMAGE_CLOSE);
        this.point = new Div().addClass('suey-node-item-point');
        this.unhook = new Div().addClass('suey-node-item-unhook').add(disconnect);
        this.add(this.point, this.unhook);

        // Properties
        this.connections = [];
        this.incoming = 0;
        this.quantity = quantity;
        this.type = type;
        this.node = this;

        switch (type) {
            case NODE_TYPES.INPUT: this.addClass('suey-node-left'); break;
            case NODE_TYPES.OUTPUT: this.addClass('suey-node-right'); break;
        }

        // Graph
        this.graph = () => { return (self.node && self.node.graph) ? self.node.graph : undefined; };

        // Point Pointer Events
        function pointPointerDown(event) {
            if (event.button !== 0) return;
            if (!self.graph()) return;
            event.stopPropagation();
            event.preventDefault();
            document.addEventListener('pointermove', pointPointerMove);
            document.addEventListener('pointerup', pointPointerUp);
            self.point.addClass('suey-active-item');
            self.graph().activeItem = self;
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.point.removeClass('suey-active-item');
            self.graph().connect();
            document.removeEventListener('pointermove', pointPointerMove);
            document.removeEventListener('pointerup', pointPointerUp);
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
                    if (self.graph().activeItem) self.point.addClass('suey-active-item');
                    self.point.addClass('suey-hover-point');
                }
            } else {
                self.point.addClass('suey-hover-point');
            }
        }
        function pointPointerLeave(event) {
            if (self.graph()) {
                self.graph().connectItem = undefined;
                if (self.graph().activeItem !== self) self.point.removeClass('suey-active-item');
            }
            self.point.removeClass('suey-hover-point');
        }
        this.point.on('pointerdown', pointPointerDown);
        this.point.on('pointerenter', pointPointerEnter);
        this.point.on('pointerleave', pointPointerLeave);

        // Detach Pointer Events
        function breakPointerDown(event) {
            if (!self.hasClass('suey-item-connected')) return;
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            self.disconnect();
        }
        this.unhook.on('pointerdown', breakPointerDown);
    }

    /******************** CONNECTION */

    connect(item) {
        if (item === this) return;
        if (!this.connections.includes(item)) {
            // Make room
            if (this.connections.length >= this.quantity) {
                this.connections[this.connections.length - 1].reduceIncoming();
                this.connections.length = Math.max(0, this.connections.length - 1);
            }
            // Connect
            if (this.connections.length < this.quantity) {
                item.increaseIncoming();
                this.connections.push(item);
            }
        }
        this.wantsClass('suey-item-connected', this.connections.length > 0);
    }

    disconnect() {
        switch (this.type) {
            case NODE_TYPES.OUTPUT:
                for (let i = 0; i < this.connections.length; i++) {
                    this.connections[i].reduceIncoming();
                }
                this.connections.length = 0;
                break;
            case NODE_TYPES.INPUT:
                if (this.graph()) this.graph().disconnect(this);
                break;
        }
        this.removeClass('suey-item-connected');
        if (this.graph()) this.graph().drawLines();
    }

    increaseIncoming() {
        this.incoming++;
        this.addClass('suey-item-connected');
    }

    reduceIncoming() {
        if (this.incoming > 0) this.incoming--;
        if (this.incoming === 0) this.removeClass('suey-item-connected');
    }

}

export { NodeItem };
