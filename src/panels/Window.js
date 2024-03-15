import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { RESIZERS } from '../constants.js';

const MIN_W = 300;
const MIN_H = 150;

class Window extends Panel {

    #initialWidth;
    #initialHeight;
    #lastKnownRect;
    #titleBar = undefined;

    constructor({
        style = PANEL_STYLES.FANCY,
        width = 600,
        height = 600,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-window');
        this.allowFocus();

        // Properties
        this.isWindow = true;
        this.#initialWidth = width;
        this.#initialHeight = height;
        this.maximized = false;

        // Stacks
        this.dom.addEventListener('focusout', () => { self.removeClass('suey-active-window'); });
        this.dom.addEventListener('focusin', () => { self.activeWindow(); });
        this.dom.addEventListener('displayed', () => { self.activeWindow(); } );
        this.dom.addEventListener('pointerdown', () => { self.activeWindow(); } );

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
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove, resizerUp);

        // Initial Size
        this.setStyle('left', '0', 'top', '0', 'width', '0', 'height', '0');

        // Wait for document to load
        if (document.readyState === 'complete') self.setInitialSize();
        else window.addEventListener('load', () => { self.setInitialSize(); }, { once: true });

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
        window.addEventListener('resize', () => { keepInWindow(); });

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
    }

    /******************** WIDGETS */

    addTitleBar(title = '', draggable = false, scale = 1.3) {
        if (!this.#titleBar) {
            this.#titleBar = new TitleBar(this, title, draggable, scale);
            this.addToSelf(this.#titleBar);
        } else {
            this.#titleBar.setTitle(title);
        }
    }

    setTitle(title = '') {
        if (this.#titleBar) this.#titleBar.setTitle(title);
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
        this.undock();
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
            this.addClass('suey-docked-left');
            this.removeClass('suey-docked-right');
        }
    }

    dockRight() {
        if (!this.hasClass('suey-docked-right')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.addClass('suey-docked-right');
            this.removeClass('suey-docked-left');
        }
    }

    undock() {
        if (this.hasClass('suey-docked-right') || this.hasClass('suey-docked-left')) {
            const currentRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left');
            this.removeClass('suey-docked-right');
            if (this.#lastKnownRect) {
                const newLeft = currentRect.left + ((currentRect.width - this.#lastKnownRect.width) / 2);
                this.setStyle('left', `${newLeft}px`);
                this.setStyle('width', `${this.#lastKnownRect.width}px`);
                this.setStyle('height', `${this.#lastKnownRect.height}px`);
            }
        }
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
        this.setInnerHtml(title);
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        this.setStyle('width', Css.toEm(`${width}px`));
    }

}
