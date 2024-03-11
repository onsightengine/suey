import { Element } from './Element.js';

class Div extends Element {

    constructor(innerHtml) {
        super(document.createElement('div'));
        this.setInnerHtml(innerHtml);
    }

}

export { Div };
