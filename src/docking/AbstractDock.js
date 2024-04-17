import { Panel } from '../panels/Panel.js';

/**
 * Abstract class representing a Dock.
 * @abstract
 */
class AbstractDock extends Panel {

    constructor({
        style = PANEL_STYLES.FANCY,
    } = {}) {
        super({ style });
        this.addClass('suey-dock');

        // Selected Floater ID
        this.selectedID = '';

    }

    /** Adds Floater(s) to the Dock */
    addFloater(...floaters) {
        console.error(`${this.constructor.name}.addFloater(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Finds and returns Floater by ID */
    findFloater(tabID = '') {
        console.error(`${this.constructor.name}.findFloater(): Method must be reimplemented from AbstractDock`);
        return null;
    }

    /** Remove a Floater from the Dock */
    removeFloater(floater, destroy = false) {
        console.error(`${this.constructor.name}.removeFloater(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Removes all Floaters from the Dock */
    removeFloaters() {
        console.error(`${this.constructor.name}.removeFloaters(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Select first Floater */
    selectFirst() {
        console.error(`${this.constructor.name}.selectFirst(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Select Floater by ID */
    selectFloater(selectID, wasClicked = false) {
        console.error(`${this.constructor.name}.selectFloater(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Returns number of Floaters currently within Dock */
    tabCount() {
        console.error(`${this.constructor.name}.tabCount(): Method must be reimplemented from AbstractDock`);
        return 0;
    }

}

export { AbstractDock };
