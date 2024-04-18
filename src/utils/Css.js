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
// HTML ELEMENTS
//  parentElementWithCSS        Finds and returns parent of 'element' with a specific CSS key, value
// SIZE PARSING
//  parseSize()
//  toEm()                      Returns input units from 'px' to 'em'
//  toPx()                      Returns input units to converted pixels string ending in 'px'

class Css {

    /******************** VARIABLES ********************/

    /** Gets a CSS variable by name (hyphens optional) */
    static getVariable(variable, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        return getComputedStyle(element).getPropertyValue(variable);
    }

    /**
     * Sets a CSS variable by name (hyphens optional)
     *
     * @param {*} variable Variable name (hyphens optional).
     * @param {*} valueAsString New CSS variable value as string.
     * @param {*} element Optional, will apply to 'root' element if not defined.
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
        return parseFloat(Css.getVariable('--base-size'));
    }

    static fontSize(element = document.body) {
        if (element && element.isElement) element = element.dom;
        let size = getComputedStyle(element).fontSize;
        if (size == null || Number.isNaN(size) || !Number.isFinite(size)) size = getComputedStyle(document.body).fontSize;
        return parseFloat(size);
    }

    /** Calculates current GUI scale based on <body> font size */
    static guiScale(element = document.body) {
        if (element && element.isElement) element = element.dom;
        return Css.fontSize(element) / Css.baseSize();
    }

    /******************** FONT METRICS ********************/

    /* Gets the width of a string in pixels, use with getFontCssFromElement() */
    static getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = font;
        return ctx.measureText(text).width;
    }

    static getFontCssFromElement(element = document.body) {
        if (element && element.isElement) element = element.dom;
        const fontWeight = getComputedStyle(element).fontWeight || 'normal';
        const fontSize = getComputedStyle(element).fontSize || '16px';
        const fontFamily = getComputedStyle(element).fontFamily || 'Arial';
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }

    /******************** HTML ELEMENTS ********************/

    /** Finds and returns parent of 'element' with a specific CSS key, value */
    static parentElementWithCSS(element, cssKey, cssValueOrArrayOfPossibleValues) {
        const values = (Array.isArray(cssValueOrArrayOfPossibleValues)) ? cssValueOrArrayOfPossibleValues : [ cssValueOrArrayOfPossibleValues ];
        cssKey = cssKey.replace(/([A-Z])/g, "-$1").toLowerCase(); // sanitize key
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            const defaultView = (parent.ownerDocument || document).defaultView;
            const computed = defaultView.getComputedStyle(parent, null);
            const property = computed.getPropertyValue(cssKey);
            if (property) {
                for (let i = 0; i < values.length; i++) {
                    const cssValue = values[i];
                    if (property == cssValue) return parent;
                }
            }
            parent = parent.parentElement;
        }
        return document.body;
    }

    /******************** MOUSE CURSOR ********************/

    static setCursor(cursor = '') {
        if (cursor === '') {
            document.body.style.cursor = '';
            document.body.classList.remove('suey-cursor-override');
        } else {
            document.body.style.cursor = cursor;
            document.body.classList.add('suey-cursor-override');
        }
    }

    /******************** SIZE PARSING ********************/

    static parseSize(size) {
        if (typeof size === 'string') {
            if (size.includes('%') ||
                size.includes('px') || size.includes('em') || size.includes('rem') ||
                size.includes('ch') || size.includes('ex') || size.includes('cap') ||
                size.includes('vw') || size.includes('vh') || size.includes('vmin') || size.includes('vmax'))
            {
                return size;
            } else {
                return parseFloat(size).toFixed(2) + 'px';
            }
        } else if (Number.isNaN(size)) {
            return '0';
        } else {
            return parseFloat(size).toFixed(2) + 'px';
        }
    }

    /** Returns input units from 'px' to 'em' */
    static toEm(pixels, element = document.body) {
        if (element && element.isElement) element = element.dom;
        const parsedSize = Css.parseSize(pixels);
        if (parsedSize.includes('px')) {
            return ((parseFloat(parsedSize) / 10.0) / Css.guiScale(element)) + 'em';
        } else if (parsedSize.includes('em')) {
            return parsedSize;
        }
        console.warn(`Css.toEm(): Could not convert to em, unit passed in: ${pixels}`);
        return size;
    }

    /** Returns input units to converted pixels string ending in 'px' */
    static toPx(size, element = document.body, dimension = 'w' /* or 'h' (for percentage) */) {
        if (element && element.isElement) element = element.dom;
        const parsedSize = Css.parseSize(size);
        if (parsedSize.includes('%')) {
            if (element) {
                const parent = Css.parentElementWithCSS(element, 'position', [ 'relative', 'absolute' ]);
                if (parent) {
                    if (dimension === 'w') return (parseFloat(size) * 0.01 * parent.offsetWidth) + 'px';
                    else return (parseFloat(size) * 0.01 * parent.offsetHeight) + 'px';
                }
            }
        } else if (parsedSize.includes('px')) {
            return parsedSize;
        } else if (parsedSize.includes('rem')) {
            return parseInt((parseFloat(size) * 10.0)) + 'px';
        } else if (parsedSize.includes('em')) {
            return parseInt((parseFloat(size) * 10.0 * Css.guiScale(element))) + 'px';
        }
        console.warn(`Css.toPx(): Could not convert to pixels, unit passed in: ${size}`);
        return parseInt(parsedSize) + 'px';
    }

}

export { Css };
