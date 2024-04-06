import { Element } from '../core/Element.js';

class TextBox extends Element {

    constructor(text) {
        super(document.createElement('input'));
        this.setClass('suey-input');
        this.addClass('suey-text-box');

        this.dom.type = 'text';
        this.dom.name = 'TextBox';

        // // NOTE: For chrome, this doesn't always turn off autocomplete.
        // Try inserting a zero-width non-joiner into the input name to trick chrome.
        // So 'Name' -> 'N&zwnj;ame', 'Street' -> 'S&zwnj;treet'
        this.setAttribute('autocomplete', 'off');
        this.setAttribute('spellcheck', 'false');

        this.setValue(text ?? '');

        // Key Events
        function boxKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                // if (event.shiftKey) {
                //     editor.redo();
                // } else {
                //     editor.undo();
                // }
            }
        }

        function boxKeyUp(event) {
            event.stopPropagation();
        }

        this.on('keydown', boxKeyDown);
        this.on('keyup', boxKeyUp);
    }

    getValue() {
        if (!this.dom) return null;
        return this.dom.value;
    }

    setValue(value) {
        if (!this.dom) return this;
        this.dom.value = value;
        return this;
    }

}

export { TextBox };
