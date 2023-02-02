import { Div } from '../core/Div.js';
import { Element } from '../core/Element.js';
import { Row } from '../layout/Row.js';
import { Span } from '../core/Span.js';
import { Text } from '../core/Text.js';
import { VectorBox } from '../layout/VectorBox.js';

export const PROPERTY_SIZE = {
    HALF:	'half',
    FIFTHS: 'fifths',
    THIRD:	'third',
}

export const LEFT_SPACING = {
    TABS:   'tabs',
    NORMAL: 'normal',
}

class PropertyList extends Div {

    constructor(rowSizing = PROPERTY_SIZE.HALF, leftSpacing = LEFT_SPACING.TABS) {
        super();
        this.addClass('PropertyList');
        this.setStyle('display', 'block');

        this.rowSizing = rowSizing;
        this.leftSpacing = leftSpacing;

        this.setRowSizeHalfs = function() { this.rowSizing = PROPERTY_SIZE.HALF; };
        this.setRowSizeFifths = function() { this.rowSizing = PROPERTY_SIZE.FIFTHS; };
        this.setRowSizeThirds = function() { this.rowSizing = PROPERTY_SIZE.THIRD; };
    }

    /******************** ADD WIDGETS ********************/

    addHeader(text = '', iconUrl, enlarge = false) {
        const header = this.createHeader(text, iconUrl, enlarge);
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
    createHeader(text = '', iconUrl, enlarge = false) {
        const header = new Div().setClass('PropertyHeaderTitle');
        const icon = new VectorBox(iconUrl);
        if (enlarge) icon.addClass('EnlargeIcon');
        header.iconHolder = new Span().setClass('PropertyHeaderIcon').add(icon);
        header.textHolder = new Span().setClass('PropertyHeaderText').setTextContent(text);
        header.add(header.iconHolder, header.textHolder);
        return header;
    }

    /** Creates row from left / right widgets, spacing defaults to this.rowSizing */
    createRow(title = '', ...controls) {
        const rightWidget = this.createControls(...controls);
        const leftWidget = new Text(title).selectable(false).addClass('PropertyLeft');
        if (this.leftSpacing === LEFT_SPACING.TABS) leftWidget.addClass('LeftTabSpacing');
        if (this.rowSizing === PROPERTY_SIZE.THIRD) {
            leftWidget.addClass('PropertyLeftThird');
            rightWidget.addClass('PropertyRightThird');
        } else if (this.rowSizing === PROPERTY_SIZE.FIFTHS) {
            leftWidget.addClass('PropertyLeftFifth');
            rightWidget.addClass('PropertyRightFifth');
        } else {
            leftWidget.addClass('PropertyLeftHalf');
            rightWidget.addClass('PropertyRightHalf');
        }
        const row = new Row().addClass('PropertyRow').add(leftWidget, rightWidget);
        row.leftWidget = leftWidget;
        row.rightWidget = rightWidget;
        return row;
    }

    /** Creates row from widgets, spacing defaults to this.rowSizing */
    createRowWithoutTitle(...controls) {
        const widgets = this.createControls(...controls);
        widgets.removeClass('PropertyRight').addClass('PropertyFull');
        const row = new Row().addClass('PropertyRow').add(widgets);
        row.leftWidget = widgets;
        row.rightWidget = widgets;
        return row;
    }

    /** Creates a zero margin Row to hold right side controls of a Property Row */
    createControls(/* any number of Osui Elements */) {
        const rightRow = new Row().setStyle('margin', '0', 'padding', '0').addClass('PropertyRight');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (argument instanceof Element && argument.isElement) {
                rightRow.add(argument);
                if (i < args.length - 1) rightRow.add(new Span().addClass('PropertySpace'));
            } else {
                console.error('PropertyList.createControls():', argument, 'is not an instance of Osui Element.');
            }
        }
        // rightRow.add(new FlexSpacer());
        return rightRow;
    }

}

export { PropertyList };
