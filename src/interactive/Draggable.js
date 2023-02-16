
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

        let downX, downY, rect;
        let startX, startY;
        let computed = getComputedStyle(dragElement);
        function onPointerDown(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            downX = event.pageX;
            downY = event.pageY;
            rect = dragElement.getBoundingClientRect();
            computed = getComputedStyle(dragElement);
            startX = parseFloat(computed.left);
            startY = parseFloat(computed.top);
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
            eventElement.style.cursor = 'auto';
        }

        function onPointerMove(event) {
            if (! event.isPrimary) return;
            event.stopPropagation();
            event.preventDefault();
            const diffX = (event.pageX - downX);
            const diffY = (event.pageY - downY);
            let newLeft = startX + diffX;
            let newTop = startY + diffY;
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
