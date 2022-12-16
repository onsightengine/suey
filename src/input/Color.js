/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Button } from '../input/Button.js';
import { Element } from '../core/Element.js';
import { Div } from '../core/Div.js';

class Color extends Button {

    constructor() {
        super();
        const self = this;
        this.addClass('ColorButton');
        this.addClass('DropArrow');

        ///// Color Input

        const colorBox = new Element(document.createElement('input'));
        colorBox.addClass('ColorInputButton');
        colorBox.dom.setAttribute('autocomplete', 'off');
        try { colorBox.dom.type = 'color'; } catch(exception) {}
        this.add(colorBox);

        ///// Color Background

        const colorBackground = new Div().addClass('DropColor');
        colorBackground.setStyle('backgroundColor', colorBox.dom.value);
        this.add(colorBackground);

        ///// Child Element Events

        function colorBoxPointerDown(event) {
            self.addClass('Selected');
        }

        function colorBoxInput(event) {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
        }

        function colorBoxBlur() {
            self.removeClass('Selected');
        }

        colorBox.dom.addEventListener('pointerdown', colorBoxPointerDown);
        colorBox.dom.addEventListener('input', colorBoxInput);
        colorBox.dom.addEventListener('blur', colorBoxBlur);

        ///// Member Functions

        this.getValue = function() {
            if (! colorBox.dom) return 0;
            return colorBox.dom.value;
        }

        this.getHexValue = function() {
            if (! colorBox.dom) return 0;
            return parseInt(colorBox.dom.value.substring(1), 16);
        }

        this.setValue = function(value) {
            if (! colorBox.dom) return this;
            colorBox.dom.value = value;
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
            return this;
        }

        this.setHexValue = function(hex) {
            if (! colorBox.dom) return this;
            if (hex === undefined) return this;
            self.setValue('#' + ('000000' + hex.toString(16)).slice(-6));
            return this;
        }

        ///// Init

        this.setHexValue(0xffffff);

        ///// Dispose

        this.dispose = function() {

            colorBox.dom.removeEventListener('pointerdown', colorBoxPointerDown);
            colorBox.dom.removeEventListener('input', colorBoxInput);
            colorBox.dom.removeEventListener('blur', colorBoxBlur);

        }

    }

}

export { Color };
