import { Div } from '../core/Div.js';
import { VectorBox } from './VectorBox.js';

/** Box to hold an Image or Vector, centers image and applies drop shadow */
class ShadowBox extends Div {

    constructor(/* any number of ImageUrls to add */) {
        super();
        this.setClass('suey-shadow-box');
        this.addClass('suey-drop-shadow');

        // Parse Arguments
        if (arguments.length === 0) return;
        const elements = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];

        // Add 'Element's / ImageUrls
        for (const element of elements) {
            this.add((element && element.isElement) ? element : new VectorBox(element));
        }
    }

    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('suey-image') || child.hasClass('suey-vector-box')) return child;
        }
    }

    fullSize() {
        this.addClass('suey-full-size');
        return this;
    }

    dropShadow() {
        this.addClass('suey-drop-shadow');
        this.removeClass('suey-even-shadow');
        return this;
    }

    evenShadow() {
        this.removeClass('suey-drop-shadow');
        this.addClass('suey-even-shadow');
        return this;
    }

    noShadow() {
        this.removeClass('suey-drop-shadow');
        this.removeClass('suey-even-shadow');
        return this;
    }

}

export { ShadowBox };
