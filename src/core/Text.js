/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Span } from './Span.js';

class Text extends Span {

    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('Text');
        this.setCursor('default');
    }

}

export { Text };
