import { Div } from '../core/Div.js';
import { MenuShortcut } from './MenuShortcut.js';
import { Row } from '../layout/Row.js';
import { VectorBox } from '../layout/VectorBox.js';

import { IMAGE_CHECK, IMAGE_EMPTY } from '../constants.js';

/** Menu item, hook into 'click' event (dispatched by OSUI.Menu) to process menu item user interaction */
class MenuItem extends Div {

    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        const self = this;
        this.setClass('osui-menu-item');
        this.setName(text);

        // Build
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('osui-menu-icon');
        this.divText = new Div().setClass('osui-menu-text');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.row = new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut);
        this.add(this.row);

        // Properties
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;

        // Disable Context Menu
        function onContextMenu(event) {
            event.preventDefault();
        }

        function hideSubMenus(dontCloseChildrenOf = undefined) {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('osui-menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && typeof parentMenu.closeMenu === 'function') {
                parentMenu.closeMenu(false, dontCloseChildrenOf);
            }
        }

        /** Mouse enter (hide all sub menus, show this sub menu) */
        function onPointerEnter() {
            // // Don't process menu items that don't have sub menus
            // if (!self.subMenu) return;

            // Hide Tooltip
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('osui-menu') === false)) parentMenu = parentMenu.parent;
            if (!parentMenu.hasClass('osui-invisible-menu')) {
                const hideEvent = new Event('hidetooltip', { bubbles: true });
                self.dom.dispatchEvent(hideEvent);
            }

            // Have parent menu hide all other children menus
            hideSubMenus(self.dom);

            // Show our sub menu
            if (self.subMenu) self.subMenu.showMenu(self.dom);
        }

        /** Mouse leave (hide all sub menus) */
        function onPointerLeave() {
            // Have parent menu hide all other children menus
            hideSubMenus();
        }

        let pointerDown = false;
        function onPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.dispatchEvent(new Event('select'));
            pointerDown = true;
        }

        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            if (pointerDown !== true) {
                self.dom.dispatchEvent(new Event('select'));
            }
            pointerDown = false;
        }

        this.dom.addEventListener('contextmenu', onContextMenu);
        this.dom.addEventListener('pointerenter', onPointerEnter);
        this.dom.addEventListener('pointerleave', onPointerLeave);
        this.dom.addEventListener('pointerdown', onPointerDown);
        this.dom.addEventListener('pointerup', onPointerUp);

        this.dom.addEventListener('destroy', () => {
            self.dom.removeEventListener('contextmenu', onContextMenu);
            self.dom.removeEventListener('pointerenter', onPointerEnter);
            self.dom.removeEventListener('pointerleave', onPointerLeave);
            self.dom.removeEventListener('pointerdown', onPointerDown);
            self.dom.removeEventListener('pointerup', onPointerUp);
        }, { once: true });

        // Text, Unselectable
        this.setText(text);
        this.selectable(false);
    }

    /******************** EVENT OVERRIDES ********************/

    onPointerDown(callback) {
        console.trace(`MenuItem.onPointerDown() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }

    onPointerUp(callback) {
        console.trace(`MenuItem.onPointerUp() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }

    onClick(callback) {
        console.trace(`MenuItem.onClick() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }

    onDblClick(callback) {
        console.trace(`MenuItem.onDblClick() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }

    onSelect(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('osui-disabled')) {
                callback(event);
                if (!self.hasClass('osui-keep-open')) {
                    document.dispatchEvent(new Event('closemenu'));
                }
            }
        }
        const dom = self.dom;
        dom.addEventListener('select', eventHandler);
        dom.addEventListener('destroy', () => { dom.removeEventListener('select', eventHandler); }, { once: true });
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
        this.addClass('osui-keep-open');
        return this;
    }

    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        if (checked) this.divIcon.addClass('osui-icon-colorize');
        else this.divIcon.removeClass('osui-icon-colorize');
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }

    setDisabled(disabled) {
        if (disabled) this.addClass('osui-disabled');
        else this.removeClass('osui-disabled');
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
    attachSubMenu(osuiMenu) {
        // Verify element is a 'osui-menu'
        if (osuiMenu.hasClass('osui-menu') === false) return this;

        // Add Animation
        osuiMenu.addClass('osui-slide-down');

        // Remove any existing sub menu, add new sub menu
        this.removeSubMenu();
        this.addClass('osui-sub-menu-item');
        this.add(osuiMenu);
        this.subMenu = osuiMenu;
        return this;
    }

    hasSubMenu() {
        return this.hasClass('osui-sub-menu-item');
    }

    /** Remove any attached sub menu, returns OSUI.Menu that was attached */
    removeSubMenu() {
        this.removeClass('osui-sub-menu-item');
        const osuiMenu = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('osui-menu')) this.remove(child);
        }
        return osuiMenu;
    }

}

export { MenuItem };
