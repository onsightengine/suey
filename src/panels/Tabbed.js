import { ColorScheme } from '../utils/ColorScheme.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { IMAGE_EMPTY } from '../constants.js';
import { Interaction } from '../utils/Interaction.js';
import { Iris } from '../utils/Iris.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { TRAIT } from '../constants.js';
import { VectorBox } from '../layout/VectorBox.js';

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
        this.addClass('osui-tabbed');
        this.setName('osui-tabbed');

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
        this.selectedId = '';
        this.selectedCount = 0;

        // Resizers
        let rect = {};
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
        this.tabsDiv = new Div().setClass('osui-tabs').setDisplay('none');
        this.panelsDiv = new Div().setClass('osui-tab-panels');
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

    /** Add Tab */
    addTab(id, content, options = {}) {
        if (typeof options !== 'object') options = {};
        if (!('color' in options) || options.color === undefined || options.color === null) {
            options.color = ColorScheme.color(TRAIT.ICON);
        }
        if (!('alpha' in options)) options.alpha = 1.0;
        if (!('icon' in options))options.icon = IMAGE_EMPTY;
        if (!('shadow' in options)) options.shadow = 0x000000;

        // Count ID's
        let numTabsWithId = 0;
        for (let i = 0; i < this.tabs.length; i++) {
            const tab = this.tabs[i];
            if (tab.dom.id === id) numTabsWithId++;
        }

        function capitalize(string) {
            const words = String(string).split(' ');
            for (let i = 0; i < words.length; i++) words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            return words.join(' ');
        }

        // Create tab
        const label = capitalize(id);
        const tab = new TabButton(this, label, options);
        tab.setId(id);
        tab.count = numTabsWithId;

        // Push onto containers
        this.tabs.push(tab);
        this.tabsDiv.add(tab);

        // // NOTE: If below is changed from '0' to '1', tabs will be hidden when there is only 1 tab
        const hideWhenNumberOfTabs = 0;
        if (this.tabs.length > hideWhenNumberOfTabs) this.tabsDiv.setDisplay('');

        const panel = new Panel().setId(id);
        panel.addClass('osui-tab-panel', 'osui-hidden');
        panel.add(content);
        panel.count = numTabsWithId;
        this.panels.push(panel);
        this.panelsDiv.add(panel);

        // Minimum height (so tab buttons dont float over nothing)
        this.setContentsStyle('minHeight', '');
        if (this.tabsDiv.hasClass('osui-left-side') || this.tabsDiv.hasClass('osui-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.tabs.length) + 0.4) + 'em');
        }

        return panel;
    }

    /** Select first tab */
    selectFirst() {
        if (this.tabs.length > 0) {
            return this.selectTab(this.tabs[0].getId());
        }
        return false;
    }

    /** Select last known tab */
    selectLastKnownTab() {

        // TO BE IMPLEMENTED IN APP

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
            if (currentTab) currentTab.removeClass('osui-selected');
            if (currentPanel) currentPanel.addClass('osui-hidden');

            // Select new tab and panel
            tab.addClass('osui-selected');
            panel.removeClass('osui-hidden');

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

    destroy() {
        this.clearTabs();
        super.destroy();
    }

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

    currentId() {
        return this.selectedId;
    }

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('osui-left-side', 'osui-right-side');
        this.tabsDiv.addClass((side === TAB_SIDES.RIGHT) ? 'osui-right-side' : 'osui-left-side');
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
        this.setClass('osui-tab-button');
        this.setStyle('cursor', 'default');
        if (options.shadow) this.addClass('osui-tab-shadow');

        // Icon / Label
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('osui-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) { self.iconBorder.dom.setAttribute('tooltip', label); }
        this.setLabel(label);

        // Background Color
        _color.set(options.color);
        const light = `rgba(${_color.rgbString(options.alpha)})`;
        const dark = `rgba(${_color.darken(0.75).rgbString(options.alpha)})`;
        const background = `linear-gradient(to bottom left, ${light}, ${dark})`;
        this.iconVector.setStyle('background-image', background);

        // Drop Shadow
        const shadow = options.shadow;
        if (this.iconVector.img && shadow !== false) {
            _color.set(shadow);
            const dropShadow = `drop-shadow(var(--minus) var(--pixel) var(--pad-micro) rgba(${_color.rgbString()}, 0.75))`;
            this.iconVector.img.setStyle('filter', dropShadow);
        }

        // Events
        this.onClick(() => {
            parent.selectTab(self.dom.id, self.count, true);
            parent.dom.dispatchEvent(new Event('resized'));
        });
    }

}

export { Tabbed };
