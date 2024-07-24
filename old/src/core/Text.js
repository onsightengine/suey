import { Span } from './Span.js';

class Text extends Span {

    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('osui-text');
        this.setStyle('cursor', 'default');
    }

}

export { Text };
