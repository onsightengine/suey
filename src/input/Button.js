/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Element } from '../core/Element.js';
import { Popper } from '../Popper.js';

class Button extends Element {

    constructor(innerHtml) {
        super(document.createElement('button'));
        const self = this;

        this.setClass('Button');
        this.dom.innerHTML = innerHtml ?? '';

        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = Popper.ALIGN.LEFT;
        this.overflowMenu = Popper.OVERFLOW.RIGHT;

        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(innerHtml) { if (this.dom) this.dom.disabled = innerHtml; }
        });

        this.dom.addEventListener('pointerdown', () => {
            // Hide Tooltip
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        }, false);
    }

    /** Attaches a PopUp menu to Button */
    attachMenu(osuiMenu) {
        const self = this;

        ///// Verify element is a .Menu, apply MenuButton class, store for later
        if (osuiMenu.hasClass('Menu') === false) return this;
        this.addClass('MenuButton');
        this.attachedMenu = osuiMenu;

        ///// Add menu to document, add event handler
        document.body.appendChild(osuiMenu.dom);
        this.dom.addEventListener('pointerdown', onPointerDown, false);

        ////////////////////
        /////	DOM Watcher, more info: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
        ////////////////////
        //
        // const observer = new MutationObserver((mutations, observer) => {
        // 	mutations.forEach((mutation) => {
        //         if (mutation.type === 'childList') {
        // 			console.info('A child node has been added or removed.');
        // 			console.info(mutation.addedNodes);
        // 		} else if (mutation.type === 'attributes') {
        // 			console.info('The ' + mutation.attributeName + ' attribute was modified.');
        // 		}
        // 	});
        // });
        //

        ///// Mutation Callback
        // Calls popMenu when button is initially added to the DOM. This is done to decide initial
        // (over / under) popper placement, then the observer is removed.
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });

        // Start mutation observer
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });

        ///// Handle document resize / positioning
        window.addEventListener('resize', popMenu, false);

        ///// Pop this menu (calculate proper positioning)
        function popMenu() {
            const popped = Popper.popUnder(
                osuiMenu.dom,
                self.dom,
                self.alignMenu,
                self.menuOffsetX,
                self.menuOffsetY,
                self.overflowMenu
            );
            if (popped === Popper.POSITION.UNDER) {
                osuiMenu.removeClass('SlideUp');
                osuiMenu.addClass('SlideDown');
            } else {
                osuiMenu.removeClass('SlideDown');
                osuiMenu.addClass('SlideUp');
            }
        }

        ///// Handle button click
        function onPointerDown(event) {
            if (self.hasClass('Selected') === false) {
                self.addClass('Selected');

                // Update position
                popMenu();

                // Apply class to show menu, CSS will handle the transition
                if (self.dom) osuiMenu.showMenu(self.dom);
            }
        };

        /** Removes attached menu */
        this.detachMenu = function() {
            if (self.hasClass('MenuButton') === false) return;
            self.removeClass('MenuButton');
            window.removeEventListener('resize', popMenu, false);
            self.dom.removeEventListener('pointerdown', onPointerDown, false);
            self.attachedMenu.clear();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        }
    }

    dispose() {
        if (this.attachedMenu) {
            this.detachMenu();
        }
    }

}

export { Button };
