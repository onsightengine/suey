import { Element } from './Element.js';

class Break extends Element {

    constructor() {
        super(document.createElement('br'));
    }

}

export { Break };
