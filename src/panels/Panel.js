import { Div } from '../core/Div.js';

export const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};

class Panel extends Div {

    #bringingToTop = false;

    constructor({
        style = PANEL_STYLES.NONE,
        bringToTop = false,
    } = {}) {
        super();
        this.setPointerEvents('auto');
        this.setClass('Panel');
        this.contents = function() { return this; }

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
        function onContextMenu(event) {
            event.preventDefault();
        }
        this.onContextMenu(onContextMenu);

        // Stacking
        if (bringToTop) this.bringToTop();
    }

    /**
     * When enabled and Panel receives focus, Panel is "reattached".
     * This brings it to the front of it's z-index.
     */
    bringToTop() {
        if (this.#bringingToTop) return;
        this.#bringingToTop = true;
        const self = this;
        function applyBringToTop() {
            const panels = document.querySelectorAll('.Panel');
            panels.forEach(element => { if (element !== self.dom) element.classList.remove('BringToTop') });
            self.addClass('BringToTop');
        }
        this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
        this.dom.addEventListener('focusin', () => applyBringToTop());
        this.dom.addEventListener('displayed', () => applyBringToTop());
        this.dom.addEventListener('pointerdown', () => applyBringToTop());
    }

}

export { Panel };
