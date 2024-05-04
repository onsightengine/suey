import { Box } from './objects/Box.js';
import { Circle } from './objects/Circle.js';
import { Matrix2 } from './math/Matrix2.js';
import { Object2D } from './Object2D.js';
import { Vector2 } from './math/Vector2.js';

class Helpers {

    static ALL = 0;
    static RESIZE = 1;
    static ROTATE = 2;

    static resizeTool(object, scene, tools = Helpers.ALL, radius = 5) {
        if (!object || !scene) return console.warn(`Helpers.boxResizeTool(): Object or scene missing from argument list`);
        if (!object.boundingBox) return console.warn(`Helpers.boxResizeTool(): Object missing 'boundingBox' property`);

        function localDelta(pointer, camera) {
            const pointerStart = pointer.position.clone();
            const pointerEnd = pointer.position.clone().sub(pointer.delta);
            const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
            const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
            const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
            const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
            const delta = localPositionStart.clone().sub(localPositionEnd).multiply(object.scale);
            return delta;
        }

        const resizerContainer = new Object2D();
        resizerContainer.draggable = false;
        resizerContainer.focusable = false;
        resizerContainer.pointerEvents = false;
        resizerContainer.layer = object.layer + 1;

        let topLeft, topRight, bottomLeft, bottomRight;
        let rotater;

        if (tools === Helpers.ALL || tools === Helpers.RESIZE) {
            function createCircle(color, x, y) {
                const circle = new Circle();
                circle.draggable = true;
                circle.focusable = false;
                circle.fillStyle.color = color;
                circle.radius = radius;
                circle.layer = object.layer + 1;
                circle.onPointerDrag = function(pointer, camera) {
                    Object2D.prototype.onPointerDrag.call(this, pointer, camera);
                    const delta = localDelta(pointer, camera).multiplyScalar(0.5);
                    const size = object.boundingBox.getSize();
                    const scale = new Vector2(2 / size.x, 2 / size.y);
                    const rotationMatrix = new Matrix2().rotate(object.rotation);
                    const rotatedDelta = rotationMatrix.transformPoint(delta);
                    object.position.add(rotatedDelta);
                    object.scale.sub(delta.multiply(x, y).multiply(scale));
                    object.matrixNeedsUpdate = true;
                };
                resizerContainer.add(circle);
                return circle;
            }
            topLeft = createCircle('#ff0000', 1, 1);
            topRight = createCircle('#00ff00', -1, 1);
            bottomRight = createCircle('#0000ff', -1, -1);
            bottomLeft = createCircle('#ffff00', 1, -1);
            resizerContainer.add(topLeft, topRight, bottomRight, bottomLeft);
        }

        if (tools === Helpers.ALL || tools === Helpers.ROTATE) {
            rotater = new Circle();
            rotater.draggable = true;
            rotater.focusable = false;
            rotater.radius = radius;
            rotater.layer = object.layer + 1;
            rotater.onPointerDrag = function(pointer, camera) {
                const objectCenter = object.boundingBox.getCenter();
                const pointerStart = pointer.position.clone();
                const pointerEnd = pointer.position.clone().sub(pointer.delta);
                const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
                const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
                const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
                const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
                localPositionStart.sub(objectCenter).multiply(object.scale);
                localPositionEnd.sub(objectCenter).multiply(object.scale);
                const angle = localPositionEnd.angleBetween(localPositionStart);
                const cross = localPositionEnd.cross(localPositionStart);
                const sign = Math.sign(cross);
                object.rotation += (angle * sign);
                object.updateMatrix(true);
            };
            resizerContainer.add(rotater);
        }

        resizerContainer.onUpdate = function(camera) {
            const box = object.boundingBox;
            const center = box.getCenter();

            const handleOffset = ((radius * 4) / object.scale.y) / camera.scale;
            const centerWorld = object.globalMatrix.transformPoint(center);
            const topCenterWorld = object.globalMatrix.transformPoint(center.x, box.min.y - handleOffset);
            if (rotater) {
                rotater.position.copy(topCenterWorld);
                rotater.scale.set(1 / camera.scale, 1 / camera.scale);
                rotater.updateMatrix();
            }

            const topLeftWorld = object.globalMatrix.transformPoint(box.min);
            const topRightWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
            const bottomLeftWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
            const bottomRightWorld = object.globalMatrix.transformPoint(box.max);
            if (topLeft) {
                topLeft.position.copy(topLeftWorld);
                topLeft.scale.set(1 / camera.scale, 1 / camera.scale);
                topLeft.updateMatrix();
            }
            if (topRight) {
                topRight.position.copy(topRightWorld);
                topRight.scale.set(1 / camera.scale, 1 / camera.scale);
                topRight.updateMatrix();
            }
            if (bottomLeft) {
                bottomLeft.position.copy(bottomLeftWorld);
                bottomLeft.scale.set(1 / camera.scale, 1 / camera.scale);
                bottomLeft.updateMatrix();
            }
            if (bottomRight) {
                bottomRight.position.copy(bottomRightWorld);
                bottomRight.scale.set(1 / camera.scale, 1 / camera.scale);
                bottomRight.updateMatrix();
            }
        }

        scene.add(resizerContainer);
    }

}

export { Helpers };
