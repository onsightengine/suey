import { AbstractDock } from './AbstractDock.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Floater } from './Floater.js';
import { Interaction } from '../utils/Interaction.js';

import { CLOSE_SIDES } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { TAB_SIDES } from '../constants.js';

const MINIMUM_TABS_TO_SHOW = 1; /* value of 2 will cause tabs to show only when there are 2 or more tabs */

class Tabbed extends AbstractDock {

    constructor({
        style = PANEL_STYLES.FANCY,
        tabSide = TAB_SIDES.RIGHT,
        opposite = false,
        closeButton = false,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-tabbed');

        // Public Properties
        this.selectedID = '';       // 'id' (name) of selected tab

        // Children Elements
        this.buttons = new Div().setClass('suey-tab-buttons').setStyle('display', 'none');
        this.panels = new Div().setClass('suey-tab-panels');
        this.add(this.buttons, this.panels);

        // Set TAB_SIDES that Tab Buttons should appear
        tabSide = opposite ? oppositeSide(tabSide) : tabSide;
        this.setTabSide(tabSide);

        // Add Close Button
        if (closeButton) {
            const buttonSide = (tabSide === 'right') ? CLOSE_SIDES.LEFT : CLOSE_SIDES.RIGHT;
            const offset = (tabSide === 'right' || tabSide === 'left') ? 0 : 1.7;
            Interaction.addCloseButton(this, buttonSide, offset, 1.3 /* scale */);
        }
    }

    /******************** ADD */

    addTab(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        let tabsAdded = 0;
        for (const floater of floaters) {
            if (!floater || !floater.hasClass('suey-floater')) continue;

            // Update Parent Dock
            floater.dock = this;

            // Push onto containers
            this.panels.add(floater);
            this.buttons.add(floater.button);
            tabsAdded++;

            // Minimum Tabs to Show
            this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');

            // Minimum height (so Tab Buttons dont float over nothing)
            this.setContentsStyle('minHeight', '');
            if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
                this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
            }
        }
        // Tabs Changed
        if (tabsAdded > 0) {
            if (this.tabCount() > 0) this.setStyle('display', '');
            if (this.selectedID === '') this.selectFirst();
            this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        }
        return this;
    }

    /******************** COLLAPSE / EXPAND */

    toggleTabs() {
        if (this.parent && this.parent.hasClass('suey-docker')) {
            if (this.parent.hasClass('suey-collapsed')) {
                this.parent.expandTabs();
            } else {
                this.parent.collapseTabs();
            }
        }
    }

    /******************** SELECT */

    /** Select first Tab */
    selectFirst() {
        if (this.panels.children.length === 0) return false;
        return this.selectTab(this.panels.children[0].id);
    }

    /** Select Tab (returns true if new Tab was selected) */
    selectTab(selectID, wasClicked = false) {
        // Clicked?
        if (wasClicked) {
            // Is Currently Collapsed?
            if (this.parent.hasClass('suey-collapsed')) {
                this.toggleTabs();
            // Single click, already selected
            } else if (selectID === this.selectedID) {
                return true;
            }
        }

        // Find button / panel with New ID
        const panel = this.panels.children.find((item) => (item.id === selectID));
        if (panel && panel.button) {
            // Disable Animations
            if (!wasClicked) Css.setVariable('--tab-timing', '0');

            // Deselect current Panel / Button
            this.panels.children.forEach((element) => { element.addClass('suey-hidden'); });
            this.buttons.children.forEach((element) => { element.removeClass('suey-selected'); });

            // Select new Panel / Button
            panel.removeClass('suey-hidden');
            panel.button.addClass('suey-selected');
            this.selectedID = selectID;

            // Verify Visible
            this.setStyle('display', '');

            // Event
            const tabSelected = new Event('tab-selected', { bubbles: true });
            tabSelected.value = selectID;
            this.dom.dispatchEvent(tabSelected);

            // Enable Animations
            setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);

            // Selection Successful
            return true;
        }
        return false;
    }

    /******************** REMOVE */

    destroy() {
        const children = [...this.panels.children];
        for (const child of children) {
            this.removeTab(child);
            child.destroy();
        }
        super.destroy();
    }

    /** Remove Tab (Floater) from Tabbed. */
    removeTab(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        let tabsRemoved = 0;
        // Remove Tabs/Floaters
        for (const floater of floaters) {
            const index = this.panels.children.indexOf(floater);
            if (!floater || index === -1) continue;

            // Remove Tab
            const button = this.buttons.children[index];
            const panel = this.panels.children[index];
            if (button) button.removeClass('suey-selected');
            if (panel) panel.addClass('suey-hidden');
            this.buttons.detach(button);
            this.panels.detach(panel);
            tabsRemoved++;

            // Was Selected? (select new Tab)
            if (panel.id === this.selectedID) {
                if (index > 0) {
                    this.selectTab(this.panels.children[index - 1].id);
                } else if (this.panels.children.length > 0) {
                    this.selectFirst();
                }
            }

            // Minimum Tabs to Show
            this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
        }
        // Tabs Changed
        if (tabsRemoved > 0) {
            this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        }
        // Empty?
        if (this.panels.children.length === 0) {
            this.setStyle('minHeight', '');
            this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
        }
        return this;
    }

    /******************** INFO */

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.buttons.removeClass('suey-left-side', 'suey-right-side', 'suey-top-side', 'suey-bottom-side');
        this.buttons.addClass(`suey-${side}-side`);
    }

    tabCount() {
        return this.panels.children.length;
    }

}

export { Tabbed };

/******************** INTERNAL */

function oppositeSide(side) {
    if (side === 'left') return 'right';
    if (side === 'right') return 'left';
    if (side === 'top') return 'bottom';
    if (side === 'bottom') return 'top';
    return 'center';
}
