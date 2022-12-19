/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

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
