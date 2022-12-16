/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Config } from '../../config/Config.js';

import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Panel } from './Panel.js';

///// Enumerations

export const RESIZERS = {
    TOP:            'Top',
    BOTTOM:     	'Bottom',
    LEFT:       	'Left',
    RIGHT:			'Right',
    TOP_LEFT:		'TopLeft',
    TOP_RIGHT:		'TopRight',
    BOTTOM_LEFT:	'BottomLeft',
    BOTTOM_RIGHT:	'BottomRight',
};

///// Class

class Resizeable extends Panel {

    constructor(style) {
        super(style);
        const self = this;
        this.addClass('Resizeable');

        ///// Properties
        this.wantsWidth = 0;

        ///// Resizers
        this.resizer = {};
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            this.resizer[resizerName] = new Div().addClass('Resizer').addClass(className);
            this.add(this.resizer[resizerName]);
        }

        ///// Init Sizes
        this.setXSizes();
        this.setYSizes();

        ///// Refresh
        function windowRefreshCallback() {
            let width = parseFloat(Config.getKey(`resizeX/${self.getName()}`)) * Css.guiScale();
            let height = parseFloat(Config.getKey(`resizeY/${self.getName()}`)) * Css.guiScale();
            if (width === null || width === undefined || Number.isNaN(width)) width = self.defaultWidth;
            if (height === null || height === undefined || Number.isNaN(height)) height = self.defaultHeight;
            self.changeWidth(width);
            self.changeHeight(height);
            if (Config.getKey(`panels/show${self.getName()}`)) {
                if (self.isEmpty !== true || self.getName() === 'Inspector') self.setDisplay('');
            } else {
                self.setDisplay('none');
            }
        }
        signals.windowRefresh.add(windowRefreshCallback);
        this.dispose = () => { signals.windowRefresh.remove(windowRefreshCallback); }
    }

    changeWidth(width) {
        if (width !== null && width !== undefined && Number.isNaN(width) === false) {
            width = Math.min(Math.max(height, this.minWidth), this.maxWidth).toFixed(1);
            this.setWidth(Css.toEm(width));
            Config.setKey(`resizeX/${this.getName()}`, (width / Css.guiScale()).toFixed(3));
        }
    }

    changeHeight(height) {
        if (height !== null && height !== undefined && Number.isNaN(height) === false) {
            height = Math.min(Math.max(height, this.minHeight), this.maxHeight).toFixed(1);
            this.setHeight(Css.toEm(height));
            Config.setKey(`resizeY/${this.getName()}`, (height / Css.guiScale()).toFixed(3));
        }
    }

    setXSizes(start = null, min = 0, max = Infinity) {
        this.minWidth = min;
        this.maxWidth = max;
        this.defaultWidth = start;
    }

    setYSizes(start = null, min = 0, max = Infinity) {
        this.minHeight = min;
        this.maxHeight = max;
        this.defaultHeight = start;
    }

    toggleResize(position, enabled) {
        function onPointerDown(event) {
            if (event.isPrimary === false) return;
            this.downX = event.clientX;
            this.downY = event.clientY;
            this.downW = this.parent.getWidth();
            this.downH = this.parent.getHeight();
            this.dom.ownerDocument.addEventListener('pointermove', this._onPointerMove, false);
            this.dom.ownerDocument.addEventListener('pointerup', this._onPointerUp, false);
        }

        function onPointerUp(event) {
            if (event.isPrimary === false) return;
            this.dom.ownerDocument.removeEventListener('pointermove', this._onPointerMove);
            this.dom.ownerDocument.removeEventListener('pointerup', this._onPointerUp);
        }

        function onPointerMove(event) {
            if (event.isPrimary === false) return;

            let newWidth = this.downW;
            let newHeight = this.downH;
            let diffX = event.clientX - this.downX;
            let diffY = event.clientY - this.downY;

            // Handle resizing
            if (this.hasClassSubstring('Left')) newWidth = this.downW - diffX;
            if (this.hasClassSubstring('Right')) newWidth = this.downW + diffX;
            if (this.hasClassSubstring('Top')) newHeight = this.downH - diffY;
            if (this.hasClassSubstring('Bottom')) newHeight = this.downH + diffY;

            // Check Min / Max Sizes
            if (newWidth < this.parent.minWidth * Css.guiScale()) newWidth = this.parent.minWidth * Css.guiScale();
            if (newWidth > this.parent.maxWidth * Css.guiScale()) newWidth = this.parent.maxWidth * Css.guiScale();
            if (newHeight < this.parent.minHeight * Css.guiScale()) newHeight = this.parent.minHeight * Css.guiScale();
            if (newHeight > this.parent.maxHeight * Css.guiScale()) newHeight = this.parent.maxHeight * Css.guiScale();

            // Set Width
            if (this.downW !== newWidth) this.parent.changeWidth(newWidth);

            // Set Height

            // // TEMP: No vertical resizing for now...
            // if (this.downH !== newHeight) this.parent.changeHeight(newHeight);

            // Dispatch resize event
            if (window.signals) signals.windowResize.dispatch();
        }

        let resizer = this.resizer[position];
        if (enabled && resizer.resizeEnabled !== true) {
            if (resizer._onPointerDown === undefined) resizer._onPointerDown = onPointerDown.bind(resizer);
            if (resizer._onPointerMove === undefined) resizer._onPointerMove = onPointerMove.bind(resizer);
            if (resizer._onPointerUp === undefined) resizer._onPointerUp = onPointerUp.bind(resizer);
            resizer.dom.addEventListener('pointerdown', resizer._onPointerDown, false);
            resizer.setPointerEvents('auto');
        } else if (! enabled && resizer.resizeEnabled === true) {
            resizer.dom.removeEventListener('pointerdown', resizer._onPointerDown);
            resizer.setPointerEvents('none');
        }

        resizer.resizeEnabled = enabled;
        return this;
    }

}

export { Resizeable };
