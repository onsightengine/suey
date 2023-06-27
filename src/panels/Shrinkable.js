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
        this.addClass('Shrinkable');

        // Members
        this.titleDiv = undefined;
        this.bodyDiv = undefined;

        // Build
        const title = new Div().setClass('ShrinkTitle');

        // Title Icon/Menu
        let titleIcon;
        if (menu) {
            titleIcon = new Button();
            titleIcon.addClass('BorderlessButton');
            //this.titleIcon.overflowMenu = OVERFLOW.LEFT;
            //this.titleIcon.dom.setAttribute('tooltip', 'Options');
            let titleIconShadow = new ShadowBox(icon);
            let titleIconVector = new VectorBox(icon);
            if (enlarge) titleIconVector.addClass('EnlargeIcon');
            titleIconShadow.add(titleIconVector);
            titleIcon.add(titleIconShadow);
            titleIcon.attachMenu(menu);

            // const buttonRow = new OSUI.AbsoluteBox().setStyle('padding', '0 var(--pad-medium)');
            // buttonRow.add(new OSUI.FlexSpacer());
            // buttonRow.add(new ComponentSettingsButton(component, component.entity));
            // buttonRow.add(new AddComponentButton(component.entity));
            // this.tabTitle.add(buttonRow);

        } else if (icon !== '') {
            title.setStyle('padding-left', '0.5em');
            let titleIconVector = new VectorBox(icon);
            if (enlarge) titleIconVector.addClass('EnlargeIcon');
            titleIcon = new Span().setClass('ShrinkIcon').add(titleIconVector);
        }
        title.add(titleIcon);

        // Title Text
        const titleText = new Span().setClass('ShrinkText').setInnerHtml(text);
        if (icon === '') {
            titleText.setStyle('padding-left', '0.15em');
        } else if (!menu) {
            titleText.setStyle('padding-left', '0.4em');
        }
        title.add(titleText);

        // Title Arrow
        const titleArrow = new Span().setClass('ShrinkArrow');
        const arrowClicker = new Div().addClass('ShrinkArrowClicker');
        titleArrow.add(arrowClicker);
        title.add(titleArrow);

        // Body
        const body = new Div().setClass('ShrinkBody');

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
            this.addClass('Expanded');
        } else {
            this.removeClass('Expanded');
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
