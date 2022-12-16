/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import * as EDITOR from 'editor';

import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

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

    constructor(style = PANEL_STYLES.NONE, closeSide = CLOSE_SIDES.NONE) {
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

        // Closable?
        if (closeSide && closeSide !== CLOSE_SIDES.NONE) this.makeClosable();

        ///// Events

        // Disable Context Menu
        this.dom.addEventListener('contextmenu', function(event) { event.preventDefault(); });

    }

    makeClosable(closeSide = CLOSE_SIDES.LEFT) {
        if (this.isClosable) return;
        const self = this;

        const closeImageBox = new ShadowBox(`${EDITOR.FOLDER_MENU}close.svg`).noShadow();
        closeImageBox.setStyle(
            'width', '105%',
            'height', '105%',
            'transition', 'filter var(--menu-timing) ease-in-out',
        );

        const closeButton = new Button();
        closeButton.dom.setAttribute('tooltip', 'Close Panel');
        closeButton.add(closeImageBox);

        closeButton.setStyle(
            'background', 'rgb(var(--background-dark))',
            'box-shadow', 'none',
            'border', 'none',
            'border-radius', '100%',
            'outline', 'none',
            'min-height', '1.1em',
            'min-width', '1.1em',
            'position', 'absolute',
            'opacity', '0',
            'overflow', 'visible',
            'transition', 'opacity var(--menu-timing) ease-in-out',
            'z-index', '1001', /* Close Button */
        );

        if (closeSide === CLOSE_SIDES.RIGHT) {
            closeButton.setStyle('right', '0.1em');
            closeButton.setStyle('top', '0.1em');
        } else {
            closeButton.setStyle('left', '0.1em');
            closeButton.setStyle('top', '0.1em');
        }

        function opacityTransparent() {
            closeButton.setStyle('opacity', '0');
        }

        function opacityGhost() {
            closeButton.setStyle('opacity', '1.0');
            closeImageBox.setStyle('filter', 'brightness(100%)');
        }

        function opacityOpaque() {
            closeButton.setStyle('opacity', '1.0');
            closeImageBox.setStyle('filter', 'brightness(125%)');
        }

        closeButton.onPointerEnter(opacityOpaque);
        closeButton.onPointerLeave(opacityGhost);
        self.onPointerEnter(opacityGhost);
        self.onPointerLeave(opacityTransparent);

        closeButton.onClick(function() {
            self.setDisplay('none');
            self.dom.dispatchEvent(new Event('closed'));
        });

        this.dom.appendChild(closeButton.dom);
        this.isClosable = true;
    }

}

export { Panel };
