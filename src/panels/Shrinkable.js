import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';
import { Panel } from './Panel.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { VectorBox } from '../layout/VectorBox.js';

class Shrinkable extends Panel {

    constructor({
        title = '',
        icon = '',
        arrow = 'left',
        border = true,
        expanded = true,
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-shrinkable');
        if (!border) this.addClass('suey-borderless-panel');
        if (expanded) this.addClass('suey-expanded');

        // Properties
        this.isExpanded = expanded;

        // Members
        this.titleDiv = undefined;
        this.bodyDiv = undefined;

        // Build
        const titleDiv = new Div().setClass('suey-shrink-title');

        // Title Arrow
        const titleArrow = new Span().setClass('suey-shrink-arrow');
        const arrowClicker = new Div().addClass('suey-shrink-arrow-clicker');
        titleArrow.add(arrowClicker);

        // Title Text
        const titleText = new Span().setClass('suey-shrink-text').setInnerHtml(title);

        // Title Icon/Menu
        const titleIcon = new Span().setClass('suey-shrink-icon');
        if (icon) titleIcon.addClass('suey-has-icon');
        const iconBox = new VectorBox(icon);
        titleIcon.add(iconBox);

        // Add Title Elements
        if (arrow === 'right') {
            titleDiv.add(titleIcon, titleText, titleArrow);
        } else {
            titleDiv.add(titleArrow, titleIcon, titleText);
        }

        // Body
        const body = new Div().setClass('suey-shrink-body');

        // Setup
        this.add(titleDiv);
        this.add(body);

        this.titleDiv = titleDiv;
        this.bodyDiv = body;

        this.contents = function() { return self.bodyDiv };         // Accessor for the body div

        // Events
        function expandCollapse() {
            self.toggle();
        }
        titleDiv.on('pointerdown', expandCollapse);
    }

    setExpanded(expand = true, dispatchEvent = true) {
        expand = Boolean(expand);
        this.isExpanded = expand;
        if (expand) this.addClass('suey-expanded');
        else this.removeClass('suey-expanded');
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
