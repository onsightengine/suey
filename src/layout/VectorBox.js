import { Div } from '../core/Div.js';
import { Image } from '../core/Image.js';

import { IMAGE_EMPTY } from '../constants.js';

/** Holds a SVG vector image stretched to fit */
class VectorBox extends Div {

    constructor(/* any number of image urls to add */) {
        super();
        this.setClass('suey-vector-box');

        // Properties
        this.img = undefined;

        // Parse Arguments
        if (arguments.length === 0) return this.addImage(IMAGE_EMPTY);
        const images = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];

        // Add images
        for (const image of images) {
            this.addImage(image);
        }
    }

    setColor(color) {
        this.firstImage()?.setColor(color);
        return this;
    }

    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('suey-image')) return child;
        }
    }

    addImage(imageUrl = IMAGE_EMPTY) {
        const stretchX = '100%';
        const stretchY = '100%';
        const newImage = new Image(imageUrl, stretchX, stretchY, false /* draggable */);
        if (!this.img) this.img = newImage;
        this.add(newImage);
        return this;
    }

    enableDragging() {
        if (this.dom) this.dom.draggable = true;
        for (const child of this.contents().children) {
            if (child.isElement && child.dom) child.dom.ondragstart = () => {};
        }
        return this;
    }

    setImage(imageUrl) {
        return this.img.setImage(imageUrl);
    }

}

export { VectorBox };
