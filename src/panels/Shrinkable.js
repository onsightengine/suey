/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';
import { Panel } from './Panel.js';
import { VectorBox } from '../layout/VectorBox.js';

class Shrinkable extends Panel {

    constructor(text = '', icon = '') {
        super();
        const self = this;
        this.addClass('Shrinkable');

        // Members
        this.titleDiv = undefined;
        this.bodyDiv = undefined;

        // Building
        let title = new Div().setClass('ShrinkTitle');
        {
            let iconHolder = new Span().setClass('ShrinkIcon').add(new VectorBox(icon));
            let textHolder = new Span().setClass('ShrinkText').setInnerHtml(text);
            title.add(iconHolder, textHolder, new Span().setClass('ShrinkArrow'));
        }
        let body = new Div().setClass('ShrinkBody');
        this.add(title, body);

        // Setup
        this.titleDiv = title;
        this.bodyDiv = body;

        this.contents = function() { return self.bodyDiv };            	// This is the accessor for the body div
        this.setExpanded(true);

        // Events
        title.dom.addEventListener('click', function() {
            self.toggle();
        });
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
        let items = this.contents().children;
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
        this.setExpanded(! this.isExpanded);
    }

}

export { Shrinkable };
