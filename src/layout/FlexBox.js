import { Element } from '../core/Element.js';

class FlexBox extends Element {

    constructor() {
        super(document.createElement('div'));
        this.addClass('suey-flex-box');
    }

}

export { FlexBox };


