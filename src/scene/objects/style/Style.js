/**
 * Style represents in a generic way a style applied to canvas drawing.
 * Some styles (e.g. gradients, patterns) required a context to be generated this provides a generic way to share styles between objects.
 */
class Style {

    constructor() {
        /**
         * Cached style object pre-generated from previous calls. To avoid regenerating the same style object every cycle.
         * Inherited classes should write their own get method that returns the style object and stores it in this property.
         * @type {string | CanvasGradient | CanvasPattern}
         */
        this.cache = null;

        /**
         * Indicates if the style object needs to be updated, should be used after applying changed to the style in order to generate a new object.
         * Inherited classes should implement this functionality.
         * @type {boolean}
         */
        this.needsUpdate = true;
    }

    /**
     * Get generated style object from style data and the drawing context.
     *
     * @param {CanvasRenderingContext2D} context Context being used to draw the object.
     * @return {string | CanvasGradient | CanvasPattern} Return the canvas style object generated.
     */
    get(context) {}

    static register(constructor, type) {
        Style.types.set(type, constructor);
    }

}

Style.types = new Map();

export { Style };
