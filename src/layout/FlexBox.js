/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Element } from '../core/Element.js';

class FlexBox extends Element {

    constructor() {
        super(document.createElement('div'));
        this.addClass('FlexBox');
    }

}

export { FlexBox };


