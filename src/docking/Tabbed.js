import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Floater } from './Floater.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel, PANEL_STYLES } from '../panels/Panel.js';

export const TAB_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
}

class Tabbed extends Panel {

    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;

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
        super({ style });
        const self = this;
        this.addClass('suey-tabbed');
        this.setName('suey-tabbed');

        // Private Properties
        this.#startWidth = startWidth;
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = startHeight;
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;

        // Public Properties
        this.buttons = [];
        this.panels = [];
        this.selectedID = '';       // 'id' (name) of selected tab

        // Resizers
        const rect = {};
        function resizerDown() {
            rect.width = self.getWidth();
            rect.height = self.getHeight();
            self.dom.dispatchEvent(new Event('clicked', { 'bubbles': true, 'cancelable': true }));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) self.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('right')) self.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('top')) self.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('bottom')) self.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove);

        // Children Elements
        this.buttonsDiv = new Div().setClass('suey-tab-buttons').setDisplay('none');
        this.panelsDiv = new Div().setClass('suey-tab-panels');
        this.add(this.buttonsDiv);
        this.add(this.panelsDiv);

        // Set side (LEFT / RIGHT) that buttons should appear
        this.setTabSide(tabSide);
    }

    /******************** RESIZE ********************/

    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || !Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = this.#maxWidth * Css.guiScale(this.dom);
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return width;
    }

    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || !Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = this.#maxHeight * Css.guiScale(this.dom);
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return height;
    }

    /******************** TABS ********************/

    /********** ADD */

    addTab(tabPanel) {
        if (!tabPanel || !tabPanel.hasClass('suey-floater')) {
            console.error(`Tabbed.addTab: Expected Tab as first argument`, tabPanel);
            return null;
        }

        // Update Parent Dock
        tabPanel.dock = this;

        // Push onto containers
        this.buttons.push(tabPanel.button);
        this.buttonsDiv.add(tabPanel.button);
        this.panels.push(tabPanel);
        this.panelsDiv.add(tabPanel);

        // // NOTE: If below is changed from '0' to '1', buttons will be hidden when there is only 1 tab
        const hideWhenNumberOfTabs = 0;
        if (this.buttons.length > hideWhenNumberOfTabs) this.buttonsDiv.setDisplay('');

        // Minimum height (so tab buttons dont float over nothing)
        this.setContentsStyle('minHeight', '');
        if (this.buttonsDiv.hasClass('suey-left-side') || this.buttonsDiv.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.buttons.length) + 0.4) + 'em');
        }

        return tabPanel;
    }

    addNewTab(tabID, content, options = {}) {
        return this.addTab(new Floater(tabID, content, options));
    }

    /********** SELECT */

    /** Select first tab */
    selectFirst() {
        if (this.panels.length > 0) {
            return this.selectTab(this.panels[0].getID());
        }
        return false;
    }

    /** Select Tab */
    selectTab(newID, wasClicked = false) {
        const selectedID = this.selectedID;

        // Find button / panel with New ID
        const panel = this.panels.find((item) => (item.getID() === newID));
        if (panel && panel.button) {
            const button = panel.button;

            // Disable animations while rebuilding
            if (!wasClicked) Css.setVariable('--tab-timing', '0', button.dom);

            // Deselect current selection
            const currentPanel = this.panels.find((item) => (item.getID() === selectedID));
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

    /********** REMOVE */

    clearTabs() {
        if (this.buttonsDiv) this.buttonsDiv.clearContents();
        if (this.panelsDiv) this.panelsDiv.clearContents();
        if (this.buttons) {
            for (const button of this.buttons) button.destroy();
            this.buttons.length = 0;
        }
        if (this.panels) {
            for (const panel of this.panels) panel.destroy();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }

    destroy() {
        this.clearTabs();
        super.destroy();
    }

    removeTab(index) {
        if (index >= 0 && index < this.panels.length) {
            const button = this.buttons[index];
            const panel = this.panels[index];
            if (button) button.removeClass('suey-selected');
            if (panel) panel.addClass('suey-hidden');
            this.buttons.splice(index, 1);
            this.buttonsDiv.detach(button);
            this.panels.splice(index, 1);
            this.panelsDiv.detach(panel);
        }
    }

    /********** DROP */

    handleTabDrop(tabButton, dropX, dropY) {
        const droppedOnPanel = Dom.findElementAt('suey-tabbed', dropX, dropY, this.dom);
        if (droppedOnPanel && droppedOnPanel !== this) {
            const tabIndex = this.buttons.indexOf(tabButton);
            if (tabIndex !== -1) {
                const panel = this.panels[tabIndex];
                this.removeTab(tabIndex);
                if (this.selectedID === tabButton.tabPanel.getID() && tabIndex > 0) {
                    this.selectTab(this.buttons[tabIndex - 1].getID());
                } else {
                    this.selectFirst();
                }
                droppedOnPanel.addTab(panel);
                droppedOnPanel.selectTab(panel.id, false);
            }
        }
    }

    /******************** INFO ********************/

    getTabSide() {
        if (this.buttonsDiv.hasClass('suey-left-side')) return 'left';
        if (this.buttonsDiv.hasClass('suey-right-side')) return 'right';
        return 'unknown';
    }

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.buttonsDiv.removeClass('suey-left-side', 'suey-right-side');
        this.buttonsDiv.addClass((side === TAB_SIDES.RIGHT) ? 'suey-right-side' : 'suey-left-side');
    }

    tabIndex(id) {
        return this.panels.indexOf(id);
    }

}

export { Tabbed };
