import {
    LEFT_SPACING,
} from '../constants.js';
import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Element } from '../core/Element.js';
import { Row } from '../layout/Row.js';
import { Span } from '../core/Span.js';
import { Text } from '../core/Text.js';
import { VectorBox } from '../layout/VectorBox.js';

class PropertyList extends Div {

    constructor(leftPropertyWidth = '50%', leftPropertySpacing = LEFT_SPACING.TABS) {
        super();
        this.addClass('suey-property-list');
        this.setStyle('display', 'block');

        this.leftPropertyWidth = leftPropertyWidth;
        this.leftPropertySpacing = leftPropertySpacing;
    }

    setLeftPropertyWidth(width = '50%') {
        this.leftPropertyWidth = width;
        return this;
    }

    #safeWidth() {
        let width = this.leftPropertyWidth ?? '50%';
        if (typeof this.leftPropertyWidth === 'string') {
            width = parseInt(this.leftPropertyWidth);
        } else if (typeof this.leftPropertyWidth === 'number') {
            width = parseFloat(this.leftPropertyWidth) * 100;
        }
        if (!Number.isFinite(width)) width = 50;
        width = Math.max(width, 0);
        width = Math.min(width, 100);
        return width;
    }

    #leftWidth() {
        return `${this.#safeWidth()}%`;
    }

    #rightWidth() {
        return `${(100 - this.#safeWidth())}%`;
    }

    /******************** ADD WIDGETS ********************/

    addHeader(text = '', iconUrl) {
        const header = this.createHeader(text, iconUrl);
        this.add(header);
        return header;
    }

    addRow(title = '', ...controls) {
        const row = this.createRow(title, ...controls);
        this.add(row);
        return row;
    }

    addRowWithoutTitle(...controls) {
        const row = this.createRowWithoutTitle(...controls);
        this.add(row);
        return row;
    }

    /******************** CREATE WIDGETS ********************/

    /** Separating category header title */
    createHeader(text = '', iconUrl) {
        const header = new Div().setClass('suey-property-header-title');
        const icon = new VectorBox(iconUrl);
        const iconHolder = new Span().setClass('suey-property-header-icon').add(icon);
        const textHolder = new Span().setClass('suey-property-header-text').setTextContent(text);
        header.add(iconHolder, textHolder);
        return header;
    }

    /** Creates row from left / right widgets, spacing defaults to this.leftPropertyWidth */
    createRow(title = '', ...controls) {
        const rightWidget = this.createControls(...controls);
        const leftWidget = new Text(title).selectable(false).addClass('suey-property-left');
        if (this.leftPropertySpacing === LEFT_SPACING.TABS) leftWidget.addClass('suey-left-tab-spacing');
        Css.setVariable('--left-property-width', this.#leftWidth(), leftWidget);
        Css.setVariable('--right-property-width', this.#rightWidth(), rightWidget);
        const row = new Row().addClass('suey-property-row').add(leftWidget, rightWidget);
        row.leftWidget = leftWidget;
        row.rightWidget = rightWidget;
        return row;
    }

    /** Creates a single column row for input widgets (no left property label) */
    createRowWithoutTitle(...controls) {
        const widgets = this.createControls(...controls);
        widgets.removeClass('suey-property-right').addClass('suey-property-full');
        const row = new Row().addClass('suey-property-row').add(widgets);
        row.leftWidget = widgets;
        row.rightWidget = widgets;
        return row;
    }

    /** Creates a zero margin Row to hold right side controls of a Property Row */
    createControls(/* any number of 'Element's */) {
        const rightRow = new Row().setStyle('margin', '0', 'padding', '0').addClass('suey-property-right');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (argument instanceof Element && argument.isElement) {
                rightRow.add(argument);
                if (i < args.length - 1) rightRow.add(new Span().addClass('suey-property-space'));
            } else {
                console.error('PropertyList.createControls(): ', argument, ' is not an instance of Element');
            }
        }
        // rightRow.add(new FlexSpacer());
        return rightRow;
    }

    /** Disables all Inputs */
    disableInputs(disable = true) {
        const inputs = [ 'suey-button', 'suey-checkbox', 'suey-checkbox-input', 'suey-number', 'suey-slider', 'suey-tick-marks', 'suey-text-area', 'suey-text-box' ];

        for (let i = 0; i < inputs.length; i++) {
            const elements = this.dom.getElementsByClassName(inputs[i]);

            for (let j = 0; j < elements.length; j++) {
                if (disable) {
                    elements[j].classList.add('suey-disabled');
                    elements[j].disabled = true;
                } else {
                    elements[j].classList.remove('suey-disabled');
                    elements[j].disabled = false;
                }
            }
        }
    }

}

export { PropertyList };
