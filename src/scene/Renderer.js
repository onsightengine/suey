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
        this.id = -1;

        // Disable Context Menu
        this.on('contextmenu', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
    }

    start(group, viewport, onUpdate) {
        if (this.running) return;
        this.running = true;

        const self = this;
        function loop() {
            if (typeof onUpdate === 'function') onUpdate();
            self.update(group, viewport);
            if (self.running) self.id = requestAnimationFrame(loop);
        }
        loop();
    }

    stop() {
        this.running = false;
        cancelAnimationFrame(this.id);
    }

    /** Renders an object using a viewport onto this canvas */
    update(object, viewport) {
        // Pointer Update
        this.pointer.update();

        // Viewport Transform
        viewport.update(this.pointer);
        viewport.updateMatrix(this.width / 2.0, this.height / 2.0);

        // Project pointer coordinates
        const pointer = this.pointer;
        const point = pointer.position.clone();
        const viewportPoint = viewport.inverseMatrix.transformPoint(point);

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
            const localPoint = child.inverseGlobalMatrix.transformPoint(child.ignoreViewport ? point : viewportPoint);

            // Pointer Inside?
            if (child.isInside(localPoint)) {
                if (!child.pointerInside && typeof child.onPointerEnter === 'function') child.onPointerEnter(pointer, viewport);
                if (typeof child.onPointerOver === 'function') child.onPointerOver(pointer, viewport);
                if (pointer.buttonDoubleClicked(Pointer.LEFT) && typeof child.onDoubleClick === 'function') child.onDoubleClick(pointer, viewport);
                if (pointer.buttonPressed(Pointer.LEFT) && typeof child.onButtonPressed === 'function') child.onButtonPressed(pointer, viewport);
                if (pointer.buttonJustReleased(Pointer.LEFT) && typeof child.onButtonUp === 'function') child.onButtonUp(pointer, viewport);
                if (pointer.buttonJustPressed(Pointer.LEFT)) {
                    if (typeof child.onButtonDown === 'function') child.onButtonDown(pointer, viewport);
                    // Start Object Drag & Break (to only start a drag operation on the top element)
                    if (child.draggable) {
                        child.beingDragged = true;
                        if (typeof child.onPointerDragStart === 'function') child.onPointerDragStart(pointer, viewport);
                        break;
                    }
                }
                child.pointerInside = true;
            } else if (child.pointerInside) {
                if (typeof child.onPointerLeave === 'function') child.onPointerLeave(pointer, viewport);
                child.pointerInside = false;
            }

            // Stop Drag
            if (child.beingDragged === true && pointer.buttonJustReleased(Pointer.LEFT)) {
                if (typeof child.onPointerDragEnd === 'function') child.onPointerDragEnd(pointer, viewport);
                child.beingDragged = false;
            }
        }

        // Object Drag Events
        for (const child of objects) {
            // Dragging?
            if (child.beingDragged && typeof child.onPointerDrag === 'function') {
                child.onPointerDrag(pointer, viewport);
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
                if (!mask.ignoreViewport) viewport.matrix.setContextTransform(this.ctx);
                mask.transform(this.ctx, viewport, this.dom, this);
                mask.clip(this.ctx, viewport, this.dom);
            }

            // Set the viewport transform
            if (!object.ignoreViewport) {
                viewport.matrix.setContextTransform(this.ctx);
            } else if (object.masks.length > 0) {
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            }

            // Apply the object transform to the canvas context
            object.transform(this.ctx, viewport, this.dom, this);

            // Style and Draw Object
            if (typeof object.style === 'function') object.style(this.ctx, viewport, this.dom);
            if (typeof object.draw === 'function') object.draw(this.ctx, viewport, this.dom);

            if (object.restoreContextState) this.ctx.restore();
        }
    };

}

export { Renderer };
