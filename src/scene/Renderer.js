import { Box2 } from './math/Box2.js';
import { Element } from '../core/Element.js';
import { Pointer } from '../utils/input/Pointer.js';
import { Vector2 } from './math/Vector2.js';
import { Viewport } from './Viewport.js';

class Renderer extends Element {

    constructor(options = {}) {
        if (options === undefined) options = {};
        function defaultOption(key, value) {
            if (!(key in options)) options[key] = value;
        }
        defaultOption('alpha', true);
        defaultOption('disableContextMenu', true);
        defaultOption('imageSmoothingEnabled', true);
        defaultOption('imageSmoothingQuality', 'medium'); // 'low');
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
        this.pointer = new Pointer(this, options.disableContextMenu);

        // Auto Clear Canvas? (if false, user must clear the frame)
        this.autoClear = true;

        // Rendering
        this.running = false;
        this.frame = -1;
        this.scene = null;
        this.camera = null;

        // Scope
        const self = this;

        // Resize Observer
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

        // Focus on Double Click
        this.on('dblclick', (event) => {
            if (!self.scene || !self.camera) return;
            const point = new Vector2(event.clientX, event.clientY);
            const worldPoint = self.camera.inverseMatrix.transformPoint(point);
            const objects = self.scene.getWorldPointIntersections(worldPoint);
            for (const object of objects) if (object.focusable) return self.focusCamera(object);
            return self.focusCamera(null);
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
    update(scene, camera) {
        const pointer = this.pointer;
        const context = this.ctx;

        // Update Pointer / Camera
        pointer.update();
        camera.update(pointer);
        camera.updateMatrix(this.width / 2.0, this.height / 2.0);
        const cameraPoint = camera.inverseMatrix.transformPoint(pointer.position);

        // Gather, Sort Objects
        const objects = [];
        scene.traverse(function(child) { if (child.visible) objects.push(child); });
        objects.sort(function(a, b) {
            if (b.layer === a.layer) return b.level - a.level;
            return b.layer - a.layer;
        });

        // Frustum Culling
        const viewport = new Viewport(context, camera);
        const isVisible = {};

        // Pointer Events
        let currentCursor = null;
        for (const object of objects) {
            // Inside Viewport?
            isVisible[object.uuid] = viewport.intersectsBox(object.getWorldBoundingBox());

            // Process?
            if (object.pointerEvents && isVisible[object.uuid]) {
                // Local Pointer Position
                const localPoint = object.inverseGlobalMatrix.transformPoint(cameraPoint);
                const isInside = object.isInside(localPoint);
                // Mouse Cursor
                if (!currentCursor && (isInside || this.beingDragged === object) && object.cursor) {
                    if (typeof object.cursor === 'function') currentCursor = object.cursor(camera);
                    else currentCursor = object.cursor;
                }
                // Pointer Inside?
                if (isInside) {
                    if (this.beingDragged == null) {
                        if (!object.pointerInside && typeof object.onPointerEnter === 'function') object.onPointerEnter(pointer, camera);
                        if (typeof object.onPointerOver === 'function') object.onPointerOver(pointer, camera);
                        if (pointer.buttonDoubleClicked(Pointer.LEFT) && typeof object.onDoubleClick === 'function') object.onDoubleClick(pointer, camera);
                        if (pointer.buttonPressed(Pointer.LEFT) && typeof object.onButtonPressed === 'function') object.onButtonPressed(pointer, camera);
                        if (pointer.buttonJustReleased(Pointer.LEFT) && typeof object.onButtonUp === 'function') object.onButtonUp(pointer, camera);
                        if (pointer.buttonJustPressed(Pointer.LEFT)) {
                            if (typeof object.onButtonDown === 'function') object.onButtonDown(pointer, camera);
                            if (object.draggable) {
                                this.beingDragged = object;
                                if (typeof object.onPointerDragStart === 'function') object.onPointerDragStart(pointer, camera);
                            }
                        }
                    }
                    object.pointerInside = true;
                } else if (this.beingDragged !== object && object.pointerInside) {
                    if (typeof object.onPointerLeave === 'function') object.onPointerLeave(pointer, camera);
                    object.pointerInside = false;
                }
            }

            // Being Dragged?
            if (this.beingDragged === object) {
                // Stop Drag
                if (pointer.buttonJustReleased(Pointer.LEFT)) {
                    if (object.pointerEvents && typeof object.onPointerDragEnd === 'function') {
                        object.onPointerDragEnd(pointer, camera);
                    }
                    this.beingDragged = null;
                // Still Dragging
                } else if (object.pointerEvents && typeof object.onPointerDrag === 'function') {
                    object.onPointerDrag(pointer, camera);
                }
            }
        }

        // Update Cursor
        document.body.style.cursor = currentCursor ?? 'default';

        // Update Transformation Matrices
        scene.traverse(function(child) {
            child.updateMatrix();
        });

        // Update Objects
        scene.traverse(function(child) {
            if (typeof child.onUpdate === 'function') child.onUpdate(context, camera);
        });

        // Reset Context Transform to Identity
        context.setTransform(1, 0, 0, 1, 0, 0);

        // Clear Canvas
        if (this.autoClear) context.clearRect(0, 0, this.width, this.height);

        // Render Objects Back to Front
        for (let i = objects.length - 1; i >= 0; i--) {
            const object = objects[i];
            if (object.isMask) continue;
            if (isVisible[object.uuid] !== true) continue;
            if (object.saveContextState) context.save();

            // Apply Masks
            for (const mask of object.masks) {
                camera.matrix.setContextTransform(context);
                mask.transform(context, camera, this.dom, this);
                mask.clip(context, camera, this.dom);
            }

            // Apply Camera Transform to Canvas
            camera.matrix.setContextTransform(context);

            // Apply Object Transform to Canvas
            object.transform(context, camera, this.dom, this);

            // Apply Object Opacity
            context.globalAlpha = object.globalOpacity;

            // Style and Draw Object
            if (typeof object.style === 'function') object.style(context, camera, this.dom, this);
            if (typeof object.draw === 'function') object.draw(context, camera, this.dom, this);

            if (object.restoreContextState) context.restore();
        }
    }

    /******************** CAMERA */

    focusCamera(object, animationDuration = 200 /* milliseconds */) {
        let targetScale, targetPosition;

        // Focus Object
        if (object) {
            const worldSize = object.getWorldBoundingBox().getSize();
            targetScale = 0.1 * Math.min(this.width / worldSize.x, this.height / worldSize.y);
            targetPosition = object.globalMatrix.getPosition();
            targetPosition.multiplyScalar(-targetScale);
            targetPosition.add(new Vector2(this.width / 2.0, this.height / 2.0));
        // Focus Scene
        } else if (this.scene) {
            const sceneBounds = new Box2();
            this.scene.traverse((child) => { sceneBounds.union(child.getWorldBoundingBox()); });
            targetScale = 0.5 * Math.min(this.width / sceneBounds.getSize().x, this.height / sceneBounds.getSize().y);
            targetPosition = sceneBounds.getCenter();
            targetPosition.multiplyScalar(-targetScale);
            targetPosition.add(new Vector2(this.width / 2.0, this.height / 2.0));
        } else {
            return;
        }
        targetScale = Math.abs(targetScale);

        const startTime = performance.now();
        const startPosition = this.camera.position.clone();
        const startScale = this.camera.scale;
        const animate = () => {
            const elapsedTime = performance.now() - startTime;
            const t = Math.min(elapsedTime / animationDuration, 1);
            this.camera.lerpPosition(startPosition, targetPosition, t);
            this.camera.scale = startScale + (targetScale - startScale) * t;
            if (t < 1) requestAnimationFrame(animate);
        };
        animate();
    }

}

export { Renderer };
