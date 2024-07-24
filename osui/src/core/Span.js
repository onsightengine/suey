import { Element } from './Element.js';

class Span extends Element {

    constructor(innerHtml) {
        super(document.createElement('span'));
        this.setInnerHtml(innerHtml);
    }

}

export { Span };
