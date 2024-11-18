import { Button } from './Button.js';
import { Menu } from '../menu/Menu.js';
import { MenuItem } from '../menu/MenuItem.js';

class Dropdown extends Button {

    constructor(buttonText) {
        super(buttonText);
        const self = this;

        this.items = [];
        this.currentIndex = -1;
        this.value = undefined;

        this.menuOffsetX = 0;
        this.menuOffsetY = 5;

        this.addClass('suey-dropdown');
        this.addClass('suey-drop-arrow');

        // EVENTS
        function dropWheel(event) {
            event.stopPropagation();
            event.preventDefault();

            // Scroll Up
            if (event.deltaY < 0) {
                if (self.currentIndex > 0) {
                    self.setIndex(self.currentIndex - 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            // Scroll Down
            } else {
                if (self.currentIndex < (self.items.length - 1)) {
                    self.setIndex(self.currentIndex + 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            }
        }

        // Add Listeners
        this.on('wheel', dropWheel);
    }

    /** Get sub menu item by key value */
    getItemByKey(key) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === key) return this.items[i];
        }
        return undefined;
    }

    /** Returns current index */
    getIndex() {
        return this.currentIndex;
    }

    /** Returns value (key) */
    getValue() {
        return this.value;
    }

    /** Sets option by index */
    setIndex(index = 0) {
        if (index < 0 || index >= this.items.length || index === this.currentIndex) return;
        const item = this.items[index];

        // Check selected item
        for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
        item.setChecked(true);

        this.currentIndex = index;
        this.value = item.value;
        if (this.dom) this.dom.textContent = item.dom.textContent;
        return this;
    }

    /** Sets value (by key) */
    setValue(value) {
        value = String(value);
        if (this.value !== value) {
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                if (item.value === value) {
                    // Check selected item
                    for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
                    item.setChecked(true);

                    // Set value and text
                    this.currentIndex = i;
                    this.value = value;
                    if (this.dom) this.dom.textContent = item.dom.textContent;
                    return this;
                }
            }
        }
        return this;
    }

    /** Build sub menu from option list */
    setOptions(options, uniformCapitalize = false) {
        const self = this;

        if (this.detachMenu) this.detachMenu();
        this.items.length = 0;

        // Add sub items for 'options'
        for (const key in options) {
            function capitalizeWords(input) {
                return input
                    .split(/[\s_]+/)                                                            // split on spaces or underscores
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())    // capitalize first letter
                    .join(' ');                                                                 // join back with a space
            }
            const itemTitle = uniformCapitalize ? capitalizeWords(options[key]) : options[key];
            const item = new MenuItem(itemTitle);
            item.value = key;
            item.onSelect(() => {
                self.setValue(item.value);
                if (self.dom) self.dom.dispatchEvent(new Event('change'));
            });
            this.items.push(item);
        }

        // Build menu
        const menu = new Menu();
        for (let i = 0; i < this.items.length; i++) {
            menu.add(this.items[i]);
        }

        // Attach menu to button
        this.attachMenu(menu);
        menu.addClass('suey-select-menu');

        return this;
    }

}

export { Dropdown };
