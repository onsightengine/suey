import { ColorStyle } from './style/ColorStyle';
import { Object2D } from '../Object2D.js';

class Circle extends Object2D {

    constructor() {
        super();
        this.type = 'Circle';

        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#FFFFFF');

        // Property Definitions
        let radius = 10.0;

        const self = this;
        Object.defineProperties(this, {
            radius: {
                get: function() { return radius; },
                set: function(value) {
                    radius = value;
                    self.computeBoundingBox();
                },
            },
        });
    }

    computeBoundingBox() {
        this.boundingBox.min.set(-this.radius, -this.radius);
        this.boundingBox.max.set( this.radius,  this.radius);
    }

    isInside(point) {
        return point.length() <= this.radius;
    }

    draw(context, camera, canvas) {
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
