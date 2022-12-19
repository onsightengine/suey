/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/onui
//
///////////////////////////////////////////////////////////////////////////////////*/
//
//  Tooltipper
//      Singleton used to add tooltips to HTML elements
//
//  Additional Source(s)
//      MIT     https://github.com/codewithkyle/tooltipper - v1.1.4, Feb 9, 2022
//
/////////////////////////////////////////////////////////////////////////////////////

import { Div } from '../core/Div.js';

import { Css } from './Css.js';
import { Popper } from './Popper.js';

import { ALIGN } from './Popper.js';
import { TOOLTIP_Y_OFFSET } from '../constants.js';

///// Enumerations

const DEVICE_TYPE = {
    POINTER: 1,
    TOUCH: 2,
}

///// Local Variables

let _showTimer;

/////////////////////////////////////////////////////////////////////////////////////
/////   Tooltipper
/////////////////////////////////////////////////////////////////////////////////////

class Tooltipper {

    constructor() {

        // Tooltip
        const tooltip = new Div().setClass('Tooltip').setInnerHtml('');
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
        document.addEventListener('blur', hideTooltip, { capture: true, passive: true });

        function showTooltip(event) {
            const element = event.target;
            if (! element || ! (element instanceof HTMLElement)) return;
            if (! element.getAttribute('tooltip')) return;
            if (event instanceof FocusEvent && deviceType !== DEVICE_TYPE.POINTER) return;
            if (('TouchEvent' in window) && event instanceof TouchEvent) return;

            let text = element.getAttribute('tooltip');
            if (! text.length) return;

            clearTimeout(_showTimer);
            tooltip.removeClass('Updated')

            _showTimer = setTimeout(() => {
                tooltip.setInnerHtml(text);
                Popper.popUnder(tooltip.dom, element, ALIGN.CENTER, null, TOOLTIP_Y_OFFSET);
                tooltip.addClass('Updated');
            }, parseInt(Css.getVariable('--tooltip-delay')));
        }

        function hideTooltip(event) {
            const element = event.target;
            if (! element || ! (element instanceof HTMLElement)) return;
            if (! element.getAttribute('tooltip')) return;

            clearTimeout(_showTimer);
            tooltip.removeClass('Updated')
        }

    } // end ctor

}

/////////////////////////////////////////////////////////////////////////////////////
/////   Export as Singleton
/////////////////////////////////////////////////////////////////////////////////////

const tooltipper = new Tooltipper();

export { tooltipper };
