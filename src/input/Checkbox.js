/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Element } from '../core/Element.js';
import { Div } from '../core/Div.js';

class Checkbox extends Element {

    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('Checkbox');

        this.checkbox = new Element(document.createElement('input')).addClass('CheckboxInput');
        this.checkbox.dom.type = 'checkbox';
        let button = new Div().addClass('CheckboxButton');
        this.add(this.checkbox, button);

        this.setValue(boolean);
    }

    getValue() {
        if (! this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }

    setValue(value) {
        if (! this.checkbox.dom) return this;
        this.checkbox.dom.checked = (value) ? true : false;
        return this;
    }

}

export { Checkbox };
