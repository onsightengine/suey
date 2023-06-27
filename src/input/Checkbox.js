import { Element } from '../core/Element.js';
import { Div } from '../core/Div.js';

class Checkbox extends Element {

    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('osui-checkbox');

        this.checkbox = new Element(document.createElement('input'));
        this.checkbox.setClass('osui-input');
        this.checkbox.addClass('osui-checkbox-input');
        this.checkbox.dom.type = 'checkbox';
        let button = new Div().addClass('osui-checkbox-button');
        this.add(this.checkbox, button);

        this.setValue(boolean);
    }

    getValue() {
        if (!this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }

    setValue(value) {
        if (!this.checkbox.dom) return this;
        this.checkbox.dom.checked = (value) ? true : false;
        return this;
    }

}

export { Checkbox };
