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
    }

    /** Adds Floater(s) to the Dock */
    addTab(...floaters) {
        console.error(`${this.constructor.name}.addTab(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Finds and returns Floater by ID */
    findTab(tabID = '') {
        console.error(`${this.constructor.name}.findTab(): Method must be reimplemented from AbstractDock`);
        return null;
    }

    /** Remove a Floater from the Dock */
    removeTab(floater, destroy = false) {
        console.error(`${this.constructor.name}.removeTab(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Removes all Floaters from the Dock */
    removeTabs() {
        console.error(`${this.constructor.name}.removeTabs(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Select first Tab / Floater */
    selectFirst() {
        console.error(`${this.constructor.name}.selectFirst(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Select Floater by ID */
    selectTab(selectID, wasClicked = false) {
        console.error(`${this.constructor.name}.selectTab(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Returns number of Floaters currently within Dock */
    tabCount() {
        console.error(`${this.constructor.name}.tabCount(): Method must be reimplemented from AbstractDock`);
        return 0;
    }

}

export { AbstractDock };
