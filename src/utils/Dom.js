// SEARCH
//  findElementAt()                 Finds an Element at pointer position with class name
// PARENT / CHILD
//  childWithClass()                Finds and returns first child of 'element' with class 'className'
//  childrenWithClass()             Finds and returns all children of 'element' with class 'className'
//  isChildOf()                     Check if 'element' is a descendant of 'possibleParent'
//  isChildOfElementWithClass()     Check if 'element' is a descendant of a parent element with class type 'className'
//  parentElementWithClass()        Finds and returns parent of 'element' with class 'className'
//  traverse()                      Applies a function to all children, recursively
// SCROLLING
//  parentScroller()                Finds closest 'scrollable' parent
//  scrollIntoView()                If element has a scorllable parent, scrolls element into view

import { Css } from './Css.js';

/** Hierarchy helper functions that work with SueyElements or HTMLElements */
class Dom {

    /********** SEARCH **********/

    /** Finds an Element at pointer position with class name */
    static findElementAt(className, centerX, centerY) {
        const domElements = document.elementsFromPoint(centerX, centerY);
        for (const dom of domElements) {
            if (dom.classList.contains(className)) return dom.suey ?? dom;
        }
        return null;
    }

    /********** PARENT / CHILD **********/

    /** Finds and returns first child of 'element' with class 'className' */
    static childWithClass(element, className, recursive = true) {
        if (element.isElement && element.dom) element = element.dom;
        const queue = [ element ];
        while (queue.length > 0) {
            const currentElement = queue.shift();
            for (const child of currentElement.children) {
                if (child.classList.contains(className)) return child.suey ?? child;
                if (recursive) queue.push(child);
            }
        }
        return null;
    }

    /** Finds and returns all children of 'element' with class 'className' */
    static childrenWithClass(element, className, recursive = true, searchChildenOfTarget = true) {
        if (element.isElement && element.dom) element = element.dom;
        const children = [];
        const queue = [ element ];
        while (queue.length > 0) {
            const currentElement = queue.shift();
            for (const child of currentElement.children) {
                if (child.classList.contains(className)) {
                    children.push(child.suey ?? child);
                    if (recursive && searchChildenOfTarget) queue.push(child);
                } else {
                    if (recursive) queue.push(child);
                }
            }
        }
        return children;
    }

    /** Check if 'element' is a descendant of 'possibleParent' */
    static isChildOf(element, possibleParent) {
        if (element.isElement && element.dom) element = element.dom;
        if (possibleParent.isElement && possibleParent.dom) possibleParent = possibleParent.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.isSameNode(possibleParent)) return true;
            parent = parent.parentElement;
        }
        return false;
    }

    /** Check if 'element' is a descendant of a parent element with class type 'className', i.e. 'suey-menu', 'suey-text-box', etc. */
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
            if (parent.classList.contains(className)) return parent.suey ?? parent;
            parent = parent.parentElement;
        }
        return null;
    }

    /** Applies a function to all HTML Element children, recursively */
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Dom.traverse(element.children[i], applyFunction, true);
        }
    }

    /********** SCROLLING **********/

    /** Finds closest 'scrollable' parent */
    static parentScroller(element) {
        if (!element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Dom.parentScroller(element.parentElement);
        }
    }

    /** If element has a scorllable parent, scrolls element into view */
    static scrollIntoView(element) {
        const parent = Dom.parentScroller(element);
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

export { Dom };
