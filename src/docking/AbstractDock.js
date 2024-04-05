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

    /** Adds Tab (Floater) to the Dock. */
    addTab(...floaters) {
        console.error(`${this.constructor.name}.removeTab(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Select first Tab (Floater). Return true if new Tab was selected. */
    selectFirst() {
        console.error(`${this.constructor.name}.removeTab(): Method must be reimplemented from AbstractDock`);
        return false;
    }

    /** Select Tab (Floater). Return true if new Tab was selected. */
    selectTab(selectID, wasClicked = false) {
        console.error(`${this.constructor.name}.removeTab(): Method must be reimplemented from AbstractDock`);
        return false;
    }

    /** Remove Tab (Floater) from Dock. */
    removeTab(...floaters) {
        console.error(`${this.constructor.name}.removeTab(): Method must be reimplemented from AbstractDock`);
        return this;
    }

}

export { AbstractDock };
