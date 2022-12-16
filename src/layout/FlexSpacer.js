/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Span } from '../core/Span.js';

/* Flex spacer, i.e. new Span().setFlex('1 1 auto') */
class FlexSpacer extends Span {

    constructor() {
        super();
        this.setFlex('1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }

}

export { FlexSpacer };
