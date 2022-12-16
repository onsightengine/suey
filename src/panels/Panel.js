/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

import { IMAGE_CLOSE } from '../constants.js';

///// Enumerations

export const PANEL_STYLES = {
    NONE:       'none',
    SIMPLE:     'simple',
    FANCY:      'fancy',
};

export const CLOSE_SIDES = {
    NONE:       'none',
    LEFT:		'left',
    RIGHT:		'right',
}

///// Class

class Panel extends Div {

    constructor(style = PANEL_STYLES.NONE) {
        super();
        this.setPointerEvents('auto');
        this.setClass('Panel');
        this.contents = function() { return this; }

        // Simple Panel Style
        if (style === PANEL_STYLES.SIMPLE) {
            this.addClass('SimplePanel');

        // Fancy Border Style
        } else if (style === PANEL_STYLES.FANCY) {
            this.addClass('FancyPanel');
            const outerBox =  new Panel().setClass('FancyPanelOuter');      // So we can give the border some padding
            const borderBox = new Panel().setClass('FancyPanelBorder');     // So we can give apply border
            const insideBox = new Panel().setClass('FancyPanelInside');     // Interior Panel
            borderBox.add(insideBox);
            outerBox.add(borderBox);
            this.add(outerBox);

            this.contents = function() { return insideBox; };               // Accessor for the inside panel
        }

        ///// Events

        // Disable Context Menu
        this.dom.addEventListener('contextmenu', function(event) { event.preventDefault(); });

    }

    makeClosable(closeSide = CLOSE_SIDES.LEFT, sizeScale = 1.1, offsetScale = 1.0) {
        const self = this;

        // Remove Close Button (if one was added)
        if (closeSide === CLOSE_SIDES.NONE) {
            if (! this.closeButton) return;
            this.dom.removeChild(this.closeButton.dom);
            this.closeButton = undefined;
            return;

        // Add Close Button
        } else if (closeSide === CLOSE_SIDES.LEFT || closeSide === CLOSE_SIDES.RIGHT) {

            const closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow();
            closeImageBox.setStyle(
                'width', '105%',
                'height', '105%',
                'transition', 'filter var(--menu-timing) ease-in-out',
            );

            this.closeButton = new Button();
            this.closeButton.dom.setAttribute('tooltip', 'Close Panel');
            this.closeButton.add(closeImageBox);

            this.closeButton.setStyle(
                'background', 'rgb(var(--background-dark))',
                'box-shadow', 'none',
                'border', 'none',
                'border-radius', '100%',
                'outline', 'none',
                'min-height', `${sizeScale}em`,
                'min-width', `${sizeScale}em`,
                'position', 'absolute',
                'opacity', '0',
                'overflow', 'visible',
                'transition', 'opacity var(--menu-timing) ease-in-out',
                'z-index', '1001', /* Close Button */
            );

            if (closeSide === CLOSE_SIDES.RIGHT) {
                this.closeButton.setStyle('right', `${sizeScale * offsetScale * 0.1}em`);
                this.closeButton.setStyle('top', `${sizeScale * offsetScale * 0.1}em`);
            } else {
                this.closeButton.setStyle('left', `${sizeScale * offsetScale * 0.1}em`);
                this.closeButton.setStyle('top', `${sizeScale * offsetScale * 0.1}em`);
            }

            function opacityTransparent() {
                self.closeButton.setStyle('opacity', '0');
            }

            function opacityGhost() {
                self.closeButton.setStyle('opacity', '1.0');
                closeImageBox.setStyle('filter', 'brightness(100%)');
            }

            function opacityOpaque() {
                self.closeButton.setStyle('opacity', '1.0');
                closeImageBox.setStyle('filter', 'brightness(125%)');
            }

            this.closeButton.onPointerEnter(opacityOpaque);
            this.closeButton.onPointerLeave(opacityGhost);
            this.onPointerEnter(opacityGhost);
            this.onPointerLeave(opacityTransparent);

            this.closeButton.onClick(function() {
                self.setDisplay('none');
                self.dom.dispatchEvent(new Event('closed'));
            });

            this.dom.appendChild(this.closeButton.dom);

            return;
        }
    }

}

export { Panel };
