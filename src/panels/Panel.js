/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine/onui
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

        function opacityTransparent() {
            if (! self.closeButton) return;
            self.closeButton.setStyle('opacity', '0');
        }

        function opacityGhost() {
            if (! self.closeButton || ! self.closeImageBox) return;
            self.closeButton.setStyle('opacity', '1.0');
            self.closeImageBox.setStyle('filter', 'var(--drop-shadow) brightness(100%)');
        }

        function opacityOpaque() {
            if (! self.closeButton || ! self.closeImageBox) return;
            self.closeButton.setStyle('opacity', '1.0');
            self.closeImageBox.setStyle('filter', 'var(--drop-shadow) brightness(125%)');
        }

        function clickedClose() {
            self.setDisplay('none');
            self.dom.dispatchEvent(new Event('closed'));
        }

        // Add Close Button
        if (closeSide === CLOSE_SIDES.LEFT || closeSide === CLOSE_SIDES.RIGHT) {

            this.closeImageBox = new ShadowBox(IMAGE_CLOSE).noShadow();
            this.closeImageBox.setStyle(
                'width', '105%',
                'height', '105%',
                'transition', 'filter var(--menu-timing) ease-in-out',
            );

            this.closeButton = new Button();
            this.closeButton.dom.setAttribute('tooltip', 'Close Panel');
            this.closeButton.add(self.closeImageBox);

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

            this.closeButton.dom.addEventListener('pointerenter', opacityOpaque);
            this.closeButton.dom.addEventListener('pointerleave', opacityGhost);
            this.closeButton.dom.addEventListener('click', clickedClose);
            this.dom.addEventListener('pointerenter', opacityGhost);
            this.dom.addEventListener('pointerleave', opacityTransparent);

            this.dom.appendChild(this.closeButton.dom);
            return;

        // Remove Close Button (if one was added)
        } else if (closeSide === CLOSE_SIDES.NONE) {
            if (! this.closeButton) return;

            this.closeButton.dom.removeEventListener('pointerenter', opacityOpaque);
            this.closeButton.dom.removeEventListener('pointerleave', opacityGhost);
            this.closeButton.dom.removeEventListener('click', clickedClose);
            this.dom.removeEventListener('pointerenter', opacityGhost);
            this.dom.removeEventListener('pointerleave', opacityTransparent);

            this.remove(this.closeButton);
            this.closeButton = undefined;
            this.closeImageBox = undefined;
            return;
        }
    }

}

export { Panel };
