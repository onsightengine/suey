import { Box2 } from '../../math/Box2.js';
import { Mask } from './Mask.js';
import { Object2D } from '../../Object2D.js';
import { Vector2 } from '../../math/Vector2.js';

/**
 * Box mask can be used to clear a box mask region.
 * It will limit the drawing region to this box.
 */
class BoxMask extends Mask {

    type = 'BoxMask';

    constructor() {
        super();
        this.box = new Box2(new Vector2(-50, -35), new Vector2(50, 35));
        this.invert = false; // if inverted the mask considers the outside of the box instead of the inside
    }

    isInside(point) {
        return this.box.containsPoint(point);
    }

    clip(context, viewport, canvas) {
        context.beginPath();
        const width = this.box.max.x - this.box.min.x;
        if (this.invert) {
            context.rect(this.box.min.x - 1e4, -5e3, 1e4, 1e4);
            context.rect(this.box.max.x, -5e3, 1e4, 1e4);
            context.rect(this.box.min.x, this.box.min.y - 1e4, width, 1e4);
            context.rect(this.box.min.x, this.box.max.y, width, 1e4);
        } else {
            const height = this.box.max.y - this.box.min.y;
            context.fillRect(this.box.min.x, this.box.min.y, width, height);
        }
        context.clip();
    }

}

Object2D.register(BoxMask, 'BoxMask');

export { BoxMask };
