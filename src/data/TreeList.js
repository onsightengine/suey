import { Div } from '../core/Div.js';
import { Css } from '../utils/Css.js';
import { Html } from '../utils/Html.js';

class TreeList extends Div {

    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('TreeList');

        // Settings
        this.dom.tabIndex = 0; /* enable user focus (keyup event doesn't work without setting tabIndex) */

        // Properties
        this.multiSelect = multiSelect;

        ///// Events

        /** Handle key down, handles arrow navigation, also prevents native scroll behavior */
        function onKeyDown(event) {

            // Single Select Keypress
            if (! self.multiSelect) {
                if (event.keyCode === 38 || event.keyCode === 40) {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.keyCode === 38 /* up   */) index--;
                    if (event.keyCode === 40 /* down */) index++;
                    if (index >= 0 && index < self.options.length) {
                        self.setValue(self.options[index].value, true);
                        self.dom.dispatchEvent(new Event('change'));
                    }
                }

            // Multi-Select Keypress
            } else {
                // Reset shift tracking values on no shift key
                if (! event.shiftKey) {
                    self._shiftAdd = 0;
                    self._shiftTrack = [];
                }

                // Process Key Codes
                if (event.keyCode === 38 || event.keyCode === 40) {
                    event.preventDefault();
                    event.stopPropagation();

                    let values = [...self.selectedValues];

                    // Shift Key
                    if (event.shiftKey) {
                        // Initial Shift Key Values
                        if (self._shiftTrack.length === 0) self._shiftTrack = [...values];
                        values = [...self._shiftTrack];

                        // Find Values
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.keyCode === 38 && index + self._shiftAdd > 0) self._shiftAdd--;
                        if (event.keyCode === 40 && index + self._shiftAdd < self.options.length - 1) self._shiftAdd++;
                        index += self._shiftAdd;
                        if (index < 0 || index > self.options.length - 1) return;

                        // Find Indices
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = index;

                        // Select all items between last selected and newly selected
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                const value = self.options[i].value;
                                if (! values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                const value = self.options[i].value;
                                if (! values.includes(value)) values.push(value);
                            }
                        }

                        self.setValues(values, true);
                        self.dom.dispatchEvent(new Event('change'));

                    // No Shift Key
                    } else if (values.length > 0) {
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.keyCode === 38 /* up   */) index--;
                        if (event.keyCode === 40 /* down */) index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }

        /** Handle key up, handles arrow navigation, also prevents native scroll behavior */
        function onKeyUp(event) {
            switch (event.keyCode) {
                case 38: /* up */
                case 40: /* down */
                    event.preventDefault();
                    event.stopPropagation();
                    if (! event.shiftKey) {
                        self._shiftAdd = 0;
                        self._shiftTrack = [];
                    }
                    break;
            }
        }

        // Properties
        this.options = [];                  // divs
        this.selectedValue = null;          // single select
        this.selectedValues = [];           // multi select

        // Internal
        this._shiftAdd = 0;                 // tracks up / down keys while shift is pressed
        this._shiftTrack = [];              // tracks selected values when shift key is starting to be held

        // Add Events
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);

    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////	Lookup
    ////////////////////

    getIndex(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value === value) return i;
        }
        return -1;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////	Select - Single
    ////////////////////

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
            if (parseInt(element.value) === parseInt(value)) {
                element.classList.add('Active');
                lastElement = element;
            }
        }

        // Scroll Into View
        if (lastElement && scrollTo) setTimeout(() => Html.scrollIntoView(lastElement), 0);

        // Set Value, Return
        this.selectedValue = value;
        return this;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////	Select - Multi
    ////////////////////

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
                if (parseInt(element.value) === parseInt(value)) {
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
        if (lastElement && scrollTo) setTimeout(() => Html.scrollIntoView(lastElement), 0);

        // Set Values, Return
        this.selectedValues = [...valueArray];
        return this;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////	Build from Option (div) List
    ////////////////////

    setOptions(options) {
        const self = this;

        // Clear Existing Options
        this.clearContents();

        ////////// Click

        function onPointerDown(event) {
            // Reset shift tracking values on no shift key
            if (! event.shiftKey) {
                self._shiftAdd = 0;
                self._shiftTrack = [];
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
                    if (self._shiftTrack.length === 0) self._shiftTrack = [...self.selectedValues];
                    values = [...self._shiftTrack];

                    // Find Indices
                    const index1 = self.getIndex(values[values.length - 1]);
                    const index2 = self.getIndex(this.value);

                    // Select all items between last selected and newly selected
                    if (index1 < index2) {
                        for (let i = index1; i <= index2; i++) {
                            const value = self.options[i].value;
                            if (! values.includes(value)) values.push(value);
                        }
                    } else {
                        for (let i = index1; i >= index2; i--) {
                            const value = self.options[i].value;
                            if (! values.includes(value)) values.push(value);
                        }
                    }
                    self._shiftAdd = index2 - index1;
                    self.setValues(values);

                // No Key
                } else {
                    self.setValues([ this.value ]);
                }

            // Single Select
            } else {
                self.setValue(this.value);
            }

            // Dispatch 'onChange' Event
            const changeEvent = new Event('change');
            self.dom.dispatchEvent(changeEvent);
        }

        ////////// Drag & Drop

        let currentDrag = undefined;

        function onDrag() {
            currentDrag = this;
        }

        function onDragStart(event) {
            event.dataTransfer.setData('text/plain', this.value );
        }

        function onDragOver(event) {
            if (! currentDrag || this === currentDrag) return;
            const area = event.offsetY / this.clientHeight;

            this.className = 'Option Drag';
            if (area < 0.25) this.className = 'Option DragTop';
            if (area > 0.75) this.className = 'Option DragBottom';
        }

        function onDragLeave() {
            if (! currentDrag || this === currentDrag) return;
            this.className = 'Option';
        }

        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();

            if (! currentDrag || this === currentDrag) return;
            this.className = 'Option';

            // Let derived class handle 'drop' event
            if (self.onDrop && typeof self.onDrop === 'function') self.onDrop(event, this, currentDrag);

            // Reset 'currentDrag'
            currentDrag = undefined;
        }

        ////////// Attach Events

        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.className = 'Option';
            self.dom.appendChild(div);
            self.options.push(div);

            div.addEventListener('pointerdown', onPointerDown);
            if (div.draggable === true) {
                div.addEventListener('drag', onDrag);
                div.addEventListener('dragstart', onDragStart); /* firefox needs this */
                div.addEventListener('dragover', onDragOver);
                div.addEventListener('dragleave', onDragLeave);
                div.addEventListener('drop', onDrop);
            }

            div.addEventListener('destroy', function() {
                div.removeEventListener('pointerdown', onPointerDown);
                if (div.draggable === true) {
                    div.removeEventListener('drag', onDrag);
                    div.removeEventListener('dragstart', onDragStart);
                    div.removeEventListener('dragover', onDragOver);
                    div.removeEventListener('dragleave', onDragLeave);
                    div.removeEventListener('drop', onDrop);
                }
            }, { once: true });
        }

        return this;

    } // end function

}

export { TreeList };
