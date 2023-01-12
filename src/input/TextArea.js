import { Element } from '../core/Element.js';

/** Multi-line editable text box */
class TextArea extends Element {

    constructor() {
        super(document.createElement('textarea'));
        this.setClass('TextArea');

        this.dom.spellcheck = false;
        this.dom.setAttribute('autocomplete', 'off');

        ///// Events

        function onKeyDown(event) {
            event.stopPropagation();
            if (event.keyCode === 9) {
                event.preventDefault();
                const cursor = this.selectionStart;
                this.value = this.value.substring(0, cursor) + '\t' + this.value.substring(cursor);
                this.selectionStart = cursor + 1;
                this.selectionEnd = this.selectionStart;
            }
        }

        this.onKeyDown(onKeyDown);

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

export { TextArea };
