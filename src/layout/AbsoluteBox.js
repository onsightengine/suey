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

/** Empty box stretched to overlay parent */
class AbsoluteBox extends Div {

    constructor() {
        super();
        this.setClass('AbsoluteBox');
    }

}

export { AbsoluteBox };
