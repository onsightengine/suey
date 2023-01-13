//
// lil gui example
// ---------------
//
// const params = {
//     geometry: 'Box',
//     iterations: 3,
//     split: true,
//     uvSmooth: false,
//     preserveEdges: false,
//     flatOnly: false,
//     maxTriangles: 25000,
//     flatShading: false,
//     textured: true,
// };
//
// const gui = new GUI();
// const folder1 = gui.addFolder('Subdivide Params');

// folder1.add(params, 'iterations').min(0).max(5).step(1).onFinishChange(updateMeshes);
// const geomController = folder1.add(params, 'geometry', geomTypes).onFinishChange(() => { refreshDisplay(); });

// const splitController = folder1.add( params, 'split' ).onFinishChange( updateMeshes );
// const uvSmoothController = folder1.add( params, 'uvSmooth' ).onFinishChange( updateMeshes );
// const preserveController = folder1.add( params, 'preserveEdges' ).onFinishChange( updateMeshes );
// folder1.add( params, 'flatOnly' ).onFinishChange( updateMeshes );
// folder1.add( params, 'maxTriangles' ).onFinishChange( updateMeshes );
//
// const folder2 = gui.addFolder( 'Material' );
// folder2.add( params, 'flatShading' ).onFinishChange( updateMaterial );
// folder2.add( params, 'textured' ).onFinishChange( updateMaterial );
//
// function refreshDisplay() {
//     geomController.updateDisplay();
//     splitController.updateDisplay();
//     uvSmoothController.updateDisplay();
//     preserveController.updateDisplay();
//     updateMeshes();
// }

import { ColorScheme } from './utils/ColorScheme.js';
import { Css } from './utils/Css.js';
import { Iris } from './utils/Iris.js';

import { FlexSpacer } from './layout/FlexSpacer.js';
import { Resizeable, RESIZERS } from './panels/Resizeable.js';
import { Shrinkable } from './panels/Shrinkable.js';
import { Titled } from './panels/Titled.js';
import { PANEL_STYLES } from './panels/Panel.js';
import { PropertyList, PROPERTY_SIZE, LEFT_SPACING } from './data/PropertyList.js';

import { Checkbox } from './input/Checkbox.js';
import { Color } from './input/Color.js';
import { NumberBox } from './input/Number.js';
import { Slider } from './input/Slider.js';

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

        this.props = new PropertyList(PROPERTY_SIZE.FIFTHS, LEFT_SPACING.NORMAL);
        this.add(this.props);

        this.add = function(params, variable, a, b, c, d) {
            const value = params[variable];
            if (value == undefined) {
                return null;
            } else if (typeof value === 'boolean') {
                return this.addBoolean(params, variable);
            } else if (typeof value === 'number') {
                return this.addNumber(params, variable, a, b, c, d);
            }
        }
    }

    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.setValue(params[variable]);
        boolBox.onChange(() => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); };
        return prop;
    }

    /**
     * Formats:
     *  string: '#ffffff'
     *  int: 0xffffff
     *  object: { r: 1, g: 1, b: 1 }
     *  array: [ 1, 1, 1 ]
     */
    addColor(params, variable) {
        let value = params[variable];
        let type;
        if (value == undefined) { return null; }
        else if (typeof value === 'string' || value instanceof String) { type = 'string'; }
        else if (Array.isArray(value)) { type = 'array'; }
        else if (typeof value === 'object') { type = 'object'; }
        else { type = 'number'; }
        const prop = new Property();
        const colorButton = new Color();
        colorButton.setHexValue(_clr.set(value).hex()); // set from int
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
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); };
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

        slideBox.setStyle('marginLeft', '0.14286em');
        slider.setValue(params[variable]);
        slideBox.setValue(params[variable]);

        const digits = countDigits(parseInt(max)) + (precision > 0 ? precision + 0.5 : 0);
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);

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
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); };
        prop.step = function(step) { setStep(step); };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); };
        return prop;
    }

}

class Property {

    constructor() {
        this.name = function() {};          // to be overwritten in 'add_______'

        // Callbacks
        this.change = null;
        this.finishChange = null;

        // Number Functions
        this.min = function() {};           // to be overwritten in 'addNumber'
        this.max = function() {};           // to be overwritten in 'addNumber'
        this.step = function() {};          // to be overwritten in 'addNumber'
        this.precision = function() {};     // to be overwritten in 'addNumber'
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
 * @param {*} string
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
