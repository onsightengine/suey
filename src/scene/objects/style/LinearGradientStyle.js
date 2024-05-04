import { Style } from './Style.js';
import { GradientStyle } from './GradientStyle.js';
import { Vector2 } from '../../math/Vector2.js';

/**
 * Linear gradient style, represents a gradient of colors from a point to another interpolating in between.
 * Behind the of the two points used the color is solid.
 * Returns CanvasGradient (https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)
 */
class LinearGradientStyle extends GradientStyle {

    constructor() {
        super();
        this.start = new Vector2(-100, 0);  // starting point of the gradient
        this.end = new Vector2(100, 0);     // ending point of the gradient
    }

    get(context) {
        let style = context.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);
        for (let i = 0; i < this.colors.length; i++) {
            style.addColorStop(this.colors[i].offset, this.colors[i].color);
        }
        return style;
    }

}

export { LinearGradientStyle };
