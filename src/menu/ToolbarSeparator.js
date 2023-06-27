import { Element } from '../core/Element.js';

class ToolbarSeparator extends Element {

    constructor() {
        super(document.createElement('div'));
        this.setClass('osui-toolbar-separator');
    }

}

export { ToolbarSeparator };
