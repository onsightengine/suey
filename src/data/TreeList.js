import { Div } from '../core/Div.js';
import { Utils } from '../utils/Utils.js';

class TreeList extends Div {

    #shiftAdd = 0;                          // tracks up / down keys while shift is pressed
    #shiftTrack = [];                       // tracks selected values when shift key is starting to be held
    #dragImage = null;                      // drag ghost image

    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('osui-tree-list');
        this.allowFocus();

        // Properties
        this.multiSelect = multiSelect;     // multi-select allowed?
        this.options = [];                  // list item divs
        this.selectedValue = null;          // for single select mode
        this.selectedValues = [];           // for multi select mode

        // Key Events - arrow navigation, prevents native scroll behavior
        function onKeyDown(event) {
            // Single Select Keypress
            if (!self.multiSelect) {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.key === 'ArrowUp') index--;
                    if (event.key === 'ArrowDown') index++;
                    if (index >= 0 && index < self.options.length) {
                        self.setValue(self.options[index].value, true);
                        self.dom.dispatchEvent(new Event('change'));
                    }
                }
            // Multi-Select Keypress
            } else {
                // Reset shift tracking values on no shift key
                if (!event.shiftKey) {
                    self.#shiftAdd = 0;
                    self.#shiftTrack = [];
                }
                // Process Key Codes
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let values = [...self.selectedValues];
                    // Shift Key
                    if (event.shiftKey) {
                        // Initial Shift Key Values
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...values];
                        values = [...self.#shiftTrack];
                        // Find Values
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.key === 'ArrowUp' && index + self.#shiftAdd > 0) self.#shiftAdd--;
                        if (event.key === 'ArrowDown' && index + self.#shiftAdd < self.options.length - 1) self.#shiftAdd++;
                        index += self.#shiftAdd;
                        if (index < 0 || index > self.options.length - 1) return;
                        // Find Indices
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = index;
                        // Select all items between last selected and newly selected
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        }
                        self.setValues(values, true);
                        self.dom.dispatchEvent(new Event('change'));
                    // No Shift Key
                    } else if (values.length > 0) {
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.key === 'ArrowUp') index--;
                        if (event.key === 'ArrowDown') index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }
        function onKeyUp(event) {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
                    event.stopPropagation();
                    if (!event.shiftKey) {
                        self.#shiftAdd = 0;
                        self.#shiftTrack = [];
                    }
                    break;
            }
        }
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
    }

    /******************** LOOKUP ********************/

    getIndex(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value == value) return i;
        }
        return -1;
    }

    getOption(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value == value) return this.options[i];
        }
        return undefined;
    }

    /******************** SELECT - SINGLE ********************/

    getValue() {
        return this.selectedValue;
    }

    setValue(value, scrollTo = false) {
        let lastElement = undefined;

        // Deselect
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('osui-active');
        }

        // Select
        for (let i = 0; i < this.options.length; i++) {
            const element = this.options[i];
            if (element.value == value) {
                element.classList.add('osui-active');
                lastElement = element;
            }
        }

        // Scroll Into View
        if (lastElement && scrollTo) setTimeout(() => Utils.scrollIntoView(lastElement), 0);

        // Set Value, Return
        this.selectedValue = value;
        return this;
    }

    /******************** SELECT - MULTI ********************/

    getValues() {
        return this.selectedValues;
    }

    setValues(valueArray, scrollTo = false) {
        let lastElement = undefined;

        // Deselect
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('osui-active');
            this.options[i].classList.remove('osui-active-top');
            this.options[i].classList.remove('osui-active-bottom');
        }

        // Select
        for (let v = 0; v < valueArray.length; v++) {
            const value = valueArray[v];

            for (let i = 0; i < this.options.length; i++) {
                const element = this.options[i];
                if (element.value == value) {
                    element.classList.add('osui-active');
                    lastElement = element;
                }
            }
        }

        // Multi Line Coloring
        for (let i = 0; i < this.options.length - 1; i++) {
            const element = this.options[i];
            const elementAfter = this.options[i + 1];

            if (element.classList.contains('osui-active') && elementAfter.classList.contains('osui-active')) {
                element.classList.add('osui-active-top');
                elementAfter.classList.add('osui-active-bottom');
            }
        }

        // Scroll Into View
        if (lastElement && scrollTo) setTimeout(() => Utils.scrollIntoView(lastElement), 0);

        // Set Values, Return
        this.selectedValues = [...valueArray];
        return this;
    }

    /******************** BUILD FROM OPTION (div) LIST ********************/

    setOptions(options) {
        const self = this;

        // Clear Existing Options
        this.clearContents();

        // Click
        function onPointerDown(event) {
            // Reset shift tracking values when no shift key
            if (!event.shiftKey) {
                self.#shiftAdd = 0;
                self.#shiftTrack = [];
            }
            // Multi-Select
            if (self.multiSelect) {
                let multiAllowed = false;
                multiAllowed = multiAllowed || !this.singleSelect;
                multiAllowed = multiAllowed || self.selectedValues.length < 1;
                if (self.selectedValues.length === 1) {
                    const option = self.getOption(self.selectedValues[0]);
                    if (option && option.singleSelect === true) multiAllowed = false;
                }
                let values = [...self.selectedValues];
                // Control / Command
                if (event.altKey || event.ctrlKey || event.metaKey) {
                    if (values.includes(this.value)) {
                        const index = values.indexOf(this.value);
                        values.splice(index, 1);
                    } else {
                        if (multiAllowed) values.push(this.value);
                    }
                    self.setValues(values);
                // Shift Key
                } else if (event.shiftKey && values.length > 0) {
                    if (multiAllowed) {
                        // Initial Shift Key Values
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...self.selectedValues];
                        values = [...self.#shiftTrack];
                        // Find Indices
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = self.getIndex(this.value);
                        // Select all items between last selected and newly selected
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                if (self.options[i].singleSelect) continue;
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                if (self.options[i].singleSelect) continue;
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        }
                        self.#shiftAdd = index2 - index1;
                        self.setValues(values);
                    }
                // No Key
                } else {
                    if (!values.includes(this.value)) {
                        self.setValues([ this.value ]);
                    }
                }
            // Single Select
            } else {
                self.setValue(this.value);
            }
            // Pointer Up Event
            this.addEventListener('pointerup', onPointerUp);
            // Dispatch 'change' Event
            self.dom.dispatchEvent(new Event('change'));
        }
        function onPointerUp(event) {
            // Multi-Select
            if (self.multiSelect) {
                if (! (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)) {
                    self.setValues([ this.value ]);
                }
            }
            this.removeEventListener('pointerup', onPointerUp);
        }

        // Drag & Drop
        let currentDrag = undefined;
        function onDrag() {
            currentDrag = this;
        }

        function onDragStart(event) {
            // Multi-Select
            if (self.multiSelect) {
                const divRect = this.getBoundingClientRect();
                const width = divRect.width;
                const height = divRect.height * self.selectedValues.length;
                // Div Container
                self.#dragImage = document.createElement('div');
                self.#dragImage.classList.add('osui-tree-list');
                self.#dragImage.classList.add('osui-drag-image');
                self.#dragImage.style['width'] = `${width}px`;
                self.#dragImage.style['height'] = `${height}px`;
                self.#dragImage.style['top'] = `${height * -2}px`;
                // Clone Options
                for (let i = 0; i < self.selectedValues.length; i++) {
                    const value = self.selectedValues[i];
                    const option = self.getOption(value);
                    const optionClone = option.cloneNode(true /* include children */);
                    optionClone.classList.add('osui-active-top');
                    optionClone.classList.add('osui-active-bottom');
                    self.#dragImage.appendChild(optionClone);
                }
                // Set Drag Image
                document.body.appendChild(self.#dragImage);
                event.dataTransfer.setDragImage(self.#dragImage, 0, 0);
                event.dataTransfer.setData('text/plain', self.selectedValues);
            // Single Select
            } else {
                event.dataTransfer.setData('text/plain', self.selectedValue);
            }
        }

        function onDragEnd(event) {
            if (self.#dragImage instanceof HTMLElement) {
                document.body.removeChild(self.#dragImage);
                self.#dragImage = null;
            }
        }

        function onDragOver(event) {
            if (!currentDrag || this === currentDrag) return;
            const area = event.offsetY / this.clientHeight;
            if (this.dropGroup !== currentDrag.dropGroup) {
                this.classList.remove('osui-drag');
                this.classList.remove('osui-drag-top');
                this.classList.remove('osui-drag-bottom');
            } else if (this.noDirectDrop) {
                this.classList.remove('osui-drag');
                if (area < 0.5) {
                    this.classList.add('osui-drag-top');
                    this.classList.remove('osui-drag-bottom');
                } else {
                    this.classList.add('osui-drag-bottom');
                    this.classList.remove('osui-drag-top');
                }
            } else {
                if (area < 0.25) {
                    this.classList.add('osui-drag-top');
                    this.classList.remove('osui-drag');
                    this.classList.remove('osui-drag-bottom');
                } else if (area < 0.75) {
                    this.classList.add('osui-drag');
                    this.classList.remove('osui-drag-top');
                    this.classList.remove('osui-drag-bottom');
                } else {
                    this.classList.add('osui-drag-bottom');
                    this.classList.remove('osui-drag');
                    this.classList.remove('osui-drag-top');
                }
            }
        }

        function onDragLeave() {
            if (!currentDrag || this === currentDrag) return;
            this.classList.remove('osui-drag');
            this.classList.remove('osui-drag-top');
            this.classList.remove('osui-drag-bottom');
        }

        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            this.classList.remove('osui-drag');
            this.classList.remove('osui-drag-top');
            this.classList.remove('osui-drag-bottom');
            if (currentDrag && this !== currentDrag && this.dropGroup === currentDrag.dropGroup) {
                // Dropped Data
                const data = event.dataTransfer.getData('text/plain');
                const values = data.split(',');

                // Let derived class handle 'drop' event
                if (typeof self.onDrop === 'function') {
                    self.onDrop(event, this, values);
                }
            }

            // Reset 'currentDrag'
            currentDrag = undefined;
        }

        // Events
        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.classList.add('osui-option');
            self.dom.appendChild(div);
            self.options.push(div);
            div.addEventListener('pointerdown', onPointerDown);
            div.addEventListener('destroy', () => div.removeEventListener('pointerdown', onPointerDown), { once: true });
            if (div.draggable) {
                div.addEventListener('drag', onDrag);
                div.addEventListener('dragstart', onDragStart);
                div.addEventListener('dragend', onDragEnd);
                div.addEventListener('dragover', onDragOver);
                div.addEventListener('dragleave', onDragLeave);
                div.addEventListener('drop', onDrop);
                div.addEventListener('destroy', () => {
                    div.removeEventListener('drag', onDrag);
                    div.removeEventListener('dragstart', onDragStart);
                    div.removeEventListener('dragend', onDragEnd);
                    div.removeEventListener('dragover', onDragOver);
                    div.removeEventListener('dragleave', onDragLeave);
                    div.removeEventListener('drop', onDrop);
                }, { once: true });
            }
        }

        return this;
    } // end setOptions()

}

export { TreeList };
