/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import * as EDITOR from '../../EditorConstants.js';

import { Div } from '../core/Div.js';
import { Image } from '../core/Image.js';

/** Holds a SVG vector image stretched to fit */
class VectorBox extends Div {

    constructor(/* any number of ImageUrls to add */) {
        super();
        this.setClass('VectorBox');

        // Process Arguments, Add them as Images
        let args = arguments;
        if (arguments.length === 0) {
            args = [ EDITOR.ICON_EMPTY ];
        } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
            args = arguments[0];
        }

        // Add images, image no images were passed, sets 'EDITOR.ICON_EMPTY' image
        for (let i = 0; i < args.length; i++) {
            const newImage = this.addImage(args[i]);
            if (i === 0) this.img = newImage;
        }
    }

    addImage(imageUrl) {
        const stretchX = '100%';
        const stretchY = '100%';

        if (imageUrl === undefined || imageUrl === '') imageUrl = EDITOR.ICON_EMPTY;

        const newImage = new Image(imageUrl, stretchX, stretchY, false /* draggable */);
        this.add(newImage);
        if (! this.img) this.img = newImage;

        return newImage;
    }

    makeDraggable() {
        for (let j = 0; j < this.contents().children.length; j++) {
            this.contents().children[j].dom.ondragstart = () => {};
        }
    }

    setImage(imageUrl) {
        this.img.setImage(imageUrl);
    }

}

export { VectorBox };
