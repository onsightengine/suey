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

class TextBox extends Element {

    constructor(text) {
        super(document.createElement('input'));
        this.setClass('Input');

        this.dom.type = 'text';

        ///// NOTE: For chrome, this doesn't always turn off autocomplete.
        // Try inserting a zero-width non-joiner into the input name to trick chrome.
        // So 'Name' -> 'N&zwnj;ame', 'Street' -> 'S&zwnj;treet'
        /////
        this.dom.setAttribute('autocomplete', 'off');
        this.dom.setAttribute('spellcheck', 'false');

        this.dom.addEventListener('keydown', function(event) {
            event.stopPropagation();

            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) { editor.redo(); } else { editor.undo(); }
                return;
            }

        }, false);
        this.dom.addEventListener('keyup', function(event) { event.stopPropagation(); }, false);

        this.setValue(text);
    }

    getValue() {
        if (! this.dom) return null;
        return this.dom.value;
    }

    setValue(value) {
        if (! this.dom) return this;
        this.dom.value = value;
        return this;
    }

}

export { TextBox };
