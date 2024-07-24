import { Div } from '../core/Div.js';
import { NumberBox } from './Number.js';
import { Slider } from './Slider.js';
import { Span } from '../core/Span.js';
import { Strings } from '../utils/Strings.js';

const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });

class SliderBox extends Div {

    constructor(number, min = -Infinity, max = Infinity, step = 'any', precision = 2, unit = '') {
        super();
        const self = this;
        this.setClass('suey-slider-box');

        // Properties
        this.value = 0;
        this.min = -Infinity;
        this.max = Infinity;
        this.precision = 1;
        this.step = 0.1;
        this.unit = '';

        // Build
        const slider = new Slider().setStyle('flex', '1 1 auto');
        const spacer = new Span().addClass('suey-property-space');
        const numberBox = new NumberBox().addClass('suey-property-tiny-row');
        this.add(slider, spacer, numberBox);
        this.slider = slider;
        this.numberBox = numberBox;

        // Infinity Check
        this.checkForMinMax = function() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                numberBox.addClass('suey-property-tiny-row');
                slider.setStyle('display', '');
                numberBox.setStyle('marginLeft', '0.14286em');
                spacer.addClass('suey-property-space');
            } else {
                numberBox.removeClass('suey-property-tiny-row');
                slider.setStyle('display', 'none');
                numberBox.setStyle('marginLeft', '0');
                spacer.removeClass('suey-property-space');
            }
        }

        // Events
        slider.on('input', () => {
            self.value = slider.getValue();
            numberBox.setValue(slider.getValue());
            self.dom.dispatchEvent(_changeEvent);
        });
        slider.on('change', () => {
            self.value = slider.getValue();
            numberBox.setValue(slider.getValue());
            self.dom.dispatchEvent(_changeEvent);
        });
        numberBox.on('change', () => {
            self.value = numberBox.getValue();
            slider.setValue(numberBox.getValue());
            self.dom.dispatchEvent(_changeEvent);
        });
        slider.on('pointerdown', (event) => event.stopPropagation());
        slider.on('wheel', (event) => event.stopPropagation());
        numberBox.on('wheel', (event) => event.stopPropagation());

        // Init
        this.setRange(min, max);
        this.setPrecision(precision);
        this.setStep(step);
        this.setUnit(unit);
        this.setValue(number);
    } // end ctor

    getValue() {
        return parseFloat(this.value);
    }

    setValue(value) {
        this.slider.setValue(value);
        this.numberBox.setValue(value);
        return this;
    }

    setPrecision(precision) {
        this.precision = parseFloat(precision);
        this.slider.setPrecision(precision);
        this.numberBox.setPrecision(precision);
        return this;
    }

    setStep(step = 'any') {
        this.step = step;
        // Slider Step
        this.slider.setStep(step);
        // Number Box Step
        const min = this.numberBox.min;
        const max = this.numberBox.max;
        if (step === 'any') step = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
        this.numberBox.setStep(step);
        return this;
    }

    setMin(min) {
        this.min = parseFloat(min);
        this.slider.setMin(min);
        this.numberBox.setMin(min);
        this.checkForMinMax();
        return this;
    }

    setMax(max) {
        this.max = parseFloat(max);
        this.slider.setMax(max);
        this.numberBox.setMax(max);
        const digits = Strings.countDigits(parseInt(max)) + ((this.precision > 0) ? this.precision + 0.5 : 0);
        this.numberBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        this.checkForMinMax();
        return this;
    }

    setRange(min, max) {
        this.setMin(min);
        this.setMax(max);
        return this;
    }

    setUnit(unit = '') {
        this.unit = unit;
        if (unit && unit !== '') this.numberBox.setUnit(unit);
        return this;
    }

}

export { SliderBox };
