import { Matrix2 } from './math/Matrix2.js';
import { Pointer } from './input/Pointer.js';
import { UUID } from './math/UUID.js';
import { Vector2 } from './math/Vector2.js';

/**
 * Viewport defines the user view into the content being rendered.
 * Similar to a camera it defines the size of the content, rotation and position of the content.
 * The viewport can be moved, rotated and scaled to navigate the virtual canvas.
 */
class Viewport {

    constructor(canvas) {
        this.uuid = UUID.generate();
        this.canvas = canvas;

        this.position = new Vector2(0, 0);
        this.center = new Vector2(0, 0);
        this.scale = 1.0;
        this.rotation = 0.0;

        this.matrix = new Matrix2();
        this.inverseMatrix = new Matrix2();
        this.matrixNeedsUpdate = true;

        this.dragButton = Pointer.RIGHT;            // button used to drag and viewport around
        this.rotateButton = Pointer.MIDDLE;         // button used to rotate the viewport

        this.allowDrag = true;                      // viewport allowed to be dragged?
        this.allowScale = true;                     // viewport allowed to be scaled?
        this.allowRotation = true;                  // viewport allowed to be rotated?

        // INTERNAL
        this.rotationPoint = null;                  // pointer position when the rotation starts
        this.rotationInitial = 0;                   // initial rotation of the viewport when the rotation starts
    }

    /** Update the viewport controls using a pointer object, should be called every frame before rendering */
    update(pointer) {
        // Scale
        if (this.allowScale && pointer.wheel !== 0) {
            // Adjust Scale
            const scaleFactor = pointer.wheel * 0.001 * this.scale;
            this.scale -= scaleFactor;
            // Adjust Position
            const c = Math.cos(this.rotation);
            const s = Math.sin(this.rotation);
            const rotateMatrix = new Matrix2([ c, s, -s, c, 0, 0 ]);
            const pointerPos = this.inverseMatrix.transformPoint(pointer.position);
            const rotatedPos = rotateMatrix.transformPoint(pointerPos.multiplyScalar(scaleFactor));
            this.position.add(rotatedPos);
            this.matrixNeedsUpdate = true;
        }

        // Rotation
        if (this.allowRotation && pointer.buttonPressed(this.rotateButton)) {
            // Pivot Point
            if (!this.rotationPoint) {
                this.rotationPoint = pointer.position.clone();
                this.rotationInitial = this.rotation;
                return;
            }
            // Rotate
            const point = pointer.position.clone().sub(this.rotationPoint)
            this.rotation = this.rotationInitial + (point.manhattanLength() * 0.01);
            this.matrixNeedsUpdate = true;
            return;
        } else {
            this.rotationPoint = null;
        }

        // Drag
        if (this.allowDrag && pointer.buttonPressed(this.dragButton)) {
            this.position.add(pointer.delta);
            this.matrixNeedsUpdate = true;
        }
    }

    /** Calculate and update the viewport transformation matrix */
    updateMatrix() {
        if (!this.matrixNeedsUpdate) return;
        this.matrix.identity();
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, this.position.x, this.position.y ]));
        const c = Math.cos(this.rotation);
        const s = Math.sin(this.rotation);
        this.matrix.multiply(new Matrix2([ c, s, -s, c, 0, 0 ]));
        this.matrix.multiply(new Matrix2([ this.scale, 0, 0, this.scale, 0, 0 ]));
        this.inverseMatrix = this.matrix.getInverse();
        this.matrixNeedsUpdate = false;
    }

    /**
     * Center the viewport relative to a object.
     * The position of the object is used a central point, this method does not consider 'box' attributes or other strucures in the object.
     * Uses the object's local transformation matrix and the canvas size to calculate the new position of the viewport.
     * @param {Object2D} object Object to be centered on the viewport.
     * @param {Element} canvas Canvas element where the image is drawn.
     */
    centerObject(object, canvas) {
        const position = object.globalMatrix.transformPoint(new Vector2());
        position.multiplyScalar(-this.scale);
        position.x += canvas.width / 2;
        position.y += canvas.height / 2;
        this.position.copy(position);
        this.matrixNeedsUpdate = true;
    }

}

export { Viewport };
