import { Matrix2 } from './math/Matrix2.js';
import { Pointer } from './input/Pointer.js';
import { UUID } from './math/UUID.js';
import { Vector2 } from './math/Vector2.js';

class Viewport {

    constructor(canvas) {
        this.uuid = UUID.generate();
        this.canvas = canvas;

        this.position = new Vector2(0, 0);
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
        this.rotationPoint = new Vector2(0, 0);     // pointer position when the rotation starts
        this.rotationInitial = 0;                   // initial rotation of the viewport when the rotation starts
    }

    /** Update the viewport controls using a pointer object, should be called every frame before rendering */
    update(pointer) {
        // Scale
        if (this.allowScale && pointer.wheel !== 0) {
            const scaleFactor = pointer.wheel * 0.001 * this.scale;
            const pointerPos = this.inverseMatrix.transformPoint(pointer.position);
            this.scale -= scaleFactor;
            this.position.add(pointerPos.multiplyScalar(scaleFactor));
            this.matrixNeedsUpdate = true;
        }

        // Rotation
        if (this.allowRotation) {
            if (pointer.buttonJustPressed(this.rotateButton)) {
                this.rotationPoint.copy(pointer.position);
                this.rotationInitial = this.rotation;
            } else if (pointer.buttonPressed(this.rotateButton)) {
                const point = pointer.position.clone().sub(this.rotationPoint);
                this.rotation = this.rotationInitial + (point.x * 0.01);
                this.matrixNeedsUpdate = true;
            }
        }

        // Drag
        if (this.allowDrag && pointer.buttonPressed(this.dragButton)) {
            const currentPointerPos = this.inverseMatrix.transformPoint(pointer.position.clone());
            const lastPointerPos = this.inverseMatrix.transformPoint(pointer.position.clone().sub(pointer.delta));
            const delta = currentPointerPos.clone().sub(lastPointerPos).multiplyScalar(this.scale);
            this.position.add(delta);
            this.matrixNeedsUpdate = true;
        }

    }

    /** Calculate and update the viewport transformation matrix */
    updateMatrix() {
        if (!this.matrixNeedsUpdate) return;
        this.matrix.identity();

        // Rotate
        const centerX = this.canvas ? this.canvas.width / 2.0 : 0;
        const centerY = this.canvas ? this.canvas.height / 2.0 : 0;
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, centerX, centerY ]));
        const c = Math.cos(this.rotation);
        const s = Math.sin(this.rotation);
        this.matrix.multiply(new Matrix2([ c, s, -s, c, 0, 0 ]));
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, -centerX, -centerY ]));

        // Translate
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, this.position.x, this.position.y ]));

        // Scale
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

    /** Offsets position to canvas center */
    offsetCanvas(canvas) {
        const position = new Vector2(canvas.width / 2.0, canvas.height / 2.0);
        this.position.copy(position);
    }

}

export { Viewport };
