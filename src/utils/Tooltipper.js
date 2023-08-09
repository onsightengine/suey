import { Div } from '../core/Div.js';
import { Css } from './Css.js';
import { Popper } from './Popper.js';

import { ALIGN } from './Popper.js';
import { TOOLTIP_Y_OFFSET } from '../constants.js';

const DEVICE_TYPE = {
    POINTER: 1,
    TOUCH: 2,
}

let _showTimer;

/** Singleton used to add tooltips to HTML elements */
class Tooltipper {

    constructor() {

        // Tooltip
        const tooltip = new Div().setClass('osui-tooltip');
        tooltip.setInnerHtml('');
        document.body.appendChild(tooltip.dom);

        // Device Type
        let deviceType = DEVICE_TYPE.POINTER;
        document.addEventListener('touchstart', () => deviceType = DEVICE_TYPE.TOUCH, { capture: true, passive: true });
        document.addEventListener('mousemove', () => deviceType = DEVICE_TYPE.POINTER, { capture: true, passive: true });

        // Standard events
        document.addEventListener('mouseenter', showTooltip, { capture: true, passive: true });
        // document.addEventListener('focus', showTooltip, { capture: true, passive: true });
        document.addEventListener('hidetooltip', hideTooltip, { capture: true, passive: true }); /* custom */
        document.addEventListener('mouseleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('dragleave', hideTooltip, { capture: true, passive: true });
        document.addEventListener('blur', hideTooltip, { capture: true, passive: true });

        function showTooltip(event) {
            const element = event.target;
            if (!element || !(element instanceof HTMLElement)) return;
            if (!element.getAttribute('tooltip')) return;
            if (event instanceof FocusEvent && deviceType !== DEVICE_TYPE.POINTER) return;
            if (('TouchEvent' in window) && event instanceof TouchEvent) return;

            let text = element.getAttribute('tooltip');
            if (!text.length) return;

            clearTimeout(_showTimer);
            tooltip.removeClass('osui-updated')

            _showTimer = setTimeout(() => {
                tooltip.setInnerHtml(text);
                Popper.popUnder(tooltip.dom, element, ALIGN.CENTER, null, TOOLTIP_Y_OFFSET);
                tooltip.addClass('osui-updated');
            }, parseInt(Css.getVariable('--tooltip-delay')));
        }

        function hideTooltip(event) {
            const element = event.target;
            if (!element || !(element instanceof HTMLElement)) return;
            if (!element.getAttribute('tooltip')) return;

            clearTimeout(_showTimer);
            tooltip.removeClass('osui-updated')
        }

    } // end ctor

}

// Export as Singleton
const tooltipper = new Tooltipper();
export { tooltipper };
