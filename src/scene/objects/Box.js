import { Box2 } from '../math/Box2.js';
import { ColorStyle } from './style/ColorStyle';
import { Object2D } from '../Object2D.js';
import { Vector2 } from '../math/Vector2.js';

class Box extends Object2D {

    constructor() {
        super();
        this.type = 'Box';

        this.box = new Box2(new Vector2(-50, -50), new Vector2(50, 50));
        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#FFFFFF');

        this.computeBoundingBox();
    }

    computeBoundingBox() {
        this.boundingBox.copy(this.box);
    }

    isInside(point) {
        return this.box.containsPoint(point);
    }

    draw(context, camera, canvas) {
        const width = this.box.max.x - this.box.min.x;
        const height = this.box.max.y - this.box.min.y;
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fillRect(this.box.min.x, this.box.min.y, width, height);
        }
        if (this.strokeStyle) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.strokeStyle.get(context);
            context.strokeRect(this.box.min.x, this.box.min.y, width, height);
        }
    }

}

export { Box };
