import { Div } from '../core/Div.js';
import { Panel } from './Panel.js';
import { Strings } from '../utils/Strings.js';

class Titled extends Panel {

    constructor({
        title,
        collapsible = false,
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-titled');
        this.addClass('suey-expanded');
        this.isExpanded = true;

        // Title
        this.tabTitle = new Div(Strings.capitalize(title)).addClass('suey-tab-title');
        if (title && title !== '') this.add(this.tabTitle)

        // Collapsible?
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            const arrowClicker = new Div().setClass('suey-title-arrow-click');
            arrowClicker.add(new Div().setClass('suey-title-arrow'));
            this.tabTitle.add(arrowClicker);
            arrowClicker.onClick(() => { self.toggle(); });
        }

        // Scroller
        this.scroller = new Div().addClass('suey-scroller');
        this.add(this.scroller);

        // Override Contents
        this.contents = function() { return this.scroller; };
    }

    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('suey-expanded');
            this.scroller.setStyle('display', '');
        } else {
            this.removeClass('suey-expanded');
            this.scroller.setStyle('display', 'none');
        }
    }

    toggle() {
        this.setExpanded(!this.isExpanded);
    }

}

export { Titled };
