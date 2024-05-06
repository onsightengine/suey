import { Style } from './Style.js';
import { GradientColorStop } from './GradientColorStop.js';

/**
 * Gradient style is used to represent any type of gradient based style.
 * It handles any gradient based operations and should be used as base for other gradient styles.
 */
class GradientStyle extends Style {

    constructor() {
        super();

        /**
         * List of colors that compose this gradient ordered.
         * You need to add at least one color stop to have a visible gradient.
         * @type {GradientColorStop[]}
         */
        this.colors = [];
    }

    /**
     * Add a new color stop defined by an offset and a color to the gradient.
     * If the offset is not between 0 and 1 inclusive, or if color can't be parsed as a CSS color, an error is raised.
     * @param {number} offset Offset of the color stop between 0 and 1 inclusive.
     * @param {string} color CSS color value.
     */
    addColorStop(offset, color) {
        this.colors.push(new GradientColorStop(offset, color));
    }

}

export { GradientStyle };
