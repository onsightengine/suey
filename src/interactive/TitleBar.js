import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Draggable } from './Draggable.js';

class TitleBar extends Div {

    constructor(parent, title = '', draggable = false, scale = 1.3) {
        if (! parent || ! parent.isElement) return console.warn(`TitleBar: Missing parent element`);

        super();
        this.setClass('TitleBar');
        this.addClass('PanelButton');

        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571 + 0.071) / 2)}em`);
        this.setTitle(title);

        if (draggable) Draggable.enable(this, parent, true /* limitToWindow */);
    }

    setTitle(title = '') {
        this.setInnerHtml(title);
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        this.setStyle('width', Css.toEm(`${width}px`));
    }

}

export { TitleBar };
