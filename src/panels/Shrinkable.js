import { Button } from '../input/Button.js';
import { Css } from '../utils/Css.js';
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
        shrink = false,     // icon shrink?
        radius = 0,         // icon radius?
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

        // Shrink
        if (shrink === true) {
            shrink = 0.7;
        } else if (typeof shrink === 'string') {
            shrink = parseFloat(shrink) / (shrink.includes('%') ? 100 : 1);
        }
        if (shrink && iconBox.img && typeof shrink === 'number' && !isNaN(parseFloat(shrink))) {
            iconBox.img.setStyle('position', 'absolute');
            iconBox.img.setStyle('left', '0', 'right', '0', 'top', '0', 'bottom', '0');
            iconBox.img.setStyle('margin', 'auto');
            iconBox.img.setStyle('width', `${shrink * 100}%`);
            iconBox.img.setStyle('height', `${shrink * 100}%`);
        }

        // Radius
        if (radius !== 0 && iconBox.img) {
            iconBox.img.setStyle('border-radius', Css.parseSize(radius));
        }

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
        this.wantsClass('suey-expanded', expand);
        if (dispatchEvent) this.dom.dispatchEvent(new Event('expand'));
    }

    sort() {
        const items = this.contents().children;
        items.sort((a, b) => {
            const nameA = String(a.name).toLowerCase();
            const nameB = String(b.name).toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return  1;
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
