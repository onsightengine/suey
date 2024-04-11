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

    /** Adds Tab(s) (Floater) to the Dock. */
    addTab(...floaters) {
        console.error(`${this.constructor.name}.addTab(): Method must be reimplemented from AbstractDock`);
        return this;
    }

    /** Finds a child Tab by ID */
    findTab(tabID = '') {
        console.error(`${this.constructor.name}.findTab(): Method must be reimplemented from AbstractDock`);
        return null;
    }

    /** Remove Tab (Floater) from Dock. Return true is Tab was removed. */
    removeTab(floater, destroy = false) {
        console.error(`${this.constructor.name}.removeTab(): Method must be reimplemented from AbstractDock`);
        return false;
    }

    /** Removes all Tabs/Floaters */
    removeTabs() {
        console.error(`${this.constructor.name}.removeTabs(): Method must be reimplemented from AbstractDock`);
    }

    /** Select first Tab (Floater). Return true if new Tab was selected. */
    selectFirst() {
        console.error(`${this.constructor.name}.selectFirst(): Method must be reimplemented from AbstractDock`);
        return false;
    }

    /** Select Tab (Floater). Return true if new Tab was selected. */
    selectTab(selectID, wasClicked = false) {
        console.error(`${this.constructor.name}.selectTab(): Method must be reimplemented from AbstractDock`);
        return false;
    }

    /** Returns number of Tabs currently within Dock. */
    tabCount() {
        console.error(`${this.constructor.name}.tabCount(): Method must be reimplemented from AbstractDock`);
        return 0;
    }

}

export { AbstractDock };
