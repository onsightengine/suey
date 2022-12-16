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

/** Flex box that breaks a wrapping Div */
class FlexBreak extends Div {

    constructor() {
        super();
        this.setStyle('flexBasis', '100%');
        this.setStyle('flexGrow', '1');
        this.setStyle('height', '0');
    }

}

export { FlexBreak };
