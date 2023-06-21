// VARIABLES
//  getVariable()               Gets a CSS variable by name, hyphens optional
//  setVariable()               Sets a CSS variable by name, hyphens optional
// FONT / GUI SIZING
//  baseSize()
//  fontSize()
//  guiScale()                  Calculates current GUI scale based on <body> font size
// FONT METRICS
//  getTextWidth()              Gets the width of a string in pixels
//  getFontCssFromElement()
// SIZE PARSING
//  parseSize()
//  toEm()                      Returns input units from 'px' to 'em'
//  toPx()                      Returns input units to converted pixels string ending in 'px'

class Css {

    /******************** VARIABLES ********************/

    /** Gets a CSS variable by name, hyphens optional */
    static getVariable(variable) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        const rootElement = document.querySelector(':root');
        return getComputedStyle(rootElement).getPropertyValue(variable);
    }

    /**
     * Sets a CSS variable by name
     *
     * @param {*} variable variable name, first two hypens optional
     * @param {*} valueAsString new css variable value as string
     * @param {*} element Optional, will apply to 'root' element if not defined
     */
    static setVariable(variable, valueAsString, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
		element.style.setProperty(variable, valueAsString);
    }

    /******************** FONT / GUI SIZING ********************/

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

    /******************** FONT METRICS ********************/

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

    /******************** SIZE PARSING ********************/

    static parseSize(size) {
        if (typeof size === 'string') {
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
        console.warn(`Css.toEm: Could not convert to em, unit passed in: ${pixels}`);
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
        console.warn(`Css.toPx: Could not convert to pixels, unit passed in: ${size}`);
        return size;
    }

}

export { Css };
