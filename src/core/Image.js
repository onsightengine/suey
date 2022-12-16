/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Css } from '../utils/Css.js';
import { Element } from './Element.js';

class Image extends Element {

    constructor(imageUrl, width = null, height = null, draggable = false) {

        // Create Image
        const imageDom = document.createElement('img');
        imageDom.onerror = () => imageDom.style.visibility = 'hidden';

        // If imageUrl is SVG string, convert to image
        const isString = (typeof imageUrl === 'string' || imageUrl instanceof String);
        if (isString && (imageUrl.includes('<svg') || imageUrl.includes('<SVG'))) {
            const blob = new Blob([imageUrl], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            imageDom.src = url;
            imageDom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });

        // Filename or Image was passed
        } else {
            imageDom.src = imageUrl;
        }

        if (! draggable) imageDom.ondragstart = () => { return false };
        if (width != undefined) imageDom.style.width = Css.parseSize(width);
        if (height != undefined) imageDom.style.height = Css.parseSize(height);

        //

        super(imageDom);
        this.setClass('Image');
    }

    setImage(imageUrl) {
        this.dom.src = imageUrl;
    }

}

export { Image };
