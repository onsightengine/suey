import { AbstractDock } from './AbstractDock.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Floater } from './Floater.js';

import { PANEL_STYLES } from '../constants.js';
import { TAB_SIDES } from '../constants.js';

const MINIMUM_TABS_TO_SHOW = 1; /* value of 2 will cause tabs to show only when there are 2 or more tabs */

class Tabbed extends AbstractDock {

    constructor({
        tabSide = TAB_SIDES.RIGHT,
        style = PANEL_STYLES.FANCY,
    } = {}) {
        super({ style });
        self = this;
        this.addClass('suey-tabbed');

        // Public Properties
        this.selectedID = '';       // 'id' (name) of selected tab

        // Children Elements
        this.buttons = new Div().setClass('suey-tab-buttons').setStyle('display', 'none');
        this.panels = new Div().setClass('suey-tab-panels');
        this.add(this.buttons, this.panels);

        // Set TAB_SIDES that Tab Buttons should appear
        this.setTabSide(tabSide);

        // Events
        function tabbedPointerEnter() {
            document.body.classList.remove('suey-no-resize');
        }
        this.on('pointerenter', tabbedPointerEnter);
    }

    /******************** ADD */

    addTab(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        for (const floater of floaters) {
            if (!floater || !floater.hasClass('suey-floater')) continue;

            // Update Parent Dock
            floater.dock = this;

            // Push onto containers
            this.panels.add(floater);
            this.buttons.add(floater.button);

            // Show Title
            floater.traverse((child) => {
                if (child.hasClass('suey-tab-title')) child.removeClass('suey-hidden');
            });

            // Minimum Tabs to Show
            this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');

            // Minimum height (so Tab Buttons dont float over nothing)
            this.setContentsStyle('minHeight', '');
            if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
                this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
            }
        }
        if (this.selectedID === '') {
            this.selectFirst();
        }
        return this;
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
                this.parent.expandTabs();
            // Wants Collapse?
            } else if (selectID === this.selectedID) {
                this.parent.collapseTabs();
                return false;
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

            // Event
            const tabChange = new Event('tab-changed');
            tabChange.value = selectID;
            this.dom.dispatchEvent(tabChange);

            // Enable Animations
            setTimeout(() => Css.setVariable('--tab-timing', '200ms'), 50);

            // Selection Successful
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
        this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
    }

    destroy() {
        this.clearTabs();
        super.destroy();
    }

    /** Remove Tab (Floater) from Tabbed. */
    removeTab(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
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

            // Was Selected? (select new Tab)
            if (panel.id === this.selectedID) {
                if (index > 0) {
                    this.selectTab(this.panels.children[index - 1].id);
                } else if (this.panels.children.length > 0) {
                    this.selectFirst();
                } else {
                    const tabChange = new Event('tab-changed');
                    tabChange.value = undefined;
                    this.dom.dispatchEvent(tabChange);
                }
            }

            // Minimum Tabs to Show
            this.buttons.setStyle('display', (this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
        }
        return this;
    }

    /******************** INFO */

    setTabSide(side, opposite = false) {
        side = String(side).toLowerCase();
        this.buttons.removeClass('suey-left-side', 'suey-right-side', 'suey-top-side', 'suey-bottom-side');
        if (opposite) {
            if (side === 'left') side = 'right';
            else if (side === 'right') side = 'left';
            else if (side === 'top') side = 'bottom';
            else if (side === 'bottom') side = 'top';
        }
        this.buttons.addClass(`suey-${side}-side`);
    }

    tabCount() {
        return this.panels.children.length;
    }

}

export { Tabbed };
