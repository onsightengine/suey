/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/suey
 * @version     v0.1.20
 */
const IMAGE_CHECK = '../../files/gui/check.svg';
const IMAGE_CLOSE = '../../files/gui/close.svg';
const IMAGE_EMPTY = '../../files/gui/empty.svg';
const IMAGE_EXPAND = '../../files/gui/expand.svg';
const GRID_SIZE = 25;
const TOOLTIP_Y_OFFSET = '0.3em';
const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
};
const THEMES = {
    CLASSIC:            0x0088cc,
    STEEL:              0x00c8c3,
    NAVY:               0x1a48cf,
    GRAPE:              0x960ef4,
    FLAMINGO:           0xff13ed,
    RUST:               0xaf1c19,
    CARROT:             0xfe7700,
    COFFEE:             0xb16f1b,
    GOLDEN:             0xd1d855,
    EMERALD:            0x1aca22,
    RANDOM:             -1,
};
const TRAIT = {
    SHADOW:             'shadow',
    DARKNESS:           'darkness',
    BACKGROUND_DARK:    'background-dark',
    BACKGROUND_LIGHT:   'background-light',
    BUTTON_DARK:        'button-dark',
    BUTTON_LIGHT:       'button-light',
    BLACKLIGHT:         'blacklight',
    DARKLIGHT:          'darklight',
    MIDLIGHT:           'midlight',
    HIGHLIGHT:          'highlight',
    TEXT_DARK:          'text-dark',
    TEXT:               'text',
    TEXT_LIGHT:         'text-light',
    ICON_DARK:          'icon-dark',
    ICON:               'icon',
    ICON_LIGHT:         'icon-light',
    COMPLEMENT:         'complement',
    TRIADIC1:           'triadic1',
    TRIADIC2:           'triadic2',
    TRIADIC3:           'triadic3',
    TRIADIC4:           'triadic4',
};
const RESIZERS = {
    TOP:            'top',
    BOTTOM:         'bottom',
    LEFT:           'left',
    RIGHT:          'right',
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};
const GRAPH_LINE_TYPES = {
    STRAIGHT:   'straight',
    CURVE:      'curve',
    ZIGZAG:     'zigzag',
};
const GRAPH_GRID_TYPES = {
    LINES:      'lines',
    DOTS:       'dots',
};
const NODE_TYPES = {
    INPUT:      'input',
    OUTPUT:     'output',
};

class Css {
    static getVariable(variable, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        return getComputedStyle(element).getPropertyValue(variable);
    }
    static setVariable(variable, valueAsString, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        element.style.setProperty(variable, valueAsString);
    }
    static baseSize() {
        return parseFloat(getComputedStyle(document.querySelector(':root')).fontSize);
    }
    static fontSize(element = document.body) {
        return parseFloat(getComputedStyle(element).fontSize);
    }
    static guiScale(element = document.body) {
        return Css.fontSize(element) / Css.baseSize();
    }
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
    static parentElementWithCSS(element, cssKey, cssValueOrArrayOfPossibleValues) {
        const values = (Array.isArray(cssValueOrArrayOfPossibleValues)) ? cssValueOrArrayOfPossibleValues : [ cssValueOrArrayOfPossibleValues ];
        cssKey = cssKey.replace(/([A-Z])/g, "-$1").toLowerCase();
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
        return undefined;
    }
    static parseSize(size) {
        if (typeof size === 'string') {
            if (size.includes('%') ||
                size.includes('px') || size.includes('em') || size.includes('rem') ||
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
    static toPx(size, element = document.body, dimension = 'w' ) {
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
        console.warn(`Css.toPx: Could not convert to pixels, unit passed in: ${size}`);
        return parseInt(parsedSize) + 'px';
    }
}

const EDGE_SPACE = 4;
const ALIGN = {
    LEFT:       'left',
    CENTER:     'center',
    MIDDLE:     'center',
    RIGHT:      'right',
};
const OVERFLOW = {
    LEFT:       'left',
    RIGHT:      'right',
};
const POSITION = {
    OVER:       'over',
    UNDER:      'under',
};
class Popper {
    static getLeft(dom) { return dom.getBoundingClientRect().left; }
    static getTop(dom) { return dom.getBoundingClientRect().top; }
    static getWidth(dom) { return dom.offsetWidth; }
    static getHeight(dom) { return dom.offsetHeight; }
    static popOver(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.OVER, align, offsetX, offsetY, overflow);
    }
    static popUnder(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.UNDER, align, offsetX, offsetY, overflow);
    }
    static popOverUnder(dom, parent, overUnder = POSITION.UNDER, align = ALIGN.LEFT,
                        offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        let maxRight = window.innerWidth - EDGE_SPACE;
        let maxBottom = window.innerHeight - EDGE_SPACE;
        offsetX = (offsetX) ? parseInt(Css.toPx(offsetX), 10) : 0;
        offsetY = (offsetY) ? parseInt(Css.toPx(offsetY), 10) : 0;
        let desiredLeft = Popper.getLeft(parent) + offsetX;
        if (align === ALIGN.CENTER) {
            let offset = Popper.getLeft(parent) + ((Popper.getWidth(parent) - Popper.getWidth(dom)) / 2.0);
            desiredLeft = offset + offsetX;
        } else if (align === ALIGN.RIGHT) {
            let offset = Popper.getLeft(parent) + (Popper.getWidth(parent) - Popper.getWidth(dom));
            desiredLeft = offset + offsetX;
        }
        if (overflow === OVERFLOW.LEFT) {
            maxRight = Popper.getLeft(parent) + Popper.getWidth(parent);
        }
        let rightSide = desiredLeft + Popper.getWidth(dom);
        if (rightSide > maxRight) desiredLeft -= (rightSide - maxRight);
        if (desiredLeft < EDGE_SPACE) desiredLeft = EDGE_SPACE;
        let underTop = Popper.getTop(parent) + Popper.getHeight(parent) + offsetY;
        let overTop = Popper.getTop(parent) - Popper.getHeight(dom) - offsetY;
        let bottomSide = underTop + Popper.getHeight(dom);
        if (bottomSide > maxBottom) overUnder = POSITION.OVER;
        if (overTop < EDGE_SPACE) overUnder = POSITION.UNDER;
        let desiredTop = (overUnder === POSITION.UNDER) ? underTop : overTop;
        if (overUnder === POSITION.UNDER) {
            bottomSide = desiredTop + Popper.getHeight(dom);
            if (bottomSide > maxBottom) {
                desiredTop = maxBottom - Popper.getHeight(dom);
                if (desiredTop < EDGE_SPACE) desiredTop = EDGE_SPACE;
            }
        }
        dom.style.left = Css.toPx(desiredLeft);
        dom.style.top = Css.toPx(desiredTop);
        return overUnder;
    }
}

class Iris {
    static get NAMES() { return COLOR_KEYWORDS; }
    constructor(r = 0xffffff, g, b, format = '') {
        this.isColor = true;
        this.isIris = true;
        this.type = 'Color';
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.set(r, g, b, format);
    }
    copy(colorObject) {
        return this.set(colorObject);
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    set(r = 0, g, b, format = '') {
        if (arguments.length === 0) {
            return this.set(0);
        } else if (r === undefined || r === null || Number.isNaN(r)) {
            if (g || b) console.warn(`Iris: Passed some valid arguments, however 'r' was ${r}`);
        } else if (g === undefined && b === undefined) {
            let value = r;
            if (typeof value === 'number' || value === 0) { return this.setHex(value);
            } else if (value && isRGB(value)) { return this.setRGBF(value.r, value.g, value.b);
            } else if (value && isHSL(value)) { return this.setHSL(value.h * 360, value.s, value.l);
            } else if (value && isRYB(value)) { return this.setRYB(value.r * 255, value.y * 255, value.b * 255);
            } else if (Array.isArray(value) && value.length > 2) {
                const offset = (g != null && ! Number.isNaN(g) && g > 0) ? g : 0;
                return this.setRGBF(value[offset], value[offset + 1], value[offset + 2])
            } else if (typeof value === 'string') {
                return this.setStyle(value);
            }
        } else {
            switch (format) {
                case 'rgb': return this.setRGB(r, g, b);
                case 'hsl': return this.setHSL(r, g, b);
                case 'ryb': return this.setRYB(r, g, b);
                default:    return this.setRGBF(r, g, b);
            }
        }
        return this;
    }
    setColorName(style) {
        const hex = COLOR_KEYWORDS[ style.toLowerCase() ];
        if (hex) return this.setHex(hex);
        console.warn(`Iris: Unknown color ${style}`);
        return this;
    }
    setHex(hexColor) {
        hexColor = Math.floor(hexColor);
        if (hexColor > 0xffffff || hexColor < 0) {
            console.warn(`Iris: Given decimal outside of range, value was ${hexColor}`);
            hexColor = clamp(hexColor, 0, 0xffffff);
        }
        const r = (hexColor & 0xff0000) >> 16;
        const g = (hexColor & 0x00ff00) >>  8;
        const b = (hexColor & 0x0000ff);
        return this.setRGB(r, g, b);
    }
    setHSL(h, s, l) {
        h = keepInRange(h, 0, 360);
        s = clamp(s, 0, 1);
        l = clamp(l, 0, 1);
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - (c / 2);
        let r = 0, g = 0, b = 0;
        if                  (h <  60) { r = c; g = x; b = 0; }
        else if ( 60 <= h && h < 120) { r = x; g = c; b = 0; }
        else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
        else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
        else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
        else if (300 <= h)            { r = c; g = 0; b = x; }
        this.setRGBF(r + m, g + m, b + m);
        return this;
    }
    setRandom() {
        return this.setRGBF(Math.random(), Math.random(), Math.random());
    };
    setRGB(r, g, b) {
        return this.setRGBF(r / 255, g / 255, b / 255);
    }
    setRGBF(r, g, b) {
        this.r = clamp(r, 0, 1);
        this.g = clamp(g, 0, 1);
        this.b = clamp(b, 0, 1);
        return this;
    }
    setRYB(r, y, b) {
        const hexColor = cubicInterpolation(clamp(r, 0, 255), clamp(y, 0, 255), clamp(b, 0, 255), 255, CUBE.RYB_TO_RGB);
        return this.setHex(hexColor);
    }
    setScalar(scalar) {
        return this.setRGB(scalar, scalar, scalar);
    }
    setScalarF(scalar) {
        return this.setRGBF(scalar, scalar, scalar);
    }
    setStyle(style) {
        let m;
        if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
            let color;
            const name = m[1];
            const components = m[2];
            switch (name) {
                case 'rgb':
                case 'rgba':
                    if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const r = Math.min(255, parseInt(color[1], 10));
                        const g = Math.min(255, parseInt(color[2], 10));
                        const b = Math.min(255, parseInt(color[3], 10));
                        return this.setRGB(r, g, b);
                    }
                    if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const r = (Math.min(100, parseInt(color[1], 10)) / 100);
                        const g = (Math.min(100, parseInt(color[2], 10)) / 100);
                        const b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        return this.setRGBF(r, g, b);
                    }
                    break;
                case 'hsl':
                case 'hsla':
                    if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const h = parseFloat(color[1]);
                        const s = parseInt(color[2], 10) / 100;
                        const l = parseInt(color[3], 10) / 100;
                        return this.setHSL(h, s, l);
                    }
                    break;
            }
        } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
            const hex = m[1];
            const size = hex.length;
            if (size === 3) {
                const r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                const g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                const b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                return this.setRGB(r, g, b);
            } else if (size === 6) {
                const r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                const g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                const b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                return this.setRGB(r, g, b);
            }
        }
        if (style && style.length > 0) {
            return this.setColorName(style);
        }
        return this;
    }
    cssString(alpha ) {
        return ('rgb(' + this.rgbString(alpha) + ')');
    }
    hex() {
        return ((this.red() << 16) + (this.green() << 8) + this.blue());
    }
    hexString(inputColorData ){
        if (inputColorData) this.set(inputColorData);
        return Iris.hexString(this.hex());
    }
    static hexString(inputColorData = 0x000000){
        _temp.set(inputColorData);
        return '#' + ('000000' + ((_temp.hex()) >>> 0).toString(16)).slice(-6);
    }
    static randomHex() {
        return _random.setRandom().hex();
    }
    rgbString(alpha) {
        const rgb = this.red() + ', ' + this.green() + ', ' + this.blue();
        return ((alpha !== undefined && alpha !== null) ? String(rgb + ', ' + alpha) : rgb);
    }
    toJSON() {
        return this.hex();
    }
    getHSL(target) {
        if (target && isHSL(target)) {
            target.h = hueF(this.hex());
            target.s = saturation(this.hex());
            target.l = lightness(this.hex());
        } else {
            return { h: hueF(this.hex()), s: saturation(this.hex()), l: lightness(this.hex()) };
        }
    }
    getRGB(target) {
        if (target && isHSL(target)) {
            target.r = this.r;
            target.g = this.g;
            target.b = this.b;
        } else {
            return { r: this.r, g: this.g, b: this.b };
        }
    }
    getRYB(target) {
        let rybAsHex = cubicInterpolation(this.r, this.g, this.b, 1.0, CUBE.RGB_TO_RYB);
        if (target && isRYB(target)) {
            target.r = redF(rybAsHex);
            target.y = greenF(rybAsHex);
            target.b = blueF(rybAsHex);
            return target;
        }
        return {
            r: redF(rybAsHex),
            y: greenF(rybAsHex),
            b: blueF(rybAsHex)
        };
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;
        return array;
    }
    red() { return clamp(Math.floor(this.r * 255), 0, 255); }
    green() { return clamp(Math.floor(this.g * 255), 0, 255); }
    blue() { return clamp(Math.floor(this.b * 255), 0, 255); }
    redF() { return this.r; }
    greenF() { return this.g; }
    blueF() { return this.b; }
    hue() { return hue(this.hex()); }
    saturation() { return saturation(this.hex()); }
    lightness() { return lightness(this.hex()); }
    hueF() { return hueF(this.hex()); }
    hueRYB() {
        for (let i = 1; i < RYB_OFFSET.length; i++) {
            if (RYB_OFFSET[i] > this.hue()) return i - 2;
        }
    }
    add(color) {
        if (! color.isColor) console.warn(`Iris: add() was not called with a 'Color' object`);
        return this.setRGBF(this.r + color.r, this.g + color.g, this.b + color.b);
    }
    addScalar(scalar) {
        return this.setRGB(this.red() + scalar, this.green() + scalar, this.blue() + scalar);
    }
    addScalarF(scalar) {
        return this.setRGBF(this.r + scalar, this.g + scalar, this.b + scalar);
    }
    brighten(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex());
        l = l + ((1.0 - l) * amount);
        this.setHSL(h, s, l);
        return this;
    }
    darken(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex()) * amount;
        return this.setHSL(h, s, l);
    }
    greyscale(percent = 1.0, format = 'luminosity') { return this.grayscale(percent, format) }
    grayscale(percent = 1.0, format = 'luminosity') {
        let gray = 0;
        switch (format) {
            case 'luminosity':
                gray = (this.r * 0.21) + (this.g * 0.72) + (this.b * 0.07);
            case 'average':
            default:
                gray = (this.r + this.g + this.b) / 3;
        }
        percent = clamp(percent, 0, 1);
        const r = (this.r * (1.0 - percent)) + (percent * gray);
        const g = (this.g * (1.0 - percent)) + (percent * gray);
        const b = (this.b * (1.0 - percent)) + (percent * gray);
        return this.setRGBF(r, g, b);
    }
    hslOffset(h, s, l) {
        return this.setHSL(this.hue() + h, this.saturation() + s, this.lightness() + l);
    }
    mix(color, percent = 0.5) {
        if (! color.isColor) console.warn(`Iris: mix() was not called with a 'Color' object`);
        percent = clamp(percent, 0, 1);
        const r = (this.r * (1.0 - percent)) + (percent * color.r);
        const g = (this.g * (1.0 - percent)) + (percent * color.g);
        const b = (this.b * (1.0 - percent)) + (percent * color.b);
        return this.setRGBF(r, g, b);
    }
    multiply(color) {
        if (! color.isColor) console.warn(`Iris: multiply() was not called with a 'Color' object`);
        return this.setRGBF(this.r * color.r, this.g * color.g, this.b * color.b);
    }
    multiplyScalar(scalar) {
        return this.setRGBF(this.r * scalar, this.g * scalar, this.b * scalar);
    }
    rgbComplementary() {
        return this.rgbRotateHue(180);
    }
    rgbRotateHue(degrees = 90) {
        const newHue = keepInRange(this.hue() + degrees);
        return this.setHSL(newHue, this.saturation(), this.lightness());
    }
    rybAdjust() {
        return this.setHSL(hue(matchSpectrum(this.hue(), SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    rybComplementary() {
        return this.rybRotateHue(180);
    }
    rybRotateHue(degrees = 90) {
        const newHue = keepInRange(this.hueRYB() + degrees);
        return this.setHSL(hue(matchSpectrum(newHue, SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    subtract(color) {
        if (! color.isColor) console.warn(`Iris: subtract() was not called with a 'Color' object`);
        return this.setRGBF(this.r - color.r, this.g - color.g, this.b - color.b);
    }
    equals(color) {
        if (! color.isColor) console.warn(`Iris: equals() was not called with a 'Color' object`);
        return (fuzzy(this.r, color.r) && fuzzy(this.g, color.g) && fuzzy(this.b, color.b));
    }
    isEqual(color) {
        return this.equals(color);
    }
    isDark() {
        const h = this.hue();
        const l = this.lightness();
        return ((l < 0.60 && (h >= 210 || h <= 27)) || (l <= 0.32));
    }
    isLight() {
        return (! this.isDark());
    }
}
function isRGB(object) { return (object.r !== undefined && object.g !== undefined && object.b !== undefined); }
function isHSL(object) { return (object.h !== undefined && object.s !== undefined && object.l !== undefined); }
function isRYB(object) { return (object.r !== undefined && object.y !== undefined && object.b !== undefined); }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function red(hexColor) { return clamp((hexColor & 0xff0000) >> 16, 0, 255); }
function green(hexColor) { return clamp((hexColor & 0x00ff00) >> 8, 0, 255); }
function blue(hexColor) { return clamp((hexColor & 0x0000ff), 0, 255); }
function redF(hexColor) { return red(hexColor) / 255.0; }
function greenF(hexColor) { return green(hexColor) / 255.0; }
function blueF(hexColor) { return blue(hexColor) / 255.0; }
function hue(hexColor) { return hsl(hexColor, 'h'); }
function hueF(hexColor) { return hue(hexColor) / 360; }
function saturation(hexColor) { return hsl(hexColor, 's'); }
function lightness(hexColor) { return hsl(hexColor, 'l'); }
function fuzzy(a, b, tolerance = 0.0015) { return ((a < (b + tolerance)) && (a > (b - tolerance))); }
function keepInRange(value, min = 0, max = 360) {
    while (value >= max) value -= (max - min);
    while (value <  min) value += (max - min);
    return value;
}
let _hslHex, _hslH, _hslS, _hslL;
function hsl(hexColor, channel = 'h') {
    if (hexColor !== _hslHex) {
        if (hexColor === undefined || hexColor === null) return 0;
        const r = redF(hexColor), g = greenF(hexColor), b = blueF(hexColor);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const delta = max - min;
        _hslL = (max + min) / 2;
        if (delta === 0) {
            _hslH = _hslS = 0;
        } else {
            _hslS = (_hslL <= 0.5) ? (delta / (max + min)) : (delta / (2 - max - min));
            switch (max) {
                case r: _hslH = (g - b) / delta + (g < b ? 6 : 0); break;
                case g: _hslH = (b - r) / delta + 2; break;
                case b: _hslH = (r - g) / delta + 4; break;
            }
            _hslH = Math.round(_hslH * 60);
            if (_hslH < 0) _hslH += 360;
        }
        _hslHex = hexColor;
    }
    switch (channel) {
        case 'h': return _hslH;
        case 's': return _hslS;
        case 'l': return _hslL;
        default: console.warn(`Iris: Unknown channel (${channel}) requested in hsl()`);
    }
    return 0;
}
const _interpolate = new Iris();
const _mix1 = new Iris();
const _mix2 = new Iris();
const _random = new Iris();
const _temp = new Iris();
function matchSpectrum(matchHue, spectrum = SPECTRUM.RYB) {
    let colorDegrees = 360 / spectrum.length;
    let degreeCount = colorDegrees;
    let stopCount = 0;
    for (let i = 0; i < spectrum.length; i++) {
        if (matchHue < degreeCount) {
            let percent = (degreeCount - matchHue) / colorDegrees;
            _mix1.set(spectrum[stopCount + 1]);
            return _mix1.mix(_mix2.set(spectrum[stopCount]), percent).hex();
        } else {
            degreeCount = degreeCount + colorDegrees;
            stopCount = stopCount + 1;
        }
    }
}
function cubicInterpolation(v1, v2, v3, scale = 255, table = CUBE.RYB_TO_RGB) {
    v1 = clamp(v1 / scale, 0, 1);
    v2 = clamp(v2 / scale, 0, 1);
    v3 = clamp(v3 / scale, 0, 1);
    const f0 = table[0], f1 = table[1], f2 = table[2], f3 = table[3];
    const f4 = table[4], f5 = table[5], f6 = table[6], f7 = table[7];
    const i1 = 1.0 - v1;
    const i2 = 1.0 - v2;
    const i3 = 1.0 - v3;
    const c0 = i1 * i2 * i3;
    const c1 = i1 * i2 * v3;
    const c2 = i1 * v2 * i3;
    const c3 = v1 * i2 * i3;
    const c4 = i1 * v2 * v3;
    const c5 = v1 * i2 * v3;
    const c6 = v1 * v2 * i3;
    const v7 = v1 * v2 * v3;
    const o1 = c0*f0[0] + c1*f1[0] + c2*f2[0] + c3*f3[0] + c4*f4[0] + c5*f5[0] + c6*f6[0] + v7*f7[0];
    const o2 = c0*f0[1] + c1*f1[1] + c2*f2[1] + c3*f3[1] + c4*f4[1] + c5*f5[1] + c6*f6[1] + v7*f7[1];
    const o3 = c0*f0[2] + c1*f1[2] + c2*f2[2] + c3*f3[2] + c4*f4[2] + c5*f5[2] + c6*f6[2] + v7*f7[2];
    return _interpolate.set(o1, o2, o3, 'gl').hex();
}
const CUBE = {
    RYB_TO_RGB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.163, 0.373, 0.600 ],
        [ 1.000, 1.000, 0.000 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.660, 0.200 ],
        [ 0.500, 0.000, 0.500 ],
        [ 1.000, 0.500, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ],
    RGB_TO_RYB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.000, 0.000, 1.000 ],
        [ 0.000, 1.000, 0.483 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.053, 0.210 ],
        [ 0.309, 0.000, 0.469 ],
        [ 0.000, 1.000, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ]
};
const SPECTRUM = {
    RYB: [
        0xFF0000, 0xFF4900, 0xFF7400, 0xFF9200, 0xFFAA00, 0xFFBF00, 0xFFD300, 0xFFE800,
        0xFFFF00, 0xCCF600, 0x9FEE00, 0x67E300, 0x00CC00, 0x00AF64, 0x009999, 0x0B61A4,
        0x1240AB, 0x1B1BB3, 0x3914AF, 0x530FAD, 0x7109AA, 0xA600A6, 0xCD0074, 0xE40045,
        0xFF0000
    ]
};
const RYB_OFFSET = [
    0,   1,   2,   3,   5,   6,   7,   8,   9,  10,  11,  13,  14,  15,  16,  17,  18,  19,  19,  20,
    21,  21,  22,  23,  23,  24,  25,  25,  26,  27,  27,  28,  28,  29,  29,  30,  30,  31,  31,  32,
    32,  32,  33,  33,  34,  34,  35,  35,  35,  36,  36,  37,  37,  37,  38,  38,  38,  39,  39,  40,
    40,  40,  41,  41,  41,  42,  42,  42,  43,  43,  43,  44,  44,  44,  45,  45,  45,  46,  46,  46,
    47,  47,  47,  47,  48,  48,  48,  49,  49,  49,  50,  50,  50,  51,  51,  51,  52,  52,  52,  53,
    53,  53,  54,  54,  54,  55,  55,  55,  56,  56,  56,  57,  57,  57,  58,  58,  59,  59,  59,  60,
    60,  61,  61,  62,  63,  63,  64,  65,  65,  66,  67,  68,  68,  69,  70,  70,  71,  72,  72,  73,
    73,  74,  75,  75,  76,  77,  77,  78,  79,  79,  80,  81,  82,  82,  83,  84,  85,  86,  87,  88,
    88,  89,  90,  91,  92,  93,  95,  96,  98, 100, 102, 104, 105, 107, 109, 111, 113, 115, 116, 118,
    120, 122, 125, 127, 129, 131, 134, 136, 138, 141, 143, 145, 147, 150, 152, 154, 156, 158, 159, 161,
    163, 165, 166, 168, 170, 171, 173, 175, 177, 178, 180, 182, 184, 185, 187, 189, 191, 192, 194, 196,
    198, 199, 201, 203, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
    222, 223, 224, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243, 244,
    245, 246, 247, 248, 249, 250, 251, 251, 252, 253, 254, 255, 256, 257, 257, 258, 259, 260, 260, 261,
    262, 263, 264, 264, 265, 266, 267, 268, 268, 269, 270, 271, 272, 273, 274, 274, 275, 276, 277, 278,
    279, 280, 282, 283, 284, 286, 287, 289, 290, 292, 293, 294, 296, 297, 299, 300, 302, 303, 305, 307,
    309, 310, 312, 314, 316, 317, 319, 321, 323, 324, 326, 327, 328, 329, 330, 331, 332, 333, 334, 336,
    337, 338, 339, 340, 341, 342, 343, 344, 345, 347, 348, 349, 350, 352, 353, 354, 355, 356, 358, 359,
    999
];
const COLOR_KEYWORDS = {
    'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4,
    'azure': 0xF0FFFF, 'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD,
    'blue': 0x0000FF, 'blueviolet': 0x8A2BE2, 'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0,
    'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50, 'cornflowerblue': 0x6495ED,
    'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
    'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9,
    'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B, 'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00,
    'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
    'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1,
    'darkviolet': 0x9400D3, 'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969,
    'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222, 'floralwhite': 0xFFFAF0,
    'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF,
    'gold': 0xFFD700, 'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F,
    'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4, 'indianred': 0xCD5C5C, 'indigo': 0x4B0082,
    'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
    'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF,
    'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3, 'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3,
    'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
    'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0,
    'lime': 0x00FF00, 'limegreen': 0x32CD32, 'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000,
    'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3, 'mediumpurple': 0x9370DB,
    'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A,
    'mediumturquoise': 0x48D1CC, 'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA,
    'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD, 'navy': 0x000080, 'oldlace': 0xFDF5E6,
    'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
    'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093,
    'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9, 'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD,
    'powderblue': 0xB0E0E6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xFF0000,
    'rosybrown': 0xBC8F8F, 'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072,
    'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE, 'sienna': 0xA0522D, 'silver': 0xC0C0C0,
    'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
    'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8,
    'tomato': 0xFF6347, 'turquoise': 0x40E0D0, 'transparent': 0x000000, 'violet': 0xEE82EE, 'wheat': 0xF5DEB3,
    'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32
};

const _clr$1 = new Iris();
const _icon = new Iris();
const _icon_light = new Iris();
const _icon_dark = new Iris();
const _complement = new Iris();
const _triadic1 = new Iris();
const _triadic2 = new Iris();
const _triadic3 = new Iris();
const _triadic4 = new Iris();
const DEFAULT_CLR = 0x0088cc;
let _background = BACKGROUNDS.DARK;
let _color$3 = DEFAULT_CLR;
let _tint = 0.0;
let _saturation = 0.0;
class ColorScheme {
    static changeBackground(background) {
        if (background === undefined || background === null) return;
        _background = background;
        ColorScheme.updateCSS();
    }
    static changeColor(color, tint, saturation) {
        if (color === undefined || color === null) return;
        _color$3 = _clr$1.set(color).hex();
        _tint = (tint !== undefined) ? tint : _tint;
        _saturation = (saturation !== undefined) ? saturation : _saturation;
        _icon.set(color);
        _icon_light.copy(_icon).brighten();
        _icon_dark.copy(_icon).darken();
        _complement.copy(_icon).rybRotateHue(180).brighten(0.2);
        _triadic1.copy(_icon).rybRotateHue(120).brighten(0.2);
        _triadic2.copy(_complement).rybRotateHue(120).brighten(0.2);
        _triadic3.copy(_icon).rybRotateHue(90).brighten(0.2);
        _triadic4.copy(_complement).rybRotateHue(90).brighten(0.2);
        ColorScheme.updateCSS();
    }
    static updateCSS() {
        Css.setVariable('--shadow',             _clr$1.set(ColorScheme.color(TRAIT.SHADOW)).rgbString());
        Css.setVariable('--darkness',           _clr$1.set(ColorScheme.color(TRAIT.DARKNESS)).rgbString());
        Css.setVariable('--background-dark',    _clr$1.set(ColorScheme.color(TRAIT.BACKGROUND_DARK)).rgbString());
        Css.setVariable('--background-light',   _clr$1.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).rgbString());
        Css.setVariable('--button-dark',        _clr$1.set(ColorScheme.color(TRAIT.BUTTON_DARK)).rgbString());
        Css.setVariable('--button-light',       _clr$1.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).rgbString());
        Css.setVariable('--text-dark',          _clr$1.set(ColorScheme.color(TRAIT.TEXT_DARK)).rgbString());
        Css.setVariable('--text',               _clr$1.set(ColorScheme.color(TRAIT.TEXT)).rgbString());
        Css.setVariable('--text-light',         _clr$1.set(ColorScheme.color(TRAIT.TEXT_LIGHT)).rgbString());
        Css.setVariable('--blacklight',         _clr$1.set(ColorScheme.color(TRAIT.BLACKLIGHT)).rgbString());
        Css.setVariable('--darklight',          _clr$1.set(ColorScheme.color(TRAIT.DARKLIGHT)).rgbString());
        Css.setVariable('--midlight',           _clr$1.set(ColorScheme.color(TRAIT.MIDLIGHT)).rgbString());
        Css.setVariable('--highlight',          _clr$1.set(ColorScheme.color(TRAIT.HIGHLIGHT)).rgbString());
        Css.setVariable('--icon-dark',          _clr$1.set(ColorScheme.color(TRAIT.ICON_DARK)).rgbString());
        Css.setVariable('--icon',               _clr$1.set(ColorScheme.color(TRAIT.ICON)).rgbString());
        Css.setVariable('--icon-light',         _clr$1.set(ColorScheme.color(TRAIT.ICON_LIGHT)).rgbString());
        Css.setVariable('--complement',         _clr$1.set(ColorScheme.color(TRAIT.COMPLEMENT)).rgbString());
        Css.setVariable('--triadic1',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC1)).rgbString());
        Css.setVariable('--triadic2',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC2)).rgbString());
        Css.setVariable('--triadic3',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC3)).rgbString());
        Css.setVariable('--triadic4',           _clr$1.set(ColorScheme.color(TRAIT.TRIADIC4)).rgbString());
        Css.setVariable('--bright',             (_background == BACKGROUNDS.LIGHT) ? '0' : '1');
        const startHue = _clr$1.set(DEFAULT_CLR).hue();
        const newHue = _clr$1.set(ColorScheme.color(TRAIT.ICON, true )).hue();
        const diffHue = `${newHue - startHue + 30}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }
    static color(guiColor, ignoreSaturation = false) {
        _clr$1.set(0);
        let tint = _tint;
        let saturation = _saturation;
        let darkness = 0;
        let lightness = 0;
        switch (_background) {
            case BACKGROUNDS.DARK:      break;
            case BACKGROUNDS.MID:       tint *= 0.2;    lightness = 0.2;    break;
            case BACKGROUNDS.LIGHT:     break;
            case BACKGROUNDS.FADED:     tint *= 0.1;    lightness = 0.4;    break;
        }
        if (_background == BACKGROUNDS.LIGHT) {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$1.set(140, 140, 140, 'rgb'); break;
                case TRAIT.BACKGROUND_DARK:     _clr$1.set(180, 180, 180, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$1.set(190, 190, 190, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$1.set(200, 200, 200, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$1.set(210, 210, 210, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$1.set( 80,  80,  80, 'rgb'); break;
                case TRAIT.TEXT:                _clr$1.set( 50,  50,  50, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$1.set( 25,  25,  25, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr$1.set(255, 255, 255, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr$1.set(200, 200, 200, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr$1.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$1.set(  0,   0,   0, 'rgb'); break;
            }
        } else {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$1.set(  0,   0,   0, 'rgb'); tint = 0; break;
                case TRAIT.BACKGROUND_DARK:     _clr$1.set( 24,  24,  24, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$1.set( 32,  32,  32, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$1.set( 40,  40,  40, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$1.set( 60,  60,  60, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$1.set(100, 100, 100, 'rgb'); break;
                case TRAIT.TEXT:                _clr$1.set(190, 190, 190, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$1.set(225, 225, 225, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr$1.set(  0,   0,   0, 'rgb'); lightness = 0; break;
                case TRAIT.DARKLIGHT:           _clr$1.set(  8,   8,   8, 'rgb'); lightness = 0; break;
                case TRAIT.MIDLIGHT:            _clr$1.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$1.set(255, 255, 255, 'rgb'); break;
            }
            if (_background == BACKGROUNDS.MID && guiColor == TRAIT.DARKLIGHT) {
                _clr$1.set( 64,  64,  64, 'rgb');
            }
        }
        if (guiColor === TRAIT.DARKNESS) {
            switch (_background) {
                case BACKGROUNDS.DARK:      _clr$1.set(  0,   0,   0, 'rgb');     break;
                case BACKGROUNDS.MID:       _clr$1.set( 64,  64,  64, 'rgb');     break;
                case BACKGROUNDS.LIGHT:     _clr$1.set(128, 128, 128, 'rgb');     break;
                case BACKGROUNDS.FADED:     _clr$1.set(  0,   0,   0, 'rgb');     break;
            }
        }
        switch (guiColor) {
            case TRAIT.ICON_DARK:   _clr$1.copy(_icon_dark);  break;
            case TRAIT.ICON:        _clr$1.copy(_icon);       break;
            case TRAIT.ICON_LIGHT:  _clr$1.copy(_icon_light); break;
            case TRAIT.COMPLEMENT:  _clr$1.copy(_complement); break;
            case TRAIT.TRIADIC1:    _clr$1.copy(_triadic1);   break;
            case TRAIT.TRIADIC2:    _clr$1.copy(_triadic2);   break;
            case TRAIT.TRIADIC3:    _clr$1.copy(_triadic3);   break;
            case TRAIT.TRIADIC4:    _clr$1.copy(_triadic4);   break;
        }
        switch (guiColor) {
            case TRAIT.COMPLEMENT:
            case TRAIT.TRIADIC1:
            case TRAIT.TRIADIC2:
            case TRAIT.TRIADIC3:
            case TRAIT.TRIADIC4:
                saturation = 0.0;
            case TRAIT.ICON_DARK:
            case TRAIT.ICON:
            case TRAIT.ICON_LIGHT:
                tint = 0;
                lightness = 0;
                break;
        }
        if (tint !== 0) _clr$1.mix(_icon, tint);
        if (lightness !== 0) _clr$1.brighten(lightness);
        if (darkness !== 0) _clr$1.darken(darkness);
        if (saturation !== 0 && !ignoreSaturation) _clr$1.hslOffset(0, saturation, 0);
        return _clr$1.hex();
    }
}

class SignalBinding {
    active = true;
    params = null;
    onceOnly = false;
    constructor(signal, listener, onceOnly, priority = 0) {
        this.listener = listener;
        this.onceOnly = onceOnly;
        this.signal = signal;
        this.priority = priority;
    }
    execute(paramsArr) {
        let handlerReturn;
        let params;
        if (this.active && !!this.listener) {
            params = this.params ? this.params.concat(paramsArr) : paramsArr;
            handlerReturn = this.listener.apply(null, params);
            if (this.onceOnly) this.detach();
        }
        return handlerReturn;
    }
    detach() {
        return this.isBound() ? this.signal.remove(this.listener) : null;
    }
    isBound() {
        return (!!this.signal && !!this.listener);
    }
    isOnce() {
        return this.onceOnly;
    }
    getListener() {
        return this.listener;
    }
    getSignal() {
        return this.signal;
    }
    destroy() {
        delete this.signal;
        delete this.listener;
    }
    toString() {
        return '[SignalBinding onceOnly:' + this.onceOnly +', isBound:'+ this.isBound() +', active:' + this.active + ']';
    }
}
class Signal {
    VERSION = '1.0.2';
    active = true;
    memorize = false;
    shouldPropagate = true;
    constructor() {
        this._bindings = [];
        this._prevParams = null;
    }
    #registerListener(listener, onceOnly, priority) {
        let prevIndex = this.#indexOfListener(listener);
        let binding;
        if (prevIndex !== -1) {
            binding = this._bindings[prevIndex];
            if (binding.isOnce() !== onceOnly) {
                throw new Error('You cannot add' + (onceOnly ? '' : 'Once') +'() then add'+ (!onceOnly ? '' : 'Once') +'() the same listener without removing the relationship first');
            }
        } else {
            binding = new SignalBinding(this, listener, onceOnly, priority);
            let n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
            this._bindings.splice(n + 1, 0, binding);
        }
        if (this.memorize && this._prevParams){
            binding.execute(this._prevParams);
        }
        return binding;
    }
    #indexOfListener(listener) {
        let n = this._bindings.length;
        let cur;
        while (n--) {
            cur = this._bindings[n];
            if (cur.listener === listener) return n;
        }
        return -1;
    }
    has(listener) {
        return this.#indexOfListener(listener) !== -1;
    }
    add(listener, priority) {
        validateListener(listener, 'add');
        return this.#registerListener(listener, false, priority);
    }
    addOnce(listener, priority) {
        validateListener(listener, 'addOnce');
        return this.#registerListener(listener, true, priority);
    }
    remove(listener) {
        validateListener(listener, 'remove');
        const index = this.#indexOfListener(listener);
        if (index !== -1) {
            this._bindings[index].destroy();
            this._bindings.splice(index, 1);
        }
        return listener;
    }
    removeAll() {
        let n = this._bindings.length;
        while (n--) this._bindings[n].destroy();
        this._bindings.length = 0;
    }
    getNumListeners() {
        return this._bindings.length;
    }
    halt() {
        this.shouldPropagate = false;
    }
    dispatch() {
        if (!this.active) return;
        let paramsArr = [...arguments];
        let n = this._bindings.length;
        if (this.memorize) this._prevParams = paramsArr;
        if (!n) return;
        const bindings = [...this._bindings];
        this.shouldPropagate = true;
        do { n--; } while (bindings[n] && this.shouldPropagate && bindings[n].execute(paramsArr) !== false);
    }
    forget() {
        this._prevParams = null;
    }
    dispose() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
    }
    toString() {
        return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
    }
}
function validateListener(listener, fnName) {
    if (typeof listener !== 'function') {
        throw new Error(`'listener' is a required param of ${fnName}() and should be a Function!`);
    }
}

class Element {
    constructor(dom) {
        const self = this;
        this.isElement = true;
        this.dom = dom;
        this.name = undefined;
        this.contents = function() { return self; };
        this.children = [];
        this.parent = undefined;
        this.slots = [];
        this.dom.addEventListener('destroy', function() {
            for (const slot of self.slots) {
                if (typeof slot.detach === 'function') slot.detach();
                if (typeof slot.destroy === 'function') slot.destroy();
            }
            self.slots.length = 0;
        }, { once: true });
    }
    destroy() {
        clearChildren(this, true );
        return this;
    }
    addSlot(slot) {
        if (slot instanceof SignalBinding) {
            this.slots.push(slot);
        } else {
            console.warn(`Element.addSlot(): '${this.name}' failed to add slot`, slot);
        }
    }
    add() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this.contents(), element);
        }
        return this;
    }
    addToSelf() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this, element);
        }
        return this;
    }
    clearContents() {
        clearChildren(this.contents(), false );
        return this;
    }
    remove() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            let removed = removeFromParent(this.contents(), element);
            if (!removed) removed = removeFromParent(this, element);
            if (!removed) {
            }
        }
        return this;
    }
    setClass(className) {
        this.dom.className = className;
        return this;
    }
    addClass() {
        for (let i = 0; i < arguments.length; i ++) {
            const argument = arguments[i];
            this.dom.classList.add(argument);
        }
        return this;
    }
    hasClass(className) {
        return this.dom.classList.contains(className);
    }
    hasClassWithString(substring) {
        substring = String(substring).toLowerCase();
        const classArray = [...this.dom.classList];
        for (let i = 0; i < classArray.length; i++) {
            const className = classArray[i];
            if (className.toLowerCase().includes(substring)) return true;
        }
        return false;
    }
    removeClass() {
        for (let i = 0; i < arguments.length; i ++) {
            const argument = arguments[i];
            this.dom.classList.remove(argument);
        }
        return this;
    }
    setId(id) {
        this.dom.id = id;
        if (this.name === undefined) this.name = id;
        return this;
    }
    getId() {
        return this.dom.id;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    getName() {
        return (this.name === undefined) ? 'No name' : this.name;
    }
    setAttribute(attrib, value) {
        this.dom.setAttribute(attrib, value);
    }
    setDisabled(value = true) {
        if (value) this.addClass('suey-disabled');
        else this.removeClass('suey-disabled');
        this.dom.disabled = value;
        return this;
    }
    selectable(allowSelection) {
        if (allowSelection) this.removeClass('suey-unselectable');
        else this.addClass('suey-unselectable');
        return this;
    }
    hide(event = true) {
        this.setStyle('display', 'none');
        if (event) this.dom.dispatchEvent(new Event('hidden'));
    }
    display(event = true) {
        this.setStyle('display', '');
        if (event) this.dom.dispatchEvent(new Event('displayed'));
    }
    isDisplayed() {
        return getComputedStyle(this.dom).display != 'none';
    }
    isHidden() {
        return getComputedStyle(this.dom).display == 'none';
    }
    allowFocus() {
        this.dom.tabIndex = 0;
    }
    focus() {
        this.dom.focus();
    }
    blur() {
        this.dom.blur();
    }
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }
    getTextContent() {
        return this.contents().dom.textContent;
    }
    setInnerHtml(value) {
        if (value === undefined || value === null) value = '';
        if (typeof this.contents().dom.setHTML === 'function') {
            this.contents().dom.setHTML(value);
        } else {
            this.contents().dom.innerHTML = value;
        }
        return this;
    }
    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }
    setStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.dom.style[style] = value;
        }
        return this;
    }
    setContentsStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.contents().dom.style[style] = value;
        }
        return this;
    }
    getLeft() {
        return this.dom.getBoundingClientRect().left;
    }
    getTop() {
        return this.dom.getBoundingClientRect().top;
    }
    getWidth() {
        return this.dom.getBoundingClientRect().width;
    }
    getHeight() {
        return this.dom.getBoundingClientRect().height;
    }
    traverse(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.children) {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].traverse(callback, true);
            }
        }
    }
}
function addToParent(parent, element) {
    if (!element) return;
    if (element.isElement) {
        parent.dom.appendChild(element.dom);
        let hasIt = false;
        for (const child of parent.children) {
            if (child.dom.isSameNode(element.dom)) {
                hasIt = true;
                break;
            }
        }
        if (!hasIt) parent.children.push(element);
        element.parent = parent;
    } else {
        try {
            parent.dom.appendChild(element);
        } catch (error) {
        }
    }
}
function clearElementChildren(suey) {
    for (let i = 0; i < suey.children.length; i++) {
        const child = suey.children[i];
        clearChildren(child, true );
    }
    suey.children.length = 0;
}
function clearDomChildren(dom) {
    if (!dom.children) return;
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        clearChildren(child, true );
        try { dom.removeChild(child); } catch (error) {  }
    }
}
function clearChildren(element, destroy = true) {
    if (!element) return;
    if (element.isElement) {
        clearElementChildren(element);
        clearDomChildren(element.dom);
        if (destroy && element.dom && element.dom.dispatchEvent) {
            element.dom.dispatchEvent(new Event('destroy'));
        }
    } else {
        clearDomChildren(element);
        if (destroy && element && element.dispatchEvent) {
            element.dispatchEvent(new Event('destroy'));
        }
    }
}
function removeFromParent(parent, element) {
    if (!parent) return;
    if (!element) return;
    if (element.isElement && parent.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                parent.children.splice(i, 1);
                element.parent = undefined;
            }
        }
    }
    clearChildren(element);
    try {
        if (parent.isElement) {
            parent.dom.removeChild((element.isElement) ? element.dom : element);
        } else {
            parent.removeChild((element.isElement) ? element.dom : element);
        }
        return true;
    } catch (error) {
        return false;
    }
}
const properties = [
    'display', 'color', 'opacity',
    'left', 'top', 'right', 'bottom', 'width', 'height',
];
properties.forEach(function(property) {
    const method = 'set' + property.substring(0, 1).toUpperCase() + property.substring(1, property.length);
    Element.prototype[method] = function(value) {
        this.setStyle(property, value);
        return this;
    };
});
Object.defineProperties(Element.prototype, {
    id: {
        get: function() {
            return this.getId();
        },
        set: function(value) {
            this.setId(value);
        }
    },
});
const events = [
    'Focus', 'Blur',
    'Change', 'Input', 'Wheel',
    'KeyUp', 'KeyDown',
    'Click', 'DblClick', 'ContextMenu',
    'PointerDown', 'PointerMove', 'PointerUp',
    'PointerEnter', 'PointerLeave', 'PointerOut', 'PointerOver', 'PointerCancel',
];
events.forEach(function(event) {
    const method = 'on' + event;
    Element.prototype[method] = function(callback) {
        const eventName = event.toLowerCase();
        if (typeof callback !== 'function') {
            console.warn(`${method} in ${this.name}: No callback function provided!`);
            return this;
        }
        const eventHandler = callback.bind(this);
        const dom = this.dom;
        dom.addEventListener(eventName, eventHandler);
        dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler), { once: true });
        return this;
    };
});

class Button extends Element {
    constructor(buttonText) {
        super(document.createElement('button'));
        const self = this;
        this.setClass('suey-button');
        this.dom.textContent = buttonText ?? ' ';
        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = ALIGN.LEFT;
        this.overflowMenu = OVERFLOW.RIGHT;
        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(isDisabled) { if (this.dom) this.dom.disabled = isDisabled; }
        });
        function onPointerDown(event) {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        }
        this.dom.addEventListener('pointerdown', onPointerDown);
        this.dom.addEventListener('destroy', function() {
            self.dom.removeEventListener('pointerdown', onPointerDown);
            if (self.attachedMenu) self.detachMenu();
        }, { once: true });
    }
    attachMenu(menuElement, popupStyle = false) {
        const self = this;
        if (popupStyle) menuElement.addClass('suey-popup-menu');
        function buttonPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            if (self.hasClass('suey-selected') === false) {
                self.addClass('suey-selected');
                popMenu();
                setTimeout(() => {
                    if (!self.dom) return;
                    menuElement.showMenu(self.dom, true );
                }, 0);
            }
            document.dispatchEvent(new Event('closemenu'));
        }
        function popMenu() {
            const popped = Popper.popUnder(menuElement.dom, self.dom, self.alignMenu, self.menuOffsetX, self.menuOffsetY, self.overflowMenu);
            menuElement.removeClass('suey-slide-up');
            menuElement.removeClass('suey-slide-down');
            menuElement.addClass((popped === POSITION.UNDER) ? 'suey-slide-down' : 'suey-slide-up');
        }
        if (menuElement.hasClass('suey-menu') === false) return this;
        this.addClass('suey-menu-button');
        this.attachedMenu = menuElement;
        document.body.appendChild(menuElement.dom);
        this.dom.addEventListener('pointerdown', buttonPointerDown);
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
        window.addEventListener('resize', popMenu);
        this.detachMenu = function() {
            if (self.hasClass('suey-menu-button') === false) return;
            self.removeClass('suey-menu-button');
            window.removeEventListener('resize', popMenu);
            self.dom.removeEventListener('pointerdown', buttonPointerDown);
            self.attachedMenu.destroy();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        };
    }
}

class Div extends Element {
    constructor(innerHtml) {
        super(document.createElement('div'));
        this.setInnerHtml(innerHtml);
    }
}

class Image extends Element {
    constructor(imageUrl, width = null, height = null, draggable = false) {
        const imageDom = document.createElement('img');
        imageDom.onerror = () => imageDom.style.visibility = 'hidden';
        if (!draggable) imageDom.ondragstart = () => { return false };
        if (width != null) imageDom.style.width = Css.parseSize(width);
        if (height != null) imageDom.style.height = Css.parseSize(height);
        super(imageDom);
        this.setClass('suey-image');
        this.setImage(imageUrl);
    }
    setImage(image) {
        if (typeof image === 'string' && image.toLowerCase().includes('<svg')) {
            const blob = new Blob([ image ], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            this.dom.src = url;
            this.dom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
        } else {
            this.dom.src = image;
        }
        return this;
    }
}

class VectorBox extends Div {
    constructor() {
        super();
        this.setClass('suey-vector-box');
        this.img = undefined;
        if (arguments.length === 0) return this.addImage(IMAGE_EMPTY);
        const images = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];
        for (const image of images) {
            this.addImage(image);
        }
    }
    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('suey-image')) return child;
        }
    }
    addImage(imageUrl = IMAGE_EMPTY) {
        const stretchX = '100%';
        const stretchY = '100%';
        const newImage = new Image(imageUrl, stretchX, stretchY, false );
        if (!this.img) this.img = newImage;
        this.add(newImage);
        return this;
    }
    enableDragging() {
        if (this.dom) this.dom.draggable = true;
        for (const child of this.contents().children) {
            if (child.isElement && child.dom) child.dom.ondragstart = () => {};
        }
        return this;
    }
    setImage(imageUrl) {
        return this.img.setImage(imageUrl);
    }
}

class ShadowBox extends Div {
    constructor() {
        super();
        this.setClass('suey-shadow-box');
        this.addClass('suey-drop-shadow');
        if (arguments.length === 0) return;
        const elements = Array.isArray(arguments[0]) ? arguments[0] : [...arguments];
        for (const element of elements) {
            this.add((element && element.isElement) ? element : new VectorBox(element));
        }
    }
    firstImage() {
        for (const child of this.contents().children) {
            if (!child || !child.isElement) continue;
            if (child.hasClass('suey-image') || child.hasClass('suey-vector-box')) return child;
        }
    }
    fullSize() {
        this.addClass('suey-full-size');
        return this;
    }
    dropShadow() {
        this.addClass('suey-drop-shadow');
        this.removeClass('suey-even-shadow');
        return this;
    }
    evenShadow() {
        this.removeClass('suey-drop-shadow');
        this.addClass('suey-even-shadow');
        return this;
    }
    noShadow() {
        this.removeClass('suey-drop-shadow');
        this.removeClass('suey-even-shadow');
        return this;
    }
}

const CLOSE_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    BOTH:       'both',
    NONE:       'none',
};
const CORNER_BUTTONS = {
    CLOSE:      'close',
    MAX:        'max',
};
const MOUSE_SLOP = 2;
class Interaction {
    static addCloseButton(element, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        Interaction.addCornerButton(CORNER_BUTTONS.CLOSE, element, closeSide, offset, scale);
    }
    static addMaxButton(element, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        Interaction.addCornerButton(CORNER_BUTTONS.MAX, element, closeSide, offset, scale);
    }
    static addCornerButton(type = CORNER_BUTTONS.CLOSE, element, closeSide, offset = 0, scale = 1.3) {
        if (!element || !element.isElement) {
            console.warn(`Interaction.addCornerButton: Missing element argument`);
            return undefined;
        }
        const button = new Button();
        button.setClass('suey-corner-button');
        button.addClass('suey-panel-button');
        let cornerImage, buttonTooltip, buttonOffset;
        switch (type) {
            case CORNER_BUTTONS.CLOSE:
                button.setStyle('background-color', '#e24c4b');
                cornerImage = IMAGE_CLOSE;
                buttonTooltip = 'Close Panel';
                buttonOffset = 0;
                break;
            case CORNER_BUTTONS.MAX:
                button.setStyle('background-color', '#2bc840');
                cornerImage = IMAGE_EXPAND;
                buttonTooltip = 'Toggle Panel';
                buttonOffset = 1.2;
                break;
        }
        const imageBox = new ShadowBox(cornerImage).evenShadow().fullSize().addClass('suey-corner-image');
        button.add(imageBox);
        button.dom.setAttribute('tooltip', buttonTooltip);
        button.setStyle('min-height', `${scale}em`, 'min-width', `${scale}em`);
        const sideways = `${0.8 - ((scale + 0.28571) / 2) + offset + (buttonOffset * scale)}em`;
        button.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);
        button.setStyle((closeSide === CLOSE_SIDES.LEFT) ? 'left' : 'right', sideways);
        if (closeSide === CLOSE_SIDES.BOTH) {
            let lastSide = CLOSE_SIDES.RIGHT;
            element.dom.addEventListener('pointermove', function(event) {
                const rect = element.dom.getBoundingClientRect();
                const middle = rect.left + (rect.width / 2);
                const x = event.pageX;
                let changeSide = CLOSE_SIDES.NONE;
                if (x > middle && lastSide !== CLOSE_SIDES.RIGHT) changeSide = CLOSE_SIDES.RIGHT;
                else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) changeSide = CLOSE_SIDES.LEFT;
                if (changeSide !== CLOSE_SIDES.NONE) {
                    button.addClass('suey-item-hidden');
                    setTimeout(() => {
                        button.dom.style.removeProperty('left');
                        button.dom.style.removeProperty('right');
                        button.setStyle(changeSide, sideways);
                        button.removeClass('suey-item-hidden');
                    }, 100);
                    lastSide = changeSide;
                }
            });
        }
        switch (type) {
            case CORNER_BUTTONS.CLOSE:
                button.dom.addEventListener('click', () => { element.hide(); });
                break;
            case CORNER_BUTTONS.MAX:
                button.dom.addEventListener('click', () => {
                    if (typeof element.toggleMinMax === 'function') {
                        element.toggleMinMax();
                    }
                });
                break;
        }
        element.dom.addEventListener('pointerenter', () => button.addClass('suey-item-shown'));
        element.dom.addEventListener('pointerleave', () => button.removeClass('suey-item-shown'));
        element.addToSelf(button);
    }
    static makeDraggable(element, parent = element, limitToWindow = false, onDown = () => {}, onMove = () => {}, onUp = () => {}) {
        const eventElement = (element && element.isElement) ? element.dom : element;
        const dragElement = (parent && parent.isElement) ? parent.dom : parent;
        let downX, downY, rect = {};
        let lastX, lastY;
        let computed = getComputedStyle(dragElement);
        let minDistance = 0;
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (!element.snapToGrid) return decimal;
            return Math.round(decimal / increment) * increment;
        }
        function dragPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            eventElement.focus();
            eventElement.setPointerCapture(event.pointerId);
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            lastX = event.pageX;
            lastY = event.pageY;
            computed = getComputedStyle(dragElement);
            rect.left = parseFloat(computed.left);
            rect.top = parseFloat(computed.top);
            rect.width = parseFloat(computed.width);
            rect.height = parseFloat(computed.height);
            eventElement.ownerDocument.addEventListener('pointermove', dragPointerMove);
            eventElement.ownerDocument.addEventListener('pointerup', dragPointerUp);
            document.dispatchEvent(new Event('closemenu'));
            onDown();
        }
        function dragPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            eventElement.releasePointerCapture(event.pointerId);
            eventElement.ownerDocument.removeEventListener('pointermove', dragPointerMove);
            eventElement.ownerDocument.removeEventListener('pointerup', dragPointerUp);
            eventElement.style.cursor = 'inherit';
            onUp();
        }
        function dragPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.isTrusted) {
                lastX = event.pageX;
                lastY = event.pageY;
            }
            minDistance = Math.max(minDistance, Math.abs(downX - lastX));
            minDistance = Math.max(minDistance, Math.abs(downY - lastY));
            if (minDistance < MOUSE_SLOP) return;
            eventElement.style.cursor = 'move';
            const scale = ((element && element.getScale) ? element.getScale() : 1);
            const diffX = (lastX - downX) * (1 / scale);
            const diffY = (lastY - downY) * (1 / scale);
            let newLeft = roundNearest(rect.left + diffX);
            let newTop = roundNearest(rect.top + diffY);
            if (limitToWindow) {
                const titleHeight = parseInt(Css.toPx('4em'));
                newLeft = Math.min(window.innerWidth - (rect.width / 2), newLeft);
                newTop = Math.min(window.innerHeight - titleHeight, newTop);
                newLeft = Math.max(- (rect.width / 2), newLeft);
                newTop = Math.max(0, newTop);
            }
            dragElement.style.left = `${newLeft}px`;
            dragElement.style.top = `${newTop}px`;
            onMove(diffX, diffY);
        }
        eventElement.addEventListener('pointerdown', dragPointerDown);
    }
    static makeResizeable(resizeElement, addToElement = resizeElement, resizers = [], onDown = () => {}, onMove = () => {}, onUp = () => {}) {
        if (!resizeElement || !resizeElement.isElement) return console.warning('Resizeable.enable: ResizeElement not defined');
        if (!addToElement || !addToElement.isElement) return console.warning('Resizeable.enable: AddToElement not defined');
        resizeElement.addClass('suey-resizeable');
        const resizerDivs = {};
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `suey-resizer-${resizerName}`;
            const resizer = new Div();
            resizer.addClass('suey-resizer');
            resizer.addClass(className);
            let downX, downY, lastX, lastY;
            function resizePointerDown(event) {
                if (event.button !== 0) return;
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.setPointerCapture(event.pointerId);
                downX = event.pageX;
                downY = event.pageY;
                lastX = event.pageX;
                lastY = event.pageY;
                resizeElement.dom.ownerDocument.addEventListener('pointermove', resizePointerMove);
                resizeElement.dom.ownerDocument.addEventListener('pointerup', resizePointerUp);
                document.dispatchEvent(new Event('closemenu'));
                onDown();
            }
            function resizePointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                resizeElement.dom.ownerDocument.removeEventListener('pointermove', resizePointerMove);
                resizeElement.dom.ownerDocument.removeEventListener('pointerup', resizePointerUp);
                onUp();
            }
            function resizePointerMove(event) {
                event.stopPropagation();
                event.preventDefault();
                if (event.isTrusted) {
                    lastX = event.pageX;
                    lastY = event.pageY;
                }
                const diffX = lastX - downX;
                const diffY = lastY - downY;
                onMove(resizer, diffX, diffY);
            }
            resizer.dom.addEventListener('pointerdown', resizePointerDown);
            resizerDivs[resizerName] = resizer;
            addToElement.addToSelf(resizer);
        }
        const resizerEnabled = {};
        resizeElement.toggleResize = function(resizerName, enable = true) {
            if (!resizerName) return;
            resizerEnabled[resizerName] = enable;
            function toggleDisplay(element, display) {
                if (!element) return;
                element.setStyle('display', display ? '' : 'none');
            }
            toggleDisplay(resizerDivs[resizerName], enable);
            toggleDisplay(resizerDivs[RESIZERS.TOP_LEFT], resizerEnabled[RESIZERS.TOP] && resizerEnabled[RESIZERS.LEFT]);
            toggleDisplay(resizerDivs[RESIZERS.TOP_RIGHT], resizerEnabled[RESIZERS.TOP] && resizerEnabled[RESIZERS.RIGHT]);
            toggleDisplay(resizerDivs[RESIZERS.BOTTOM_LEFT], resizerEnabled[RESIZERS.BOTTOM] && resizerEnabled[RESIZERS.LEFT]);
            toggleDisplay(resizerDivs[RESIZERS.BOTTOM_RIGHT], resizerEnabled[RESIZERS.BOTTOM] && resizerEnabled[RESIZERS.RIGHT]);
            return resizeElement;
        };
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            resizeElement.toggleResize(resizerName, resizers.includes(resizerName));
        }
    }
}

class Utils {
    static isChildOf(element, possibleParent) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.isSameNode(possibleParent)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static isChildOfElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static parentElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) {
                return parent;
            }
            parent = parent.parentElement;
        }
        return undefined;
    }
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Utils.traverse(element.children[i], applyFunction, true);
        }
    }
    static parentScroller(element) {
        if (!element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Utils.parentScroller(element.parentElement);
        }
    }
    static scrollIntoView(element) {
        const parent = Utils.parentScroller(element);
        if (parent) {
            const onePixel = parseInt(Css.toPx('0.2em'));
            if ((element.offsetTop - parent.offsetTop - onePixel) < parent.scrollTop) {
                parent.scrollTop = element.offsetTop - parent.offsetTop - onePixel;
            } else if (element.offsetTop > (parent.scrollTop + parent.clientHeight + onePixel - parent.offsetTop)) {
                parent.scrollTop = element.offsetTop - parent.clientHeight + element.offsetHeight + onePixel - parent.offsetTop;
            }
        }
    }
}

const DEVICE_TYPE = {
    POINTER: 1,
    TOUCH: 2,
};
let _showTimer;
class Tooltipper {
    constructor() {
        const tooltip = new Div().setClass('suey-tooltip');
        tooltip.setInnerHtml('');
        document.body.appendChild(tooltip.dom);
        let deviceType = DEVICE_TYPE.POINTER;
        document.addEventListener('touchstart', () => deviceType = DEVICE_TYPE.TOUCH, { capture: true, passive: true });
        document.addEventListener('mousemove', () => deviceType = DEVICE_TYPE.POINTER, { capture: true, passive: true });
        document.addEventListener('mouseenter', showTooltip, { capture: true, passive: true });
        document.addEventListener('mouseleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('dragleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('blur', hideTooltip, { capture: true, passive: true });
        document.addEventListener('hidetooltip', () => { hideTooltip(); }, { capture: true, passive: true });
        function showTooltip(event) {
            const element = event.target;
            if (!element || !(element instanceof HTMLElement)) return;
            if (!element.getAttribute('tooltip')) return;
            if (event instanceof FocusEvent && deviceType !== DEVICE_TYPE.POINTER) return;
            if (('TouchEvent' in window) && event instanceof TouchEvent) return;
            let text = element.getAttribute('tooltip');
            if (!text.length) return;
            clearTimeout(_showTimer);
            tooltip.removeClass('suey-updated');
            _showTimer = setTimeout(() => {
                tooltip.setInnerHtml(text);
                Popper.popUnder(tooltip.dom, element, ALIGN.CENTER, null, TOOLTIP_Y_OFFSET);
                tooltip.addClass('suey-updated');
            }, parseInt(Css.getVariable('--tooltip-delay')));
        }
        function hideTooltip(event) {
            if (event) {
                const element = event.target;
                if (!element || !(element instanceof HTMLElement)) return;
                if (!element.getAttribute('tooltip')) return;
            }
            clearTimeout(_showTimer);
            tooltip.removeClass('suey-updated');
        }
    }
}
const tooltipper = new Tooltipper();

class Break extends Element {
    constructor() {
        super(document.createElement('br'));
    }
}

class Canvas extends Element {
    constructor(width = 300, height = 150) {
        const canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
        canvas.width = width;
        canvas.height = height;
        super(canvas);
        this.ctx = this.dom.getContext('2d');
    }
    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }
    get height() { return this.dom.height; }
    set height(x) { this.dom.height = x; }
    ratio() {
        const rect = this.dom.getBoundingClientRect();
        return ((this.dom.width / this.dom.height) / (rect.width / rect.height));
    }
}

class Span extends Element {
    constructor(innerHtml) {
        super(document.createElement('span'));
        this.setInnerHtml(innerHtml);
    }
}

class Text extends Span {
    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('suey-text');
        this.setStyle('cursor', 'default');
    }
}

class Row extends Div {
    constructor() {
        super();
        this.addClass('suey-row');
    }
}

const LEFT_SPACING = {
    TABS:   'tabs',
    NORMAL: 'normal',
};
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
        if (Number.isNaN(width) || !Number.isFinite(width)) width = 50;
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
    createHeader(text = '', iconUrl) {
        const header = new Div().setClass('suey-property-header-title');
        const icon = new VectorBox(iconUrl);
        const iconHolder = new Span().setClass('suey-property-header-icon').add(icon);
        const textHolder = new Span().setClass('suey-property-header-text').setTextContent(text);
        header.add(iconHolder, textHolder);
        return header;
    }
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
    createRowWithoutTitle(...controls) {
        const widgets = this.createControls(...controls);
        widgets.removeClass('suey-property-right').addClass('suey-property-full');
        const row = new Row().addClass('suey-property-row').add(widgets);
        row.leftWidget = widgets;
        row.rightWidget = widgets;
        return row;
    }
    createControls() {
        const rightRow = new Row().setStyle('margin', '0', 'padding', '0').addClass('suey-property-right');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (argument instanceof Element && argument.isElement) {
                rightRow.add(argument);
                if (i < args.length - 1) rightRow.add(new Span().addClass('suey-property-space'));
            } else {
                console.error('PropertyList.createControls():', argument, 'is not an instance of Element.');
            }
        }
        return rightRow;
    }
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

class TreeList extends Div {
    #shiftAdd = 0;
    #shiftTrack = [];
    #dragImage = null;
    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('suey-tree-list');
        this.allowFocus();
        this.multiSelect = multiSelect;
        this.options = [];
        this.selectedValue = null;
        this.selectedValues = [];
        function onKeyDown(event) {
            if (!self.multiSelect) {
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.key === 'ArrowUp') index--;
                    if (event.key === 'ArrowDown') index++;
                    if (index >= 0 && index < self.options.length) {
                        self.setValue(self.options[index].value, true);
                        self.dom.dispatchEvent(new Event('change'));
                    }
                }
            } else {
                if (!event.shiftKey) {
                    self.#shiftAdd = 0;
                    self.#shiftTrack = [];
                }
                if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                    event.preventDefault();
                    event.stopPropagation();
                    let values = [...self.selectedValues];
                    if (event.shiftKey) {
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...values];
                        values = [...self.#shiftTrack];
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.key === 'ArrowUp' && index + self.#shiftAdd > 0) self.#shiftAdd--;
                        if (event.key === 'ArrowDown' && index + self.#shiftAdd < self.options.length - 1) self.#shiftAdd++;
                        index += self.#shiftAdd;
                        if (index < 0 || index > self.options.length - 1) return;
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = index;
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        }
                        self.setValues(values, true);
                        self.dom.dispatchEvent(new Event('change'));
                    } else if (values.length > 0) {
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.key === 'ArrowUp') index--;
                        if (event.key === 'ArrowDown') index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }
        function onKeyUp(event) {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
                    event.stopPropagation();
                    if (!event.shiftKey) {
                        self.#shiftAdd = 0;
                        self.#shiftTrack = [];
                    }
                    break;
            }
        }
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
    }
    getIndex(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value == value) return i;
        }
        return -1;
    }
    getOption(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value == value) return this.options[i];
        }
        return undefined;
    }
    getValue() {
        return this.selectedValue;
    }
    setValue(value, scrollTo = false) {
        let lastElement = undefined;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('suey-active');
        }
        for (let i = 0; i < this.options.length; i++) {
            const element = this.options[i];
            if (element.value == value) {
                element.classList.add('suey-active');
                lastElement = element;
            }
        }
        if (lastElement && scrollTo) setTimeout(() => Utils.scrollIntoView(lastElement), 0);
        this.selectedValue = value;
        return this;
    }
    getValues() {
        return this.selectedValues;
    }
    setValues(valueArray = [], scrollTo = false) {
        let lastElement = undefined;
        for (const div of this.options) {
            div.classList.remove('suey-active');
            div.classList.remove('suey-active-top');
            div.classList.remove('suey-active-bottom');
        }
        for (const value of valueArray) {
            for (const div of this.options) {
                if (div.value == value) {
                    div.classList.add('suey-active');
                    lastElement = div;
                }
            }
        }
        for (let i = 0; i < this.options.length - 1; i++) {
            const element = this.options[i];
            const elementAfter = this.options[i + 1];
            if (element.classList.contains('suey-active') && elementAfter.classList.contains('suey-active')) {
                element.classList.add('suey-active-top');
                elementAfter.classList.add('suey-active-bottom');
            }
        }
        if (lastElement && scrollTo) setTimeout(() => { Utils.scrollIntoView(lastElement); }, 0);
        this.selectedValues = [...valueArray];
        return this;
    }
    setOptions(options) {
        const self = this;
        this.clearContents();
        function onPointerDown(event) {
            if (!event.shiftKey) {
                self.#shiftAdd = 0;
                self.#shiftTrack = [];
            }
            if (self.multiSelect) {
                let multiAllowed = false;
                multiAllowed = multiAllowed || !this.singleSelect;
                multiAllowed = multiAllowed || self.selectedValues.length < 1;
                if (self.selectedValues.length === 1) {
                    const option = self.getOption(self.selectedValues[0]);
                    if (option && option.singleSelect === true) multiAllowed = false;
                }
                let values = [...self.selectedValues];
                if (event.altKey || event.ctrlKey || event.metaKey) {
                    if (values.includes(this.value)) {
                        const index = values.indexOf(this.value);
                        values.splice(index, 1);
                    } else {
                        if (multiAllowed) values.push(this.value);
                    }
                    self.setValues(values);
                } else if (event.shiftKey && values.length > 0) {
                    if (multiAllowed) {
                        if (self.#shiftTrack.length === 0) self.#shiftTrack = [...self.selectedValues];
                        values = [...self.#shiftTrack];
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = self.getIndex(this.value);
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                if (self.options[i].singleSelect) continue;
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                if (self.options[i].singleSelect) continue;
                                const value = self.options[i].value;
                                if (!values.includes(value)) values.push(value);
                            }
                        }
                        self.#shiftAdd = index2 - index1;
                        self.setValues(values);
                    }
                } else {
                    if (!values.includes(this.value)) {
                        self.setValues([ this.value ]);
                    }
                }
            } else {
                self.setValue(this.value);
            }
            this.addEventListener('pointerup', onPointerUp);
            self.dom.dispatchEvent(new Event('change'));
        }
        function onPointerUp(event) {
            if (self.multiSelect) {
                if (! (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)) {
                    self.setValues([ this.value ]);
                }
            }
            this.removeEventListener('pointerup', onPointerUp);
        }
        let currentDrag = undefined;
        function onDrag() {
            currentDrag = this;
        }
        function onDragStart(event) {
            if (self.multiSelect) {
                const divRect = this.getBoundingClientRect();
                const width = divRect.width;
                const height = divRect.height * self.selectedValues.length;
                self.#dragImage = document.createElement('div');
                self.#dragImage.classList.add('suey-tree-list');
                self.#dragImage.classList.add('suey-drag-image');
                self.#dragImage.style['width'] = `${width}px`;
                self.#dragImage.style['height'] = `${height}px`;
                self.#dragImage.style['top'] = `${height * -2}px`;
                for (let i = 0; i < self.selectedValues.length; i++) {
                    const value = self.selectedValues[i];
                    const option = self.getOption(value);
                    const optionClone = option.cloneNode(true );
                    optionClone.classList.add('suey-active-top');
                    optionClone.classList.add('suey-active-bottom');
                    self.#dragImage.appendChild(optionClone);
                }
                document.body.appendChild(self.#dragImage);
                event.dataTransfer.setDragImage(self.#dragImage, 0, 0);
                event.dataTransfer.setData('text/plain', self.selectedValues);
            } else {
                event.dataTransfer.setData('text/plain', self.selectedValue);
            }
        }
        function onDragEnd(event) {
            if (self.#dragImage instanceof HTMLElement) {
                document.body.removeChild(self.#dragImage);
                self.#dragImage = null;
            }
        }
        function onDragOver(event) {
            if (!currentDrag || this === currentDrag) return;
            const area = event.offsetY / this.clientHeight;
            if (this.dropGroup !== currentDrag.dropGroup) {
                this.classList.remove('suey-drag');
                this.classList.remove('suey-drag-top');
                this.classList.remove('suey-drag-bottom');
            } else if (this.noDirectDrop) {
                this.classList.remove('suey-drag');
                if (area < 0.5) {
                    this.classList.add('suey-drag-top');
                    this.classList.remove('suey-drag-bottom');
                } else {
                    this.classList.add('suey-drag-bottom');
                    this.classList.remove('suey-drag-top');
                }
            } else {
                if (area < 0.25) {
                    this.classList.add('suey-drag-top');
                    this.classList.remove('suey-drag');
                    this.classList.remove('suey-drag-bottom');
                } else if (area < 0.75) {
                    this.classList.add('suey-drag');
                    this.classList.remove('suey-drag-top');
                    this.classList.remove('suey-drag-bottom');
                } else {
                    this.classList.add('suey-drag-bottom');
                    this.classList.remove('suey-drag');
                    this.classList.remove('suey-drag-top');
                }
            }
        }
        function onDragLeave() {
            if (!currentDrag || this === currentDrag) return;
            this.classList.remove('suey-drag');
            this.classList.remove('suey-drag-top');
            this.classList.remove('suey-drag-bottom');
        }
        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            this.classList.remove('suey-drag');
            this.classList.remove('suey-drag-top');
            this.classList.remove('suey-drag-bottom');
            if (currentDrag && this !== currentDrag && this.dropGroup === currentDrag.dropGroup) {
                const data = event.dataTransfer.getData('text/plain');
                const values = data.split(',');
                if (typeof self.onDrop === 'function') {
                    self.onDrop(event, this, values);
                }
            }
            currentDrag = undefined;
        }
        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.classList.add('suey-option');
            self.dom.appendChild(div);
            self.options.push(div);
            div.addEventListener('pointerdown', onPointerDown);
            div.addEventListener('destroy', () => div.removeEventListener('pointerdown', onPointerDown), { once: true });
            if (div.draggable) {
                div.addEventListener('drag', onDrag);
                div.addEventListener('dragstart', onDragStart);
                div.addEventListener('dragend', onDragEnd);
                div.addEventListener('dragover', onDragOver);
                div.addEventListener('dragleave', onDragLeave);
                div.addEventListener('drop', onDrop);
                div.addEventListener('destroy', () => {
                    div.removeEventListener('drag', onDrag);
                    div.removeEventListener('dragstart', onDragStart);
                    div.removeEventListener('dragend', onDragEnd);
                    div.removeEventListener('dragover', onDragOver);
                    div.removeEventListener('dragleave', onDragLeave);
                    div.removeEventListener('drop', onDrop);
                }, { once: true });
            }
        }
        return this;
    }
}

class Checkbox extends Element {
    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('suey-checkbox');
        this.checkbox = new Element(document.createElement('input'));
        this.checkbox.setClass('suey-input');
        this.checkbox.addClass('suey-checkbox-input');
        this.checkbox.dom.type = 'checkbox';
        this.button = new Div().addClass('suey-checkbox-button');
        this.add(this.checkbox, this.button);
        this.setValue(boolean);
    }
    getValue() {
        if (!this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }
    setValue(value) {
        if (!this.checkbox.dom) return this;
        this.checkbox.dom.checked = Boolean(value) ? true : false;
        return this;
    }
}

const _color$2 = new Iris();
class Color extends Button {
    constructor() {
        super();
        const self = this;
        this.addClass('suey-color-button');
        this.addClass('suey-drop-arrow');
        const colorBox = new Element(document.createElement('input'));
        colorBox.setClass('suey-input');
        colorBox.addClass('suey-color-input-button');
        colorBox.dom.setAttribute('autocomplete', 'off');
        try { colorBox.dom.type = 'color'; } catch(exception) {}
        this.add(colorBox);
        const colorBackground = new Div().addClass('suey-drop-color');
        colorBackground.setStyle('backgroundColor', colorBox.dom.value);
        this.add(colorBackground);
        let selected = false;
        function colorBoxClick(event) {
            if (!selected) {
                self.addClass('suey-selected');
                selected = true;
            } else {
                event.stopPropagation();
                event.preventDefault();
                colorBox.blur();
            }
        }
        function colorBoxInput() {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
        }
        function colorBoxBlur() {
            self.removeClass('suey-selected');
            selected = false;
        }
        colorBox.onClick(colorBoxClick);
        colorBox.onInput(colorBoxInput);
        colorBox.dom.addEventListener('blur', colorBoxBlur);
        colorBox.dom.addEventListener('focusout', colorBoxBlur);
        this.getValue = function() {
            if (!colorBox.dom) return 0;
            return colorBox.dom.value;
        };
        this.getHexValue = function() {
            if (!colorBox.dom) return 0;
            _color$2.set(colorBox.dom.value);
            return _color$2.hex();
        };
        this.setValue = function(value) {
            if (!colorBox.dom) return this;
            _color$2.set(value);
            colorBox.dom.value = _color$2.hexString();
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
            return this;
        };
        this.setValue(0xffffff);
    }
}

class MenuSeparator extends Div {
    constructor() {
    super();
        this.setClass('suey-menu-separator');
    }
}

const TRIANGLE_SIZE = 3.0;
const _clr = new Iris();
class Menu extends Div {
    #addedTo = false;
    constructor() {
        super();
        this.setClass('suey-menu');
        this.mouseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.mouseSvg.setAttribute('class', 'suey-menu-mouse-triangle');
        this.mouseSvg.setAttribute('pointer-events', 'none');
        this.mouseSvg.setAttribute('version', '1.1');
        this.mouseArea = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        this.mouseArea.setAttribute('fill', _clr.setRandom().hexString());
        this.mouseArea.setAttribute('opacity', '0.0');
        this.mouseArea.setAttribute('pointer-events', 'fill');
        this.mouseSvg.appendChild(this.mouseArea);
        this.menuParentDom = undefined;
    }
    add() {
        if (!this.#addedTo && this.children) {
            let menuItems = this.children;
            if (menuItems.length > 0) {
                const lastItem = menuItems[menuItems.length - 1];
                if (lastItem.constructor.name !== 'MenuSeparator') {
                    super.add(new MenuSeparator());
                }
            }
        }
        if (arguments && arguments.length > 0) {
            this.#addedTo = true;
            super.add(...arguments);
        }
        return this;
    }
    newCategory() {
        this.#addedTo = false;
    }
    closeMenu(applyToSelf = true, dontCloseChildrenOf = undefined) {
        this.traverse((child) => {
            if (dontCloseChildrenOf && Utils.isChildOf(child.dom, dontCloseChildrenOf)) {
            } else {
                child.removeClass('suey-menu-show', 'suey-selected');
                if (child.attachedMenu && typeof child.attachedMenu.closeMenu === 'function') {
                    child.attachedMenu.closeMenu(true);
                }
                if (child.dom && typeof child.dom.blur === 'function') child.dom.blur();
            }
        }, applyToSelf);
        if (applyToSelf) {
            let parent = this.menuParentDom;
            while (parent) {
                if (this.menuParentDom.classList.contains('suey-menu-button')) {
                    parent.classList.remove('suey-selected');
                    parent = undefined;
                } else {
                    parent = parent.parentElement;
                }
            }
            if (typeof this.removeHandlers === 'function') this.removeHandlers();
            document.dispatchEvent(new Event('nofocus'));
        }
    }
    isShown() {
        return this.hasClass('suey-menu-show');
    }
    showMenu(parentDom) {
        const self = this;
        this.menuParentDom = parentDom;
        this.addClass('suey-menu-show');
        this.focus();
        if (Utils.isChildOfElementWithClass(this.dom, 'suey-menu')) {
            this.mouseArea.setAttribute('pointer-events', 'none');
            this.contents().dom.insertBefore(this.mouseSvg, this.contents().dom.firstChild);
            this.updateMouseArea();
            const timeFloat = parseFloat(Css.getVariable('--menu-timing')) * 1000.0;
            setTimeout(() => this.updateMouseArea(), timeFloat);
        }
        function onCloseMenu() {
            self.closeMenu();
        }
        function onKeyDown(event) {
            if (event.key === 'Escape') {
                self.closeMenu();
            }
        }
        function onPointerDown(event) {
            if (self.dom.contains(event.target)) {
            } else {
                self.closeMenu();
            }
        }
        document.addEventListener('closemenu', onCloseMenu);
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('pointerdown', onPointerDown);
        this.removeHandlers = function() {
            document.removeEventListener('closemenu', onCloseMenu);
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('pointerdown', onPointerDown);
        };
        this.dom.addEventListener('destroy', function() {
            self.removeHandlers();
        }, { once: true });
        return this;
    }
    updateMouseArea() {
        const parentRect = this.dom.parentElement.getBoundingClientRect();
        const myRect = this.dom.getBoundingClientRect();
        if (!this.hasClass('suey-menu-under')) {
            const middle = (parentRect.top - myRect.top) + (parentRect.height / 2);
            const middle1 = middle - (parentRect.height / 2);
            const middle2 = middle + (parentRect.height / 2);
            const leftSide = parentRect.width / TRIANGLE_SIZE;
            const topSides = 10;
            this.mouseSvg.style['left'] = `-${leftSide}px`;
            this.mouseSvg.style['top'] = `-${topSides}px`;
            this.mouseSvg.setAttribute('width', `${myRect.width + leftSide}px`);
            this.mouseSvg.setAttribute('height', `${myRect.height + topSides*2}px`);
            const point1 = `${leftSide},0`;
            const point2 = `0,${topSides + middle1}`;
            const point3 = `0,${topSides + middle2}`;
            const point4 = `${leftSide},${myRect.height + topSides*2}`;
            const point5 = `${leftSide + myRect.width},${myRect.height + topSides*2}`;
            const point6 = `${leftSide + myRect.width},0`;
            this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`);
            this.mouseArea.setAttribute('pointer-events', 'fill');
        } else {
            const middle = myRect.width / 2;
            const middle1 = middle - (parentRect.width / 2);
            const middle2 = middle + (parentRect.width / 2);
            const topSides = parentRect.height / 1.5;
            this.mouseSvg.style['left'] = '0';
            this.mouseSvg.style['top'] = `-${topSides}px`;
            this.mouseSvg.setAttribute('width', `${myRect.width}px`);
            this.mouseSvg.setAttribute('height', `${myRect.height + topSides}px`);
            const point1 = `${middle1},0`;
            const point2 = `0,${topSides}`;
            const point3 = `0,${myRect.height + topSides}`;
            const point4 = `${myRect.width},${myRect.height + topSides}`;
            const point5 = `${myRect.width},${topSides}`;
            const point6 = `${middle2},0`;
            this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`);
            this.mouseArea.setAttribute('pointer-events', 'fill');
        }
        return this;
    }
}

class MenuShortcut extends Div {
    constructor(text = undefined) {
        super();
        this.setClass('suey-menu-shortcut');
        if (text) this.setShortcutText(text);
    }
    setShortcutText(text) {
        if (!text) return this;
        this.text = text;
        this.clearContents();
        for (let i = 0; i < text.length; i++) {
            let letter = new Div().setClass('suey-menu-shortcut-character');
            let subString = text[i];
            while (i + 1 < text.length && text[i+1] === text[i+1].toLowerCase()) {
                subString += text[i+1];
                i++;
            }
            if (subString.length === 1) {
                letter.setWidth('1em');
            } else {
                letter.setStyle('paddingLeft', '0.15em');
                letter.setStyle('paddingRight', '0.15em');
            }
            letter.dom.textContent = subString;
            this.add(letter);
        }
        return this;
    }
}

class MenuItem extends Div {
    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        const self = this;
        this.setClass('suey-menu-item');
        this.setName(text);
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('suey-menu-icon');
        this.divText = new Div().setClass('suey-menu-text');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.row = new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut);
        this.add(this.row);
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;
        function onContextMenu(event) {
            event.preventDefault();
        }
        function hideSubMenus(dontCloseChildrenOf = undefined) {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('suey-menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && typeof parentMenu.closeMenu === 'function') {
                parentMenu.closeMenu(false, dontCloseChildrenOf);
            }
        }
        function onPointerEnter() {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('suey-menu') === false)) parentMenu = parentMenu.parent;
            if (!parentMenu.hasClass('suey-invisible-menu')) {
                const hideEvent = new Event('hidetooltip', { bubbles: true });
                self.dom.dispatchEvent(hideEvent);
            }
            hideSubMenus(self.dom);
            if (self.subMenu) self.subMenu.showMenu(self.dom);
        }
        function onPointerLeave() {
            hideSubMenus();
        }
        let pointerDown = false;
        function onPointerDown(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.dispatchEvent(new Event('select'));
            pointerDown = true;
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            if (pointerDown !== true) {
                self.dom.dispatchEvent(new Event('select'));
            }
            pointerDown = false;
        }
        this.dom.addEventListener('contextmenu', onContextMenu);
        this.dom.addEventListener('pointerenter', onPointerEnter);
        this.dom.addEventListener('pointerleave', onPointerLeave);
        this.dom.addEventListener('pointerdown', onPointerDown);
        this.dom.addEventListener('pointerup', onPointerUp);
        this.dom.addEventListener('destroy', () => {
            self.dom.removeEventListener('contextmenu', onContextMenu);
            self.dom.removeEventListener('pointerenter', onPointerEnter);
            self.dom.removeEventListener('pointerleave', onPointerLeave);
            self.dom.removeEventListener('pointerdown', onPointerDown);
            self.dom.removeEventListener('pointerup', onPointerUp);
        }, { once: true });
        this.setText(text);
        this.selectable(false);
    }
    onPointerDown(callback) {
        console.trace(`MenuItem.onPointerDown() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }
    onPointerUp(callback) {
        console.trace(`MenuItem.onPointerUp() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }
    onClick(callback) {
        console.trace(`MenuItem.onClick() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }
    onDblClick(callback) {
        console.trace(`MenuItem.onDblClick() deprecated, use onSelect() instead, from: ${this.getName()}`);
        this.onSelect(callback);
        return this;
    }
    onSelect(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (!self.hasClass('suey-keep-open')) {
                    document.dispatchEvent(new Event('closemenu'));
                }
            }
        };
        const dom = self.dom;
        dom.addEventListener('select', eventHandler);
        dom.addEventListener('destroy', () => { dom.removeEventListener('select', eventHandler); }, { once: true });
        return self;
    }
    isChecked() {
        return this.checked;
    }
    isDisabled() {
        return this.disabled;
    }
    keepOpen() {
        this.addClass('suey-keep-open');
        return this;
    }
    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        if (checked) this.divIcon.addClass('suey-icon-colorize');
        else this.divIcon.removeClass('suey-icon-colorize');
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }
    setDisabled(disabled) {
        if (disabled) this.addClass('suey-disabled');
        else this.removeClass('suey-disabled');
        this.disabled = disabled;
        return this;
    }
    setImage(imageUrl) {
        this.divIcon.setImage(imageUrl);
        return this;
    }
    setText(text) {
        this.divText.dom.textContent = text ?? ' ';
        return this;
    }
    attachSubMenu(menuElement) {
        if (menuElement.hasClass('suey-menu') === false) return this;
        menuElement.addClass('suey-slide-down');
        this.removeSubMenu();
        this.addClass('suey-sub-menu-item');
        this.add(menuElement);
        this.subMenu = menuElement;
        return this;
    }
    hasSubMenu() {
        return this.hasClass('suey-sub-menu-item');
    }
    removeSubMenu() {
        this.removeClass('suey-sub-menu-item');
        const menuElement = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('suey-menu')) this.remove(child);
        }
        return menuElement;
    }
}

class Dropdown extends Button {
    constructor(buttonText) {
        super(buttonText);
        const self = this;
        this.items = [];
        this.currentIndex = -1;
        this.value = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 5;
        this.addClass('suey-dropdown');
        this.addClass('suey-drop-arrow');
        function onWheel(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.deltaY < 0) {
                if (self.currentIndex > 0) {
                    self.setIndex(self.currentIndex - 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            } else {
                if (self.currentIndex < (self.items.length - 1)) {
                    self.setIndex(self.currentIndex + 1);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            }
        }
        this.onWheel(onWheel);
    }
    getItemByKey(key) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === key) return this.items[i];
        }
        return undefined;
    }
    getIndex() {
        return this.currentIndex;
    }
    getValue() {
        return this.value;
    }
    setIndex(index = 0) {
        if (index < 0 || index >= this.items.length || index === this.currentIndex) return;
        const item = this.items[index];
        for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
        item.setChecked(true);
        this.currentIndex = index;
        this.value = item.value;
        if (this.dom) this.dom.textContent = item.dom.textContent;
        return this;
    }
    setValue(value) {
        value = String(value);
        if (this.value !== value) {
            for (let i = 0; i < this.items.length; i++) {
                const item = this.items[i];
                if (item.value === value) {
                    for (let i = 0; i < this.items.length; i++) this.items[i].setChecked(false);
                    item.setChecked(true);
                    this.currentIndex = i;
                    this.value = value;
                    if (this.dom) this.dom.textContent = item.dom.textContent;
                    return this;
                }
            }
        }
        return this;
    }
    setOptions(options) {
        const self = this;
        if (this.detachMenu) this.detachMenu();
        this.items.length = 0;
        for (const key in options) {
            const item = new MenuItem(options[key]);
            item.value = key;
            item.onSelect(() => {
                self.setValue(item.value);
                if (self.dom) self.dom.dispatchEvent(new Event('change'));
            });
            this.items.push(item);
        }
        const menu = new Menu();
        for (let i = 0; i < this.items.length; i++) {
            menu.add(this.items[i]);
        }
        this.attachMenu(menu);
        menu.addClass('suey-select-menu');
        return this;
    }
}

const _changeEvent$1 = new Event('change', { 'bubbles': true, 'cancelable': true });
class NumberBox extends Element {
    constructor(number) {
        super(document.createElement('input'));
        const self = this;
        this.setClass('suey-input');
        this.addClass('suey-number');
        this.dom.style.cursor = 'text';
        this.dom.value = '0.00';
        this.dom.setAttribute('autocomplete', 'off');
        this.value = 0;
        this.min = -Infinity;
        this.max = Infinity;
        this.precision = 3;
        this.step = 0.1;
        this.unit = '';
        this.nudge = 1.0;
        this.setValue(number);
        function onChange(event) {
            if (self.dom) self.setValue(self.dom.value);
        }
        function onKeyDown(event) {
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
                    if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    self.setValue(self.getValue() - self.nudge);
                    if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
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
            if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
        }
        this.dom.addEventListener('keydown', onKeyDown);
        this.dom.addEventListener('keyup', onKeyUp);
        this.dom.addEventListener('wheel', onWheel);
        this.dom.addEventListener('change', onChange);
        this.dom.addEventListener('destroy', function() {
            self.dom.removeEventListener('keydown', onKeyDown);
            self.dom.removeEventListener('keyup', onKeyUp);
            self.dom.removeEventListener('wheel', onWheel);
            self.dom.removeEventListener('change', onChange);
        }, { once: true });
    }
    getValue() {
        return parseFloat(this.value);
    }
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
                if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
            }
            prevPointer.x = event.clientX;
            prevPointer.y = event.clientY;
        }
        function onMouseUp() {
            if (Math.abs(distance) < 2) {
                if (self.dom) self.dom.focus();
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
                if (self.dom) self.dom.dispatchEvent(_changeEvent$1);
            }
            prevPointer.x = event.touches[0].pageX;
            prevPointer.y = event.touches[0].pageY;
        }
        function onTouchEnd(event) {
            if (event.touches.length === 0) {
                if (Math.abs(distance) < 2) {
                    if (self.dom) self.dom.focus();
                }
            }
        }
        function onFocus() {
            if (self.dom) self.dom.style.cursor = '';
        }
        function onBlur() {
            if (self.dom) self.dom.style.cursor = 'ns-resize';
        }
        this.dom.addEventListener('mousedown', onMouseDown);
        this.dom.addEventListener('mousemove', onMouseMove);
        this.dom.addEventListener('mouseup', onMouseUp);
        this.dom.addEventListener('touchstart', onTouchStart);
        this.dom.addEventListener('touchmove', onTouchMove);
        this.dom.addEventListener('touchend', onTouchEnd);
        this.dom.addEventListener('focus', onFocus);
        this.dom.addEventListener('blur', onBlur);
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

const MAX_SLIDER_TICKS = 10;
const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });
class Slider extends Div {
    constructor(number = 0, min = 0, max = 100) {
        super();
        const self = this;
        this.setClass('suey-slide-container');
        this.precision = 2;
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
            slider.dom.dispatchEvent(_changeEvent);
        }
        slider.onInput(sliderInput);
        slider.onWheel(sliderWheel);
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
            const totalSteps = parseFloat((max - min) / step);
            const maxDivsisor = MAX_SLIDER_TICKS - 1;
            let tickSteps = totalSteps;
            if (tickSteps > maxDivsisor) {
                for (let i = 1; i <= maxDivsisor; i++) {
                    if (Number.isInteger(totalSteps / i)) tickSteps = i;
                }
            }
            ticks.dom.style.setProperty('--divides', `${tickSteps}`);
        } else {
            ticks.setStyle('display', 'none');
        }
    }
}

class TextArea extends Element {
    constructor() {
        super(document.createElement('textarea'));
        this.setClass('suey-text-area');
        this.dom.spellcheck = false;
        this.dom.setAttribute('autocomplete', 'off');
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'Tab') {
                event.preventDefault();
                const cursor = this.selectionStart;
                this.value = this.value.substring(0, cursor) + '\t' + this.value.substring(cursor);
                this.selectionStart = cursor + 1;
                this.selectionEnd = this.selectionStart;
            }
        }
        this.onKeyDown(onKeyDown);
    }
    getValue() {
        if (!this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (!this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

class TextBox extends Element {
    constructor(text) {
        super(document.createElement('input'));
        this.setClass('suey-input');
        this.addClass('suey-text-box');
        this.dom.type = 'text';
        this.dom.setAttribute('autocomplete', 'off');
        this.dom.setAttribute('spellcheck', 'false');
        this.setValue(text ?? '');
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.key === 'z' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) {
                    editor.redo();
                } else {
                    editor.undo();
                }
            }
        }
        function onKeyUp(event) {
            event.stopPropagation();
        }
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
    }
    getValue() {
        if (!this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (!this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

class AbsoluteBox extends Div {
    constructor() {
        super();
        this.setClass('suey-absolute-box');
    }
}

class AssetBox extends Div {
    constructor(title = '', view = 'icon', isMini = true) {
        super();
        this.setClass('suey-asset-box');
        this.allowFocus();
        if (title !== '') this.dom.setAttribute('tooltip', title);
        if (typeof title !== 'string' || title === '') title = 'Unknown';
        this.setName(title.toLowerCase());
        const assetImageHolder = new ShadowBox();
        assetImageHolder.dom.draggable = true;
        if (view == 'icon') {
            if (isMini) {
                this.addClass('suey-asset-box-mini');
                this.addClass('suey-asset-box-selectable');
            }
            this.add(assetImageHolder);
        } else if (view == 'text') {
            if (isMini) {
                this.addClass('suey-asset-box-mini');
                this.addClass('suey-asset-box-combo');
                this.addClass('suey-asset-box-selectable');
            }
            assetImageHolder.setStyle('transform', 'translate(-50%, -65%) scale(0.8)');
            this.add(assetImageHolder);
            const label = new Div(title).setClass('suey-asset-box-label');
            this.add(label);
        } else {
            this.addClass('suey-asset-box-row');
            this.addClass('suey-asset-box-selectable');
            const spanIcon = new Span().setClass('suey-asset-box-icon').add(assetImageHolder);
            const spanText = new Span(title).setClass('suey-asset-box-text');
            this.add(spanIcon, spanText);
            this.assetText = spanText;
        }
        this.contents = function() { return assetImageHolder };
    }
}

const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};
class Panel extends Div {
    constructor({
        style = PANEL_STYLES.NONE,
    } = {}) {
        super();
        this.setClass('suey-panel');
        this.contents = function() { return this; };
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('suey-panel-simple');
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('suey-panel-fancy');
            const outerBox =  new Panel().setClass('suey-panel-fancy-outer');
            const borderBox = new Panel().setClass('suey-panel-fancy-border');
            const insideBox = new Panel().setClass('suey-panel-fancy-inside');
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);
            this.contents = function() { return insideBox; };
        }
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);
    }
}

const TAB_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
};
class Tabbed extends Panel {
    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;
    constructor({
        tabSide = TAB_SIDES.RIGHT,
        style = PANEL_STYLES.FANCY,
        resizers = [],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-tabbed');
        this.setName('suey-tabbed');
        this.#startWidth = startWidth;
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = startHeight;
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;
        this.tabs = [];
        this.panels = [];
        this.selectedId = '';
        this.selectedCount = 0;
        const rect = {};
        function resizerDown() {
            rect.width = self.getWidth();
            rect.height = self.getHeight();
            self.dom.dispatchEvent(new Event('clicked', { 'bubbles': true, 'cancelable': true }));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) self.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('right')) self.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('top')) self.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('bottom')) self.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove);
        this.tabsDiv = new Div().setClass('suey-tabs').setDisplay('none');
        this.panelsDiv = new Div().setClass('suey-tab-panels');
        this.add(this.tabsDiv);
        this.add(this.panelsDiv);
        this.setTabSide(tabSide);
    }
    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || !Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = this.#maxWidth * Css.guiScale(this.dom);
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return width;
    }
    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || !Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = this.#maxHeight * Css.guiScale(this.dom);
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return height;
    }
    addTab(id, content, options = {}) {
        if (typeof options !== 'object') options = {};
        if (!('color' in options) || options.color == null) options.color = ColorScheme.color(TRAIT.ICON);
        if (!('alpha' in options)) options.alpha = 1.0;
        if (!('icon' in options))options.icon = IMAGE_EMPTY;
        if (!('shadow' in options)) options.shadow = 0x000000;
        if (!('shrink' in options)) options.shrink = 1;
        if (options.shrink === true) options.shrink = 0.7;
        if (typeof options.shrink === 'string') {
            options.shrink = parseFloat(options.shrink) / (options.shrink.includes('%') ? 100 : 1);
        }
        let numTabsWithId = 0;
        for (let i = 0; i < this.tabs.length; i++) {
            const tab = this.tabs[i];
            if (tab.dom.id === id) numTabsWithId++;
        }
        function capitalize(string) {
            const words = String(string).split(' ');
            for (let i = 0; i < words.length; i++) words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            return words.join(' ');
        }
        const label = capitalize(id);
        const tab = new TabButton(this, label, options);
        tab.setId(id);
        tab.count = numTabsWithId;
        this.tabs.push(tab);
        this.tabsDiv.add(tab);
        const hideWhenNumberOfTabs = 0;
        if (this.tabs.length > hideWhenNumberOfTabs) this.tabsDiv.setDisplay('');
        const panel = new Panel().setId(id);
        panel.addClass('suey-tab-panel', 'suey-hidden');
        panel.add(content);
        panel.count = numTabsWithId;
        this.panels.push(panel);
        this.panelsDiv.add(panel);
        this.setContentsStyle('minHeight', '');
        if (this.tabsDiv.hasClass('suey-left-side') || this.tabsDiv.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.tabs.length) + 0.4) + 'em');
        }
        return panel;
    }
    selectFirst() {
        if (this.tabs.length > 0) {
            return this.selectTab(this.tabs[0].getId());
        }
        return false;
    }
    selectLastKnownTab() {
    }
    selectTab(id, count = 0, wasClicked = false) {
        if (this.tabs == undefined) return this;
        const self = this;
        const tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        const panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            if (!wasClicked) Css.setVariable('--tab-timing', '0', tab.dom);
            const currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            const currentPanel = this.panels.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            if (currentTab) currentTab.removeClass('suey-selected');
            if (currentPanel) currentPanel.addClass('suey-hidden');
            tab.addClass('suey-selected');
            panel.removeClass('suey-hidden');
            this.selectedId = id;
            this.selectedCount = count;
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = id;
                this.dom.dispatchEvent(tabChange);
            }
            if (!wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', tab.dom), 50);
            return true;
        }
        return false;
    }
    destroy() {
        this.clearTabs();
        super.destroy();
    }
    clearTabs() {
        if (this.tabsDiv) this.tabsDiv.clearContents();
        if (this.panelsDiv) this.panelsDiv.clearContents();
        if (this.tabs) {
            for (let i = 0; i < this.tabs.length; i++) this.tabs[i].destroy();
            this.tabs.length = 0;
        }
        if (this.panels) {
            for (let i = 0; i < this.panels.length; i++) this.panels[i].destroy();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }
    currentId() {
        return this.selectedId;
    }
    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('suey-left-side', 'suey-right-side');
        this.tabsDiv.addClass((side === TAB_SIDES.RIGHT) ? 'suey-right-side' : 'suey-left-side');
    }
    tabIndex(id) {
        return this.tabs.indexOf(id);
    }
}
const _color$1 = new Iris();
class TabButton extends Div {
    constructor(parent, label, options = {}) {
        super();
        const self = this;
        this.setClass('suey-tab-button');
        this.setStyle('cursor', 'default');
        if (options.shadow) this.addClass('suey-tab-shadow');
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('suey-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) { self.iconBorder.dom.setAttribute('tooltip', label); };
        this.setLabel(label);
        if (typeof options.color === 'string' && options.color.includes('var(--')) {
            this.iconVector.setStyle('background-color', `rgba(${options.color}, ${options.alpha})`);
        } else {
            _color$1.set(options.color);
            const light = `rgba(${_color$1.rgbString(options.alpha)})`;
            const dark = `rgba(${_color$1.darken(0.75).rgbString(options.alpha)})`;
            const background = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', background);
        }
        const shadow = options.shadow;
        if (this.iconVector.img && shadow !== false) {
            _color$1.set(shadow);
            const dropShadow = `drop-shadow(0 0 var(--pad-micro) rgba(${_color$1.rgbString()}, 0.8))`;
            this.iconVector.img.setStyle('filter', dropShadow);
        }
        const shrink = options.shrink;
        if (this.iconVector.img && !isNaN(shrink)) {
            this.iconVector.img.setStyle('position', 'absolute');
            this.iconVector.img.setStyle('left', '0', 'right', '0', 'top', '0', 'bottom', '0');
            this.iconVector.img.setStyle('margin', 'auto');
            this.iconVector.img.setStyle('width', `${shrink * 100}%`);
            this.iconVector.img.setStyle('height', `${shrink * 100}%`);
        }
        this.onClick(() => {
            parent.selectTab(self.dom.id, self.count, true);
            parent.dom.dispatchEvent(new Event('resized'));
        });
    }
}

const CORNERS = {
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};
class Docker extends Div {
    #corners = {};
    constructor() {
        super();
        const self = this;
        let zIndex = 1;
        for (let key in CORNERS) {
            const cornerName = CORNERS[key];
            const className = `suey-docker-${cornerName}`;
            const corner = new Div().addClass('suey-docker-corner').addClass(className);
            corner.setStyle('zIndex', `${zIndex}`);
            zIndex++;
            function bringCornerToTop() {
                for (let cornerDiv in self.#corners) {
                    const style = getComputedStyle(self.#corners[cornerDiv].dom);
                    let computedZ = style.getPropertyValue('z-index');
                    if (computedZ > 1) computedZ--;
                    self.#corners[cornerDiv].setStyle('zIndex', `${computedZ}`);
                };
                corner.setStyle('zIndex', `${Object.keys(self.#corners).length}`);
            }
            corner.dom.addEventListener('pointerdown', bringCornerToTop);
            corner.dom.addEventListener('clicked', bringCornerToTop);
            this.#corners[cornerName] = corner;
            this.add(corner);
        }
    }
    addDockPanel(dockPanel, cornerName = CORNERS.TOP_LEFT) {
        if (!dockPanel) return;
        const corner = this.getCorner(cornerName);
        corner.add(dockPanel);
        dockPanel.dom.addEventListener('resized', () => {
            corner.dom.dispatchEvent(new Event('resized'));
        });
        if (dockPanel.isElement) {
            if (dockPanel.hasClass('suey-tabbed')) {
                if (cornerName.includes('right')) dockPanel.setTabSide(TAB_SIDES.LEFT);
                if (cornerName.includes('left')) dockPanel.setTabSide(TAB_SIDES.RIGHT);
            }
            if (dockPanel.hasClass('suey-resizeable')) {
                dockPanel.toggleResize(RESIZERS.LEFT, cornerName.includes('right'));
                dockPanel.toggleResize(RESIZERS.RIGHT, cornerName.includes('left'));
            }
        }
    }
    getCorner(cornerName = CORNERS.TOP_LEFT) {
        return this.#corners[cornerName];
    }
}

class FlexBox extends Element {
    constructor() {
        super(document.createElement('div'));
        this.addClass('suey-flex-box');
    }
}

class FlexSpacer extends Span {
    constructor() {
        super();
        this.setStyle('flex', '1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }
}

class ToolbarButton extends Button {
    constructor(buttonText, position , addBackground = true, closesMenus = true) {
        super(buttonText);
        const self = this;
        this.setClass('suey-toolbar-button');
        this.setStyle('pointerEvents', 'all');
        this.closesMenus = closesMenus;
        switch (position) {
            case 'left': this.addClass('suey-button-left'); break;
            case 'middle': this.addClass('suey-button-middle'); break;
            case 'right': this.addClass('suey-button-right'); break;
        }
        const buttonBackground = new Div().addClass('suey-button-background');
        if (addBackground) this.add(buttonBackground);
        const buttonImageHolder = new ShadowBox().setStyle('pointer-events', 'none');
        this.add(buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
        function onPointerDown(event) {
            event.stopPropagation();
        }
        function onPointerUp(event) {
            event.stopPropagation();
        }
        this.dom.addEventListener('pointerdown', onPointerDown);
        this.dom.addEventListener('pointerup', onPointerUp);
        this.dom.addEventListener('destroy', () => {
            self.dom.removeEventListener('pointerdown', onPointerDown);
            self.dom.removeEventListener('pointerup', onPointerUp);
        }, { once: true });
    }
    onPointerDown(callback) {
        console.trace(`ToolbarButton.onPointerDown() deprecated, use onClick() instead, from: ${this.getName()}`);
        this.onClick(callback);
        return this;
    }
    onPointerUp(callback) {
        console.trace(`ToolbarButton.onPointerUp() deprecated, use onClick() instead, from: ${this.getName()}`);
        this.onClick(callback);
        return this;
    }
    onClick(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (self.closesMenus) document.dispatchEvent(new Event('closemenu'));
            }
        };
        const dom = self.dom;
        dom.addEventListener('click', eventHandler);
        dom.addEventListener('destroy', () => { dom.removeEventListener('click', eventHandler); }, { once: true });
        return self;
    }
}

class ToolbarSeparator extends Element {
    constructor() {
        super(document.createElement('div'));
        this.setClass('suey-toolbar-separator');
    }
}

class ToolbarSpacer extends Element {
    constructor(width = 1) {
        super(document.createElement('div'));
        this.setClass('suey-toolbar-spacer');
        this.setStyle('width', `calc(var(--button-size) * ${width})`);
    }
}

const MIN_W$2 = 100;
const MIN_H$2 = 100;
const MAP_BUFFER = 100;
const MIN_MAP_SIZE = 1200;
const ANIMATE_INTERVAL = 4;
const ZOOM_MAX = 4;
const ZOOM_MIN = 0.1;
const _color = new Iris();
class Graph extends Panel {
    #scale = 1;
    #offset = { x: 0, y: 0 };
    #previous = { x: 0, y: 0 };
    #drawWidth = 0;
    #drawHeight = 0;
    constructor({
        snapToGrid = true,
        curveType = GRAPH_LINE_TYPES.CURVE,
        gridType = GRAPH_GRID_TYPES.LINES,
    } = {}) {
        super();
        const self = this;
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.activePoint = { x: 0, y: 0 };
        this.curveType = curveType;
        this.gridType = gridType;
        this.snapToGrid = snapToGrid;
        this.input = new Div().setClass('suey-graph-input');
        this.grid = new Div().setClass('suey-graph-grid');
        this.nodes = new Div().setClass('suey-graph-nodes');
        this.lines = new Canvas(2048, 2048).setClass('suey-graph-lines');
        this.bandbox = new Div().setClass('suey-graph-band-box');
        this.minimap = new Div().setClass('suey-mini-map');
        this.add(this.input, this.grid, this.lines, this.nodes, this.bandbox, this.minimap);
        this.mapCanvas = new Canvas(1024, 1024).setClass('suey-mini-map-canvas');
        const mapResizers = new Div().addClass('suey-mini-map-resizers');
        this.minimap.add(this.mapCanvas, mapResizers);
        this.changeGridType(gridType);
        function graphMouseZoom(event) {
            event.preventDefault();
            const delta = (event.deltaY * 0.001);
            self.stopAnimation();
            self.zoomTo(self.#scale - delta, event.clientX, event.clientY);
        };
        this.onWheel(graphMouseZoom);
        function onWindowResize() {
            self.stopAnimation();
            self.zoomTo();
        }
        window.addEventListener('resize', onWindowResize);
        let grabbing = false, selecting = false;
        let spaceKey = false;
        function graphKeyDown(event) {
            if (self.isHidden()) return;
            if (event.key === ' ') {
                spaceKey = true;
                self.dom.style.cursor = (grabbing) ? 'grabbing' : 'grab';
                self.input.setStyle('z-index', '100');
            }
        }
        function graphKeyUp(event) {
            if (self.isHidden()) return;
            if (event.key === ' ') {
                spaceKey = false;
                self.dom.style.cursor = 'auto';
                self.input.setStyle('z-index', '-1');
            }
        }
        document.addEventListener('keydown', graphKeyDown);
        document.addEventListener('keyup', graphKeyUp);
        let offset = { x: 0, y: 0 };
        let startPoint = { x: 0, y: 0 };
        function inputPointerDown(event) {
            self.stopAnimation();
            startPoint.x = event.clientX;
            startPoint.y = event.clientY;
            if (event.button === 2 || (event.button === 0 && spaceKey)) {
                grabbing = true;
                self.dom.style.cursor = 'grabbing';
                offset.x = self.#offset.x;
                offset.y = self.#offset.y;
            } else if (event.button === 0) {
                selecting = true;
                const selected = document.querySelectorAll(`.suey-node-selected`);
                selected.forEach(el => el.classList.remove('suey-node-selected'));
                self.bandbox.setStyle('display', 'block');
                updateRubberbandBox(event.clientX, event.clientY);
            }
            if (grabbing || selecting) {
                self.dom.setPointerCapture(event.pointerId);
                self.dom.ownerDocument.addEventListener('pointermove', inputPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', inputPointerUp);
            }
        }
        function inputPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.releasePointerCapture(event.pointerId);
            if (grabbing) {
                self.dom.style.cursor = (spaceKey) ? 'grab' : 'auto';
                grabbing = false;
            }
            if (selecting) {
                self.dom.dispatchEvent(new Event('selected'));
                self.bandbox.setStyle('display', 'none');
                selecting = false;
            }
            self.dom.ownerDocument.removeEventListener('pointermove', inputPointerMove);
            self.dom.ownerDocument.removeEventListener('pointerup', inputPointerUp);
        }
        function inputPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (grabbing) {
                const diffX = (event.clientX - startPoint.x) * (1 / self.#scale);
                const diffY = (event.clientY - startPoint.y) * (1 / self.#scale);
                self.#offset.x = (offset.x + diffX);
                self.#offset.y = (offset.y + diffY);
                self.zoomTo();
            } else if (selecting) {
                updateRubberbandBox(event.clientX, event.clientY);
            }
        }
        function updateRubberbandBox(toX, toY) {
            const inputRect = self.input.dom.getBoundingClientRect();
            const left = Math.min(startPoint.x, toX) - inputRect.left;
            const top = Math.min(startPoint.y, toY) - inputRect.top;
            const width = Math.abs(startPoint.x - toX);
            const height = Math.abs(startPoint.y - toY);
            self.bandbox.setStyle(
                'left', `${left}px`,
                'top', `${top}px`,
                'width', `${width}px`,
                'height', `${height}px`,
            );
            const rect = self.dom.getBoundingClientRect();
            const centerX = rect.left + ((rect.right - rect.left) / 2);
            const centerY = rect.top + ((rect.bottom - rect.top) / 2);
            const percentX = (centerX - left) / centerX;
            const percentY = (centerY - top) / centerY;
            const xMin = (centerX - (((rect.width / self.#scale) / 2) * percentX)) - self.#offset.x;
            const yMin = (centerY - (((rect.height / self.#scale) / 2) * percentY)) - self.#offset.y;
            const xMax = xMin + (width / self.#scale);
            const yMax = yMin + (height / self.#scale);
            function rubberbandIntersect(node) {
                return xMax >= node.left && xMin <= node.right && yMin <= node.bottom && yMax >= node.top;
            }
            const selected = [];
            const nodes = self.getNodes();
            nodes.forEach((node) => { if (rubberbandIntersect(node)) selected.push(node); });
            nodes.forEach((node) => {
                if (selected.includes(node)) node.addClass('suey-node-selected');
                else node.removeClass('suey-node-selected');
            });
        }
        this.input.onPointerDown(inputPointerDown);
        let rect = {};
        function resizerDown() {
            rect = self.minimap.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W$2, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.minimap.setStyle('left', `${newLeft}px`);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H$2, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.minimap.setStyle('top', `${newTop}px`);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W$2, rect.width + diffX), window.innerWidth - rect.left);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H$2, rect.height + diffY), window.innerHeight - rect.top);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            self.drawMiniMap();
            self.drawLines();
        }
        Interaction.makeResizeable(this.minimap, mapResizers, [ RESIZERS.LEFT, RESIZERS.TOP ], resizerDown, resizerMove);
        let translating = false;
        function calculateOffset(clientX, clientY) {
            const mapRect = self.minimap.dom.getBoundingClientRect();
            const nodesRect = self.nodes.dom.getBoundingClientRect();
            const percentX = ((mapRect.width / 2) - (clientX - mapRect.left)) / (mapRect.width / 2);
            const percentY = ((mapRect.height / 2) - (clientY - mapRect.top)) / (mapRect.height / 2);
            const bounds = self.nodeBounds(MAP_BUFFER, self.nodes.children, MIN_MAP_SIZE);
            if (!bounds.isFinite) return;
            if (self.#drawWidth > self.#drawHeight) {
                const ratio = (self.#drawWidth / self.#drawHeight);
                const x = bounds.center().x - ((bounds.width() / 2) * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * ratio * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            } else {
                const ratio = (self.#drawHeight / self.#drawWidth);
                const x = bounds.center().x - ((bounds.width() / 2) * ratio * percentX);
                const y = bounds.center().y - ((bounds.height() / 2) * percentY);
                self.#offset.x = ((nodesRect.width / 2) / self.#scale) - x;
                self.#offset.y = ((nodesRect.height / 2) / self.#scale) - y;
            }
            self.zoomTo();
        }
        function mapPointerDown(event) {
            self.stopAnimation();
            self.minimap.dom.setPointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grabbing');
            calculateOffset(event.clientX, event.clientY);
            translating = true;
        }
        function mapPointerUp(event) {
            self.minimap.dom.releasePointerCapture(event.pointerId);
            self.minimap.setStyle('cursor', 'grab');
            translating = false;
        }
        function mapPointerMove(event) {
            if (!translating) return;
            calculateOffset(event.clientX, event.clientY);
        }
        this.minimap.onPointerDown(mapPointerDown);
        this.minimap.onPointerUp(mapPointerUp);
        this.minimap.onPointerMove(mapPointerMove);
    }
    getScale() {
        return this.#scale;
    }
    addNode() {
        for (let i = 0, l = arguments.length; i < l; i++) {
            const node = arguments[i];
            if (this.nodes) {
                node.graph = this;
                this.nodes.add(node);
                node.setStyle('zIndex', this.nodes.children.length);
            }
        }
        this.drawMiniMap();
        this.drawLines();
    }
    getNodes() {
        return this.nodes.children;
    }
    removeNode(nodeToRemove) {
        if (!nodeToRemove || !nodeToRemove.isElement) return;
        const currentZ = nodeToRemove.zIndex;
        const lengthBefore = this.nodes.children.length;
        this.nodes.remove(nodeToRemove);
        const lengthAfter = this.nodes.children.length;
        if (lengthBefore === lengthAfter) return;
        this.nodes.children.forEach((node) => {
            if (node.zIndex > currentZ) node.setStyle('zIndex', `${node.zIndex - 1}`);
        });
        this.drawMiniMap();
        this.drawLines();
    }
    nodeBounds(buffer = 0, nodes = this.nodes.children, minSize = undefined) {
        const bounds = {
            x: { min: Infinity, max: -Infinity },
            y: { min: Infinity, max: -Infinity },
            isFinite: false,
            center: function() { return { x: 0, y: 0 }; },
        };
        nodes.forEach((node) => {
            bounds.x.min = Math.min(bounds.x.min, node.left);
            bounds.x.max = Math.max(bounds.x.max, node.right);
            bounds.y.min = Math.min(bounds.y.min, node.top);
            bounds.y.max = Math.max(bounds.y.max, node.bottom);
        });
        if ((bounds.x.max > bounds.x.min) && (bounds.y.max > bounds.y.min)) {
            bounds.isFinite = true;
            bounds.center = function() {
                const x = bounds.x.min + ((bounds.x.max - bounds.x.min) / 2);
                const y = bounds.y.min + ((bounds.y.max - bounds.y.min) / 2);
                return { x, y };
            };
            bounds.width = () => { return (bounds.x.max - bounds.x.min); };
            bounds.height = () => { return (bounds.y.max - bounds.y.min); };
            bounds.x.min -= buffer; bounds.x.max += buffer;
            bounds.y.min -= buffer; bounds.y.max += buffer;
            if (minSize) {
                if (bounds.width() < minSize) {
                    const addX = (minSize - bounds.width()) / 2;
                    bounds.x.min -= addX;
                    bounds.x.max += addX;
                }
                if (bounds.height() < minSize) {
                    const addY = (minSize - bounds.height()) / 2;
                    bounds.y.min -= addY;
                    bounds.y.max += addY;
                }
            }
        }
        return bounds;
    }
    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        if (!this.nodes) return;
        const nodes = this.nodes.children;
        nodes.sort((x, y) => x.zIndex - y.zIndex);
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node && node.isNode) callback(node);
        }
    }
    changeGridType(type = GRAPH_GRID_TYPES.LINES) {
        const SIZE = GRID_SIZE * 4;
        const HALF = SIZE / 2;
        const BORDER = 0;
        const B2 = BORDER * 2;
        this.gridType = type;
        if (type === GRAPH_GRID_TYPES.LINES) {
            const squares = new Canvas(SIZE, SIZE);
            const ctx = squares.ctx;
            ctx.clearRect(0, 0, squares.width, squares.height);
            ctx.globalAlpha = 0.55;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            ctx.fillRect(HALF + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            ctx.globalAlpha = 0.45;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(HALF + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
            ctx.fillRect(0 + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
            ctx.globalAlpha = 1;
            ctx.lineWidth = 0;
            ctx.strokeStyle = _color.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).cssString();
            ctx.strokeRect(0, 0, HALF, HALF);
            ctx.strokeRect(HALF, HALF, HALF, HALF);
            ctx.strokeRect(HALF, 0, HALF, HALF);
            ctx.strokeRect(0, HALF, HALF, HALF);
            this.grid.setStyle('background-image', `url('${squares.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        } else if (type === GRAPH_GRID_TYPES.DOTS) {
            const radius = SIZE / 25;
            const dots = new Canvas(SIZE, SIZE);
            const ctx = dots.ctx;
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            ctx.fillRect(0, 0, dots.width, dots.height);
            ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    ctx.beginPath();
                    ctx.ellipse(HALF * i, HALF * j, radius, radius, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            this.grid.setStyle('background-image', `url('${dots.dom.toDataURL()}')`);
            this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        }
    }
    connect() {
        if (this.activeItem && this.connectItem) {
            const active = this.activeItem;
            const connect = this.connectItem;
            if (active.type === NODE_TYPES.OUTPUT) {
                active.connect(connect);
            } else if (connect.type === NODE_TYPES.OUTPUT) {
                connect.connect(active);
            }
        }
        this.activeItem = undefined;
        this.connectItem = undefined;
        this.drawLines();
    }
    disconnect(item) {
        this.traverseNodes((node) => {
            node.outputList.children.forEach((output) => {
                const index = output.connections.indexOf(item);
                if (index > -1) {
                    output.connections.splice(index, 1);
                    item.reduceIncoming();
                }
                if (output.connections.length === 0) {
                    output.removeClass('suey-item-connected');
                }
            });
        });
    }
    drawLines() {
        if (!this.lines) return;
        if (this.isHidden()) return;
        const LINE_THICKNESS = 4;
        const self = this;
        const lines = this.lines;
        const linesRect = lines.dom.getBoundingClientRect();
        const xMin = linesRect.left;
        const xMax = linesRect.right;
        const yMin = linesRect.top;
        const yMax = linesRect.bottom;
        const ctx = lines.ctx;
        ctx.clearRect(0, 0, lines.width, lines.height);
        function scaleX(x) { return (x / linesRect.width) * lines.width; }
        function scaleY(y) { return (y / linesRect.height) * lines.height; }
        function drawLine(x1, y1, x2, y2, color1, color2 = color1) {
            if (!Number.isFinite(x1) || Number.isNaN(x1)) return;
            if (!Number.isFinite(x2) || Number.isNaN(x2)) return;
            if (!Number.isFinite(y1) || Number.isNaN(y1)) return;
            if (!Number.isFinite(y2) || Number.isNaN(y2)) return;
            ctx.strokeStyle = color1;
            if (color2 != null && color1 !== color2) {
                const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                gradient.addColorStop(0, color1);
                gradient.addColorStop(1, color2);
                ctx.strokeStyle = gradient;
            }
            ctx.lineWidth = LINE_THICKNESS * self.#scale;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            switch (self.curveType) {
                case GRAPH_LINE_TYPES.STRAIGHT:
                    ctx.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.ZIGZAG:
                    const xOffset = Math.abs((x2 - x1) * 0.25);
                    ctx.lineTo(x1 + xOffset, y1);
                    ctx.lineTo(x2 - xOffset, y2);
                    ctx.lineTo(x2, y2);
                    break;
                case GRAPH_LINE_TYPES.CURVE:
                default:
                    const curveOffset = Math.abs((x2 - x1) * 0.5);
                    ctx.bezierCurveTo(x1 + curveOffset, y1, x2 - curveOffset, y2, x2, y2);
                    break;
            }
            ctx.stroke();
        }
        function drawConnection(x1, y1, x2, y2, radius = 10, color1 = '#ffffff', color2 = color1, drawPoints = false) {
            const left = (x1 < x2) ? x1 : x2;
            const right = (x1 < x2) ? x2 : x1;
            const top = (y1 < y2) ? y1 : y2;
            const bottom = (y1 < y2) ? y2 : y1;
            if (! (xMax >= left && xMin <= right && yMin <= bottom && yMax >= top)) return;
            x1 = scaleX(x1);
            y1 = scaleY(y1);
            x2 = scaleX(x2);
            y2 = scaleY(y2);
            ctx.globalAlpha = 1.0;
            if (drawPoints) {
                const radiusX = scaleX(radius);
                const radiusY = scaleY(radius);
                ctx.fillStyle = color1;
                ctx.beginPath();
                ctx.ellipse(x1, y1, radiusX, radiusY, 0 , 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = color2;
                ctx.beginPath();
                ctx.ellipse(x2, y2, radiusX, radiusY, 0 , 0, 2 * Math.PI);
                ctx.fill();
            }
            drawLine(x1, y1, x2, y2, color1, color2);
        }
        const pointSize = parseFloat(Css.toPx('0.21429em', this.dom)) * this.#scale;
        this.traverseNodes((node) => {
            if (!node.outputList) return;
            node.outputList.children.forEach((item) => {
                const rectOut = item.point.dom.getBoundingClientRect();
                const x1 = rectOut.left + (rectOut.width / 2);
                const y1 = rectOut.top + (rectOut.height / 2);
                const color1 = item.node.colorString();
                item.connections.forEach((input) => {
                    const rectIn = input.point.dom.getBoundingClientRect();
                    const x2 = rectIn.left + (rectIn.width / 2);
                    const y2 = rectIn.top + (rectIn.height / 2);
                    const color2 = input.node.colorString();
                    drawConnection(x1, y1, x2, y2, pointSize, color1, color2);
                });
            });
        });
        if (this.activeItem) {
            const rect = this.activeItem.point.dom.getBoundingClientRect();
            const x1 = rect.left + (rect.width / 2);
            const y1 = rect.top + (rect.height / 2);
            const x2 = this.activePoint.x;
            const y2 = this.activePoint.y;
            const color = this.activeItem.node.colorString();
            const forward = this.activeItem.type === NODE_TYPES.OUTPUT;
            const drawPoints = !this.connectItem;
            if (forward) drawConnection(x1, y1, x2, y2, pointSize, color, color, drawPoints);
            else drawConnection(x2, y2, x1, y1, pointSize, color, color, drawPoints);
        }
    }
    drawMiniMap() {
        if (!this.mapCanvas) return;
        if (this.isHidden()) return;
        const map = this.mapCanvas;
        const ctx = map.ctx;
        ctx.clearRect(0, 0, map.width, map.height);
        const bounds = this.nodeBounds(MAP_BUFFER, this.nodes.children, MIN_MAP_SIZE);
        if (!bounds.isFinite) return;
        this.#drawWidth = map.width;
        this.#drawHeight = map.height;
        let adjustX = 0, adjustY = 0;
        const ratioX = map.width / bounds.width();
        const ratioY = (map.height / bounds.height()) * this.mapCanvas.ratio();
        if (ratioX > ratioY) {
            this.#drawWidth *= (ratioY / ratioX);
            adjustX = (this.#drawWidth - map.width) / 2;
        } else {
            this.#drawHeight *= (ratioX / ratioY);
            adjustY = (this.#drawHeight - map.height) / 2;
        }
        const rect = this.dom.getBoundingClientRect();
        const scaled = {};
        const centerX = rect.left + ((rect.right - rect.left) / 2);
        const centerY = rect.top + ((rect.bottom - rect.top) / 2);
        scaled.left = (centerX - ((rect.width / this.#scale) / 2)) - this.#offset.x;
        scaled.top = (centerY - ((rect.height / this.#scale) / 2)) - this.#offset.y;
        scaled.width = rect.width / this.#scale;
        scaled.height = rect.height / this.#scale;
        const x = (this.#drawWidth * ((scaled.left - bounds.x.min) / bounds.width())) - adjustX;
        const y = (this.#drawHeight * ((scaled.top - bounds.y.min) / bounds.height())) - adjustY;
        const w = this.#drawWidth * (scaled.width / bounds.width());
        const h = this.#drawHeight * (scaled.height / bounds.height());
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = _color.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).cssString();
        ctx.fillRect(x, y, w, h);
        const widthScale = this.minimap.getWidth() / this.mapCanvas.width;
        const heightScale = this.minimap.getHeight() / this.mapCanvas.height;
        ctx.globalAlpha = 0.75;
        ctx.strokeStyle = _color.set(ColorScheme.color(TRAIT.TEXT)).cssString();
        ctx.lineWidth = 2 / widthScale;
        ctx.beginPath(); ctx.moveTo(x + 0, y); ctx.lineTo(x + 0, y + h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x + w, y); ctx.lineTo(x + w, y + h); ctx.stroke();
        ctx.lineWidth = 2 / heightScale;
        ctx.beginPath(); ctx.moveTo(x, y + 0); ctx.lineTo(x + w, y + 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, y + h); ctx.lineTo(x + w, y + h); ctx.stroke();
        ctx.globalAlpha = 0.5;
        ctx.globalAlpha = 0.75;
        this.traverseNodes((node) => {
            ctx.fillStyle = node.colorString();
            const x = this.#drawWidth * ((node.left - bounds.x.min) / bounds.width());
            const w = this.#drawWidth * (node.width / bounds.width());
            const y = this.#drawHeight * ((node.top - bounds.y.min) / bounds.height());
            const h = this.#drawHeight * (node.height / bounds.height());
            ctx.beginPath();
            ctx.roundRect(x - adjustX, y - adjustY, w, h, 0);
            ctx.fill();
        });
    }
    centerView(resetZoom = true, animate = true) {
        const selected = [];
        this.traverseNodes((node) => { if (node.hasClass('suey-node-selected')) selected.push(node); });
        const bounds = this.nodeBounds(0, (selected.length > 0) ? selected : this.nodes.children);
        this.focusView(bounds.center().x, bounds.center().y, resetZoom, animate);
    }
    focusView(targetX, targetY, resetZoom = false, animate = true) {
        if (targetX == null || targetY == null) return;
        const rect = this.nodes.dom.getBoundingClientRect();
        this.#targetX = ((rect.width / 2) / this.#scale) - targetX;
        this.#targetY = ((rect.height / 2) / this.#scale) - targetY;
        this.#targetZoom = ((resetZoom) ? 1.0 : this.#scale) * 1000;
        if (animate) {
            const self = this;
            this.#animateStart = performance.now();
            this.#animateLast = performance.now();
            this.#startZoom = this.#scale * 1000;
            this.#animateTimer = setInterval(() => {
                this.#animating = true;
                function damp(x, y, lambda, dt) { return lerp(x, y, 1 - Math.exp(- lambda * dt)); }
                function lerp(x, y, t) { return (1 - t) * x + t * y; }
                const elapsed = (performance.now() - self.#animateStart) / 1000;
                const dt = (performance.now() - self.#animateLast) / 1000;
                self.#offset.x = damp(self.#offset.x, self.#targetX, 15, dt);
                self.#offset.y = damp(self.#offset.y, self.#targetY, 15, dt);
                self.#startZoom = damp(self.#startZoom, self.#targetZoom, 15 * (elapsed + 0.5), dt);
                const diffX = Math.abs(self.#offset.x - self.#targetX);
                const diffY = Math.abs(self.#offset.y - self.#targetY);
                const diffZ = Math.abs(self.#startZoom - self.#targetZoom);
                if (diffX < 0.5 && diffY < 0.5 && diffZ < 0.01) self.stopAnimation();
                if (elapsed > 2.5) self.stopAnimation();
                self.zoomTo(self.#startZoom / 1000);
                self.#animateLast = performance.now();
            }, ANIMATE_INTERVAL);
        } else {
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }
    #animating = false;
    #animateTimer = undefined;
    #animateStart = 0;
    #animateLast = 0;
    #targetX = 0;
    #targetY = 0;
    #startZoom = 0;
    #targetZoom = 0;
    stopAnimation() {
        clearInterval(this.#animateTimer);
        if (this.#animating) {
            this.#animating = false;
            this.#offset.x = this.#targetX;
            this.#offset.y = this.#targetY;
            this.zoomTo(this.#targetZoom / 1000);
        }
    }
    zoomTo(zoom, clientX, clientY) {
        if (zoom === undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, ZOOM_MIN), ZOOM_MAX) * 100) / 100;
        const nodes = this.nodes;
        const grid = this.grid;
        if (clientX != undefined && clientY != undefined) {
            const before = nodes.dom.getBoundingClientRect();
            nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
            const after = nodes.dom.getBoundingClientRect();
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offset.x -= ((shiftW - dw) / zoom);
            this.#offset.y -= ((shiftH - dh) / zoom);
        }
        nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offset.x}px, ${this.#offset.y}px)`);
        this.#scale = zoom;
        this.#previous.x = this.#offset.x;
        this.#previous.y = this.#offset.y;
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offset.x * zoom;
        const oy = this.#offset.y * zoom;
        grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);
        grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);
        grid.setStyle('opacity', (this.#scale < 1) ? (this.#scale * this.#scale) : '1');
        const resizeables = document.querySelectorAll(`.suey-node`);
        resizeables.forEach(el => {
            if (zoom < 0.5) el.classList.add('suey-too-small');
            else el.classList.remove('suey-too-small');
        });
        this.drawMiniMap();
        this.drawLines();
    }
}

const MIN_W$1 = 200;
const MIN_H$1 = 100;
const _color1 = new Iris();
const _color2 = new Iris();
class Node extends Div {
    #color = new Iris();
    #style = {};
    #needsUpdate = true;
    #startPosition = { x: 0, y: 0 };
    constructor({
        width = 200,
        height = 150,
        x = 0,
        y = 0,
        color = 0x888888,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-node');
        this.dom.setAttribute('tabindex', '-1');
        this.isNode = true;
        this.graph = undefined;
        this.#color.set(color);
        const panel = new Div().addClass('suey-node-panel');
        const border = new Div().addClass('suey-node-border');
        const sizers = new Div().addClass('suey-node-resizers');
        this.addToSelf(sizers, panel, border);
        this.contents = function() { return panel; };
        this.header = new Div().setClass('suey-node-header-title').setStyle('display', 'none');
        const lists = new Div().setClass('suey-node-interior');
        this.inputList = new Div().setClass('suey-node-item-list');
        this.outputList = new Div().setClass('suey-node-item-list');
        lists.add(this.inputList, this.outputList);
        this.add(this.header, lists);
        this.dom.addEventListener('focusout', () => self.removeClass('suey-active-node'));
        this.dom.addEventListener('focusin', () => self.activeNode());
        this.dom.addEventListener('displayed', () => self.activeNode());
        this.dom.addEventListener('pointerdown', () => self.activeNode());
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);
        let rect = {};
        function resizerDown() {
            rect.left = self.left;
            rect.top = self.top;
            rect.width = self.width;
            rect.height = self.height;
            nodePointerDown();
        }
        function resizerMove(resizer, diffX, diffY) {
            const scale = self.getScale();
            diffX *= (1 / scale);
            diffY *= (1 / scale);
            if (resizer.hasClassWithString('left')) {
                const newWidth = Math.max(self.roundNearest(rect.width - diffX), MIN_W$1);
                const newLeft = rect.left + (rect.width - newWidth);
                self.setStyle('left', `${newLeft}px`, 'width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newHeight = Math.max(self.roundNearest(rect.height - diffY), MIN_H$1);
                const newTop = rect.top + (rect.height - newHeight);
                self.setStyle('top', `${newTop}px`, 'height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.max(self.roundNearest(rect.width + diffX), MIN_W$1);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.max(self.roundNearest(rect.height + diffY), MIN_H$1);
                self.setStyle('height', `${newHeight}px`);
            }
        }
        Interaction.makeResizeable(this, sizers, resizers, resizerDown, resizerMove);
        let styleTimeout = undefined;
        const observer = new MutationObserver(() => {
            self.needsUpdate = true;
            clearTimeout(styleTimeout);
            styleTimeout = setTimeout(() => self.#updateSizes(), 4);
        });
        observer.observe(this.dom, { attributes: true, attributeFilter: [ 'style', 'class' ] });
        this.setStyle(
            'left', `${this.roundNearest(parseFloat(x))}px`,
            'top', `${this.roundNearest(parseFloat(y))}px`,
            'width', `${parseFloat(width)}px`,
            'height', `${parseFloat(height)}px`,
        );
        let clickCount = 0;
        let watchForSingleClick = false;
        let singleClickTimer;
        function dragDown() {
            if (!self.graph) return;
            self.graph.getNodes().forEach((node) => node.setStartPosition(node.left, node.top));
        }
        function dragMove(diffX, diffY) {
            watchForSingleClick = false;
            clickCount = 0;
            if (!self.graph) return;
            self.graph.getNodes().forEach((node) => {
                if (node.hasClass('suey-node-selected')) {
                    node.setStyle('left', `${self.roundNearest(node.getStartPosition().x + diffX)}px`);
                    node.setStyle('top', `${self.roundNearest(node.getStartPosition().y + diffY)}px`);
                }
            });
        }
        function dragUp() {
            if (!self.graph) return;
            self.dom.dispatchEvent(new Event('dragged'));
        }
        Interaction.makeDraggable(self, self, false , dragDown, dragMove, dragUp);
        function nodePointerDown(event) {
            clickCount++;
            if (event && event.button !== 0) {
                if (self.graph) setTimeout(() => self.graph.input.dom.dispatchEvent(event), 0);
                return;
            }
            if (self.graph) {
                const nodes = self.graph.getNodes();
                if (self.zIndex !== nodes.length) {
                    nodes.forEach(node => node.setStyle('zIndex', `${node.zIndex - 1}`));
                    self.setStyle('zIndex', nodes.length);
                }
            }
            const selected = document.querySelectorAll(`.suey-node-selected`);
            if (!self.hasClass('suey-node-selected')) {
                selected.forEach(el => { if (el !== self.dom) el.classList.remove('suey-node-selected'); });
                self.addClass('suey-node-selected');
                if (self.graph) self.graph.dom.dispatchEvent(new Event('selected'));
                watchForSingleClick = false;
            } else if (selected.length > 1) {
                watchForSingleClick = true;
            }
            self.dom.ownerDocument.addEventListener('pointerup', nodePointerUp);
        }
        function nodePointerUp() {
            clearTimeout(singleClickTimer);
            singleClickTimer = setTimeout(() => {
                if (watchForSingleClick && clickCount === 1) {
                    const selected = document.querySelectorAll(`.suey-node-selected`);
                    selected.forEach(el => { if (el !== self.dom) el.classList.remove('suey-node-selected'); });
                    self.addClass('suey-node-selected');
                    if (self.graph) self.graph.dom.dispatchEvent(new Event('selected'));
                }
                clickCount = 0;
                watchForSingleClick = false;
            }, 250);
            self.dom.ownerDocument.removeEventListener('pointerup', nodePointerUp);
        }
        this.onPointerDown(nodePointerDown);
        function nodeDoubleClick() {
            if (!self.graph) return;
            self.graph.centerView(false , true );
        }
        this.onDblClick(nodeDoubleClick);
        this.dom.addEventListener('destroy', function() {
            if (observer) observer.disconnect();
        }, { once: true });
    }
    get needsUpdate() { return this.#needsUpdate; }
    set needsUpdate(update) { this.#needsUpdate = update; }
    #updateSizes() {
        if (!this.#needsUpdate) return;
        const computed = getComputedStyle(this.dom);
        const style = this.#style;
        style.left = parseFloat(computed.left);
        style.top = parseFloat(computed.top);
        style.width = parseFloat(computed.width);
        style.height = parseFloat(computed.height);
        style.right = style.left + style.width;
        style.bottom = style.top + style.height;
        style.zIndex = parseInt(computed.zIndex);
        this.#needsUpdate = false;
        const self = this;
        if (this.graph) setTimeout(() => {
            self.graph.drawMiniMap();
            self.graph.drawLines();
        }, 20);
    }
    get left()   { this.#updateSizes(); return this.#style.left; }
    get top()    { this.#updateSizes(); return this.#style.top; }
    get width()  { this.#updateSizes(); return this.#style.width; }
    get height() { this.#updateSizes(); return this.#style.height; }
    get right()  { this.#updateSizes(); return this.#style.right; }
    get bottom() { this.#updateSizes(); return this.#style.bottom; }
    get zIndex() { this.#updateSizes(); return this.#style.zIndex; }
    roundNearest(decimal, increment = GRID_SIZE) {
        if (!this.graph || !this.graph.snapToGrid) return decimal;
        return Math.round(decimal / increment) * increment;
    }
    getScale() {
        return (this.graph ? this.graph.getScale() : 1.0);
    }
    getStartPosition() { return this.#startPosition; }
    setStartPosition(x = 0, y = 0) { this.#startPosition.x = x; this.#startPosition.y = y; }
    addItem(item) {
        item.node = this;
        switch (item.type) {
            case NODE_TYPES.INPUT: this.inputList.add(item); break;
            case NODE_TYPES.OUTPUT: this.outputList.add(item); break;
        }
    }
    createHeader(text = '', iconUrl) {
        if (this.header.children.length > 0) return;
        const icon = new VectorBox(iconUrl);
        const iconHolder = new Span().setClass('suey-node-header-icon').add(icon);
        const textHolder = new Span().setClass('suey-node-header-text').setTextContent(text);
        this.header.add(iconHolder, textHolder);
        this.header.setStyle('display', '');
        this.applyColor();
        this.name = text;
    }
    activeNode(withClass = 'suey-node') {
        const activeNode = this.dom;
        const panels = document.querySelectorAll(`.${withClass}`);
        panels.forEach(el => { if (el !== activeNode) el.classList.remove('suey-active-node'); });
        activeNode.classList.add('suey-active-node');
    }
    applyColor(color) {
        if (color !== undefined) this.#color.set(color);
        const colorLight = _color2.set(this.#color).darken(1.3).rgbString();
        const colorDark = _color1.set(this.#color).darken(0.7).rgbString();
        if (this.header) this.header.setStyle('background-image', `linear-gradient(to bottom, rgba(${colorLight}, 0.75), rgba(${colorDark}, 0.75))`);
        Css.setVariable('--node-color', _color1.set(this.#color).rgbString(), this.dom);
    }
    colorString() {
        return this.#color.cssString();
    }
}

class NodeItem extends Div {
    constructor({
        quantity = 1,
        type = NODE_TYPES.INPUT,
        title = '',
    } = {}) {
        super(title);
        const self = this;
        this.addClass('suey-node-item');
        const disconnect = new VectorBox(IMAGE_CLOSE);
        this.point = new Div().addClass('suey-node-item-point');
        this.detach = new Div().addClass('suey-node-item-detach').add(disconnect);
        this.add(this.point, this.detach);
        this.connections = [];
        this.incoming = 0;
        this.quantity = quantity;
        this.type = type;
        this.node = this;
        switch (type) {
            case NODE_TYPES.INPUT: this.addClass('suey-node-left'); break;
            case NODE_TYPES.OUTPUT: this.addClass('suey-node-right'); break;
        }
        this.graph = () => { return (self.node && self.node.graph) ? self.node.graph : undefined; };
        function pointPointerDown(event) {
            if (event.button !== 0) return;
            if (!self.graph()) return;
            event.stopPropagation();
            event.preventDefault();
            self.point.dom.ownerDocument.addEventListener('pointermove', pointPointerMove);
            self.point.dom.ownerDocument.addEventListener('pointerup', pointPointerUp);
            self.point.addClass('suey-active-item');
            self.graph().activeItem = self;
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.point.removeClass('suey-active-item');
            self.graph().connect();
            self.point.dom.ownerDocument.removeEventListener('pointermove', pointPointerMove);
            self.point.dom.ownerDocument.removeEventListener('pointerup', pointPointerUp);
        }
        function pointPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            self.graph().activePoint.x = event.clientX;
            self.graph().activePoint.y = event.clientY;
            self.graph().drawLines();
        }
        function pointPointerEnter(event) {
            if (self.graph() && self.graph().activeItem) {
                if (self.type !== self.graph().activeItem.type) {
                    self.graph().connectItem = self;
                    if (self.graph().activeItem) self.point.addClass('suey-active-item');
                    self.point.addClass('suey-hover-point');
                }
            } else {
                self.point.addClass('suey-hover-point');
            }
        }
        function pointPointerLeave(event) {
            if (self.graph()) {
                self.graph().connectItem = undefined;
                if (self.graph().activeItem !== self) self.point.removeClass('suey-active-item');
            }
            self.point.removeClass('suey-hover-point');
        }
        this.point.onPointerDown(pointPointerDown);
        this.point.onPointerEnter(pointPointerEnter);
        this.point.onPointerLeave(pointPointerLeave);
        function breakPointerDown(event) {
            if (!self.hasClass('suey-item-connected')) return;
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            self.disconnect();
        }
        this.detach.onPointerDown(breakPointerDown);
    }
    connect(item) {
        if (item === this) return;
        if (!this.connections.includes(item)) {
            if (this.connections.length >= this.quantity) {
                this.connections[this.connections.length - 1].reduceIncoming();
                this.connections.length = Math.max(0, this.connections.length - 1);
            }
            if (this.connections.length < this.quantity) {
                item.increaseIncoming();
                this.connections.push(item);
            }
        }
        if (this.connections.length > 0) {
            this.addClass('suey-item-connected');
        } else {
            this.removeClass('suey-item-connected');
        }
    }
    disconnect() {
        switch (this.type) {
            case NODE_TYPES.OUTPUT:
                for (let i = 0; i < this.connections.length; i++) {
                    this.connections[i].reduceIncoming();
                }
                this.connections.length = 0;
                break;
            case NODE_TYPES.INPUT:
                if (this.graph()) this.graph().disconnect(this);
                break;
        }
        this.removeClass('suey-item-connected');
        if (this.graph()) this.graph().drawLines();
    }
    increaseIncoming() {
        this.incoming++;
        this.addClass('suey-item-connected');
    }
    reduceIncoming() {
        if (this.incoming > 0) this.incoming--;
        if (this.incoming === 0) this.removeClass('suey-item-connected');
    }
}

class Shrinkable extends Panel {
    constructor({
        text = '',
        icon = '',
        arrow = 'left',
        border = true
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-shrinkable');
        if (!border) this.addClass('suey-borderless');
        this.titleDiv = undefined;
        this.bodyDiv = undefined;
        const title = new Div().setClass('suey-shrink-title');
        const titleArrow = new Span().setClass('suey-shrink-arrow');
        const arrowClicker = new Div().addClass('suey-shrink-arrow-clicker');
        titleArrow.add(arrowClicker);
        const titleText = new Span().setClass('suey-shrink-text').setInnerHtml(text);
        const titleIcon = new Span().setClass('suey-shrink-icon');
        if (icon) titleIcon.addClass('suey-has-icon');
        const iconBox = new VectorBox(icon);
        titleIcon.add(iconBox);
        if (arrow === 'right') {
            title.add(titleIcon, titleText, titleArrow);
        } else {
            title.add(titleArrow, titleIcon, titleText);
        }
        const body = new Div().setClass('suey-shrink-body');
        this.add(title);
        this.add(body);
        this.titleDiv = title;
        this.bodyDiv = body;
        this.contents = function() { return self.bodyDiv };
        this.setExpanded(true, false );
        function arrowClick() {
            self.toggle();
        }
        arrowClicker.onClick(arrowClick);
    }
    setExpanded(expand = true, dispatchEvent = true) {
        expand = Boolean(expand);
        this.isExpanded = expand;
        if (expand) this.addClass('suey-expanded');
        else this.removeClass('suey-expanded');
        if (dispatchEvent) this.dom.dispatchEvent(new Event('expand'));
    }
    sort() {
        const items = this.contents().children;
        items.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return  1;
            return 0;
        });
        for (let i = 0; i < items.length; i++) {
            items[i].setStyle('order', i);
        }
    }
    toggle() {
        this.setExpanded(!this.isExpanded);
    }
}

class Titled extends Panel {
    constructor({
        title,
        collapsible = false,
    } = {}) {
        super();
        const self = this;
        this.addClass('suey-titled');
        this.addClass('suey-expanded');
        this.isExpanded = true;
        this.tabTitle = new Div(title).addClass('suey-tab-title');
        if (title && title !== '') this.add(this.tabTitle);
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            const arrowClicker = new Div().setClass('suey-title-arrow-click');
            arrowClicker.add(new Div().setClass('suey-title-arrow'));
            this.tabTitle.add(arrowClicker);
            arrowClicker.onClick(() => { self.toggle(); });
        }
        this.scroller = new Div().addClass('suey-scroller');
        this.add(this.scroller);
        this.contents = function() { return this.scroller; };
    }
    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('suey-expanded');
            this.scroller.setDisplay('');
        } else {
            this.removeClass('suey-expanded');
            this.scroller.setDisplay('none');
        }
    }
    toggle() {
        this.setExpanded(!this.isExpanded);
    }
}

const MIN_W = 300;
const MIN_H = 150;
class Window extends Panel {
    #initialWidth;
    #initialHeight;
    #lastKnownRect;
    #maximized = false;
    #titleBar = undefined;
    constructor({
        style = PANEL_STYLES.FANCY,
        width = 600,
        height = 600,
        resizers = [ RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT ],
    } = {}) {
        super({ style });
        const self = this;
        this.addClass('suey-window');
        this.allowFocus();
        this.isWindow = true;
        this.#initialWidth = width;
        this.#initialHeight = height;
        this.dom.addEventListener('focusout', () => { self.removeClass('suey-active-window'); });
        this.dom.addEventListener('focusin', () => { self.activeWindow(); });
        this.dom.addEventListener('displayed', () => { self.activeWindow(); } );
        this.dom.addEventListener('pointerdown', () => { self.activeWindow(); } );
        let rect = {};
        function resizerDown() {
            self.focus();
            rect = self.dom.getBoundingClientRect();
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('left')) {
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.setStyle('left', `${newLeft}px`);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.setStyle('top', `${newTop}px`);
                self.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W, rect.width + diffX), window.innerWidth - rect.left);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H, rect.height + diffY), window.innerHeight - rect.top);
                self.setStyle('height', `${newHeight}px`);
            }
            self.dom.dispatchEvent(new Event('resizer'));
        }
        function resizerUp() {
            keepInWindow();
        }
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove, resizerUp);
        this.setStyle('left', '0', 'top', '0', 'width', '0', 'height', '0');
        if (document.readyState === 'complete') self.setInitialSize();
        else window.addEventListener('load', () => { self.setInitialSize(); }, { once: true });
        function keepInWindow() {
            const computed = getComputedStyle(self.dom);
            const rect = {
                left: parseFloat(computed.left),
                top: parseFloat(computed.top),
                width: parseFloat(computed.width),
                height: parseFloat(computed.height),
            };
            const titleHeight = parseInt(Css.toPx('4em'));
            let newLeft = Math.min(window.innerWidth - (rect.width / 2), rect.left);
            let newTop = Math.min(window.innerHeight - titleHeight, rect.top);
            newLeft = Math.max(- (rect.width / 2), newLeft);
            newTop = Math.max(0, newTop);
            self.setStyle('top', `${newTop}px`);
            self.setStyle('left', `${newLeft}px`);
        }
        window.addEventListener('resize', () => { keepInWindow(); });
        let firstTime = true;
        this.dom.addEventListener('displayed', () => {
            if (firstTime) {
                self.center();
                firstTime = false;
            }
            keepInWindow();
        });
    }
    addTitleBar(title = '', draggable = false, scale = 1.3) {
        if (!this.#titleBar) {
            this.#titleBar = new TitleBar(this, title, draggable, scale);
            this.addToSelf(this.#titleBar);
        } else {
            this.#titleBar.setTitle(title);
        }
    }
    setTitle(title = '') {
        if (this.#titleBar) this.#titleBar.setTitle(title);
    }
    activeWindow() {
        if (this.hasClass('suey-active-window')) return;
        this.addClass('suey-active-window');
        const windows = document.querySelectorAll('.suey-window');
        windows.forEach((element) => {
            if (element !== this.dom) element.classList.remove('suey-active-window');
        });
        const topZ = windows.length + 200;
        Css.setVariable('--window-z-index', `${topZ}`, this);
        windows.forEach((element) => {
            if (element !== this.dom) {
                let currentZ = Css.getVariable('--window-z-index', element);
                if (currentZ >= topZ) currentZ = topZ;
                currentZ--;
                if (currentZ < 200) currentZ = 200;
                Css.setVariable('--window-z-index', `${currentZ}`, element);
            }
        });
    }
    center() {
        const side = (window.innerWidth - this.getWidth()) / 2;
        const top = (window.innerHeight - this.getHeight()) / 2;
        this.setStyle('left', `${side}px`, 'top', `${top}px`);
    }
    setInitialSize() {
        const width = Css.toPx(Css.parseSize(this.#initialWidth), this, 'w');
        const height = Css.toPx(Css.parseSize(this.#initialHeight), this, 'h');
        this.setStyle('width', width);
        this.setStyle('height', height);
        this.dom.dispatchEvent(new Event('resizer'));
    }
    showWindow() {
        this.display();
        this.focus();
    }
    toggleMinMax() {
        if (!this.#maximized) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('top', `0`);
            this.setStyle('width', `${window.innerWidth}px`);
            this.setStyle('height', `${window.innerHeight}px`);
            this.#maximized = true;
        } else {
            const newLeft = Math.max(0, Math.min(window.innerWidth - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(window.innerHeight - this.#lastKnownRect.height, this.#lastKnownRect.top));
            this.setStyle('left', `${newLeft}px`);
            this.setStyle('top', `${newTop}px`);
            this.setStyle('width', `${this.#lastKnownRect.width}px`);
            this.setStyle('height', `${this.#lastKnownRect.height}px`);
            this.#maximized = false;
        }
        this.dom.dispatchEvent(new Event('resizer'));
    }
}
class TitleBar extends Div {
    constructor(parent, title = '', draggable = false, scale = 1.3) {
        if (!parent || !parent.isElement) return console.warn(`TitleBar: Missing parent element`);
        super();
        const self = this;
        this.setClass('suey-title-bar');
        this.addClass('suey-panel-button');
        this.setStyle('height', `${scale}em`, 'width', `${scale * 6}em`);
        this.setStyle('top', `${0.8 - ((scale + 0.28571 + 0.071) / 2)}em`);
        this.setTitle(title);
        function titleDown() {
            if (parent && typeof parent.focus === 'function') parent.focus();
        }
        if (draggable) {
            Interaction.makeDraggable(this, parent, true , titleDown);
        }
        this.onDblClick(() => {
            if (self.parent && self.parent.isElement) {
                if (typeof self.parent.setInitialSize === 'function') self.parent.setInitialSize();
                if (typeof self.parent.center === 'function') self.parent.center();
                window.dispatchEvent(new Event('resize'));
            }
        });
    }
    setTitle(title = '') {
        this.setInnerHtml(title);
        let width = parseFloat(Css.getTextWidth(title, Css.getFontCssFromElement(this.dom)));
        width += parseFloat(Css.toPx('4em'));
        this.setStyle('width', Css.toEm(`${width}px`));
    }
}

export { ALIGN, AbsoluteBox, AssetBox, BACKGROUNDS, Break, Button, CLOSE_SIDES, CORNERS, Canvas, Checkbox, Color, ColorScheme, Css, Div, Docker, Dropdown, Element, FlexBox, FlexSpacer, GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, Graph, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, IMAGE_EXPAND, Image, Interaction, Iris, LEFT_SPACING, Menu, MenuItem, MenuSeparator, MenuShortcut, NODE_TYPES, Node, NodeItem, NumberBox, NumberScroll, OVERFLOW, PANEL_STYLES, POSITION, Panel, Popper, PropertyList, RESIZERS, Row, ShadowBox, Shrinkable, Signal, SignalBinding, Slider, Span, TAB_SIDES, THEMES, TOOLTIP_Y_OFFSET, TRAIT, Tabbed, Text, TextArea, TextBox, Titled, ToolbarButton, ToolbarSeparator, ToolbarSpacer, TreeList, Utils, VectorBox, Window, tooltipper };
