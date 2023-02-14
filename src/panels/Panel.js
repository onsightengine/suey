import { Div } from '../core/Div.js';

export const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};

class Panel extends Div {

    constructor({
        style = PANEL_STYLES.NONE,
        bringToTop = false,
    } = {}) {
        super();
        this.setPointerEvents('auto');
        this.setClass('Panel');
        this.contents = function() { return this; }
        const self = this;

        // Panel Style
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('SimplePanel');
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('FancyPanel');
            const outerBox =  new Panel().setClass('FancyPanelOuter');      // Padding
            const borderBox = new Panel().setClass('FancyPanelBorder');     // Border
            const insideBox = new Panel().setClass('FancyPanelInside');     // Interior
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);
            this.contents = function() { return insideBox; };               // Accessor for inside panel
        }

        // Disable context menu
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);

        // Stacking
        if (bringToTop) {
            this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
            this.dom.addEventListener('focusin', () => self.bringToTop());
            this.dom.addEventListener('displayed', () => self.bringToTop());
            this.dom.addEventListener('pointerdown', () => self.bringToTop());
        }
    }

    /**
     * Applies 'BringToTop' class, ensures only element with this class
     */
    bringToTop() {
        const self = this;
        const panels = document.querySelectorAll('.Panel');
        panels.forEach(element => { if (element !== self.dom) element.classList.remove('BringToTop') });
        this.addClass('BringToTop');
    }

}

export { Panel };
