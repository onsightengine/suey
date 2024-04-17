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
        this.addClass('suey-tabbed');

        // Children Elements
        this.buttons = new Div().setClass('suey-tab-buttons').setStyle('display', 'none');
        this.floaters = new Div().setClass('suey-tab-floaters');
        this.add(this.buttons, this.floaters);

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

    /******************** DESTROY */

    destroy() {
        this.removeFloaters();
        super.destroy();
    }

    /******************** TABS */

    addFloater(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        let tabsAdded = 0;
        for (const floater of floaters) {
            if (!floater || !floater.hasClass('suey-floater')) continue;

            // Update Parent Dock
            floater.dock = this;

            // Push onto containers
            this.floaters.add(floater);
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

    /** Finds and returns Floater by ID */
    findFloater(tabID = '') {
        return this.floaters.children.find((item) => (item.id === tabID));
    }

    /** Remove a Floater from the Dock */
    removeFloater(floater, destroy = false) {
        if (typeof floater === 'string') floater = this.findFloater(floater);
        if (!floater) return this;

        // Destroy Floater?
        if (destroy) floater.destroy();

        // Find Floater
        const index = this.floaters.children.indexOf(floater);
        if (!floater || index === -1) return this;

        // Remove Tab
        const button = this.buttons.children[index];
        const panel = this.floaters.children[index];
        if (button) button.removeClass('suey-selected');
        if (panel) panel.addClass('suey-hidden');
        this.buttons.detach(button);
        this.floaters.detach(panel);

        // Was Selected? (select new Tab)
        if (panel.id === this.selectedID) {
            if (index > 0) this.selectFloater(this.floaters.children[index - 1].id);
            else if (this.floaters.children.length > 0) this.selectFirst();
        }

        // Minimum height (so Tab Buttons dont float over nothing)
        this.setContentsStyle('minHeight', '');
        if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
        }

        // Hide/Show Tabs
        this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');

        // Tabs Changed
        this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));
        return this;
    }

    /** Removes all Floaters from the Dock */
    removeFloaters() {
        const children = [ ...this.floaters.children ];
        for (const child of children) {
            this.removeFloater(child, true /* destroy */);
        }
        return this;
    }

    /** Select first Floater */
    selectFirst() {
        if (this.floaters.children.length > 0) this.selectFloater(this.floaters.children[0].id);
        return this;
    }

    /** Select Floater by ID */
    selectFloater(selectID, wasClicked = false) {
        if (selectID && selectID.isElement) selectID = selectID.id;
        if (typeof selectID !== 'string') return this;

        // Clicked && Collapsed?
        if (wasClicked && this.parent.hasClass('suey-collapsed')) {
            this.toggleTabs();
        }

        // Already Selected
        if (this.selectedID === selectID) return this;

        // Find button / panel with selectID
        const panel = this.findFloater(selectID);
        if (panel && panel.button) {
            // Disable Animations
            if (!wasClicked) Css.setVariable('--tab-timing', '0');

            // Deselect current Panel / Button
            this.floaters.children.forEach((element) => element.hide());
            this.buttons.children.forEach((element) => element.removeClass('suey-selected'));

            // Select new Panel / Button
            panel.display();
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
        }
        return this;
    }

    tabCount() {
        return this.floaters.children.length;
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

    /******************** SIDE */

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.buttons.removeClass('suey-left-side', 'suey-right-side', 'suey-top-side', 'suey-bottom-side');
        this.buttons.addClass(`suey-${side}-side`);
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
