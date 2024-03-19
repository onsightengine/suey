/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/suey
 * @version     v0.1.20
 */
var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M373.189%2c648.684c-0%2c-0 -237.09%2c-138.996 -258.087%2c-117.999c-20.997%2c20.997 212.331%2c288.419 212.331%2c288.419c1.975%2c3.009 4.284%2c5.857 6.926%2c8.499c10.698%2c10.698 24.796%2c15.945 38.83%2c15.71c14.035%2c0.235 28.132%2c-5.012 38.831%2c-15.71c2.641%2c-2.642 4.95%2c-5.49 6.926%2c-8.499c-0%2c-0 423.255%2c-489.7 496.91%2c-611.246c9.004%2c-14.859 -15.991%2c-40.415 -34.446%2c-27.458c-108.024%2c75.837 -508.221%2c468.284 -508.221%2c468.284Z' style='fill:%23ebebeb%3b'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M386.576%2c386.574c-12.567%2c12.568 -33.514%2c12.568 -46.08%2c0.002l-84.496%2c-84.498l-84.497%2c84.498c-12.566%2c12.566 -33.512%2c12.566 -46.079%2c-0c-12.566%2c-12.568 -12.566%2c-33.513 0%2c-46.079l84.497%2c-84.496l-84.497%2c-84.498c-12.566%2c-12.566 -12.566%2c-33.511 0%2c-46.079c12.567%2c-12.565 33.513%2c-12.565 46.079%2c-0l84.496%2c84.498l84.497%2c-84.498c12.566%2c-12.565 33.512%2c-12.565 46.079%2c-0c12.566%2c12.568 12.566%2c33.513 0%2c46.079l-84.497%2c84.496l84.498%2c84.498c12.565%2c12.566 12.565%2c33.51 0%2c46.077Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M202.677%2c396c-6.857%2c0 -13.038%2c-4.13 -15.662%2c-10.465c-2.624%2c-6.335 -1.174%2c-13.626 3.674%2c-18.474c44.911%2c-44.911 130.904%2c-130.904 176.025%2c-176.025c4.906%2c-4.906 12.285%2c-6.374 18.696%2c-3.719c6.41%2c2.656 10.59%2c8.911 10.59%2c15.85c0%2c45.295 0%2c117.022 0%2c159.048c0%2c18.659 -15.126%2c33.785 -33.785%2c33.785l-159.538%2c0Z' style='fill:white%3b'/%3e%3cpath d='M303.059%2c116c6.881%2c-0 13.084%2c4.145 15.717%2c10.502c2.634%2c6.357 1.178%2c13.674 -3.687%2c18.54c-43.748%2c43.748 -126.088%2c126.087 -169.914%2c169.913c-4.888%2c4.888 -12.239%2c6.35 -18.625%2c3.705c-6.386%2c-2.645 -10.55%2c-8.877 -10.55%2c-15.789c-0%2c-43.783 -0%2c-112.154 -0%2c-152.928c-0%2c-18.746 15.197%2c-33.943 33.943%2c-33.943l153.116%2c-0Z' style='fill:white%3b'/%3e%3c/svg%3e";

const IMAGE_CHECK = img$3;
const IMAGE_CLOSE = img$2;
const IMAGE_EMPTY = img$1;
const IMAGE_EXPAND = img;
const GRID_SIZE = 25;
const MOUSE_CLICK = 500;
const MOUSE_SLOP_SMALL = 2;
const MOUSE_SLOP_LARGE = 5;
const TOOLTIP_Y_OFFSET = '0.3em';
const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
};
const THEMES = {
    CLASSIC:            0x00aacc,
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

const _clr$2 = new Iris();
const _icon = new Iris();
const _icon_light = new Iris();
const _icon_dark = new Iris();
const _complement = new Iris();
const _triadic1 = new Iris();
const _triadic2 = new Iris();
const _triadic3 = new Iris();
const _triadic4 = new Iris();
const DEFAULT_CLR = 0x00b4af;
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
        _color$3 = _clr$2.set(color).hex();
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
        Css.setVariable('--shadow',             _clr$2.set(ColorScheme.color(TRAIT.SHADOW)).rgbString());
        Css.setVariable('--darkness',           _clr$2.set(ColorScheme.color(TRAIT.DARKNESS)).rgbString());
        Css.setVariable('--background-dark',    _clr$2.set(ColorScheme.color(TRAIT.BACKGROUND_DARK)).rgbString());
        Css.setVariable('--background-light',   _clr$2.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).rgbString());
        Css.setVariable('--button-dark',        _clr$2.set(ColorScheme.color(TRAIT.BUTTON_DARK)).rgbString());
        Css.setVariable('--button-light',       _clr$2.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).rgbString());
        Css.setVariable('--text-dark',          _clr$2.set(ColorScheme.color(TRAIT.TEXT_DARK)).rgbString());
        Css.setVariable('--text',               _clr$2.set(ColorScheme.color(TRAIT.TEXT)).rgbString());
        Css.setVariable('--text-light',         _clr$2.set(ColorScheme.color(TRAIT.TEXT_LIGHT)).rgbString());
        Css.setVariable('--blacklight',         _clr$2.set(ColorScheme.color(TRAIT.BLACKLIGHT)).rgbString());
        Css.setVariable('--darklight',          _clr$2.set(ColorScheme.color(TRAIT.DARKLIGHT)).rgbString());
        Css.setVariable('--midlight',           _clr$2.set(ColorScheme.color(TRAIT.MIDLIGHT)).rgbString());
        Css.setVariable('--highlight',          _clr$2.set(ColorScheme.color(TRAIT.HIGHLIGHT)).rgbString());
        Css.setVariable('--icon-dark',          _clr$2.set(ColorScheme.color(TRAIT.ICON_DARK)).rgbString());
        Css.setVariable('--icon',               _clr$2.set(ColorScheme.color(TRAIT.ICON)).rgbString());
        Css.setVariable('--icon-light',         _clr$2.set(ColorScheme.color(TRAIT.ICON_LIGHT)).rgbString());
        Css.setVariable('--complement',         _clr$2.set(ColorScheme.color(TRAIT.COMPLEMENT)).rgbString());
        Css.setVariable('--triadic1',           _clr$2.set(ColorScheme.color(TRAIT.TRIADIC1)).rgbString());
        Css.setVariable('--triadic2',           _clr$2.set(ColorScheme.color(TRAIT.TRIADIC2)).rgbString());
        Css.setVariable('--triadic3',           _clr$2.set(ColorScheme.color(TRAIT.TRIADIC3)).rgbString());
        Css.setVariable('--triadic4',           _clr$2.set(ColorScheme.color(TRAIT.TRIADIC4)).rgbString());
        Css.setVariable('--bright',             (_background == BACKGROUNDS.LIGHT) ? '0' : '1');
        const startHue = _clr$2.set(DEFAULT_CLR).hue();
        const newHue = _clr$2.set(ColorScheme.color(TRAIT.ICON, true )).hue();
        const diffHue = `${newHue - startHue}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }
    static color(guiColor, ignoreSaturation = false) {
        _clr$2.set(0);
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
                case TRAIT.SHADOW:              _clr$2.set(140, 140, 140, 'rgb'); break;
                case TRAIT.BACKGROUND_DARK:     _clr$2.set(180, 180, 180, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$2.set(190, 190, 190, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$2.set(200, 200, 200, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$2.set(210, 210, 210, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$2.set( 80,  80,  80, 'rgb'); break;
                case TRAIT.TEXT:                _clr$2.set( 50,  50,  50, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$2.set( 25,  25,  25, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr$2.set(255, 255, 255, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr$2.set(200, 200, 200, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr$2.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$2.set(  0,   0,   0, 'rgb'); break;
            }
        } else {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr$2.set(  0,   0,   0, 'rgb'); tint = 0; break;
                case TRAIT.BACKGROUND_DARK:     _clr$2.set( 24,  24,  24, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr$2.set( 32,  32,  32, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr$2.set( 40,  40,  40, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr$2.set( 60,  60,  60, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr$2.set(100, 100, 100, 'rgb'); break;
                case TRAIT.TEXT:                _clr$2.set(190, 190, 190, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr$2.set(225, 225, 225, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr$2.set(  0,   0,   0, 'rgb'); lightness = 0; break;
                case TRAIT.DARKLIGHT:           _clr$2.set(  8,   8,   8, 'rgb'); lightness = 0; break;
                case TRAIT.MIDLIGHT:            _clr$2.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr$2.set(255, 255, 255, 'rgb'); break;
            }
            if (_background == BACKGROUNDS.MID && guiColor == TRAIT.DARKLIGHT) {
                _clr$2.set( 64,  64,  64, 'rgb');
            }
        }
        if (guiColor === TRAIT.DARKNESS) {
            switch (_background) {
                case BACKGROUNDS.DARK:      _clr$2.set(  0,   0,   0, 'rgb');     break;
                case BACKGROUNDS.MID:       _clr$2.set( 64,  64,  64, 'rgb');     break;
                case BACKGROUNDS.LIGHT:     _clr$2.set(128, 128, 128, 'rgb');     break;
                case BACKGROUNDS.FADED:     _clr$2.set(  0,   0,   0, 'rgb');     break;
            }
        }
        switch (guiColor) {
            case TRAIT.ICON_DARK:   _clr$2.copy(_icon_dark);  break;
            case TRAIT.ICON:        _clr$2.copy(_icon);       break;
            case TRAIT.ICON_LIGHT:  _clr$2.copy(_icon_light); break;
            case TRAIT.COMPLEMENT:  _clr$2.copy(_complement); break;
            case TRAIT.TRIADIC1:    _clr$2.copy(_triadic1);   break;
            case TRAIT.TRIADIC2:    _clr$2.copy(_triadic2);   break;
            case TRAIT.TRIADIC3:    _clr$2.copy(_triadic3);   break;
            case TRAIT.TRIADIC4:    _clr$2.copy(_triadic4);   break;
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
        if (tint !== 0) _clr$2.mix(_icon, tint);
        if (lightness !== 0) _clr$2.brighten(lightness);
        if (darkness !== 0) _clr$2.darken(darkness);
        if (saturation !== 0 && !ignoreSaturation) _clr$2.hslOffset(0, saturation, 0);
        return _clr$2.hex();
    }
}

class Dom {
    static findElementAt(className, centerX, centerY, exclude = null) {
        const domElements = document.elementsFromPoint(centerX, centerY);
        for (const dom of domElements) {
            if (dom.classList.contains(className)) {
                if (exclude && dom === exclude) continue;
                return dom.suey;
            }
        }
        return null;
    }
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
            Dom.traverse(element.children[i], applyFunction, true);
        }
    }
    static parentScroller(element) {
        if (!element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Dom.parentScroller(element.parentElement);
        }
    }
    static scrollIntoView(element) {
        const parent = Dom.parentScroller(element);
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
        if (dom == null) {
            console.trace('Element.constructor: No HTMLElement provided!');
            dom = document.createElement('div');
        }
        const self = this;
        this.isElement = true;
        this.dom = dom;
        this.name = undefined;
        this.contents = function() { return self; };
        this.children = [];
        this.parent = undefined;
        this.slots = [];
        let suey = null;
        Object.defineProperties(this.dom, {
            suey: {
                get: function() { return suey; },
                set: function(element) { suey = element; },
            },
        });
        this.dom.suey = self;
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
            console.warn(`Element.addSlot: '${this.name}' failed to add slot`, slot);
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
    detach(element) {
        let removed = removeFromParent(this.contents(), element, false );
        if (!removed) removed = removeFromParent(this, element, false );
        return removed;
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
    setID(id) {
        this.dom.id = id;
        if (this.name === undefined) this.name = id;
        return this;
    }
    getID() {
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
    getRelativePosition() {
        const rect = this.dom.getBoundingClientRect();
        let parentRect = null;
        let offsetX = 0;
        let offsetY = 0;
        let parent = this.dom.offsetParent;
        while (parent) {
            parentRect = parent.getBoundingClientRect();
            offsetX += parentRect.left;
            offsetY += parentRect.top;
            parent = null;
        }
        const relativeLeft = rect.left - offsetX;
        const relativeTop = rect.top - offsetY;
        return { left: relativeLeft, top: relativeTop };
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
    if (!parent) return;
    if (element.isElement) {
        if (parent.isElement && element.parent === parent) return;
        if (element.parent && element.parent.isElement) {
            removeFromParent(element.parent, element, false);
        }
    }
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
function removeFromParent(parent, element, destroy = true) {
    if (!parent) return undefined;
    if (!element) return undefined;
    if (element.isElement && parent.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                parent.children.splice(i, 1);
                element.parent = undefined;
            }
        }
    }
   if (destroy) clearChildren(element);
    try {
        if (parent.isElement) {
            return parent.dom.removeChild((element.isElement) ? element.dom : element);
        } else {
            return parent.removeChild((element.isElement) ? element.dom : element);
        }
    } catch (error) {
        return undefined;
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
            return this.getID();
        },
        set: function(value) {
            this.setID(value);
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
        let downX, downY, rect = {}, startingRect = {};
        let lastX, lastY;
        let minDistance = 0;
        let moreThanSlop = false;
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
            const computed = getComputedStyle(dragElement);
            startingRect.left = rect.left = parseFloat(computed.left);
            startingRect.top = rect.top = parseFloat(computed.top);
            startingRect.width = rect.width = parseFloat(computed.width);
            startingRect.height = rect.height = parseFloat(computed.height);
            eventElement.ownerDocument.addEventListener('pointermove', dragPointerMove);
            eventElement.ownerDocument.addEventListener('pointerup', dragPointerUp);
            document.dispatchEvent(new Event('closemenu'));
            moreThanSlop = false;
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
            const computed = getComputedStyle(dragElement);
            rect.width = parseFloat(computed.width);
            rect.height = parseFloat(computed.height);
            const xDiff = (startingRect.width - rect.width) / 2;
            const yDiff = 0;
            minDistance = Math.max(minDistance, Math.abs(downX - lastX));
            minDistance = Math.max(minDistance, Math.abs(downY - lastY));
            if (!moreThanSlop && minDistance < MOUSE_SLOP_SMALL) return;
            moreThanSlop = true;
            eventElement.style.cursor = 'move';
            const scale = ((element && element.getScale) ? element.getScale() : 1);
            const diffX = (lastX - downX + xDiff) * (1 / scale);
            const diffY = (lastY - downY + yDiff) * (1 / scale);
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
            if (parent.isWindow) {
                const parentRect = parent.dom.parentElement.getBoundingClientRect();
                if (event.clientX < parentRect.left + 50) {
                    parent.dockLeft();
                } else if (event.clientX > parentRect.right - 50) {
                    parent.dockRight();
                } else {
                    parent.undock();
                }
            }
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

class Span extends Element {
    constructor(innerHtml) {
        super(document.createElement('span'));
        this.setInnerHtml(innerHtml);
    }
}

class FlexSpacer extends Span {
    constructor() {
        super();
        this.setStyle('flex', '1 1 auto');
        this.setStyle('minHeight', '0.01em');
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

class Row extends Div {
    constructor() {
        super();
        this.addClass('suey-row');
    }
}

class Text extends Span {
    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('suey-text');
        this.setStyle('cursor', 'default');
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
                console.error('PropertyList.createControls:', argument, 'is not an instance of Element.');
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

const _color$2 = new Iris();
class Tab extends Panel {
    constructor(id = 'unknown', content, options = {}) {
        super();
        this.setID(id);
        this.addClass('suey-tab-panel', 'suey-hidden');
        this.add(content);
        this.dock = null;
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
        this.button = new TabButton(this, capitalize$1(id), options);
    }
}
class TabButton extends Div {
    constructor(tabPanel, label, options = {}) {
        super();
        const self = this;
        this.setClass('suey-tab-button');
        this.setStyle('cursor', 'default');
        if (options.shadow) this.addClass('suey-tab-shadow');
        this.tabPanel = tabPanel;
        this.iconVector = new VectorBox(options.icon);
        this.iconBorder = new Div().setClass('suey-tab-icon-border');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) { self.iconBorder.dom.setAttribute('tooltip', label); };
        this.setLabel(label);
        if (typeof options.color === 'string' && options.color.includes('var(--')) {
            this.iconVector.setStyle('background-color', `rgba(${options.color}, ${options.alpha})`);
        } else {
            _color$2.set(options.color);
            const light = `rgba(${_color$2.rgbString(options.alpha)})`;
            const dark = `rgba(${_color$2.darken(0.75).rgbString(options.alpha)})`;
            const background = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', background);
        }
        const shadow = options.shadow;
        if (this.iconVector.img && shadow !== false) {
            _color$2.set(shadow);
            const dropShadow = `drop-shadow(0 0 var(--pad-micro) rgba(${_color$2.rgbString()}, 0.8))`;
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
        let downX = 0, downY = 0, downTime = 0;
        let minDistance = 0;
        let currentParent = undefined;
        let tabIndex = -1;
        function onPointerDown(event) {
            if (event.button !== 0) return;
            event.stopPropagation();
            event.preventDefault();
            downTime = performance.now();
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
        }
        function onPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            minDistance = Math.max(minDistance, Math.abs(downX - event.pageX));
            minDistance = Math.max(minDistance, Math.abs(downY - event.pageY));
            if (!self.hasClass('suey-dragging')) {
                if (minDistance < MOUSE_SLOP_LARGE) return;
                self.addClass('suey-dragging');
                currentParent = self.dom.parentElement;
                if (currentParent) tabIndex = Array.from(currentParent.children).indexOf(self.dom);
                document.body.appendChild(self.dom);
            }
            const newLeft = event.pageX - (self.getWidth() / 2);
            const newTop = event.pageY - (self.getHeight() / 2);
            self.setStyle('left', `${newLeft}px`, 'top', `${newTop}px`);
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            if (self.hasClass('suey-dragging')) {
                self.removeClass('suey-dragging');
                if (currentParent) {
                    if (tabIndex >= 0 && tabIndex < currentParent.children.length) {
                        currentParent.insertBefore(self.dom, currentParent.children[tabIndex]);
                    } else {
                        currentParent.appendChild(self.dom);
                    }
                }
                currentParent = null;
                tabIndex = -1;
                self.setStyle('left', '', 'top', '');
                self.tabPanel.dock.handleTabDrop(self, event.pageX, event.pageY);
            } else {
                if (performance.now() - downTime < MOUSE_CLICK) {
                    self.tabPanel.dock.selectTab(self.tabPanel.getID(), true);
                    self.tabPanel.dock.dom.dispatchEvent(new Event('resized'));
                }
            }
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        }
        this.dom.addEventListener('pointerdown', onPointerDown);
    }
    getID() {
        return this.tabPanel?.getID();
    }
}
function capitalize$1(string) {
    const words = String(string).split(' ');
    for (let i = 0; i < words.length; i++) words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    return words.join(' ');
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
        this.buttons = [];
        this.panels = [];
        this.selectedID = '';
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
        this.buttonsDiv = new Div().setClass('suey-buttons').setDisplay('none');
        this.panelsDiv = new Div().setClass('suey-tab-panels');
        this.add(this.buttonsDiv);
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
    addTab(tabPanel) {
        if (!tabPanel || !tabPanel.hasClass('suey-tab-panel')) {
            console.error(`Tabbed.addTab: Expected Tab as first argument`, tabPanel);
            return null;
        }
        tabPanel.dock = this;
        this.buttons.push(tabPanel.button);
        this.buttonsDiv.add(tabPanel.button);
        this.panels.push(tabPanel);
        this.panelsDiv.add(tabPanel);
        const hideWhenNumberOfTabs = 0;
        if (this.buttons.length > hideWhenNumberOfTabs) this.buttonsDiv.setDisplay('');
        this.setContentsStyle('minHeight', '');
        if (this.buttonsDiv.hasClass('suey-left-side') || this.buttonsDiv.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.buttons.length) + 0.4) + 'em');
        }
        return tabPanel;
    }
    addNewTab(tabID, content, options = {}) {
        return this.addTab(new Tab(tabID, content, options));
    }
    selectFirst() {
        if (this.panels.length > 0) {
            return this.selectTab(this.panels[0].getID());
        }
        return false;
    }
    selectLastKnownTab() {
    }
    selectTab(newID, wasClicked = false) {
        const selectedID = this.selectedID;
        const panel = this.panels.find((item) => (item.getID() === newID));
        if (panel && panel.button) {
            const button = panel.button;
            if (!wasClicked) Css.setVariable('--tab-timing', '0', button.dom);
            const currentPanel = this.panels.find((item) => (item.getID() === selectedID));
            if (currentPanel) {
                currentPanel.addClass('suey-hidden');
                if (currentPanel.button) currentPanel.button.removeClass('suey-selected');
            }
            panel.removeClass('suey-hidden');
            button.addClass('suey-selected');
            this.selectedID = newID;
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = newID;
                this.dom.dispatchEvent(tabChange);
            }
            if (!wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', button.dom), 50);
            return true;
        }
        return false;
    }
    clearTabs() {
        if (this.buttonsDiv) this.buttonsDiv.clearContents();
        if (this.panelsDiv) this.panelsDiv.clearContents();
        if (this.buttons) {
            for (const button of this.buttons) button.destroy();
            this.buttons.length = 0;
        }
        if (this.panels) {
            for (const panel of this.panels) panel.destroy();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }
    destroy() {
        this.clearTabs();
        super.destroy();
    }
    removeTab(index) {
        if (index >= 0 && index < this.panels.length) {
            const button = this.buttons[index];
            const panel = this.panels[index];
            if (button) button.removeClass('suey-selected');
            if (panel) panel.addClass('suey-hidden');
            this.buttons.splice(index, 1);
            this.buttonsDiv.detach(button);
            this.panels.splice(index, 1);
            this.panelsDiv.detach(panel);
        }
    }
    handleTabDrop(tabButton, dropX, dropY) {
        const droppedOnPanel = Dom.findElementAt('suey-tabbed', dropX, dropY, this.dom);
        if (droppedOnPanel && droppedOnPanel !== this) {
            const tabIndex = this.buttons.indexOf(tabButton);
            if (tabIndex !== -1) {
                const panel = this.panels[tabIndex];
                this.removeTab(tabIndex);
                if (this.selectedID === tabButton.tabPanel.getID() && tabIndex > 0) {
                    this.selectTab(this.buttons[tabIndex - 1].getID());
                } else {
                    this.selectFirst();
                }
                droppedOnPanel.addTab(panel);
                droppedOnPanel.selectTab(panel.id, false);
            }
        }
    }
    getTabSide() {
        if (this.buttonsDiv.hasClass('suey-left-side')) return 'left';
        if (this.buttonsDiv.hasClass('suey-right-side')) return 'right';
        return 'unknown';
    }
    setTabSide(side) {
        side = String(side).toLowerCase();
        this.buttonsDiv.removeClass('suey-left-side', 'suey-right-side');
        this.buttonsDiv.addClass((side === TAB_SIDES.RIGHT) ? 'suey-right-side' : 'suey-left-side');
    }
    tabIndex(id) {
        return this.panels.indexOf(id);
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

const _color$1 = new Iris();
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
            _color$1.set(colorBox.dom.value);
            return _color$1.hex();
        };
        this.setValue = function(value) {
            if (!colorBox.dom) return this;
            _color$1.set(value);
            colorBox.dom.value = _color$1.hexString();
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
const _clr$1 = new Iris();
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
        this.mouseArea.setAttribute('fill', _clr$1.setRandom().hexString());
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
            if (dontCloseChildrenOf && Dom.isChildOf(child.dom, dontCloseChildrenOf)) {
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
        if (Dom.isChildOfElementWithClass(this.dom, 'suey-menu')) {
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

const _clr = new Iris();
class Gooey extends Tabbed {
    constructor(title, opacity) {
        super({ style: PANEL_STYLES.FANCY });
        this.addClass('suey-gooey');
        this.toggleResize(RESIZERS.LEFT, true);
        this.minWidth = 180;
        this.opacity(opacity);
        const titlePanel = new Titled({ title: title, collapsible: true });
        this.add(titlePanel);
        this.contents = function() { return titlePanel.scroller; };
        document.body.appendChild(this.dom);
    }
    addFolder(folderName = '', icon = '') {
        if (folderName && folderName !== '') folderName = capitalize(folderName);
        const folder = new Folder({ title: folderName, icon });
        this.add(folder);
        return folder;
    }
    color(color) {
        ColorScheme.changeColor(color);
        return this;
    }
    opacity(opacity) {
        if (opacity == null || Number.isNaN(opacity)) return;
        opacity = Math.min(Math.max(opacity, 0.0), 1.0);
        Css.setVariable('--panel-transparency', opacity);
        return this;
    }
    scale(multiplier) {
        if (!multiplier) multiplier = 1.0;
        multiplier = parseFloat(multiplier);
        const newSize = 14  * multiplier;
        const fontSize = Math.min(Math.max(newSize, 7 ), 42 );
        Css.setVariable('--font-size', Css.toPx(fontSize, this.dom));
        return this;
    }
    width(width) {
        if (width == null) return;
        if (width < this.minWidth * Css.guiScale(this.dom)) width = this.minWidth * Css.guiScale(this.dom);
        if (width > this.maxWidth * Css.guiScale(this.dom)) width = this.maxWidth * Css.guiScale(this.dom);
        this.setWidth(Css.toEm(width, this.dom));
        return this;
    }
}
class Folder extends Shrinkable {
    constructor({
        title,
        icon,
    } = {}) {
        super({ text: title, icon });
        this.props = new PropertyList('45%', LEFT_SPACING.NORMAL);
        this.add(this.props);
        this.add = function(params, variable, a, b, c, d) {
            const value = params[variable];
            if (value == undefined) {
                return null;
            } else if (typeof value === 'boolean') {
                return this.addBoolean(params, variable);
            } else if (typeof value === 'number') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addNumber(params, variable, a, b, c, d);
                }
            } else if (typeof value === 'string') {
                if (Array.isArray(a) && a.length > 0) {
                    return this.addList(params, variable, a);
                } else {
                    return this.addString(params, variable);
                }
            } else if (typeof value === 'function') {
                return this.addFunction(params, variable);
            } else if (Array.isArray(value) && value.length > 0) {
                return this.addVector(params, variable);
            }
        };
    }
    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.onChange(() => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { boolBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addColor(params, variable) {
        let type;
        let value = params[variable];
        if (value == undefined) { return null; }
        else if (typeof value === 'string') { type = 'string'; }
        else if (Array.isArray(value)) { type = 'array'; }
        else if (typeof value === 'object') { type = 'object'; }
        else { type = 'number'; }
        const prop = new Property();
        const colorButton = new Color();
        function setVariable(newValue) {
            _clr.set(newValue);
            switch (type) {
                case 'string': params[variable] = _clr.hexString(); break;
                case 'array': _clr.toArray(params[variable]); break;
                case 'object': _clr.getRGB(params[variable]); break;
                case 'number': params[variable] = _clr.hex(); break;
                default:
            }
        }
        colorButton.onInput(() => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
        });
        colorButton.onChange(() => {
            setVariable(colorButton.getHexValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), colorButton);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { colorButton.setValue(_clr.set(params[variable]).hex()); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addFunction(params, variable) {
        const prop = new Property();
        const button = new Button(prettyTitle(variable));
        button.onClick(() => params[variable]());
        const row = this.props.addRow(prettyTitle(variable), button);
        prop.name = function(name, buttonText) {
            row.leftWidget.setInnerHtml(name);
            if (buttonText) button.setInnerHtml(buttonText);
            return prop;
        };
        return prop;
    }
    addList(params, variable, options) {
        const prop = new Property();
        const type = (typeof params[variable] === 'string') ? 'string' : 'number';
        const selectOptions = {};
        for (let option of options) selectOptions[option] = option;
        const selectDropDown = new Dropdown();
        selectDropDown.overflowMenu = OVERFLOW.LEFT;
        selectDropDown.setOptions(selectOptions);
        selectDropDown.onChange(() => {
            params[variable] = (type === 'string') ? selectDropDown.getValue() : selectDropDown.getIndex();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), selectDropDown);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() {
            if (type === 'string') selectDropDown.setValue(params[variable]);
            else selectDropDown.setIndex(params[variable]);
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addNumber(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const slider = new Slider();
        const slideBox = new NumberBox();
        slider.onInput(() => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
        });
        slider.onChange(() => {
            params[variable] = slider.getValue();
            slideBox.setValue(slider.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slideBox.onChange(() => {
            params[variable] = slideBox.getValue();
            slider.setValue(slideBox.getValue());
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        slider.onPointerDown((event) => event.stopPropagation());
        slider.onWheel((event) => event.stopPropagation());
        slideBox.onWheel((event) => event.stopPropagation());
        slider.setRange(min, max).setPrecision(precision);
        slideBox.setRange(min, max).setPrecision(precision);
        function setStep(newStep) {
            let min = slideBox.min, max = slideBox.max;
            slider.setStep(newStep);
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            slideBox.setStep(newStep);
        }
        setStep(step);
        const digits = countDigits(parseInt(max)) + ((precision > 0) ? precision + 0.5 : 0);
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        slideBox.setStyle('marginLeft', '0.14286em');
        function checkForMinMax() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                slideBox.addClass('suey-property-tiny-row');
                slider.setDisplay('');
            } else {
                slideBox.removeClass('suey-property-tiny-row');
                slider.setDisplay('none');
            }
        }
        checkForMinMax();
        const row = this.props.addRow(prettyTitle(variable), slider, slideBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); return prop; };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); return prop; };
        prop.step = function(step) { setStep(step); return prop; };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); return prop; };
        prop.updateDisplay = function() {
            slider.setValue(params[variable]);
            slideBox.setValue(params[variable]);
            params[variable] = slider.getValue();
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
    addString(params, variable) {
        const prop = new Property();
        const textBox = new TextBox();
        textBox.onChange(() => {
            params[variable] = textBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), textBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.updateDisplay = function() { textBox.setValue(params[variable]); return prop; };
        prop.updateDisplay();
        return prop;
    }
    addVector(params, variable, min = -Infinity, max = Infinity, step = 'any', precision = 2) {
        const prop = new Property();
        const vector = params[variable];
        const row = this.props.addRow(prettyTitle(variable));
        const boxes = [];
        for (let i = 0; i < vector.length; i++) {
            const box = new NumberBox();
            boxes.push(box);
            box.onChange(() => {
                vector[i] = box.getValue();
                if (typeof prop.change === 'function') prop.change();
                if (typeof prop.finishChange === 'function') prop.finishChange();
            });
            box.onWheel((event) => event.stopPropagation());
            box.setRange(min, max).setPrecision(precision);
            row.rightWidget.add(box);
            if (i < vector.length - 1) row.rightWidget.add(new Div().setStyle('min-width', '3px'));
        }
        function setStep(newStep) {
            let min = boxes[0].min, max = boxes[0].max;
            if (newStep === 'any') newStep = (Number.isFinite(max) && Number.isFinite(min)) ? (max - min) / 20 : 1;
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setStep(newStep);
            }
        }
        setStep(step);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); return prop; };
        prop.min = function(min) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMin(min); } return prop; };
        prop.max = function(max) { for (let i = 0; i < boxes.length; i++) { boxes[i].setMax(max); } return prop; };
        prop.step = function(step) { for (let i = 0; i < boxes.length; i++) { boxes[i].setStep(step); } return prop; };
        prop.precision = function(precision) { for (let i = 0; i < boxes.length; i++) { boxes[i].setPrecision(precision); } return prop; };
        prop.updateDisplay = function() {
            for (let i = 0; i < vector.length; i++) {
                boxes[i].setValue(params[variable][i]);
                params[variable][i] = boxes[i].getValue();
            }
            return prop;
        };
        prop.updateDisplay();
        return prop;
    }
}
class Property {
    constructor() {
        const self = this;
        this.change = null;
        this.finishChange = null;
        this.name = function() { return self; };
        this.updateDisplay = function() { return self; };
        this.min = function() { return self; };
        this.max = function() { return self; };
        this.step = function() { return self; };
        this.precision = function() { return self; };
    }
    onChange(callback) {
        this.change = callback;
        return this;
    }
    onFinishChange(callback) {
        this.finishChange = callback;
        return this;
    }
}
function prettyTitle(string) {
    return addSpaces(capitalize(string));
}
function addSpaces(string) {
    if (!string || string === '') return '';
    return String(string).replace(/([A-Z])/g, ' $1').trim();
}
function capitalize(string) {
    if (!string || string === '') return '';
    let words = String(string);
    words = words.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
}
function countDigits(number) {
    return parseFloat(number).toString().length;
}

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
        if (lastElement && scrollTo) setTimeout(() => Dom.scrollIntoView(lastElement), 0);
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
        if (lastElement && scrollTo) setTimeout(() => { Dom.scrollIntoView(lastElement); }, 0);
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

const CORNERS$1 = {
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
        for (let key in CORNERS$1) {
            const cornerName = CORNERS$1[key];
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
    addDockPanel(dockPanel, cornerName = CORNERS$1.TOP_LEFT) {
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
    getCorner(cornerName = CORNERS$1.TOP_LEFT) {
        return this.#corners[cornerName];
    }
}

const CORNERS = {
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};
class Docker2 extends Div {
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

const MIN_W$2 = 300;
const MIN_H$2 = 150;
class Window extends Panel {
    #initialWidth;
    #initialHeight;
    #lastKnownRect;
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
        this.maximized = false;
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
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W$2, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.setStyle('left', `${newLeft}px`);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H$2, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.setStyle('top', `${newTop}px`);
                self.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W$2, rect.width + diffX), window.innerWidth - rect.left);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H$2, rect.height + diffY), window.innerHeight - rect.top);
                self.setStyle('height', `${newHeight}px`);
            }
            self.maximized = false;
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
        this.undock();
        if (!this.maximized) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.setStyle('left', `0`);
            this.setStyle('top', `0`);
            this.setStyle('width', `${window.innerWidth}px`);
            this.setStyle('height', `${window.innerHeight}px`);
            this.maximized = true;
        } else {
            const newLeft = Math.max(0, Math.min(window.innerWidth - this.#lastKnownRect.width, this.#lastKnownRect.left));
            const newTop = Math.max(0, Math.min(window.innerHeight - this.#lastKnownRect.height, this.#lastKnownRect.top));
            this.setStyle('left', `${newLeft}px`);
            this.setStyle('top', `${newTop}px`);
            this.setStyle('width', `${this.#lastKnownRect.width}px`);
            this.setStyle('height', `${this.#lastKnownRect.height}px`);
            this.maximized = false;
        }
        this.dom.dispatchEvent(new Event('resizer'));
    }
    dockLeft() {
        if (!this.hasClass('suey-docked-left')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.addClass('suey-docked-left');
            this.removeClass('suey-docked-right');
        }
    }
    dockRight() {
        if (!this.hasClass('suey-docked-right')) {
            this.#lastKnownRect = this.dom.getBoundingClientRect();
            this.addClass('suey-docked-right');
            this.removeClass('suey-docked-left');
        }
    }
    undock() {
        if (this.hasClass('suey-docked-right') || this.hasClass('suey-docked-left')) {
            const currentRect = this.dom.getBoundingClientRect();
            this.removeClass('suey-docked-left');
            this.removeClass('suey-docked-right');
            if (this.#lastKnownRect) {
                const newLeft = currentRect.left + ((currentRect.width - this.#lastKnownRect.width) / 2);
                this.setStyle('left', `${newLeft}px`);
                this.setStyle('width', `${this.#lastKnownRect.width}px`);
                this.setStyle('height', `${this.#lastKnownRect.height}px`);
            }
        }
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
                self.parent.undock();
                self.parent.maximized = false;
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

class FlexBox extends Element {
    constructor() {
        super(document.createElement('div'));
        this.addClass('suey-flex-box');
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

const MIN_W$1 = 100;
const MIN_H$1 = 100;
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
                const newLeft = Math.max(0, Math.min(rect.right - MIN_W$1, rect.left + diffX));
                const newWidth = rect.right - newLeft;
                self.minimap.setStyle('left', `${newLeft}px`);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newTop = Math.max(0, Math.min(rect.bottom - MIN_H$1, rect.top + diffY));
                const newHeight = rect.bottom - newTop;
                self.minimap.setStyle('top', `${newTop}px`);
                self.minimap.setStyle('height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.min(Math.max(MIN_W$1, rect.width + diffX), window.innerWidth - rect.left);
                self.minimap.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.min(Math.max(MIN_H$1, rect.height + diffY), window.innerHeight - rect.top);
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

const MIN_W = 200;
const MIN_H = 100;
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
                const newWidth = Math.max(self.roundNearest(rect.width - diffX), MIN_W);
                const newLeft = rect.left + (rect.width - newWidth);
                self.setStyle('left', `${newLeft}px`, 'width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('top')) {
                const newHeight = Math.max(self.roundNearest(rect.height - diffY), MIN_H);
                const newTop = rect.top + (rect.height - newHeight);
                self.setStyle('top', `${newTop}px`, 'height', `${newHeight}px`);
            }
            if (resizer.hasClassWithString('right')) {
                const newWidth = Math.max(self.roundNearest(rect.width + diffX), MIN_W);
                self.setStyle('width', `${newWidth}px`);
            }
            if (resizer.hasClassWithString('bottom')) {
                const newHeight = Math.max(self.roundNearest(rect.height + diffY), MIN_H);
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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$c = "/**\n * Units\n *  px      Pixels\n *  %       Percentage relative to the parent element\n *  em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *  rem     Relative to the font-size of the root element\n *  ch      Relative to the width of the character '0' of the current font\n *  ex      Relative to the height of a lowercase letter ('x') of the current font\n *  cap     Relative to the height of a capital letter of the current font\n *  vw      Relative to 1% of the width of the viewport (browser window)\n *  vh      Relative to 1% of the width of the viewport (browser window)\n *  vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *  vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n\n    --blacklight:             0,   0,   0;\n    --darklight:             16,  16,  16;\n    --midlight:              85,  85,  85;\n    --highlight:            255, 255, 255;\n\n    --icon-dark:              0,  85, 102;      /* icon darkened            dark classic aqua   #005566 */\n    --icon:                   0, 170, 204;      /* icon color               classic aqua        #00aacc */\n    --icon-light:            76, 225, 255;      /* icon brightened          light clasic aqua   #4ce1ff */\n\n    --complement:             0,   0,   0;      /* icon shifted 180°        orange */\n    --triadic1:               0,   0,   0;      /* icon shifted 120°        pink */\n    --triadic2:               0,   0,   0;      /* complement shifted 120°  lime green */\n    --triadic3:               0,   0,   0;      /* icon shifted 90°         purple */\n    --triadic4:               0,   0,   0;      /* complement shifted 90°   yellow */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Input Colors */\n    --valid:                  0, 255,   0;\n    --invalid:              255,   0,   0;\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   1.0;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px)\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:            14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.2em;              /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --row-height:           1.7em;              /* min row height (Asset Box, Property List, Tree List, etc.) */\n    --tab-size:             2.5em;              /* Tab button diameter */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* Various gui related time delays (in seconds) */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows:         'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(0 0 var(--pad-x-small) black);\n\n}\n";
var stylesheet$c="/**\n * Units\n *  px      Pixels\n *  %       Percentage relative to the parent element\n *  em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *  rem     Relative to the font-size of the root element\n *  ch      Relative to the width of the character '0' of the current font\n *  ex      Relative to the height of a lowercase letter ('x') of the current font\n *  cap     Relative to the height of a capital letter of the current font\n *  vw      Relative to 1% of the width of the viewport (browser window)\n *  vh      Relative to 1% of the width of the viewport (browser window)\n *  vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *  vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n\n    --blacklight:             0,   0,   0;\n    --darklight:             16,  16,  16;\n    --midlight:              85,  85,  85;\n    --highlight:            255, 255, 255;\n\n    --icon-dark:              0,  85, 102;      /* icon darkened            dark classic aqua   #005566 */\n    --icon:                   0, 170, 204;      /* icon color               classic aqua        #00aacc */\n    --icon-light:            76, 225, 255;      /* icon brightened          light clasic aqua   #4ce1ff */\n\n    --complement:             0,   0,   0;      /* icon shifted 180°        orange */\n    --triadic1:               0,   0,   0;      /* icon shifted 120°        pink */\n    --triadic2:               0,   0,   0;      /* complement shifted 120°  lime green */\n    --triadic3:               0,   0,   0;      /* icon shifted 90°         purple */\n    --triadic4:               0,   0,   0;      /* complement shifted 90°   yellow */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Input Colors */\n    --valid:                  0, 255,   0;\n    --invalid:              255,   0,   0;\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   1.0;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px)\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:            14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.2em;              /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --row-height:           1.7em;              /* min row height (Asset Box, Property List, Tree List, etc.) */\n    --tab-size:             2.5em;              /* Tab button diameter */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* Various gui related time delays (in seconds) */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows:         'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(0 0 var(--pad-x-small) black);\n\n}\n";
styleInject(css_248z$c);

var css_248z$b = "/********** BASE ELEMENTS **********/\n\n* {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgb(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.suey-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** SCROLLBARS **********/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n";
var stylesheet$b="/********** BASE ELEMENTS **********/\n\n* {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgb(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.suey-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** SCROLLBARS **********/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n";
styleInject(css_248z$b);

var css_248z$a = "/********** ELEMENT: <input> (number, text, etc) **********/\n\n.suey-input {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n    text-align: left;\n}\n\n.suey-input:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-input:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-input.suey-valid-type {\n    color: rgba(var(--text), 1);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    padding-left: var(--pad-medium);\n    text-align: left !important;\n}\n\n.suey-input.suey-invalid-type {\n    color: rgba(var(--text), 0.35);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-yes-drop {\n    color: rgba(var(--valid), 1);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--valid));\n    /* outline: var(--border-micro) solid rgb(var(--valid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-no-drop {\n    color: rgba(var(--invalid), 1.0);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--invalid));\n    /* outline: var(--border-micro) solid rgb(var(--invalid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5);\n    text-align: center !important;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\n.suey-input::-webkit-outer-spin-button,\n.suey-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/********** ELEMENT: <button> Button **********/\n\n.suey-button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-large);\n    outline: var(--border-small) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.suey-button:not(.suey-selected):enabled:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--highlight), 0.1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n}\n\n.suey-button:not(.suey-selected):enabled:active {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button.suey-selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button:disabled {\n    pointer-events: none;\n}\n\n.suey-button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.suey-borderless-button {\n    user-select: none;\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.5em;\n    min-width: 1.5em;\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: <input> Checkbox **********/\n\n/* Container */\n.suey-checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.suey-checkbox-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.suey-checkbox-button {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button {\n    --bg-color-light: var(--icon-light);\n    --bg-color-dark: var(--icon-dark);\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--bg-color-light), 0.7), rgba(var(--bg-color-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.suey-checkbox-input:checked:hover + .suey-checkbox-button {\n    background-color: rgba(var(--highlight), 0.5);\n}\n\n/* Button: Unchecked */\n.suey-checkbox-button:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.suey-checkbox-input:hover + .suey-checkbox-button:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.suey-dropdown.suey-selected, .suey-dropdown:not(.suey-selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.suey-color-input-button {\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.suey-drop-color {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: Drop Arrow (adds a little down arrow on right side of element) **********/\n\n.suey-drop-arrow {\n    padding-right: 1.4em;\n}\n.suey-drop-arrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* Drop Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.suey-drop-arrow:hover::after, .suey-drop-arrow.suey-selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-drop-arrow.suey-selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: <input> Number **********/\n\n/** Hide Arrow Spinners - Firefox (input[type=number] {}) */\n.suey-number {\n    -moz-appearance: textfield;\n}\n\n.suey-number {\n    font-size: 100%;\n}\n\n.suey-number-holder {\n    position: relative;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.suey-number-label-box {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 0 var(--pad-smallish);\n    color: rgba(var(--text-dark), 1);\n}\n\n/********** ELEMENT: <input> Slider **********/\n\n.suey-slide-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.suey-tick-marks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.suey-slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.suey-slider:hover, .suey-slider:focus, .suey-slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.suey-slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.suey-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-webkit-slider-thumb:hover, .suey-slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.suey-slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-moz-range-thumb:hover, .suey-slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: <textarea> Text Area **********/\n\n.suey-text-area {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-x-small) var(--pad-smallish);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\n.suey-text-area:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-text-area:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-text-area::-webkit-scrollbar {\n    height: 0.4em;\n    width: 0.4em;\n    background: rgba(var(--shadow), 0.35);\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n.suey-text-area.success {\n    border-color: #8b8 !important;\n}\n\n.suey-text-area.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n\n/********** ELEMENT: <input> Text Box **********/\n\n.suey-text-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n";
var stylesheet$a="/********** ELEMENT: <input> (number, text, etc) **********/\n\n.suey-input {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n    text-align: left;\n}\n\n.suey-input:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-input:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-input.suey-valid-type {\n    color: rgba(var(--text), 1);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    padding-left: var(--pad-medium);\n    text-align: left !important;\n}\n\n.suey-input.suey-invalid-type {\n    color: rgba(var(--text), 0.35);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-yes-drop {\n    color: rgba(var(--valid), 1);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--valid));\n    /* outline: var(--border-micro) solid rgb(var(--valid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-no-drop {\n    color: rgba(var(--invalid), 1.0);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--invalid));\n    /* outline: var(--border-micro) solid rgb(var(--invalid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5);\n    text-align: center !important;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\n.suey-input::-webkit-outer-spin-button,\n.suey-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/********** ELEMENT: <button> Button **********/\n\n.suey-button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-large);\n    outline: var(--border-small) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.suey-button:not(.suey-selected):enabled:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--highlight), 0.1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7));\n}\n\n.suey-button:not(.suey-selected):enabled:active {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button.suey-selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button:disabled {\n    pointer-events: none;\n}\n\n.suey-button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.suey-borderless-button {\n    user-select: none;\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.5em;\n    min-width: 1.5em;\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: <input> Checkbox **********/\n\n/* Container */\n.suey-checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.suey-checkbox-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.suey-checkbox-button {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button {\n    --bg-color-light: var(--icon-light);\n    --bg-color-dark: var(--icon-dark);\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--bg-color-light), 0.7), rgba(var(--bg-color-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.suey-checkbox-input:checked:hover + .suey-checkbox-button {\n    background-color: rgba(var(--highlight), 0.5);\n}\n\n/* Button: Unchecked */\n.suey-checkbox-button:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.suey-checkbox-input:hover + .suey-checkbox-button:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.suey-dropdown.suey-selected, .suey-dropdown:not(.suey-selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.suey-color-input-button {\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.suey-drop-color {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: Drop Arrow (adds a little down arrow on right side of element) **********/\n\n.suey-drop-arrow {\n    padding-right: 1.4em;\n}\n.suey-drop-arrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* Drop Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.suey-drop-arrow:hover::after, .suey-drop-arrow.suey-selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-drop-arrow.suey-selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: <input> Number **********/\n\n/** Hide Arrow Spinners - Firefox (input[type=number] {}) */\n.suey-number {\n    -moz-appearance: textfield;\n}\n\n.suey-number {\n    font-size: 100%;\n}\n\n.suey-number-holder {\n    position: relative;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.suey-number-label-box {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 0 var(--pad-smallish);\n    color: rgba(var(--text-dark), 1);\n}\n\n/********** ELEMENT: <input> Slider **********/\n\n.suey-slide-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.suey-tick-marks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.suey-slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.suey-slider:hover, .suey-slider:focus, .suey-slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.suey-slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.suey-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-webkit-slider-thumb:hover, .suey-slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.suey-slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-moz-range-thumb:hover, .suey-slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: <textarea> Text Area **********/\n\n.suey-text-area {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-x-small) var(--pad-smallish);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\n.suey-text-area:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-text-area:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-text-area::-webkit-scrollbar {\n    height: 0.4em;\n    width: 0.4em;\n    background: rgba(var(--shadow), 0.35);\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n.suey-text-area.success {\n    border-color: #8b8 !important;\n}\n\n.suey-text-area.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n\n/********** ELEMENT: <input> Text Box **********/\n\n.suey-text-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = "/********** Absolute Box **********/\n\n.suey-absolute-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n}\n\n/********** Asset Box / Asset Box Icon Only **********/\n\n.suey-asset-box {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    vertical-align: middle;\n\n    outline: none; /* for macos */\n}\n\n.suey-asset-box-selectable:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.suey-asset-box-selectable:active, .suey-asset-box-selectable:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.suey-asset-box-selectable:focus > *, .suey-asset-box-selectable:active > * {\n    filter: brightness(100%);\n}\n\n.suey-asset-box-selectable:hover > * {\n    filter: brightness(150%);\n}\n\n.suey-asset-box-mini {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.suey-asset-box-row {\n    width: 100%;\n    min-height: 2em;\n    padding: var(--pad-x-small);\n}\n\n.suey-asset-box-icon {\n    position: relative;\n    min-width: var(--row-height);\n    height: 100%;\n}\n\n.suey-asset-box-text {\n    position: relative;\n    width: calc(100% - var(--row-height));\n    margin: auto;\n    margin-left: 0.25em;\n    white-space: nowrap;\n}\n\n.suey-asset-box-combo {\n    overflow: hidden;\n    position: relative;\n}\n.suey-asset-box-combo:hover {\n    overflow: visible;\n}\n.suey-asset-box-label {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) scale(75%);\n}\n\n/********** Flex Box **********/\n\n.suey-flex-box {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** Row **********/\n\n.suey-row {\n    padding: var(--pad-micro) var(--border-small);\n    margin: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** Shadow Box **********/\n\n.suey-shadow-box { /* affects Toolbar icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.suey-shadow-box.suey-full-size {\n    width: 100%;\n    height: 100%;\n}\n\n.suey-shadow-box.suey-drop-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-shadow-box.suey-even-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n/********** Vector Box **********/\n\n.suey-vector-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n";
var stylesheet$9="/********** Absolute Box **********/\n\n.suey-absolute-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n}\n\n/********** Asset Box / Asset Box Icon Only **********/\n\n.suey-asset-box {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    vertical-align: middle;\n\n    outline: none; /* for macos */\n}\n\n.suey-asset-box-selectable:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.suey-asset-box-selectable:active, .suey-asset-box-selectable:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.suey-asset-box-selectable:focus > *, .suey-asset-box-selectable:active > * {\n    filter: brightness(100%);\n}\n\n.suey-asset-box-selectable:hover > * {\n    filter: brightness(150%);\n}\n\n.suey-asset-box-mini {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.suey-asset-box-row {\n    width: 100%;\n    min-height: 2em;\n    padding: var(--pad-x-small);\n}\n\n.suey-asset-box-icon {\n    position: relative;\n    min-width: var(--row-height);\n    height: 100%;\n}\n\n.suey-asset-box-text {\n    position: relative;\n    width: calc(100% - var(--row-height));\n    margin: auto;\n    margin-left: 0.25em;\n    white-space: nowrap;\n}\n\n.suey-asset-box-combo {\n    overflow: hidden;\n    position: relative;\n}\n.suey-asset-box-combo:hover {\n    overflow: visible;\n}\n.suey-asset-box-label {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) scale(75%);\n}\n\n/********** Flex Box **********/\n\n.suey-flex-box {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** Row **********/\n\n.suey-row {\n    padding: var(--pad-micro) var(--border-small);\n    margin: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** Shadow Box **********/\n\n.suey-shadow-box { /* affects Toolbar icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.suey-shadow-box.suey-full-size {\n    width: 100%;\n    height: 100%;\n}\n\n.suey-shadow-box.suey-drop-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-shadow-box.suey-even-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n/********** Vector Box **********/\n\n.suey-vector-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n";
styleInject(css_248z$9);

var css_248z$8 = "/********** Menu Show (Show menu that was previously hidden) **********/\n\n.suey-menu.suey-menu-show {\n    pointer-events: auto;\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n}\n\n.suey-menu.suey-menu-show.suey-menu-under {\n    left: 50%;\n    top: 100%;\n    transform: translate(-50%, 0) scale(1.0, 1.0);\n}\n\n/********** Menu **********/\n\n/* Normal Menu Styling */\n.suey-menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    /* border: 1px solid rgba(var(--shadow), 1.0); */\n    border: 2px solid rgba(var(--icon), 1.0);\n    border-radius: var(--radius-large);\n    /* outline: 1px solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5)); */\n    outline: none;\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.suey-border-icon {\n    border: 2px solid rgba(var(--complement), 1.0);\n}\n\n.suey-menu-under {\n    transition: opacity 0.2s ease-in-out;\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-down {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-up {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.suey-select-menu, .suey-popup-menu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* Select Menu */\n}\n\n/* Menu Item */\n.suey-menu-item {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.suey-menu:not(.suey-invisible-menu) .suey-menu-item:not(.suey-disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.suey-menu-icon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    flex: 0 0 auto;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    filter: var(--drop-shadow);\n    overflow: hidden;\n}\n\n/* Text */\n.suey-menu-text {\n    user-select: none;\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.suey-menu-shortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.suey-menu-shortcut-character {\n    /* background-color: blueviolet; */\n    /* border: solid 1px; */\n    text-align: center;\n    margin: auto;\n}\n\n/* Separator */\n.suey-menu-separator {\n    pointer-events: none;\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.suey-menu-item .suey-menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.suey-menu-mouse-triangle {\n    position: absolute;\n}\n\n/***** Invisible Hover Menu *****/\n\n.suey-invisible-menu, .suey-invisible-menu-item {\n    color: transparent;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.suey-invisible-menu-item {\n    margin: 0;\n}\n\n/************ Toolbar Button **********/\n\n.suey-toolbar-button {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.suey-button-background {\n    pointer-events: none;\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none; /* for macos */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n    z-index: -1;\n}\n\n/* Hover */\n.suey-toolbar-button:not(.suey-selected):enabled:hover > .suey-button-background {\n    filter: brightness(125%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--pixel) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n/* Active / Selected */\n.suey-toolbar-button:not(.suey-selected):enabled:active,\n.suey-toolbar-button.suey-selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.suey-toolbar-button:not(.suey-selected):enabled:active > .suey-button-background,\n.suey-toolbar-button.suey-selected:enabled > .suey-button-background {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Hover Active */\n.suey-hover-active:hover, .suey-hover-active:active {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5) !important; /* sunk-in-shadow */\n}\n.suey-hover-active:hover > .suey-button-background,\n.suey-hover-active:active > .suey-button-background {\n    filter: brightness(50%) grayscale(20%) !important;\n}\n\n/* Gray Background */\n.suey-gray-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(var(--gray), 0.9), rgba(var(--gray), 0.65));\n}\n\n/* Dark Background */\n.suey-dark-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(var(--button-light), 0.9), rgba(var(--button-light), 0.65));\n}\n\n/* Brown Background */\n.suey-brown-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(150, 100, 50, 0.9), rgba(150, 100, 50, 0.65));\n}\n\n/* Red Background */\n.suey-red-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(223, 32, 32, 0.9), rgba(223, 32, 32, 0.65));\n}\n\n/* Red Background */\n.suey-green-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(32, 223, 32, 0.9), rgba(32, 223, 32, 0.65));\n}\n\n/* Complement Background */\n.suey-complement-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--complement), 0.9), rgba(var(--complement), 0.65));\n}\n\n/* Triadic1 Background */\n.suey-triadic1-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic1), 0.75), rgba(var(--triadic1), 0.50));\n}\n\n/* Triadic2 Background */\n.suey-triadic2-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic2), 0.9), rgba(var(--triadic2), 0.65));\n}\n\n/* Triadic3 Background */\n.suey-triadic3-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic3), 0.9), rgba(var(--triadic3), 0.65));\n}\n\n/* Triadic4 Background */\n.suey-triadic4-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic4), 0.9), rgba(var(--triadic4), 0.65));\n}\n\n/* Disabled Button */\n.suey-toolbar-button:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    box-shadow: none;\n}\n.suey-toolbar-button:disabled {\n    filter: none;\n}\n.suey-toolbar-button:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.suey-button-left, .suey-button-left > .suey-button-background {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n.suey-button-middle, .suey-button-middle > .suey-button-background {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n}\n.suey-button-right, .suey-button-right > .suey-button-background {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.suey-button-left > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n}\n.suey-button-middle > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n.suey-button-right > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n\n/********** Toolbar Separator / Toolbar Spacer **********/\n\n.suey-toolbar-separator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.suey-toolbar-spacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n";
var stylesheet$8="/********** Menu Show (Show menu that was previously hidden) **********/\n\n.suey-menu.suey-menu-show {\n    pointer-events: auto;\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n}\n\n.suey-menu.suey-menu-show.suey-menu-under {\n    left: 50%;\n    top: 100%;\n    transform: translate(-50%, 0) scale(1.0, 1.0);\n}\n\n/********** Menu **********/\n\n/* Normal Menu Styling */\n.suey-menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    /* border: 1px solid rgba(var(--shadow), 1.0); */\n    border: 2px solid rgba(var(--icon), 1.0);\n    border-radius: var(--radius-large);\n    /* outline: 1px solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5)); */\n    outline: none;\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.suey-border-icon {\n    border: 2px solid rgba(var(--complement), 1.0);\n}\n\n.suey-menu-under {\n    transition: opacity 0.2s ease-in-out;\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-down {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-up {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.suey-select-menu, .suey-popup-menu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* Select Menu */\n}\n\n/* Menu Item */\n.suey-menu-item {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.suey-menu:not(.suey-invisible-menu) .suey-menu-item:not(.suey-disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.suey-menu-icon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    flex: 0 0 auto;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    filter: var(--drop-shadow);\n    overflow: hidden;\n}\n\n/* Text */\n.suey-menu-text {\n    user-select: none;\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.suey-menu-shortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.suey-menu-shortcut-character {\n    /* background-color: blueviolet; */\n    /* border: solid 1px; */\n    text-align: center;\n    margin: auto;\n}\n\n/* Separator */\n.suey-menu-separator {\n    pointer-events: none;\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.suey-menu-item .suey-menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.suey-menu-mouse-triangle {\n    position: absolute;\n}\n\n/***** Invisible Hover Menu *****/\n\n.suey-invisible-menu, .suey-invisible-menu-item {\n    color: transparent;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.suey-invisible-menu-item {\n    margin: 0;\n}\n\n/************ Toolbar Button **********/\n\n.suey-toolbar-button {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.suey-button-background {\n    pointer-events: none;\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none; /* for macos */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n    z-index: -1;\n}\n\n/* Hover */\n.suey-toolbar-button:not(.suey-selected):enabled:hover > .suey-button-background {\n    filter: brightness(125%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--pixel) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n/* Active / Selected */\n.suey-toolbar-button:not(.suey-selected):enabled:active,\n.suey-toolbar-button.suey-selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.suey-toolbar-button:not(.suey-selected):enabled:active > .suey-button-background,\n.suey-toolbar-button.suey-selected:enabled > .suey-button-background {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Hover Active */\n.suey-hover-active:hover, .suey-hover-active:active {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5) !important; /* sunk-in-shadow */\n}\n.suey-hover-active:hover > .suey-button-background,\n.suey-hover-active:active > .suey-button-background {\n    filter: brightness(50%) grayscale(20%) !important;\n}\n\n/* Gray Background */\n.suey-gray-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(var(--gray), 0.9), rgba(var(--gray), 0.65));\n}\n\n/* Dark Background */\n.suey-dark-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(var(--button-light), 0.9), rgba(var(--button-light), 0.65));\n}\n\n/* Brown Background */\n.suey-brown-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(150, 100, 50, 0.9), rgba(150, 100, 50, 0.65));\n}\n\n/* Red Background */\n.suey-red-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(223, 32, 32, 0.9), rgba(223, 32, 32, 0.65));\n}\n\n/* Red Background */\n.suey-green-button:enabled > .suey-button-background {\n    background-image: linear-gradient(to bottom, rgba(32, 223, 32, 0.9), rgba(32, 223, 32, 0.65));\n}\n\n/* Complement Background */\n.suey-complement-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--complement), 0.9), rgba(var(--complement), 0.65));\n}\n\n/* Triadic1 Background */\n.suey-triadic1-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic1), 0.75), rgba(var(--triadic1), 0.50));\n}\n\n/* Triadic2 Background */\n.suey-triadic2-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic2), 0.9), rgba(var(--triadic2), 0.65));\n}\n\n/* Triadic3 Background */\n.suey-triadic3-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic3), 0.9), rgba(var(--triadic3), 0.65));\n}\n\n/* Triadic4 Background */\n.suey-triadic4-button:enabled > .suey-button-background {\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--triadic4), 0.9), rgba(var(--triadic4), 0.65));\n}\n\n/* Disabled Button */\n.suey-toolbar-button:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    box-shadow: none;\n}\n.suey-toolbar-button:disabled {\n    filter: none;\n}\n.suey-toolbar-button:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.suey-button-left, .suey-button-left > .suey-button-background {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n.suey-button-middle, .suey-button-middle > .suey-button-background {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n}\n.suey-button-right, .suey-button-right > .suey-button-background {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.suey-button-left > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n}\n.suey-button-middle > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n.suey-button-right > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n\n/********** Toolbar Separator / Toolbar Spacer **********/\n\n.suey-toolbar-separator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.suey-toolbar-spacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n";
styleInject(css_248z$8);

var css_248z$7 = "/********** Panel (simple / fancy) **********/\n\n.suey-panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    outline: none; /* for macos */\n    z-index: 0; /* Panel */\n}\n\n.suey-panel-simple {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.suey-panel-fancy-outer {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-panel-fancy-border {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.suey-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--button-light));\n}\n.suey-window.suey-active-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--icon));\n}\n\n.suey-panel-fancy-inside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: var(--pad-x-small) 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** Scroller ********/\n\n.suey-scroller {\n    overflow: auto;\n}\n\n/********** Shrinkable **********/\n\n.suey-shrinkable {\n    background-color: transparent;\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    overflow: hidden;\n}\n.suey-shrinkable.suey-borderless {\n    border: solid var(--border-small) transparent;\n    margin-bottom: 0;\n    box-shadow: none;\n    overflow: visible;\n}\n.suey-shrinkable.suey-borderless.suey-expanded {\n    border-bottom: none;\n}\n\n/* Shrinkable Title Div */\n.suey-shrink-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-bottom: solid var(--border-micro) transparent;\n    border-top: solid var(--border-micro) transparent;\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: 0 var(--pad-medium); /* vertical horizontal */\n}\n.suey-shrink-title:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.suey-shrinkable.suey-borderless .suey-shrink-title {\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n\n/* Title Icon */\n.suey-shrink-icon > * {\n    filter: var(--drop-shadow);\n}\n.suey-shrink-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n}\n.suey-shrink-icon.suey-has-icon {\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n/* Title Text */\n.suey-shrink-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.2em;\n}\n\n/* Title Arrow */\n.suey-shrink-arrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    position: relative;\n    content: '';\n    margin: 0 0.35em; /* vertical horizontal */\n    width: 0;\n    height: 0;\n    transform: translateX(25%);\n    z-index: 101; /* Shrink Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: transparent transparent transparent rgba(var(--text));\n    transition: transform var(--menu-timing);\n}\n.suey-shrink-arrow-clicker {\n    position: absolute;\n    content: '';\n    width: 1.7em;\n    height: 1.7em;\n    left: calc(1.7em * -0.5);\n    top: calc(1.7em * -0.5);\n    cursor: pointer;\n}\n.suey-shrinkable.suey-expanded .suey-shrink-title .suey-shrink-arrow {\n    transform: rotate(90deg) translateX(25%);\n}\n.suey-shrink-title:hover .suey-shrink-arrow {\n    border-color: transparent transparent transparent rgba(var(--highlight));\n}\n\n/* Shrinkable Body Div */\n.suey-shrink-body {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small);\n    overflow: hidden;\n    pointer-events: auto;\n}\n.suey-shrinkable.suey-borderless .suey-shrink-body {\n    padding-bottom: 0;\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-body {\n    pointer-events: none;\n    display: none;\n}\n.suey-shrinkable.suey-expanded:not(.suey-borderless) .suey-shrink-body {\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n}\n\n/* Borderless Property List Row */\n.suey-shrinkable.suey-borderless .suey-property-row {\n    width: calc(100% + (var(--pad-small) * 5)) !important;\n    margin-left: calc(var(--pad-small) * -2.5) !important;\n    margin-right: calc(var(--pad-small) * -2.5) !important;\n}\n\n/********** Tabbed **********/\n\n/***** Tab Button */\n\n.suey-tab-button {\n    --tab-timing: 200ms;\n\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: transparent;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    margin: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    margin-top: -0.2em;\n    margin-bottom: -0.2em;\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.suey-tab-button.suey-dragging {\n    position: absolute;\n    z-index: 10000;\n    pointer-events: none;\n    opacity: 0.8;\n    transform: scale(100%);\n}\n\n.suey-tab-button.suey-selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n/* Tab Image */\n.suey-tab-button .suey-vector-box {\n    position: absolute;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n.suey-tab-button.suey-selected .suey-vector-box {\n    filter: none;\n}\n\n.suey-tab-button:hover .suey-vector-box,\n.suey-tab-button:active .suey-vector-box {\n    filter: brightness(120%) !important;\n}\n\n.suey-tab-button:active .suey-vector-box .suey-image {\n    transform: translate(0, 0.07em);\n}\n\n/* Tab Image Border / Shadow */\n.suey-tab-icon-border {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 0.21em solid rgba(var(--icon));\n    border-radius: calc(var(--tab-size) * 0.7);\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.suey-tab-button.suey-dragging > .suey-tab-icon-border {\n    border: 0.21em solid rgba(var(--complement)) !important;\n}\n\n.suey-tab-button:hover .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.50),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button:active .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--black), 0.35),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button.suey-selected .suey-tab-icon-border {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/********** Titled **********/\n\n.suey-titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n}\n\n.suey-title-arrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-25%) scale(1.0, -1.0);\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.suey-title-arrow-click {\n    position: absolute;\n    cursor: pointer;\n    content: '';\n    pointer-events: all;\n    width: 2em;\n    height: 2em;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.25em;\n    z-index: 101; /* Title Arrow */\n}\n.suey-title-arrow-click:hover .suey-title-arrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-titled.suey-expanded .suey-tab-title .suey-title-arrow {\n    transform: translateY(25%);\n}\n\n/* Title Bar Class for top of Title Panel */\n.suey-tab-title {\n    --font-size-increase:   1.3;\n    --border-radius-title:  0.35714em;\n\n    position: relative;\n    display: block;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--border-radius-title) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-small);\n    margin-top: var(--pad-micro);\n    margin-bottom: var(--pad-x-small);\n    padding-top: var(--pad-medium);\n    padding-bottom: var(--pad-medium);\n    min-height: 1.867em;\n}\n.suey-tab-title-text {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    font-size: 100%;\n    user-select: all;\n}\n.suey-tab-title-text::selection {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--blacklight), 1);\n}\n";
var stylesheet$7="/********** Panel (simple / fancy) **********/\n\n.suey-panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    outline: none; /* for macos */\n    z-index: 0; /* Panel */\n}\n\n.suey-panel-simple {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.suey-panel-fancy-outer {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-panel-fancy-border {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.suey-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--button-light));\n}\n.suey-window.suey-active-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--icon));\n}\n\n.suey-panel-fancy-inside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: var(--pad-x-small) 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** Scroller ********/\n\n.suey-scroller {\n    overflow: auto;\n}\n\n/********** Shrinkable **********/\n\n.suey-shrinkable {\n    background-color: transparent;\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    overflow: hidden;\n}\n.suey-shrinkable.suey-borderless {\n    border: solid var(--border-small) transparent;\n    margin-bottom: 0;\n    box-shadow: none;\n    overflow: visible;\n}\n.suey-shrinkable.suey-borderless.suey-expanded {\n    border-bottom: none;\n}\n\n/* Shrinkable Title Div */\n.suey-shrink-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-bottom: solid var(--border-micro) transparent;\n    border-top: solid var(--border-micro) transparent;\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: 0 var(--pad-medium); /* vertical horizontal */\n}\n.suey-shrink-title:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.suey-shrinkable.suey-borderless .suey-shrink-title {\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n\n/* Title Icon */\n.suey-shrink-icon > * {\n    filter: var(--drop-shadow);\n}\n.suey-shrink-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n}\n.suey-shrink-icon.suey-has-icon {\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n/* Title Text */\n.suey-shrink-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.2em;\n}\n\n/* Title Arrow */\n.suey-shrink-arrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    position: relative;\n    content: '';\n    margin: 0 0.35em; /* vertical horizontal */\n    width: 0;\n    height: 0;\n    transform: translateX(25%);\n    z-index: 101; /* Shrink Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: transparent transparent transparent rgba(var(--text));\n    transition: transform var(--menu-timing);\n}\n.suey-shrink-arrow-clicker {\n    position: absolute;\n    content: '';\n    width: 1.7em;\n    height: 1.7em;\n    left: calc(1.7em * -0.5);\n    top: calc(1.7em * -0.5);\n    cursor: pointer;\n}\n.suey-shrinkable.suey-expanded .suey-shrink-title .suey-shrink-arrow {\n    transform: rotate(90deg) translateX(25%);\n}\n.suey-shrink-title:hover .suey-shrink-arrow {\n    border-color: transparent transparent transparent rgba(var(--highlight));\n}\n\n/* Shrinkable Body Div */\n.suey-shrink-body {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small);\n    overflow: hidden;\n    pointer-events: auto;\n}\n.suey-shrinkable.suey-borderless .suey-shrink-body {\n    padding-bottom: 0;\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-body {\n    pointer-events: none;\n    display: none;\n}\n.suey-shrinkable.suey-expanded:not(.suey-borderless) .suey-shrink-body {\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n}\n\n/* Borderless Property List Row */\n.suey-shrinkable.suey-borderless .suey-property-row {\n    width: calc(100% + (var(--pad-small) * 5)) !important;\n    margin-left: calc(var(--pad-small) * -2.5) !important;\n    margin-right: calc(var(--pad-small) * -2.5) !important;\n}\n\n/********** Tabbed **********/\n\n/***** Tab Button */\n\n.suey-tab-button {\n    --tab-timing: 200ms;\n\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: transparent;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    margin: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    margin-top: -0.2em;\n    margin-bottom: -0.2em;\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.suey-tab-button.suey-dragging {\n    position: absolute;\n    z-index: 10000;\n    pointer-events: none;\n    opacity: 0.8;\n    transform: scale(100%);\n}\n\n.suey-tab-button.suey-selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n/* Tab Image */\n.suey-tab-button .suey-vector-box {\n    position: absolute;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n.suey-tab-button.suey-selected .suey-vector-box {\n    filter: none;\n}\n\n.suey-tab-button:hover .suey-vector-box,\n.suey-tab-button:active .suey-vector-box {\n    filter: brightness(120%) !important;\n}\n\n.suey-tab-button:active .suey-vector-box .suey-image {\n    transform: translate(0, 0.07em);\n}\n\n/* Tab Image Border / Shadow */\n.suey-tab-icon-border {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: 0.21em solid rgba(var(--icon));\n    border-radius: calc(var(--tab-size) * 0.7);\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.suey-tab-button.suey-dragging > .suey-tab-icon-border {\n    border: 0.21em solid rgba(var(--complement)) !important;\n}\n\n.suey-tab-button:hover .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.50),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button:active .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--black), 0.35),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button.suey-selected .suey-tab-icon-border {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/********** Titled **********/\n\n.suey-titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n}\n\n.suey-title-arrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-25%) scale(1.0, -1.0);\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.suey-title-arrow-click {\n    position: absolute;\n    cursor: pointer;\n    content: '';\n    pointer-events: all;\n    width: 2em;\n    height: 2em;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.25em;\n    z-index: 101; /* Title Arrow */\n}\n.suey-title-arrow-click:hover .suey-title-arrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-titled.suey-expanded .suey-tab-title .suey-title-arrow {\n    transform: translateY(25%);\n}\n\n/* Title Bar Class for top of Title Panel */\n.suey-tab-title {\n    --font-size-increase:   1.3;\n    --border-radius-title:  0.35714em;\n\n    position: relative;\n    display: block;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--border-radius-title) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-small);\n    margin-top: var(--pad-micro);\n    margin-bottom: var(--pad-x-small);\n    padding-top: var(--pad-medium);\n    padding-bottom: var(--pad-medium);\n    min-height: 1.867em;\n}\n.suey-tab-title-text {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    font-size: 100%;\n    user-select: all;\n}\n.suey-tab-title-text::selection {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--blacklight), 1);\n}\n";
styleInject(css_248z$7);

var css_248z$6 = "/********** Docker Left / Docker Right **********/\n\n.suey-docker-corner {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n    margin: auto;\n    z-index: 1; /* Docker Corner */\n    background: transparent;\n}\n\n.suey-docker-top-left {\n    /* background-color: rgba(255, 0, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n}\n\n.suey-docker-top-right {\n    /* background-color: rgba(0, 255, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n}\n\n.suey-docker-bottom-left {\n    /* background-color: rgba(0, 0, 255, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n    justify-content: end;\n}\n\n.suey-docker-bottom-right {\n    /* background-color: rgba(128, 0, 128, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n    justify-content: end;\n}\n\n/********** Tabbed **********/\n\n.suey-tabbed {\n    position: relative;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/* Collection of Panels */\n.suey-tab-panels {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/* Interior panel of a Tabbed Panel */\n.suey-tab-panels .suey-tab-panel {\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n    pointer-events: auto;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.suey-tab-panels .suey-tab-panel.suey-hidden {\n    display: none;\n    pointer-events: none;\n}\n\n/* Collection of Tab Buttons */\n.suey-buttons {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    margin-top: calc(-1 * var(--pad-x-small));\n    z-index: 101; /* Tabs */\n    min-width: var(--tab-size);\n    min-height: var(--tab-size);\n}\n\n.suey-buttons.suey-left-side {\n    left: calc((var(--tab-size) / -2.0) + 0.42858em); /* --pixel x 6 */\n}\n\n.suey-buttons.suey-right-side {\n    right: calc((var(--tab-size) / -2.0) + 0.42858em); /* --pixel x 6 */\n}\n\n/***** Window *****/\n\n.suey-window {\n    --window-z-index: 200;\n\n    position: fixed;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: var(--window-z-index); /* Window */\n}\n\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n.suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 0.5);\n    border: var(--border-small) solid rgb(var(--button-light));\n    border-radius: 9999px;\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    box-shadow: none;\n    text-shadow: none;\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.suey-active-window .suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5));\n    border: var(--border-small) solid rgb(var(--icon));\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-docked-left {\n    left: 0 !important;\n    top: 0 !important;\n    width: 50% !important;\n    height: 100% !important;\n}\n\n.suey-docked-right {\n    left: 50% !important;\n    top: 0 !important;\n    width: 50% !important;\n    height: 100% !important;\n}\n";
var stylesheet$6="/********** Docker Left / Docker Right **********/\n\n.suey-docker-corner {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n    margin: auto;\n    z-index: 1; /* Docker Corner */\n    background: transparent;\n}\n\n.suey-docker-top-left {\n    /* background-color: rgba(255, 0, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n}\n\n.suey-docker-top-right {\n    /* background-color: rgba(0, 255, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n}\n\n.suey-docker-bottom-left {\n    /* background-color: rgba(0, 0, 255, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n    justify-content: end;\n}\n\n.suey-docker-bottom-right {\n    /* background-color: rgba(128, 0, 128, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n    justify-content: end;\n}\n\n/********** Tabbed **********/\n\n.suey-tabbed {\n    position: relative;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/* Collection of Panels */\n.suey-tab-panels {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/* Interior panel of a Tabbed Panel */\n.suey-tab-panels .suey-tab-panel {\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n    pointer-events: auto;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.suey-tab-panels .suey-tab-panel.suey-hidden {\n    display: none;\n    pointer-events: none;\n}\n\n/* Collection of Tab Buttons */\n.suey-buttons {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    margin-top: calc(-1 * var(--pad-x-small));\n    z-index: 101; /* Tabs */\n    min-width: var(--tab-size);\n    min-height: var(--tab-size);\n}\n\n.suey-buttons.suey-left-side {\n    left: calc((var(--tab-size) / -2.0) + 0.42858em); /* --pixel x 6 */\n}\n\n.suey-buttons.suey-right-side {\n    right: calc((var(--tab-size) / -2.0) + 0.42858em); /* --pixel x 6 */\n}\n\n/***** Window *****/\n\n.suey-window {\n    --window-z-index: 200;\n\n    position: fixed;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: var(--window-z-index); /* Window */\n}\n\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n.suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 0.5);\n    border: var(--border-small) solid rgb(var(--button-light));\n    border-radius: 9999px;\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    box-shadow: none;\n    text-shadow: none;\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.suey-active-window .suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5));\n    border: var(--border-small) solid rgb(var(--icon));\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-docked-left {\n    left: 0 !important;\n    top: 0 !important;\n    width: 50% !important;\n    height: 100% !important;\n}\n\n.suey-docked-right {\n    left: 50% !important;\n    top: 0 !important;\n    width: 50% !important;\n    height: 100% !important;\n}\n";
styleInject(css_248z$6);

var css_248z$5 = "/***** Gooey Panel *****/\n\n.suey-gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    z-index: 1; /* Gooey */\n}\n";
var stylesheet$5="/***** Gooey Panel *****/\n\n.suey-gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    z-index: 1; /* Gooey */\n}\n";
styleInject(css_248z$5);

var css_248z$4 = "/********** Property List **********/\n\n.suey-property-list {\n    width: 100%;\n}\n\n/* --- HEADER --- */\n\n.suey-property-header-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: calc(100% - 0.3em);\n    min-height: calc(var(--row-height) + (var(--border-micro) * 2));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border: solid var(--border-small) rgba(var(--shadow), 0.65);\n    border-radius: var(--radius-large);\n    padding: var(--pad-micro) var(--pad-medium); /* vertical horizontal */\n    margin-left: var(--pad-x-small);\n    margin-top: var(--pad-x-small);\n}\n\n.suey-property-header-icon > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-property-header-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n.suey-property-header-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/* --- ROW --- */\n\n.suey-property-row {\n    position: relative;\n    min-height: var(--row-height);\n}\n\n.suey-property-row:hover .suey-property-left {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.suey-property-row:hover .suey-property-left .suey-image {\n    filter: brightness(250%);\n}\n\n.suey-property-space {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.suey-property-left {\n    --left-property-width: 50%;\n\n    width: var(--left-property-width) !important;\n\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: var(--row-height);\n    text-align: left;\n    text-transform: capitalize;\n}\n.suey-left-tab-spacing {\n    padding-left: 1em;\n}\n\n.suey-property-right {\n    --right-property-width: 50%;\n\n    width: calc(var(--right-property-width) - var(--pad-small)) !important;\n\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: var(--row-height);\n}\n\n.suey-property-full {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: var(--row-height);\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.suey-property-full > *:not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/* --- RIGHT SIDE OF ROW --- */\n\n.suey-property-right .suey-number:not(.suey-property-tiny-row),\n.suey-property-right > *:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.suey-property-right > .suey-button:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-menu-button) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.suey-property-tiny-row {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: var(--row-height);\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/* --- BUTTON --- */\n/* Button appearing in right column of Property List, fixed size */\n.suey-property-button {\n    position: relative;\n    min-height: var(--row-height);\n    min-width: 2.1em;\n}\n\n/* Button appearing in right column of Property List, flex box */\n.suey-property-button-flex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: var(--row-height);\n    white-space: nowrap;\n}\n\n/********** Tree List **********/\n\n.suey-tree-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: hidden;\n    margin: calc(var(--pad-small) * 1.3);\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n    border: 0;\n    border-radius: var(--radius-small);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.35);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n\n    cursor: default;\n}\n\n/********** Tree List Option **********/\n\n.suey-tree-list .suey-option {\n    position: relative;\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-x-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.suey-tree-list .suey-option:hover:not(.suey-no-select) {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.suey-tree-list .suey-option.suey-active:not(.suey-no-select) {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-active-top:not(.suey-no-select) {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.suey-tree-list .suey-option.suey-active-bottom:not(.suey-no-select) {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.suey-tree-list .suey-option.suey-drag:not(.suey-active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-drag-top:not(.suey-active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.suey-tree-list .suey-option.suey-drag-bottom:not(.suey-active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** Tree List Opener **********/\n\n.suey-tree-list .suey-opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.suey-tree-list .suey-opener.suey-is-open:after {\n    content: '-';\n}\n\n.suey-tree-list .suey-opener.suey-is-closed:after {\n    content: '+';\n}\n\n/********** Drag Image **********/\n\n.suey-drag-image {\n    display: flex;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    border-radius: var(--radius-small);\n    z-index: 100000; /* Drag Clone */\n}\n";
var stylesheet$4="/********** Property List **********/\n\n.suey-property-list {\n    width: 100%;\n}\n\n/* --- HEADER --- */\n\n.suey-property-header-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: calc(100% - 0.3em);\n    min-height: calc(var(--row-height) + (var(--border-micro) * 2));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border: solid var(--border-small) rgba(var(--shadow), 0.65);\n    border-radius: var(--radius-large);\n    padding: var(--pad-micro) var(--pad-medium); /* vertical horizontal */\n    margin-left: var(--pad-x-small);\n    margin-top: var(--pad-x-small);\n}\n\n.suey-property-header-icon > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-property-header-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n.suey-property-header-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/* --- ROW --- */\n\n.suey-property-row {\n    position: relative;\n    min-height: var(--row-height);\n}\n\n.suey-property-row:hover .suey-property-left {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.suey-property-row:hover .suey-property-left .suey-image {\n    filter: brightness(250%);\n}\n\n.suey-property-space {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.suey-property-left {\n    --left-property-width: 50%;\n\n    width: var(--left-property-width) !important;\n\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: var(--row-height);\n    text-align: left;\n    text-transform: capitalize;\n}\n.suey-left-tab-spacing {\n    padding-left: 1em;\n}\n\n.suey-property-right {\n    --right-property-width: 50%;\n\n    width: calc(var(--right-property-width) - var(--pad-small)) !important;\n\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: var(--row-height);\n}\n\n.suey-property-full {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: var(--row-height);\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.suey-property-full > *:not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/* --- RIGHT SIDE OF ROW --- */\n\n.suey-property-right .suey-number:not(.suey-property-tiny-row),\n.suey-property-right > *:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.suey-property-right > .suey-button:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-menu-button) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.suey-property-tiny-row {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: var(--row-height);\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/* --- BUTTON --- */\n/* Button appearing in right column of Property List, fixed size */\n.suey-property-button {\n    position: relative;\n    min-height: var(--row-height);\n    min-width: 2.1em;\n}\n\n/* Button appearing in right column of Property List, flex box */\n.suey-property-button-flex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: var(--row-height);\n    white-space: nowrap;\n}\n\n/********** Tree List **********/\n\n.suey-tree-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: hidden;\n    margin: calc(var(--pad-small) * 1.3);\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n    border: 0;\n    border-radius: var(--radius-small);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.35);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n\n    cursor: default;\n}\n\n/********** Tree List Option **********/\n\n.suey-tree-list .suey-option {\n    position: relative;\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-x-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.suey-tree-list .suey-option:hover:not(.suey-no-select) {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.suey-tree-list .suey-option.suey-active:not(.suey-no-select) {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-active-top:not(.suey-no-select) {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.suey-tree-list .suey-option.suey-active-bottom:not(.suey-no-select) {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.suey-tree-list .suey-option.suey-drag:not(.suey-active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-drag-top:not(.suey-active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.suey-tree-list .suey-option.suey-drag-bottom:not(.suey-active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** Tree List Opener **********/\n\n.suey-tree-list .suey-opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.suey-tree-list .suey-opener.suey-is-open:after {\n    content: '-';\n}\n\n.suey-tree-list .suey-opener.suey-is-closed:after {\n    content: '+';\n}\n\n/********** Drag Image **********/\n\n.suey-drag-image {\n    display: flex;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    border-radius: var(--radius-small);\n    z-index: 100000; /* Drag Clone */\n}\n";
styleInject(css_248z$4);

var css_248z$3 = "/***** GRAPH *****/\n\n.suey-graph-input, .suey-graph-grid, .suey-graph-nodes, .suey-graph-lines {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/* Div used for processing user input */\n.suey-graph-input {\n    background: transparent;\n    z-index: -1; /* Graph Input */\n}\n\n/* Background div that holds tiled grid */\n.suey-graph-grid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.suey-graph-nodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.suey-graph-lines {\n    pointer-events: none;\n}\n\n/* Shows rubberband box */\n.suey-graph-band-box {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** MINIMAP *****/\n\n.suey-mini-map {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.suey-mini-map-canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.suey-mini-map-resizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/***** NODE *****/\n\n.suey-node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.suey-active-node {\n    z-index: 1; /* Active Node */\n}\n\n.suey-node:hover, .suey-node.suey-node-selected {\n    filter: brightness(120%);\n}\n\n.suey-node.suey-node-selected, .suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n\n.suey-node.suey-too-small .suey-resizer {\n    pointer-events: none;\n}\n\n.suey-node-panel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.suey-node-border {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n    padding: 0;\n}\n\n.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-resizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** NODE HEADER *****/\n\n.suey-node-header-title {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.suey-node-header-icon .suey-vector-box {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-micro) rgba(var(--shadow), 0.8));\n}\n\n.suey-node-header-icon .suey-image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.suey-node-header-icon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-node-header-text {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/***** NODE ITEM *****/\n\n.suey-node-interior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.suey-node-item-list {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.suey-node-item {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.suey-node-left {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.suey-node-right {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.suey-node-item-point {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* Node Item Point */\n}\n\n.suey-node-left .suey-node-item-point {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.suey-node-right .suey-node-item-point {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-point::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.suey-node-item.suey-item-connected .suey-node-item-point::after,\n.suey-node-item .suey-node-item-point.suey-active-item::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.suey-node.suey-node-displayed .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n.suey-node.suey-node-selected .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-item-point.suey-hover-point, .suey-node.suey-node-selected .suey-node-item-point.suey-hover-point,\n.suey-node-item-point.suey-active-item, .suey-node.suey-node-selected .suey-node-item-point.suey-active-item {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item detacher (little 'X') */\n.suey-node-item-detach {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.suey-node-right .suey-node-item-detach {\n    left: calc(100% + 0.7em);\n}\n.suey-node-left .suey-node-item-detach {\n    left: calc(0em - var(--row-height));\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-detach::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-detach {\n    pointer-events: all;\n}\n\n.suey-node-item.suey-item-connected:hover .suey-node-item-detach {\n    opacity: 1;\n}\n\n.suey-node-item-detach .suey-image {\n    filter: var(--drop-shadow);\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-detach:hover {\n    filter: brightness(100%);\n}\n";
var stylesheet$3="/***** GRAPH *****/\n\n.suey-graph-input, .suey-graph-grid, .suey-graph-nodes, .suey-graph-lines {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/* Div used for processing user input */\n.suey-graph-input {\n    background: transparent;\n    z-index: -1; /* Graph Input */\n}\n\n/* Background div that holds tiled grid */\n.suey-graph-grid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.suey-graph-nodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.suey-graph-lines {\n    pointer-events: none;\n}\n\n/* Shows rubberband box */\n.suey-graph-band-box {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** MINIMAP *****/\n\n.suey-mini-map {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.suey-mini-map-canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.suey-mini-map-resizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/***** NODE *****/\n\n.suey-node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.suey-active-node {\n    z-index: 1; /* Active Node */\n}\n\n.suey-node:hover, .suey-node.suey-node-selected {\n    filter: brightness(120%);\n}\n\n.suey-node.suey-node-selected, .suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n\n.suey-node.suey-too-small .suey-resizer {\n    pointer-events: none;\n}\n\n.suey-node-panel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.suey-node-border {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n    padding: 0;\n}\n\n.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-resizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** NODE HEADER *****/\n\n.suey-node-header-title {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.suey-node-header-icon .suey-vector-box {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-micro) rgba(var(--shadow), 0.8));\n}\n\n.suey-node-header-icon .suey-image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.suey-node-header-icon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-node-header-text {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/***** NODE ITEM *****/\n\n.suey-node-interior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.suey-node-item-list {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.suey-node-item {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.suey-node-left {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.suey-node-right {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.suey-node-item-point {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* Node Item Point */\n}\n\n.suey-node-left .suey-node-item-point {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.suey-node-right .suey-node-item-point {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-point::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.suey-node-item.suey-item-connected .suey-node-item-point::after,\n.suey-node-item .suey-node-item-point.suey-active-item::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.suey-node.suey-node-displayed .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n.suey-node.suey-node-selected .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-item-point.suey-hover-point, .suey-node.suey-node-selected .suey-node-item-point.suey-hover-point,\n.suey-node-item-point.suey-active-item, .suey-node.suey-node-selected .suey-node-item-point.suey-active-item {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item detacher (little 'X') */\n.suey-node-item-detach {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.suey-node-right .suey-node-item-detach {\n    left: calc(100% + 0.7em);\n}\n.suey-node-left .suey-node-item-detach {\n    left: calc(0em - var(--row-height));\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-detach::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-detach {\n    pointer-events: all;\n}\n\n.suey-node-item.suey-item-connected:hover .suey-node-item-detach {\n    opacity: 1;\n}\n\n.suey-node-item-detach .suey-image {\n    filter: var(--drop-shadow);\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-detach:hover {\n    filter: brightness(100%);\n}\n";
styleInject(css_248z$3);

var css_248z$2 = "/***** Panel Button *****/\n\n.suey-panel-button {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(var(--shadow), 0.2);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 101; /* Panel Button */\n}\n\n.suey-panel-button:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.suey-panel-button:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/***** Corner Buttons *****/\n\n.suey-corner-button {\n    cursor: pointer;\n    border-radius: 50%;\n    outline: none;\n    opacity: 0;\n    overflow: visible;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n/* Enlarge button click area */\n.suey-corner-button:before {\n    position: absolute;\n    content: '';\n    top: -0.25em;\n    right: -0.25em;\n    left: -0.25em;\n    bottom: -0.25em;\n    outline: none;\n}\n\n.suey-corner-button.suey-item-shown {\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button.suey-item-hidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-image {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button:hover .suey-corner-image {\n    opacity: 1.0;\n}\n\n/***** Resizeable *****/\n\n.suey-resizer {\n    position: absolute;\n    pointer-events: all;\n    opacity: 0.0;                           /* NOTE: Change to 1.0 to see 'Resizers' */\n    z-index: 99; /* Resizer */\n}\n\n.suey-resizer-left {\n    background-color: rgb(255, 0, 0);\n    left: 0;\n    top: 0;\n    width: var(--resize-size);\n    height: 100%;\n    margin-top: 0;\n    cursor: col-resize;\n}\n\n.suey-resizer-top-left {\n    background-color: rgb(255, 255, 0);\n    top: 0;\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-top {\n    background-color: rgb(0, 255, 0);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    cursor: row-resize;\n}\n\n.suey-resizer-top-right {\n    background-color: rgb(0, 255, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-right {\n    background-color: rgb(0, 0, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: 100%;\n    cursor: col-resize;\n}\n\n.suey-resizer-bottom-right {\n    background-color: rgb(255, 0, 255);\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom {\n    background-color: rgb(255, 255, 255);\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: row-resize;\n}\n\n.suey-resizer-bottom-left {\n    background-color: rgb(0, 0, 0);\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n";
var stylesheet$2="/***** Panel Button *****/\n\n.suey-panel-button {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(var(--shadow), 0.2);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 101; /* Panel Button */\n}\n\n.suey-panel-button:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.suey-panel-button:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/***** Corner Buttons *****/\n\n.suey-corner-button {\n    cursor: pointer;\n    border-radius: 50%;\n    outline: none;\n    opacity: 0;\n    overflow: visible;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n/* Enlarge button click area */\n.suey-corner-button:before {\n    position: absolute;\n    content: '';\n    top: -0.25em;\n    right: -0.25em;\n    left: -0.25em;\n    bottom: -0.25em;\n    outline: none;\n}\n\n.suey-corner-button.suey-item-shown {\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button.suey-item-hidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-image {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button:hover .suey-corner-image {\n    opacity: 1.0;\n}\n\n/***** Resizeable *****/\n\n.suey-resizer {\n    position: absolute;\n    pointer-events: all;\n    opacity: 0.0;                           /* NOTE: Change to 1.0 to see 'Resizers' */\n    z-index: 99; /* Resizer */\n}\n\n.suey-resizer-left {\n    background-color: rgb(255, 0, 0);\n    left: 0;\n    top: 0;\n    width: var(--resize-size);\n    height: 100%;\n    margin-top: 0;\n    cursor: col-resize;\n}\n\n.suey-resizer-top-left {\n    background-color: rgb(255, 255, 0);\n    top: 0;\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-top {\n    background-color: rgb(0, 255, 0);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    cursor: row-resize;\n}\n\n.suey-resizer-top-right {\n    background-color: rgb(0, 255, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-right {\n    background-color: rgb(0, 0, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: 100%;\n    cursor: col-resize;\n}\n\n.suey-resizer-bottom-right {\n    background-color: rgb(255, 0, 255);\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom {\n    background-color: rgb(255, 255, 255);\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: row-resize;\n}\n\n.suey-resizer-bottom-left {\n    background-color: rgb(0, 0, 0);\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".suey-tooltip, .suey-info-box {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.suey-tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.suey-tooltip.suey-updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.suey-info-box {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.suey-info-box.suey-updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
var stylesheet$1=".suey-tooltip, .suey-info-box {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.suey-tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.suey-tooltip.suey-updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.suey-info-box {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.suey-info-box.suey-updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
styleInject(css_248z$1);

var css_248z = "/********** Disabled **********/\n\n/** Grayscale filter for disabled items */\n.suey-disabled {\n    filter: contrast(75%) grayscale(100%) !important;\n    opacity: 0.7 !important;\n    cursor: default !important;\n    /* pointer-events: none !important; */\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.suey-unselectable {\n    user-select: none;\n}\n\n/********** Coloring **********/\n\n.suey-icon-colorize /* aqua */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 160deg));\n}\n\n.suey-complement-colorize /* orange */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 0deg));\n}\n\n.suey-rotate-colorize /* purple */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 230deg));\n}\n\n.suey-triadic-colorize /* red */ {\n    filter: brightness(50%) sepia(50%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 300deg));\n}\n\n.suey-match-scheme {\n    filter: saturate(125%) hue-rotate(var(--rotate-hue));\n}\n\n.suey-match-complement {\n    filter: saturate(125%) hue-rotate(calc(var(--rotate-hue) + 180deg));\n}\n\n.suey-black-or-white {\n    filter: brightness(calc(1 * var(--bright)));\n}\n\n.suey-black-or-white.suey-highlight {\n    filter: brightness(calc((2 * var(--bright)) + 0.35));\n}\n\n.suey-black-or-white.suey-drop-shadow {\n    filter: brightness(calc(10 * var(--bright))) var(--drop-shadow);\n}\n\n/********** Menu **********/\n\n.suey-keep-open {\n    /* keeps menu open on click, handled in Menu */\n}\n\n/********** Tree List **********/\n\n.suey-no-select {\n    /* disables tree list option, handled in Tree List */\n}\n";
var stylesheet="/********** Disabled **********/\n\n/** Grayscale filter for disabled items */\n.suey-disabled {\n    filter: contrast(75%) grayscale(100%) !important;\n    opacity: 0.7 !important;\n    cursor: default !important;\n    /* pointer-events: none !important; */\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.suey-unselectable {\n    user-select: none;\n}\n\n/********** Coloring **********/\n\n.suey-icon-colorize /* aqua */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 160deg));\n}\n\n.suey-complement-colorize /* orange */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 0deg));\n}\n\n.suey-rotate-colorize /* purple */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 230deg));\n}\n\n.suey-triadic-colorize /* red */ {\n    filter: brightness(50%) sepia(50%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 300deg));\n}\n\n.suey-match-scheme {\n    filter: saturate(125%) hue-rotate(var(--rotate-hue));\n}\n\n.suey-match-complement {\n    filter: saturate(125%) hue-rotate(calc(var(--rotate-hue) + 180deg));\n}\n\n.suey-black-or-white {\n    filter: brightness(calc(1 * var(--bright)));\n}\n\n.suey-black-or-white.suey-highlight {\n    filter: brightness(calc((2 * var(--bright)) + 0.35));\n}\n\n.suey-black-or-white.suey-drop-shadow {\n    filter: brightness(calc(10 * var(--bright))) var(--drop-shadow);\n}\n\n/********** Menu **********/\n\n.suey-keep-open {\n    /* keeps menu open on click, handled in Menu */\n}\n\n/********** Tree List **********/\n\n.suey-no-select {\n    /* disables tree list option, handled in Tree List */\n}\n";
styleInject(css_248z);

export { ALIGN, AbsoluteBox, AssetBox, BACKGROUNDS, Break, Button, CLOSE_SIDES, CORNERS$1 as CORNERS, Canvas, Checkbox, Color, ColorScheme, Css, Div, Docker, Docker2, Dom, Dropdown, Element, FlexBox, FlexSpacer, GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, Gooey, Graph, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, IMAGE_EXPAND, Image, Interaction, Iris, LEFT_SPACING, MOUSE_CLICK, MOUSE_SLOP_LARGE, MOUSE_SLOP_SMALL, Menu, MenuItem, MenuSeparator, MenuShortcut, NODE_TYPES, Node, NodeItem, NumberBox, NumberScroll, OVERFLOW, PANEL_STYLES, POSITION, Panel, Popper, PropertyList, RESIZERS, Row, ShadowBox, Shrinkable, Signal, SignalBinding, Slider, Span, TAB_SIDES, THEMES, TOOLTIP_Y_OFFSET, TRAIT, Tab, Tabbed, Text, TextArea, TextBox, Titled, ToolbarButton, ToolbarSeparator, ToolbarSpacer, TreeList, VectorBox, Window, tooltipper };
