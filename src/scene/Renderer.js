import { AnimationTimer } from './utils/AnimationTimer';
import { EventManager } from './utils/EventManager';
import { Pointer } from './input/Pointer.js';

/**
 * The renderer is responsible for drawing the objects structure into the canvas element and manage its rendering state.
 * Object are updated by the renderer before drawing, the renderer sorts the objects by layer, checks for pointer events and draw the objects into the screen.
 * Input handling is also performed by the renderer (it is also used for the event handling).
 */
class Renderer {

    constructor(canvas, options = {}) {
        if (options === undefined) options = {};
        if (!('alpha' in options)) options.alpha = true;
        if (!('disableContextMenu' in options)) options.disableContextMenu = true;
        if (!('imageSmoothingEnabled' in options)) options.imageSmoothingEnabled = true;
        if (!('imageSmoothingQuality' in options)) options.imageSmoothingQuality = 'low';
        if (!('globalCompositeOperation' in options)) options.globalCompositeOperation = 'source-over';

        // Event Manager
        this.manager = new EventManager();
        if (options.disableContextMenu) {
            this.manager.add(canvas, 'contextmenu', function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
        }
        this.manager.create();

        // Canvas
        this.canvas = canvas;

        // Division where DOM and SVG objects should be placed at. This division should be perfectly aligned whit the canvas element.
        // If no division is defined the canvas parent element is used by default to place these objects.
        // The DOM container to be used can be obtained using the getDomContainer() method.
        this.container = null;

        // 2D Rendering Context
        this.context = this.canvas.getContext('2d', { alpha: options.alpha });
        this.context.imageSmoothingEnabled = options.imageSmoothingEnabled;
        this.context.imageSmoothingQuality = options.imageSmoothingQuality;
        this.context.globalCompositeOperation = options.globalCompositeOperation;

        // Pointer input handler object, automatically updated by the renderer
        this.pointer = new Pointer(window, this.canvas);

        // Canvas should to be auto cleared each frame (if false, user must clear the frame)
        this.autoClear = true;
    }

    /**
     * Get the DOM container to be used to store DOM and SVG objects.
     * Can be set using the container attribute, by default the canvas parent element is used.
     * @returns {Element} DOM element selected for objects.
     */
    getDomContainer() {
        return this.container ?? this.canvas.parentElement;
    }

    /**
     * Creates a infinite render loop to render the group into a viewport each frame.
     * Automatically creates a viewport controls object, used for the user to control the viewport.
     * The render loop can be accessed trough the animation timer returned. Should be stopped when no longer necessary to prevent memory/code leaks.
     * @param {Object2D} group Object to be rendered, alongside with all its children. Object2D can be used as a container to group objects.
     * @param {Viewport} viewport Viewport into the scene.
     * @param {Function} onUpdate Function called before rendering the frame, can be used for additional logic code. Object logic should be directly written in the update method of objects.
     * @return {AnimationTimer} Animation timer created for this render loop. Should be stopped when no longer necessary.
     */
    createRenderLoop(group, viewport, onUpdate) {
        viewport.offsetCanvas();
        const self = this;
        const timer = new AnimationTimer(function() {
            if (typeof onUpdate === 'function') onUpdate();
            self.update(group, viewport);
        });
        timer.start();
        return timer;
    }

    /**
     * Dispose the renderer object, clears the pointer events attached to the window/canvas.
     * Should be called if the renderer is no longer in use to prevent code/memory leaks.
     */
    dispose(group, viewport, onUpdate) {
        this.manager.destroy();
        this.pointer.dispose();
    }

    /**
     * Renders a object using a user defined viewport into a canvas element.
     * Before rendering automatically updates the input handlers and calculates the objects/viewport transformation matrices.
     * The canvas state is saved and restored for each individual object, ensuring that the code of one object does not affect another one.
     * Should be called at a fixed rate preferably using the requestAnimationFrame() method, its also possible to use the createRenderLoop() method, that automatically creates a infinite render loop.
     * @param object {Object2D} Object to be updated and drawn into the canvas, the Object2D should be used as a group to store all the other objects to be updated and drawn.
     * @param viewport {Viewport} Viewport to be updated (should be the one where the objects will be rendered after).
     */
    update(object, viewport) {
        // Pointer Update
        this.pointer.update();

        // Viewport Transform
        viewport.update(this.pointer);
        viewport.updateMatrix();

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
        objects.reverse();

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
                    // Drag object and break to only start a drag operation on the top element
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

            // Stop object drag
            if (child.beingDragged === true && pointer.buttonJustReleased(Pointer.LEFT)) {
                if (typeof child.onPointerDragEnd === 'function') child.onPointerDragEnd(pointer, viewport);
                child.beingDragged = false;
            }
        }

        // Object Drag Events
        for (const child of objects) {
            // Dragging?
            if (child.beingDragged && typeof child.onPointerDrag === 'function') {
                const lastPosition = pointer.position.clone();
                lastPosition.sub(pointer.delta);

                // Get position and last position in world space to calculate world pointer movement
                const positionWorld = viewport.inverseMatrix.transformPoint(pointer.position);
                const lastWorld = viewport.inverseMatrix.transformPoint(lastPosition);

                // Pointer movement delta in world coordinates
                const delta = positionWorld.clone();
                delta.sub(lastWorld);

                child.onPointerDrag(pointer, viewport, delta, positionWorld);
            }

            // Update
            if (typeof child.onUpdate === 'function') child.onUpdate();
        }

        // Update transformation matrices
        object.traverse(function(child) {
            child.updateMatrix();
        });

        // Identity Transform
        this.context.setTransform(1, 0, 0, 1, 0, 0);

        // Clear canvas content
        if (this.autoClear) this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Render Objects
        for (const object of objects) {
            if (object.isMask) continue;
            if (object.saveContextState) this.context.save();

            // Apply all masks
            for (const mask of object.masks) {
                if (!mask.ignoreViewport) viewport.matrix.setContextTransform(this.context);
                mask.transform(this.context, viewport, this.canvas, this);
                mask.clip(this.context, viewport, this.canvas);
            }

            // Set the viewport transform
            if (!object.ignoreViewport) {
                viewport.matrix.setContextTransform(this.context);
            } else if (object.masks.length > 0) {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
            }

            // Apply the object transform to the canvas context
            object.transform(this.context, viewport, this.canvas, this);

            // Style and Draw Object
            if (typeof object.style === 'function') object.style(this.context, viewport, this.canvas);
            if (typeof object.draw === 'function') object.draw(this.context, viewport, this.canvas);

            if (object.restoreContextState) this.context.restore();
        }
    };

}

export { Renderer };
