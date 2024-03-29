import { Element } from '../core/Element.js';

/** Multi-line editable text box */
class TextArea extends Element {

    constructor() {
        super(document.createElement('textarea'));
        const self = this;
        this.setClass('suey-text-area');

        this.dom.spellcheck = false;
        this.setAttribute('autocomplete', 'off');

        // Events
        function textKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'Tab') {
                event.preventDefault();
                const cursor = self.dom.selectionStart;
                self.dom.value = self.dom.value.substring(0, cursor) + '\t' + self.dom.value.substring(cursor);
                self.dom.selectionStart = cursor + 1;
                self.dom.selectionEnd = self.dom.selectionStart;
            }
        }

        this.on('keydown', textKeyDown);
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

export { TextArea };
