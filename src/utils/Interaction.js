// INTERACTION
//  addCloseButton()
//  addMaxButton()
//  makeDraggable()
//  makeResizeable()

import { Button } from '../input/Button.js';
import { Css } from './Css.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

import { GRID_SIZE, RESIZERS } from '../constants.js';
import { IMAGE_CLOSE, IMAGE_EXPAND } from '../constants.js';
import { MOUSE_SLOP_SMALL } from '../constants.js';

export const CLOSE_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    BOTH:       'both',
    NONE:       'none',
}

export const CORNER_BUTTONS = {
    CLOSE:      'close',
    MAX:        'max',
}

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
            /* CUSTOM CALLBACK */
            onDown();
        }
        function dragPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            eventElement.releasePointerCapture(event.pointerId);
            eventElement.ownerDocument.removeEventListener('pointermove', dragPointerMove);
            eventElement.ownerDocument.removeEventListener('pointerup', dragPointerUp);
            eventElement.style.cursor = 'inherit';
            /* CUSTOM CALLBACK */
            onUp();
        }
        function dragPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.isTrusted) { /* not generated programmatically */
                lastX = event.pageX;
                lastY = event.pageY;
            }
            const computed = getComputedStyle(dragElement);
            rect.width = parseFloat(computed.width);
            rect.height = parseFloat(computed.height);
            const xDiff = (startingRect.width - rect.width) / 2;
            const yDiff = 0; //(startingRect.height - rect.height) / 2;
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
                // // OPTION: Limit to Title Bar
                const titleHeight = parseInt(Css.toPx('3em'));
                newLeft = Math.min(window.innerWidth - (rect.width / 2), newLeft);
                newTop = Math.min(window.innerHeight - titleHeight, newTop);
                newLeft = Math.max(- (rect.width / 2), newLeft);
                newTop = Math.max(0, newTop);

                // // OPTION: Limit to Window
                // const titleHeight = parseInt(Css.toPx('4em'));
                // newLeft = Math.min(window.innerWidth - rect.width, newLeft);
                // newTop = Math.min(window.innerHeight - rect.height, newTop);
                // newLeft = Math.max(0, newLeft);
                // newTop = Math.max(0, newTop);
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
            /* CUSTOM CALLBACK */
            onMove(diffX, diffY);
        }
        eventElement.addEventListener('pointerdown', dragPointerDown);
    }

    static makeResizeable(resizeElement, addToElement = resizeElement, resizers = [], onDown = () => {}, onMove = () => {}, onUp = () => {}) {
        if (!resizeElement || !resizeElement.isElement) return console.warning('Resizeable.enable: ResizeElement not defined');
        if (!addToElement || !addToElement.isElement) return console.warning('Resizeable.enable: AddToElement not defined');
        resizeElement.addClass('suey-resizeable');
        // Build
        const resizerDivs = {};
        for (const key in RESIZERS) {
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
                /* CUSTOM CALLBACK */
                onDown();
            }
            function resizePointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                resizeElement.dom.ownerDocument.removeEventListener('pointermove', resizePointerMove);
                resizeElement.dom.ownerDocument.removeEventListener('pointerup', resizePointerUp);
                /* CUSTOM CALLBACK */
                onUp();
            }
            function resizePointerMove(event) {
                event.stopPropagation();
                event.preventDefault();
                if (event.isTrusted) { /* not generated programmatically */
                    lastX = event.pageX;
                    lastY = event.pageY;
                }
                const diffX = lastX - downX;
                const diffY = lastY - downY;
                /* CUSTOM CALLBACK */
                onMove(resizer, diffX, diffY);
            }
            resizer.dom.addEventListener('pointerdown', resizePointerDown);
            resizerDivs[resizerName] = resizer;
            addToElement.addToSelf(resizer);
        }
        // Toggle
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
        // Enable
        for (const key in RESIZERS) {
            const resizerName = RESIZERS[key];
            resizeElement.toggleResize(resizerName, resizers.includes(resizerName));
        }
    }

}

export { Interaction };
