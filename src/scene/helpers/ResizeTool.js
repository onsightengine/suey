import {
    CURSOR_ROTATE,
} from '../../constants.js';
import { Box } from '../objects/Box.js';
import { Circle } from '../objects/Circle.js';
import { Line } from '../objects/Line.js';
import { LinearGradientStyle } from '../objects/style/LinearGradientStyle.js';
import { Matrix2 } from '../math/Matrix2.js';
import { Object2D } from '../Object2D.js';
import { Vector2 } from '../math/Vector2.js';

class ResizeTool {

    static ALL = 0;
    static RESIZE = 1;
    static ROTATE = 2;

    constructor(object, scene, tools = ResizeTool.ALL, radius = 5) {
        if (!object || !scene) return console.warn(`ResizeTool(): Object or scene missing from argument list`);
        if (!object.boundingBox) return console.warn(`ResizeTool(): Object missing 'boundingBox' property`);

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
        resizerContainer.selectable = false;
        resizerContainer.pointerEvents = false;
        resizerContainer.layer = object.layer + 1;
        scene.add(resizerContainer);

        let topLeft, topRight, bottomLeft, bottomRight;
        let topResizer, rightResizer, bottomResizer, leftResizer;
        let rotater, rotateLine;

        // Add Resizers
        if (tools === ResizeTool.ALL || tools === ResizeTool.RESIZE) {
            function createResizer(x, y, type = 'box', addRotation, alpha) {
                let resizer;
                switch (type) {
                    case 'circle':
                        resizer = new Circle();
                        resizer.radius = radius;
                        break;
                    case 'line':
                        resizer = new Line();
                        resizer.mouseBuffer = radius;
                        break;
                    case 'box':
                    default:
                        resizer = new Box();
                        resizer.box.set(new Vector2(-radius, -radius), new Vector2(radius, radius));
                }
                resizer.draggable = true;
                resizer.focusable = false;
                resizer.selectable = false;
                resizer.layer = object.layer + 1;
                resizer.opacity = alpha;
                resizer.constantWidth = true;
                switch (type) {
                    case 'box':
                    case 'circle':
                        resizer.fillStyle = new LinearGradientStyle();
                        resizer.fillStyle.start.set(-radius, -radius);
                        resizer.fillStyle.end.set(radius, radius);
                        resizer.fillStyle.addColorStop(0, '--icon-light');
                        resizer.fillStyle.addColorStop(1, '--icon-dark');
                        resizer.strokeStyle.color = '--highlight';
                        break;
                    case 'line':
                        resizer.strokeStyle.color = '--highlight';
                        resizer.lineWidth = 1;
                        break;
                }
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
                    let localScale =  object.globalMatrix.getScale();
                    let localRotation = object.globalMatrix.getRotation();
                    if (localScale.x < 0 && localScale.y > 0 || localScale.x > 0 && localScale.y < 0) {
                        localRotation -= (addRotation * (Math.PI / 180));
                    } else {
                        localRotation += (addRotation * (Math.PI / 180));
                    }
                    const rotation = (localRotation + camera.rotation) * 180 / Math.PI;
                    const normalizedRotation = (rotation + 720) % 360;
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
            bottomRight = createResizer(-1, -1, 'box', 45, 1);
            bottomLeft = createResizer(1, -1, 'box', 135, 1);
            topLeft = createResizer(1, 1, 'box', 225, 1);
            topRight = createResizer(-1, 1, 'box', 315, 1);
            rightResizer = createResizer(-1, 0, 'line', 0, 1);
            bottomResizer = createResizer(0, -1, 'line', 90, 1);
            leftResizer = createResizer(1, 0, 'line', 180, 1);
            topResizer = createResizer(0, 1, 'line', 270, 1);
        }

        // Add Rotate Tool
        if (tools === ResizeTool.ALL || tools === ResizeTool.ROTATE) {
            // Circle
            rotater = new Circle();
            rotater.draggable = true;
            rotater.focusable = false;
            rotater.selectable = false;
            rotater.radius = radius + 1;
            rotater.layer = object.layer + 1;
            rotater.constantWidth = true;
            rotater.fillStyle = new LinearGradientStyle();
            rotater.fillStyle.start.set(-radius, -radius);
            rotater.fillStyle.end.set(radius, radius);
            rotater.fillStyle.addColorStop(0, '--icon-light');
            rotater.fillStyle.addColorStop(1, '--icon-dark');
            rotater.strokeStyle.color = '--highlight';
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
            // Line
            rotateLine = new Line();
            rotateLine.lineWidth = 1;
            rotateLine.draggable = false;
            rotateLine.focusable = false;
            rotateLine.selectable = false;
            rotateLine.layer = object.layer + 1;
            rotateLine.constantWidth = true;
            rotateLine.strokeStyle.color = '--highlight';
            resizerContainer.add(rotater, rotateLine);
        }

        // Update Tools
        resizerContainer.onUpdate = function(context, camera) {
            const box = object.boundingBox;
            const center = box.getCenter();

            // Rotate Tool
            const handleOffset = ((radius * 4) / Math.abs(object.scale.y)) / camera.scale;
            const topCenterWorld = object.globalMatrix.transformPoint(center.x, box.min.y);
            const topCenterWorldOffset = object.globalMatrix.transformPoint(center.x, box.min.y - handleOffset);
            if (rotater) {
                rotater.position.copy(topCenterWorldOffset);
                rotater.scale.set(1 / camera.scale, 1 / camera.scale);
                rotater.updateMatrix();
            }
            if (rotateLine) {
                rotateLine.from.copy(topCenterWorldOffset);
                rotateLine.to.copy(topCenterWorld);
                rotateLine.updateMatrix();
            }

            // Corner Resizers
            const topLeftWorld = object.globalMatrix.transformPoint(box.min);
            const topRightWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
            const bottomLeftWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
            const bottomRightWorld = object.globalMatrix.transformPoint(box.max);
            function updateCornerResizer(resizer, point) {
                resizer.position.copy(point);
                resizer.scale.set(1 / camera.scale, 1 / camera.scale);
                resizer.rotation = object.rotation;
                resizer.updateMatrix();
            }
            if (topLeft) updateCornerResizer(topLeft, topLeftWorld);
            if (topRight) updateCornerResizer(topRight, topRightWorld);
            if (bottomLeft) updateCornerResizer(bottomLeft, bottomLeftWorld);
            if (bottomRight) updateCornerResizer(bottomRight, bottomRightWorld);

            // Side Resizers
            const leftMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, center.y));
            const rightMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, center.y));
            const topMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.min.y));
            const bottomMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.max.y));
            const halfWidth = object.boundingBox.getSize().x / 2 * Math.abs(object.scale.x);
            const halfHeight = object.boundingBox.getSize().y / 2 * Math.abs(object.scale.y);
            if (leftResizer) {
                leftResizer.position.copy(leftMiddleWorld);
                leftResizer.rotation = object.rotation;
                if (leftResizer.type === 'Box') {
                    leftResizer.scale.set(1 / camera.scale, 1);
                    leftResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                }
                if (leftResizer.type === 'Line') {
                    leftResizer.mouseBuffer = radius / camera.scale;
                    leftResizer.from.set(0, -halfHeight);
                    leftResizer.to.set(0, +halfHeight);
                }
                leftResizer.updateMatrix();
            }
            if (rightResizer) {
                rightResizer.position.copy(rightMiddleWorld);
                rightResizer.rotation = object.rotation;
                if (rightResizer.type === 'Box') {
                    rightResizer.scale.set(1 / camera.scale, 1);
                    rightResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                }
                if (rightResizer.type === 'Line') {
                    rightResizer.mouseBuffer = radius / camera.scale;
                    rightResizer.from.set(0, -halfHeight);
                    rightResizer.to.set(0, +halfHeight);
                }
                rightResizer.updateMatrix();
            }
            if (topResizer) {
                topResizer.position.copy(topMiddleWorld);
                topResizer.rotation = object.rotation;
                if (topResizer.type === 'Box') {
                    topResizer.scale.set(1, 1 / camera.scale);
                    topResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                }
                if (topResizer.type === 'Line') {
                    topResizer.mouseBuffer = radius / camera.scale;
                    topResizer.from.set(-halfWidth, 0);
                    topResizer.to.set(+halfWidth, 0);
                }
                topResizer.updateMatrix();
            }
            if (bottomResizer) {
                bottomResizer.position.copy(bottomMiddleWorld);
                bottomResizer.rotation = object.rotation;
                if (bottomResizer.type === 'Box') {
                    bottomResizer.scale.set(1, 1 / camera.scale);
                    bottomResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                }
                if (bottomResizer.type === 'Line') {
                    bottomResizer.mouseBuffer = radius / camera.scale;
                    bottomResizer.from.set(-halfWidth, 0);
                    bottomResizer.to.set(+halfWidth, 0);
                }
                bottomResizer.updateMatrix();
            }
        }
    }

}

export { ResizeTool };
