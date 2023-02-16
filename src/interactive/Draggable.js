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
        let computed = getComputedStyle(dragElement);

        function roundNearest(x, increment = GRID_SIZE) {
            if (! element.snapToGrid || ! element.snapToGrid()) return x;
            return Math.ceil(x / increment) * increment;
        }

        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            downX = event.pageX;
            downY = event.pageY;
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
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            eventElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
            eventElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
            eventElement.style.cursor = 'inherit';
        }

        function onPointerMove(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            const scale = ((element && element.getScale) ? element.getScale() : 1);
            const diffX = (event.pageX - downX) * (1 / scale);
            const diffY = (event.pageY - downY) * (1 / scale);
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
