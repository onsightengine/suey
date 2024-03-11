import { Span } from '../core/Span.js';

/* Flex spacer */
class FlexSpacer extends Span {

    constructor() {
        super();
        this.setStyle('flex', '1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }

}

export { FlexSpacer };
