import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Floater } from './Floater.js';
import { PANEL_STYLES } from '../panels/Panel.js';
import { Resizeable } from '../panels/Resizeable.js';

export const TAB_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    TOP:        'top',
    BOTTOM:     'bottom',
}

const MINIMUM_TABS_TO_SHOW = 1; /* value of 2 will cause tabs to show only when there are 2 or more tabs */

class Tabbed extends Resizeable {

    constructor({
        tabSide = TAB_SIDES.RIGHT,
        style = PANEL_STYLES.FANCY,
        resizers = [],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style, resizers, startWidth, startHeight, minWidth, maxWidth, minHeight, maxHeight });
        this.addClass('suey-tabbed');

        // Public Properties
        this.selectedID = '';       // 'id' (name) of selected tab

        // Children Elements
        this.buttons = new Div().setClass('suey-tab-buttons').setDisplay('none');
        this.panels = new Div().setClass('suey-tab-panels');
        this.add(this.buttons, this.panels);

        // Set TAB_SIDES that Tab Buttons should appear
        this.setTabSide(tabSide);
    }

    /******************** ADD */

    addTab(tabPanel) {
        if (!tabPanel || !tabPanel.hasClass('suey-floater')) {
            console.error(`Tabbed.addTab: Expected Tab as first argument`, tabPanel);
            return null;
        }

        // Update Parent Dock
        tabPanel.dock = this;

        // Push onto containers
        this.buttons.add(tabPanel.button);
        this.panels.add(tabPanel);

        // Minimum Tabs to Show
        this.buttons.setDisplay((this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');

        // Minimum height (so Tab Buttons dont float over nothing)
        this.setContentsStyle('minHeight', '');
        if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
        }

        return tabPanel;
    }

    addNewTab(tabID, content, options = {}) {
        return this.addTab(new Floater(tabID, content, options));
    }

    /******************** SELECT */

    /** Select first tab */
    selectFirst() {
        if (this.panels.children.length > 0) {
            return this.selectTab(this.panels.children[0].getID());
        }
        return false;
    }

    /** Select Tab */
    selectTab(newID, wasClicked = false) {
        const selectedID = this.selectedID;

        // Find button / panel with New ID
        const panel = this.panels.children.find((item) => (item.getID() === newID));
        if (panel && panel.button) {
            const button = panel.button;

            // Disable animations while rebuilding
            if (!wasClicked) Css.setVariable('--tab-timing', '0', button.dom);

            // Deselect current selection
            const currentPanel = this.panels.children.find((item) => (item.getID() === selectedID));
            if (currentPanel) {
                currentPanel.addClass('suey-hidden');
                if (currentPanel.button) currentPanel.button.removeClass('suey-selected');
            }

            // Select new panel / button
            panel.removeClass('suey-hidden');
            button.addClass('suey-selected');

            // Set New ID
            this.selectedID = newID;

            // Emit event
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = newID;
                this.dom.dispatchEvent(tabChange);
            }

            // Re-enable animationss
            if (!wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', button.dom), 50);
            return true;
        }
        return false;
    }

    /******************** REMOVE */

    clearTabs() {
        if (this.buttons) this.buttons.clearContents();
        if (this.panels) this.panels.clearContents();
        this.setStyle('minHeight', '');

        // Minimum Tabs to Show
        this.buttons.setDisplay((this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
    }

    destroy() {
        this.clearTabs();
        super.destroy();
    }

    removeTab(index) {
        if (index >= 0 && index < this.panels.children.length) {
            const button = this.buttons.children[index];
            const panel = this.panels.children[index];
            if (button) button.removeClass('suey-selected');
            if (panel) panel.addClass('suey-hidden');
            this.buttons.detach(button);
            this.panels.detach(panel);
        }

        // Minimum Tabs to Show
        this.buttons.setDisplay((this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
    }

    /******************** DROP */

    handleTabDrop(tabButton, dropX, dropY) {
        const droppedOnPanel = Dom.findElementAt('suey-tabbed', dropX, dropY, this.dom);
        if (droppedOnPanel && droppedOnPanel !== this) {
            const tabIndex = this.buttons.children.indexOf(tabButton);
            if (tabIndex !== -1) {
                const panel = this.panels.children[tabIndex];
                this.removeTab(tabIndex);
                if (this.selectedID === tabButton.tabPanel.getID() && tabIndex > 0) {
                    this.selectTab(this.buttons.children[tabIndex - 1].getID());
                } else {
                    this.selectFirst();
                }
                droppedOnPanel.addTab(panel);
                droppedOnPanel.selectTab(panel.id, false);
            }
        }
    }

    /******************** INFO */

    getTabSide() {
        if (this.buttons.hasClass('suey-left-side')) return 'left';
        if (this.buttons.hasClass('suey-right-side')) return 'right';
        return 'unknown';
    }

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.buttons.removeClass('suey-left-side', 'suey-right-side');
        switch (side) {
            case TAB_SIDES.RIGHT:   this.buttons.addClass('suey-right-side'); break;
            case TAB_SIDES.LEFT:    this.buttons.addClass('suey-left-side'); break;
        }
    }

}

export { Tabbed };
