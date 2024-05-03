import { Circle } from './objects/Circle.js';
import { Object2D } from './Object2D.js';

class Helpers {

    static rotateTool(object) {
        const tool = new Circle();
        tool.radius = 4;
        tool.layer = object.layer + 1;
        tool.draggable = true;
        tool.onPointerDrag = function(pointer, camera) { object.rotation += pointer.delta.x * 0.01; };
        object.add(tool);
    }

    static resizeTool(object) {
        if (!object.boundingBox) {
            console.warn('Helpers.boxResizeTool(): Object property missing boundingBox');
            return;
        }

        function updateHelpers() {
            const box = object.boundingBox;
            topLeft.position.copy(box.min);
            topRight.position.set(box.max.x, box.min.y);
            bottomLeft.position.set(box.min.x, box.max.y);
            bottomRight.position.copy(box.max);
        }

        const topLeft = new Circle();
        topLeft.fillStyle.color = '#ff0000';
        topLeft.radius = 4;
        topLeft.layer = object.layer + 1;
        topLeft.draggable = true;
        topLeft.onPointerDrag = function(pointer, camera) {
            Object2D.prototype.onPointerDrag.call(this, pointer, camera);
            object.box.min.copy(topLeft.position);
            object.computeBoundingBox();
            updateHelpers();
        };
        object.add(topLeft);

        const topRight = new Circle();
        topRight.fillStyle.color = '#00ff00';
        topRight.radius = 4;
        topRight.layer = object.layer + 1;
        topRight.draggable = true;
        topRight.onPointerDrag = function(pointer, camera) {
            Object2D.prototype.onPointerDrag.call(this, pointer, camera);
            object.box.max.x = topRight.position.x;
            object.box.min.y = topRight.position.y;
            object.computeBoundingBox();
            updateHelpers();
        };
        object.add(topRight);

        const bottomRight = new Circle();
        bottomRight.fillStyle.color = '#0000ff';
        bottomRight.radius = 4;
        bottomRight.layer = object.layer + 1;
        bottomRight.draggable = true;
        bottomRight.onPointerDrag = function(pointer, camera, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, camera);
            object.box.max.copy(bottomRight.position);
            object.computeBoundingBox();
            updateHelpers();
        };
        object.add(bottomRight);

        const bottomLeft = new Circle();
        bottomLeft.radius = 4;
        bottomLeft.layer = object.layer + 1;
        bottomLeft.draggable = true;
        bottomLeft.onPointerDrag = function(pointer, camera, delta) {
            Object2D.prototype.onPointerDrag.call(this, pointer, camera);
            object.box.min.x = bottomLeft.position.x;
            object.box.max.y = bottomLeft.position.y;
            object.computeBoundingBox();
            updateHelpers();
        };
        object.add(bottomLeft);

        updateHelpers();
    }

}

export { Helpers };
