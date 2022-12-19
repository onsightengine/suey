/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/onui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Element } from '../core/Element.js';

class ToolbarSeparator extends Element {

    constructor() {
        super(document.createElement('div'));
        this.setClass('ToolbarSeparator');
    }

}

export { ToolbarSeparator };
