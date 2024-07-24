import { Div } from '../core/Div.js';
import { VectorBox } from './VectorBox.js';

/** Box to hold an Image or Vector, centers image and applies drop shadow */
class ShadowBox extends Div {

    constructor(/* any number of ImageUrls to add */) {
        super();
        this.setClass('osui-shadow-box');
        this.addClass('osui-drop-shadow');

        // Parse Arguments
        if (arguments.length === 0) return;
        const elements = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];

        // Add Osui Elements / ImageUrls
        for (const element of elements) {
            this.add((element && element.isElement) ? element : new VectorBox(element));
        }
    }

    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('osui-image') || child.hasClass('osui-vector-box')) return child;
        }
    }

    fullSize() {
        this.addClass('osui-full-size');
        return this;
    }

    dropShadow() {
        this.addClass('osui-drop-shadow');
        this.removeClass('osui-even-shadow');
        return this;
    }

    evenShadow() {
        this.removeClass('osui-drop-shadow');
        this.addClass('osui-even-shadow');
        return this;
    }

    noShadow() {
        this.removeClass('osui-drop-shadow');
        this.removeClass('osui-even-shadow');
        return this;
    }

}

export { ShadowBox };
