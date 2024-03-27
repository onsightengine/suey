import { Element } from '../core/Element.js';

const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });

class NumberBox extends Element {

    constructor(number) {
        super(document.createElement('input'));
        const self = this;
        this.setClass('suey-input');
        this.addClass('suey-number');

        // // Setup
        // this.dom.type = 'number'; /* !! NOTE: doesn't work with custom 'unit' */
        this.dom.style.cursor = 'text';
        this.dom.value = '0.00';
        this.dom.setAttribute('autocomplete', 'off');

        // Properties
        this.value = 0;
        this.min = -Infinity;
        this.max = Infinity;
        this.precision = 3;
        this.step = 0.1;
        this.unit = '';
        this.nudge = 1.0;
        this.setValue(number);

        // Events
        function boxChange(event) {
            if (self.dom) self.setValue(self.dom.value);
        }

        function boxKeyDown(event) {
            event.stopPropagation();

            if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) editor.redo();
                else editor.undo();
                return;
            }

            switch (event.key) {
                case 'Enter':
                    if (self.dom) self.dom.style.cursor = 'text';
                    if (self.dom) self.dom.blur();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    self.setValue(self.getValue() + self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    self.setValue(self.getValue() - self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent);
                    break;
            }
        }

        function boxKeyUp(event) {
            event.stopPropagation();
        }

        function boxWheel(event) {
            event.preventDefault();
            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const newValue = self.getValue() - (upOrDown * self.step);
            self.setValue(newValue);
            if (self.dom) self.dom.dispatchEvent(_changeEvent);
        }

        // Add Listeners
        this.on('keydown', boxKeyDown);
        this.on('keyup', boxKeyUp);
        this.on('wheel', boxWheel);
        this.on('change', boxChange);

    } // end ctor

    getValue() {
        return parseFloat(this.value);
    }

    /** Sets numeric value of input box, enforces range and precision */
    setValue(value) {
        let valueAsFloat = parseFloat(value);
        if (valueAsFloat === undefined || isNaN(valueAsFloat) || !isFinite(valueAsFloat)) {
            return this;
        }

        if (valueAsFloat < this.min) valueAsFloat = this.min;
        if (valueAsFloat > this.max) valueAsFloat = this.max;
        valueAsFloat = parseFloat(valueAsFloat.toFixed(this.precision));

        function countDecimals(number) {
            if (Math.floor(number.valueOf()) === number.valueOf()) return 0;
            return number.toString().split('.')[1].length || 0;
        }

        let decimals = Math.min(this.precision, countDecimals(valueAsFloat));
        // if ((this.precision >= 1) && (decimals < 1)) decimals = 1; /* keeps one decimal no matter what */
        valueAsFloat = valueAsFloat.toFixed(decimals);

        if (valueAsFloat !== undefined && !isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.value = valueAsFloat;
            if (this.dom) this.dom.value = valueAsFloat;
            if (this.dom && this.unit !== '') this.dom.value = valueAsFloat + ' ' + this.unit;
        }
        return this;
    }

    setPrecision(precision) {
        this.precision = parseFloat(precision);
        return this;
    }

    setStep(step) {
        this.step = parseFloat(step);
        return this;
    }

    setNudge(nudge) {
        this.nudge = parseFloat(nudge);
        return this;
    }

    setMin(min) {
        this.min = parseFloat(min);
        return this;
    }

    setMax(max) {
        this.max = parseFloat(max);
        return this;
    }

    setRange(min, max) {
        this.setMin(min);
        this.setMax(max);
        return this;
    }

    setUnit(unit) {
        this.unit = unit;
        return this;
    }

}

class NumberScroll extends NumberBox {

    constructor(number) {
        super(number);
        const self = this;
        this.addClass('suey-number-scroll');

        this.dom.style.cursor = 'ns-resize';

        let distance = 0;
        let mouseDownValue = 0;

        const pointer = { x: 0, y: 0 };
        const prevPointer = { x: 0, y: 0 };

        function numberMouseDown(event) {
            event.preventDefault();
            distance = 0;

            mouseDownValue = self.getValue();

            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }

        function numberMouseMove(event) {
            const currentValue = self.getValue();

            pointer.x = event.clientX;
            pointer.y = event.clientY;

            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);

            let value;
            value = mouseDownValue + (distance / (event.shiftKey ? 0.1 : 1)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));

            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent);
            }

            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }

        function numberMouseUp() {
            if (Math.abs(distance) < 2) {
                if (self.dom) self.dom.focus();
                // if (self.dom) self.dom.select();
            }
        }

        function numberTouchStart(event) {
            if (event.touches.length === 1) {
                distance = 0;
                mouseDownValue = self.getValue();

                prevPointer.x = event.touches[0].pageX;
                prevPointer.y = event.touches[0].pageY;
            }
        }

        function numberTouchMove(event) {
            const currentValue = self.getValue();

            pointer.x = event.touches[0].pageX;
            pointer.y = event.touches[0].pageY;
            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);

            let value;
            value = mouseDownValue + (distance / (event.shiftKey ? 5 : 50)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));

            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent);
            }

            prevPointer.x = event.touches[0].pageX;
            prevPointer.y = event.touches[0].pageY;
        }

        function numberTouchEnd(event) {
            if (event.touches.length === 0) {
                if (Math.abs(distance) < 2) {
                    if (self.dom) self.dom.focus();
                    // if (self.dom) self.dom.select();
                }
            }
        }

        function numberFocus() {
            // if (self.dom) self.dom.style.backgroundColor = '';
            if (self.dom) self.dom.style.cursor = '';
        }

        function numberBlur() {
            // if (self.dom) self.dom.style.backgroundColor = 'transparent';
            if (self.dom) self.dom.style.cursor = 'ns-resize';
        }

        // Add Event Listeners
        this.on('mousedown', numberMouseDown);
        this.on('mousemove', numberMouseMove);
        this.on('mouseup', numberMouseUp);
        this.on('touchstart', numberTouchStart);
        this.on('touchmove', numberTouchMove);
        this.on('touchend', numberTouchEnd);
        this.on('focus', numberFocus);
        this.on('blur', numberBlur);
    }

}

export {
    NumberBox,
    NumberScroll,
};
