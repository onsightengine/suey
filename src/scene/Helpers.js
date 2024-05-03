import { Circle } from './objects/Circle.js';
import { Matrix2 } from './math/Matrix2.js';
import { Object2D } from './Object2D.js';
import { Vector2 } from './math/Vector2.js';

class Helpers {

    static rotateTool(object, scene) {
        const tool = new Circle();
        tool.radius = 4;
        tool.layer = object.layer + 1;
        tool.draggable = true;
        tool.onPointerDrag = function(pointer, camera) { object.rotation += pointer.delta.x * 0.01; };
        object.add(tool);
    }

    static resizeTool(object, scene) {
        if (!object.boundingBox) {
            console.warn('Helpers.boxResizeTool(): Object property missing boundingBox');
            return;
        }

        function localDelta(pointer, camera) {
            const pointerStart = pointer.position.clone();
            const pointerEnd = pointer.position.clone().sub(pointer.delta);
            const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
            const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
            const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
            const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
            const delta = localPositionStart.clone().sub(localPositionEnd);
            delta.multiply(object.scale);
            return delta;
        }

        function createCircle(color, x, y) {
            const circle = new Circle();
            circle.fillStyle.color = color;
            circle.radius = 4;
            circle.layer = object.layer + 1;
            circle.onUpdate = function() {
                const box = object.boundingBox;
                const topLeftWorld = object.globalMatrix.transformPoint(box.min);
                const topRightWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
                const bottomLeftWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
                const bottomRightWorld = object.globalMatrix.transformPoint(box.max);
                topLeft.position.copy(topLeftWorld);
                topRight.position.copy(topRightWorld);
                bottomLeft.position.copy(bottomLeftWorld);
                bottomRight.position.copy(bottomRightWorld);
                circle.updateMatrix();
            }
            circle.onPointerDrag = function(pointer, camera) {
                Object2D.prototype.onPointerDrag.call(this, pointer, camera);
                const delta = localDelta(pointer, camera).multiplyScalar(0.5);
                const size = object.boundingBox.getSize();
                const scale = new Vector2(2 / size.x, 2 / size.y);
                const rotationMatrix = new Matrix2().rotate(object.rotation);
                const rotatedDelta = rotationMatrix.transformPoint(delta);
                object.position.add(rotatedDelta);
                object.scale.sub(delta.multiply(x, y).multiply(scale));
            };
            resizerContainer.add(circle);
            return circle;
        }

        const resizerContainer = new Object2D();
        resizerContainer.layer = object.layer + 1;

        const topLeft = createCircle('#ff0000', 1, 1);
        const topRight = createCircle('#00ff00', -1, 1);
        const bottomRight = createCircle('#0000ff', -1, -1);
        const bottomLeft = createCircle('#ffff00', 1, -1);

        resizerContainer.add(topLeft, topRight, bottomRight, bottomLeft);
        scene.add(resizerContainer);
    }

}

export { Helpers };
