import {
    CURSOR_ROTATE,
} from '../constants.js';
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
        scene.add(resizerContainer);

        let topLeft, topRight, bottomLeft, bottomRight;
        let topResizer, rightResizer, bottomResizer, leftResizer;
        let rotater;

        // Add Resizers
        if (tools === Helpers.ALL || tools === Helpers.RESIZE) {
            function createResizer(color, x, y, type = 'box', addRotation) {
                const resizer = (type === 'box') ? new Box() : new Circle();
                if (type === 'circle') resizer.radius = radius;
                resizer.draggable = true;
                resizer.focusable = false;
                resizer.fillStyle.color = color;
                resizer.layer = object.layer + 1;
                resizer.cursor = function(camera) {
                    const cursorStyles = [
                        { angle:   0, cursor: 'ew-resize' },
                        { angle:  45, cursor: 'nwse-resize' },
                        { angle:  90, cursor: 'ns-resize' },
                        { angle: 135, cursor: 'nesw-resize' },
                        { angle: 180, cursor: 'ew-resize' },
                        { angle: 225, cursor: 'nwse-resize' },
                        { angle: 270, cursor: 'ns-resize' },
                        { angle: 315, cursor: 'nesw-resize' },
                        { angle: 360, cursor: 'ew-resize' },
                    ];
                    const rotation = ((resizer.globalMatrix.getRotation() + camera.rotation) * 180 / Math.PI) + addRotation;
                    const normalizedRotation = (rotation + 360) % 360;
                    let closestCursor = 'default';
                    let minAngleDiff = Infinity;
                    for (const { angle, cursor } of cursorStyles) {
                        const angleDiff = Math.abs(normalizedRotation - angle);
                        if (angleDiff < minAngleDiff) {
                            minAngleDiff = angleDiff;
                            closestCursor = cursor;
                        }
                    }
                    return closestCursor;
                };
                resizer.onPointerDrag = function(pointer, camera) {
                    Object2D.prototype.onPointerDrag.call(this, pointer, camera);
                    const delta = localDelta(pointer, camera)
                    if (x === 0) delta.x = 0;
                    if (y === 0) delta.y = 0;
                    delta.multiplyScalar(0.5);
                    const size = object.boundingBox.getSize();
                    const scaleX = (x === 0) ? 0 : 2 / size.x;
                    const scaleY = (y === 0) ? 0 : 2 / size.y;
                    const scale = new Vector2(scaleX, scaleY);
                    const rotationMatrix = new Matrix2().rotate(object.rotation);
                    const rotatedDelta = rotationMatrix.transformPoint(delta);
                    object.position.add(rotatedDelta);
                    object.scale.sub(delta.multiply(x, y).multiply(scale));
                    object.matrixNeedsUpdate = true;
                };
                resizerContainer.add(resizer);
                return resizer;
            }
            bottomRight = createResizer('#0000ff', -1, -1, 'circle', 45);
            bottomLeft = createResizer('#ffff00', 1, -1, 'circle', 135);
            topLeft = createResizer('#ff0000', 1, 1, 'circle', 225);
            topRight = createResizer('#00ff00', -1, 1, 'circle', 315);
            rightResizer = createResizer('#0000ff', -1, 0, 'box', 0);
            bottomResizer = createResizer('#ffff00', 0, -1, 'box', 90);
            leftResizer = createResizer('#ff0000', 1, 0, 'box', 180);
            topResizer = createResizer('#00ff00', 0, 1, 'box', 270);
        }

        // Add Rotate Tool
        if (tools === Helpers.ALL || tools === Helpers.ROTATE) {
            rotater = new Circle();
            rotater.draggable = true;
            rotater.focusable = false;
            rotater.radius = radius;
            rotater.layer = object.layer + 1;
            // rotater.cursor = `url('../files/cursors/rotate.png') 16 16, auto`;
            rotater.cursor = `url('${CURSOR_ROTATE}') 16 16, auto`;
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

        // Update Tools
        resizerContainer.onUpdate = function(camera) {
            const box = object.boundingBox;
            const center = box.getCenter();

            // Rotate Tool
            const handleOffset = ((radius * 4) / Math.abs(object.scale.y)) / camera.scale;
            const centerWorld = object.globalMatrix.transformPoint(center);
            const topCenterWorld = object.globalMatrix.transformPoint(center.x, box.min.y - handleOffset);
            if (rotater) {
                rotater.position.copy(topCenterWorld);
                rotater.scale.set(1 / camera.scale, 1 / camera.scale);
                rotater.updateMatrix();
            }

            // Corner Resizers
            const topLeftWorld = object.globalMatrix.transformPoint(box.min);
            const topRightWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
            const bottomLeftWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
            const bottomRightWorld = object.globalMatrix.transformPoint(box.max);
            if (topLeft) {
                topLeft.position.copy(topLeftWorld);
                topLeft.scale.set(1 / camera.scale, 1 / camera.scale);
                topLeft.rotation = object.rotation;
                topLeft.updateMatrix();
            }
            if (topRight) {
                topRight.position.copy(topRightWorld);
                topRight.scale.set(1 / camera.scale, 1 / camera.scale);
                topRight.rotation = object.rotation;
                topRight.updateMatrix();
            }
            if (bottomLeft) {
                bottomLeft.position.copy(bottomLeftWorld);
                bottomLeft.scale.set(1 / camera.scale, 1 / camera.scale);
                bottomLeft.rotation = object.rotation;
                bottomLeft.updateMatrix();
            }
            if (bottomRight) {
                bottomRight.position.copy(bottomRightWorld);
                bottomRight.scale.set(1 / camera.scale, 1 / camera.scale);
                bottomRight.rotation = object.rotation;
                bottomRight.updateMatrix();
            }

            // Side Resizers
            const leftMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, center.y));
            const rightMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, center.y));
            const topMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.min.y));
            const bottomMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.max.y));
            const halfWidth = object.boundingBox.getSize().x / 2 * Math.abs(object.scale.x);
            const halfHeight = object.boundingBox.getSize().y / 2 * Math.abs(object.scale.y);
            if (leftResizer) {
                leftResizer.position.copy(leftMiddleWorld);
                leftResizer.scale.set(1 / camera.scale, 1);
                leftResizer.rotation = object.rotation;
                leftResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                leftResizer.updateMatrix();
            }
            if (rightResizer) {
                rightResizer.position.copy(rightMiddleWorld);
                rightResizer.scale.set(1 / camera.scale, 1);
                rightResizer.rotation = object.rotation;
                rightResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                rightResizer.updateMatrix();
            }
            if (topResizer) {
                topResizer.position.copy(topMiddleWorld);
                topResizer.scale.set(1, 1 / camera.scale);
                topResizer.rotation = object.rotation;
                topResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                topResizer.updateMatrix();
            }
            if (bottomResizer) {
                bottomResizer.position.copy(bottomMiddleWorld);
                bottomResizer.scale.set(1, 1 / camera.scale);
                bottomResizer.rotation = object.rotation;
                bottomResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                bottomResizer.updateMatrix();
            }
        }
    }

}

export { Helpers };
