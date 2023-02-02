import { Div } from '../core/Div.js';

export const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};

class Panel extends Div {

    constructor(style = PANEL_STYLES.NONE) {
        super();
        this.setPointerEvents('auto');
        this.setClass('Panel');
        this.contents = function() { return this; }

        // Simple Panel Style
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('SimplePanel');

        // Fancy Border Style
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('FancyPanel');
            const outerBox =  new Panel().setClass('FancyPanelOuter');      // So we can give the border some padding
            const borderBox = new Panel().setClass('FancyPanelBorder');     // So we can give apply border
            const insideBox = new Panel().setClass('FancyPanelInside');     // Interior Panel
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);

            this.contents = function() { return insideBox; };               // Accessor for the inside panel
        }

        // Events

        // Disable Context Menu
        function onContextMenu(event) {
            event.preventDefault();
        }

        this.onContextMenu(onContextMenu);

    }

}

export { Panel };
