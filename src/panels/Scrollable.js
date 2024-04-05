import { Panel } from './Panel.js';
import { PANEL_STYLES } from '../constants.js';

class Scrollable extends Panel {

    constructor({
        style = PANEL_STYLES.NONE,
    } = {}) {
        super(style);
        this.addClass('suey-scroller');
    }

}

export { Scrollable };
