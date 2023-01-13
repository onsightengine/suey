import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';

class Titled extends Div {

    constructor(title, collapsible = false) {
        super();
        const self = this;
        this.addClass('Titled');
        this.addClass('Expanded');
        this.isExpanded = true;

        // Title
        this.tabTitle = new Div(title).addClass('TabTitle');
        if (title && title !== '') this.add(this.tabTitle)

        // Collapsible?
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            this.tabTitle.add(new Div().setClass('TitleArrow'));
            this.tabTitle.onClick(() => { self.toggle(); });
        }

        // Scroller
        this.scroller = new Div().addClass('Scroller');
        this.add(this.scroller);

        // Override Contents
        this.contents = function() { return this.scroller; }
    }

    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('Expanded');
            this.scroller.setDisplay('');
        } else {
            this.removeClass('Expanded');
            this.scroller.setDisplay('none');
        }
    }

    toggle() {
        this.setExpanded(! this.isExpanded);
    }

}

export { Titled };
