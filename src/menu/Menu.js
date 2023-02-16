import { Div } from '../core/Div.js';
import { Css } from '../utils/Css.js';
import { Utils } from '../utils/Utils.js';

const TRIANGLE_SIZE = 3.0;                  // Bigger value is smaller triangle (size = width / TRIANGLE_SIZE)

class Menu extends Div {

    constructor() {
        super();
        this.setClass('Menu');

        // Mouse Area
        this.mouseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.mouseSvg.setAttribute('class', 'MenuMouseTriangle');
        // this.mouseSvg.setAttribute('style', 'border: 1px solid black');      // NOTE: Un-comment to see container
        this.mouseSvg.setAttribute('pointer-events', 'none');
        this.mouseSvg.setAttribute('version', '1.1');

        this.mouseArea = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        this.mouseArea.setAttribute('fill', 'aqua');
        this.mouseArea.setAttribute('opacity', '0.0');                          // NOTE: Comment out to see triangle
        this.mouseArea.setAttribute('pointer-events', 'fill');
        this.mouseSvg.appendChild(this.mouseArea);

    }

    /** Is Shown? */
    isShown() {
        return this.hasClass('MenuShow');
    }

    /******************** SHOW MENU ********************/

    /** Shows Menu, adds Menu Closer listenser to base menu */
    showMenu(parentDom) {
        const self = this;

        // Show Menu
        this.addClass('MenuShow');

        // Makes sure any click after click that opened menu will close menu
        this.clickCount = 0;

        // Attach mouse area polygon if this menu is a child of another menu
        if (Utils.isChildOfElementWithClass(this.dom, 'Menu')) {
            // Turn off mouse events temporarily while when give menu time to animate
            this.mouseArea.setAttribute('pointer-events', 'none');

            // Make sure svg has been added to this sub menu
            this.contents().dom.appendChild(this.mouseSvg);

            // Update svg size when animation is complete
            let timeFloat = parseFloat(Css.getVariable('--menu-timing')) * 1000.0
            setTimeout(() => { this.updateMouseArea(); }, timeFloat);
        }

        // Close Menu
        this.closeMenu = function(applyToSelf = true, dontCloseChildrenOf = undefined) {

            // Close children menus and attached sub menus
            this.traverse((child) => {
                // Don't close menus that are children of 'dontCloseChildrenOf'
                if (dontCloseChildrenOf && Utils.isChildOf(child.dom, dontCloseChildrenOf)) {
                    // Empty
                } else {
                    child.removeClass('MenuShow', 'Selected');
                    if (child.attachedMenu && child.attachedMenu.closeMenu) child.attachedMenu.closeMenu(true);
                    if (child.dom && child.dom.blur) child.dom.blur();
                }
            }, applyToSelf);

            // Close self
            if (applyToSelf) {
                // Un-select button that spawned menu
                let parent = parentDom;
                while (parent) {
                    if (parentDom.classList.contains('MenuButton')) {
                        parent.classList.remove('Selected');
                        parent = undefined;
                    } else {
                        parent = parent.parentElement;
                    }
                }

                // Remove event listeners
                if (parentDom.classList.contains('MenuButton')) {
                    document.removeEventListener('pointerdown', onPointerDown);
                    document.removeEventListener('keydown', onKeyDown);
                }
            }
        }

        // If base / parent menu, add document event handler
        if (parentDom.classList.contains('MenuButton')) {
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
        }

        // Mouse Down, closes menu on 'document' click
        function onPointerDown(event) {
            let menuShouldClose = true;

            // Handle menu item click
            if (self.dom.contains(event.target)) {
                let node = event.target;
                let list = node.classList;
                while (node.parentElement && list.contains('Menu') === false && list.contains('MenuItem') === false) {
                    node = node.parentElement;
                    list = node.classList;
                }

                // Don't close if clicked on a sub menu item (element that has both 'Menu' and 'SubMenuItem' classes)
                if ((list.contains('MenuItem') && list.contains('SubMenuItem')) || list.contains('KeepOpen')) {
                    menuShouldClose = false;

                    // If did not click an input (Number, Text, etc), stop focus from changing away
                    // from parent MenuButton owner
                    if (event.target && event.target.tagName.toLowerCase() !== 'input') {
                        event.preventDefault();
                    }
                }
            }

            // Don't close on first click (first click is what opened it)
            if (menuShouldClose) self.clickCount++;
            if (self.clickCount === 1) menuShouldClose = false;

            // Close menu
            if (menuShouldClose) {
                self.closeMenu();
                if (window.signals) signals.guiLostFocus.dispatch();
            }
        }

        // Key Down, watch for 'Escape'
        function onKeyDown(event) {
            switch (event.code) {
                case 'Escape': self.closeMenu(); break;
            }
        }

        return this;
    }

    /******************** MOUSE POLYGON ********************/

    /** Updates mouse polygon svg points */
    updateMouseArea() {
        let parentRect = this.dom.parentElement.getBoundingClientRect();
        let myRect = this.dom.getBoundingClientRect();
        let middle = (parentRect.top - myRect.top) + (parentRect.height / 2);
        let middle1 = middle - (parentRect.height / 2);
        let middle2 = middle + (parentRect.height / 2);

        let leftSide = (parentRect.width / TRIANGLE_SIZE);
        let topSides = 10;

        this.mouseSvg.style['left'] = `-${leftSide}px`;
        this.mouseSvg.style['top'] = `-${topSides}px`;
        this.mouseSvg.setAttribute('width', `${this.getWidth() + leftSide}px`);
        this.mouseSvg.setAttribute('height', `${this.getHeight() + topSides*2}px`);

        let point1 = `${leftSide},0`;
        let point2 = `0,${topSides + middle1}`;
        let point3 = `0,${topSides + middle2}`;
        let point4 = `${leftSide},${this.getHeight() + topSides*2}`;
        this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4}`);
        this.mouseArea.setAttribute('pointer-events', 'fill');
        return this;
    }

}

export { Menu };
