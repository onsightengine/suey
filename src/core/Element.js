import { SignalBinding } from '../utils/Signal.js';

/** Base Class of the Suey (Salinity Gui) Library */
class Element {

    constructor(dom) {
        const self = this;

        this.isElement = true;

        this.dom = dom;                                 // 'HTMLElement'
        this.name = undefined;                          // Object Name

        this.contents = function() { return self; };    // Inner 'Element' to be filled with other 'Element's
        this.children = [];                             // Holds 'Element' children (.add / .remove / .clearContents)
        this.parent = undefined;                        // Parent 'Element'
        this.slots = [];                                // Holds all 'SignalBinding' slots

        // Clean Slots
        this.dom.addEventListener('destroy', function() {
            for (const slot of self.slots) {
                if (typeof slot.detach === 'function') slot.detach();
                if (typeof slot.destroy === 'function') slot.destroy();
            }
            self.slots.length = 0;
        }, { once: true });
    }

    /********** DESTROY **********/

    /** Removes all children DOM elements from this element */
    destroy() {
        clearChildren(this, true /* destroy event */);
        return this;
    }

    /********** SIGNALS **********/

    addSlot(slot) {
        if (slot instanceof SignalBinding) {
            this.slots.push(slot);
        } else {
            console.warn(`Element.addSlot(): '${this.name}' failed to add slot`, slot);
        }
    }

    /********** CHILDREN **********/

    /** Adds to contents() any number of 'Element' / 'HTMLElement' passed as arguments */
    add(/* any number of comma separated elements to add */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this.contents(), element);
        }
        return this;
    }

    addToSelf(/* any number of comma separated elements to add */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this, element);
        }
        return this;
    }

    /** Removes all children 'Element' / 'HTMLElement' from '.contents()' only */
    clearContents() {
        clearChildren(this.contents(), false /* destroy event */);
        return this;
    }

    /** Removes any number of 'Element' / 'HTMLElement' from self.contents() or self.children */
    remove(/* any number of comma separated elements to remove */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];

            // Attempt to remove element from contents(), then try to remove from self.dom
            let removed = removeFromParent(this.contents(), element);
            if (!removed) removed = removeFromParent(this, element);
            if (!removed) {
                // // DEBUG: Could not remove element(s)
                // console.log(`Element.removeFromParent: Could not remove child!`);
            }
        }
        return this;
    }

    /********** CLASS / ID / NAME **********/

    setClass(className) {
        this.dom.className = className;
        return this;
    }

    addClass(/* any number of comma separated classes to add */) {
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
        const classArray = [...this.dom.classList]
        for (let i = 0; i < classArray.length; i++) {
            const className = classArray[i];
            if (className.toLowerCase().includes(substring)) return true;
        }
        return false;
    }

    removeClass(/* any number of comma separated classes to remove */) {
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

    /********** HTML **********/

    setAttribute(attrib, value) {
        this.dom.setAttribute(attrib, value);
    }

    setDisabled(value = true) {
        if (value) this.addClass('suey-disabled');
        else this.removeClass('suey-disabled');
        this.dom.disabled = value;
        return this;
    }

    /**  Makes this Element Selectable / Unselectable */
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

    /** Enable user focus */
    allowFocus() {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#using_tabindex
        // - turns on focusin / focusout events
        // - keyup event doesn't work without setting tabIndex
        this.dom.tabIndex = 0;
        // // OR
        // this.dom.setAttribute('tabindex', '0');
    }

    focus() {
        this.dom.focus();
    }

    blur() {
        this.dom.blur();
    }

    // // WARNING: Setting any of the following will delete children!
    // // SEE: https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
    // Order of content, from least to most:
    //      textContent:    All text contained by an element and all its children
    //      innerText:      All text contained by an element and all its children, affected by 'style'
    //      innerHtml:      All text (including html tags) that is contained by an element

    /** The textContent property represents the text content of the node and its descendants */
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }

    getTextContent() {
        return this.contents().dom.textContent;
    }

    /** The innerHTML returns all text, including html tags, that is contained by an element */
    setInnerHtml(value) {
        if (value === undefined || value === null) value = '';
        // NOTE: Attempt to sanitize html
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML#
        // https://github.com/WICG/sanitizer-api
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

    /********** CSS **********/

    setStyle(/* style, value, style, value, etc. */) {
        /***** ALL AT ONCE */
        // const styles = {};
        // let changed = false;

        // // Parse existing inline style string to object
        // let styleText = this.dom.getAttribute('style');
        // let regex = /\s*([a-z\-]+)\s*:\s*((?:[^;]*url\(.*?\)[^;]*|[^;]*)*)\s*(?:;|$)/gi;
        // let match;
        // while (match = regex.exec(styleText)) styles[match[1]] = match[2].trim();

        // // Update new values
        // for (let i = 0, l = arguments.length; i < l; i += 2) {
        //     const style = arguments[i + 0].replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
        //     const value = arguments[i + 1];
        //     if (styles[style] !== value) {
        //         styles[style] = value;
        //         changed = true;
        //     }
        // }
        // if (!changed) return this;

        // // Rebuild style string
        // styleText = Object.entries(styles).map(([k, v]) => `${k}: ${v}`).join('; ');
        // this.dom.setAttribute('style', styleText);

        /***** ORIGINAL */
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.dom.style[style] = value;
        }
        return this;
    }

    setContentsStyle(/* style, value, style, value, etc. */) {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.contents().dom.style[style] = value;
        }
        return this;
    }

    /********** DOM **********/

    getLeft() {
        // return this.dom.left;
        return this.dom.getBoundingClientRect().left;
    }

    getTop() {
        // return this.dom.top;
        return this.dom.getBoundingClientRect().top;
    }

    getWidth() {
        // return this.dom.clientWidth;         // <-- does not include margin / border
        return this.dom.getBoundingClientRect().width;
    }

    getHeight() {
        // return this.dom.clientHeight;        // <-- does not include margin / border
        return this.dom.getBoundingClientRect().height;
    }

    /********** TRAVERSE **********/

    /** Applies a callback function to all Element children, recursively */
    traverse(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.children) {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].traverse(callback, true);
            }
        }
    }

}

export { Element };

/******************** ADD / REMOVE / CLEAR ********************/

function addToParent(parent, element) {
    if (!element) return;

    // Suey 'Element'
    if (element.isElement) {
        // Add node
        parent.dom.appendChild(element.dom);

        // Add to child array if not already there
        let hasIt = false;
        for (const child of parent.children) {
            if (child.dom.isSameNode(element.dom)) {
                hasIt = true;
                break;
            }
        }
        if (!hasIt) parent.children.push(element);

        // Set element parent
        element.parent = parent;

    // 'HTMLElement'
    } else {
        try {
            parent.dom.appendChild(element);
        } catch (error) {
            // REMOVE FAILED
        }
    }
}

// Clears 'Element' Children
function clearElementChildren(suey) {
    for (let i = 0; i < suey.children.length; i++) {
        const child = suey.children[i];
        clearChildren(child, true /* destroy event */);
    }
    suey.children.length = 0;
}

// Clears Dom Element Children
function clearDomChildren(dom) {
    if (!dom.children) return;
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        clearChildren(child, true /* destroy event */);
        try { dom.removeChild(child); } catch (error) { /* FAILED TO REMOVE */ }
    }
}

/* Clears all 'Element' children and/or 'HTMLElement' (dom) children from element */
function clearChildren(element, destroy = true) {
    if (!element) return;

    // Suey 'Element'
    if (element.isElement) {
        clearElementChildren(element);
        clearDomChildren(element.dom);

        // Destroy Event
        if (destroy && element.dom && element.dom.dispatchEvent) {
            element.dom.dispatchEvent(new Event('destroy'));
        }

    // 'HTMLElement'
    } else {
        clearDomChildren(element);

        // Destroy Event
        if (destroy && element && element.dispatchEvent) {
            element.dispatchEvent(new Event('destroy'));
        }
    }
}

/** Returns true if element was removed */
function removeFromParent(parent, element) {
    if (!parent) return;
    if (!element) return;

    // Suey 'Element'
    if (element.isElement && parent.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                parent.children.splice(i, 1);
                element.parent = undefined;
            }
        }
    }

    // Clear Children
    clearChildren(element);

    // Remove from Parent
    try {
        if (parent.isElement) {
            parent.dom.removeChild((element.isElement) ? element.dom : element);
        } else {
            parent.removeChild((element.isElement) ? element.dom : element);
        }
        return true;
    } catch (error) {
        return false; /* REMOVE FAILED */
    }
}

/******************** PROPERTIES ********************/

// Hyphenated style properties can be referenced via camelCase in JavaScript
// See: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties
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

/******************** EVENTS ********************/

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

/******************** REFERENCE ********************/

// 'blur'           Fires when element has lost focus (does not bubble, 'focusout' follows and does bubble)
// 'focus'          Fires when element has received focus (does not bubble, 'focusin' follows and does bubble)

// 'input'          Fires constantly as <input> <select> <textarea> value's are being changed.
// 'change'         Fires when <input> <select> <textarea> value's are done being modified.

// 'contextmenu'    Fires when user attempts to open context menu (typically right clicking mouse)

// 'dragstart', 'dragend'
// 'dragenter', 'dragover', 'dragleave'
// 'drop'
