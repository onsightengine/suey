import { Element } from '../core/Element.js';

class ToolbarSeparator extends Element {

    constructor() {
        super(document.createElement('div'));
        this.setClass('suey-toolbar-separator');
    }

}

export { ToolbarSeparator };
