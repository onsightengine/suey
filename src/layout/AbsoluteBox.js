import { Div } from '../core/Div.js';

/** Empty box stretched to overlay parent */
class AbsoluteBox extends Div {

    constructor() {
        super();
        this.setClass('suey-absolute-box');
    }

}

export { AbsoluteBox };
