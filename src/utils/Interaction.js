// INTERACTION
//  addCloseButton()
//  bringToTop()
//  makeDraggable()
//  makeResizeable()
import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { GRID_SIZE, IMAGE_CLOSE, RESIZERS } from '../constants.js';

export const CLOSE_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
    BOTH:       'both',
    NONE:       'none',
}

const MOUSE_SLOP = 2;

class Interaction extends Button {

    static addCloseButton(closeElement, closeSide = CLOSE_SIDES.BOTH, offset = 0, scale = 1.3) {
        if (! closeElement || ! closeElement.isElement) return console.warn(`Interaction.closeButton: Missing element`);
        const button = new Button().setClass('CloseButton').addClass('PanelButton');
        const closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow().addClass('CloseImage');
        button.add(closeImageBox);
        button.dom.setAttribute('tooltip', 'Close Panel');
        button.setStyle(
            'min-height', `${scale}em`,
            'min-width', `${scale}em`,
        );
        const sideways = `${0.8 - ((scale + 0.28571) / 2) + offset}em`;
        button.setStyle('top', `${0.8 - ((scale + 0.28571) / 2)}em`);
        button.setStyle((closeSide === CLOSE_SIDES.LEFT) ? 'left' : 'right', sideways);

        if (closeSide === CLOSE_SIDES.BOTH) {
            let lastSide = CLOSE_SIDES.RIGHT;
            closeElement.dom.addEventListener('pointermove', function(event) {
                const rect = closeElement.dom.getBoundingClientRect();
                const middle = rect.left + (rect.width / 2);
                const x = event.pageX;
                let changeSide = CLOSE_SIDES.NONE;
                if (x > middle && lastSide !== CLOSE_SIDES.RIGHT) changeSide = CLOSE_SIDES.RIGHT;
                else if (x < middle && lastSide !== CLOSE_SIDES.LEFT) changeSide = CLOSE_SIDES.LEFT;
                if (changeSide !== CLOSE_SIDES.NONE) {
                    button.addClass('ItemHidden');
                    setTimeout(() => {
                        button.dom.style.removeProperty('left');
                        button.dom.style.removeProperty('right');
                        button.setStyle(changeSide, sideways);
                        button.removeClass('ItemHidden');
                    }, 100);
                    lastSide = changeSide;
                }
            });
        }

        button.dom.addEventListener('click', () => closeElement.hide());
        closeElement.dom.addEventListener('pointerenter', () => button.addClass('ItemShown'));
        closeElement.dom.addEventListener('pointerleave', () => button.removeClass('ItemShown'));
        closeElement.addToSelf(button);
    }

    /** Applies 'BringToTop' Class, ensures it is the only element with this special Class */
    static bringToTop(element, withClass = 'Panel') {
        const topElement = (element && element.isElement) ? element.dom : element;
        const panels = document.querySelectorAll(`.${withClass}`);
        panels.forEach(el => { if (el !== topElement) el.classList.remove('BringToTop'); });
        topElement.classList.add("BringToTop");
    }

    static makeDraggable(element, parent = element, limitToWindow = false, onDown = () => {}, onMove = () => {}) {
        const eventElement = (element && element.isElement) ? element.dom : element;
        const dragElement = (parent && parent.isElement) ? parent.dom : parent;
        let downX, downY, rect = {};
        let lastX, lastY;
        let computed = getComputedStyle(dragElement);
        let minDistance = 0;
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (! element.snapToGrid) return decimal;
            return Math.round(decimal / increment) * increment;
        }
        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            eventElement.focus();
            eventElement.setPointerCapture(event.pointerId);
            minDistance = 0;
            downX = event.pageX;
            downY = event.pageY;
            lastX = event.pageX;
            lastY = event.pageY;
            computed = getComputedStyle(dragElement);
            rect.left = parseFloat(computed.left);
            rect.top = parseFloat(computed.top);
            rect.width = parseFloat(computed.width);
            rect.height = parseFloat(computed.height);
            eventElement.ownerDocument.addEventListener('pointermove', onPointerMove);
            eventElement.ownerDocument.addEventListener('pointerup', onPointerUp);
            Interaction.bringToTop(dragElement);
            /* CUSTOM CALLBACK */
            onDown();
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            eventElement.releasePointerCapture(event.pointerId);
            eventElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
            eventElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
            eventElement.style.cursor = 'inherit';
        }
        function onPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.isTrusted) { /* not generated programmatically */
                lastX = event.pageX;
                lastY = event.pageY;
            }
            minDistance = Math.max(minDistance, Math.abs(downX - lastX));
            minDistance = Math.max(minDistance, Math.abs(downY - lastY));
            if (minDistance < MOUSE_SLOP) return;
            eventElement.style.cursor = 'move';
            const scale = ((element && element.getScale) ? element.getScale() : 1);
            const diffX = (lastX - downX) * (1 / scale);
            const diffY = (lastY - downY) * (1 / scale);
            let newLeft = roundNearest(rect.left + diffX);
            let newTop = roundNearest(rect.top + diffY);
            if (limitToWindow) {
                newLeft = Math.min(window.innerWidth - rect.width, newLeft);
                newTop = Math.min(window.innerHeight - rect.height, newTop);
                newLeft = Math.max(0, newLeft);
                newTop = Math.max(0, newTop);
            }
            dragElement.style.left = `${newLeft}px`;
            dragElement.style.top = `${newTop}px`;
            /* CUSTOM CALLBACK */
            onMove(diffX, diffY);
        }
        eventElement.addEventListener('pointerdown', onPointerDown);
    }

    static makeResizeable(resizeElement, addToElement = resizeElement, resizers = [], onDown = () => {}, onMove = () => {}) {
        if (! resizeElement || ! resizeElement.isElement) return console.warning('Resizeable.enable: ResizeElement not defined');
        if (! addToElement || ! addToElement.isElement) return console.warning('Resizeable.enable: AddToElement not defined');
        resizeElement.addClass('Resizeable');
        // Build
        const resizerDivs = {};
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            let downX, downY, lastX, lastY;
            function onPointerDown(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.setPointerCapture(event.pointerId);
                downX = event.pageX;
                downY = event.pageY;
                lastX = event.pageX;
                lastY = event.pageY;
                resizeElement.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
                resizeElement.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
                /* CUSTOM CALLBACK */
                onDown();
            }
            function onPointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                resizeElement.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
                resizeElement.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            }
            function onPointerMove(event) {
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
            resizer.dom.addEventListener('pointerdown', onPointerDown);
            resizerDivs[resizerName] = resizer;
            addToElement.addToSelf(resizer);
        }
        // Toggle
        const resizerEnabled = {};
        resizeElement.toggleResize = function(resizerName, enable = true) {
            if (! resizerName) return;
            resizerEnabled[resizerName] = enable;
            function toggleDisplay(element, display) {
                if (! element) return;
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
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            resizeElement.toggleResize(resizerName, resizers.includes(resizerName));
        }
    }

}

export { Interaction };
