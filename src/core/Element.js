/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/onui
//
///////////////////////////////////////////////////////////////////////////////////*/
//
//  Additional Source(s)
//      MIT     https://github.com/mrdoob/three.js/blob/master/editor/js/libs/ui.js
//
/////////////////////////////////////////////////////////////////////////////////////

/** Base Class of Onui, the Onsight Gui Library */
class Element {

    constructor(dom) {
        const self = this;

        this.isElement = true;

        this.dom = dom;                                 // HTML Element
        this.name = undefined;                          // Object Name

        this.contents = function() { return self; }     // Inner Onui Element to be filled with other elements
        this.children = [];                             // Holds Onui Children (.add / .remove / .clearContents)
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Children
    ////////////////////

    /** Adds to contents() any number of Onui Elements passed as arguments */
    add(/* any number of Elements to remove */) {
        for (let i = 0; i < arguments.length; i++) {
            const onuiElement = arguments[i];

            if (onuiElement instanceof Element && onuiElement.isElement) {
                // Add node
                this.contents().dom.appendChild(onuiElement.dom);

                // Add to child array if not already there
                let hasIt = false;
                for (let j = 0; j < this.contents().children.length; j++) {
                    if (this.contents().children[j].dom.isSameNode(onuiElement.dom)) {
                        hasIt = true;
                        break;
                    }
                }
                if (! hasIt) this.contents().children.push(onuiElement);

                // Set child to have this Element as parent
                onuiElement.parent = this;
            } else {
                console.error('Element.add:', onuiElement, 'is not an instance of Onui Element.');
            }
        }
        return this;
    }

    /** Returns true if element was removed */
    static remove(parent, element) {

        // Onui Element
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

        // Dom Node
        try {
            parent.dom.removeChild(element);
            Element.clear(element);
            return true;
        } catch (exception) {
            // REMOVE FAILED
        }

        return false;
    }

    /** Removes any number of Elements or Dom Nodes passed as arguments from contents() or base children */
    remove(/* any number of Elements to remove */) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i];

            // Attempt to remove Element from contents()
            let removed = Element.remove(this.contents(), element);

            // Didn't find in contents, attempt removal from base
            if (! removed) removed = Element.remove(this, element);

            // Could not remove
            if (! removed) console.log(`Element.remove: Could not remove child!`);
        }
        return this;
    }

    static clear(element, dispose = true) {
        if (! element) return;

        // Clears Dom Element children
        function clearDomChildren(dom) {
            if (! dom.children) return;
            for (let i = dom.children.length - 1; i >= 0; i--) {
                const child = dom.children[i];
                Element.clear(child);
                try { dom.removeChild(child); } catch (e) { /* FAILED TO REMOVE */ }
            }
        }

        // Onui Element
        if (element.isElement) {
            // Recursively remove all known Onui Children
            for (let i = 0; i < element.children.length; i++) {
                const child = element.children[i];
                Element.clear(child);
            }
            element.children.length = 0;

            // Recursively remove all known Html Elements
            clearDomChildren(element.dom);

        // Html Node
        } else {
            clearDomChildren(element);
        }

        // Call 'dispose' if implemented
        if (! dispose) return;
        if (element.dispose && typeof element.dispose === 'function') element.dispose();
        if (element.dom && element.dom.dispose && typeof element.dom.dispose === 'function') element.dom.dispose();
    }

    /** Removes all children DOM elements from element's 'contents' only */
    clearContents() {
        Element.clear(this.contents(), false /* dipose */);
        return this;
    }

    /** Removes all children DOM elements from this element */
    clear() {
        Element.clear(this);
        return this;
    }

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Classes / ID / Name
    ////////////////////

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

    /////////////////////////////////////////////////////////////////////////////////////
    /////   HTML
    ////////////////////

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

    ///// WARNING: Setting any of the following will delete children!
    //
    // 	Order of content, from least to most:
    // 		textContents:	All text contained by an element and all its children that are for formatting purposes only.
    // 		innerText:		All text contained by an element and all its child elements.
    // 		innerHtml:		All text, including html tags, that is contained by an element.
    //
    /////

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

    /////////////////////////////////////////////////////////////////////////////////////
    /////   CSS
    ////////////////////

    setStyle(/* style, value, style, value, etc. */) {
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

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Dom
    ////////////////////

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

    /////////////////////////////////////////////////////////////////////////////////////
    /////   Traverse
    ////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////
/////	Properties
/////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////
/////	Events
/////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////
/////  Reference
////////////////////

// 'blur'           Fires when element has lost focus (does not bubble, 'focusout' follows and does bubble)
// 'focus'          Fires when element has received focus (does not bubble, 'focusin' follows and does bubble)

// 'input'          Fires constantly as <input> <select> <textarea> value's are being changed.
// 'change'         Fired when <input> <select> <textarea> value's are done being modified.

// 'contextmenu'    Fires when user attempts to open context menu (typically right clicking mouse)

// 'dragstart', 'dragend'
// 'dragenter', 'dragover', 'dragleave'
// 'drop'

/////////////////////////////////////////////////////////////////////////////////////
/////	Exports
/////////////////////////////////////////////////////////////////////////////////////

export { Element };
