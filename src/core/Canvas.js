import { Element } from './Element.js';

class Canvas extends Element {

    constructor(width = 300, height = 150) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        super(canvas);

        this.ctx = this.dom.getContext('2d');
    }

    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }

    get height() { return this.dom.height; }
    set height(x) { this.dom.height = x; }

}

export { Canvas };
