import { Element } from '../core/Element.js';

class TextBox extends Element {

    constructor(text) {
        super(document.createElement('input'));
        this.setClass('osui-input');
        this.addClass('osui-text-box');

        this.dom.type = 'text';

        // // NOTE: For chrome, this doesn't always turn off autocomplete.
        // Try inserting a zero-width non-joiner into the input name to trick chrome.
        // So 'Name' -> 'N&zwnj;ame', 'Street' -> 'S&zwnj;treet'
        this.dom.setAttribute('autocomplete', 'off');
        this.dom.setAttribute('spellcheck', 'false');

        this.setValue(text ?? '');

        // Key Events
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) {
                    editor.redo();
                } else {
                    editor.undo();
                }
            }
        }

        function onKeyUp(event) {
            event.stopPropagation();
        }

        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
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
