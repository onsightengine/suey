import { Box2 } from './math/Box2.js';

class Viewport {

    constructor(context, camera) {
        const canvas = context.canvas;
        const topLeft = camera.inverseMatrix.transformPoint(0, 0);
        // const topRight = camera.inverseMatrix.transformPoint(canvas.width, 0);
        // const bottomLeft = camera.inverseMatrix.transformPoint(0, canvas.height);
        const bottomRight = camera.inverseMatrix.transformPoint(canvas.width, canvas.height);
        this.box = new Box2(topLeft, bottomRight)
    }

    intersectsBox(box) {
        return this.box.intersectsBox(box);
    }

}

export { Viewport };
