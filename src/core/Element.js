/** Base Class of Osui, the Onsight Gui Library */
class Element {

    constructor(dom) {
        const self = this;

        this.isElement = true;

        this.dom = dom;                                 // HTML Element
        this.name = undefined;                          // Object Name

        this.contents = function() { return self; }     // Inner Osui Element to be filled with other elements
        this.children = [];                             // Holds Osui Children (.add / .remove / .clearContents)
    }

    /********** DESTROY **********/

    /** Removes all children DOM elements from this element */
    destroy() {
        clearChildren(this, true /* destroy event */);
        return this;
    }

    /********** CHILDREN **********/

    /** Adds to contents() any number of Osui Elements passed as arguments */
    add(/* any number of Elements to remove */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this.contents(), element);
        }
        return this;
    }

    addToSelf(/* any number of Elements to remove */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];
            addToParent(this, element);
        }
        return this;
    }

    /** Removes all children DOM elements from element's 'contents' only */
    clearContents() {
        clearChildren(this.contents(), false /* destroy event */);
        return this;
    }

    /** Removes any number of Elements or Dom Nodes passed as arguments from contents() or self children */
    remove(/* any number of Elements to remove */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];

            // Attempt to remove element from contents(), then try to remove from self.dom
            let removed = removeFromParent(this.contents(), element);
            if (!removed) removed = removeFromParent(this, element);
            if (!removed) console.log(`Element.removeFromParent: Could not remove child!`);
        }
        return this;
    }

    /********** CLASS / ID / NAME **********/

    setClass(className) {
        this.dom.className = className;
        return this;
    }

    addClass(/* any number of comma seperated classes to add */) {
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

    removeClass(/* any number of comma seperated classes to remove */) {
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

    setDisabled(value) {
        this.dom.disabled = value;
        return this;
    }

    /**  Makes this Element Selectable / Unselectable */
    selectable(allowSelection) {
        if (allowSelection) {
            this.removeClass('Unselectable');
        } else {
            this.addClass('Unselectable');
        }
        return this;
    }

    hide() {
        this.setDisplay('none');
        this.dom.dispatchEvent(new Event('hidden'));
    }

    display(display = '') {
        this.setDisplay(display);
        this.dom.dispatchEvent(new Event('displayed'));
    }

    focus() {
        this.dom.focus();
    }

    // // WARNING: Setting any of the following will delete children!
    //
    // 	Order of content, from least to most:
    // 		textContents:	All text contained by an element and all its children that are for formatting purposes only.
    // 		innerText:		All text contained by an element and all its child elements.
    // 		innerHtml:		All text, including html tags, that is contained by an element.
    //

    /** The innerText property represents the "rendered" text content of a node and its descendants. */
    getInnerText() {
        return this.contents().dom.innerText;
    }

    setInnerText(value) {
        if (value != undefined) this.contents().dom.innerText = value;
        return this;
    }

    /** The innerHTML returns all text, including html tags, that is contained by an element. */
    setInnerHtml(value) {
        if (value != undefined) this.contents().dom.innerHTML = value;
        return this;
    }

    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }

    /**
     * The textContent property represents the text content of the node and its descendants.
     * NOTE: textContent and innerText are easily confused. Basically, innerText only shows "human-readable" elements.
     */
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }

    getTextContent() {
        return this.contents().dom.textContent;
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

    // Osui Element
    if (element.isElement) {
        // Add node
        parent.dom.appendChild(element.dom);

        // Add to child array if not already there
        let hasIt = false;
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                hasIt = true;
                break;
            }
        }
        if (!hasIt) parent.children.push(element);

        // Set element parent
        element.parent = parent;

    // Html Node?
    } else {
        try {
            parent.dom.appendChild(element);
        } catch (exception) {
            // REMOVE FAILED
        }
    }
}

// Clears Element Children
function clearElementChildren(osui) {
    for (let i = 0; i < osui.children.length; i++) {
        const child = osui.children[i];
        clearChildren(child, true /* destroy event */);
    }
    osui.children.length = 0;
}

// Clears Dom Element Children
function clearDomChildren(dom) {
    if (!dom.children) return;
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        clearChildren(child, true /* destroy event */);
        try { dom.removeChild(child); } catch (e) { /* FAILED TO REMOVE */ }
    }
}

/* Clears all osui children / dom children from element */
function clearChildren(element, destroy = true) {
    if (!element) return;

    // Osui Element
    if (element.isElement) {
        clearElementChildren(element);
        clearDomChildren(element.dom);

        // 'destroy' event
        if (destroy && element.dom && element.dom.dispatchEvent) {
            element.dom.dispatchEvent(new Event('destroy'));
        }

    // Html Node?
    } else {
        clearDomChildren(element);

        // 'destroy' event
        if (destroy && element && element.dispatchEvent) {
            element.dispatchEvent(new Event('destroy'));
        }
    }
}

/** Returns true if element was removed */
function removeFromParent(parent, element) {
    if (!parent) return;
    if (!element) return;

    // Osui Element
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
    } catch (exception) {
        return false; /* REMOVE FAILED */
    }
}

/******************** PROPERTIES ********************/

// Hyphenated style properties can be referenced via camelCase in JavaScript
// See: http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSS2Properties
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
        const eventHandler = callback.bind(this);
        const dom = this.dom;
        dom.addEventListener(eventName, eventHandler);
        dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler), { once: true });
        return this;
    };

});

/******************** CAPTURE EVENTS ********************/

const captureEvents = [
    'PointerDown',
]

captureEvents.forEach(function(event) {
    const method = 'capture' + event;

    Element.prototype[method] = function(callback) {
        const eventName = event.toLowerCase();
        if (typeof callback === 'function') callback.bind(this);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (typeof callback === 'function') callback(event);
        }
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
