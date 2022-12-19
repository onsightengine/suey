/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
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
        function setImage(fromImage) {
            const isString = (typeof fromImage === 'string' || fromImage instanceof String);
            // SVG
            if (isString && (fromImage.includes('<svg') || fromImage.includes('<SVG'))) {
                const blob = new Blob([ fromImage ], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                imageDom.src = url;
                imageDom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
            // Filename or Image
            } else {
                imageDom.src = imageUrl;
            }
        }
        setImage(imageUrl)

        // Style
        if (! draggable) imageDom.ondragstart = () => { return false };
        if (width != undefined) imageDom.style.width = Css.parseSize(width);
        if (height != undefined) imageDom.style.height = Css.parseSize(height);

        ///// Base

        super(imageDom);
        this.setClass('Image');

        ///// Methods

        this.setImage = function(imageUrl) {
            setImage(imageUrl);
        }

    }

}

export { Image };
