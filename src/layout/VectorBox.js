import { Div } from '../core/Div.js';
import { Image } from '../core/Image.js';

import { IMAGE_EMPTY } from '../constants.js';

/** Holds a SVG vector image stretched to fit */
class VectorBox extends Div {

    constructor(/* any number of ImageUrls to add */) {
        super();
        this.setClass('VectorBox');

        // Process Arguments, Add them as Images
        let args = arguments;
        if (arguments.length === 0) {
            args = [ IMAGE_EMPTY ];
        } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
            args = arguments[0];
        }

        // Add images, image no images were passed, sets 'IMAGE_EMPTY' image
        for (let i = 0; i < args.length; i++) {
            const newImage = this.addImage(args[i]);
            if (i === 0) this.img = newImage;
        }
    }

    addImage(imageUrl) {
        const stretchX = '100%';
        const stretchY = '100%';

        if (imageUrl === undefined || imageUrl === '') imageUrl = IMAGE_EMPTY;

        const newImage = new Image(imageUrl, stretchX, stretchY, false /* draggable */);
        this.add(newImage);
        if (! this.img) this.img = newImage;

        return newImage;
    }

    enableDragging() {
        for (let j = 0; j < this.contents().children.length; j++) {
            this.contents().children[j].dom.ondragstart = () => {};
        }
    }

    setImage(imageUrl) {
        this.img.setImage(imageUrl);
    }

}

export { VectorBox };
