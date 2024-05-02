import { Circle } from './objects/Circle.js';
import { Object2D } from './Object2D.js';

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
            topLeft.position.copy(object.box.min);
            topRight.position.set(object.box.max.x, object.box.min.y);
            bottomLeft.position.set(object.box.min.x, object.box.max.y);
            bottomRight.position.copy(object.box.max);
        }

        const topLeft = new Circle();
        topLeft.fillStyle.color = '#ff0000';
        topLeft.radius = 4;
        topLeft.layer = object.layer + 1;
        topLeft.draggable = true;
        topLeft.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.min.copy(topLeft.position);
            updateHelpers();
        };
        object.add(topLeft);

        const topRight = new Circle();
        topRight.fillStyle.color = '#00ff00';
        topRight.radius = 4;
        topRight.layer = object.layer + 1;
        topRight.draggable = true;
        topRight.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.max.x = topRight.position.x;
            object.box.min.y = topRight.position.y;
            updateHelpers();
        };
        object.add(topRight);

        const bottomRight = new Circle();
        bottomRight.fillStyle.color = '#0000ff';
        bottomRight.radius = 4;
        bottomRight.layer = object.layer + 1;
        bottomRight.draggable = true;
        bottomRight.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.max.copy(bottomRight.position);
            updateHelpers();
        };
        object.add(bottomRight);

        const bottomLeft = new Circle();
        bottomLeft.radius = 4;
        bottomLeft.layer = object.layer + 1;
        bottomLeft.draggable = true;
        bottomLeft.onPointerDrag = function(pointer, viewport, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
            object.box.min.x = bottomLeft.position.x;
            object.box.max.y = bottomLeft.position.y;
            updateHelpers();
        };
        object.add(bottomLeft);

        updateHelpers();
    }

}

export { Helpers };
