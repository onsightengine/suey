import { Element } from './Element.js';

class Canvas extends Element {

    constructor() {
        super(document.createElement('canvas'));
        this.ctx = this.dom.getContext('2d');
    }

}

export { Canvas };
