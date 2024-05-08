import { Pointer } from '../input/Pointer.js';
import { Vector2 } from '../math/Vector2.js';

class CameraControls {

    constructor(renderer, camera) {
        // Renderer / Camera
        this.renderer = renderer;
        this.camera = camera;

        // Options
        this.allowDrag = true;                      // allowed to be dragged?
        this.allowScale = true;                     // allowed to be scaled?
        this.allowRotation = true;                  // allowed to be rotated?

        this.dragButton = Pointer.RIGHT;            // button used to drag
        this.rotateButton = Pointer.MIDDLE;         // button used to rotate

        // INTERNAL
        this.rotationPoint = new Vector2(0, 0);     // pointer position when the rotation starts
        this.rotationInitial = 0;                   // initial rotation when the rotation starts
    }

    /** Update the camera using a pointer object (should be called every frame before rendering) */
    update() {
        const camera = this.camera;
        const pointer = this.renderer.pointer;

        // Scale
        if (this.allowScale && pointer.wheel !== 0) {
            const scaleFactor = pointer.wheel * 0.001 * camera.scale;
            const pointerPos = camera.inverseMatrix.transformPoint(pointer.position);
            camera.scale -= scaleFactor;
            camera.position.add(pointerPos.multiplyScalar(scaleFactor));
            camera.matrixNeedsUpdate = true;
        }

        // Rotation
        if (this.allowRotation) {
            if (pointer.buttonJustPressed(this.rotateButton)) {
                this.rotationPoint.copy(pointer.position);
                this.rotationInitial = camera.rotation;
            } else if (pointer.buttonPressed(this.rotateButton)) {
                const point = pointer.position.clone().sub(this.rotationPoint);
                camera.rotation = this.rotationInitial + (point.x * 0.01);
                camera.matrixNeedsUpdate = true;
            }
        }

        // Drag
        if (this.allowDrag && pointer.buttonPressed(this.dragButton)) {
            const currentPointerPos = camera.inverseMatrix.transformPoint(pointer.position.clone());
            const lastPointerPos = camera.inverseMatrix.transformPoint(pointer.position.clone().sub(pointer.delta));
            const delta = currentPointerPos.clone().sub(lastPointerPos).multiplyScalar(camera.scale);
            camera.position.add(delta);
            camera.matrixNeedsUpdate = true;
        }
    }

}

export { CameraControls };
