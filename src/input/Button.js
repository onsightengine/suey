import { Element } from '../core/Element.js';
import { Popper } from '../utils/Popper.js';

import { ALIGN, OVERFLOW, POSITION } from '../utils/Popper.js';

class Button extends Element {

    constructor(buttonText, closesMenus = true) {
        super(document.createElement('button'));
        const self = this;

        this.setClass('suey-button');
        this.dom.textContent = buttonText ?? ' ';

        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = ALIGN.LEFT;
        this.overflowMenu = OVERFLOW.RIGHT;
        this.closesMenus = closesMenus;

        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(isDisabled) { if (this.dom) this.dom.disabled = isDisabled; }
        });

        /***** EVENTS *****/

        function hideTooltip(event) {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        }

        this.on('pointerdown', hideTooltip);

        this.on('destroy', () => {
            if (self.attachedMenu) self.detachMenu();
        });
    }

    /******************** MENU ********************/

    /** Attaches a PopUp menu to Button */
    attachMenu(menuElement, popupStyle = false) {
        const self = this;
        if (popupStyle) menuElement.addClass('suey-popup-menu');

        // Button Click
        function buttonPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            // Pop Menu
            if (self.hasClass('suey-selected') === false) {
                self.addClass('suey-selected');
                // Update position
                popMenu();
                // Apply class to show menu, CSS will handle the transition
                setTimeout(() => {
                    if (!self.dom) return;
                    menuElement.showMenu(self.dom, true /* giveFocus? */);
                }, 0);
            }
            // Let other menus know click occured
            document.dispatchEvent(new Event('closemenu'));
        }

        // Pop Menu (internally calculates proper positioning)
        function popMenu() {
            const popped = Popper.popUnder(menuElement.dom, self.dom, self.alignMenu, self.menuOffsetX, self.menuOffsetY, self.overflowMenu);
            menuElement.removeClass('suey-slide-up');
            menuElement.removeClass('suey-slide-down');
            menuElement.addClass((popped === POSITION.UNDER) ? 'suey-slide-down' : 'suey-slide-up');
        }

        // Verify element is a 'suey-menu', apply 'suey-menu-button' class, store for later
        if (menuElement.hasClass('suey-menu') === false) return this;
        this.addClass('suey-menu-button');
        this.attachedMenu = menuElement;

        // Add menu to document, add event handler
        document.body.appendChild(menuElement.dom);
        this.on('pointerdown', buttonPointerDown);

        // Observer: Calls popMenu when button is initially added to the DOM. This is done to decide initial
        //           (over / under) popper placement, then the observer is removed.
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });

        // Handle document resize / positioning
        window.addEventListener('resize', popMenu);

        /** Removes attached menu */
        this.detachMenu = function() {
            if (self.hasClass('suey-menu-button') === false) return;
            self.removeClass('suey-menu-button');
            window.removeEventListener('resize', popMenu);
            self.dom.removeEventListener('pointerdown', buttonPointerDown);
            self.attachedMenu.destroy();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        };
    }

    /******************** EVENTS ********************/

    /** Override to alert about special event handler */
    on(event, callback, once = false) {
        if (event === 'click' || event === 'select') {
            console.warn('Button.on(): Click event for this Element is meant to be used with onPress()');
        }
        super.on(event, callback, once);
        return this;
    }

    /** Special event handler for Button */
    onPress(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (self.closesMenus) document.dispatchEvent(new Event('closemenu'));
            }
        };
        super.on('click', eventHandler);
        return self;
    }

}

export { Button };
