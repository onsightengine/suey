import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';
import { Panel } from './Panel.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { VectorBox } from '../layout/VectorBox.js';

class Shrinkable extends Panel {

    constructor({
        text = '',
        icon = '',
        arrow = 'left',
        border = true,
        enlargeIcon = false
    } = {}) {
        super();
        const self = this;
        this.addClass('osui-shrinkable');
        if (!border) this.addClass('osui-borderless');

        // Members
        this.titleDiv = undefined;
        this.bodyDiv = undefined;

        // Build
        const title = new Div().setClass('osui-shrink-title');

        // Title Arrow
        const titleArrow = new Span().setClass('osui-shrink-arrow');
        const arrowClicker = new Div().addClass('osui-shrink-arrow-clicker');
        titleArrow.add(arrowClicker);

        // Title Text
        const titleText = new Span().setClass('osui-shrink-text').setInnerHtml(text);

        // Title Icon/Menu
        const titleIcon = new Span().setClass('osui-shrink-icon');
        if (icon) titleIcon.addClass('osui-has-icon');
        const iconBox = new VectorBox(icon);
        if (enlargeIcon) {
            iconBox.addClass('osui-enlarge-icon');
        }
        titleIcon.add(iconBox);

        // Add Title Elements
        if (arrow === 'right') {
            title.add(titleIcon, titleText, titleArrow);
        } else {
            title.add(titleArrow, titleIcon, titleText);
        }

        // Body
        const body = new Div().setClass('osui-shrink-body');

        // Setup
        this.add(title);
        this.add(body);

        this.titleDiv = title;
        this.bodyDiv = body;

        this.contents = function() { return self.bodyDiv };         // Accessor for the body div
        this.setExpanded(true, false /* event? */);

        // Events
        function arrowClick() {
            self.toggle();
        }
        arrowClicker.onClick(arrowClick);
    }

    setExpanded(expand = true, dispatchEvent = true) {
        expand = Boolean(expand);
        this.isExpanded = expand;
        if (expand) this.addClass('osui-expanded');
        else this.removeClass('osui-expanded');
        if (dispatchEvent) this.dom.dispatchEvent(new Event('expand'));
    }

    sort() {
        const items = this.contents().children;
        items.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return  1;
            return 0;
        });

        for (let i = 0; i < items.length; i++) {
            items[i].setStyle('order', i);
        }
    }

    toggle() {
        this.setExpanded(!this.isExpanded);
    }

}

export { Shrinkable };
