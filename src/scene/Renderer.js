import { Element } from '../core/Element.js';
import { Pointer } from '../utils/input/Pointer.js';
import { Vector2 } from './math/Vector2.js';

class Renderer extends Element {

    constructor(options = {}) {
        if (options === undefined) options = {};
        function defaultOption(key, value) {
            if (!(key in options)) options[key] = value;
        }
        defaultOption('alpha', true);
        defaultOption('disableContextMenu', true);
        defaultOption('imageSmoothingEnabled', true);
        defaultOption('imageSmoothingQuality', 'low');
        defaultOption('globalCompositeOperation', 'source-over');
        defaultOption('width', 1000);
        defaultOption('height', 1000);

        const canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
        canvas.width = options.width;
        canvas.height = options.height;
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        super(canvas);

        // Rendering Context (2D)
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

        // INTERNAL
        this.beingDragged = null;
    }

    /******************** SIZING */

    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }

    get height() { return this.dom.height; }
    set height(y) { this.dom.height = y; }

    ratio() {
        const rect = this.dom.getBoundingClientRect();
        return ((this.width / this.height) / (rect.width / rect.height));
    }

    /******************** RENDERING */

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

        // Pointer Events
        for (const child of objects) {
            // Process?
            if (child.pointerEvents) {
                // Local Pointer Position
                const localPoint = child.inverseGlobalMatrix.transformPoint(child.ignoreCamera ? point : cameraPoint);
                // Pointer Inside?
                if (!this.beingDragged && child.isInside(localPoint)) {
                    if (!child.pointerInside && typeof child.onPointerEnter === 'function') child.onPointerEnter(pointer, camera);
                    if (typeof child.onPointerOver === 'function') child.onPointerOver(pointer, camera);
                    if (pointer.buttonDoubleClicked(Pointer.LEFT) && typeof child.onDoubleClick === 'function') child.onDoubleClick(pointer, camera);
                    if (pointer.buttonPressed(Pointer.LEFT) && typeof child.onButtonPressed === 'function') child.onButtonPressed(pointer, camera);
                    if (pointer.buttonJustReleased(Pointer.LEFT) && typeof child.onButtonUp === 'function') child.onButtonUp(pointer, camera);
                    if (pointer.buttonJustPressed(Pointer.LEFT)) {
                        if (typeof child.onButtonDown === 'function') child.onButtonDown(pointer, camera);
                        if (child.draggable) {
                            this.beingDragged = child;
                            if (typeof child.onPointerDragStart === 'function') child.onPointerDragStart(pointer, camera);
                        }
                    }
                    child.pointerInside = true;
                } else if (this.beingDragged !== child && child.pointerInside) {
                    if (typeof child.onPointerLeave === 'function') child.onPointerLeave(pointer, camera);
                    child.pointerInside = false;
                }
            }

            // Stop Drag
            if (pointer.buttonJustReleased(Pointer.LEFT)) {
                if (this.beingDragged === child && child.pointerEvents && typeof child.onPointerDragEnd === 'function') {
                    child.onPointerDragEnd(pointer, camera);
                }
                this.beingDragged = null;

            // Still Dragging
            } else if (this.beingDragged === child && child.pointerEvents && typeof child.onPointerDrag === 'function') {
                child.onPointerDrag(pointer, camera);
            }
        }

        // Update Transformation Matrices
        object.traverse(function(child) {
            child.updateMatrix();
        });

        // Update Objects
        object.traverse(function(child) {
            if (typeof child.onUpdate === 'function') child.onUpdate(camera);
        });

        // Identity Transform
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Clear Canvas
        if (this.autoClear) this.ctx.clearRect(0, 0, this.width, this.height);

        // Render Objects Back to Front
        for (let i = objects.length - 1; i >= 0; i--) {
            const object = objects[i];
            if (object.isMask) continue;
            if (object.saveContextState) this.ctx.save();

            // Apply Masks
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

            // Apply Object Transform to Canvas
            object.transform(this.ctx, camera, this.dom, this);

            // Style and Draw Object
            if (typeof object.style === 'function') object.style(this.ctx, camera, this.dom, this);
            if (typeof object.draw === 'function') object.draw(this.ctx, camera, this.dom, this);

            if (object.restoreContextState) this.ctx.restore();
        }
    };

}

export { Renderer };
