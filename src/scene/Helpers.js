import { Circle } from './objects/Circle.js';
import { Matrix2 } from './math/Matrix2.js';
import { Object2D } from './Object2D.js';
import { Vector2 } from './math/Vector2.js';

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

        function localDelta(local, pointer, camera) {
            const parent = local.parent ?? local;
            const pointerStart = pointer.position.clone();
            const pointerEnd = pointer.position.clone().sub(pointer.delta);
            const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
            const localPositionStart = local.inverseGlobalMatrix.transformPoint(worldPositionStart);
            const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
            const localPositionEnd = local.inverseGlobalMatrix.transformPoint(worldPositionEnd);
            const delta = localPositionStart.clone().sub(localPositionEnd);
            delta.multiply(parent.scale);
            return delta;
        }

        function createCircle(color, x, y) {
            const circle = new Circle();
            circle.fillStyle.color = color;
            circle.radius = 4;
            circle.layer = object.layer + 1;
            circle.onPointerDrag = function(pointer, camera) {
                Object2D.prototype.onPointerDrag.call(this, pointer, camera);
                const delta = localDelta(this, pointer, camera).multiplyScalar(0.5);
                const size = object.boundingBox.getSize();
                const scale = new Vector2(2 / size.x, 2 / size.y);
                // Adjust position (after applying rotation transformation)
                const rotationMatrix = new Matrix2().rotate(object.rotation);
                const rotatedDelta = rotationMatrix.transformPoint(delta);
                object.position.add(rotatedDelta);
                // Adjust scale
                object.scale.sub(delta.multiply(x, y).multiply(scale));
                updateHelpers();
            };
            return circle;
        }

        const topLeft = createCircle('#ff0000', 1, 1);
        const topRight = createCircle('#00ff00', -1, 1);
        const bottomRight = createCircle('#0000ff', -1, -1);
        const bottomLeft = createCircle('#ffff00', 1, -1);

        object.add(topLeft, topRight, bottomRight, bottomLeft);
        updateHelpers();
    }

}

export { Helpers };
