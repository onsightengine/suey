import { Matrix2 } from './math/Matrix2.js';
import { UUID } from './math/UUID.js';
import { Vector2 } from './math/Vector2.js';

class Object2D {

    type = 'Object2D';

    constructor() {
        this.uuid = UUID.generate();

        this.children = [];
        this.parent = null;

        this.visible = true;
        this.layer = 0;                             // lower layer is drawn first, higher is drawn on top
        this.level = 0;                             // higher depth is drawn on top, layer is considered first

        this.position = new Vector2(0, 0);
        this.scale = new Vector2(1, 1);
        this.rotation = 0.0;
        this.origin = new Vector2(0, 0);            // point of rotation

        this.matrix = new Matrix2();
        this.globalMatrix = new Matrix2();
        this.inverseGlobalMatrix = new Matrix2();
        this.matrixAutoUpdate = true;
        this.matrixNeedsUpdate = true;

        this.masks = [];

        this.draggable = false;
        this.pointerEvents = true;                  // better performance if pointer events are not required

        this.ignoreViewport = false;                // FLAG: ignore the viewport transformation?
        this.saveContextState = true;               // FLAG: context of canvas should be saved before render?
        this.restoreContextState = true;            // FLAG: context of canvas should be restored after render?
        this.pointerInside = false;                 // FLAG: pointer is inside of the element?
        this.beingDragged = false;                  // FLAG: object is currently being dragged?

        this.serializable = true;                   // should be serialized?
    }

    /**
     * Check if a point in world coordinates intersects this object or its children and get a list of the objects intersected.
     *
     * @param {Vector2} point Point in world coordinates.
     * @param {Object2D[]} list List of objects intersected passed to children objects recursively.
     * @return {Object2D[]} List of object intersected by this point.
     */
    getWorldPointIntersections(point, list = []) {
        if (Array.isArray(list) === false) list = [];
        // Calculate the pointer position in the object coordinates
        const localPoint = this.inverseGlobalMatrix.transformPoint(point);
        if (this.isInside(localPoint)) list.push(this);
        // Recursive
        for (const child of this.children) {
            child.getWorldPointIntersections(point, list);
        }
        return list;
    }

    /**
     * Check if a point in world coordinates intersects this object or some of its children.
     *
     * @param {Vector2} point Point in world coordinates.
     * @param {boolean} recursive If set to true it will also check intersections with the object children.
     * @return {boolean} Returns true if the point in inside of the object.
     */
    isWorldPointInside(point, recursive) {
        // Calculate the pointer position in the object coordinates
        const localPoint = this.inverseGlobalMatrix.transformPoint(point);
        if (this.isInside(localPoint)) return true;
        // Recursive
        if(recursive) {
            for (const child of this.children) {
                if(child.isWorldPointInside(point, true)) return true;
            }
        }
        return false;
    }

    /** Remove objecet from its parent */
    destroy() {
        if (this.parent) this.parent.remove(this);
        return this;
    }

    traverse(callback) {
        callback(this);
        for (const child of this.children) {
            child.traverse(callback);
        }
    }

    getChildByUUID(uuid) {
        let object = null;
        this.traverse(function(child) {
            if (child.uuid === uuid) object = child;
        });
        return object;
    }

    add(object) {
        object.parent = this;
        object.level = this.level + 1;
        object.traverse(function(child) {
            if (typeof child.onAdd === 'function') child.onAdd(this);
        });
        this.children.push(object);
        return this;
    }

    remove(children) {
        let index = this.children.indexOf(children);
        if (index !== -1) {
            let object = this.children[index];
            object.parent = null;
            object.level = 0;
            object.traverse(function(child) {
                if (typeof child.onRemove === 'function') child.onRemove(this);
            });
        }
        this.children.splice(index, 1)
    }

    /**
     * Check if a point is inside of the object.
     * Used by the renderer check for pointer collision (required for the object to properly process pointer events).
     * Point should be in local object coordinates.
     * To check if a point in world coordinates intersects the object the inverseGlobalMatrix should be applied to that point before calling this method.
     */
    isInside(point) {
        /** OVERLOAD */
        return false;
    }

    /**
     * Update the transformation matrix of the object
     * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
     */
    updateMatrix(context) {
        if (this.matrixAutoUpdate || this.matrixNeedsUpdate) {
            this.matrix.compose(this.position.x, this.position.y, this.scale.x, this.scale.y, this.origin.x, this.origin.y, this.rotation);
            this.globalMatrix.copy(this.matrix);
            if (this.parent) this.globalMatrix.premultiply(this.parent.globalMatrix);
            this.inverseGlobalMatrix = this.globalMatrix.getInverse();
            this.matrixNeedsUpdate = false;
        }
    }

    /**
     * Apply the transform to the rendering context, it is assumed that the viewport transform is pre-applied to the context.
     * This is called before style() and draw(). It can also be used for some pre-rendering logic.
     * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
     * @param {Viewport} viewport Viewport applied to the canvas.
     * @param {Element} canvas DOM canvas element where the content is being drawn.
     * @param {Renderer} renderer Renderer object being used to draw the object into the canvas.
     */
    transform(context, viewport, canvas, renderer) {
        this.globalMatrix.tranformContext(context);
    }

    /**
     * Style is called right before draw() it should not draw any content into the canvas, all context styling should be applied here (colors, fonts, etc).
     * The draw() and style() methods can be useful for objects that share the same styling attributes but are drawing differently.
     * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
     * @param {Viewport} viewport Viewport used to view the canvas content.
     * @param {Element} canvas DOM canvas element where the content is being drawn.
     */
    // OVERLOAD: style(context, viewport, canvas) {}

    /**
     * Draw the object into the canvas, this is called transform() and style(), should be where the content is actually drawn into the canvas.
     * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
     * @param {Viewport} viewport Viewport used to view the canvas content.
     * @param {Element} canvas DOM canvas element where the content is being drawn.
     */
    // OVERLOAD: draw(context, viewport, canvas) {}

    /**
     * Callback method while the object is being dragged across the screen.
     * By default is adds the delta value to the object position (making it follow the mouse movement).
     * Delta is the movement of the pointer already translated into local object coordinates.
     * To detect when the object drag stops the onPointerDragEnd() method can be used.
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     * @param {Vector2} delta Pointer movement diff in world space since the last frame.
     * @param {Vector2} positionWorld Position of the dragging pointer in world coordinates.
     */
    onPointerDrag(pointer, viewport, delta, positionWorld) {
        this.position.add(delta);
    }

    /**
     * Callback method called when the pointer drag start after the button was pressed
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onPointerDragStart(pointer, viewport) {}

    /**
     * Callback method called when the pointer drag ends after the button has been released.
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onPointerDragEnd(pointer, viewport) {}

    /**
     * Method called when the object its added to a parent.
     * @param {Object2D} parent Parent object were it was added.
     */
    // OVERLOAD: onAdd(parent) {}

    /**
     * Method called when the object gets removed from its parent
     * @param {Object2D} parent Parent object from were the object is being removed.
     */
    // OVERLOAD: onRemove(parent) {}

    /**
     * Callback method called every time before the object is draw into the canvas.
     * Should be used to run object logic, any preparation code, move the object, etc.
     * This method is called for every object before rendering.
     */
    // OVERLOAD: onUpdate() {}

    /**
     * Callback method called when the pointer enters the object.
     *
     * It is not called while the pointer is inside of the object, just on the first time that the pointer enters the object for that use onPointerOver()
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onPointerEnter(pointer, viewport) {}

    /**
     * Method called when the was inside of the object and leaves the object.
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onPointerLeave(pointer, viewport) {}

    /**
     * Method while the pointer is over (inside) of the object.
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onPointerOver(pointer, viewport) {}

    /**
     * Method called while the pointer button is pressed.
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onButtonPressed(pointer, viewport) {}

    /**
     * Method called while the pointer button is double clicked.
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onDoubleClick(pointer, viewport) {}

    /**
     * Callback method called when the pointer button is pressed down (single time).
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onButtonDown(pointer, viewport) {}

    /**
     * Method called when the pointer button is released (single time).
     *
     * @param {Pointer} pointer Pointer object that receives the user input.
     * @param {Viewport} viewport Viewport where the object is drawn.
     */
    // OVERLOAD: onButtonUp(pointer, viewport) {}

}

export { Object2D };
