/**
 * @description Osui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2023 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/osui
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
    destroy() {
        clearChildren(this, true );
        return this;
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
            if (! removed) removed = removeFromParent(this, element);
            if (! removed) console.log(`Element.removeFromParent: Could not remove child!`);
        }
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
function addToParent(parent, element) {
    if (! element) return;
    if (element.isElement) {
        parent.dom.appendChild(element.dom);
        let hasIt = false;
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                hasIt = true;
                break;
            }
        }
        if (! hasIt) parent.children.push(element);
        element.parent = parent;
    } else {
        try {
            parent.dom.appendChild(element);
        } catch (exception) {
        }
    }
}
function clearElementChildren(osui) {
    for (let i = 0; i < osui.children.length; i++) {
        const child = osui.children[i];
        clearChildren(child, true );
    }
    osui.children.length = 0;
}
function clearDomChildren(dom) {
    if (! dom.children) return;
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        clearChildren(child, true );
        try { dom.removeChild(child); } catch (e) {  }
    }
}
function clearChildren(element, destroy = true) {
    if (! element) return;
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
    if (! element) return;
    if (element.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                clearChildren(element);
                parent.children.splice(j, 1);
                element.parent = undefined;
                return true;
            }
        }
    }
    clearChildren(element);
    try {
        parent.dom.removeChild(element);
        return true;
    } catch (exception) {
    }
    return false;
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
        const eventHandler = callback.bind(this);
        const dom = this.dom;
        dom.addEventListener(eventName, eventHandler);
        dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler), { once: true });
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

class Span extends Element {
    constructor(innerHtml) {
        super(document.createElement('span'));
        this.setInnerHtml(innerHtml);
    }
}

class FlexSpacer extends Span {
    constructor() {
        super();
        this.setFlex('1 1 auto');
        this.setStyle('minHeight', '0.01em');
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
        function hideTooltip() {
            const hideEvent = new Event('hidetooltip', { bubbles: true });
            self.dom.dispatchEvent(hideEvent);
        }
        this.onPointerDown(hideTooltip);
        this.dom.addEventListener('destroy', function() {
            if (self.attachedMenu) self.detachMenu();
        }, { once: true });
    }
    attachMenu(osuiMenu) {
        const self = this;
        if (osuiMenu.hasClass('Menu') === false) return this;
        this.addClass('MenuButton');
        this.attachedMenu = osuiMenu;
        document.body.appendChild(osuiMenu.dom);
        this.dom.addEventListener('pointerdown', onPointerDown);
        const observer = new MutationObserver((mutations, observer) => {
            if (document.contains(this.dom)) {
                popMenu();
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
        window.addEventListener('resize', popMenu);
        function popMenu() {
            const popped = Popper.popUnder(
                osuiMenu.dom,
                self.dom,
                self.alignMenu,
                self.menuOffsetX,
                self.menuOffsetY,
                self.overflowMenu
            );
            if (popped === POSITION.UNDER) {
                osuiMenu.removeClass('SlideUp');
                osuiMenu.addClass('SlideDown');
            } else {
                osuiMenu.removeClass('SlideDown');
                osuiMenu.addClass('SlideUp');
            }
        }
        function onPointerDown(event) {
            if (self.hasClass('Selected') === false) {
                self.addClass('Selected');
                popMenu();
                if (self.dom) osuiMenu.showMenu(self.dom);
            }
        };
        this.detachMenu = function() {
            if (self.hasClass('MenuButton') === false) return;
            self.removeClass('MenuButton');
            window.removeEventListener('resize', popMenu);
            self.dom.removeEventListener('pointerdown', onPointerDown);
            self.attachedMenu.destroy();
            document.body.removeChild(self.attachedMenu.dom);
            self.attachedMenu = undefined;
        };
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
        function onContextMenu(event) {
            event.preventDefault();
        }
        this.onContextMenu(onContextMenu);
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
            this.addToSelf(this.closeButton);
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
        this.addClass('Resizeable');
        this.wantsWidth = 0;
        this.resizer = {};
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            this.resizer[resizerName] = new Div().addClass('Resizer').addClass(className);
            this.addToSelf(this.resizer[resizerName]);
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
            event.stopPropagation();
            event.preventDefault();
            this.downX = event.clientX;
            this.downY = event.clientY;
            this.downW = this.parent.getWidth();
            this.downH = this.parent.getHeight();
            this.dom.ownerDocument.addEventListener('pointermove', this._onPointerMove);
            this.dom.ownerDocument.addEventListener('pointerup', this._onPointerUp);
        }
        function onPointerUp(event) {
            if (event.isPrimary === false) return;
            event.stopPropagation();
            event.preventDefault();
            this.dom.ownerDocument.removeEventListener('pointermove', this._onPointerMove);
            this.dom.ownerDocument.removeEventListener('pointerup', this._onPointerUp);
        }
        function onPointerMove(event) {
            if (event.isPrimary === false) return;
            event.stopPropagation();
            event.preventDefault();
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
            resizer.dom.addEventListener('pointerdown', resizer._onPointerDown);
            resizer.setPointerEvents('auto');
        } else if (! enabled && resizer.resizeEnabled === true) {
            resizer.dom.removeEventListener('pointerdown', resizer._onPointerDown);
            resizer.setPointerEvents('none');
        }
        resizer.resizeEnabled = enabled;
        return this;
    }
}

class Shrinkable extends Panel {
    constructor(text = '', icon = '') {
        super();
        const self = this;
        this.addClass('Shrinkable');
        this.titleDiv = undefined;
        this.bodyDiv = undefined;
        const title = new Div().setClass('ShrinkTitle');
        if (icon !== '') {
            const iconHolder = new Span().setClass('ShrinkIcon').add(new VectorBox(icon));
            title.add(iconHolder);
        }
        const textHolder = new Span().setClass('ShrinkText').setInnerHtml(text);
        if (icon === '') textHolder.setStyle('padding-left', '0.15em');
        title.add(textHolder, new Span().setClass('ShrinkArrow'));
        const body = new Div().setClass('ShrinkBody');
        this.add(title, body);
        this.titleDiv = title;
        this.bodyDiv = body;
        this.contents = function() { return self.bodyDiv };
        this.setExpanded(true);
        function onClick() {
            self.toggle();
        }
        title.onClick(onClick);
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
    constructor(title, collapsible = false) {
        super();
        const self = this;
        this.addClass('Titled');
        this.addClass('Expanded');
        this.isExpanded = true;
        this.tabTitle = new Div(title).addClass('TabTitle');
        if (title && title !== '') this.add(this.tabTitle);
        if (collapsible) {
            this.tabTitle.setStyle('pointer-events', 'all');
            this.tabTitle.add(new Div().setClass('TitleArrow'));
            this.tabTitle.onClick(() => { self.toggle(); });
        }
        this.scroller = new Div().addClass('Scroller');
        this.add(this.scroller);
        this.contents = function() { return this.scroller; };
    }
    setExpanded(expand = true) {
        this.isExpanded = expand;
        if (expand) {
            this.addClass('Expanded');
            this.scroller.setDisplay('');
        } else {
            this.removeClass('Expanded');
            this.scroller.setDisplay('none');
        }
    }
    toggle() {
        this.setExpanded(! this.isExpanded);
    }
}

class Row extends Div {
    constructor() {
        super();
        this.addClass('Row');
    }
}

class Text extends Span {
    constructor(innerHtml) {
        super(innerHtml);
        this.setClass('Text');
        this.setCursor('default');
    }
}

const PROPERTY_SIZE = {
    HALF:	'half',
    FIFTHS: 'fifths',
    THIRD:	'third',
};
const LEFT_SPACING = {
    TABS:   'tabs',
    NORMAL: 'normal',
};
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
                console.error('PropertyList.createRight():', argument, 'is not an instance of Osui Element.');
            }
        }
        return rightRow;
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
        if (valueAsFloat === undefined || isNaN(valueAsFloat) || ! isFinite(valueAsFloat)) {
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
    setMin(min) {
        this.min = min;
        return this;
    }
    setMin(max) {
        this.max = max;
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
            const val = parseFloat(slider.dom.value);
            const min = parseFloat(slider.dom.min);
            const max = parseFloat(slider.dom.max);
            slider.dom.style.setProperty('--middle', `${((val - min) / (max - min))}`);
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
        slider.onInput(sliderInput);
        slider.onWheel(sliderWheel);
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
        if (! this.slider.dom) return this;
        this.slider.dom.min = min;
        this.setTicks();
        return this;
    }
    setMax(max) {
        if (! this.slider.dom) return this;
        this.slider.dom.max = max;
        this.setTicks();
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

class Gooey extends Resizeable {
    constructor(title) {
        super(PANEL_STYLES.FANCY);
        this.addClass('Gooey');
        this.toggleResize(RESIZERS.LEFT, true);
        this.minWidth = 180;
        const titlePanel = new Titled(title, true );
        this.add(titlePanel);
        this.contents = function() { return titlePanel.scroller; };
        document.body.appendChild(this.dom);
    }
    addFolder(folderName, icon = '') {
        const folder = new Folder(capitalize(folderName), icon);
        this.add(folder);
        return folder;
    }
}
class Folder extends Shrinkable {
    constructor(title, icon) {
        super(title, icon);
        this.props = new PropertyList(PROPERTY_SIZE.FIFTHS, LEFT_SPACING.NORMAL);
        this.add(this.props);
        this.add = function(params, variable, a, b, c, d) {
            const value = params[variable];
            if (value === undefined) {
                return null;
            } else if (typeof value === 'boolean') {
                return this.addBoolean(params, variable);
            } else if (typeof value === 'number') {
                return this.addNumber(params, variable, a, b, c, d);
            }
        };
    }
    addBoolean(params, variable) {
        const prop = new Property();
        const boolBox = new Checkbox();
        boolBox.setValue(params[variable]);
        boolBox.onChange(() => {
            params[variable] = boolBox.getValue();
            if (typeof prop.change === 'function') prop.change();
            if (typeof prop.finishChange === 'function') prop.finishChange();
        });
        const row = this.props.addRow(prettyTitle(variable), boolBox, new FlexSpacer());
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); };
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
            params[variable] = slider.getValue();
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
        slideBox.setStyle('marginLeft', '0.14286em');
        slider.setValue(params[variable]);
        slideBox.setValue(params[variable]);
        let digits = countDigits(parseInt(max)) + precision;
        if (precision > 0) digits += 0.5;
        slideBox.dom.style.setProperty('--min-width', `${digits + 1.5}ch`);
        function checkForMinMax() {
            if (Number.isFinite(Number(slider.slider.dom.min)) && Number.isFinite(Number(slider.slider.dom.max))) {
                slideBox.addClass('PropertyTinyRow');
                slider.setDisplay('');
            } else {
                slideBox.removeClass('PropertyTinyRow');
                slider.setDisplay('none');
            }
        }
        checkForMinMax();
        const row = this.props.addRow(prettyTitle(variable), slider, slideBox);
        prop.name = function(name) { row.leftWidget.setInnerHtml(name); };
        prop.min = function(min) { slider.setMin(min); slideBox.setMin(min); checkForMinMax(); };
        prop.max = function(max) { slider.setMax(max); slideBox.setMax(max); checkForMinMax(); };
        prop.step = function(step) { setStep(step); };
        prop.precision = function(precision) { slider.setPrecision(precision); slideBox.setPrecision(precision); };
        return prop;
    }
}
class Property {
    constructor() {
        this.name = function() {};
        this.change = null;
        this.finishChange = null;
        this.min = function() {};
        this.max = function() {};
        this.step = function() {};
        this.precision = function() {};
    }
    onChange(callback) {
        this.change = callback;
    }
    onFinishChange(callback) {
        this.finishChange = callback;
    }
}
function prettyTitle(string) {
    return addSpaces(capitalize(string));
}
function addSpaces(string) {
    return String(string).replace(/([A-Z])/g, ' $1').trim();
}
function capitalize(string) {
    const words = String(string).split(' ');
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
        this.onKeyDown(onKeyDown);
        this.onKeyUp(onKeyUp);
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
            div.addEventListener('destroy', function() {
                div.removeEventListener('pointerdown', onPointerDown);
                if (div.draggable === true) {
                    div.removeEventListener('drag', onDrag);
                    div.removeEventListener('dragstart', onDragStart);
                    div.removeEventListener('dragover', onDragOver);
                    div.removeEventListener('dragleave', onDragLeave);
                    div.removeEventListener('drop', onDrop);
                }
            }, { once: true });
        }
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
        function colorBoxPointerDown() {
            self.addClass('Selected');
        }
        function colorBoxInput() {
            colorBackground.setStyle('backgroundColor', colorBox.dom.value);
            self.dom.setAttribute('tooltip', colorBox.dom.value);
        }
        function colorBoxBlur() {
            self.removeClass('Selected');
        }
        colorBox.onPointerDown(colorBoxPointerDown);
        colorBox.onInput(colorBoxInput);
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
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
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
        this.clearContents();
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
        const self = this;
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
        function onContextMenu(event) {
            event.preventDefault();
        }
        this.onContextMenu(onContextMenu);
        this.onPointerEnter(() => {
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('Menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && parentMenu.closeMenu) parentMenu.closeMenu(false, self.dom);
            if (self.subMenu) self.subMenu.showMenu(self.dom);
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
    attachSubMenu(osuiMenu) {
        if (osuiMenu.hasClass('Menu') === false) return this;
        osuiMenu.addClass('SlideDown');
        this.removeSubMenu();
        this.addClass('SubMenuItem');
        this.add(osuiMenu);
        this.subMenu = osuiMenu;
        return this;
    }
    hasSubMenu() {
        return this.hasClass('SubMenuItem');
    }
    removeSubMenu() {
        this.removeClass('SubMenuItem');
        const osuiMenu = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('Menu')) this.remove(child);
        }
        return osuiMenu;
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
        this.onWheel(onWheel);
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

class TextArea extends Element {
    constructor() {
        super(document.createElement('textarea'));
        this.setClass('TextArea');
        this.dom.spellcheck = false;
        this.dom.setAttribute('autocomplete', 'off');
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.keyCode === 9) {
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
        this.setValue(text);
        function onKeyDown(event) {
            event.stopPropagation();
            if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
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
        const tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        const panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            const currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            const currentPanel = this.panels.find(function(item) {
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
        function onClick() {
            parent.selectTab(self.dom.id, self.count, true);
            if (window.signals) signals.windowResize.dispatch();
        }
        this.onClick(onClick);
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
        this.addDock = function(osuiElement, cornerName = CORNERS.TOP_LEFT) {
            cornerDivs[cornerName].add(osuiElement);
            if (osuiElement.isElement && osuiElement.hasClass('Tabbed')) {
                if (cornerName.includes('Right')) osuiElement.setTabSide(TAB_SIDES.LEFT);
                if (cornerName.includes('Left')) osuiElement.setTabSide(TAB_SIDES.RIGHT);
            }
            if (osuiElement.isElement && osuiElement.hasClass('Resizeable')) {
                osuiElement.toggleResize(RESIZERS.LEFT, cornerName.includes('Right'));
                osuiElement.toggleResize(RESIZERS.RIGHT, cornerName.includes('Left'));
            }
        };
        function windowResizeCallback() {
            let bottomLeftHeight = 0;
            for (let i = 0; i < cornerDivs[CORNERS.BOTTOM_LEFT].children.length; i++) {
                bottomLeftHeight += cornerDivs[CORNERS.BOTTOM_LEFT].children[i].getHeight();
            }
            let newHeightEm = parseFloat(Css.toEm(bottomLeftHeight)) - 0.175;
            cornerDivs[CORNERS.TOP_LEFT].setStyle('bottom', `${newHeightEm}em`);
        }
        signals.windowResize.add(windowResizeCallback);
        this.dom.addEventListener('destroy', function() {
            signals.windowResize.remove(windowResizeCallback);
        }, { once: true });
    }
}

class FlexBox extends Element {
    constructor() {
        super(document.createElement('div'));
        this.addClass('FlexBox');
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

var css_248z$8 = "/**\n *\t\tUnits\n *          px      Pixels\n *          %       Percentage relative to the parent element\n *          em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *          rem     Relative to the font-size of the root element\n *          ch      Relative to the width of the character '0' of the current font\n *          ex      Relative to the height of a lowercase letter ('x') of the current font\n *          cap     Relative to the height of a capital letter of the current font\n *          vw      Relative to 1% of the width of the viewport (browser window)\n *          vh      Relative to 1% of the width of the viewport (browser window)\n *          vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *          vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:             0,   0,   0;\n    --darklight:         16,  16,  16;\n    --background-dark:   24,  24,  24;\n    --background-light:  32,  32,  32;\n    --button-dark:       40,  40,  40;\n    --button-light:      60,  60,  60;\n    --midlight:          85,  85,  85;\n    --text-dark:        100, 100, 100;\n    --text:             190, 190, 190;\n    --text-light:       225, 225, 225;\n    --highlight:        255, 255, 255;\n    --icon-dark:          0,  90,  87;          /* #005A57 icon darkened            dark classic aqua */\n    --icon:               0, 180, 175;          /* #00B4AF icon color               classic aqua */\n    --icon-light:        90, 255, 250;          /* #5AFFFA icon brightened          light clasic aqua */\n    --complement:       255, 113,   0;          /* #FF7100 icon shifted 180°        orange */\n    --triadic1:         216,   0, 127;          /* #D8007F icon shifted 120°        pink */\n    --triadic2:         165, 243,   0;          /* #A5F300 complement shifted 120°  lime green */\n    --triadic3:         113,  25, 185;          /* #7119B9 icon shifted 90°         purple */\n    --triadic4:         255, 253,  84;          /* #FFFD54 complement shifted 90°   yellow */\n    --triadic5:         232,  51,  37;          /* #E83325 icon shifted 150°        red */\n    --triadic6:         100, 216,  64;          /* #64D840 complement shifted 150°  green */\n\n    /* Basic Colors */\n    --white:            255, 255, 255;\n    --gray:             128, 128, 128;\n    --black:              0,   0,   0;\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Changes to represent how many degrees new icon color is from Aqua */\n\n    /* Panel Transparency */\n    --panel-transparency:   1.0;\n\n    /* Styles */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px)\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n    --font-size:\t\t\t14px;               /* Current font size, set initially from Config.js */\n    --font-size-larger:\t\tcalc(var(--font-size) + ((var(--font-size)) * 0.2));\n\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --negative:            -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --edge-thickness:       0.35714em;          /*  5px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n    --border-size:          0.21429em;          /*  3px @ font size 1.4em (14px) */\n    --border-radius-micro:  0.21429em;          /*  3px @ font size 1.4em (14px) */\n    --border-radius-small:  0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --border-radius-inner:  0.42857em;          /*  6px @ font size 1.4em (14px) */\n    --border-radius-outer:\t0.71429em;          /* 10px @ font size 1.4em (14px) */\n\n    --box-radius:           0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n    --pad-x-large:          1.00000em;          /* 14px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-width:          3.2em;\n    --asset-height:         3.2em;\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.00000em;          /* 14px, panel resizer thickness */\n    --ticksHeight:          20%;                /* Slider tick height */\n\n    --menu-timing:          0.2s;               /* ..in seconds */\n    --menu-size:            1.0em;              /* 140px (10.0 * 10px * 1.4) @ font size 1.4em / 14px */\n    --menu-icon-size:       1.5em;              /* og: 1.3em */\n    --tab-timing:           200ms;              /* */\n    --tab-size:             2.5em;              /* */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows */\n    --pop-out-shadow:       inset 0 0.07143em 0.14286em 0 rgba(var(--midlight), 0.75);\n    --sunk-in-shadow:       inset 0 0.07143em 0.14286em 0 rgba(var(--shadow), 0.75);\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20, 20, 20, 1.0));\n\n}\n";
var stylesheet$8="/**\n *\t\tUnits\n *          px      Pixels\n *          %       Percentage relative to the parent element\n *          em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *          rem     Relative to the font-size of the root element\n *          ch      Relative to the width of the character '0' of the current font\n *          ex      Relative to the height of a lowercase letter ('x') of the current font\n *          cap     Relative to the height of a capital letter of the current font\n *          vw      Relative to 1% of the width of the viewport (browser window)\n *          vh      Relative to 1% of the width of the viewport (browser window)\n *          vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *          vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:             0,   0,   0;\n    --darklight:         16,  16,  16;\n    --background-dark:   24,  24,  24;\n    --background-light:  32,  32,  32;\n    --button-dark:       40,  40,  40;\n    --button-light:      60,  60,  60;\n    --midlight:          85,  85,  85;\n    --text-dark:        100, 100, 100;\n    --text:             190, 190, 190;\n    --text-light:       225, 225, 225;\n    --highlight:        255, 255, 255;\n    --icon-dark:          0,  90,  87;          /* #005A57 icon darkened            dark classic aqua */\n    --icon:               0, 180, 175;          /* #00B4AF icon color               classic aqua */\n    --icon-light:        90, 255, 250;          /* #5AFFFA icon brightened          light clasic aqua */\n    --complement:       255, 113,   0;          /* #FF7100 icon shifted 180°        orange */\n    --triadic1:         216,   0, 127;          /* #D8007F icon shifted 120°        pink */\n    --triadic2:         165, 243,   0;          /* #A5F300 complement shifted 120°  lime green */\n    --triadic3:         113,  25, 185;          /* #7119B9 icon shifted 90°         purple */\n    --triadic4:         255, 253,  84;          /* #FFFD54 complement shifted 90°   yellow */\n    --triadic5:         232,  51,  37;          /* #E83325 icon shifted 150°        red */\n    --triadic6:         100, 216,  64;          /* #64D840 complement shifted 150°  green */\n\n    /* Basic Colors */\n    --white:            255, 255, 255;\n    --gray:             128, 128, 128;\n    --black:              0,   0,   0;\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Changes to represent how many degrees new icon color is from Aqua */\n\n    /* Panel Transparency */\n    --panel-transparency:   1.0;\n\n    /* Styles */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px)\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n    --font-size:\t\t\t14px;               /* Current font size, set initially from Config.js */\n    --font-size-larger:\t\tcalc(var(--font-size) + ((var(--font-size)) * 0.2));\n\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --negative:            -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --edge-thickness:       0.35714em;          /*  5px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n    --border-size:          0.21429em;          /*  3px @ font size 1.4em (14px) */\n    --border-radius-micro:  0.21429em;          /*  3px @ font size 1.4em (14px) */\n    --border-radius-small:  0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --border-radius-inner:  0.42857em;          /*  6px @ font size 1.4em (14px) */\n    --border-radius-outer:\t0.71429em;          /* 10px @ font size 1.4em (14px) */\n\n    --box-radius:           0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n    --pad-x-large:          1.00000em;          /* 14px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-width:          3.2em;\n    --asset-height:         3.2em;\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.00000em;          /* 14px, panel resizer thickness */\n    --ticksHeight:          20%;                /* Slider tick height */\n\n    --menu-timing:          0.2s;               /* ..in seconds */\n    --menu-size:            1.0em;              /* 140px (10.0 * 10px * 1.4) @ font size 1.4em / 14px */\n    --menu-icon-size:       1.5em;              /* og: 1.3em */\n    --tab-timing:           200ms;              /* */\n    --tab-size:             2.5em;              /* */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows */\n    --pop-out-shadow:       inset 0 0.07143em 0.14286em 0 rgba(var(--midlight), 0.75);\n    --sunk-in-shadow:       inset 0 0.07143em 0.14286em 0 rgba(var(--shadow), 0.75);\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20, 20, 20, 1.0));\n\n}\n";
styleInject(css_248z$8);

var css_248z$7 = "/***** Base Elements *****/\n\n* {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    /* Disable user select */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgba(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.Text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/***** Scrollbars *****/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/***** SVG Rendering *****/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n\n/***** Special *****/\n\n/**\n * CLASS: .Disabled\n *      Grayscale filter for disabled items\n */\n.Disabled {\n    filter: contrast(75%) grayscale(100%);\n    opacity: 0.7;\n    pointer-events: none;\n}\n\n/**\n * CLASS: .Unselectable\n *      Element becomes Unselectable\n */\n.Unselectable {\n    -moz-user-select: -moz-none;\n       -khtml-user-select: none;\n       -webkit-user-select: none;\n       -ms-user-select: none;\n    user-select: none;\n}\n";
var stylesheet$7="/***** Base Elements *****/\n\n* {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    /* Disable user select */\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgba(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.Text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/***** Scrollbars *****/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/***** SVG Rendering *****/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n\n/***** Special *****/\n\n/**\n * CLASS: .Disabled\n *      Grayscale filter for disabled items\n */\n.Disabled {\n    filter: contrast(75%) grayscale(100%);\n    opacity: 0.7;\n    pointer-events: none;\n}\n\n/**\n * CLASS: .Unselectable\n *      Element becomes Unselectable\n */\n.Unselectable {\n    -moz-user-select: -moz-none;\n       -khtml-user-select: none;\n       -webkit-user-select: none;\n       -ms-user-select: none;\n    user-select: none;\n}\n";
styleInject(css_248z$7);

var css_248z$6 = "/***** ELEMENT: Input (number, text, etc) *****/\n\ninput {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.25);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--box-radius);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n}\n\ninput:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\ninput:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\ninput.YesDrop {\n    color: rgb(0, 255, 0);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(0, 255, 0);\n    outline: var(--border-micro) solid rgb(0, 255, 0);\n    border-radius: 0;\n}\n\ninput.NoDrop {\n    color: red;\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid red;\n    outline: var(--border-micro) solid red;\n    border-radius: 0;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/** Hide Arrow Spinners - Firefox */\ninput[type=number] {\n    -moz-appearance: textfield;\n}\n\n/***** ELEMENT: Button *****/\n\nbutton {\n    display: flex;\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--box-radius);\n    outline: var(--border-small) solid rgba(var(--darklight), 0.0);\n\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5)),\n        linear-gradient(to bottom, rgba(var(--button-dark), 0.75), rgba(var(--button-dark), 0.75));\n\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\nbutton:not(.Selected):enabled:hover {\n    color: rgba(var(--highlight), 1);\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7)),\n        linear-gradient(to bottom, rgba(var(--highlight), 0.1), rgba(var(--highlight), 0.1));\n}\n\nbutton:not(.Selected):enabled:active {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: var(--sunk-in-shadow);\n}\n\nbutton.Selected {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    box-shadow: var(--sunk-in-shadow);\n}\n\nbutton:disabled {\n    pointer-events: none;\n}\n\nbutton:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.BorderlessButton {\n    border: none;\n    border-radius: var(--box-radius);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.6em;\n    min-width: 1.75em;\n}\n\n.BorderlessButton:not(.Selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--negative) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.BorderlessButton:not(.Selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--negative) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/***** ELEMENT: Input.Checkbox *****/\n\n/* Container */\n.Checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.CheckboxInput {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.CheckboxButton {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform 0.25s;\n}\n\n/* Visible Background: Checked */\n.CheckboxInput:checked + .CheckboxButton {\n    background-color: transparent;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7)),\n        linear-gradient(to bottom, rgba(var(--highlight), 0.2), rgba(var(--highlight), 0.2));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.CheckboxInput:checked:hover + .CheckboxButton {\n    background-color: transparent;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7)),\n        linear-gradient(to bottom, rgba(var(--highlight), 0.5), rgba(var(--highlight), 0.5));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Button: Unchecked */\n.CheckboxButton:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.7em;\n    height: 0.7em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform 0.25s;\n}\n\n/* Button: Checked */\n.CheckboxInput:checked + .CheckboxButton:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.7em, -50%);\n    transition: transform 0.25s;\n}\n\n/* Button: Hover, Unchecked */\n.CheckboxInput:hover + .CheckboxButton:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/***** CLASS: Drop down buttons and menus *****/\n\n/** Buttons that drop down a 'select' option list  */\n.Dropdown.Selected, .Dropdown:not(.Selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.ColorInputButton {\n    position: absolute;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.DropColor {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--border-radius-small);\n}\n\n/***** CLASS: .DropArrow (adds a little down arrow on right side of element) *****/\n\n.DropArrow {\n    padding-right: 1.4em;\n}\n.DropArrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* DropArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all 0.2s;\n}\n.DropArrow:hover::after, .DropArrow.Selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.DropArrow.Selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/***** CLASS: .Number (Number Box) *****/\n\n.Number {\n    font-size: 100%;\n}\n\n/***** ELEMENT: Slider *****/\n\n.SlideContainer {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.TickMarks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.Slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--border-radius-inner);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.Slider:hover, .Slider:focus, .Slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--border-radius-inner);\n    outline: var(--border-micro) solid transparent;\n}\n.Slider:active { cursor: ew-resize; }\n\n/* Safari / Chrome Thumb */\n.Slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-webkit-slider-thumb:hover, .Slider::-webkit-slider-thumb:active {\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n.Slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.Slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-moz-range-thumb:hover, .Slider::-moz-range-thumb:active {\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n.Slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/***** ELEMENT: Text Area *****/\n\ntextarea {\n    color: rgba(var(--text), 1);\n    background-color: #222;\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--box-radius);\n    outline: none; /* for macos */\n    padding: var(--border-size) var(--pad-large);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\ntextarea.success {\n    border-color: #8b8 !important;\n}\n\ntextarea.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n";
var stylesheet$6="/***** ELEMENT: Input (number, text, etc) *****/\n\ninput {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.25);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--box-radius);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n}\n\ninput:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\ninput:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\ninput.YesDrop {\n    color: rgb(0, 255, 0);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(0, 255, 0);\n    outline: var(--border-micro) solid rgb(0, 255, 0);\n    border-radius: 0;\n}\n\ninput.NoDrop {\n    color: red;\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid red;\n    outline: var(--border-micro) solid red;\n    border-radius: 0;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/** Hide Arrow Spinners - Firefox */\ninput[type=number] {\n    -moz-appearance: textfield;\n}\n\n/***** ELEMENT: Button *****/\n\nbutton {\n    display: flex;\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--box-radius);\n    outline: var(--border-small) solid rgba(var(--darklight), 0.0);\n\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5)),\n        linear-gradient(to bottom, rgba(var(--button-dark), 0.75), rgba(var(--button-dark), 0.75));\n\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\nbutton:not(.Selected):enabled:hover {\n    color: rgba(var(--highlight), 1);\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7)),\n        linear-gradient(to bottom, rgba(var(--highlight), 0.1), rgba(var(--highlight), 0.1));\n}\n\nbutton:not(.Selected):enabled:active {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: var(--sunk-in-shadow);\n}\n\nbutton.Selected {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    box-shadow: var(--sunk-in-shadow);\n}\n\nbutton:disabled {\n    pointer-events: none;\n}\n\nbutton:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.BorderlessButton {\n    border: none;\n    border-radius: var(--box-radius);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.6em;\n    min-width: 1.75em;\n}\n\n.BorderlessButton:not(.Selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--negative) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.BorderlessButton:not(.Selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--negative) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/***** ELEMENT: Input.Checkbox *****/\n\n/* Container */\n.Checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.CheckboxInput {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.CheckboxButton {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform 0.25s;\n}\n\n/* Visible Background: Checked */\n.CheckboxInput:checked + .CheckboxButton {\n    background-color: transparent;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7)),\n        linear-gradient(to bottom, rgba(var(--highlight), 0.2), rgba(var(--highlight), 0.2));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.CheckboxInput:checked:hover + .CheckboxButton {\n    background-color: transparent;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.7), rgba(var(--icon-dark), 0.7)),\n        linear-gradient(to bottom, rgba(var(--highlight), 0.5), rgba(var(--highlight), 0.5));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Button: Unchecked */\n.CheckboxButton:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.7em;\n    height: 0.7em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform 0.25s;\n}\n\n/* Button: Checked */\n.CheckboxInput:checked + .CheckboxButton:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.7em, -50%);\n    transition: transform 0.25s;\n}\n\n/* Button: Hover, Unchecked */\n.CheckboxInput:hover + .CheckboxButton:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/***** CLASS: Drop down buttons and menus *****/\n\n/** Buttons that drop down a 'select' option list  */\n.Dropdown.Selected, .Dropdown:not(.Selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.ColorInputButton {\n    position: absolute;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.DropColor {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--border-radius-small);\n}\n\n/***** CLASS: .DropArrow (adds a little down arrow on right side of element) *****/\n\n.DropArrow {\n    padding-right: 1.4em;\n}\n.DropArrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* DropArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all 0.2s;\n}\n.DropArrow:hover::after, .DropArrow.Selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.DropArrow.Selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/***** CLASS: .Number (Number Box) *****/\n\n.Number {\n    font-size: 100%;\n}\n\n/***** ELEMENT: Slider *****/\n\n.SlideContainer {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.TickMarks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.Slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--border-radius-inner);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.Slider:hover, .Slider:focus, .Slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--border-radius-inner);\n    outline: var(--border-micro) solid transparent;\n}\n.Slider:active { cursor: ew-resize; }\n\n/* Safari / Chrome Thumb */\n.Slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-webkit-slider-thumb:hover, .Slider::-webkit-slider-thumb:active {\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n.Slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.Slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.Slider::-moz-range-thumb:hover, .Slider::-moz-range-thumb:active {\n    background-image:\n        linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0)),\n        linear-gradient(to bottom, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n.Slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/***** ELEMENT: Text Area *****/\n\ntextarea {\n    color: rgba(var(--text), 1);\n    background-color: #222;\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--box-radius);\n    outline: none; /* for macos */\n    padding: var(--border-size) var(--pad-large);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\ntextarea.success {\n    border-color: #8b8 !important;\n}\n\ntextarea.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n";
styleInject(css_248z$6);

var css_248z$5 = "/***** CLASS: .AbsoluteBox *****/\n\n.AbsoluteBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/***** CLASS: .AssetBox / .MiniAssetBox *****/\n\n.AssetBox {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--border-radius-inner);\n    margin: var(--pad-x-small);\n\n    outline: none; /* for macos */\n}\n\n.MiniAssetBox {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-width);\n    min-height: var(--asset-height);\n}\n\n.MiniAssetBox:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--box-radius);\n}\n\n.MiniAssetBox:active, .MiniAssetBox:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.MiniAssetBox:focus > *, .MiniAssetBox:active > * {\n    filter: brightness(100%);\n    /* filter: brightness(125%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 150deg)); */\n}\n\n.MiniAssetBox:hover > * {\n    filter: brightness(150%);\n    /* filter: brightness(125%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 150deg)); */\n}\n\n/***** CLASS: .DockerLeft / .DockerRight *****/\n\n.DockerCorner {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n    margin: auto;\n    z-index: 1; /* DockerCorner */\n    background: transparent;\n}\n\n.DockerTopLeft {\n    /* background-color: rgba(255, 0, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n}\n\n.DockerTopRight {\n    /* background-color: rgba(0, 255, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n}\n\n.DockerBottomLeft {\n    /* background-color: rgba(0, 0, 255, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n    justify-content: end;\n}\n\n.DockerBottomRight {\n    /* background-color: rgba(128, 0, 128, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n    justify-content: end;\n}\n\n/***** CLASS: .FlexBox *****/\n\n.FlexBox {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/***** CLASS: .Row *****/\n\n.Row {\n    width: 100%;\n    padding: 0 var(--border-small);\n    margin: var(--pad-x-small) 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/***** CLASS: .ShadowBox *****/\n\n.ShadowBox { /* Affects Toolbar Icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n}\n\n.ShadowBox.NoShadow {\n    width: 100%;\n    height: 100%;\n}\n\n.ShadowBox:not(.NoShadow) > * {\n    filter: var(--drop-shadow);\n}\n\n/***** CLASS: .VectorBox *****/\n\n.VectorBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.EnlargeIcon {\n    position: absolute;\n    overflow: hidden;\n    left: -20%;\n    top: -20%;\n    width: 140%;\n    height: 140%;\n}\n";
var stylesheet$5="/***** CLASS: .AbsoluteBox *****/\n\n.AbsoluteBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/***** CLASS: .AssetBox / .MiniAssetBox *****/\n\n.AssetBox {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--border-radius-inner);\n    margin: var(--pad-x-small);\n\n    outline: none; /* for macos */\n}\n\n.MiniAssetBox {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-width);\n    min-height: var(--asset-height);\n}\n\n.MiniAssetBox:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--box-radius);\n}\n\n.MiniAssetBox:active, .MiniAssetBox:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.MiniAssetBox:focus > *, .MiniAssetBox:active > * {\n    filter: brightness(100%);\n    /* filter: brightness(125%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 150deg)); */\n}\n\n.MiniAssetBox:hover > * {\n    filter: brightness(150%);\n    /* filter: brightness(125%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 150deg)); */\n}\n\n/***** CLASS: .DockerLeft / .DockerRight *****/\n\n.DockerCorner {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    pointer-events: none;\n    margin: auto;\n    z-index: 1; /* DockerCorner */\n    background: transparent;\n}\n\n.DockerTopLeft {\n    /* background-color: rgba(255, 0, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n}\n\n.DockerTopRight {\n    /* background-color: rgba(0, 255, 0, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n}\n\n.DockerBottomLeft {\n    /* background-color: rgba(0, 0, 255, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    left: 0;\n    justify-content: end;\n}\n\n.DockerBottomRight {\n    /* background-color: rgba(128, 0, 128, 0.5); */\n    top: calc(var(--button-size) + (var(--pad-small) * 2));\n    bottom: 0;\n    right: 0;\n    justify-content: end;\n}\n\n/***** CLASS: .FlexBox *****/\n\n.FlexBox {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/***** CLASS: .Row *****/\n\n.Row {\n    width: 100%;\n    padding: 0 var(--border-small);\n    margin: var(--pad-x-small) 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/***** CLASS: .ShadowBox *****/\n\n.ShadowBox { /* Affects Toolbar Icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n}\n\n.ShadowBox.NoShadow {\n    width: 100%;\n    height: 100%;\n}\n\n.ShadowBox:not(.NoShadow) > * {\n    filter: var(--drop-shadow);\n}\n\n/***** CLASS: .VectorBox *****/\n\n.VectorBox {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.EnlargeIcon {\n    position: absolute;\n    overflow: hidden;\n    left: -20%;\n    top: -20%;\n    width: 140%;\n    height: 140%;\n}\n";
styleInject(css_248z$5);

var css_248z$4 = "/***** CLASS: .MenuShow (Show menu that was previously hidden) *****/\n\n.Menu.MenuShow {\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n    pointer-events: auto;\n}\n\n/***** CLASS: .Menu *****/\n\n/* Normal Menu Styling */\n.Menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    border: 1px solid rgba(var(--shadow), 1.0);\n    border-radius: var(--box-radius);\n\n    min-width: var(--menu-size);\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions, switch 'transition' from the following: */\n    transition: all 0s;\n    /*\n    transition:\n        transform var(--menu-timing) ease-in-out,\n        opacity var(--menu-timing) ease-in-out;\n    */\n}\n\n.Menu:not(.MenuShow).SlideDown {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.Menu:not(.MenuShow).SlideUp {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.SelectMenu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* SelectMenu */\n}\n\n/* Menu Item */\n.MenuItem {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: var(--border-size);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.MenuItem:not(.Disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: var(--border-size);\n}\n\n/* Image */\n.MenuIcon {\n    position: relative;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    flex: 0 0 auto;\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n/* Text */\n.MenuText {\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.MenuShortcut {\n    /** ////////////////\n    //  System Font Info:\n    //      https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    //      https://furbo.org/2018/03/28/system-fonts-in-css/\n    //      https://css-tricks.com/snippets/css/system-font-stack/\n    //////////////////*/\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.MenuShortcutCharacter {\n    /* background-color: blueviolet;\n    border: solid 1px; */\n    text-align: center;\n}\n\n/* Separator */\n.MenuSeparator {\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.SubMenuItem::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.SubMenuItem:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.MenuItem .Menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.MenuMouseTriangle {\n    position: absolute;\n}\n\n.MenuRight {\n    text-align: left;\n    vertical-align: middle;\n    width: 50%;\n}\n\n/******* CLASS: .ToolbarButton *****/\n\n.ToolbarButton {\n    background-repeat: no-repeat;\n\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    border: 0;\n    border-radius: var(--border-radius-inner);\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1); /* pop-out-shadow */\n    outline: none; /* for macos */\n\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n\n    opacity: 1.0;\n    overflow: hidden;\n    display: flex;\n}\n\n.ToolbarButton:not(.Selected):enabled:hover > * {\n    filter: brightness(125%);\n}\n\n.ToolbarButton:not(.Selected):enabled:hover {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.7), rgba(var(--icon), 0.7)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 0.4), rgba(var(--shadow), 0.4));\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.3),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n.ToolbarButton:not(.Selected):enabled:active,\n.ToolbarButton.Selected:enabled {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.15), rgba(var(--icon), 0.15)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    box-shadow: var(--sunk-in-shadow);\n}\n\n.ToolbarButton:disabled {\n    background-image:\n        linear-gradient(to right, rgba(var(--complement), 0.05), rgba(var(--complement), 0.05)),\n        linear-gradient(to right, rgba(var(--button-dark), var(--panel-transparency)), rgba(var(--button-dark), var(--panel-transparency)));\n    box-shadow: none;\n}\n.ToolbarButton:disabled {\n    filter: none;\n}\n.ToolbarButton:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n.ToolbarButton.ButtonLeft, .ToolbarButton.ButtonMiddle {\n    margin-right: 0;\n}\n.ToolbarButton.ButtonRight, .ToolbarButton.ButtonMiddle {\n    margin-left: 0;\n}\n\n.ButtonLeft {\n    /* border-right: 0; */\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n\n.ButtonRight {\n    border-left: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.ButtonMiddle {\n    border-left: 0;\n    border-radius: 0;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.SpecialButton {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--complement), 0.85), rgba(var(--complement), 0.7)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n\n.SpecialButton:not(.Selected):enabled:hover {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--complement), 0.95), rgba(var(--complement), 0.8)),\n        linear-gradient(to bottom left, rgba(var(--highlight), 0.2), rgba(var(--highlight), 0.2));\n}\n\n.SpecialButton:not(.Selected):enabled:active,\n.SpecialButton.Selected:enabled {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--complement), 0.5), rgba(var(--complement), 0.35)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n\n/***** CLASS: .ToolbarSeparator *****/\n\n.ToolbarSeparator {\n    /* background-color: rgba(var(--shadow), 0.5); */\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n";
var stylesheet$4="/***** CLASS: .MenuShow (Show menu that was previously hidden) *****/\n\n.Menu.MenuShow {\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n    pointer-events: auto;\n}\n\n/***** CLASS: .Menu *****/\n\n/* Normal Menu Styling */\n.Menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    border: 1px solid rgba(var(--shadow), 1.0);\n    border-radius: var(--box-radius);\n\n    min-width: var(--menu-size);\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions, switch 'transition' from the following: */\n    transition: all 0s;\n    /*\n    transition:\n        transform var(--menu-timing) ease-in-out,\n        opacity var(--menu-timing) ease-in-out;\n    */\n}\n\n.Menu:not(.MenuShow).SlideDown {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.Menu:not(.MenuShow).SlideUp {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.SelectMenu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* SelectMenu */\n}\n\n/* Menu Item */\n.MenuItem {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: var(--border-size);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.MenuItem:not(.Disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: var(--border-size);\n}\n\n/* Image */\n.MenuIcon {\n    position: relative;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    flex: 0 0 auto;\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n/* Text */\n.MenuText {\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.MenuShortcut {\n    /** ////////////////\n    //  System Font Info:\n    //      https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    //      https://furbo.org/2018/03/28/system-fonts-in-css/\n    //      https://css-tricks.com/snippets/css/system-font-stack/\n    //////////////////*/\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.MenuShortcutCharacter {\n    /* background-color: blueviolet;\n    border: solid 1px; */\n    text-align: center;\n}\n\n/* Separator */\n.MenuSeparator {\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.SubMenuItem::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.SubMenuItem:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.MenuItem .Menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.MenuMouseTriangle {\n    position: absolute;\n}\n\n.MenuRight {\n    text-align: left;\n    vertical-align: middle;\n    width: 50%;\n}\n\n/******* CLASS: .ToolbarButton *****/\n\n.ToolbarButton {\n    background-repeat: no-repeat;\n\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    border: 0;\n    border-radius: var(--border-radius-inner);\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1); /* pop-out-shadow */\n    outline: none; /* for macos */\n\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n\n    opacity: 1.0;\n    overflow: hidden;\n    display: flex;\n}\n\n.ToolbarButton:not(.Selected):enabled:hover > * {\n    filter: brightness(125%);\n}\n\n.ToolbarButton:not(.Selected):enabled:hover {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.7), rgba(var(--icon), 0.7)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 0.4), rgba(var(--shadow), 0.4));\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.3),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n.ToolbarButton:not(.Selected):enabled:active,\n.ToolbarButton.Selected:enabled {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.15), rgba(var(--icon), 0.15)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n    box-shadow: var(--sunk-in-shadow);\n}\n\n.ToolbarButton:disabled {\n    background-image:\n        linear-gradient(to right, rgba(var(--complement), 0.05), rgba(var(--complement), 0.05)),\n        linear-gradient(to right, rgba(var(--button-dark), var(--panel-transparency)), rgba(var(--button-dark), var(--panel-transparency)));\n    box-shadow: none;\n}\n.ToolbarButton:disabled {\n    filter: none;\n}\n.ToolbarButton:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n.ToolbarButton.ButtonLeft, .ToolbarButton.ButtonMiddle {\n    margin-right: 0;\n}\n.ToolbarButton.ButtonRight, .ToolbarButton.ButtonMiddle {\n    margin-left: 0;\n}\n\n.ButtonLeft {\n    /* border-right: 0; */\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n\n.ButtonRight {\n    border-left: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.ButtonMiddle {\n    border-left: 0;\n    border-radius: 0;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.SpecialButton {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--complement), 0.85), rgba(var(--complement), 0.7)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n\n.SpecialButton:not(.Selected):enabled:hover {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--complement), 0.95), rgba(var(--complement), 0.8)),\n        linear-gradient(to bottom left, rgba(var(--highlight), 0.2), rgba(var(--highlight), 0.2));\n}\n\n.SpecialButton:not(.Selected):enabled:active,\n.SpecialButton.Selected:enabled {\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--complement), 0.5), rgba(var(--complement), 0.35)),\n        linear-gradient(to bottom left, rgba(var(--shadow), 1.0), rgba(var(--shadow), 1.0));\n}\n\n/***** CLASS: .ToolbarSeparator *****/\n\n.ToolbarSeparator {\n    /* background-color: rgba(var(--shadow), 0.5); */\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n";
styleInject(css_248z$4);

var css_248z$3 = "/***** CLASS: .Draggable *****/\n\n/* .Scripter, .Player, .Shaper, etc. */\n\n.Draggable {\n    position: absolute;\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n\n    width: 90%;\n    left: 50%;\n    height: calc(100% - 12.0em);\n    top: 5.3em;\n\n    transform: translate(-50%, 0%);\n    z-index: 200; /* OverlayPanel */\n}\n\n/***** CLASS: .Panel / .SimplePanel / .FancyPanel(s) *****/\n\n.Panel {\n    position: relative;\n    overflow: visible;\n}\n\n.SimplePanel {\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--border-radius-inner);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.FancyPanelOuter {\n    height: 100%;/*calc(100% - ((var(--edge-thickness) * 20)));*/\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness);     /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.FancyPanelBorder {\n    height: 100%;/*calc(100% - ((var(--border-small) * 2) + (var(--pad-medium) * 2)));*/\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--border-radius-inner);\n    padding: var(--pad-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.FancyPanelInside {\n    height: 100%;/*calc(100% - ((var(--pad-small) * 2)));*/\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--border-radius-small);\n    margin: 0;\n    padding: var(--pad-x-small) 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/***** CLASS: .Resizeable / Resizers *****/\n\n.Resizeable {\n    position: relative;\n    max-height: 100%;\n}\n\n.Resizer {\n    position: absolute;\n    pointer-events: none;\n    opacity: 0.0;                           /* NOTE: increase to see Resizers */\n    z-index: 99; /* Resizer */\n}\n\n.ResizerLeft {\n    background-color: rgb(255, 0, 0);\n    left: 0;\n    top: 0;\n    width: var(--resize-size);\n    height: 100%;\n    margin-top: 0;\n    cursor: col-resize;\n}\n\n.ResizerTopLeft {\n    background-color: rgb(255, 255, 0);\n    top: 0;\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerTop {\n    background-color: rgb(0, 255, 0);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    cursor: row-resize;\n}\n\n.ResizerTopRight {\n    background-color: rgb(0, 255, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerRight {\n    background-color: rgb(0, 0, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: 100%;\n    cursor: col-resize;\n}\n\n.ResizerBottomRight {\n    background-color: rgb(255, 0, 255);\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerBottom {\n    background-color: rgb(255, 255, 255);\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: row-resize;\n}\n\n.ResizerBottomLeft {\n    background-color: rgb(0, 0, 0);\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n/***** CLASS: .Scroller ***/\n\n.Scroller {\n    overflow: auto;\n}\n\n/***** CLASS: .Shrinkable *****/\n\n.Shrinkable {\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--border-radius-inner);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-small);\n    margin-bottom: var(--pad-small);\n    box-shadow: var(--pop-out-shadow);\n    overflow: hidden;\n}\n\n.ShrinkTitle {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n\n    font-size: 110%;\n\n    cursor: pointer;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-top-left-radius: var(--border-radius-small);\n    border-top-right-radius: var(--border-radius-small);\n    padding: var(--pad-small);\n    padding-left: 0.5em;\n    padding-right: var(--pad-large);\n}\n.ShrinkTitle:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.Shrinkable:not(.Expanded) .ShrinkTitle {\n    border-bottom: 0;\n}\n.Shrinkable.Expanded .ShrinkTitle {\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.4);\n}\n\n.ShrinkIcon > * {\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n.ShrinkIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.ShrinkText {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.5em;\n}\n\n.ShrinkArrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    transform: translateY(25%);\n    z-index: 101; /* ShrinkArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform 0.2s;\n}\n.Shrinkable.Expanded .ShrinkTitle .ShrinkArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.ShrinkTitle:hover .ShrinkArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n\n.ShrinkBody {\n    border-bottom-left-radius: var(--border-radius-small);\n    border-bottom-right-radius: var(--border-radius-small);\n    padding: var(--pad-small);\n    overflow: hidden;\n}\n.Shrinkable:not(.Expanded) .ShrinkBody {\n    display: none;\n    pointer-events: none;\n}\n.Shrinkable.Expanded .ShrinkBody {\n    /* display: block; */\n    display: flex;\n    flex-wrap: wrap;\n    pointer-events: auto;\n}\n\n/***** CLASS: .Tabbed *****/\n\n.Tabbed {\n    padding: var(--pad-small);\n}\n\n/* Collection of Panels */\n.TabPanels {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/* Interior panel of a Tabbed Panel */\n.TabPanels .Panel.Hidden {\n    display: none;\n    pointer-events: none;\n}\n\n.TabPanels .Panel:not(.Hidden) {\n    display: block;\n    pointer-events: auto;\n}\n\n/* Collection of Tabs */\n.Tabs {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    margin-top: calc(-1 * var(--pad-x-small));\n    z-index: 101; /* Tabs */\n}\n\n.Tabs.LeftSide {\n    left: calc((var(--tab-size)/-2.0) + 0.3em);\n}\n\n.Tabs.RightSide {\n    left: calc(100% - ((var(--tab-size)/2.0) + 0.65em));\n}\n\n.Tabs .Tab {\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border-radius: var(--tab-size);\n    color: rgba(var(--text), 1.0);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    margin-top: -0.2em;\n    margin-bottom: -0.2em;\n    transform: scale(70%);\n\n    /* transition: margin 0 ease-in-out, transform 0 ease-in-out; */\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.Tabs .Tab.Selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n.Tabs .Tab > .VectorBox {\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n.Tabs .Tab:hover > * {\n    filter: brightness(120%);\n}\n\n.Tabs .Tab.Selected:hover > * {\n    filter: brightness(120%);\n}\n\n.Tabs .Tab.Selected > * {\n    filter: none;\n}\n\n/* On Click */\n.Tabs .Tab:active > .TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--black), 0.5),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.25);\n}\n.Tabs .Tab:active > .VectorBox {\n    transform: translate(-1px, 1px);\n}\n\n/* Border, shadow holder */\n.TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--white), 0.25),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.5);\n    cursor: pointer;\n    position: absolute;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    border: 0.21em solid rgb(var(--icon));\n    border-radius: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Tabs .Tab.Selected .TabIcon {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/* Tab Image */\n.Tabs .Tab .VectorBox {\n    position: absolute;\n    border-radius: var(--tab-size);\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.7), rgba(var(--icon), 0.5)),\n        linear-gradient(to bottom left, rgba(var(--darklight), 1.0), rgba(var(--darklight), 1.0));\n    width: 95%;\n    height: 95%;\n    overflow: hidden;\n}\n\n/* Tab Image SVG Shadow */\n.Tabs .Tab .VectorBox > * {\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n/* Title Bar Class for top of Tabbed Panel */\n.TabTitle {\n    position: relative;\n    display: block;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--highlight), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: var(--border-radius-micro);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--negative) calc(var(--pixel) * 1.5) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: 130%;\n    margin: var(--pad-small);\n    margin-top: 0;\n    margin-bottom: var(--pad-smallish);\n    padding-top: var(--pad-medium);\n    padding-bottom: var(--pad-medium);\n}\n\n/***** CLASS: .Titled *****/\n\n.Titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.TitleArrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.75em;\n    transform: translateY(25%);\n    z-index: 101; /* TitleArrow */\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform 0.2s;\n}\n.Titled.Expanded .TabTitle .TitleArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.TabTitle:hover .TitleArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n";
var stylesheet$3="/***** CLASS: .Draggable *****/\n\n/* .Scripter, .Player, .Shaper, etc. */\n\n.Draggable {\n    position: absolute;\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n\n    width: 90%;\n    left: 50%;\n    height: calc(100% - 12.0em);\n    top: 5.3em;\n\n    transform: translate(-50%, 0%);\n    z-index: 200; /* OverlayPanel */\n}\n\n/***** CLASS: .Panel / .SimplePanel / .FancyPanel(s) *****/\n\n.Panel {\n    position: relative;\n    overflow: visible;\n}\n\n.SimplePanel {\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--border-radius-inner);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.FancyPanelOuter {\n    height: 100%;/*calc(100% - ((var(--edge-thickness) * 20)));*/\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness);     /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.FancyPanelBorder {\n    height: 100%;/*calc(100% - ((var(--border-small) * 2) + (var(--pad-medium) * 2)));*/\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--border-radius-inner);\n    padding: var(--pad-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.FancyPanelInside {\n    height: 100%;/*calc(100% - ((var(--pad-small) * 2)));*/\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--border-radius-small);\n    margin: 0;\n    padding: var(--pad-x-small) 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/***** CLASS: .Resizeable / Resizers *****/\n\n.Resizeable {\n    position: relative;\n    max-height: 100%;\n}\n\n.Resizer {\n    position: absolute;\n    pointer-events: none;\n    opacity: 0.0;                           /* NOTE: increase to see Resizers */\n    z-index: 99; /* Resizer */\n}\n\n.ResizerLeft {\n    background-color: rgb(255, 0, 0);\n    left: 0;\n    top: 0;\n    width: var(--resize-size);\n    height: 100%;\n    margin-top: 0;\n    cursor: col-resize;\n}\n\n.ResizerTopLeft {\n    background-color: rgb(255, 255, 0);\n    top: 0;\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerTop {\n    background-color: rgb(0, 255, 0);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    cursor: row-resize;\n}\n\n.ResizerTopRight {\n    background-color: rgb(0, 255, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerRight {\n    background-color: rgb(0, 0, 255);\n    top: 0;\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: 100%;\n    cursor: col-resize;\n}\n\n.ResizerBottomRight {\n    background-color: rgb(255, 0, 255);\n    left: calc(100% - (var(--resize-size)));\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.ResizerBottom {\n    background-color: rgb(255, 255, 255);\n    left: 0;\n    width: 100%;\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: row-resize;\n}\n\n.ResizerBottomLeft {\n    background-color: rgb(0, 0, 0);\n    left: 0;\n    width: var(--resize-size);\n    height: var(--resize-size);\n    top: calc(100% - (var(--resize-size)));\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n/***** CLASS: .Scroller ***/\n\n.Scroller {\n    overflow: auto;\n}\n\n/***** CLASS: .Shrinkable *****/\n\n.Shrinkable {\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--border-radius-inner);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-small);\n    margin-bottom: var(--pad-small);\n    box-shadow: var(--pop-out-shadow);\n    overflow: hidden;\n}\n\n.ShrinkTitle {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n\n    font-size: 110%;\n\n    cursor: pointer;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-top-left-radius: var(--border-radius-small);\n    border-top-right-radius: var(--border-radius-small);\n    padding: var(--pad-small);\n    padding-left: 0.5em;\n    padding-right: var(--pad-large);\n}\n.ShrinkTitle:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.Shrinkable:not(.Expanded) .ShrinkTitle {\n    border-bottom: 0;\n}\n.Shrinkable.Expanded .ShrinkTitle {\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.4);\n}\n\n.ShrinkIcon > * {\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n.ShrinkIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.ShrinkText {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.5em;\n}\n\n.ShrinkArrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    transform: translateY(25%);\n    z-index: 101; /* ShrinkArrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform 0.2s;\n}\n.Shrinkable.Expanded .ShrinkTitle .ShrinkArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.ShrinkTitle:hover .ShrinkArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n\n.ShrinkBody {\n    border-bottom-left-radius: var(--border-radius-small);\n    border-bottom-right-radius: var(--border-radius-small);\n    padding: var(--pad-small);\n    overflow: hidden;\n}\n.Shrinkable:not(.Expanded) .ShrinkBody {\n    display: none;\n    pointer-events: none;\n}\n.Shrinkable.Expanded .ShrinkBody {\n    /* display: block; */\n    display: flex;\n    flex-wrap: wrap;\n    pointer-events: auto;\n}\n\n/***** CLASS: .Tabbed *****/\n\n.Tabbed {\n    padding: var(--pad-small);\n}\n\n/* Collection of Panels */\n.TabPanels {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/* Interior panel of a Tabbed Panel */\n.TabPanels .Panel.Hidden {\n    display: none;\n    pointer-events: none;\n}\n\n.TabPanels .Panel:not(.Hidden) {\n    display: block;\n    pointer-events: auto;\n}\n\n/* Collection of Tabs */\n.Tabs {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    margin-top: calc(-1 * var(--pad-x-small));\n    z-index: 101; /* Tabs */\n}\n\n.Tabs.LeftSide {\n    left: calc((var(--tab-size)/-2.0) + 0.3em);\n}\n\n.Tabs.RightSide {\n    left: calc(100% - ((var(--tab-size)/2.0) + 0.65em));\n}\n\n.Tabs .Tab {\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border-radius: var(--tab-size);\n    color: rgba(var(--text), 1.0);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    margin-top: -0.2em;\n    margin-bottom: -0.2em;\n    transform: scale(70%);\n\n    /* transition: margin 0 ease-in-out, transform 0 ease-in-out; */\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.Tabs .Tab.Selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n.Tabs .Tab > .VectorBox {\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n.Tabs .Tab:hover > * {\n    filter: brightness(120%);\n}\n\n.Tabs .Tab.Selected:hover > * {\n    filter: brightness(120%);\n}\n\n.Tabs .Tab.Selected > * {\n    filter: none;\n}\n\n/* On Click */\n.Tabs .Tab:active > .TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--black), 0.5),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.25);\n}\n.Tabs .Tab:active > .VectorBox {\n    transform: translate(-1px, 1px);\n}\n\n/* Border, shadow holder */\n.TabIcon {\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.25), /* drop shadow */\n        inset -1px  1px 1px 1px rgba(var(--white), 0.25),\n        inset  1px -1px 1px 1px rgba(var(--black), 0.5);\n    cursor: pointer;\n    position: absolute;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    border: 0.21em solid rgb(var(--icon));\n    border-radius: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.Tabs .Tab.Selected .TabIcon {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/* Tab Image */\n.Tabs .Tab .VectorBox {\n    position: absolute;\n    border-radius: var(--tab-size);\n    background-image:\n        linear-gradient(to bottom left, rgba(var(--icon-light), 0.7), rgba(var(--icon), 0.5)),\n        linear-gradient(to bottom left, rgba(var(--darklight), 1.0), rgba(var(--darklight), 1.0));\n    width: 95%;\n    height: 95%;\n    overflow: hidden;\n}\n\n/* Tab Image SVG Shadow */\n.Tabs .Tab .VectorBox > * {\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n/* Title Bar Class for top of Tabbed Panel */\n.TabTitle {\n    position: relative;\n    display: block;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--highlight), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: var(--border-radius-micro);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    /* pop-out-shadow */\n    box-shadow:\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--negative) calc(var(--pixel) * 1.5) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: 130%;\n    margin: var(--pad-small);\n    margin-top: 0;\n    margin-bottom: var(--pad-smallish);\n    padding-top: var(--pad-medium);\n    padding-bottom: var(--pad-medium);\n}\n\n/***** CLASS: .Titled *****/\n\n.Titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.TitleArrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.75em;\n    transform: translateY(25%);\n    z-index: 101; /* TitleArrow */\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform 0.2s;\n}\n.Titled.Expanded .TabTitle .TitleArrow {\n    transform: translateY(-25%) scale(1.0, -1.0);\n}\n.TabTitle:hover .TitleArrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n";
styleInject(css_248z$3);

var css_248z$2 = "/***** Gooey Panel *****/\n\n.Gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20em;\n    z-index: 1;\n}\n";
var stylesheet$2="/***** Gooey Panel *****/\n\n.Gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20em;\n    z-index: 1;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = "\n/***** .PropertyList *****/\n\n.PropertyList {\n    width: 100%;\n}\n\n/* --- HEADER --- */\n\n.PropertyHeaderTitle {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: calc(100% - 0.5em);\n    overflow: hidden;\n    font-size: 110%;\n    background-color: rgba(var(--icon), 0.35);\n    border: solid var(--border-small) rgba(var(--shadow), 0.65);\n    border-radius: var(--border-radius-inner);\n    margin: var(--pad-small) 0.25em;\t\t/* vertical | horizontal */\n    padding: var(--pad-small) 0.5em;\t\t/* vertical | horizontal */\n    box-shadow: inset 0 0.07143em 0.14286em 0 rgba(var(--midlight), 0.5); /* pop-out-shadow */\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.PropertyHeaderIcon > * {\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n.PropertyHeaderIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.PropertyHeaderText {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/* --- ROW --- */\n\n.PropertyRow {\n    position: relative;\n    min-height: 1.7em;\n}\n\n.PropertyRow:hover .PropertyLeftHalf, .PropertyRow:hover .PropertyLeftThird {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.PropertyRow:hover .PropertyLeftHalf .Image,\n.PropertyRow:hover .PropertyLeftThird .Image {\n    filter: brightness(250%);\n}\n\n.PropertySpace {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.PropertyLeft {\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: 1.7em;\n\n    text-align: left;\n    text-transform: capitalize;\n}\n.LeftTabSpacing {\n    padding-left: var(--pad-x-large);\n}\n\n.PropertyRight {\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: 1.7em;\n}\n\n.PropertyLeftHalf { width: 50% !important; }\n.PropertyLeftFifth { width: 45% !important; }\n.PropertyLeftThird { width: 30% !important; }\n\n.PropertyRightHalf { width: calc(50% - var(--pad-small)) !important; }\n.PropertyRightFifth { width: calc(55% - var(--pad-small)) !important; }\n.PropertyRightThird { width: calc(70% - var(--pad-small)) !important; }\n\n/* --- RIGHT SIDE OF ROW --- */\n\n.PropertyRight > button:not(.PropertyTinyRow):not(.PropertyButton),\n.PropertyRight > .Input:not(.PropertyTinyRow),\n.PropertyRight > .Number:not(.PropertyTinyRow),\n.PropertyRight > .SlideContainer:not(.PropertyTinyRow) {\n    flex: 1 1 auto;\n    min-height: 1.7em;\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.PropertyTinyRow {\n    --min-width: 2em;\n    flex: 2 2 var(--min-width);\n    min-height: 1.7em;\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/* --- BUTTON --- */\n/* Button appearing in right column of PropertyList, fixed size */\n.PropertyButton {\n    position: relative;\n    height: 1.7em;\n    width: 2.1em;\n}\n\n/* Button appearing in right column of PropertyList, flex box */\n.PropertyButtonFlex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: 1.7em;\n    white-space: nowrap;\n}\n\n/***** .TreeList *****/\n\n.TreeList {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: auto;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--border-radius-small);\n    box-shadow: var(--pop-out-shadow);\n\n    margin: var(--pad-x-small);\n\n    cursor: default;\n    outline: none; /* for macos */\n}\n\n/***** .TreeList .Option *****/\n\n.TreeList .Option {\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.TreeList .Option:hover {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.TreeList .Option.Active {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--border-radius-small);\n}\n.TreeList .Option.ActiveTop {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.TreeList .Option.ActiveBottom {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.TreeList .Option.Drag {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--border-radius-small);\n}\n.TreeList .Option.DragTop {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.TreeList .Option.DragBottom {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/***** .TreeList .Opener *****/\n\n.TreeList .Opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.TreeList .Opener.Open:after {\n    content: '-';\n}\n\n.TreeList .Opener.Closed:after {\n    content: '+';\n}\n";
var stylesheet$1="\n/***** .PropertyList *****/\n\n.PropertyList {\n    width: 100%;\n}\n\n/* --- HEADER --- */\n\n.PropertyHeaderTitle {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: calc(100% - 0.5em);\n    overflow: hidden;\n    font-size: 110%;\n    background-color: rgba(var(--icon), 0.35);\n    border: solid var(--border-small) rgba(var(--shadow), 0.65);\n    border-radius: var(--border-radius-inner);\n    margin: var(--pad-small) 0.25em;\t\t/* vertical | horizontal */\n    padding: var(--pad-small) 0.5em;\t\t/* vertical | horizontal */\n    box-shadow: inset 0 0.07143em 0.14286em 0 rgba(var(--midlight), 0.5); /* pop-out-shadow */\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.PropertyHeaderIcon > * {\n    filter: drop-shadow(var(--negative) var(--pixel) 0.075em rgba(20,20,20,0.5));\n}\n\n.PropertyHeaderIcon {\n    flex-grow: 0;\n    flex-shrink: 0;\n    font-size: 110%;\n    position: relative; /* anchor to children with 'posiiton: absolute' */\n    display: flex;\n    width: calc(var(--arrow-size) * 3);\n    height: calc(var(--arrow-size) * 3);\n    min-width: calc(var(--arrow-size) * 3);\n    min-height: calc(var(--arrow-size) * 3);\n}\n\n.PropertyHeaderText {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/* --- ROW --- */\n\n.PropertyRow {\n    position: relative;\n    min-height: 1.7em;\n}\n\n.PropertyRow:hover .PropertyLeftHalf, .PropertyRow:hover .PropertyLeftThird {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.PropertyRow:hover .PropertyLeftHalf .Image,\n.PropertyRow:hover .PropertyLeftThird .Image {\n    filter: brightness(250%);\n}\n\n.PropertySpace {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.PropertyLeft {\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: 1.7em;\n\n    text-align: left;\n    text-transform: capitalize;\n}\n.LeftTabSpacing {\n    padding-left: var(--pad-x-large);\n}\n\n.PropertyRight {\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: 1.7em;\n}\n\n.PropertyLeftHalf { width: 50% !important; }\n.PropertyLeftFifth { width: 45% !important; }\n.PropertyLeftThird { width: 30% !important; }\n\n.PropertyRightHalf { width: calc(50% - var(--pad-small)) !important; }\n.PropertyRightFifth { width: calc(55% - var(--pad-small)) !important; }\n.PropertyRightThird { width: calc(70% - var(--pad-small)) !important; }\n\n/* --- RIGHT SIDE OF ROW --- */\n\n.PropertyRight > button:not(.PropertyTinyRow):not(.PropertyButton),\n.PropertyRight > .Input:not(.PropertyTinyRow),\n.PropertyRight > .Number:not(.PropertyTinyRow),\n.PropertyRight > .SlideContainer:not(.PropertyTinyRow) {\n    flex: 1 1 auto;\n    min-height: 1.7em;\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.PropertyTinyRow {\n    --min-width: 2em;\n    flex: 2 2 var(--min-width);\n    min-height: 1.7em;\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/* --- BUTTON --- */\n/* Button appearing in right column of PropertyList, fixed size */\n.PropertyButton {\n    position: relative;\n    height: 1.7em;\n    width: 2.1em;\n}\n\n/* Button appearing in right column of PropertyList, flex box */\n.PropertyButtonFlex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: 1.7em;\n    white-space: nowrap;\n}\n\n/***** .TreeList *****/\n\n.TreeList {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: auto;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--border-radius-small);\n    box-shadow: var(--pop-out-shadow);\n\n    margin: var(--pad-x-small);\n\n    cursor: default;\n    outline: none; /* for macos */\n}\n\n/***** .TreeList .Option *****/\n\n.TreeList .Option {\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.TreeList .Option:hover {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.TreeList .Option.Active {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--border-radius-small);\n}\n.TreeList .Option.ActiveTop {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.TreeList .Option.ActiveBottom {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.TreeList .Option.Drag {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--border-radius-small);\n}\n.TreeList .Option.DragTop {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.TreeList .Option.DragBottom {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/***** .TreeList .Opener *****/\n\n.TreeList .Opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.TreeList .Opener.Open:after {\n    content: '-';\n}\n\n.TreeList .Opener.Closed:after {\n    content: '+';\n}\n";
styleInject(css_248z$1);

var css_248z = ".Tooltip, .InfoBox {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-image:\n        linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--box-radius);\n    */\n\n    border-radius: var(--box-radius);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n}\n\n.Tooltip {\n    position: absolute;\n    z-index: 1001; /* Tooltip */\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.Tooltip.Updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.InfoBox {\n    margin: 0;\n    position: absolute;\n    z-index: 1001; /* InfoBox */\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.InfoBox.Updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
var stylesheet=".Tooltip, .InfoBox {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-image:\n        linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--box-radius);\n    */\n\n    border-radius: var(--box-radius);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--negative) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--negative) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--negative) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n}\n\n.Tooltip {\n    position: absolute;\n    z-index: 1001; /* Tooltip */\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.Tooltip.Updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.InfoBox {\n    margin: 0;\n    position: absolute;\n    z-index: 1001; /* InfoBox */\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.InfoBox.Updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
styleInject(css_248z);

export { ALIGN, AbsoluteBox, AssetBox, Break, Button, CLOSE_SIDES, CORNERS, Checkbox, Color, Css, Div, Docker, Draggable, Dropdown, Element, FlexBox, FlexBreak, FlexSpacer, Gooey, Html, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, Image, LEFT_SPACING, Menu, MenuItem, MenuSeparator, MenuShortcut, NumberBox, NumberScroll, OVERFLOW, PANEL_STYLES, POSITION, PROPERTY_SIZE, Panel, Popper, PropertyList, RESIZERS, Resizeable, Row, ShadowBox, Shrinkable, Slider, Span, TAB_SIDES, TOOLTIP_Y_OFFSET, Tabbed, Text, TextArea, TextBox, Titled, ToolbarButton, ToolbarSeparator, TreeList, VectorBox, tooltipper };
