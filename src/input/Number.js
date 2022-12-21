/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Element } from '../core/Element.js';

const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });

/////////////////////////////////////////////////////////////////////////////////////
/////	Number Box
/////////////////////////////////////////////////////////////////////////////////////

class NumberBox extends Element {

    constructor(number) {
        super(document.createElement('input'));
        const self = this;
        this.setClass('Number');

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

        ///// Events

        function onChange(event) {
            if (self.dom) self.setValue(self.dom.value);
        }

        function onKeyDown(event) {
            event.stopPropagation();

            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) { editor.redo(); } else { editor.undo(); }
                return;
            }

            switch (event.code) {
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

        function onKeyUp(event) {
            event.stopPropagation();
        }

        function onWheel(event) {
            event.preventDefault();
            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const newValue = self.getValue() - (upOrDown * self.step);
            self.setValue(newValue);
            if (self.dom) self.dom.dispatchEvent(_changeEvent);
        }

        // Add Listeners
        this.dom.addEventListener('keydown', onKeyDown);
        this.dom.addEventListener('keyup', onKeyUp);
        this.dom.addEventListener('wheel', onWheel);
        this.dom.addEventListener('change', onChange);

        // Remove Event Listeners
        this.dom.addEventListener('destroy', function() {
            self.dom.removeEventListener('keydown', onKeyDown);
            self.dom.removeEventListener('keyup', onKeyUp);
            self.dom.removeEventListener('wheel', onWheel);
            self.dom.removeEventListener('change', onChange);
        }, { once: true });

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
        //if ((this.precision >= 1) && (decimals < 1)) decimals = 1; 	// Keeps one decimal no matter what
        valueAsFloat = valueAsFloat.toFixed(decimals);

        if (valueAsFloat !== undefined && !isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.value = valueAsFloat;
            if (this.dom) this.dom.value = valueAsFloat;
            if (this.dom && this.unit !== '') this.dom.value = valueAsFloat + ' ' + this.unit;
        }
        return this;
    }

    setPrecision(precision) {
        this.precision = precision;
        return this;
    }

    setStep(step) {
        this.step = step;
        return this;
    }

    setNudge(nudge) {
        this.nudge = nudge;
        return this;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        return this;
    }

    setUnit(unit) {
        this.unit = unit;
        return this;
    }

}

/////////////////////////////////////////////////////////////////////////////////////
/////	Number Scroller Box
/////		Adds scroller functionality to NumberBox
/////////////////////////////////////////////////////////////////////////////////////

class NumberScroll extends NumberBox {

    constructor(number) {
        super(number);
        const self = this;

        this.dom.style.cursor = 'ns-resize';

        let distance = 0;
        let onMouseDownValue = 0;

        const pointer = { x: 0, y: 0 };
        const prevPointer = { x: 0, y: 0 };

        function onMouseDown(event) {
            event.preventDefault();
            distance = 0;

            onMouseDownValue = self.getValue();

            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }

        function onMouseMove(event) {
            const currentValue = self.getValue();

            pointer.x = event.clientX;
            pointer.y = event.clientY;

            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);

            let value;
            value = onMouseDownValue + (distance / (event.shiftKey ? 0.1 : 1)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));

            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent);
            }

            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }

        function onMouseUp() {
            if (Math.abs(distance) < 2) {
                if (self.dom) self.dom.focus();
                // if (self.dom) self.dom.select();
            }
        }

        function onTouchStart(event) {
            if (event.touches.length === 1) {
                distance = 0;
                onMouseDownValue = self.getValue();

                prevPointer.x = event.touches[0].pageX;
                prevPointer.y = event.touches[0].pageY;
            }
        }

        function onTouchMove(event) {
            const currentValue = self.getValue();

            pointer.x = event.touches[0].pageX;
            pointer.y = event.touches[0].pageY;
            distance += (pointer.x - prevPointer.x) - (pointer.y - prevPointer.y);

            let value;
            value = onMouseDownValue + (distance / (event.shiftKey ? 5 : 50)) * self.step;
            value = Math.min(self.max, Math.max(self.min, value));

            if (currentValue !== value) {
                self.setValue(value);
                if (self.dom) self.dom.dispatchEvent(_changeEvent);
            }

            prevPointer.x = event.touches[0].pageX;
            prevPointer.y = event.touches[0].pageY;
        }

        function onTouchEnd(event) {
            if (event.touches.length === 0) {
                if (Math.abs(distance) < 2) {
                    if (self.dom) self.dom.focus();
                    // if (self.dom) self.dom.select();
                }
            }
        }

        function onFocus() {
            // if (self.dom) self.dom.style.backgroundColor = '';
            if (self.dom) self.dom.style.cursor = '';
        }

        function onBlur() {
            // if (self.dom) self.dom.style.backgroundColor = 'transparent';
            if (self.dom) self.dom.style.cursor = 'ns-resize';
        }

        // Add Event Listeners
        this.dom.addEventListener('mousedown', onMouseDown);
        this.dom.addEventListener('mousemove', onMouseMove);
        this.dom.addEventListener('mouseup', onMouseUp);
        this.dom.addEventListener('touchstart', onTouchStart);
        this.dom.addEventListener('touchmove', onTouchMove);
        this.dom.addEventListener('touchend', onTouchEnd);
        this.dom.addEventListener('focus', onFocus);
        this.dom.addEventListener('blur', onBlur);

        // Remove Event Listeners
        this.dom.addEventListener('destroy', function() {
            self.dom.removeEventListener('mousedown', onMouseDown);
            self.dom.removeEventListener('mousemove', onMouseMove);
            self.dom.removeEventListener('mouseup', onMouseUp);
            self.dom.removeEventListener('touchstart', onTouchStart);
            self.dom.removeEventListener('touchmove', onTouchMove);
            self.dom.removeEventListener('touchend', onTouchEnd);
            self.dom.removeEventListener('focus', onFocus);
            self.dom.removeEventListener('blur', onBlur);
        }, { once: true });

    }

}

export {
    NumberBox,
    NumberScroll,
};
