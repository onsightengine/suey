import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';

class Titled extends Div {

    constructor(title, collapsible = false) {
        super();
        const self = this;
        this.addClass('osui-titled');
        this.addClass('osui-expanded');
        this.isExpanded = true;

        // Title
        this.tabTitle = new Div(title).addClass('osui-tab-title');
        if (title && title !== '') this.add(this.tabTitle)

        // Collapsible?
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            const arrowClicker = new Div().setClass('osui-title-arrow-click');
            this.tabTitle.add(new Div().setClass('osui-title-arrow'), arrowClicker);
            arrowClicker.onClick(() => { self.toggle(); });
        }

        // Scroller
        this.scroller = new Div().addClass('osui-scroller');
        this.add(this.scroller);

        // Override Contents
        this.contents = function() { return this.scroller; }
    }

    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('osui-expanded');
            this.scroller.setDisplay('');
        } else {
            this.removeClass('osui-expanded');
            this.scroller.setDisplay('none');
        }
    }

    toggle() {
        this.setExpanded(!this.isExpanded);
    }

}

export { Titled };
