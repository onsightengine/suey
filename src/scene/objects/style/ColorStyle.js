import { Style } from './Style';

/**
 * Simple solid color style represented and stored as a CSS color.
 * Example value formats supported 'rgb(0, 153, 255)' or 'rgba(0, 153, 255, 0.3)' or '#0099ff' or '#0099ffaa' or 'red'.
 */
class ColorStyle extends Style {

    constructor(color = '#000000') {
        super();
        this.color = color;
    }

    get(context) {
        return this.color;
    }

}

export { ColorStyle };
