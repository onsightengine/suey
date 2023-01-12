import { Div } from '../core/Div.js';

class Titled extends Div {

    constructor(title) {
        super();
        this.addClass('Titled');

        // Title
        this.tabTitle = new Div(title).addClass('TabTitle');
        if (title && title !== '') this.add(this.tabTitle)

        // Scroller
        this.scroller = new Div().addClass('Scroller');
        this.add(this.scroller);

        // Override Contents
        this.contents = function() { return this.scroller; }
    }

}

export { Titled };
