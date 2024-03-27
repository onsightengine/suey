import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel } from '../panels/Panel.js';
import { Span } from '../core/Span.js';

import { CLOSE_SIDES } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { RESIZERS } from '../constants.js';

const MIN_W = 300;
const MIN_H = 150;

class Window extends Panel {

    #initialWidth;
    #initialHeight;
    #lastKnownRect;

    constructor({
        style = PANEL_STYLES.FANCY,
        width = 600,
        height = 600,
        resizers = 'all', // [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
        title = '',
        draggable = true,
        maxButton = true,
        closeButton = true,
        buttonSides = CLOSE_SIDES.LEFT,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-window');
        this.allowFocus();

        // Properties, Private
        this.#initialWidth = width;
        this.#initialHeight = height;

        // Properties, Public
        this.isWindow = true;
        this.maximized = false;

        // Title Bar
        const titleBar = new TitleBar(this, title, draggable, 1.3 /* scale*/);
        this.addToSelf(titleBar);

        // Window Buttons
        if (closeButton) Interaction.addCloseButton(this, buttonSides, 1.7 /* offset */);
        if (maxButton) Interaction.addMaxButton(this, buttonSides, 1.7 /* offset */);

        // Tab Elements
        this.buttons = new Div().setClass('suey-tab-buttons').addClass('suey-window-side');
        this.panels = new Div().setClass('suey-tab-panels');
        this.add(this.panels);
        titleBar.add(this.buttons);

        // Stacks
        this.dom.addEventListener('focusout', () => self.removeClass('suey-active-window'));
        this.dom.addEventListener('focusin', () => self.activeWindow());
        this.dom.addEventListener('displayed', () => self.activeWindow());
        this.dom.addEventListener('pointerdown', () => self.activeWindow());

        // Resizers
        let rect = {};
        function resizerDown() {
            self.focus();
            rect = self.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.setStyle('left', `${newLeft}px`);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.setStyle('top', `${newTop}px`);
                self.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), window.innerWidth - rect.left);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), window.innerHeight - rect.top);
                self.setStyle('height', `${newHeight}px`);
            }
            self.maximized = false;
            self.dom.dispatchEvent(new Event('resizer'));
        }
        function resizerUp() {
            keepInWindow();
        }
        Interaction.makeResizeable(this, resizerDown, resizerMove, resizerUp);
        this.addResizers(resizers);

        // Initial Size
        this.setStyle('left', '0', 'top', '0', 'width', '0', 'height', '0');

        // Wait for document to load
        if (document.readyState === 'complete') self.setInitialSize();
        else window.addEventListener('load', () => self.setInitialSize(), { once: true });

        // Keep In Window
        function keepInWindow() {
            // // OPTION: Limit to Title Bar
            const computed = getComputedStyle(self.dom);
            const rect = {
                left: parseFloat(computed.left),
                top: parseFloat(computed.top),
                width: parseFloat(computed.width),
                height: parseFloat(computed.height),
            };
            const titleHeight = parseInt(Css.toPx('4em'));
            let newLeft = Math.min(window.innerWidth - (rect.width / 2), rect.left);
            let newTop = Math.min(window.innerHeight - titleHeight, rect.top);
            newLeft = Math.max(- (rect.width / 2), newLeft);
            newTop = Math.max(0, newTop);
            self.setStyle('top', `${newTop}px`);
            self.setStyle('left', `${newLeft}px`);

            // // OPTION: Limit to Window
            // const rect = self.dom.getBoundingClientRect();
            // if (rect.right > window.innerWidth) self.setStyle('left', `${Math.max(0, window.innerWidth - rect.width)}px`);
            // if (rect.bottom > window.innerHeight) self.setStyle('top', `${Math.max(0, window.innerHeight - rect.height)}px`);
            // if (rect.top < 0) self.setStyle('top', '0px');
            // if (rect.left < 0) self.setStyle('left', '0px');
            // if (rect.width > window.innerWidth) self.setStyle('width', `${window.innerWidth}px`);
            // if (rect.height > window.innerHeight) self.setStyle('height', `${window.innerHeight}px`);
        }
        window.addEventListener('resize', () => keepInWindow());

        let firstTime = true;
        this.dom.addEventListener('displayed', () => {
            // Center first time shown
            if (firstTime) {
                self.center();
                firstTime = false;
            }
            // Resize if necessary
            keepInWindow();
        });

        // Set Title Function
        this.setTitle = function(newTitle = '') {
            title = newTitle;
            titleBar.setTitle(title);
        };
    }

    /******************** POSITION */

    /** Applies 'suey-active-window', ensures this is the only element with this special class */
    activeWindow() {
        if (this.hasClass('suey-active-window')) return;
        this.addClass('suey-active-window');

        // Ensure only active window
        const windows = document.querySelectorAll('.suey-window');
        windows.forEach((element) => {
            if (element !== this.dom) element.classList.remove('suey-active-window');
        });

        // Arrange Z-Orders
        const topZ = windows.length + 200;
        Css.setVariable('--window-z-index', `${topZ}`, this);
        windows.forEach((element) => {
            if (element !== this.dom) {
                let currentZ = Css.getVariable('--window-z-index', element);
                if (currentZ >= topZ) currentZ = topZ;
                currentZ--;
                if (currentZ < 200) currentZ = 200;
                Css.setVariable('--window-z-index', `${currentZ}`, element);
            }
        });
    }

    /** Centers 'Window' panel in document window */
    center() {
        const side = (window.innerWidth - this.getWidth()) / 2;
        const top = (window.innerHeight - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
    }

    setInitialSize() {
        const width = Css.toPx(Css.parseSize(this.#initialWidth), this, 'w');
        const height = Css.toPx(Css.parseSize(this.#initialHeight), this, 'h');
        this.setStyle('width', width);
        this.setStyle('height', height);
        this.dom.dispatchEvent(new Event('resizer'));
    }

    /** Displays window, with focus */
    showWindow() {
        this.display();
        this.focus();
    }

    toggleMinMax() {
        this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
        if (!this.maximized) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('top', `0`);
            this.setStyle('width', `${window.innerWidth}px`);
            this.setStyle('height', `${window.innerHeight}px`);
            this.maximized = true;
        } else {
            const newLeft = Math.max(0, Math.min(window.innerWidth - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(window.innerHeight - this.#lastKnownRect.height, this.#lastKnownRect.top));
            this.setStyle('left', `${newLeft}px`);
            this.setStyle('top', `${newTop}px`);
            this.setStyle('width', `${this.#lastKnownRect.width}px`);
            this.setStyle('height', `${this.#lastKnownRect.height}px`);
            this.maximized = false;
        }
        this.dom.dispatchEvent(new Event('resizer'));
    }

    /******************** DOCKING */

    dockLeft() {
        if (!this.hasClass('suey-docked-left')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-left');
        }
        this.setStyle('left', `0`);
        this.setStyle('top', `0`);
        this.setStyle('width', `50%`);
        this.setStyle('height', `100%`);
    }

    dockRight() {
        if (!this.hasClass('suey-docked-right')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-right');
        }
        this.setStyle('left', `50%`);
        this.setStyle('top', `0`);
        this.setStyle('width', `50%`);
        this.setStyle('height', `100%`);
    }

    dockTop() {
        if (!this.hasClass('suey-docked-top')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-top');
        }
        this.setStyle('left', `0`);
        this.setStyle('top', `0`);
        this.setStyle('width', `100%`);
        this.setStyle('height', `50%`);
    }

    dockBottom() {
        if (!this.hasClass('suey-docked-bottom')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            this.addClass('suey-docked-bottom');
        }
        this.setStyle('left', `0`);
        this.setStyle('top', `50%`);
        this.setStyle('width', `100%`);
        this.setStyle('height', `50%`);
    }

    undock() {
        if (this.hasClass('suey-docked-right') ||
            this.hasClass('suey-docked-left') ||
            this.hasClass('suey-docked-top') ||
            this.hasClass('suey-docked-bottom')) {
            const currentRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
            if (this.#lastKnownRect) {
                const newLeft = currentRect.left + ((currentRect.width - this.#lastKnownRect.width) / 2);
                this.setStyle('left', `${newLeft}px`);
                this.setStyle('width', `${this.#lastKnownRect.width}px`);
                this.setStyle('height', `${this.#lastKnownRect.height}px`);
            }
        }
    }

    /******************** TABS */

    addTab(tabPanel) {
        if (!tabPanel || !tabPanel.hasClass('suey-floater')) {
            console.error(`Window.addTab: Expected Tab as first argument`, tabPanel);
            return null;
        }

        // Update parent Dock
        tabPanel.dock = this;

        // Push onto containers
        this.buttons.add(tabPanel.button);
        this.panels.add(tabPanel);

        // Hide Title
        tabPanel.traverse((child) => {
            if (child.hasClass('suey-tab-title')) child.addClass('suey-hidden');
        });

        return tabPanel;
    }

    /** Select Tab (returns true if new Tab was selected) */
    selectTab(newID) {
        const panel = this.panels.children.find((item) => (item.getID() === newID));
        if (panel && panel.button) {
            // Deselect current Panel / Button
            const selectedPanel = this.panels.children.find((item) => (item.getID() === this.selectedID));
            if (selectedPanel) selectedPanel.addClass('suey-hidden');
            if (selectedPanel?.button) selectedPanel.button.removeClass('suey-selected');

            // Select new Panel / Button
            panel.removeClass('suey-hidden');
            panel.button.addClass('suey-selected');
            this.selectedID = newID;

            // Event
            const tabChange = new Event('tab-changed');
            tabChange.value = newID;
            this.dom.dispatchEvent(tabChange);

            // Selection Successful
            return true;
        }
        return false;
    }

    removeTab() {
        const self = this;
        setTimeout(() => {
            if (self.parent && self.parent.isElement) {
                self.parent.remove(this);
            } else {
                self.hide();
            }
        }, 0);
    }

}

export { Window };

/******************** INTERNAL ********************/

class TitleBar extends Div {

    constructor(parent, title = '', draggable = false, scale = 1.3) {
        if (!parent || !parent.isElement) return console.warn(`TitleBar: Missing parent element`);

        super();
        const self = this;
        this.setClass('suey-title-bar');
        this.addClass('suey-panel-button');

        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571 + 0.071) / 2)}em`);
        this.setTitle(title);

        function titleDown() {
            if (parent && typeof parent.focus === 'function') parent.focus();
        }

        if (draggable) {
            Interaction.makeDraggable(this, parent, true /* limitToWindow */, titleDown);
        }

        this.onDblClick(() => {
            if (self.parent && self.parent.isElement) {
                if (typeof self.parent.setInitialSize === 'function') self.parent.setInitialSize();
                if (typeof self.parent.center === 'function') self.parent.center();
                self.parent.undock();
                self.parent.maximized = false;
                window.dispatchEvent(new Event('resize'));
            }
        });
    }

    setTitle(title = '') {
        const titleTextElement = this.dom.querySelector('.suey-tab-title-text');
        if (titleTextElement) {
            titleTextElement.textContent = title;
        } else {
            const titleText = new Span(title).addClass('suey-tab-title-text');
            this.add(titleText);
        }
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        Css.setVariable('--title-width', `${width}px`, this);
        this.setStyle('width', Css.toEm(`${width}px`));
    }

}
