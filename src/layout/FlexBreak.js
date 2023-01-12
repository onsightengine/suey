import { Div } from '../core/Div.js';

/** Flex box that breaks a wrapping Div */
class FlexBreak extends Div {

    constructor() {
        super();
        this.setStyle('flexBasis', '100%');
        this.setStyle('flexGrow', '1');
        this.setStyle('height', '0');
    }

}

export { FlexBreak };
