/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel } from './Panel.js';
import { Resizeable } from './Resizeable.js';
import { VectorBox } from '../layout/VectorBox.js';

///// Enumerations

export const TAB_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
}

///// Class

class Tabbed extends Resizeable {

    constructor(style, tabSide = TAB_SIDES.RIGHT) {
        super(style);
        const self = this;
        self.setName('Tabbed');
        self.addClass('Tabbed');

        // Public Properties
        self.tabs = [];
        self.panels = [];
        self.selectedId = '';
        self.selectedCount = 0;

        // Children Elements
        self.tabsDiv = new Div().setClass('Tabs').setDisplay('none');
        self.panelsDiv = new Div().setClass('TabPanels');
        self.add(self.tabsDiv);
        self.add(self.panelsDiv);

        // Set side (LEFT / RIGHT) that tabs should appear
        self.setTabSide(tabSide);

        /** Add Tab */
        this.addTab = function(id, items, icon, bgColor = undefined) {
            // Count Id's
            let numTabsWithId = 0;
            for (let i = 0; i < self.tabs.length; i++) {
                const tab = self.tabs[i];
                if (tab.dom.id === id) numTabsWithId++;
            }

            function capitalize(string) {
                const words = String(string).split(' ');
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
                }
                return words.join(' ');
            }

            // Create tab
            const label = capitalize(id);
            const tab = new TabButton(self, label, icon, bgColor);
            tab.setId(id);
            tab.count = numTabsWithId;

            // Push onto containers
            self.tabs.push(tab);
            self.tabsDiv.add(tab);

            // // NOTE: If below is changed from '0' to '1', tabs will be hidden when there is only 1 tab
            if (self.tabs.length > 0) self.tabsDiv.setDisplay('');

            const panel = new Panel().setId(id).addClass('Titled').addClass('Hidden').add(items);
            panel.count = numTabsWithId;
            self.panels.push(panel);
            self.panelsDiv.add(panel);

            self.setContentsStyle('minHeight', '');
            if (self.tabsDiv.hasClass('LeftSide') || self.tabsDiv.hasClass('RightSide')) {
                self.setContentsStyle('minHeight', ((2.2 * self.tabs.length) + 0.4) + 'em');
            }

            return tab;
        };

    } // end ctor

    //////////////////// Methods

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

        // Disable animations while rebuilding
        if (wasClicked !== true) {
            Css.setVariable('--tab-timing', '0');
        }

        // Find tab / panel by id
        let tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        let panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            // Deselect current selection
            let currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            let currentPanel = this.panels.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            if (currentTab) currentTab.removeClass('Selected');
            if (currentPanel) currentPanel.addClass('Hidden');

            // Select new tab and panel
            tab.addClass('Selected');
            panel.removeClass('Hidden');

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
            if (wasClicked !== true) {
                setTimeout(() => { Css.setVariable('--tab-timing', '200ms'); }, 50);
            };

            return true;
        }

        return false;
    }

    clearTabs() {
        if (this.tabsDiv) this.tabsDiv.clear();
        if (this.panelsDiv) this.panelsDiv.clear();
        if (this.tabs) {
            for (let i = 0; i < this.tabs.length; i++) this.tabs[i].clear();
            this.tabs.length = 0;
        }
        if (this.panels) {
            for (let i = 0; i < this.panels.length; i++) this.panels[i].clear();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }

    currentId() {
        return this.selectedId;
    }

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('LeftSide');
        this.tabsDiv.removeClass('RightSide');
        if (side === TAB_SIDES.RIGHT) {
            this.tabsDiv.addClass('RightSide');
        } else {
            this.tabsDiv.addClass('LeftSide');
        }
    }

    tabIndex(id) {
        return this.tabs.indexOf(id);
    }

}

///// Class

class TabButton extends Div {

    constructor(parent, label, icon, bgColor = undefined) {
        super();
        const self = this;
        this.setClass('Tab');
        this.setCursor('default');

        ///// Icon / Label

        this.iconVector = new VectorBox(icon);
        this.iconBorder = new Div().setClass('TabIcon');
        this.add(this.iconVector, this.iconBorder);
        // this.add(new Text(label).setClass('TabText'));
        this.setLabel = function(label) {
            self.iconBorder.dom.setAttribute('tooltip', label);
        }
        this.setLabel(label);

        ///// Background Color

        if (bgColor !== undefined && bgColor !== null) {
            hexColor = Math.floor(hexColor);
            hexColor = Math.min(Math.max(hexColor, 0), 0xffffff);

            const rLight = (bgColor & 0xff0000) >> 16;
            const gLight = (bgColor & 0x00ff00) >> 8;
            const bLight = (bgColor & 0x0000ff);

            const rDark = rLight * 0.75;
            const gDark = gLight * 0.75;
            const bDark = bLight * 0.75;

            const light = `rgb(${rLight}, ${gLight}, ${bLight})`;
            const dark = `rgb(${rDark}, ${gDark}, ${bDark})`;

            const bgImage = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', bgImage);
        }

        ///// Click Handler

        this.dom.addEventListener('click', function() {
            parent.selectTab(self.dom.id, self.count, true);
            if (window.signals) signals.windowResize.dispatch();
        });

    } // end ctor

}

export { Tabbed };
