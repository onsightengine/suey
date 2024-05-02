
import {
    CLOSE_SIDES,
    PANEL_STYLES,
    RESIZERS,
} from '../constants.js';
import { AbstractDock } from './AbstractDock.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Interaction } from '../utils/input/Interaction.js';
import { Span } from '../core/Span.js';
import { Strings } from '../utils/Strings.js';

const MIN_W = 300;
const MIN_H = 150;

class Window extends AbstractDock {

    #lastKnownRect;

    constructor({
        style = PANEL_STYLES.FANCY,
        resizers = 'all', // [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
        title = '',
        draggable = true,
        maxButton = true,
        closeButton = true,
        buttonSides = CLOSE_SIDES.LEFT,
        width = '60%',
        height = '60%',
        initialWidth = undefined,
        initialHeight = undefined,
        startCentered = true,
        left = 0,
        top = 0,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-window', 'suey-hidden');
        this.allowFocus();

        // Properties
        this.isWindow = true;
        this.maximized = false;
        this.initialWidth = (initialWidth != null) ? initialWidth : width;
        this.initialHeight = (initialHeight != null) ? initialHeight : height;

        // Title Bar
        const titleBar = new TitleBar(this, title, draggable, 1.3 /* scale*/);
        this.addToSelf(titleBar);

        // Set Title Function
        this.setTitle = function(newTitle = '') {
            titleBar.setTitle(newTitle);
        };

        // Window Buttons
        if (closeButton) Interaction.addCloseButton(this, buttonSides, 1.7 /* offset */);
        if (maxButton) Interaction.addMaxButton(this, buttonSides, 1.7 /* offset */);

        // Tab Elements
        this.buttons = new Div().setClass('suey-tab-buttons', 'suey-window-side');
        this.floaters = new Div().setClass('suey-tab-floaters');
        this.add(this.floaters);
        titleBar.add(this.buttons);

        // Z-Index Stacking
        function activeWindow() {
            // Floater wants Focus if no descendant has focus
            if (document.activeElement === self.dom || self.dom.contains(document.activeElement) === false) {
                const floater = self.findFloater(self.selectedID);
                if (floater) floater.dom.dispatchEvent(new Event('activate-window'));
            }
            // Apply Class, Sort Windows
            if (self.hasClass('suey-active-window')) return;
            self.addClass('suey-active-window');
            // Ensure only active window
            if (self.parent) {
                // Find Windows
                const windows = Dom.childrenWithClass(self.parent, 'suey-window', true, false /* searchChildenOfTarget */);
                windows.forEach((element) => {
                    if (element && element.isElement) element = element.dom;
                    if (element !== self.dom) element.classList.remove('suey-active-window');
                });
                // Set self as Highest Z-Order
                const topZ = windows.length + 200;
                Css.setVariable('--window-z-index', `${topZ}`, self);
                // Arrange other Window Z-Orders
                windows.forEach((element) => {
                    if (element === self.dom) return;
                    let currentZ = Css.getVariable('--window-z-index', element);
                    if (currentZ >= topZ) currentZ = topZ;
                    currentZ--;
                    if (currentZ < 200) currentZ = 200;
                    Css.setVariable('--window-z-index', `${currentZ}`, element);
                });
            }
        }
        this.on('focusin', () => activeWindow());
        this.on('focusout', () => self.removeClass('suey-active-window'));

        // Resizers
        let rect = {}, parentRect = {};
        function resizerDown() {
            self.focus();
            rect = self.dom.getBoundingClientRect();
            parentRect = self.parentRect();
            self.addClass('suey-window-moving');
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W, (rect.left - parentRect.left) + diffX));
                const newWidth = (rect.right - parentRect.left) - newLeft;
                self.setStyle('left', `${newLeft}px`);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, (rect.top - parentRect.top) + diffY));
                const newHeight = (rect.bottom - parentRect.top) - newTop;
                self.setStyle('top', `${newTop}px`);
                self.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), parentRect.width - (rect.left - parentRect.left));
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), parentRect.height - (rect.top - parentRect.top));
                self.setStyle('height', `${newHeight}px`);
            }
            self.removeClass('suey-maximized');
            self.maximized = false;
            self.dom.dispatchEvent(new Event('resizer'));
        }
        function resizerUp() {
            keepInWindow();
            self.removeClass('suey-window-moving');
        }
        Interaction.makeResizeable(this, resizerDown, resizerMove, resizerUp);
        this.addResizers(resizers);

        // Set Initial Size
        this.setStyle(
            'left', Css.parseSize(left),
            'top', Css.parseSize(top),
            'width', Css.parseSize(width),
            'height', Css.parseSize(height),
        );

        /***** EVENTS *****/

        // Resize: Keep within parent
        function keepInWindow() {
            // NOTE: Limits top based on Title Bar
            const computed = getComputedStyle(self.dom);
            const rect = {
                left: parseFloat(computed.left),
                top: parseFloat(computed.top),
                width: parseFloat(computed.width),
                height: parseFloat(computed.height),
            };
            const titleHeight = parseInt(Css.toPx('4em'));
            let newLeft = Math.min(self.parentRect().width - (rect.width / 2), rect.left);
            let newTop = Math.min(self.parentRect().height - titleHeight, rect.top);
            newLeft = Math.max(- (rect.width / 2), newLeft);
            newTop = Math.max(0, newTop);
            self.setStyle('top', `${newTop}px`);
            self.setStyle('left', `${newLeft}px`);
        }
        window.addEventListener('resize', keepInWindow);
        this.on('destroy', () => {
            window.removeEventListener('resize', keepInWindow);
        });

        // Displayed: Center,  within parent
        this.on('displayed', () => {
            if (startCentered) self.center();   // center first time shown
            keepInWindow();                     // resize if necessary
        });

    } // end ctor

    /******************** DESTROY */

    destroy() {
        this.removeFloaters();
        super.destroy();
    }

    /******************** POSITION */

    setStyle(...styles) {
        super.setStyle(...styles);
        const self = this;

        // Shrink Tab Button if Window near top of screen
        clearTimeout(this._styleTimeout);
        this._styleTimeout = setTimeout(() => {
            const rect = self.dom.getBoundingClientRect();
            if (rect.top < parseFloat(Css.toPx('0.7em'))) {
                self.addClass('suey-shrink-tab-button');
            } else {
                self.removeClass('suey-shrink-tab-button');
            }
        }, 10);
    }

    /** Centers 'Window' in parent element */
    center() {
        const parentRect = this.parentRect();
        const side = (parentRect.width - this.getWidth()) / 2;
        const top = (parentRect.height - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
    }

    parentRect() {
        if (this.parent && this.parent.isElement) return this.parent.dom.getBoundingClientRect();
        return document.body.getBoundingClientRect();
    }

    setInitialSize() {
        this.setStyle('width', Css.parseSize(this.initialWidth));
        this.setStyle('height', Css.parseSize(this.initialHeight));
        this.dom.dispatchEvent(new Event('resizer'));
    }

    /** Displays window, with focus */
    showWindow() {
        this.display();
        this.focus();
    }

    toggleMinMax() {
        this.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
        const parentRect = this.parentRect();
        if (!this.maximized) {
            this.addClass('suey-maximized');
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('top', `0`);
            this.setStyle('width', `${parentRect.width}px`);
            this.setStyle('height', `${parentRect.height}px`);
            this.maximized = true;
        } else {
            this.removeClass('suey-maximized');
            const newLeft = Math.max(0, Math.min(parentRect.width - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(parentRect.height - this.#lastKnownRect.height, this.#lastKnownRect.top));
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

    addFloater(...floaters) {
        if (!floaters || !Array.isArray(floaters)) return this;
        let tabsAdded = 0;
        for (const floater of floaters) {
            if (!floater || !floater.hasClass('suey-floater')) continue;

            // Update parent Dock
            floater.dock = this;

            // Push onto containers
            this.floaters.add(floater);
            this.buttons.add(floater.button);
            tabsAdded++;
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

        // Tabs Changed
        this.dom.dispatchEvent(new Event('tabs-changed', { bubbles: true }));

        // Remove from document if empty
        if (this.tabCount() === 0) this.removeSelf();
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

        // Already Selected
        if (this.selectedID === selectID) return this;

        // Find button / panel with selectID
        const panel = this.findFloater(selectID);
        if (panel && panel.button) {
            // Deselect current Panel / Button
            this.floaters.children.forEach((element) => element.hide());
            this.buttons.children.forEach((element) => element.removeClass('suey-selected'));

            // Select new Panel / Button
            panel.display();
            panel.button.addClass('suey-selected');
            this.selectedID = selectID;

            // Set Title
            this.setTitle(selectID);

            // Event
            const tabSelected = new Event('tab-selected', { bubbles: true });
            tabSelected.value = selectID;
            this.dom.dispatchEvent(tabSelected);

            // Verify Visible
            this.setStyle('display', '');
        }
        return this;
    }

    tabCount() {
        return this.floaters.children.length;
    }

}

export { Window };

/******************** INTERNAL ********************/

class TitleBar extends Div {

    constructor(window, title = '', draggable = false, scale = 1.3) {
        if (!window || !window.isElement) return console.warn(`TitleBar: Missing window element`);

        super();
        this.setClass('suey-title-bar', 'suey-panel-button');
        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571 + 0.071) / 2)}em`);

        // Initial Set
        if (title && typeof title === 'string' && title != '') this.setTitle(title);

        // Events
        function titleDown() {
            if (window) {
                if (typeof window.focus === 'function') window.focus();
                window.addClass('suey-window-moving');
            }
        }
        function titleUp() {
            if (window) window.removeClass('suey-dragging-window');
        }
        function titleDoubleClick() {
            if (window && window.isElement) {
                if (typeof window.setInitialSize === 'function') window.setInitialSize();
                if (typeof window.center === 'function') window.center();
                window.removeClass('suey-docked-left', 'suey-docked-right', 'suey-docked-top', 'suey-docked-bottom');
                window.removeClass('suey-maximized');
                window.maximized = false;
                window.dom.dispatchEvent(new Event('resize'));
            }
        }

        // Add Listeners
        if (draggable) Interaction.makeDraggable(this, window, true /* limitToWindow */, titleDown, null, titleUp);
        this.on('dblclick', titleDoubleClick);
    }

    setTitle(title = '') {
        title = Strings.capitalize(title);
        const titleTextElement = this.dom.querySelector('.suey-window-title-text');
        if (titleTextElement) {
            titleTextElement.textContent = title;
        } else {
            const titleText = new Span(title);
            titleText.addClass('suey-window-title-text');
            titleText.setStyle('user-select', 'none');
            this.add(titleText);
        }
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        Css.setVariable('--title-width', `${width}px`, this);
        this.setStyle('width', Css.toEm(`${width}px`));
    }

}
