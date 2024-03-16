import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { IMAGE_EMPTY } from '../constants.js';
import { Interaction } from '../utils/Interaction.js';
import { Iris } from '../utils/Iris.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { TRAIT } from '../constants.js';
import { Utils } from '../utils/Utils.js';
import { VectorBox } from '../layout/VectorBox.js';

export const TAB_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
}

const MOUSE_SLOP = 5;

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
        this.tabs = [];
        this.panels = [];
        this.selectedId = '';       // id of selected tab
        this.selectedCount = 0;     // count of selected tab (for when there is more than one tab with same id)

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
        this.tabsDiv = new Div().setClass('suey-tabs').setDisplay('none');
        this.panelsDiv = new Div().setClass('suey-tab-panels');
        this.add(this.tabsDiv);
        this.add(this.panelsDiv);

        // Set side (LEFT / RIGHT) that tabs should appear
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

    addTab(tab, panel) {
        if (!tab || !tab.hasClass('suey-tab-button')) {
            console.error(`Tabbed.addTab: Expected TabButton as first argument`, tab);
            return null;
        }

        // Update Parent Dock
        tab.dock = this;

        // Count ID's
        let numTabsWithId = 0;
        for (const checkTab of this.tabs) {
            if (checkTab.dom.id === tab.dom.id) numTabsWithId++;
        }
        tab.count = numTabsWithId;
        panel.count = numTabsWithId;

        // Push onto containers
        this.tabs.push(tab);
        this.tabsDiv.add(tab);
        this.panels.push(panel);
        this.panelsDiv.add(panel);

        // // NOTE: If below is changed from '0' to '1', tabs will be hidden when there is only 1 tab
        const hideWhenNumberOfTabs = 0;
        if (this.tabs.length > hideWhenNumberOfTabs) this.tabsDiv.setDisplay('');

        // Minimum height (so tab buttons dont float over nothing)
        this.setContentsStyle('minHeight', '');
        if (this.tabsDiv.hasClass('suey-left-side') || this.tabsDiv.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.tabs.length) + 0.4) + 'em');
        }

        return panel;
    }

    addExistingTab(tab, panel) {
        return this.addTab(tab, panel);
    }

    addNewTab(id, content, options = {}) {
        function capitalize(string) {
            const words = String(string).split(' ');
            for (let i = 0; i < words.length; i++) words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            return words.join(' ');
        }

        // Create Tab / Panel
        if (typeof options !== 'object') options = {};
        if (!('color' in options) || options.color == null) options.color = ColorScheme.color(TRAIT.ICON);
        if (!('alpha' in options)) options.alpha = 1.0;
        if (!('icon' in options))options.icon = IMAGE_EMPTY;
        if (!('shadow' in options)) options.shadow = 0x000000;
        if (!('shrink' in options)) options.shrink = 1;
        if (options.shrink === true) options.shrink = 0.7;
        if (typeof options.shrink === 'string') {
            options.shrink = parseFloat(options.shrink) / (options.shrink.includes('%') ? 100 : 1);
        }
        const tab = new TabButton(this, capitalize(id) /* label */, options).setId(id);
        const panel = new Panel().setId(id);
        panel.addClass('suey-tab-panel', 'suey-hidden');
        panel.add(content);

        // Add Tab
        return this.addTab(tab, panel);
    }

    /********** SELECT */

    /** Select first tab */
    selectFirst() {
        if (this.tabs.length > 0) {
            return this.selectTab(this.tabs[0].getId());
        }
        return false;
    }

    /** Select last known tab */
    selectLastKnownTab() {
        //
        // TO BE IMPLEMENTED IN APP
        //
    }

    /** Select Tab */
    selectTab(id, count = 0, wasClicked = false) {
        if (this.tabs == undefined) return this;
        const self = this;

        // Find tab / panel by id
        const tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        const panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            // Disable animations while rebuilding
            if (!wasClicked) Css.setVariable('--tab-timing', '0', tab.dom);

            // Deselect current selection
            const currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            const currentPanel = this.panels.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            if (currentTab) currentTab.removeClass('suey-selected');
            if (currentPanel) currentPanel.addClass('suey-hidden');

            // Select new tab and panel
            tab.addClass('suey-selected');
            panel.removeClass('suey-hidden');

            // Set id
            this.selectedId = id;
            this.selectedCount = count;

            // Emit event
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = id;
                this.dom.dispatchEvent(tabChange);
            }

            // Re-enable animationss
            if (!wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', tab.dom), 50);

            return true;
        }

        return false;
    }

    /********** REMOVE */

    clearTabs() {
        if (this.tabsDiv) this.tabsDiv.clearContents();
        if (this.panelsDiv) this.panelsDiv.clearContents();
        if (this.tabs) {
            for (let i = 0; i < this.tabs.length; i++) this.tabs[i].destroy();
            this.tabs.length = 0;
        }
        if (this.panels) {
            for (let i = 0; i < this.panels.length; i++) this.panels[i].destroy();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }

    destroy() {
        this.clearTabs();
        super.destroy();
    }

    removeTab(index) {
        if (index >= 0 && index < this.tabs.length) {
            const tab = this.tabs[index];
            const panel = this.panels[index];
            if (tab) tab.removeClass('suey-selected');
            if (panel) panel.addClass('suey-hidden');
            this.tabs.splice(index, 1);
            this.tabsDiv.detach(tab);
            this.panels.splice(index, 1);
            this.panelsDiv.detach(panel);
        }
    }

    /********** DROP */

    handleTabDrop(tab, dropX, dropY) {
        const droppedOnPanel = Utils.findElementAt('suey-tabbed', dropX, dropY, this.dom);
        if (droppedOnPanel && droppedOnPanel !== this) {
            const tabIndex = this.tabs.indexOf(tab);
            if (tabIndex !== -1) {
                const panel = this.panels[tabIndex];
                this.removeTab(tabIndex);
                if (this.currentId() === tab.getId() && tabIndex > 0) {
                    this.selectTab(this.tabs[tabIndex - 1].getId());
                } else {
                    this.selectFirst();
                }
                droppedOnPanel.addExistingTab(tab, panel);
                droppedOnPanel.selectTab(tab.id, tab.count, false);
            }
        }
        tab.setStyle('left', '', 'top', '');
    }

    /******************** INFO ********************/

    currentId() {
        return this.selectedId;
    }

    getTabSide() {
        if (this.tabsDiv.hasClass('suey-left-side')) return 'left';
        if (this.tabsDiv.hasClass('suey-right-side')) return 'right';
        return 'unknown';
    }

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('suey-left-side', 'suey-right-side');
        this.tabsDiv.addClass((side === TAB_SIDES.RIGHT) ? 'suey-right-side' : 'suey-left-side');
    }

    tabIndex(id) {
        return this.tabs.indexOf(id);
    }

}

/******************** TAB BUTTON ********************/

const _color = new Iris();

class TabButton extends Div {

    constructor(parent, label, options = {}) {
        super();
        const self = this;
        this.setClass('suey-tab-button');
        this.setStyle('cursor', 'default');
        if (options.shadow) this.addClass('suey-tab-shadow');

        // Set Parent Dock
        this.dock = parent;

        // Icon / Label
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('suey-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) { self.iconBorder.dom.setAttribute('tooltip', label); };
        this.setLabel(label);

        // Background Color
        if (typeof options.color === 'string' && options.color.includes('var(--')) {
            this.iconVector.setStyle('background-color', `rgba(${options.color}, ${options.alpha})`);
        } else {
            _color.set(options.color);
            const light = `rgba(${_color.rgbString(options.alpha)})`;
            const dark = `rgba(${_color.darken(0.75).rgbString(options.alpha)})`;
            const background = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', background);
        }

        // Drop Shadow
        const shadow = options.shadow;
        if (this.iconVector.img && shadow !== false) {
            _color.set(shadow);
            const dropShadow = `drop-shadow(0 0 var(--pad-micro) rgba(${_color.rgbString()}, 0.8))`;
            this.iconVector.img.setStyle('filter', dropShadow);
        }

        // Shrink?
        const shrink = options.shrink;
        if (this.iconVector.img && !isNaN(shrink)) {
            this.iconVector.img.setStyle('position', 'absolute');
            this.iconVector.img.setStyle('left', '0', 'right', '0', 'top', '0', 'bottom', '0');
            this.iconVector.img.setStyle('margin', 'auto');
            this.iconVector.img.setStyle('width', `${shrink * 100}%`);
            this.iconVector.img.setStyle('height', `${shrink * 100}%`);
        }

        // Select on Click
        this.onClick(() => {
            self.dock.selectTab(self.dom.id, self.count, true);
            self.dock.dom.dispatchEvent(new Event('resized'));
        });

        // Dragging Tabs
        let downX = 0, downY = 0;
        let relativePosition;
        let isDragging = false;
        let minDistance = 0;
        let moreThanSlop = false;
        function onPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            isDragging = true;
            minDistance = 0;
            moreThanSlop = false;
            relativePosition = self.getRelativePosition();
            downX = event.pageX;
            downY = event.pageY;
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
        }
        function onPointerMove(event) {
            if (!isDragging) return;
            event.stopPropagation();
            event.preventDefault();
            minDistance = Math.max(minDistance, Math.abs(downX - event.pageX));
            minDistance = Math.max(minDistance, Math.abs(downY - event.pageY));
            if (!moreThanSlop && minDistance < MOUSE_SLOP) return;
            moreThanSlop = true;
            const newLeft = relativePosition.left - (downX - event.pageX);
            const newTop = relativePosition.top - (downY - event.pageY);
            self.setStyle('left', `${newLeft}px`, 'top', `${newTop}px`);
            self.addClass('suey-dragging');
        }
        function onPointerUp(event) {
            if (!isDragging) return;
            event.stopPropagation();
            event.preventDefault();
            isDragging = false;
            self.removeClass('suey-dragging');
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
            self.dock.handleTabDrop(self, event.pageX, event.pageY);
        }
        this.dom.addEventListener('pointerdown', onPointerDown);
    }

}

export { Tabbed };
