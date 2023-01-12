import { Span } from './Span.js';

class Text extends Span {

    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('Text');
        this.setCursor('default');
    }

}

export { Text };
