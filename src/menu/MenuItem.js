import {
    IMAGE_CHECK,
    IMAGE_EMPTY,
} from '../constants.js';
import { Div } from '../core/Div.js';
import { MenuShortcut } from './MenuShortcut.js';
import { Row } from '../layout/Row.js';
import { VectorBox } from '../layout/VectorBox.js';

/** Menu item, hook into 'click' event (dispatched by SUEY.Menu) to process menu item user interaction */
class MenuItem extends Div {

    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        const self = this;
        this.setClass('suey-menu-item');
        this.name = text;

        // Build
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('suey-menu-icon');
        this.divText = new Div().setClass('suey-menu-text');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.row = new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut);
        this.add(this.row);

        // Properties
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;

        // Disable Context Menu
        function menuContextMenu(event) {
            event.preventDefault();
        }

        function hideSubMenus(dontCloseChildrenOf = undefined) {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('suey-menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && typeof parentMenu.closeMenu === 'function') {
                parentMenu.closeMenu(false, dontCloseChildrenOf);
            }
        }

        /** Mouse enter (hide all sub menus, show this sub menu) */
        function menuPointerEnter() {
            // // Don't process menu items that don't have sub menus
            // if (!self.subMenu) return;

            // Hide Tooltip
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('suey-menu') === false)) parentMenu = parentMenu.parent;
            if (!parentMenu.hasClass('suey-invisible-menu')) {
                const hideEvent = new Event('hidetooltip', { bubbles: true });
                self.dom.dispatchEvent(hideEvent);
            }

            // Have parent menu hide all other children menus
            hideSubMenus(self.dom);

            // Show our sub menu
            if (self.subMenu) self.subMenu.showMenu(self.dom);
        }

        /** Mouse leave (hide all sub menus) */
        function menuPointerLeave() {
            // Have parent menu hide all other children menus
            hideSubMenus();
        }

        let pointerDown = false;
        function menuPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.dispatchEvent(new Event('select'));
            pointerDown = true;
        }

        function menuPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            if (pointerDown !== true) {
                self.dom.dispatchEvent(new Event('select'));
            }
            pointerDown = false;
        }

        this.on('contextmenu', menuContextMenu);
        this.on('pointerenter', menuPointerEnter);
        this.on('pointerleave', menuPointerLeave);
        this.on('pointerdown', menuPointerDown);
        this.on('pointerup', menuPointerUp);

        // Text, Unselectable
        this.setText(text);
        this.selectable(false);
    }

    /******************** EVENTS ********************/

    /** Override to alert about special event handler */
    on(event, callback, once = false) {
        if (event === 'click' || event === 'select') {
            console.warn('MenuItem.on: Click event for this Element is meant to be used with onSelect()');
        }
        super.on(event, callback, once);
        return this;
    }

    /** Special event handler for MenuItem */
    onSelect(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (!self.hasClass('suey-keep-open')) {
                    document.dispatchEvent(new Event('closemenu'));
                }
            }
        };
        super.on('click', eventHandler);
        return self;
    }

    /******************** METHODS ********************/

    isChecked() {
        return this.checked;
    }

    isDisabled() {
        return this.disabled;
    }

    keepOpen() {
        this.addClass('suey-keep-open');
        return this;
    }

    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        this.divIcon.wantsClass('suey-icon-colorize', checked);
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }

    setDisabled(disabled) {
        this.wantsClass('suey-disabled', disabled);
        this.disabled = disabled;
        return this;
    }

    setImage(imageUrl) {
        this.divIcon.setImage(imageUrl);
        return this;
    }

    setText(text) {
        this.divText.dom.textContent = text ?? ' ';
        return this;
    }

    /******************** SUB MENU ********************/

    /** Attaches a sub menu, first removes any previously attached sub menu */
    attachSubMenu(menuElement) {
        // Verify element is a 'suey-menu'
        if (menuElement.hasClass('suey-menu') === false) return this;

        // Add Animation
        menuElement.addClass('suey-slide-down');

        // Remove any existing sub menu, add new sub menu
        this.removeSubMenu();
        this.addClass('suey-sub-menu-item');
        this.add(menuElement);
        this.subMenu = menuElement;
        return this;
    }

    hasSubMenu() {
        return this.hasClass('suey-sub-menu-item');
    }

    /** Remove any attached sub menu, returns SUEY.Menu that was attached */
    removeSubMenu() {
        this.removeClass('suey-sub-menu-item');
        const menuElement = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('suey-menu')) this.remove(child);
        }
        return menuElement;
    }

}

export { MenuItem };
