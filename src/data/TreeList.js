import { Div } from '../core/Div.js';
import { Utils } from '../utils/Utils.js';

class TreeList extends Div {

    #shiftAdd = 0;                          // tracks up / down keys while shift is pressed
    #shiftTrack = [];                       // tracks selected values when shift key is starting to be held
    #dragImage = null;                      // drag ghost image

    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('TreeList');

        // Enable user focus (keyup event doesn't work without setting tabIndex)
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#using_tabindex
        this.dom.setAttribute('tabindex', '0');

        // Properties
        this.multiSelect = multiSelect;     // multi-select allowed?
        this.options = [];                  // list item divs
        this.selectedValue = null;          // for single select mode
        this.selectedValues = [];           // for multi select mode

        // Key Events - arrow navigation, prevents native scroll behavior
        function onKeyDown(event) {
            // Single Select Keypress
            if (!self.multiSelect) {
                if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.code === 'ArrowUp') index--;
                    if (event.code === 'ArrowDown') index++;
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
                if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
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
                        if (event.code === 'ArrowUp' && index + self.#shiftAdd > 0) self.#shiftAdd--;
                        if (event.code === 'ArrowDown' && index + self.#shiftAdd < self.options.length - 1) self.#shiftAdd++;
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
                        if (event.code === 'ArrowUp') index--;
                        if (event.code === 'ArrowDown') index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }
        function onKeyUp(event) {
            switch (event.code) {
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
            this.options[i].classList.remove('Active');
        }

        // Select
        for (let i = 0; i < this.options.length; i++) {
            const element = this.options[i];
            if (element.value == value) {
                element.classList.add('Active');
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
            this.options[i].classList.remove('Active');
            this.options[i].classList.remove('ActiveTop');
            this.options[i].classList.remove('ActiveBottom');
        }

        // Select
        for (let v = 0; v < valueArray.length; v++) {
            const value = valueArray[v];

            for (let i = 0; i < this.options.length; i++) {
                const element = this.options[i];
                if (element.value == value) {
                    element.classList.add('Active');
                    lastElement = element;
                }
            }
        }

        // Multi Line Coloring
        for (let i = 0; i < this.options.length - 1; i++) {
            const element = this.options[i];
            const elementAfter = this.options[i + 1];

            if (element.classList.contains('Active') && elementAfter.classList.contains('Active')) {
                element.classList.add('ActiveTop');
                elementAfter.classList.add('ActiveBottom');
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
                let values = [...self.selectedValues];
                // Control / Command
                if (event.altKey || event.ctrlKey || event.metaKey) {
                    if (values.includes(this.value)) {
                        const index = values.indexOf(this.value);
                        values.splice(index, 1);
                    } else {
                        values.push(this.value);
                    }
                    self.setValues(values);
                // Shift Key
                } else if (event.shiftKey && values.length > 0) {
                    // Initial Shift Key Values
                    if (self.#shiftTrack.length === 0) self.#shiftTrack = [...self.selectedValues];
                    values = [...self.#shiftTrack];
                    // Find Indices
                    const index1 = self.getIndex(values[values.length - 1]);
                    const index2 = self.getIndex(this.value);
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
                    self.#shiftAdd = index2 - index1;
                    self.setValues(values);
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
                self.#dragImage.classList.add('TreeList');
                self.#dragImage.classList.add('TreeDragImage');
                self.#dragImage.style['width'] = `${width}px`;
                self.#dragImage.style['height'] = `${height}px`;
                self.#dragImage.style['top'] = `${height * -2}px`;
                // Clone Options
                for (let i = 0; i < self.selectedValues.length; i++) {
                    const value = self.selectedValues[i];
                    const option = self.getOption(value);
                    const optionClone = option.cloneNode(true /* include children */);
                    optionClone.classList.add('ActiveTop');
                    optionClone.classList.add('ActiveBottom');
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
            if (this.noDropAllowed) {
                this.classList.remove('Drag');
                if (area < 0.5) {
                    this.classList.add('DragTop');
                    this.classList.remove('DragBottom');
                } else {
                    this.classList.add('DragBottom');
                    this.classList.remove('DragTop');
                }
            } else {
                if (area < 0.25) {
                    this.classList.add('DragTop');
                    this.classList.remove('Drag');
                    this.classList.remove('DragBottom');
                } else if (area < 0.75) {
                    this.classList.add('Drag');
                    this.classList.remove('DragTop');
                    this.classList.remove('DragBottom');
                } else {
                    this.classList.add('DragBottom');
                    this.classList.remove('Drag');
                    this.classList.remove('DragTop');
                }
            }
        }

        function onDragLeave() {
            if (!currentDrag || this === currentDrag) return;
            this.classList.remove('Drag');
            this.classList.remove('DragTop');
            this.classList.remove('DragBottom');
        }

        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!currentDrag || this === currentDrag) return;
            this.classList.remove('Drag');
            this.classList.remove('DragTop');
            this.classList.remove('DragBottom');

            // Dropped Data
            const data = event.dataTransfer.getData('text/plain');
            const values = data.split(',');
            for (let v in values) values[v] = parseInt(values[v]);

            // Let derived class handle 'drop' event
            if (typeof self.onDrop === 'function') {
                self.onDrop(event, this, values);
            }

            // Reset 'currentDrag'
            currentDrag = undefined;
        }

        // Events
        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.className = 'Option';
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
