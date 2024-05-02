import { ColorStyle } from './style/ColorStyle';
import { Object2D } from '../Object2D.js';

/**
 * Circle object draw a circular object, into the canvas.
 * Can be used as a base to implement other circular objects, already implements the circle collision for pointer events.
 */
class Circle extends Object2D {

    type = 'Circle';

    constructor() {
        super();

        this.radius = 10.0;
        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#FFFFFF');
    }

    isInside(point) {
        return point.length() <= this.radius;
    }

    draw(context, viewport, canvas) {
        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI);
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fill();
        }
        if (this.strokeStyle) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.strokeStyle.get(context);
            context.stroke();
        }
    }

}

export { Circle };
