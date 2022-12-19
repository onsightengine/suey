/**
 * @description Onui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/onui
 */
const IMAGE_CHECK = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M373.189,648.684c-0,-0 -237.09,-138.996 -258.087,-117.999c-20.997,20.997 212.331,288.419 212.331,288.419c1.975,3.009 4.284,5.857 6.926,8.499c10.698,10.698 24.796,15.945 38.83,15.71c14.035,0.235 28.132,-5.012 38.831,-15.71c2.641,-2.642 4.95,-5.49 6.926,-8.499c-0,-0 423.255,-489.7 496.91,-611.246c9.004,-14.859 -15.991,-40.415 -34.446,-27.458c-108.024,75.837 -508.221,468.284 -508.221,468.284Z" style="fill:#ebebeb;"/></svg>';
const IMAGE_CLOSE = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><circle cx="256" cy="256" r="256" style="fill:#e24c4b;"/><path d="M354.658,492.268c-30.37,12.709 -63.7,19.732 -98.659,19.732c-141.29,-0 -255.999,-114.71 -255.999,-256c-0,-29.773 5.092,-58.365 14.455,-84.951c-0.306,5.601 -0.022,11.26 -0.461,16.921c-13.988,180.322 123.333,317.446 306.218,306.217c11.622,-0.713 23.138,-0.652 34.446,-1.919Z" style="fill-opacity:0.25;"/><path d="M386.574,400.264c-12.566,12.566 -33.512,12.566 -46.079,0l-84.496,-84.496l-84.496,84.496c-12.567,12.566 -33.513,12.566 -46.079,0c-12.566,-12.567 -12.566,-33.513 -0,-46.079l84.496,-84.496l-84.496,-84.496c-12.566,-12.567 -12.566,-33.513 -0,-46.079c12.566,-12.567 261.15,215.071 261.15,215.071c12.566,12.566 12.566,33.511 -0,46.079Z" style="fill-opacity:0.25;"/><path d="M386.575,386.834c-12.567,12.568 -33.513,12.568 -46.079,0.002l-84.496,-84.498l-84.497,84.498c-12.566,12.566 -33.512,12.566 -46.079,-0c-12.566,-12.568 -12.566,-33.513 -0,-46.079l84.497,-84.496l-84.497,-84.498c-12.566,-12.566 -12.566,-33.511 -0,-46.079c12.567,-12.565 33.513,-12.565 46.079,0l84.496,84.498l84.497,-84.498c12.566,-12.565 33.512,-12.565 46.079,0c12.566,12.568 12.566,33.513 -0,46.079l-84.497,84.496l84.497,84.498c12.566,12.566 12.566,33.51 -0,46.077Z" style="fill:#fff;"/></svg>';
const IMAGE_EMPTY = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"></svg>';
const TOOLTIP_Y_OFFSET = '0.3em';

class Css {
    static getVariable(variable) {
        const rootElement = document.querySelector(':root');
        return getComputedStyle(rootElement).getPropertyValue(variable);
    }
    static setVariable(variableName, valueAsString) {
        const rootElement = document.querySelector(':root');
		rootElement.style.setProperty(variableName, valueAsString);
    }
    static baseSize() {
        return parseFloat(getComputedStyle(document.querySelector(':root')).fontSize);
    }
    static fontSize() {
        return parseFloat(getComputedStyle(document.body).fontSize);
    }
    static guiScale() {
        return Css.fontSize() / Css.baseSize();
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
    static toEm(pixels) {
        const parsedSize = Css.parseSize(pixels);
        if (parsedSize.includes('px')) {
            return ((parseFloat(parsedSize) / 10.0) / Css.guiScale()) + 'em';
        } else if (parsedSize.includes('em')) {
            return parsedSize;
        }
        console.warn(`Css.toEm: Could not convert to em! Unit passed in: ${pixels}`);
        return size;
    }
    static toPx(size) {
        const parsedSize = Css.parseSize(size);
        if (parsedSize.includes('px')) {
            return parsedSize;
        } else if (parsedSize.includes('rem')) {
            return parseInt((parseFloat(size) * 10.0)) + 'px';
        } else if (parsedSize.includes('em')) {
            return parseInt((parseFloat(size) * 10.0 * Css.guiScale())) + 'px';
        }
        console.warn(`Css.toPx: Could not convert to pixels! Unit passed in: ${size}`);
        return size;
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

class Html {
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
            if (parent.classList.contains(className)) return parent;
            parent = parent.parentElement;
        }
        return undefined;
    }
    static parentScroller(element) {
        if (! element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Html.parentScroller(element.parentElement);
        }
    }
    static scrollIntoView(element) {
        const parent = Html.parentScroller(element);
        if (parent) {
            const onePixel = parseInt(Css.toPx('0.2em'));
            if ((element.offsetTop - parent.offsetTop - onePixel) < parent.scrollTop) {
                parent.scrollTop = element.offsetTop - parent.offsetTop - onePixel;
            } else if (element.offsetTop > (parent.scrollTop + parent.clientHeight + onePixel - parent.offsetTop)) {
                parent.scrollTop = element.offsetTop - parent.clientHeight + element.offsetHeight + onePixel - parent.offsetTop;
            }
        }
    }
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Html.traverse(element.children[i], applyFunction, true);
        }
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
    }
    add() {
        for (let i = 0; i < arguments.length; i++) {
            const onuiElement = arguments[i];
            if (onuiElement instanceof Element && onuiElement.isElement) {
                this.contents().dom.appendChild(onuiElement.dom);
                let hasIt = false;
                for (let j = 0; j < this.contents().children.length; j++) {
                    if (this.contents().children[j].dom.isSameNode(onuiElement.dom)) {
                        hasIt = true;
                        break;
                    }
                }
                if (! hasIt) this.contents().children.push(onuiElement);
                onuiElement.parent = this;
            } else {
                console.error('Element.add:', onuiElement, 'is not an instance of Onui Element.');
            }
        }
        return this;
    }
    static remove(parent, element) {
        if (element && element.isElement) {
            for (let i = 0; i < parent.children.length; i++) {
                const child = parent.children[i];
                if (element.dom.isSameNode(child.dom)) {
                    Element.clear(element);
                    parent.children.splice(j, 1);
                    return true;
                }
            }
        }
        try {
            parent.dom.removeChild(element);
            Element.clear(element);
            return true;
        } catch (exception) {
        }
        return false;
    }
    remove() {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            let removed = Element.remove(this.contents(), element);
            if (! removed) removed = Element.remove(this, element);
            if (! removed) console.log(`Element.remove: Could not remove child!`);
        }
        return this;
    }
    static clear(element, dispose = true) {
        if (! element) return;
        function clearDomChildren(dom) {
            if (! dom.children) return;
            for (let i = dom.children.length - 1; i >= 0; i--) {
                const child = dom.children[i];
                Element.clear(child);
                try { dom.removeChild(child); } catch (e) {  }
            }
        }
        if (element.isElement) {
            for (let i = 0; i < element.children.length; i++) {
                const child = element.children[i];
                Element.clear(child);
            }
            element.children.length = 0;
            clearDomChildren(element.dom);
        } else {
            clearDomChildren(element);
        }
        if (! dispose) return;
        if (element.dispose && typeof element.dispose === 'function') element.dispose();
        if (element.dom && element.dom.dispose && typeof element.dom.dispose === 'function') element.dom.dispose();
    }
    clearContents() {
        Element.clear(this.contents(), false );
        return this;
    }
    clear() {
        Element.clear(this);
        return this;
    }
    setClass(className) {
        this.dom.className = className;
        return this;
    }
    addClass(className) {
        this.dom.classList.add(className);
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
    setDisabled(value) {
        this.dom.disabled = value;
        return this;
    }
    selectable(allowSelection) {
        if (allowSelection) {
            this.removeClass('Unselectable');
        } else {
            this.addClass('Unselectable');
        }
        return this;
    }
    getInnerText() {
        return this.contents().dom.innerText;
    }
    setInnerText(value) {
        if (value != undefined) this.contents().dom.innerText = value;
        return this;
    }
    setInnerHtml(value) {
        if (value != undefined) this.contents().dom.innerHTML = value;
        return this;
    }
    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }
    getTextContent() {
        return this.contents().dom.textContent;
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
const properties = [
    'display', 'flex', 'overflow', 'visibility',
    'position', 'left', 'top', 'right', 'bottom', 'width', 'height',
    'color', 'opacity', 'cursor', 'pointerEvents'
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
    'Change', 'Input',
    'KeyUp', 'KeyDown',
    'Click', 'DblClick',
    'PointerDown', 'PointerMove', 'PointerUp',
    'PointerEnter', 'PointerLeave', 'PointerOut', 'PointerOver', 'PointerCancel',
];
events.forEach(function(event) {
    const method = 'on' + event;
    Element.prototype[method] = function(callback) {
        this.dom.addEventListener(event.toLowerCase(), callback.bind(this), false);
        return this;
    };
});

class Div extends Element {
    constructor(innerHtml) {
        super(document.createElement('div'));
        this.setInnerHtml(innerHtml);
    }
}

const DEVICE_TYPE = {
    POINTER: 1,
    TOUCH: 2,
};
let _showTimer;
class Tooltipper {
    constructor() {
        const tooltip = new Div().setClass('Tooltip').setInnerHtml('');
        document.body.appendChild(tooltip.dom);
        let deviceType = DEVICE_TYPE.POINTER;
        document.addEventListener('touchstart', () => deviceType = DEVICE_TYPE.TOUCH, { capture: true, passive: true });
        document.addEventListener('mousemove', () => deviceType = DEVICE_TYPE.POINTER, { capture: true, passive: true });
        document.addEventListener('mouseenter', showTooltip, { capture: true, passive: true });
        document.addEventListener('hidetooltip', hideTooltip, { capture: true, passive: true });
        document.addEventListener('mouseleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('blur', hideTooltip, { capture: true, passive: true });
        function showTooltip(event) {
            const element = event.target;
            if (! element || ! (element instanceof HTMLElement)) return;
            if (! element.getAttribute('tooltip')) return;
            if (event instanceof FocusEvent && deviceType !== DEVICE_TYPE.POINTER) return;
            if (('TouchEvent' in window) && event instanceof TouchEvent) return;
            let text = element.getAttribute('tooltip');
            if (! text.length) return;
            clearTimeout(_showTimer);
            tooltip.removeClass('Updated');
            _showTimer = setTimeout(() => {
                tooltip.setInnerHtml(text);
                Popper.popUnder(tooltip.dom, element, ALIGN.CENTER, null, TOOLTIP_Y_OFFSET);
                tooltip.addClass('Updated');
            }, parseInt(Css.getVariable('--tooltip-delay')));
        }
        function hideTooltip(event) {
            const element = event.target;
            if (! element || ! (element instanceof HTMLElement)) return;
            if (! element.getAttribute('tooltip')) return;
            clearTimeout(_showTimer);
            tooltip.removeClass('Updated');
        }
    }
}
const tooltipper = new Tooltipper();

class Break extends Element {
    constructor() {
        super(document.createElement('br'));
    }
}

class Image extends Element {
    constructor(imageUrl, width = null, height = null, draggable = false) {
        const imageDom = document.createElement('img');
        imageDom.onerror = () => imageDom.style.visibility = 'hidden';
        function setImage(fromImage) {
            const isString = (typeof fromImage === 'string' || fromImage instanceof String);
            if (isString && (fromImage.includes('<svg') || fromImage.includes('<SVG'))) {
                const blob = new Blob([ fromImage ], { type: 'image/svg+xml' });
                const url = URL.createObjectURL(blob);
                imageDom.src = url;
                imageDom.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
            } else {
                imageDom.src = imageUrl;
            }
        }
        setImage(imageUrl);
        if (! draggable) imageDom.ondragstart = () => { return false };
        if (width != undefined) imageDom.style.width = Css.parseSize(width);
        if (height != undefined) imageDom.style.height = Css.parseSize(height);
        super(imageDom);
        this.setClass('Image');
        this.setImage = function(imageUrl) {
            setImage(imageUrl);
        };
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
        this.setClass('Text');
        this.setCursor('default');
    }
}

class Row extends Div {
    constructor() {
        super();
        this.addClass('Row');
    }
}

class VectorBox extends Div {
    constructor() {
        super();
        this.setClass('VectorBox');
        let args = arguments;
        if (arguments.length === 0) {
            args = [ IMAGE_EMPTY ];
        } else if (arguments.length === 1 && Array.isArray(arguments[0])) {
            args = arguments[0];
        }
        for (let i = 0; i < args.length; i++) {
            const newImage = this.addImage(args[i]);
            if (i === 0) this.img = newImage;
        }
    }
    addImage(imageUrl) {
        const stretchX = '100%';
        const stretchY = '100%';
        if (imageUrl === undefined || imageUrl === '') imageUrl = IMAGE_EMPTY;
        const newImage = new Image(imageUrl, stretchX, stretchY, false );
        this.add(newImage);
        if (! this.img) this.img = newImage;
        return newImage;
    }
    makeDraggable() {
        for (let j = 0; j < this.contents().children.length; j++) {
            this.contents().children[j].dom.ondragstart = () => {};
        }
    }
    setImage(imageUrl) {
        this.img.setImage(imageUrl);
    }
}

const PROPERTY_SIZE = {
    HALF:	'half',
    THIRD:	'third',
};
class PropertyList extends Div {
    constructor(rowSizing = PROPERTY_SIZE.HALF) {
        super();
        this.addClass('PropertyList');
        this.setStyle('display', 'block');
        this.rowSizing = rowSizing;
        this.setRowSizeHalfs = function() { this.rowSizing = PROPERTY_SIZE.HALF; };
        this.setRowSizeThirds = function() { this.rowSizing = PROPERTY_SIZE.THIRD; };
    }
    addHeader(text = '', iconUrl, enlarge = false) {
        const header = this.createHeader(text, iconUrl, enlarge);
        this.add(header);
        return header;
    }
    addRow(title = '', ...controls) {
        const row = this.createRow(title, this.createControls(...controls));
        this.add(row);
        return row;
    }
    createHeader(text = '', iconUrl, enlarge = false) {
        const header = new Div().setClass('PropertyHeaderTitle');
        const icon = new VectorBox(iconUrl);
        if (enlarge) icon.addClass('EnlargeIcon');
        header.iconHolder = new Span().setClass('PropertyHeaderIcon').add(icon);
        header.textHolder = new Span().setClass('PropertyHeaderText').setTextContent(text);
        header.add(header.iconHolder, header.textHolder);
        return header;
    }
    createRow(title = '', ...controls) {
        const rightWidget = this.createControls(...controls);
        const leftWidget = new Text(title).selectable(false).addClass('PropertyLeft');
        if (this.rowSizing === PROPERTY_SIZE.THIRD) {
            leftWidget.addClass('PropertyLeftThird');
            rightWidget.addClass('PropertyRightThird');
        } else {
            leftWidget.addClass('PropertyLeftHalf');
            rightWidget.addClass('PropertyRightHalf');
        }
        const row = new Row().addClass('PropertyRow').add(leftWidget, rightWidget);
        row.leftWidget = leftWidget;
        row.rightWidget = rightWidget;
        return row;
    }
    createControls() {
        const rightRow = new Row().setStyle('margin', '0', 'padding', '0').addClass('PropertyRight');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (argument instanceof Element && argument.isElement) {
                rightRow.add(argument);
                if (i < args.length - 1) rightRow.add(new Span().addClass('PropertySpace'));
            } else {
                console.error('PropertyList.createRight():', argument, 'is not an instance of Onui Element.');
            }
        }
        return rightRow;
    }
}

class TreeList extends Div {
    constructor(multiSelect = false) {
        super();
        const self = this;
        this.setClass('TreeList');
        this.dom.tabIndex = 0;
        this.multiSelect = multiSelect;
        function onKeyDown(event) {
            if (! self.multiSelect) {
                if (event.keyCode === 38 || event.keyCode === 40) {
                    event.preventDefault();
                    event.stopPropagation();
                    let index = self.getIndex(self.selectedValue);
                    if (index === -1) return;
                    if (event.keyCode === 38 ) index--;
                    if (event.keyCode === 40 ) index++;
                    if (index >= 0 && index < self.options.length) {
                        self.setValue(self.options[index].value, true);
                        self.dom.dispatchEvent(new Event('change'));
                    }
                }
            } else {
                if (! event.shiftKey) {
                    self._shiftAdd = 0;
                    self._shiftTrack = [];
                }
                if (event.keyCode === 38 || event.keyCode === 40) {
                    event.preventDefault();
                    event.stopPropagation();
                    let values = [...self.selectedValues];
                    if (event.shiftKey) {
                        if (self._shiftTrack.length === 0) self._shiftTrack = [...values];
                        values = [...self._shiftTrack];
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.keyCode === 38 && index + self._shiftAdd > 0) self._shiftAdd--;
                        if (event.keyCode === 40 && index + self._shiftAdd < self.options.length - 1) self._shiftAdd++;
                        index += self._shiftAdd;
                        if (index < 0 || index > self.options.length - 1) return;
                        const index1 = self.getIndex(values[values.length - 1]);
                        const index2 = index;
                        if (index1 < index2) {
                            for (let i = index1; i <= index2; i++) {
                                const value = self.options[i].value;
                                if (! values.includes(value)) values.push(value);
                            }
                        } else {
                            for (let i = index1; i >= index2; i--) {
                                const value = self.options[i].value;
                                if (! values.includes(value)) values.push(value);
                            }
                        }
                        self.setValues(values, true);
                        self.dom.dispatchEvent(new Event('change'));
                    } else if (values.length > 0) {
                        let lastValue = values[values.length - 1];
                        let index = self.getIndex(lastValue);
                        if (index === -1) return;
                        if (event.keyCode === 38 ) index--;
                        if (event.keyCode === 40 ) index++;
                        if (index >= 0 && index < self.options.length) {
                            self.setValues([ self.options[index].value ], true);
                            self.dom.dispatchEvent(new Event('change'));
                        }
                    }
                }
            }
        }
        function onKeyUp(event) {
            switch (event.keyCode) {
                case 38:
                case 40:
                    event.preventDefault();
                    event.stopPropagation();
                    if (! event.shiftKey) {
                        self._shiftAdd = 0;
                        self._shiftTrack = [];
                    }
                    break;
            }
        }
        this.options = [];
        this.selectedValue = null;
        this.selectedValues = [];
        this._shiftAdd = 0;
        this._shiftTrack = [];
        this.dom.addEventListener('keydown', onKeyDown);
        this.dom.addEventListener('keyup', onKeyUp);
        this.dispose = function() {
            this.dom.removeEventListener('keydown', onKeyDown);
            this.dom.addEventListener('keydown', onKeyUp);
        };
    }
    getIndex(value) {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].value === value) return i;
        }
        return -1;
    }
    getValue() {
        return this.selectedValue;
    }
    setValue(value, scrollTo = false) {
        let lastElement = undefined;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('Active');
        }
        for (let i = 0; i < this.options.length; i++) {
            const element = this.options[i];
            if (parseInt(element.value) === parseInt(value)) {
                element.classList.add('Active');
                lastElement = element;
            }
        }
        if (lastElement && scrollTo) setTimeout(() => Html.scrollIntoView(lastElement), 0);
        this.selectedValue = value;
        return this;
    }
    getValues() {
        return this.selectedValues;
    }
    setValues(valueArray, scrollTo = false) {
        let lastElement = undefined;
        for (let i = 0; i < this.options.length; i++) {
            this.options[i].classList.remove('Active');
            this.options[i].classList.remove('ActiveTop');
            this.options[i].classList.remove('ActiveBottom');
        }
        for (let v = 0; v < valueArray.length; v++) {
            const value = valueArray[v];
            for (let i = 0; i < this.options.length; i++) {
                const element = this.options[i];
                if (parseInt(element.value) === parseInt(value)) {
                    element.classList.add('Active');
                    lastElement = element;
                }
            }
        }
        for (let i = 0; i < this.options.length - 1; i++) {
            const element = this.options[i];
            const elementAfter = this.options[i + 1];
            if (element.classList.contains('Active') && elementAfter.classList.contains('Active')) {
                element.classList.add('ActiveTop');
                elementAfter.classList.add('ActiveBottom');
            }
        }
        if (lastElement && scrollTo) setTimeout(() => Html.scrollIntoView(lastElement), 0);
        this.selectedValues = [...valueArray];
        return this;
    }
    setOptions(options) {
        const self = this;
        this.clearContents();
        function onPointerDown(event) {
            if (! event.shiftKey) {
                self._shiftAdd = 0;
                self._shiftTrack = [];
            }
            if (self.multiSelect) {
                let values = [...self.selectedValues];
                if (event.altKey || event.ctrlKey || event.metaKey) {
                    if (values.includes(this.value)) {
                        const index = values.indexOf(this.value);
                        values.splice(index, 1);
                    } else {
                        values.push(this.value);
                    }
                    self.setValues(values);
                } else if (event.shiftKey && values.length > 0) {
                    if (self._shiftTrack.length === 0) self._shiftTrack = [...self.selectedValues];
                    values = [...self._shiftTrack];
                    const index1 = self.getIndex(values[values.length - 1]);
                    const index2 = self.getIndex(this.value);
                    if (index1 < index2) {
                        for (let i = index1; i <= index2; i++) {
                            const value = self.options[i].value;
                            if (! values.includes(value)) values.push(value);
                        }
                    } else {
                        for (let i = index1; i >= index2; i--) {
                            const value = self.options[i].value;
                            if (! values.includes(value)) values.push(value);
                        }
                    }
                    self._shiftAdd = index2 - index1;
                    self.setValues(values);
                } else {
                    self.setValues([ this.value ]);
                }
            } else {
                self.setValue(this.value);
            }
            const changeEvent = new Event('change');
            self.dom.dispatchEvent(changeEvent);
        }
        let currentDrag = undefined;
        function onDrag() {
            currentDrag = this;
        }
        function onDragStart(event) {
            event.dataTransfer.setData('text/plain', this.value );
        }
        function onDragOver(event) {
            if (! currentDrag || this === currentDrag) return;
            const area = event.offsetY / this.clientHeight;
            this.className = 'Option Drag';
            if (area < 0.25) this.className = 'Option DragTop';
            if (area > 0.75) this.className = 'Option DragBottom';
        }
        function onDragLeave() {
            if (! currentDrag || this === currentDrag) return;
            this.className = 'Option';
        }
        function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();
            if (! currentDrag || this === currentDrag) return;
            this.className = 'Option';
            if (self.onDrop && typeof self.onDrop === 'function') self.onDrop(event, this, currentDrag);
            currentDrag = undefined;
        }
        self.options = [];
        for (let i = 0; i < options.length; i++) {
            const div = options[i];
            div.className = 'Option';
            self.dom.appendChild(div);
            self.options.push(div);
            div.addEventListener('pointerdown', onPointerDown);
            if (div.draggable === true) {
                div.addEventListener('drag', onDrag);
                div.addEventListener('dragstart', onDragStart);
                div.addEventListener('dragover', onDragOver);
                div.addEventListener('dragleave', onDragLeave);
                div.addEventListener('drop', onDrop);
            }
            if (! div.dispose) {
                div.dispose = function() {
                    div.removeEventListener('pointerdown', onPointerDown);
                    if (div.draggable === true) {
                        div.removeEventListener('drag', onDrag);
                        div.removeEventListener('dragstart', onDragStart);
                        div.removeEventListener('dragover', onDragOver);
                        div.removeEventListener('dragleave', onDragLeave);
                        div.removeEventListener('drop', onDrop);
                    }
                };
            }
        }
        return this;
    }
}

class Button extends Element {
    constructor(innerHtml) {
        super(document.createElement('button'));
        const self = this;
        this.setClass('Button');
        this.dom.innerHTML = innerHtml ?? '';
        this.attachedMenu = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 0;
        this.alignMenu = ALIGN.LEFT;
        this.overflowMenu = OVERFLOW.RIGHT;
        Object.defineProperty(this, 'disabled', {
            get: function() { return (this.dom) ? this.dom.disabled : true; },
            set: function(innerHtml) { if (this.dom) this.dom.disabled = innerHtml; }
        });
        this.dom.addEventListener('pointerdown', () => {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        }, false);
    }
    attachMenu(onuiMenu) {
        const self = this;
        if (onuiMenu.hasClass('Menu') === false) return this;
        this.addClass('MenuButton');
        this.attachedMenu = onuiMenu;
        document.body.appendChild(onuiMenu.dom);
        this.dom.addEventListener('pointerdown', onPointerDown, false);
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
        window.addEventListener('resize', popMenu, false);
        function popMenu() {
            const popped = Popper.popUnder(
                onuiMenu.dom,
                self.dom,
                self.alignMenu,
                self.menuOffsetX,
                self.menuOffsetY,
                self.overflowMenu
            );
            if (popped === POSITION.UNDER) {
                onuiMenu.removeClass('SlideUp');
                onuiMenu.addClass('SlideDown');
            } else {
                onuiMenu.removeClass('SlideDown');
                onuiMenu.addClass('SlideUp');
            }
        }
        function onPointerDown(event) {
            if (self.hasClass('Selected') === false) {
                self.addClass('Selected');
                popMenu();
                if (self.dom) onuiMenu.showMenu(self.dom);
            }
        };
        this.detachMenu = function() {
            if (self.hasClass('MenuButton') === false) return;
            self.removeClass('MenuButton');
            window.removeEventListener('resize', popMenu, false);
            self.dom.removeEventListener('pointerdown', onPointerDown, false);
            self.attachedMenu.clear();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        };
    }
    dispose() {
        if (this.attachedMenu) {
            this.detachMenu();
        }
    }
}

class Checkbox extends Element {
    constructor(boolean) {
        super(document.createElement('label'));
        this.setClass('Checkbox');
        this.checkbox = new Element(document.createElement('input')).addClass('CheckboxInput');
        this.checkbox.dom.type = 'checkbox';
        let button = new Div().addClass('CheckboxButton');
        this.add(this.checkbox, button);
        this.setValue(boolean);
    }
    getValue() {
        if (! this.checkbox.dom) return undefined;
        return this.checkbox.dom.checked;
    }
    setValue(value) {
        if (! this.checkbox.dom) return this;
        this.checkbox.dom.checked = (value) ? true : false;
        return this;
    }
}

class Color extends Button {
    constructor() {
        super();
        const self = this;
        this.addClass('ColorButton');
        this.addClass('DropArrow');
        const colorBox = new Element(document.createElement('input'));
        colorBox.addClass('ColorInputButton');
        colorBox.dom.setAttribute('autocomplete', 'off');
        try { colorBox.dom.type = 'color'; } catch(exception) {}
        this.add(colorBox);
        const colorBackground = new Div().addClass('DropColor');
        colorBackground.setStyle('backgroundColor', colorBox.dom.value);
        this.add(colorBackground);
        function colorBoxPointerDown(event) {
            self.addClass('Selected');
        }
        function colorBoxInput(event) {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
        }
        function colorBoxBlur() {
            self.removeClass('Selected');
        }
        colorBox.dom.addEventListener('pointerdown', colorBoxPointerDown);
        colorBox.dom.addEventListener('input', colorBoxInput);
        colorBox.dom.addEventListener('blur', colorBoxBlur);
        this.getValue = function() {
            if (! colorBox.dom) return 0;
            return colorBox.dom.value;
        };
        this.getHexValue = function() {
            if (! colorBox.dom) return 0;
            return parseInt(colorBox.dom.value.substring(1), 16);
        };
        this.setValue = function(value) {
            if (! colorBox.dom) return this;
            colorBox.dom.value = value;
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
            return this;
        };
        this.setHexValue = function(hex) {
            if (! colorBox.dom) return this;
            if (hex === undefined) return this;
            self.setValue('#' + ('000000' + hex.toString(16)).slice(-6));
            return this;
        };
        this.setHexValue(0xffffff);
        this.dispose = function() {
            colorBox.dom.removeEventListener('pointerdown', colorBoxPointerDown);
            colorBox.dom.removeEventListener('input', colorBoxInput);
            colorBox.dom.removeEventListener('blur', colorBoxBlur);
        };
    }
}

const TRIANGLE_SIZE = 3.0;
class Menu extends Div {
    constructor() {
        super();
        this.setClass('Menu');
        this.mouseSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.mouseSvg.setAttribute('class', 'MenuMouseTriangle');
        this.mouseSvg.setAttribute('pointer-events', 'none');
        this.mouseSvg.setAttribute('version', '1.1');
        this.mouseArea = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        this.mouseArea.setAttribute('fill', 'aqua');
        this.mouseArea.setAttribute('opacity', '0.0');
        this.mouseArea.setAttribute('pointer-events', 'fill');
        this.mouseSvg.appendChild(this.mouseArea);
    }
    isShown() {
        return this.hasClass('MenuShow');
    }
    showMenu(parentDom) {
        const self = this;
        this.addClass('MenuShow');
        this.clickCount = 0;
        if (Html.isChildOfElementWithClass(this.dom, 'Menu')) {
            this.mouseArea.setAttribute('pointer-events', 'none');
            this.contents().dom.appendChild(this.mouseSvg);
            let timeFloat = parseFloat(Css.getVariable('--menu-timing')) * 1000.0;
            setTimeout(() => { this.updateMouseArea(); }, timeFloat);
        }
        this.closeMenu = function(applyToSelf = true, dontCloseChildrenOf = undefined) {
            this.traverse((child) => {
                if (dontCloseChildrenOf && Html.isChildOf(child.dom, dontCloseChildrenOf)) {
                } else {
                    child.removeClass('MenuShow', 'Selected');
                    if (child.attachedMenu && child.attachedMenu.closeMenu) child.attachedMenu.closeMenu(true);
                    if (child.dom && child.dom.blur) child.dom.blur();
                }
            }, applyToSelf);
            if (applyToSelf) {
                let parent = parentDom;
                while (parent) {
                    if (parentDom.classList.contains('MenuButton')) {
                        parent.classList.remove('Selected');
                        parent = undefined;
                    } else {
                        parent = parent.parentElement;
                    }
                }
                if (parentDom.classList.contains('MenuButton')) {
                    document.removeEventListener('pointerdown', onPointerDown);
                    document.removeEventListener('keydown', onKeyDown);
                }
            }
        };
        if (parentDom.classList.contains('MenuButton')) {
            document.addEventListener('pointerdown', onPointerDown, false);
            document.addEventListener('keydown', onKeyDown, false);
        }
        function onPointerDown(event) {
            let menuShouldClose = true;
            if (self.dom.contains(event.target)) {
                let node = event.target;
                let list = node.classList;
                while (node.parentElement && list.contains('Menu') === false && list.contains('MenuItem') === false) {
                    node = node.parentElement;
                    list = node.classList;
                }
                if ((list.contains('MenuItem') && list.contains('SubMenuItem')) || list.contains('KeepOpen')) {
                    menuShouldClose = false;
                    if (event.target && event.target.tagName.toLowerCase() !== 'input') {
                        event.preventDefault();
                    }
                }
            }
            if (menuShouldClose) self.clickCount++;
            if (self.clickCount === 1) menuShouldClose = false;
            if (menuShouldClose) {
                self.closeMenu();
                if (window.signals) signals.guiLostFocus.dispatch();
            }
        }
        function onKeyDown(event) {
            switch (event.code) {
                case 'Escape': self.closeMenu(); break;
            }
        }
        return this;
    }
    updateMouseArea() {
        let parentRect = this.dom.parentElement.getBoundingClientRect();
        let myRect = this.dom.getBoundingClientRect();
        let middle = (parentRect.top - myRect.top) + (parentRect.height / 2);
        let middle1 = middle - (parentRect.height / 2);
        let middle2 = middle + (parentRect.height / 2);
        let leftSide = (parentRect.width / TRIANGLE_SIZE);
        let topSides = 10;
        this.mouseSvg.style['left'] = `-${leftSide}px`;
        this.mouseSvg.style['top'] = `-${topSides}px`;
        this.mouseSvg.setAttribute('width', `${this.getWidth() + leftSide}px`);
        this.mouseSvg.setAttribute('height', `${this.getHeight() + topSides*2}px`);
        let point1 = `${leftSide},0`;
        let point2 = `0,${topSides + middle1}`;
        let point3 = `0,${topSides + middle2}`;
        let point4 = `${leftSide},${this.getHeight() + topSides*2}`;
        this.mouseArea.setAttributeNS(null, 'points', `${point1} ${point2} ${point3} ${point4}`);
        this.mouseArea.setAttribute('pointer-events', 'fill');
        return this;
    }
}

class MenuShortcut extends Div {
    constructor(text = undefined) {
        super();
        this.setClass('MenuShortcut');
        if (text) this.setShortcutText(text);
    }
    setShortcutText(text) {
        if (! text) return this;
        this.text = text;
        this.clear();
        for (let i = 0; i < text.length; i++) {
            let letter = new Div().setClass('MenuShortcutCharacter');
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
            letter.dom.innerHTML = subString;
            this.add(letter);
        }
        return this;
    }
}

class MenuItem extends Div {
    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        this.setClass('MenuItem');
        this.setName(text);
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('MenuIcon');
        this.divText = new Div().setClass('MenuText');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.add(new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut));
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;
        this.dom.addEventListener('contextmenu', function(event) { event.preventDefault(); });
        this.onPointerEnter((event) => {
            let parentMenu = this.parent;
            while (parentMenu && (parentMenu.hasClass('Menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && parentMenu.closeMenu) {
                parentMenu.closeMenu(false, this.dom);
            }
            this.subMenu?.showMenu(this.dom);
        });
        this.setText(text);
        this.selectable(false);
    }
    isChecked() {
        return this.checked;
    }
    isDisabled() {
        return this.disabled;
    }
    keepOpen() {
        this.addClass('KeepOpen');
        return this;
    }
    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        if (checked) this.divIcon.addClass('IconColorize'); else this.divIcon.removeClass('IconColorize');
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }
    setDisabled(disabled) {
        if (disabled) { this.addClass('Disabled'); } else { this.removeClass('Disabled'); }
        this.disabled = disabled;
        return this;
    }
    setImage(imageUrl) {
        this.divIcon.setImage(imageUrl);
        return this;
    }
    setText(text) {
        let newText = (text) ? text : ' ';
        this.divText.dom.innerHTML = newText;
        return this;
    }
    attachSubMenu(onuiMenu) {
        if (onuiMenu.hasClass('Menu') === false) return this;
        onuiMenu.addClass('SlideDown');
        this.removeSubMenu();
        this.addClass('SubMenuItem');
        this.add(onuiMenu);
        this.subMenu = onuiMenu;
        return this;
    }
    hasSubMenu() {
        return this.hasClass('SubMenuItem');
    }
    removeSubMenu() {
        this.removeClass('SubMenuItem');
        const onuiMenu = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('Menu')) this.remove(child);
        }
        return onuiMenu;
    }
}

class Dropdown extends Button {
    constructor(innerHtml) {
        innerHtml = innerHtml ?? '&nbsp';
        super(innerHtml);
        const self = this;
        this.items = [];
        this.value = undefined;
        this.menuOffsetX = 0;
        this.menuOffsetY = 5;
        this.addClass('Dropdown');
        this.addClass('DropArrow');
        function onWheel(event) {
            event.preventDefault();
            let upOrDown = (event.deltaY < 0) ? -1.0 : 1.0;
            let currentValue = self.getValue();
            if (currentValue === undefined || currentValue === null) return;
            let currentSelectedItem = self.getItemByKey(currentValue);
            if (! currentSelectedItem) return;
            let currentIndex = self.items.indexOf(currentSelectedItem);
            if (currentIndex === -1) return;
            if (event.deltaY < 0) {
                if (currentIndex > 0) {
                    currentIndex -= 1;
                    self.setValue(self.items[currentIndex].value);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            } else {
                if (currentIndex < (self.items.length - 1)) {
                    currentIndex += 1;
                    self.setValue(self.items[currentIndex].value);
                    if (self.dom) self.dom.dispatchEvent(new Event('change'));
                }
            }
        }
        this.dom.addEventListener('wheel', onWheel, false);
    }
    getItemByKey(key) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value === key) return this.items[i];
        }
        return undefined;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        value = String(value);
        if (this.value !== value) {
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.value === value) {
                    for (let i = 0; i < this.items.length; i++) {
                        this.items[i].setChecked(false);
                    }
                    item.setChecked(true);
                    this.value = value;
                    if (this.dom) this.dom.innerHTML = item.dom.innerText;
                    return this;
                }
            }
        }
        return this;
    }
    setOptions(options) {
        if (this.detachMenu) this.detachMenu();
        this.items.length = 0;
        for (const key in options) {
            let item = new MenuItem(options[key]);
            item.value = key;
            this.items.push(item);
            const self = this;
            item.onPointerDown(function() {
                self.setValue(item.value);
                if (self.dom) self.dom.dispatchEvent(new Event('change'));
            });
        }
        let menu = new Menu();
        for (let i = 0; i < this.items.length; i++) {
            menu.add(this.items[i]);
        }
        this.attachMenu(menu);
        menu.addClass('SelectMenu');
    }
}

const _changeEvent$1 = new Event('change', { 'bubbles': true, 'cancelable': true });
class NumberBox extends Element {
    constructor(number) {
        super(document.createElement('input'));
        const self = this;
        this.setClass('Number');
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
            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) { editor.redo(); } else { editor.undo(); }
                return;
            }
            switch (event.code) {
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
        this.dispose = function() {
            self.dom.removeEventListener('keydown', onKeyDown);
            self.dom.removeEventListener('keyup', onKeyUp);
            self.dom.removeEventListener('wheel', onWheel);
            self.dom.removeEventListener('change', onChange);
        };
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
        this.precision = precision;
        return this;
    }
    setStep(step) {
        this.step = step;
        return this;
    }
    setNudge(nudge) {
        this.nudge = nudge;
        return this;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
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
        this.dispose = function() {
            this.dom.removeEventListener('mousedown', onMouseDown);
            this.dom.removeEventListener('mousemove', onMouseMove);
            this.dom.removeEventListener('mouseup', onMouseUp);
            this.dom.removeEventListener('touchstart', onTouchStart);
            this.dom.removeEventListener('touchmove', onTouchMove);
            this.dom.removeEventListener('touchend', onTouchEnd);
            this.dom.removeEventListener('focus', onFocus);
            this.dom.removeEventListener('blur', onBlur);
        };
    }
}

const MAX_SLIDER_TICKS = 10;
const _changeEvent = new Event('change', { 'bubbles': true, 'cancelable': true });
class Slider extends Div {
    constructor(number = 0, min = 0, max = 100) {
        super();
        const self = this;
        this.setClass('SlideContainer');
        this.precision = 2;
        const slider = new Element(document.createElement('input')).addClass('Slider');
        slider.dom.type = 'range';
        slider.dom.value = number;
        slider.dom.min = min;
        slider.dom.max = max;
        const ticks = new Div(' ').addClass('TickMarks');
        this.slider = slider;
        this.ticks = ticks;
        this.add(ticks, slider);
        function sliderInput() {
            if (! slider.dom) return;
            const val = slider.dom.value;
            const min = slider.dom.min;
            const max = slider.dom.max;
            slider.dom.style.setProperty('--middle', `${parseFloat((val - min) / (max - min))}`);
        }
        function sliderWheel(event) {
            if (! slider.dom) return;
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
        slider.dom.addEventListener('input', sliderInput);
        slider.dom.addEventListener('wheel', sliderWheel);
        this.dispose = function() {
            slider.dom.addEventListener('input', sliderInput);
            slider.dom.removeEventListener('wheel', sliderWheel);
        };
    }
    getValue() {
        if (! this.slider.dom) return null;
        return parseFloat(this.slider.dom.value);
    }
    setValue(value) {
        if (! this.slider.dom) return this;
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
        const val = this.slider.dom.value;
        const min = this.slider.dom.min;
        const max = this.slider.dom.max;
        this.slider.dom.style.setProperty('--middle', `${parseFloat((val - min) / (max - min))}`);
        return this;
    }
    setPrecision(precision) {
        this.precision = precision;
        return this;
    }
    setRange(min, max) {
        if (! this.slider.dom) return this;
        this.slider.dom.min = min;
        this.slider.dom.max = max;
        this.setTicks();
        return this;
    }
    setStep(step) {
        if (! this.slider.dom) return this;
        this.slider.dom.step = step;
        this.setTicks();
        return this;
    }
    setTicks() {
        if (! this.slider.dom) return this;
        const ticks = this.ticks;
        const min = this.slider.dom.min;
        const max = this.slider.dom.max;
        const step = this.slider.dom.step;
        if (step !== 'any' && isFinite(min) && isFinite(max)) {
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
        this.setClass('TextArea');
        this.dom.spellcheck = false;
        this.dom.setAttribute('autocomplete', 'off');
        this.dom.addEventListener('keydown', function(event) {
            event.stopPropagation();
            if (event.keyCode === 9) {
                event.preventDefault();
                const cursor = this.selectionStart;
                this.value = this.value.substring(0, cursor) + '\t' + this.value.substring(cursor);
                this.selectionStart = cursor + 1;
                this.selectionEnd = this.selectionStart;
            }
        }, false);
    }
    getValue() {
        if (! this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (! this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

class TextBox extends Element {
    constructor(text) {
        super(document.createElement('input'));
        this.setClass('Input');
        this.dom.type = 'text';
        this.dom.setAttribute('autocomplete', 'off');
        this.dom.setAttribute('spellcheck', 'false');
        this.dom.addEventListener('keydown', function(event) {
            event.stopPropagation();
            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                if (event.shiftKey) { editor.redo(); } else { editor.undo(); }
                return;
            }
        }, false);
        this.dom.addEventListener('keyup', function(event) { event.stopPropagation(); }, false);
        this.setValue(text);
    }
    getValue() {
        if (! this.dom) return null;
        return this.dom.value;
    }
    setValue(value) {
        if (! this.dom) return this;
        this.dom.value = value;
        return this;
    }
}

class AbsoluteBox extends Div {
    constructor() {
        super();
        this.setClass('AbsoluteBox');
    }
}

class ShadowBox extends Div {
    constructor() {
        super();
        this.setClass('ShadowBox');
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            let argument = args[i];
            if (argument !== undefined && argument.isElement === true) {
                this.add(argument);
            } else {
                this.add(new VectorBox(argument));
            }
        }
    }
    noShadow() {
        this.addClass('NoShadow');
        return this;
    }
}

class AssetBox extends Div {
    constructor(title = '', isMini = true) {
        super();
        this.setClass('AssetBox');
        this.dom.tabIndex = 0;
        if (isMini) {
            this.addClass('MiniAssetBox');
        } else {
        }
        if (title !== '') this.dom.setAttribute('tooltip', title);
        if (! ((typeof title === 'string' || title instanceof String) && title !== '')) {
            title = 'Unknown';
        }
        this.setName(title.toLowerCase());
        const assetImageHolder = new ShadowBox();
        assetImageHolder.dom.draggable = true;
        this.add(assetImageHolder);
        this.contents = function() { return assetImageHolder };
    }
}

class FlexBreak extends Div {
    constructor() {
        super();
        this.setStyle('flexBasis', '100%');
        this.setStyle('flexGrow', '1');
        this.setStyle('height', '0');
    }
}

const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};
const CLOSE_SIDES = {
    NONE:       'none',
    LEFT:		'left',
    RIGHT:		'right',
};
class Panel extends Div {
    constructor(style = PANEL_STYLES.NONE) {
        super();
        this.setPointerEvents('auto');
        this.setClass('Panel');
        this.contents = function() { return this; };
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('SimplePanel');
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('FancyPanel');
            const outerBox =  new Panel().setClass('FancyPanelOuter');
            const borderBox = new Panel().setClass('FancyPanelBorder');
            const insideBox = new Panel().setClass('FancyPanelInside');
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);
            this.contents = function() { return insideBox; };
        }
        this.dom.addEventListener('contextmenu', function(event) { event.preventDefault(); });
    }
    makeClosable(closeSide = CLOSE_SIDES.LEFT, sizeScale = 1.1, offsetScale = 1.0) {
        const self = this;
        function opacityTransparent() {
            if (! self.closeButton) return;
            self.closeButton.setStyle('opacity', '0');
        }
        function opacityGhost() {
            if (! self.closeButton || ! self.closeImageBox) return;
            self.closeButton.setStyle('opacity', '1.0');
            self.closeImageBox.setStyle('filter', 'var(--drop-shadow) brightness(100%)');
        }
        function opacityOpaque() {
            if (! self.closeButton || ! self.closeImageBox) return;
            self.closeButton.setStyle('opacity', '1.0');
            self.closeImageBox.setStyle('filter', 'var(--drop-shadow) brightness(125%)');
        }
        function clickedClose() {
            self.setDisplay('none');
            self.dom.dispatchEvent(new Event('closed'));
        }
        if (closeSide === CLOSE_SIDES.LEFT || closeSide === CLOSE_SIDES.RIGHT) {
            this.closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow();
            this.closeImageBox.setStyle(
                'width', '105%',
                'height', '105%',
                'transition', 'filter var(--menu-timing) ease-in-out',
            );
            this.closeButton = new Button();
            this.closeButton.dom.setAttribute('tooltip', 'Close Panel');
            this.closeButton.add(self.closeImageBox);
            this.closeButton.setStyle(
                'background', 'rgb(var(--background-dark))',
                'box-shadow', 'none',
                'border', 'none',
                'border-radius', '100%',
                'outline', 'none',
                'min-height', `${sizeScale}em`,
                'min-width', `${sizeScale}em`,
                'position', 'absolute',
                'opacity', '0',
                'overflow', 'visible',
                'transition', 'opacity var(--menu-timing) ease-in-out',
                'z-index', '1001',
            );
            if (closeSide === CLOSE_SIDES.RIGHT) {
                this.closeButton.setStyle('right', `${sizeScale * offsetScale * 0.1}em`);
                this.closeButton.setStyle('top', `${sizeScale * offsetScale * 0.1}em`);
            } else {
                this.closeButton.setStyle('left', `${sizeScale * offsetScale * 0.1}em`);
                this.closeButton.setStyle('top', `${sizeScale * offsetScale * 0.1}em`);
            }
            this.closeButton.dom.addEventListener('pointerenter', opacityOpaque);
            this.closeButton.dom.addEventListener('pointerleave', opacityGhost);
            this.closeButton.dom.addEventListener('click', clickedClose);
            this.dom.addEventListener('pointerenter', opacityGhost);
            this.dom.addEventListener('pointerleave', opacityTransparent);
            this.dom.appendChild(this.closeButton.dom);
            return;
        } else if (closeSide === CLOSE_SIDES.NONE) {
            if (! this.closeButton) return;
            this.closeButton.dom.removeEventListener('pointerenter', opacityOpaque);
            this.closeButton.dom.removeEventListener('pointerleave', opacityGhost);
            this.closeButton.dom.removeEventListener('click', clickedClose);
            this.dom.removeEventListener('pointerenter', opacityGhost);
            this.dom.removeEventListener('pointerleave', opacityTransparent);
            this.remove(this.closeButton);
            this.closeButton = undefined;
            this.closeImageBox = undefined;
            return;
        }
    }
}

const RESIZERS = {
    TOP:            'Top',
    BOTTOM:     	'Bottom',
    LEFT:       	'Left',
    RIGHT:			'Right',
    TOP_LEFT:		'TopLeft',
    TOP_RIGHT:		'TopRight',
    BOTTOM_LEFT:	'BottomLeft',
    BOTTOM_RIGHT:	'BottomRight',
};
class Resizeable extends Panel {
    constructor(style) {
        super(style);
        const self = this;
        this.addClass('Resizeable');
        this.wantsWidth = 0;
        this.resizer = {};
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            this.resizer[resizerName] = new Div().addClass('Resizer').addClass(className);
            this.add(this.resizer[resizerName]);
        }
        this.setXSizes();
        this.setYSizes();
    }
    changeWidth(width) {
        if (width !== null && width !== undefined && Number.isNaN(width) === false) {
            width = Math.min(Math.max(width, this.minWidth), this.maxWidth).toFixed(1);
            this.setWidth(Css.toEm(width));
        }
    }
    changeHeight(height) {
        if (height !== null && height !== undefined && Number.isNaN(height) === false) {
            height = Math.min(Math.max(height, this.minHeight), this.maxHeight).toFixed(1);
            this.setHeight(Css.toEm(height));
        }
    }
    setXSizes(start = null, min = 0, max = Infinity) {
        this.minWidth = min;
        this.maxWidth = max;
        this.defaultWidth = start;
    }
    setYSizes(start = null, min = 0, max = Infinity) {
        this.minHeight = min;
        this.maxHeight = max;
        this.defaultHeight = start;
    }
    toggleResize(position, enabled) {
        function onPointerDown(event) {
            if (event.isPrimary === false) return;
            this.downX = event.clientX;
            this.downY = event.clientY;
            this.downW = this.parent.getWidth();
            this.downH = this.parent.getHeight();
            this.dom.ownerDocument.addEventListener('pointermove', this._onPointerMove, false);
            this.dom.ownerDocument.addEventListener('pointerup', this._onPointerUp, false);
        }
        function onPointerUp(event) {
            if (event.isPrimary === false) return;
            this.dom.ownerDocument.removeEventListener('pointermove', this._onPointerMove);
            this.dom.ownerDocument.removeEventListener('pointerup', this._onPointerUp);
        }
        function onPointerMove(event) {
            if (event.isPrimary === false) return;
            let newWidth = this.downW;
            let newHeight = this.downH;
            let diffX = event.clientX - this.downX;
            let diffY = event.clientY - this.downY;
            if (this.hasClassWithString('Left')) newWidth = this.downW - diffX;
            if (this.hasClassWithString('Right')) newWidth = this.downW + diffX;
            if (this.hasClassWithString('Top')) newHeight = this.downH - diffY;
            if (this.hasClassWithString('Bottom')) newHeight = this.downH + diffY;
            if (newWidth < this.parent.minWidth * Css.guiScale()) newWidth = this.parent.minWidth * Css.guiScale();
            if (newWidth > this.parent.maxWidth * Css.guiScale()) newWidth = this.parent.maxWidth * Css.guiScale();
            if (newHeight < this.parent.minHeight * Css.guiScale()) newHeight = this.parent.minHeight * Css.guiScale();
            if (newHeight > this.parent.maxHeight * Css.guiScale()) newHeight = this.parent.maxHeight * Css.guiScale();
            if (this.downW !== newWidth) this.parent.changeWidth(newWidth);
            if (window.signals) signals.windowResize.dispatch();
        }
        let resizer = this.resizer[position];
        if (enabled && resizer.resizeEnabled !== true) {
            if (resizer._onPointerDown === undefined) resizer._onPointerDown = onPointerDown.bind(resizer);
            if (resizer._onPointerMove === undefined) resizer._onPointerMove = onPointerMove.bind(resizer);
            if (resizer._onPointerUp === undefined) resizer._onPointerUp = onPointerUp.bind(resizer);
            resizer.dom.addEventListener('pointerdown', resizer._onPointerDown, false);
            resizer.setPointerEvents('auto');
        } else if (! enabled && resizer.resizeEnabled === true) {
            resizer.dom.removeEventListener('pointerdown', resizer._onPointerDown);
            resizer.setPointerEvents('none');
        }
        resizer.resizeEnabled = enabled;
        return this;
    }
}

const TAB_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
};
class Tabbed extends Resizeable {
    constructor(style, tabSide = TAB_SIDES.RIGHT) {
        super(style);
        const self = this;
        this.setName('Tabbed');
        this.addClass('Tabbed');
        this.tabs = [];
        this.panels = [];
        this.selectedId = '';
        this.selectedCount = 0;
        this.tabsDiv = new Div().setClass('Tabs').setDisplay('none');
        this.panelsDiv = new Div().setClass('TabPanels');
        this.add(this.tabsDiv);
        this.add(this.panelsDiv);
        this.setTabSide(tabSide);
        this.addTab = function(id, items, icon, bgColor = undefined) {
            let numTabsWithId = 0;
            for (let i = 0; i < self.tabs.length; i++) {
                const tab = self.tabs[i];
                if (tab.dom.id === id) numTabsWithId++;
            }
            function capitalize(string) {
                const words = String(string).split(' ');
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
                }
                return words.join(' ');
            }
            const label = capitalize(id);
            const tab = new TabButton(self, label, icon, bgColor);
            tab.setId(id);
            tab.count = numTabsWithId;
            self.tabs.push(tab);
            self.tabsDiv.add(tab);
            if (self.tabs.length > 0) self.tabsDiv.setDisplay('');
            const panel = new Panel().setId(id).addClass('Titled').addClass('Hidden').add(items);
            panel.count = numTabsWithId;
            self.panels.push(panel);
            self.panelsDiv.add(panel);
            self.setContentsStyle('minHeight', '');
            if (self.tabsDiv.hasClass('LeftSide') || self.tabsDiv.hasClass('RightSide')) {
                self.setContentsStyle('minHeight', ((2.2 * self.tabs.length) + 0.4) + 'em');
            }
            return tab;
        };
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
        if (wasClicked !== true) {
            Css.setVariable('--tab-timing', '0');
        }
        let tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        let panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            let currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            let currentPanel = this.panels.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            if (currentTab) currentTab.removeClass('Selected');
            if (currentPanel) currentPanel.addClass('Hidden');
            tab.addClass('Selected');
            panel.removeClass('Hidden');
            this.selectedId = id;
            this.selectedCount = count;
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = id;
                this.dom.dispatchEvent(tabChange);
            }
            if (wasClicked !== true) {
                setTimeout(() => { Css.setVariable('--tab-timing', '200ms'); }, 50);
            };
            return true;
        }
        return false;
    }
    clearTabs() {
        if (this.tabsDiv) this.tabsDiv.clear();
        if (this.panelsDiv) this.panelsDiv.clear();
        if (this.tabs) {
            for (let i = 0; i < this.tabs.length; i++) this.tabs[i].clear();
            this.tabs.length = 0;
        }
        if (this.panels) {
            for (let i = 0; i < this.panels.length; i++) this.panels[i].clear();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }
    currentId() {
        return this.selectedId;
    }
    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('LeftSide');
        this.tabsDiv.removeClass('RightSide');
        if (side === TAB_SIDES.RIGHT) {
            this.tabsDiv.addClass('RightSide');
        } else {
            this.tabsDiv.addClass('LeftSide');
        }
    }
    tabIndex(id) {
        return this.tabs.indexOf(id);
    }
}
class TabButton extends Div {
    constructor(parent, label, icon, bgColor = undefined) {
        super();
        const self = this;
        this.setClass('Tab');
        this.setCursor('default');
        this.iconVector = new VectorBox(icon);
        this.iconBorder = new Div().setClass('TabIcon');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) {
            self.iconBorder.dom.setAttribute('tooltip', label);
        };
        this.setLabel(label);
        if (bgColor !== undefined && bgColor !== null) {
            let m, r, g, b;
            if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(bgColor)) {
                let color;
                const name = m[1];
                const components = m[2];
                switch (name) {
                    case 'rgb':
                    case 'rgba':
                        if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                            r = Math.min(255, parseInt(color[1], 10));
                            g = Math.min(255, parseInt(color[2], 10));
                            b = Math.min(255, parseInt(color[3], 10));
                        }
                        if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                            r = (Math.min(100, parseInt(color[1], 10)) / 100);
                            g = (Math.min(100, parseInt(color[2], 10)) / 100);
                            b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        }
                        break;
                }
            } else if (m = /^\#([A-Fa-f\d]+)$/.exec(bgColor)) {
                const hex = m[1];
                const size = hex.length;
                if (size === 3) {
                    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                } else if (size === 6) {
                    r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                    g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                    b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                }
            } else {
                const hexColor = Math.min(Math.max(Math.floor(bgColor), 0), 0xffffff);
                r = (hexColor & 0xff0000) >> 16;
                g = (hexColor & 0x00ff00) >> 8;
                b = (hexColor & 0x0000ff);
            }
            const rDark = parseInt(r * 0.75);
            const gDark = parseInt(g * 0.75);
            const bDark = parseInt(b * 0.75);
            const light = `rgb(${r}, ${g}, ${b})`;
            const dark = `rgb(${rDark}, ${gDark}, ${bDark})`;
            const bgImage = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', bgImage);
        }
        this.dom.addEventListener('click', function() {
            parent.selectTab(self.dom.id, self.count, true);
            if (window.signals) signals.windowResize.dispatch();
        });
    }
}

const CORNERS = {
    TOP_LEFT:       'TopLeft',
    TOP_RIGHT:      'TopRight',
    BOTTOM_LEFT:    'BottomLeft',
    BOTTOM_RIGHT:   'BottomRight',
};
class Docker extends Div {
    constructor() {
        super();
        const cornerDivs = {};
        let zIndex = 1;
        for (let key in CORNERS) {
            const cornerName = CORNERS[key];
            const className = `Docker${cornerName}`;
            const corner = new Div().addClass('DockerCorner').addClass(className);
            corner.setStyle('zIndex', `${zIndex}`);
            zIndex++;
            let clickedOnCorner = false;
            corner.dom.addEventListener('pointerdown', event => clickedOnCorner = true);
            corner.dom.addEventListener('pointerup', function(event) {
                if (clickedOnCorner) {
                    for (let cornerDiv in cornerDivs) {
                        const style = getComputedStyle(cornerDivs[cornerDiv].dom);
                        let computedZ = style.getPropertyValue('z-index');
                        if (computedZ > 1) computedZ--;
                        cornerDivs[cornerDiv].setStyle('zIndex', `${computedZ}`);
                    };
                    corner.setStyle('zIndex', `${Object.keys(cornerDivs).length}`);
                }
                clickedOnCorner = false;
            });
            cornerDivs[cornerName] = corner;
            this.add(corner);
        }
        function windowResizeCallback() {
            let bottomLeftHeight = 0;
            for (let i = 0; i < cornerDivs[CORNERS.BOTTOM_LEFT].children.length; i++) {
                bottomLeftHeight += cornerDivs[CORNERS.BOTTOM_LEFT].children[i].getHeight();
            }
            let newHeightEm = parseFloat(Css.toEm(bottomLeftHeight)) - 0.175;
            cornerDivs[CORNERS.TOP_LEFT].setStyle('bottom', `${newHeightEm}em`);
        }
        signals.windowResize.add(windowResizeCallback);
        this.dispose = () => { signals.windowResize.remove(windowResizeCallback); };
        this.addDock = function(onuiElement, cornerName = CORNERS.TOP_LEFT) {
            cornerDivs[cornerName].add(onuiElement);
            if (onuiElement.isElement && onuiElement.hasClass('Tabbed')) {
                if (cornerName.includes('Right')) onuiElement.setTabSide(TAB_SIDES.LEFT);
                if (cornerName.includes('Left')) onuiElement.setTabSide(TAB_SIDES.RIGHT);
            }
            if (onuiElement.isElement && onuiElement.hasClass('Resizeable')) {
                onuiElement.toggleResize(RESIZERS.LEFT, cornerName.includes('Right'));
                onuiElement.toggleResize(RESIZERS.RIGHT, cornerName.includes('Left'));
                onuiElement.toggleResize(RESIZERS.TOP_LEFT, cornerName.includes('BottomRight'));
                onuiElement.toggleResize(RESIZERS.TOP_RIGHT, cornerName.includes('BottomLeft'));
                onuiElement.toggleResize(RESIZERS.BOTTOM_RIGHT, cornerName.includes('TopLeft'));
                onuiElement.toggleResize(RESIZERS.BOTTOM_LEFT, cornerName.includes('TopRight'));
            }
        };
    }
}

class FlexBox extends Element {
    constructor() {
        super(document.createElement('div'));
        this.addClass('FlexBox');
    }
}

class FlexSpacer extends Span {
    constructor() {
        super();
        this.setFlex('1 1 auto');
        this.setStyle('minHeight', '0.01em');
    }
}

class MenuSeparator extends Div {
    constructor() {
    super();
        this.setClass('MenuSeparator');
    }
}

class ToolbarButton extends Button {
    constructor(innerHtml, position ) {
        super(innerHtml);
        this.addClass('ToolbarButton');
        switch (position) {
            case 'left': this.addClass('ButtonLeft'); break;
            case 'middle': this.addClass('ButtonMiddle'); break;
            case 'right': this.addClass('ButtonRight'); break;
        }
        const buttonImageHolder = new ShadowBox();
        this.add(buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
    }
}

class ToolbarSeparator extends Element {
    constructor() {
        super(document.createElement('div'));
        this.setClass('ToolbarSeparator');
    }
}

class Draggable extends Panel {
    constructor(style) {
        super(style);
        this.addClass('Draggable');
        this.makeClosable(CLOSE_SIDES.RIGHT, 1.3 , -1.9 );
    }
}

class Shrinkable extends Panel {
    constructor(text = '', icon = '') {
        super();
        const self = this;
        this.addClass('Shrinkable');
        this.titleDiv = undefined;
        this.bodyDiv = undefined;
        const iconHolder = new Span().setClass('ShrinkIcon').add(new VectorBox(icon));
        const textHolder = new Span().setClass('ShrinkText').setInnerHtml(text);
        const title = new Div().setClass('ShrinkTitle');
        title.add(iconHolder, textHolder, new Span().setClass('ShrinkArrow'));
        const body = new Div().setClass('ShrinkBody');
        this.add(title, body);
        this.titleDiv = title;
        this.bodyDiv = body;
        this.contents = function() { return self.bodyDiv };
        this.setExpanded(true);
        title.dom.addEventListener('click', function() {
            self.toggle();
        });
    }
    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('Expanded');
        } else {
            this.removeClass('Expanded');
        }
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
        this.setExpanded(! this.isExpanded);
    }
}

class Titled extends Div {
    constructor(title) {
        super();
        this.addClass('Titled');
        this.tabTitle = new Div(title).addClass('TabTitle');
        if (title && title !== '') this.add(this.tabTitle);
        this.scroller = new Div().addClass('Scroller');
        this.add(this.scroller);
        this.contents = function() { return this.scroller; };
    }
}

export { ALIGN, AbsoluteBox, AssetBox, Break, Button, CLOSE_SIDES, CORNERS, Checkbox, Color, Css, Div, Docker, Draggable, Dropdown, Element, FlexBox, FlexBreak, FlexSpacer, Html, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, Image, Menu, MenuItem, MenuSeparator, MenuShortcut, NumberBox, NumberScroll, OVERFLOW, PANEL_STYLES, POSITION, PROPERTY_SIZE, Panel, Popper, PropertyList, RESIZERS, Resizeable, Row, ShadowBox, Shrinkable, Slider, Span, TAB_SIDES, TOOLTIP_Y_OFFSET, Tabbed, Text, TextArea, TextBox, Titled, ToolbarButton, ToolbarSeparator, TreeList, VectorBox, tooltipper };
