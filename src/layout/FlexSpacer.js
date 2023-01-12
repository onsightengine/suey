import { Span } from '../core/Span.js';

/* Flex spacer, i.e. new Span().setFlex('1 1 auto') */
class FlexSpacer extends Span {

    constructor() {
        super();
        this.setFlex('1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }

}

export { FlexSpacer };
