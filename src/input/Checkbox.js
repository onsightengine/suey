import { Element } from '../core/Element.js';
import { Div } from '../core/Div.js';

class Checkbox extends Element {

    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('suey-checkbox');

        this.checkbox = new Element(document.createElement('input'));
        this.checkbox.setClass('suey-input');
        this.checkbox.addClass('suey-checkbox-input');
        this.checkbox.dom.type = 'checkbox';
        this.checkbox.dom.name = 'Checkbox';
        this.button = new Div().addClass('suey-checkbox-button');
        this.add(this.checkbox, this.button);

        this.setValue(boolean);
    }

    getValue() {
        if (!this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }

    setValue(value) {
        if (!this.checkbox.dom) return this;
        this.checkbox.dom.checked = Boolean(value) ? true : false;
        return this;
    }

}

export { Checkbox };
