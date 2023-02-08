import { Div } from '../core/Div.js';

export const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};

class Panel extends Div {

    constructor({
        style = PANEL_STYLES.NONE,
    } = {}) {
        super();
        this.setPointerEvents('auto');
        this.setClass('Panel');
        this.contents = function() { return this; }

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

        function onContextMenu(event) {
            event.preventDefault(); /* disable context menu */
        }
        this.onContextMenu(onContextMenu);
    }

}

export { Panel };
