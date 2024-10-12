import { Element } from '../core/Element.js';
import { Div } from '../core/Div.js';

const MAX_SLIDER_TICKS = 10;              // Maximum number of ticks to show on Slider with 'step'

class Slider extends Div {

    constructor(number = 0, min = 0, max = 100) {
        super();
        const self = this;
        this.setClass('suey-slide-container');

        // Properties
        this.precision = 2;

        // Children
        const slider = new Element(document.createElement('input'));
        slider.setClass('suey-input');
        slider.addClass('suey-slider');
        slider.dom.type = 'range';
        slider.dom.value = number;
        slider.dom.min = min;
        slider.dom.max = max;

        const ticks = new Div(' ').addClass('suey-tick-marks');
        this.slider = slider;
        this.ticks = ticks;

        this.add(ticks, slider);

        // Events
        function sliderInput() {
            if (!slider.dom) return;
            const val = parseFloat(slider.dom.value);
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
        }

        function sliderWheel(event) {
            if (!slider.dom) return;
            event.preventDefault();

            const upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            let step = slider.dom.step;
            if (step === 'any') {
                step = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            } else {
                step = parseFloat(step);
            }

            const newValue = self.getValue() - (upOrDown * step);
            self.setValue(newValue);
            slider.dom.dispatchEvent(new Event('change', { 'bubbles': true, 'cancelable': true }));
        }

        slider.on('input', sliderInput);
        slider.on('wheel', sliderWheel);
    }

    getValue() {
        if (!this.slider.dom) return null;
        return parseFloat(this.slider.dom.value);
    }

    setValue(value) {
        if (!this.slider.dom) return this;

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
        valueAsFloat = valueAsFloat.toFixed(decimals);

        if (valueAsFloat !== undefined && !isNaN(valueAsFloat) && isFinite(valueAsFloat)) {
            this.slider.dom.value = valueAsFloat;
        }

        const val = parseFloat(this.slider.dom.value);
        const min = parseFloat(this.slider.dom.min);
        const max = parseFloat(this.slider.dom.max);
        this.slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
        return this;
    }

    setPrecision(precision) {
        this.precision = precision;
        return this;
    }

    setMin(min) {
        if (!this.slider.dom) return this;
        this.slider.dom.min = min;
        this.setTicks();
        return this;
    }

    setMax(max) {
        if (!this.slider.dom) return this;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }

    setRange(min, max) {
        if (!this.slider.dom) return this;
        this.slider.dom.min = min;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }

    setStep(step) {
        if (!this.slider.dom) return this;
        this.slider.dom.step = step;
        this.setTicks();
        return this;
    }

    setTicks() {
        if (!this.slider.dom) return this;
        const ticks = this.ticks;
        const min = parseFloat(this.slider.dom.min);
        const max = parseFloat(this.slider.dom.max);
        const step = this.slider.dom.step;

        if (step !== 'any' && Number.isFinite(min) && Number.isFinite(max)) {
            // Calculate Steps
            const totalSteps = parseFloat((max - min) / step);

            // Limit to 'maxDivsisor' ticks
            const maxDivsisor = MAX_SLIDER_TICKS - 1;
            let tickSteps = totalSteps;
            if (tickSteps > maxDivsisor) {
                for (let i = 1; i <= maxDivsisor; i++) {
                    if (Number.isInteger(totalSteps / i)) tickSteps = i;
                }
            }

            // Set Tick Gradient
            ticks.dom.style.setProperty('--divides', `${tickSteps}`);
            ticks.setStyle('display', '');
        } else {
            ticks.setStyle('display', 'none');
        }
    }

}

export { Slider };
