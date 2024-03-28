import { SignalBinding } from '../utils/Signal.js';

/**
 * Base Class of the Suey (Salinity Gui) Library
 * @class Element
 */
class Element {

    /**
     * Creates an instance of Element.
     * @param {HTMLElement} dom - The DOM element to wrap.
     * @memberof Element
     * @constructor
     */
    constructor(dom) {
        if (dom == null) {
            console.trace('Element.constructor: No HTMLElement provided!');
            dom = document.createElement('div');
        }
        const self = this;

        this.isElement = true;

        this.dom = dom;                                 // 'HTMLElement'
        this.name = undefined;                          // Object Name

        this.contents = function() { return self; };    // Inner 'Element' to be filled with other 'Element's
        this.children = [];                             // Holds 'Element' children (.add / .remove / .clearContents)
        this.parent = undefined;                        // Parent 'Element'
        this.slots = [];                                // Holds all 'SignalBinding' slots

        // Suey Reference
        let suey = null;

        // Dom Suey Access
        Object.defineProperties(this.dom, {
            suey: {
                get: function() { return suey; },
                set: function(element) { suey = element; },
            },
        });
        this.dom.suey = self;

        // ID Access
        Object.defineProperties(this, {
            id: {
                get: function() { return self.getID(); },
                set: function(value) { self.setID(value); }
            },
        });

        // Clean Slots
        this.on('destroy', function() {
            for (const slot of self.slots) {
                if (typeof slot.detach === 'function') slot.detach();
                if (typeof slot.destroy === 'function') slot.destroy();
            }
            self.slots.length = 0;
        });
    }

    /******************** DESTROY */

    /**
     * Removes all children DOM elements from this element.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    destroy() {
        clearChildren(this, true /* destroy event */);
        return this;
    }

    /******************** SIGNALS */

    /**
     * Adds a SignalBinding slot to the Element.
     * @param {SignalBinding} slot - The SignalBinding slot to add.
     * @memberof Element
     */
    addSlot(slot) {
        if (slot instanceof SignalBinding) {
            this.slots.push(slot);
        } else {
            console.warn(`Element.addSlot: '${this.name}' failed to add slot`, slot);
        }
    }

    /******************** CHILDREN */

    /**
     * Adds any number of 'Element' or 'HTMLElement' as children to the contents() of the Element.
     * @param {...(Element|HTMLElement)} elements - The elements to add.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    add(...elements) {
        for (const element of elements) {
            addToParent(this.contents(), element);
        }
        return this;
    }

    /**
     * Adds any number of 'Element' or 'HTMLElement' as children directly to the Element.
     * @param {...(Element|HTMLElement)} elements - The elements to add.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    addToSelf(...elements) {
        for (const element of elements) {
            addToParent(this, element);
        }
        return this;
    }

    /**
     * Removes all children 'Element' or 'HTMLElement' from the contents() of the Element.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    clearContents() {
        clearChildren(this.contents(), false /* destroy event */);
        return this;
    }

    /**
     * Removes a child element from the Element without destroying it.
     * @param {Element|HTMLElement} element - The element to detach.
     * @returns {Element|HTMLElement} The detached element.
     * @memberof Element
     */
    detach(element) {
        let removed = removeFromParent(this.contents(), element, false /* destroy? */);
        if (!removed) removed = removeFromParent(this, element, false /* destroy? */);
        return removed;
    }

    /**
     * Removes any number of 'Element' or 'HTMLElement' from the contents() or children of the Element.
     * @param {...(Element|HTMLElement)} elements - The elements to remove.
     * @returns {Element|HTMLElement|Array<Element|HTMLElement>} The removed element(s).
     * @memberof Element
     */
    remove(...elements) {
        const removedElements = [];
        for (const element of elements) {
            // Attempt to remove element from contents(), then try to remove from self.children
            let removed = removeFromParent(this.contents(), element);
            if (!removed) removed = removeFromParent(this, element);
            if (!removed) {
                // // DEBUG: Could not remove element(s)
                // console.log(`Element.removeFromParent: Could not remove child!`);
            }
            removedElements.push(removed);
        }
        if (removedElements.length === 0) return undefined;
        if (removedElements.length === 1) return removedElements[0];
        return removedElements;
    }

    /******************** CLASS / ID / NAME */

    /**
     * Sets the CSS class of the Element.
     * @param {string} className - The CSS class name.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setClass(className) {
        this.dom.className = className;
        return this;
    }

    /**
     * Adds CSS classes to the Element.
     * @param {...string} classNames - The CSS class names to add.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    addClass(...classNames) {
        for (const className of classNames) {
            this.dom.classList.add(className);
        }
        return this;
    }

    /**
     * Checks if the Element has a specific CSS class.
     * @param {string} className - The CSS class name to check.
     * @returns {boolean} True if the Element has the class, false otherwise.
     * @memberof Element
     */
    hasClass(className) {
        return this.dom.classList.contains(className);
    }

    /**
     * Checks if the Element has a CSS class that contains a specific substring.
     * @param {string} substring - The substring to search for in the CSS classes.
     * @returns {boolean} True if the Element has a class containing the substring, false otherwise.
     * @memberof Element
     */
    hasClassWithString(substring) {
        substring = String(substring).toLowerCase();
        const classArray = [ ...this.dom.classList ];
        for (let i = 0; i < classArray.length; i++) {
            const className = classArray[i];
            if (className.toLowerCase().includes(substring)) return true;
        }
        return false;
    }

    /**
     * Removes CSS classes from the Element.
     * @param {...string} classNames - The CSS class names to remove.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    removeClass(...classNames) {
        for (const className of classNames) {
            this.dom.classList.remove(className);
        }
        return this;
    }

    /**
     * Sets the ID of the Element.
     * @param {string} id - The ID to set.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setID(id) {
        this.dom.id = id;
        if (this.name === undefined) this.name = id;
        return this;
    }

    /**
     * Gets the ID of the Element.
     * @returns {string} The ID of the Element.
     * @memberof Element
     */
    getID() {
        return this.dom.id;
    }

    /**
     * Sets the name of the Element.
     * @param {string} name - The name to set.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setName(name) {
        this.name = name;
        return this;
    }

    /**
     * Gets the name of the Element.
     * @returns {string} The name of the Element.
     * @memberof Element
     */
    getName() {
        return (this.name === undefined) ? 'No name' : this.name;
    }

    /******************** HTML */

    /**
     * Sets an attribute on the Element.
     * @param {string} attribute - The name of the attribute.
     * @param {string} value - The value of the attribute.
     * @memberof Element
     */
    setAttribute(attrib, value) {
        this.dom.setAttribute(attrib, value);
    }

    /**
     * Sets the disabled state of the Element.
     * @param {boolean} [value=true] - The disabled state.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setDisabled(value = true) {
        if (value) this.addClass('suey-disabled');
        else this.removeClass('suey-disabled');
        this.dom.disabled = value;
        return this;
    }

    /**
     * Makes the Element selectable or unselectable.
     * @param {boolean} allowSelection - True to make the Element selectable, false to make it unselectable.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    selectable(allowSelection) {
        if (allowSelection) this.removeClass('suey-unselectable');
        else this.addClass('suey-unselectable');
        return this;
    }

    /**
     * Hides the Element.
     * @param {boolean} [dispatchEvent=true] - Whether to dispatch the 'hidden' event.
     * @memberof Element
     */
    hide(dispatchEvent = true) {
        this.setStyle('display', 'none');
        if (dispatchEvent) this.dom.dispatchEvent(new Event('hidden'));
    }

    /**
     * Displays the Element.
     * @param {boolean} [dispatchEvent=true] - Whether to dispatch the 'displayed' event.
     * @memberof Element
     */
    display(dispatchEvent = true) {
        this.setStyle('display', '');
        if (dispatchEvent) this.dom.dispatchEvent(new Event('displayed'));
    }

    /**
     * Checks if the Element is displayed.
     * @returns {boolean} True if the Element is displayed, false otherwise.
     * @memberof Element
     */
    isDisplayed() {
        return getComputedStyle(this.dom).display != 'none';
    }

    /**
     * Checks if the Element is hidden.
     * @returns {boolean} True if the Element is hidden, false otherwise.
     * @memberof Element
     */
    isHidden() {
        return getComputedStyle(this.dom).display == 'none';
    }

    /**
     * Enables user focus on the Element.
     * @memberof Element
     */
    allowFocus() {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#using_tabindex
        // - turns on focusin / focusout events
        // - keyup event doesn't work without setting tabIndex
        this.dom.tabIndex = 0;
        // // OR
        // this.dom.setAttribute('tabindex', '0');
    }

    /**
     * Focuses the Element.
     * @memberof Element
     */
    focus() {
        this.dom.focus();
    }

    /**
     * Blurs the Element.
     * @memberof Element
     */
    blur() {
        this.dom.blur();
    }

    // // WARNING: Setting any of the following will delete children!
    // // SEE: https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
    // Order of content, from least to most:
    //      textContent:    All text contained by an element and all its children
    //      innerText:      All text contained by an element and all its children, affected by 'style'
    //      innerHtml:      All text (including html tags) that is contained by an element

    /**
     * Sets the text content of the Element.
     * @param {string} value - The text content to set.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }

    /**
     * Gets the text content of the Element.
     * @returns {string} The text content of the Element.
     * @memberof Element
     */
    getTextContent() {
        return this.contents().dom.textContent;
    }

    /**
     * Sets the inner text of the Element.
     * @param {string} value - The inner text to set.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setInnerText(value) {
        if (value != undefined) this.contents().dom.innerText = value;
        return this;
    }

    /**
     * Gets the inner text of the Element.
     * @returns {string} The inner text of the Element.
     * @memberof Element
     */
    getInnerText() {
        return this.contents().dom.innerText;
    }

    /**
     * Sets the inner HTML of the Element.
     * @param {string} value - The inner HTML to set.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
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

    /**
     * Gets the inner HTML of the Element.
     * @returns {string} The inner HTML of the Element.
     * @memberof Element
     */
    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }

    /******************** CSS */

    // CSS Properties, see: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties

    /**
     * Sets CSS styles on the Element.
     * @param {...(string|number)} styles - The CSS styles to set, as key-value pairs.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setStyle(/* style, value, style, value, etc. */) {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.dom.style[style] = value;
        }
        return this;
    }

    /**
     * Sets CSS styles on the contents() of the Element.
     * @param {...(string|number)} styles - The CSS styles to set, as key-value pairs.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    setContentsStyle(/* style, value, style, value, etc. */) {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.contents().dom.style[style] = value;
        }
        return this;
    }

    /******************** DOM */

    /**
     * Gets the left position of the Element.
     * @returns {number} The left position of the Element.
     * @memberof Element
     */
    getLeft() {
        return this.dom.getBoundingClientRect().left;
    }

    /**
     * Gets the top position of the Element.
     * @returns {number} The top position of the Element.
     * @memberof Element
     */
    getTop() {
        // return this.dom.top;
        return this.dom.getBoundingClientRect().top;
    }

    /**
     * Gets the width of the Element.
     * @returns {number} The width of the Element.
     * @memberof Element
     */
    getWidth() {
        // return this.dom.clientWidth;         // <-- does not include margin / border
        return this.dom.getBoundingClientRect().width;
    }

    /**
     * Gets the height of the Element.
     * @returns {number} The height of the Element.
     * @memberof Element
     */
    getHeight() {
        // return this.dom.clientHeight;        // <-- does not include margin / border
        return this.dom.getBoundingClientRect().height;
    }

    /**
     * Gets the position of the Element relative to its closest positioned ancestor.
     * @returns {{left: number, top: number}} The relative position of the Element.
     * @memberof Element
     */
    getRelativePosition() {
        const rect = this.dom.getBoundingClientRect();
        let offsetParent = this.dom.offsetParent;
        while (offsetParent && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = offsetParent.offsetParent;
        }

        if (!offsetParent) {
            return { left: rect.left, top: rect.top };
        }

        const parentRect = offsetParent.getBoundingClientRect();
        const relativeLeft = rect.left - parentRect.left;
        const relativeTop = rect.top - parentRect.top;
        return { left: relativeLeft, top: relativeTop };
    }

    /******************** TRAVERSE */

    /**
     * Applies a callback function to all Element children, recursively.
     * @param {function} callback - The callback function to apply.
     * @param {boolean} [applyToSelf=true] - Whether to apply the callback to the Element itself.
     * @memberof Element
     */
    traverse(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.children) {
            for (const child of this.children) {
                child.traverse(callback, true);
            }
        }
    }

    /**
     * Applies a callback function to all Element parents, recursively.
     * @param {function} callback - The callback function to apply.
     * @param {boolean} [applyToSelf=true] - Whether to apply the callback to the Element itself.
     * @memberof Element
     */
    traverseAncestors(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.parent) this.parent.traverseAncestors(callback, true);
    }

    /******************** EVENTS */

    // 'keyup', 'keydown'
    // 'pointerdown', 'pointermove', 'pointerup'
    // 'pointerenter', 'pointerleave', 'pointerout', 'pointerover', 'pointercancel'
    //
    // 'dragstart', 'dragend'
    // 'dragenter', 'dragover', 'dragleave'
    // 'drop'
    //
    // 'select'         Use special 'onSelect()' function that can be overridden
    // 'click'          Use special 'onClick()' function that can be overridden
    // 'dblclick'
    //
    // 'blur'           Fires when element has lost focus (does not bubble, 'focusout' follows and does bubble)
    // 'focus'          Fires when element has received focus (does not bubble, 'focusin' follows and does bubble)
    //
    // 'input'          Fires constantly as <input> <select> <textarea> value's are being changed.
    // 'change'         Fires when <input> <select> <textarea> value's are done being modified.
    // 'wheel'
    //
    // 'contextmenu'    Fires when user attempts to open context menu (typically right clicking mouse)
    //
    // 'displayed'      Element style 'display' is restored
    // 'hidden'         Element style 'display' set to 'none'
    //
    // 'destroy'        Element is being destroyed and prepped for garbage collection

    /**
     * Attaches an event listener to the Element.
     * @param {string} event - The event name.
     * @param {function} callback - The callback function to execute when the event is triggered.
     * @param {boolean} [once=false] - Whether the event should be triggered only once.
     * @returns {Element} The Element instance.
     * @memberof Element
     */
    on(event, callback, once = false) {
        if (typeof callback !== 'function') {
            console.warn(`${method} in ${this.name}: No callback function provided!`);
        } else {
            const eventName = event.toLowerCase();
            const eventHandler = callback.bind(this);
            const dom = this.dom;
            if (once || eventName === 'destroy') {
                dom.addEventListener(eventName, eventHandler, { once: true });
            } else {
                dom.addEventListener(eventName, eventHandler);
                dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler), { once: true });
            }
        }
        return this;
    }

} // end Element

// Add convenience methods for common events
const events = [
    'Click', 'Select',
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

export { Element };

/******************** INTERNAL ********************/

function addToParent(parent, element) {
    if (!element) return;
    if (!parent) return;

    // Check if already parent
    if (element.isElement) {
        if (parent.isElement && element.parent === parent) return;

        // Detach from current parent
        if (element.parent && element.parent.isElement) {
            removeFromParent(element.parent, element, false);
        }
    }

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

    if (element.isElement) element = element.dom;
    if (element && element.dispatchEvent) element.dispatchEvent(new Event('parentChanged'));
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

/** Returns dom element that was removed */
function removeFromParent(parent, element, destroy = true) {
    if (!parent) return undefined;
    if (!element) return undefined;

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
   if (destroy) clearChildren(element, true /* destroy */);

    // Remove from Parent
    try {
        if (parent.isElement) parent = parent.dom;
        const removed = parent.removeChild((element.isElement) ? element.dom : element);
        return (removed && removed.suey) ? removed.suey : removed;
    } catch (error) {
        return undefined; /* REMOVE FAILED */
    }
}
