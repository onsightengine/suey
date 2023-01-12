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
//
// const folder1 = gui.addFolder( 'Subdivide Params' );
// const geomController = folder1.add( params, 'geometry', geomTypes ).onFinishChange(() => { refreshDisplay(); });
// folder1.add( params, 'iterations' ).min( 0 ).max( 5 ).step( 1 ).onFinishChange( updateMeshes );
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

import { Resizeable, RESIZERS } from './panels/Resizeable.js';
import { Titled } from './panels/Titled.js';
import { PANEL_STYLES } from './panels/Panel.js';

class Gooey extends Resizeable {

    #titlePanel = undefined;

    constructor(title) {
        super(PANEL_STYLES.FANCY);
        this.addClass('Gooey');

        this.toggleResize(RESIZERS.LEFT, true);
        this.toggleResize(RESIZERS.BOTTOM, true);
        this.toggleResize(RESIZERS.BOTTOM_LEFT, true);
        this.minWidth = 70;

        this.folders = {};

        this.#titlePanel = new Titled(title);
        this.add(this.#titlePanel);

        document.body.appendChild(this.dom);
    }

    addFolder(folderName, icon = '') {
        const title = capitalize(folderName);
        this.folders[folderName] = new Shrinkable(title, icon);
        this.add(this.folders[folderName]);
    }

}

export { Gooey };

/***** Internal *****/

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
