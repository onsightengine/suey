/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/onui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Div } from '../core/Div.js';

class MenuShortcut extends Div {

    constructor(text = undefined) {
        super();
        this.setClass('MenuShortcut');

        if (text) this.setShortcutText(text);
    }

    setShortcutText(text) {
        if (! text) return this;
        this.text = text;

        // Remove previous characters
        this.clear();

        // Insert new shorcut as series of centered same-spaced divs for each character
        for (let i = 0; i < text.length; i++) {
            let letter = new Div().setClass('MenuShortcutCharacter');

            // Put lowercase letters together
            let subString = text[i];
            while (i + 1 < text.length && text[i+1] === text[i+1].toLowerCase()) {
                subString += text[i+1];
                i++;
            }

            // Keep single characters monospaced, allow words to have nice spacing
            if (subString.length === 1) {
                letter.setWidth('1em');
            } else {
                letter.setStyle('paddingLeft', '0.15em');
                letter.setStyle('paddingRight', '0.15em');
            }

            // Add letter(s)
            letter.dom.innerHTML = subString;
            this.add(letter);
        }
        return this;
    }

}

export { MenuShortcut };
