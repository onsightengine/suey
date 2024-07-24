import { Css } from '../utils/Css.js';
import { Element } from './Element.js';

class Image extends Element {

    constructor(imageUrl, width = null, height = null, draggable = false) {
        // Image HTML Element
        const imageDom = document.createElement('img');
        imageDom.onerror = () => imageDom.style.visibility = 'hidden';

        // Style
        if (!draggable) imageDom.ondragstart = () => { return false };
        if (width != null) imageDom.style.width = Css.parseSize(width);
        if (height != null) imageDom.style.height = Css.parseSize(height);

        // Base
        super(imageDom);
        this.setClass('osui-image');
        this.setImage(imageUrl);
    }

    /** Sets image, if image url is SVG string, convert to image */
    setImage(image) {
        // SVG
        if (typeof image === 'string' && image.toLowerCase().includes('<svg')) {
            const blob = new Blob([ image ], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            this.dom.src = url;
            this.dom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
        // Filename / Image
        } else {
            this.dom.src = image;
        }
        return this;
    }

}

export { Image };
