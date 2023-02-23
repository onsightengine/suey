import { Div } from '../core/Div.js';
import { RESIZERS } from '../constants.js';

class Resizeable {

    static enable(resizeElement, addToElement = resizeElement, resizers = [], onDown = () => {}, onMove = () => {}) {
        if (! resizeElement || ! resizeElement.isElement) return console.warning('Resizeable.enable: ResizeElement not defined');
        if (! addToElement || ! addToElement.isElement) return console.warning('Resizeable.enable: AddToElement not defined');

        // Build Resizers
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
                /* CUSTOM */
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
                /* CUSTOM */
                onMove(resizer, diffX, diffY);
            }

            resizer.dom.addEventListener('pointerdown', onPointerDown);
            resizerDivs[resizerName] = resizer;
            addToElement.addToSelf(resizer);
        }

        // Toggle Resize Function
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

        // Enable / Disable Resizers
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            resizeElement.toggleResize(resizerName, resizers.includes(resizerName));
        }

    }

}

export { Resizeable };
