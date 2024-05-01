import { Circle } from '../objects/Circle.js';
import { Object2D } from '../Object2D.js';

class Helpers {

    static rotateTool(object) {
        const tool = new Circle();
        tool.radius = 4;
        tool.layer = object.layer + 1;
        tool.draggable = true;
        tool.onPointerDrag = function(pointer, viewport, delta) {
            object.rotation += delta.x * 0.01;
        };
        object.add(tool);
    }

    static boxResizeTool(object) {
        if (object.box == undefined) {
            console.warn('Helpers.boxResizeTool(): Object box property missing');
            return;
        }

        function updateHelpers() {
            topRight.position.copy(object.box.min);
            bottomLeft.position.copy(object.box.max);
            topLeft.position.set(object.box.max.x, object.box.min.y);
            bottomRight.position.set(object.box.min.x, object.box.max.y);
        }

        const topRight = new Circle();
        topRight.radius = 4;
        topRight.layer = object.layer + 1;
        topRight.draggable = true;
        topRight.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.min.copy(topRight.position);
            updateHelpers();
        };
        object.add(topRight);

        const topLeft = new Circle();
        topLeft.radius = 4;
        topLeft.layer = object.layer + 1;
        topLeft.draggable = true;
        topLeft.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.max.x = topLeft.position.x;
            object.box.min.y = topLeft.position.y;
            updateHelpers();
        };
        object.add(topLeft);

        const bottomLeft = new Circle();
        bottomLeft.radius = 4;
        bottomLeft.layer = object.layer + 1;
        bottomLeft.draggable = true;
        bottomLeft.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.max.copy(bottomLeft.position);
            updateHelpers();
        };
        object.add(bottomLeft);

        const bottomRight = new Circle();
        bottomRight.radius = 4;
        bottomRight.layer = object.layer + 1;
        bottomRight.draggable = true;
        bottomRight.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.min.x = bottomRight.position.x;
            object.box.max.y = bottomRight.position.y;
            updateHelpers();
        };
        object.add(bottomRight);

        updateHelpers();
    }

}

export { Helpers };
