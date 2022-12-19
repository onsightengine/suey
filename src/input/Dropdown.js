/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/onui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Button } from './Button.js';
import { Menu } from '../menu/Menu.js';
import { MenuItem } from '../menu/MenuItem.js';

class Dropdown extends Button {

    constructor(innerHtml) {
        innerHtml = innerHtml ?? '&nbsp';

        super(innerHtml);
        const self = this;

        this.items = [];
        this.value = undefined;

        this.menuOffsetX = 0;
        this.menuOffsetY = 5;

        this.addClass('Dropdown');
        this.addClass('DropArrow');

        ///// Events

        function onWheel(event) {
            event.preventDefault();
            let upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;

            let currentValue = self.getValue();
            if (currentValue === undefined || currentValue === null) return;
            let currentSelectedItem = self.getItemByKey(currentValue);
            if (! currentSelectedItem) return;
            let currentIndex = self.items.indexOf(currentSelectedItem);
            if (currentIndex === -1) return;

            // Scroll Up
            if (event.deltaY < 0) {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    self.setValue(self.items[currentIndex].value);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }

            // Scroll Down
            } else {
                if (currentIndex < (self.items.length - 1)) {
                    currentIndex += 1;
                    self.setValue(self.items[currentIndex].value);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            }
        }

        this.dom.addEventListener('wheel', onWheel, false);
    }

    /** Get sub menu item by key value */
    getItemByKey(key) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === key) return this.items[i];
        }
        return undefined;
    }

    /** Returns value (key) */
    getValue() {
        return this.value;
    }

    /** Sets value (by key) */
    setValue(value) {
        value = String(value);
        if (this.value !== value) {
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.value === value) {
                    // Check proper item
                    for (let i = 0; i < this.items.length; i++) {
                        this.items[i].setChecked(false);
                    }
                    item.setChecked(true);

                    // Set value and text
                    this.value = value;
                    if (this.dom) this.dom.innerHTML = item.dom.innerText;
                    return this;
                }
            }
        }
        return this;
    }

    /** Build sub menu from option list */
    setOptions(options) {
        if (this.detachMenu) this.detachMenu();
        this.items.length = 0;

        // Add sub items for 'options'
        for (const key in options) {
            let item = new MenuItem(options[key]);
            item.value = key;
            this.items.push(item);

            const self = this;
            item.onPointerDown(function() {
                self.setValue(item.value);
                if (self.dom) self.dom.dispatchEvent(new Event('change'));
            });
        }

        // Build menu
        let menu = new Menu();
        for (let i = 0; i < this.items.length; i++) {
            menu.add(this.items[i]);
        }

        // Attach menu to button
        this.attachMenu(menu);
        menu.addClass('SelectMenu');
    }

}

export { Dropdown };
