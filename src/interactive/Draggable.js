import { GRID_SIZE } from '../constants.js';

class Draggable {

    /** Applies 'BringToTop' Class, ensures it is the only element with this special Class */
    static bringToTop(element, withClass = 'Panel') {
        const topElement = (element && element.isElement) ? element.dom : element;
        const panels = document.querySelectorAll(`.${withClass}`);
        panels.forEach(el => { if (el !== topElement) el.classList.remove('BringToTop'); });
        topElement.classList.add("BringToTop");
    }

    static enable(element, parent = element, limitToWindow = false) {
        const eventElement = (element && element.isElement) ? element.dom : element;
        const dragElement = (parent && parent.isElement) ? parent.dom : parent;

        let downX, downY, rect = {};
        let lastX, lastY;
        let computed = getComputedStyle(dragElement);

        function roundNearest(decimal, increment = GRID_SIZE) {
            if (! element.snapToGrid || ! element.snapToGrid()) return decimal;
            return Math.ceil(decimal / increment) * increment;
        }

        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            eventElement.focus();
            eventElement.setPointerCapture(event.pointerId);
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
            eventElement.style.cursor = 'move';
            Draggable.bringToTop(dragElement);
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
        }

        eventElement.addEventListener('pointerdown', onPointerDown);
    }

}

export { Draggable };
