// -- USAGE --
// import { Gooey } from 'suey';
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
// const params = {q
//      myFunction: () => console.log('hello world'),
//      myBoolean: true,
//      myListInt: 0,
//      myListString: 'b',
//      myNumber: 75,
//      myString: 'California',
//      myVector: [ 1, 0, 0 ], // or new Vec3(),
//
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
//  multiple numbers    array               folder.add(params, 'myVector');
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
import { Strings } from './utils/Strings.js';

import { Div } from './core/Div.js';
import { FlexSpacer } from './layout/FlexSpacer.js';
import { PropertyList } from './data/PropertyList.js';
import { Resizeable } from './panels/Resizeable.js';
import { Shrinkable } from './panels/Shrinkable.js';
import { Titled } from './panels/Titled.js';

import { Button } from './input/Button.js';
import { Checkbox } from './input/Checkbox.js';
import { Color } from './input/Color.js';
import { Dropdown } from './input/Dropdown.js';
import { NumberBox } from './input/Number.js';
import { Slider } from './input/Slider.js';
import { TextBox } from './input/TextBox.js';

import { LEFT_SPACING } from './constants.js';
import { OVERFLOW } from './utils/Popper.js';
import { PANEL_STYLES } from './constants.js';
import { RESIZERS } from './constants.js';

const _clr = new Iris();

/**
 * @class Gooey
 * @extends Resizeable
 * @description The main class for creating a Gooey panel.
 */
class Gooey extends Resizeable {

    constructor(title, opacity) {
        super({
            style: PANEL_STYLES.FANCY,
            resizers: [ RESIZERS.LEFT ],
            minWidth: 100,
        });
        this.addClass('suey-gooey');
        this.minWidth = 180;
        this.opacity(opacity);

        const titlePanel = new Titled({ title: title, collapsible: true });
        this.add(titlePanel);
        this.contents = function() { return titlePanel.scroller; };

        document.body.appendChild(this.dom);
    }

    addFolder(folderName = '', icon = '') {
        if (folderName && folderName !== '') folderName = Strings.capitalize(folderName);
        const folder = new Folder({ title: folderName, icon });
        this.add(folder);
        return folder;
    }

    color(color) {
        ColorScheme.changeColor(color);
        return this;
    }

    opacity(opacity) {
        if (opacity == null || Number.isNaN(opacity)) return;
        opacity = Math.min(Math.max(opacity, 0.0), 1.0);
        Css.setVariable('--panel-transparency', opacity);
        return this;
    }

    scale(multiplier) {
        if (!multiplier) multiplier = 1.0;
        multiplier = parseFloat(multiplier);
        const newSize = 14 /* base size = 14px */ * multiplier;
        const fontSize = Math.min(Math.max(newSize, 7 /* min font size */), 42 /* max font size */);
        Css.setVariable('--font-size', Css.toPx(fontSize, this.dom));
        return this;
    }

    width(width) {
        if (width == null) return;
        if (width < this.minWidth * Css.guiScale(this.dom)) width = this.minWidth * Css.guiScale(this.dom);
        if (width > this.maxWidth * Css.guiScale(this.dom)) width = this.maxWidth * Css.guiScale(this.dom);
        this.setStyle('width', Css.toEm(width, this.dom));
        return this;
    }

}

export { Gooey };

/******************** INTERNAL ********************/

class Folder extends Shrinkable {

    constructor({
        title,
        icon,
    } = {}) {
        super({ text: title, icon });

        // Build
        this.props = new PropertyList('45%', LEFT_SPACING.NORMAL);
        this.add(this.props);

        // Add function (replaces Element.add() functionality)
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
            } else if (typeof value === 'string') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addString(params, variable);
                }
            } else if (typeof value === 'function') {
                return this.addFunction(params, variable);
            } else if (Array.isArray(value) && value.length > 0) {
                return this.addVector(params, variable);
            }
        };
    }

    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.on('change', () => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(Strings.prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { boolBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }

    addColor(params, variable) {
        let type;
        let value = params[variable];
        if (value == undefined) { return null; }
        else if (typeof value === 'string') { type = 'string'; }
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
        colorButton.on('input', () => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
        });
        colorButton.on('change', () => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(Strings.prettyTitle(variable), colorButton);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { colorButton.setValue(_clr.set(params[variable]).hex()); return prop; };
        prop.updateDisplay();
        return prop;
    }

    addFunction(params, variable) {
        const prop = new Property();
        const button = new Button(Strings.prettyTitle(variable));
        button.onClick(() => params[variable]());
        // this.props.addRowWithoutTitle(button);
        // prop.name = function(name) { button.setInnerHtml(name); return self; };
        const row = this.props.addRow(Strings.prettyTitle(variable), button);
        prop.name = function(name, buttonText) {
            row.leftWidget.setInnerHtml(name);
            if (buttonText) button.setInnerHtml(buttonText);
            return prop;
        };
        return prop;
    }

    addList(params, variable, options) {
        const prop = new Property();
        const type = (typeof params[variable] === 'string') ? 'string' : 'number';
        const selectOptions = {};
        for (let option of options) selectOptions[option] = option;

        const selectDropDown = new Dropdown();
        selectDropDown.overflowMenu = OVERFLOW.LEFT;
        selectDropDown.setOptions(selectOptions);
        selectDropDown.on('change', () => {
            params[variable] = (type === 'string') ? selectDropDown.getValue() : selectDropDown.getIndex();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });

        const row = this.props.addRow(Strings.prettyTitle(variable), selectDropDown);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            if (type === 'string') selectDropDown.setValue(params[variable]);
            else selectDropDown.setIndex(params[variable]);
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }

    addNumber(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const slider = new Slider();
        const slideBox = new NumberBox();
        slider.on('input', () => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
        });
        slider.on('change', () => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slideBox.on('change', () => {
            params[variable] = slideBox.getValue();
            slider.setValue(slideBox.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slider.on('pointerdown', (event) => event.stopPropagation());
        slider.on('wheel', (event) => event.stopPropagation());
        slideBox.on('wheel', (event) => event.stopPropagation());

        slider.setRange(min, max).setPrecision(precision);
        slideBox.setRange(min, max).setPrecision(precision);
        function setStep(newStep) {
            let min = slideBox.min, max = slideBox.max;
            slider.setStep(newStep);
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            slideBox.setStep(newStep);
        }
        setStep(step);

        const digits = Strings.countDigits(parseInt(max)) + ((precision > 0) ? precision + 0.5 : 0);
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        slideBox.setStyle('marginLeft', '0.14286em');

        function checkForMinMax() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                slideBox.addClass('suey-property-tiny-row');
                slider.setStyle('display', '');
            } else {
                slideBox.removeClass('suey-property-tiny-row');
                slider.setStyle('display', 'none');
            }
        }
        checkForMinMax();

        const row = this.props.addRow(Strings.prettyTitle(variable), slider, slideBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); return prop; };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); return prop; };
        prop.step = function(step) { setStep(step); return prop; };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); return prop; };
        prop.updateDisplay = function() {
            slider.setValue(params[variable]);
            slideBox.setValue(params[variable]);
            params[variable] = slider.getValue(); /* to apply min / max */
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }

    addString(params, variable) {
        const prop = new Property();
        const textBox = new TextBox();
        textBox.on('change', () => {
            params[variable] = textBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(Strings.prettyTitle(variable), textBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { textBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }

    addVector(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const vector = params[variable];
        const row = this.props.addRow(Strings.prettyTitle(variable));

        const boxes = [];
        for (let i = 0; i < vector.length; i++) {
            const box = new NumberBox();
            boxes.push(box);

            box.on('change', () => {
                vector[i] = box.getValue();
                if (typeof prop.change === 'function') prop.change();
                if (typeof prop.finishChange === 'function') prop.finishChange();
            });
            box.on('wheel', (event) => event.stopPropagation());
            box.setRange(min, max).setPrecision(precision);

            row.rightWidget.add(box);
            if (i < vector.length - 1) row.rightWidget.add(new Div().setStyle('min-width', '3px'));
        }

        function setStep(newStep) {
            let min = boxes[0].min, max = boxes[0].max;
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setStep(newStep);
            }
        }
        setStep(step);

        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMin(min); } return prop; };
        prop.max = function(max) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMax(max); } return prop; };
        prop.step = function(step) { for (let i = 0; i < boxes.length; i++) { boxes[i].setStep(step); } return prop; };
        prop.precision = function(precision) { for (let i = 0; i < boxes.length; i++) { boxes[i].setPrecision(precision); } return prop; };
        prop.updateDisplay = function() {
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setValue(params[variable][i]);
                params[variable][i] = boxes[i].getValue(); /* to apply min / max */
            }
            return prop;
        };
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
        return this;
    }

    onFinishChange(callback) {
        this.finishChange = callback;
        return this;
    }

}
