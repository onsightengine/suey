import { Element } from '../core/Element.js';
import { Popper } from '../utils/Popper.js';

import { ALIGN, OVERFLOW, POSITION } from '../utils/Popper.js';

class Button extends Element {

    constructor(innerHtml) {
        super(document.createElement('button'));
        const self = this;

        this.setClass('osui-button');
        this.dom.innerHTML = innerHtml ?? '';

        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = ALIGN.LEFT;
        this.overflowMenu = OVERFLOW.RIGHT;

        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(innerHtml) { if (this.dom) this.dom.disabled = innerHtml; }
        });

        /***** EVENTS *****/

        // Hide Tooltip
        this.onPointerDown((event) => {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        });

        this.dom.addEventListener('destroy', function() {
            if (self.attachedMenu) self.detachMenu();
        }, { once: true });
    }

    /** Attaches a PopUp menu to Button */
    attachMenu(osuiMenu) {
        const self = this;

        // Verify element is a 'osui-menu', apply 'osui-menu-button' class, store for later
        if (osuiMenu.hasClass('osui-menu') === false) return this;
        this.addClass('osui-menu-button');
        this.attachedMenu = osuiMenu;

        // Add menu to document, add event handler
        document.body.appendChild(osuiMenu.dom);
        this.dom.addEventListener('pointerdown', buttonPointerDown);

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

        // Pop this menu (calculate proper positioning)
        function popMenu() {
            const popped = Popper.popUnder(
                osuiMenu.dom,
                self.dom,
                self.alignMenu,
                self.menuOffsetX,
                self.menuOffsetY,
                self.overflowMenu
            );
            if (popped === POSITION.UNDER) {
                osuiMenu.removeClass('osui-slide-up');
                osuiMenu.addClass('osui-slide-down');
            } else {
                osuiMenu.removeClass('osui-slide-down');
                osuiMenu.addClass('osui-slide-up');
            }
        }

        // Handle button click
        function buttonPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();

            // Pop Menu
            if (self.hasClass('osui-selected') === false) {
                self.addClass('osui-selected');

                // Update position
                popMenu();

                // Apply class to show menu, CSS will handle the transition
                setTimeout(() => {
                    if (!self.dom) return;
                    osuiMenu.showMenu(self.dom, true /* giveFocus? */);
                }, 0);
            }

            // Let other menus know click occured
            document.dispatchEvent(new Event('captured'));
        };

        /** Removes attached menu */
        this.detachMenu = function() {
            if (self.hasClass('osui-menu-button') === false) return;
            self.removeClass('osui-menu-button');
            window.removeEventListener('resize', popMenu);
            self.dom.removeEventListener('pointerdown', buttonPointerDown);
            self.attachedMenu.destroy();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        }
    }

}

export { Button };
