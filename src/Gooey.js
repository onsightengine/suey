// -- USAGE --
// import { Gooey } from 'osui';
// const gui = new Gooey('Geometries');         // instantiate
// const folder1 = gui.addFolder('Geometry');   // create folder
//
// -- STLYING --
// gui.color('#bb0000');                        // sets gui color
// gui.opacity(0.5);                            // background opacity
// gui.scale(1.0);                              // scale multiplier
// gui.width(10);                               // sets panel width
//
// -- PROPERTIES --
// const params = {
//      myFunction: () => console.log('hello world'),
//      myBoolean: true,
//      myListInt: 0,
//      myListString: 'b',
//      myNumber: 75,
//      myString: 'California',
//      myColorString: '#ffffff',
//      myColorInt: 0xffffff,
//      myColorObject: { r: 1, g: 1, b: 1 },
//      myColorArray: [ 1, 1, 1 ],
// }
//
// -- TYPES ----------- OBJECT VALUE ------ EXAMPLE --
//  button              function            folder.add(params, 'myFunction');
//  checkbox            boolean             folder.add(params, 'myBoolean');
//  color               multiple types      folder.addColor(params, 'myColor______');
//  list                number / string     folder.add(params, 'myList', [ 'a', 'b', 'c', 'd', 'e' ]);
//  number / slider     number              folder.add(params, 'myNumber', min, max, step, precision);
//  text box            string              folder.add(params, 'myString');
//
// -- UPDATING --
// params = { myNumber: 5.0 };
// const controller = folder1.add(params, 'myNumber');
// ...
// params.myNumber += 2.0;
// controller.updateDisplay();

import { ColorScheme } from './utils/ColorScheme.js';
import { Css } from './utils/Css.js';
import { Iris } from './utils/Iris.js';

import { FlexSpacer } from './layout/FlexSpacer.js';
import { OVERFLOW } from './utils/Popper.js';
import { PANEL_STYLES } from './panels/Panel.js';
import { PropertyList, PROPERTY_SIZE, LEFT_SPACING } from './data/PropertyList.js';
import { Resizeable, RESIZERS } from './panels/Resizeable.js';
import { Shrinkable } from './panels/Shrinkable.js';
import { Titled } from './panels/Titled.js';

import { Button } from './input/Button.js';
import { Checkbox } from './input/Checkbox.js';
import { Color } from './input/Color.js';
import { Dropdown } from './input/Dropdown.js';
import { NumberBox } from './input/Number.js';
import { Slider } from './input/Slider.js';
import { TextBox } from './input/TextBox.js';

const _clr = new Iris();

class Gooey extends Resizeable {

    constructor(title) {
        super(PANEL_STYLES.FANCY);
        this.addClass('Gooey');

        this.toggleResize(RESIZERS.LEFT, true);
        this.minWidth = 180;

        const titlePanel = new Titled(title, true /* collapsible */);
        this.add(titlePanel);
        this.contents = function() { return titlePanel.scroller; }

        document.body.appendChild(this.dom);
    }

    addFolder(folderName, icon = '') {
        const folder = new Folder(capitalize(folderName), icon);
        this.add(folder);
        return folder;
    }

    color(color) {
        ColorScheme.changeColor(color);
    }

    opacity(opacity) {
        if (opacity == null) return;
        opacity = Math.min(Math.max(opacity, 0.0), 1.0);
        Css.setVariable('--panel-transparency', opacity);
    }

    scale(multiplier) {
        if (! multiplier) multiplier = 1.0;
        multiplier = parseFloat(multiplier);
        const newSize = 14 /* base size = 14px */ * multiplier;
        const fontSize = Math.min(Math.max(newSize, 10 /* min font size */), 30 /* max font size */);
        Css.setVariable('--font-size', Css.toPx(fontSize, this.dom));
    }

    width(width) {
        if (width == null) return;
        if (width < this.minWidth * Css.guiScale(this.dom)) width = this.minWidth * Css.guiScale(this.dom);
        if (width > this.maxWidth * Css.guiScale(this.dom)) width = this.maxWidth * Css.guiScale(this.dom);
        this.setWidth(Css.toEm(width, this.dom));
    }

}

export { Gooey };

/***** Local Classes *****/

class Folder extends Shrinkable {

    constructor(title, icon) {
        super(title, icon);

        // Build osui
        this.props = new PropertyList(PROPERTY_SIZE.FIFTHS, LEFT_SPACING.NORMAL);
        this.add(this.props);

        // Add function (replaces osui.add() functionality)
        this.add = function(params, variable, a, b, c, d) {
            const value = params[variable];
            if (value == undefined) {
                return null;
            } else if (typeof value === 'boolean') {
                return this.addBoolean(params, variable);
            } else if (typeof value === 'number') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addNumber(params, variable, a, b, c, d);
                }
            } else if (typeof value === 'string' || value instanceof String) {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addString(params, variable);
                }
            } else if (typeof value === 'function') {
                return this.addFunction(params, variable);
            } else if (Array.isArray(value) && value.length > 0) {
                if (typeof value[0] === 'string' || value[0] instanceof String) {
                    return this.addList(params, variable);
                }
            }
        }
    }

    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.onChange(() => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { boolBox.setValue(params[variable]); };
        prop.updateDisplay();
        return prop;
    }

    addColor(params, variable) {
        let type;
        let value = params[variable];
        if (value == undefined) { return null; }
        else if (typeof value === 'string' || value instanceof String) { type = 'string'; }
        else if (Array.isArray(value)) { type = 'array'; }
        else if (typeof value === 'object') { type = 'object'; }
        else { type = 'number'; }
        const prop = new Property();
        const colorButton = new Color();
        function setVariable(newValue) {
            _clr.set(newValue);
            switch (type) {
                case 'string': params[variable] = _clr.hexString(); break;
                case 'array': _clr.toArray(params[variable]); break;
                case 'object': _clr.getRGB(params[variable]); break;
                case 'number': params[variable] = _clr.hex(); break;
                default:
            }
        }
        colorButton.onInput(() => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
        });
        colorButton.onChange(() => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), colorButton);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { colorButton.setHexValue(_clr.set(params[variable]).hex()); };
        prop.updateDisplay();
        return prop;
    }

    addFunction(params, variable) {
        const prop = new Property();
        const button = new Button(prettyTitle(variable));
        button.onClick(() => params[variable]());
        // this.props.addRowWithoutTitle(button);
        // prop.name = function(name) { button.setInnerHtml(name); return self; };
        const row = this.props.addRow(prettyTitle(variable), button);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); button.setInnerHtml(name); return prop; };
        return prop;
    }

    addList(params, variable, options) {
        const prop = new Property();
        const type = (typeof params[variable] === 'string' || params[variable] instanceof String) ? 'string' : 'number';
        const selectOptions = {};
        for (let option of options) selectOptions[option] = option;

        const selectDropDown = new Dropdown();
        selectDropDown.overflowMenu = OVERFLOW.LEFT;
        selectDropDown.setOptions(selectOptions);
        selectDropDown.onChange(() => {
            params[variable] = (type === 'string') ? selectDropDown.getValue() : selectDropDown.getIndex();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });

        const row = this.props.addRow(prettyTitle(variable), selectDropDown);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            if (type === 'string') selectDropDown.setValue(params[variable]);
            else selectDropDown.setIndex(params[variable]);
        };
        prop.updateDisplay();
        return prop;
    }

    addNumber(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const slider = new Slider();
        const slideBox = new NumberBox();
        slider.onInput(() => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
        });
        slider.onChange(() => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slideBox.onChange(() => {
            params[variable] = slider.getValue();
            slider.setValue(slideBox.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slider.onPointerDown((event) => event.stopPropagation());
        slider.onWheel((event) => event.stopPropagation());
        slideBox.onWheel((event) => event.stopPropagation());

        slider.setRange(min, max).setPrecision(precision);
        slideBox.setRange(min, max).setPrecision(precision);
        function setStep(newStep) {
            let min = slideBox.min, max = slideBox.max;
            slider.setStep(newStep);
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            slideBox.setStep(newStep);
        }
        setStep(step);

        const digits = countDigits(parseInt(max)) + (precision > 0 ? precision + 0.5 : 0);
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        slideBox.setStyle('marginLeft', '0.14286em');

        function checkForMinMax() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                slideBox.addClass('PropertyTinyRow');
                slider.setDisplay('');
            } else {
                slideBox.removeClass('PropertyTinyRow');
                slider.setDisplay('none');
            }
        }
        checkForMinMax();

        const row = this.props.addRow(prettyTitle(variable), slider, slideBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); return prop; };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); return prop; };
        prop.step = function(step) { setStep(step); return prop; };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); return prop; };
        prop.updateDisplay = function() {
            slider.setValue(params[variable]);
            slideBox.setValue(params[variable]);
            params[variable] = slider.getValue(); /* to apply min / max */
        };
        prop.updateDisplay();
        return prop;
    }

    addString(params, variable) {
        const prop = new Property();
        const textBox = new TextBox();
        textBox.onChange(() => {
            params[variable] = textBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), textBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { textBox.setValue(params[variable]); };
        prop.updateDisplay();
        return prop;
    }

}

class Property {

    constructor() {
        const self = this;

        // Callbacks
        this.change = null;
        this.finishChange = null;

        // Update Functions
        this.name = function() { return self; };            // to be overwritten in 'add_______'
        this.updateDisplay = function() { return self; };   // to be overwritten in 'add_______'

        // Number Functions
        this.min = function() { return self; };             // to be overwritten in 'addNumber'
        this.max = function() { return self; };             // to be overwritten in 'addNumber'
        this.step = function() { return self; };            // to be overwritten in 'addNumber'
        this.precision = function() { return self; };       // to be overwritten in 'addNumber'
    }

    onChange(callback) {
        this.change = callback;
    }

    onFinishChange(callback) {
        this.finishChange = callback;
    }

}

/***** Internal *****/

/**
 * Capitalizes every word in a string and adds spaces between CamelCaseWords
 *
 * @param {String} string
 * @returns
 */
function prettyTitle(string) {
    return addSpaces(capitalize(string));
}

/**
 * Adds spaces between 'CamelCaseWords' -> 'Camel Case Words'
 *
 * @param {String} string
 * @returns {String}
 */
function addSpaces(string) {
    return String(string).replace(/([A-Z])/g, ' $1').trim();
}

/**
 * Capitalizes the first letter of every word in a string
 *
 * @param {String} string string to be capitalized
 * @returns new capitalized string
 */
function capitalize(string) {
    const words = String(string).split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}

/**
 * Counts number of digits in a number
 *
 * @param {Number} number
 * @returns {Number}
 */
function countDigits(number) {
    return parseFloat(number).toString().length;
}
