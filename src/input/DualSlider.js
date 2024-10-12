import { Div } from '../core/Div.js';
import { Element } from '../core/Element.js';

class DualSlider extends Div {

    constructor({
        min = 0,
        max = 100,
        initialMin = 25,
        initialMax = 75,
        step = 1,
        precision = 0
    } = {}) {
        super();
        this.setClass('suey-dual-slider-container');

        // Checks
        step = Number(step);
        if (isNaN(step)) step = 1;
        if (!isFinite(step)) step = 1;

        // Properties
        this.min = min;
        this.max = max;
        this.step = step;
        this.precision = precision;

        // Ensure initial values are within bounds
        this.currentMin = Math.max(this.min, Math.min(initialMin, initialMax, this.max));
        this.currentMax = Math.min(this.max, Math.max(initialMin, initialMax, this.min));

        // Create Slider Track
        this.track = new Div().addClass('suey-dual-slider-track');
        this.add(this.track);

        // Create Knobs
        this.knobs = new Div().addClass('suey-dual-slider-knob-holder');
        this.range = new Div().addClass('suey-dual-slider-range');
        this.knobMin = new Div().addClass('suey-dual-slider-knob');
        this.knobMax = new Div().addClass('suey-dual-slider-knob');
        this.knobs.add(this.range, this.knobMin, this.knobMax);
        this.add(this.knobs);

        // Bind event handlers
        this._bindEvents();

        // Initialize positions
        this.updatePositions();
    }

    // Bind Mouse and Touch Events
    _bindEvents() {
        // Knob Min Events
        this.knobMin.on('mousedown', (e) => this._onDragStart(e, 'min'));
        this.knobMin.on('touchstart', (e) => this._onDragStart(e, 'min'));

        // Knob Max Events
        this.knobMax.on('mousedown', (e) => this._onDragStart(e, 'max'));
        this.knobMax.on('touchstart', (e) => this._onDragStart(e, 'max'));
    }

    // Dragging State
    _onDragStart(event, knobType) {
        event.preventDefault();
        this.dragging = knobType;

        // Add event listeners for movement and end
        document.addEventListener('mousemove', this._onDragMove);
        document.addEventListener('mouseup', this._onDragEnd);
        document.addEventListener('touchmove', this._onDragMove);
        document.addEventListener('touchend', this._onDragEnd);
    }

    _onDragMove = (event) => {
        if (!this.dragging) return;

        let clientX;
        if (event.type.startsWith('mouse')) {
            clientX = event.clientX;
        } else if (event.type.startsWith('touch')) {
            clientX = event.touches[0].clientX;
        }

        const rect = this.track.dom.getBoundingClientRect();
        const percentage = ((clientX - rect.left) / rect.width) * 100;
        const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
        const value = this.min + ((clampedPercentage / 100) * (this.max - this.min));

        const steppedValue = this._applyStep(value);

        if (this.dragging === 'min') {
            if (steppedValue > this.currentMax - this.step) {
                this.currentMin = this.currentMax;
            } else {
                this.currentMin = Math.max(this.min, steppedValue);
            }
        } else if (this.dragging === 'max') {
            if (steppedValue < this.currentMin + this.step) {
                this.currentMax = this.currentMin;
            } else {
                this.currentMax = Math.min(this.max, steppedValue);
            }
        }

        this.updatePositions();
        this.dom.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    }

    _onDragEnd = () => {
        this.dragging = null;
        // Remove event listeners
        document.removeEventListener('mousemove', this._onDragMove);
        document.removeEventListener('mouseup', this._onDragEnd);
        document.removeEventListener('touchmove', this._onDragMove);
        document.removeEventListener('touchend', this._onDragEnd);
    }

    // Apply Step and Precision
    _applyStep(value) {
        const steppedValue = Math.round((value - this.min) / this.step) * this.step + this.min;
        return parseFloat(steppedValue.toFixed(this.precision));
    }

    // Update Knob Positions and Range Highlight
    updatePositions() {
        const range = this.max - this.min;
        const minPercentage = ((this.currentMin - this.min) / range) * 100;
        const maxPercentage = ((this.currentMax - this.min) / range) * 100;

        this.knobMin.dom.style.left = `${minPercentage}%`;
        this.knobMax.dom.style.left = `${maxPercentage}%`;

        this.range.dom.style.left = `${minPercentage}%`;
        this.range.dom.style.width = `${maxPercentage - minPercentage}%`;
        return this;
    }

    // Get Current Range
    getRange() {
        return {
            min: this.currentMin,
            max: this.currentMax
        };
    }

    // Set Current Range
    setRange({ min, max }, events = true) {
        if (min != undefined) this.currentMin = Math.max(this.min, Math.min(min, this.currentMax));
        if (max != undefined) this.currentMax = Math.min(this.max, Math.max(max, this.currentMin));
        this.updatePositions();
        if (events) this.dom.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        return this;
    }

    // Set Step
    setStep(step) {
        step = Number(step);
        if (isNaN(step) || !isFinite(step)) step = 1;
        this.step = step;
        this.setRange({ min: this.currentMin, max: this.currentMax }, false /* events */);
        return this;
    }

    // Set Precision
    setPrecision(precision) {
        this.precision = precision;
        this.setRange({ min: this.currentMin, max: this.currentMax }, false /* events */);
        return this;
    }

    // Set Min and Max Range
    setMinMax(min, max) {
        if (isNaN(min) || !isFinite(min)) min = 0;
        if (isNaN(max) || !isFinite(max)) max = 0;
        this.min = min;
        this.max = max;
        // Adjust current values if out of new bounds
        this.currentMin = Math.max(this.min, Math.min(this.currentMin, this.max - this.step));
        this.currentMax = Math.min(this.max, Math.max(this.currentMax, this.min + this.step));
        this.updatePositions();
        return this;
    }

}

export { DualSlider };
