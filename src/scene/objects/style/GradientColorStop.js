/**
 * Gradient color stop is used to create the gradients by their color sections.
 * The gradients are ordered, each stop has a target color that becomes solid on its offset value triggering the next color stop if there is one.
 */
class GradientColorStop {

    constructor(offset, color) {
        this.offset = offset;       // offset of the color stop between 0 and 1 inclusive
        this.color = color;
    }

}

export { GradientColorStop };
