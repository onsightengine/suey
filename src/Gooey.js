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

import { Checkbox } from './input/Checkbox.js';
import { FlexSpacer } from './layout/FlexSpacer.js';
import { Resizeable, RESIZERS } from './panels/Resizeable.js';
import { Shrinkable } from './panels/Shrinkable.js';
import { Titled } from './panels/Titled.js';
import { PANEL_STYLES } from './panels/Panel.js';
import { PropertyList, PROPERTY_SIZE } from './data/PropertyList.js';

class Gooey extends Resizeable {

    constructor(title) {
        super(PANEL_STYLES.FANCY);
        this.addClass('Gooey');

        this.toggleResize(RESIZERS.LEFT, true);
        this.minWidth = 70;

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

}

export { Gooey };

/***** Local Classes *****/

class Folder extends Shrinkable {

    constructor(title, icon) {
        super(title, icon);

        this.props = new PropertyList(PROPERTY_SIZE.FIFTHS);
        this.add(this.props);

        this.add = function(params, variable) {
            if (params[variable] === undefined) {
                return null;
            } else if (typeof params[variable] === "boolean") {
                return this.addBoolean(params, variable);
            }
        }
    }

    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.setValue(params[variable]);
        boolBox.onChange(() => {
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();

        });
        const row = this.props.addRow(prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); };
        return prop;
    }

}

class Property {

    constructor() {
        this.name = function() {}; // to be overwritten in 'add_______'

        // Callbacks
        this.change = null;
        this.finishChange = null;
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
