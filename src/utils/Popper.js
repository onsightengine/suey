/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/
//
//  Popper
//      Determines proper layout within browser window to place pop up div
//
//  NOTES:
//      When seeking window width / height:
//          document.documentElement.clientHeight   // Returns height of <html> element
//          document.body.clientHeight              // Returns height of <body> element
//          window.innerHeight                      // Returns height of the window rather than height of the content
//
//      Different browsers could give different values for the sizes of the <html> and <body> elements.
//      The <html> element can either represent the window, or the entire page. The <body> element can either
//      be the same size as the html element, or the size of the content in the page. Best to use 'window'.
//
/////////////////////////////////////////////////////////////////////////////////////

import { Css } from './Css.js';

///// Constants

const EDGE_SPACE = 4;

///// Enumerations

/* Available as: Popper.ALIGN */
const ALIGN = {
    LEFT:       'left',
    CENTER:     'center',
    MIDDLE:     'center',
    RIGHT:      'right',
}

/* Available as: Popper.OVERFLOW */
const OVERFLOW = {
    LEFT:       'left',
    RIGHT:      'right',
}

/* Available as: Popper.POSITION */
const POSITION = {
    OVER:       'over',
    UNDER:      'under',
}

/////////////////////////////////////////////////////////////////////////////////////
/////   Popper
/////////////////////////////////////////////////////////////////////////////////////

/** Determines proper layout within browser window to place pop up div */
class Popper {

    //////////////////// Enums

    static get ALIGN() { return ALIGN; }
    static get OVERFLOW() { return OVERFLOW; }
    static get POSITION() { return POSITION; }

    //////////////////// Size

    static getLeft(dom) { return dom.getBoundingClientRect().left; }
    static getTop(dom) { return dom.getBoundingClientRect().top; }
    // static getWidth(dom) { return dom.getBoundingClientRect().width; }
    // static getHeight(dom) { return dom.getBoundingClientRect().height; }
    static getWidth(dom) { return dom.offsetWidth; }
    static getHeight(dom) { return dom.offsetHeight; }

    //////////////////// Pop!

    static popOver(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.OVER, align, offsetX, offsetY, overflow);
    }

    static popUnder(dom, parent, align = ALIGN.LEFT, offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        return Popper.popOverUnder(dom, parent, POSITION.UNDER, align, offsetX, offsetY, overflow);
    }

    /** Pops over or under, returns actual location after popping */
    static popOverUnder(dom, parent, overUnder = POSITION.UNDER, align = ALIGN.LEFT,
                        offsetX = 0, offsetY = 0, overflow = OVERFLOW.RIGHT) {
        let maxRight = window.innerWidth - EDGE_SPACE;
        let maxBottom = window.innerHeight - EDGE_SPACE;

        offsetX = (offsetX) ? parseInt(Css.toPx(offsetX), 10) : 0;
        offsetY = (offsetY) ? parseInt(Css.toPx(offsetY), 10) : 0;

        ///// Left, originally parent left (align === ALIGN.LEFT)

        let desiredLeft = Popper.getLeft(parent) + offsetX;

        // Check for other alignment options
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

        // Rightside adjust
        let rightSide = desiredLeft + Popper.getWidth(dom);
        if (rightSide > maxRight) desiredLeft -= (rightSide - maxRight);

        // Leftside adjust
        if (desiredLeft < EDGE_SPACE) desiredLeft = EDGE_SPACE;

        ///// Top

        let underTop = Popper.getTop(parent) + Popper.getHeight(parent) + offsetY;
        let overTop = Popper.getTop(parent) - Popper.getHeight(dom) - offsetY;

        // Check if outside of page bounds
        let bottomSide = underTop + Popper.getHeight(dom);
        if (bottomSide > maxBottom) overUnder = POSITION.OVER;
        if (overTop < EDGE_SPACE) overUnder = POSITION.UNDER;

        // Update position after checks
        let desiredTop = (overUnder === POSITION.UNDER) ? underTop : overTop;

        // Check if still hidden, adjust upward
        if (overUnder === POSITION.UNDER) {
            bottomSide = desiredTop + Popper.getHeight(dom);
            if (bottomSide > maxBottom) {
                desiredTop = maxBottom - Popper.getHeight(dom);
                if (desiredTop < EDGE_SPACE) desiredTop = EDGE_SPACE;
            }
        }

        ///// Set Location

        dom.style.left = Css.toPx(desiredLeft);
        dom.style.top = Css.toPx(desiredTop);

        return overUnder;
    }

}

export { Popper };
