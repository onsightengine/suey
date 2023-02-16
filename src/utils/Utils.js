// PARENT / CHILD
//  isChildOf()                      Check if 'element' is a descendant of 'possibleParent'
//  isChildOfElementWithClass()      Check if 'element' is a descendant of a parent element with class type 'className'
//  parentElementWithClass()         Finds and returns parent of 'element' with class 'className'
//  traverse()                       Applies a function to all children, recursively
// SCROLLING
//  parentScroller()                 Finds closest 'scrollable' parent
//  scrollIntoView()                 If element has a scorllable parent, scrolls element into view

import { Css } from './Css.js';

class Utils {

    /********** PARENT / CHILD **********/

    /** Check if 'element' is a descendant of 'possibleParent' */
    static isChildOf(element, possibleParent) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.isSameNode(possibleParent)) return true;
            parent = parent.parentElement;
        }
        return false;
    }

    /** Check if 'element' is a descendant of a parent element with class type 'className', i.e. 'Menu', 'Input', etc. */
    static isChildOfElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return true;
            parent = parent.parentElement;
        }
        return false;
    }

    /** Finds and returns parent of 'element' with class 'className' */
    static parentElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return parent;
            parent = parent.parentElement;
        }
        return undefined;
    }

    /** Applies a function to all HTML Element children, recursively */
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Utils.traverse(element.children[i], applyFunction, true);
        }
    }

    /********** SCROLLING **********/

    /** Finds closest 'scrollable' parent */
    static parentScroller(element) {
        if (! element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Utils.parentScroller(element.parentElement);
        }
    }

    /** If element has a scorllable parent, scrolls element into view */
    static scrollIntoView(element) {
        const parent = Utils.parentScroller(element);
        if (parent) {
            const onePixel = parseInt(Css.toPx('0.2em'));

            // Scroll Up
            if ((element.offsetTop - parent.offsetTop - onePixel) < parent.scrollTop) {
                parent.scrollTop = element.offsetTop - parent.offsetTop - onePixel;

            // Scroll Down
            } else if (element.offsetTop > (parent.scrollTop + parent.clientHeight + onePixel - parent.offsetTop)) {
                parent.scrollTop = element.offsetTop - parent.clientHeight + element.offsetHeight + onePixel - parent.offsetTop;
            }
        }
    }

}

export { Utils };
