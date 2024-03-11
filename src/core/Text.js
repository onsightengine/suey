import { Span } from './Span.js';

class Text extends Span {

    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('suey-text');
        this.setStyle('cursor', 'default');
    }

}

export { Text };
