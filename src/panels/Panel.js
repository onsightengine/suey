import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';

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
        this.setClass('osui-panel');
        this.contents = function() { return this; }
        const self = this;

        // Panel Style
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('osui-panel-simple');
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('osui-panel-fancy');
            const outerBox =  new Panel().setClass('osui-panel-fancy-outer');   // Padding
            const borderBox = new Panel().setClass('osui-panel-fancy-border');  // Border
            const insideBox = new Panel().setClass('osui-panel-fancy-inside');  // Interior
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);
            this.contents = function() { return insideBox; };                   // Accessor for inside panel
        }

        // Disable context menu
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);

        // Stacking
        if (bringToTop) {
            this.dom.addEventListener('blur', () => self.removeClass('osui-bring-top'));
            this.dom.addEventListener('focusin', () => Interaction.bringToTop(self.dom));
            this.dom.addEventListener('displayed', () => Interaction.bringToTop(self.dom));
            this.dom.addEventListener('pointerdown', () => Interaction.bringToTop(self.dom));
        }
    }

}

export { Panel };
