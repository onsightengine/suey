import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';

class TitleBar extends Div {

    constructor(parent, title = '     ', draggable = false, scale = 1.3) {
        if (! parent || ! parent.isElement) return console.warn(`TitleBar: Missing parent element`);

        super();
        this.setClass('TitleBar');
        this.addClass('PanelButton');

        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);

        this.setTitle(title);

        const self = this;

        if (draggable) {
            let downX, downY, rect;

            function onPointerDown(event) {
                if (! event.isPrimary) return;
                event.stopPropagation();
                event.preventDefault();
                downX = event.pageX;
                downY = event.pageY;
                rect = parent.dom.getBoundingClientRect();
                self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
                self.setStyle('cursor', 'move');
            }

            function onPointerUp(event) {
                if (! event.isPrimary) return;
                event.stopPropagation();
                event.preventDefault();
                self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
                self.setStyle('cursor', 'auto');
            }

            function onPointerMove(event) {
                if (! event.isPrimary) return;
                event.stopPropagation();
                event.preventDefault();
                const diffX = event.pageX - downX;
                const diffY = event.pageY - downY;
                const newLeft = rect.left + diffX;
                const newTop = rect.top + diffY;
                parent.setStyle('left', `${newLeft}px`);
                parent.setStyle('top', `${newTop}px`);
            }

            this.dom.addEventListener('pointerdown', onPointerDown);
        }
    }

    setTitle(title = '     ') {
        // this.setInnerHtml(`<div style="margin-top: -0.07143em;">${title}</span>`);
        this.setInnerHtml(`<div style="font-size: 80%">${title}</span>`);
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        this.setStyle('width', Css.toEm(`${width}px`));
    }

}

export { TitleBar };
