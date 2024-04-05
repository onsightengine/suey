import { Button } from '../input/Button.js';
import { Element } from '../core/Element.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';

const _color = new Iris();

class Color extends Button {

    constructor() {
        super();
        const self = this;
        this.addClass('suey-color-button');
        this.addClass('suey-drop-arrow');

        // Color Input

        const colorBox = new Element(document.createElement('input'));
        colorBox.setClass('suey-input');
        colorBox.addClass('suey-color-input-button');
        colorBox.setAttribute('autocomplete', 'off');
        try { colorBox.dom.type = 'color'; } catch(exception) {}
        this.add(colorBox);

        // Color Background

        const colorBackground = new Div().addClass('suey-drop-color');
        colorBackground.setStyle('backgroundColor', colorBox.dom.value);
        this.add(colorBackground);

        // Child Element Events

        let selected = false;
        function colorBoxClick(event) {
            if (!selected) {
                self.addClass('suey-selected');
                selected = true;
            } else {
                event.stopPropagation();
                event.preventDefault();
                colorBox.blur();
            }
        }

        function colorBoxInput() {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.setAttribute('tooltip', colorBox.dom.value);
        }

        function colorBoxBlur() {
            self.removeClass('suey-selected');
            selected = false;
        }

        colorBox.on('click', colorBoxClick);
        colorBox.on('input', colorBoxInput);
        colorBox.on('blur', colorBoxBlur);
        colorBox.on('focusout', colorBoxBlur);

        // Member Functions

        /** Returns value as hex string, i.e. '#ff0000' */
        this.getValue = function() {
            if (!colorBox.dom) return 0;
            return colorBox.dom.value;
        };

        /** Returns value as integer, i.e. 16711680 (equivalent to 0xff0000) */
        this.getHexValue = function() {
            if (!colorBox.dom) return 0;
            _color.set(colorBox.dom.value);
            return _color.hex();
        };

        this.setValue = function(value) {
            if (!colorBox.dom) return this;
            _color.set(value);
            colorBox.dom.value = _color.hexString();
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.setAttribute('tooltip', colorBox.dom.value);
            return this;
        };

        // Init
        this.setValue(0xffffff);
    }

}

export { Color };
