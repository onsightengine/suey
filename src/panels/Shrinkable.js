import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';
import { Panel } from './Panel.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { VectorBox } from '../layout/VectorBox.js';

class Shrinkable extends Panel {

    constructor(text = '', icon = '', menu = undefined, enlarge = false) {
        super();
        const self = this;
        this.addClass('osui-shrinkable');

        // Members
        this.titleDiv = undefined;
        this.bodyDiv = undefined;

        // Build
        const title = new Div().setClass('osui-shrink-title');

        // Title Icon/Menu
        let titleIcon;
        if (menu) {
            titleIcon = new Button();
            titleIcon.addClass('osui-borderless-button');
            //this.titleIcon.overflowMenu = OVERFLOW.LEFT;
            //this.titleIcon.dom.setAttribute('tooltip', 'Options');
            let titleIconShadow = new ShadowBox();
            let titleIconVector = new VectorBox(icon);
            if (enlarge) titleIconVector.addClass('osui-enlarge-icon');
            titleIconShadow.add(titleIconVector);
            titleIcon.add(titleIconShadow);
            titleIcon.attachMenu(menu);

        } else if (icon !== '') {
            title.setStyle('padding-left', '0.5em');
            let titleIconVector = new VectorBox(icon);
            if (enlarge) titleIconVector.addClass('osui-enlarge-icon');
            titleIcon = new Span().setClass('osui-shrink-icon');
            titleIcon.add(titleIconVector);
        }
        title.add(titleIcon);

        // Title Text
        const titleText = new Span().setClass('osui-shrink-text').setInnerHtml(text);
        if (icon === '') {
            titleText.setStyle('padding-left', '0.15em');
        } else if (!menu) {
            titleText.setStyle('padding-left', '0.4em');
        }
        title.add(titleText);

        // Title Arrow
        const titleArrow = new Span().setClass('osui-shrink-arrow');
        const arrowClicker = new Div().addClass('osui-shrink-arrow-clicker');
        titleArrow.add(arrowClicker);
        title.add(titleArrow);

        // Body
        const body = new Div().setClass('osui-shrink-body');

        // Setup
        this.add(title);
        this.add(body);

        this.titleDiv = title;
        this.bodyDiv = body;

        this.contents = function() { return self.bodyDiv };            	// This is the accessor for the body div
        this.setExpanded(true);

        // Events
        function arrowClick() {
            self.toggle();
        }
        arrowClicker.onClick(arrowClick);
    }

    applySearch(searchTerm = '') {
        if (!this.bodyDiv || !this.bodyDiv.isElement) return;
        const children = this.bodyDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (!child.isElement) continue;
            const name = (child.name) ? String(child.name).toLowerCase() : '';
            if (name.indexOf(searchTerm) !== -1) {
                child.setDisplay('');
            } else {
                child.setDisplay('none');
            }
        }
    }

    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('osui-expanded');
        } else {
            this.removeClass('osui-expanded');
        }
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
