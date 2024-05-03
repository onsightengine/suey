import { Canvas } from '../core/Canvas.js';
import { Pointer } from '../utils/input/Pointer.js';
import { Vector2 } from './math/Vector2.js';

class Renderer extends Canvas {

    constructor(options = {}) {
        if (options === undefined) options = {};
        if (!('alpha' in options)) options.alpha = true;
        if (!('disableContextMenu' in options)) options.disableContextMenu = true;
        if (!('imageSmoothingEnabled' in options)) options.imageSmoothingEnabled = true;
        if (!('imageSmoothingQuality' in options)) options.imageSmoothingQuality = 'low';
        if (!('globalCompositeOperation' in options)) options.globalCompositeOperation = 'source-over';
        options.width = options.width ?? 1000;
        options.height = options.height ?? 1000;

        // Create Canvas
        super(options.width, options.height, false /* createContext? */);

        // 2D Rendering Context
        this.ctx = this.dom.getContext('2d', { alpha: options.alpha });
        this.ctx.imageSmoothingEnabled = options.imageSmoothingEnabled;
        this.ctx.imageSmoothingQuality = options.imageSmoothingQuality;
        this.ctx.globalCompositeOperation = options.globalCompositeOperation;

        // Pointer Input Handler Object
        this.pointer = new Pointer(this);

        // Auto Clear Canvas? (if false, user must clear the frame)
        this.autoClear = true;

        // Rendering
        this.running = false;
        this.frame = -1;
        this.scene = null;
        this.camera = null;

        // Resize Observer
        const self = this;
        const canvas = this.dom;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                canvas.width = entry.contentRect.width;
                canvas.height = entry.contentRect.height;
                if (self.running && self.scene && self.camera) {
                    self.update(self.scene, self.camera);
                }
            }
        });
        resizeObserver.observe(canvas);
        this.on('destroy', () => {
            resizeObserver.unobserve(canvas);
        });
    }

    start(scene, camera, onUpdate) {
        if (this.running) return;
        this.running = true;
        this.scene = scene;
        this.camera = camera;

        const self = this;
        function loop() {
            if (typeof onUpdate === 'function') onUpdate();
            self.update(scene, camera);
            if (self.running) self.frame = requestAnimationFrame(loop);
        }
        loop();
    }

    stop() {
        this.running = false;
        cancelAnimationFrame(this.frame);
    }

    /** Renders an object using a camera onto this canvas */
    update(object, camera) {
        // Pointer Update
        this.pointer.update();

        // Camera Transform
        camera.update(this.pointer);
        camera.updateMatrix(this.width / 2.0, this.height / 2.0);

        // Project Pointer Coordinates
        const pointer = this.pointer;
        const point = pointer.position.clone();
        const cameraPoint = camera.inverseMatrix.transformPoint(point);

        // Gather, Sort Objects
        const objects = [];
        object.traverse(function(child) { if (child.visible) objects.push(child); });
        objects.sort(function(a, b) {
            if (b.layer === a.layer) return b.level - a.level;
            return b.layer - a.layer;
        });

        // Object Pointer Events
        for (const child of objects) {
            if (!child.pointerEvents) continue;

            // Pointer position in object coordinates
            const localPoint = child.inverseGlobalMatrix.transformPoint(child.ignoreCamera ? point : cameraPoint);

            // Pointer Inside?
            if (child.isInside(localPoint)) {
                if (!child.pointerInside && typeof child.onPointerEnter === 'function') child.onPointerEnter(pointer, camera);
                if (typeof child.onPointerOver === 'function') child.onPointerOver(pointer, camera);
                if (pointer.buttonDoubleClicked(Pointer.LEFT) && typeof child.onDoubleClick === 'function') child.onDoubleClick(pointer, camera);
                if (pointer.buttonPressed(Pointer.LEFT) && typeof child.onButtonPressed === 'function') child.onButtonPressed(pointer, camera);
                if (pointer.buttonJustReleased(Pointer.LEFT) && typeof child.onButtonUp === 'function') child.onButtonUp(pointer, camera);
                if (pointer.buttonJustPressed(Pointer.LEFT)) {
                    if (typeof child.onButtonDown === 'function') child.onButtonDown(pointer, camera);
                    // Start Object Drag & Break (to only start a drag operation on the top element)
                    if (child.draggable) {
                        child.beingDragged = true;
                        if (typeof child.onPointerDragStart === 'function') child.onPointerDragStart(pointer, camera);
                        break;
                    }
                }
                child.pointerInside = true;
            } else if (child.pointerInside) {
                if (typeof child.onPointerLeave === 'function') child.onPointerLeave(pointer, camera);
                child.pointerInside = false;
            }

            // Stop Drag
            if (child.beingDragged === true && pointer.buttonJustReleased(Pointer.LEFT)) {
                if (typeof child.onPointerDragEnd === 'function') child.onPointerDragEnd(pointer, camera);
                child.beingDragged = false;
            }
        }

        // Object Drag Events
        for (const child of objects) {
            // Dragging?
            if (child.beingDragged && typeof child.onPointerDrag === 'function') {
                child.onPointerDrag(pointer, camera);
            }

            // Update
            if (typeof child.onUpdate === 'function') child.onUpdate();
        }

        // Update transformation matrices
        object.traverse(function(child) {
            child.updateMatrix();
        });

        // Identity Transform
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Clear canvas content
        if (this.autoClear) this.ctx.clearRect(0, 0, this.width, this.height);

        // Render Back to Front
        objects.reverse();

        // Render Objects
        for (const object of objects) {
            if (object.isMask) continue;
            if (object.saveContextState) this.ctx.save();

            // Apply all masks
            for (const mask of object.masks) {
                if (!mask.ignoreCamera) camera.matrix.setContextTransform(this.ctx);
                mask.transform(this.ctx, camera, this.dom, this);
                mask.clip(this.ctx, camera, this.dom);
            }

            // Set Context Transform
            if (!object.ignoreCamera) {
                camera.matrix.setContextTransform(this.ctx);
            } else if (object.masks.length > 0) {
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            }

            // Apply the object transform to the canvas context
            object.transform(this.ctx, camera, this.dom, this);

            // Style and Draw Object
            if (typeof object.style === 'function') object.style(this.ctx, camera, this.dom, this);
            if (typeof object.draw === 'function') object.draw(this.ctx, camera, this.dom, this);

            if (object.restoreContextState) this.ctx.restore();
        }
    };

}

export { Renderer };
