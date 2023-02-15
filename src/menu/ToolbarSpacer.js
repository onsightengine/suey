import { Element } from '../core/Element.js';

class ToolbarSpacer extends Element {

    constructor(width = 1) {
        super(document.createElement('div'));
        this.setClass('ToolbarSpacer');
        this.setStyle('width', `calc(var(--button-size) * ${width})`);
    }

}

export { ToolbarSpacer };
