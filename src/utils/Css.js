/////////////////////////////////////////////////////////////////////////////////////
//
//  Css Functions
//      Variables
//          getVariable             Gets a CSS variable
//          setVariable             Sets a CSS variable
//      Font / Gui Sizing
//          baseSize
//          fontSize
//          guiScale                Calculates current GUI scale based on <body> font size
//      Font Metrics
//          getTextWidth            Gets the width of a string in pixels
//          getFontCssFromElement
//      Size Parsing
//          parseSize
//          toEm                    Returns input units from 'px' to 'em'
//          toPx                    Returns input units to converted pixels string ending in 'px'
//
/////////////////////////////////////////////////////////////////////////////////////

class Css {

    //////////////////// Variables

    /** Gets a CSS variable */
    static getVariable(variable) {
        const rootElement = document.querySelector(':root');
        return getComputedStyle(rootElement).getPropertyValue(variable);
    }

    /** Sets a CSS variable */
    static setVariable(variableName, valueAsString) {
        const rootElement = document.querySelector(':root');
		rootElement.style.setProperty(variableName, valueAsString);
    }

    //////////////////// Font / Gui Sizing

    static baseSize() { /* 1rem === 10px @ root */
        return parseFloat(getComputedStyle(document.querySelector(':root')).fontSize);
    }

    static fontSize(element = document.body) {
        return parseFloat(getComputedStyle(element).fontSize);
    }

    /** Calculates current GUI scale based on <body> font size */
    static guiScale(element = document.body) {
        return Css.fontSize(element) / Css.baseSize();
    }

    //////////////////// Font Metrics

    /* Gets the width of a string in pixels, use with getFontCssFromElement() */
    static getTextWidth(text, font) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.font = font;
        return ctx.measureText(text).width;
    }

    static getFontCssFromElement(element = document.body) {
        const fontWeight = getComputedStyle(element).fontWeight || 'normal';
        const fontSize = getComputedStyle(element).fontSize || '16px';
        const fontFamily = getComputedStyle(element).fontFamily || 'Arial';
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }

    //////////////////// Size Parsing

    static parseSize(size) {
        if (typeof size === 'string' || size instanceof String) {
            if (size.includes('px') || size.includes('%') ||
                size.includes('em') || size.includes('rem') ||
                size.includes('ch') || size.includes('ex') || size.includes('cap') ||
                size.includes('vw') || size.includes('vh') || size.includes('vmin') || size.includes('vmax'))
            {
                return size;
            } else {
                return parseInt(size) + 'px';
            }
        } else {
            return parseInt(size) + 'px';
        }
    }

    /** Returns input units from 'px' to 'em' */
    static toEm(pixels, element = document.body) {
        const parsedSize = Css.parseSize(pixels);
        if (parsedSize.includes('px')) {
            return ((parseFloat(parsedSize) / 10.0) / Css.guiScale(element)) + 'em';
        } else if (parsedSize.includes('em')) {
            return parsedSize;
        }
        console.warn(`Css.toEm: Could not convert to em! Unit passed in: ${pixels}`);
        return size;
    }

    /** Returns input units to converted pixels string ending in 'px' */
    static toPx(size, element = document.body) {
        const parsedSize = Css.parseSize(size);
        if (parsedSize.includes('px')) {
            return parsedSize;
        } else if (parsedSize.includes('rem')) {
            return parseInt((parseFloat(size) * 10.0)) + 'px';
        } else if (parsedSize.includes('em')) {
            return parseInt((parseFloat(size) * 10.0 * Css.guiScale(element))) + 'px';
        }
        console.warn(`Css.toPx: Could not convert to pixels! Unit passed in: ${size}`);
        return size;
    }

}

export { Css };
