/**
 * Color Reference(s)
 * Triadic / RYB       https://paletton.com
 * Material Palette    https://material.io/design/color/the-color-system.html
 */

import { BACKGROUNDS, TRAIT } from '../constants.js';
import { Css } from './Css.js';
import { Iris } from './Iris.js';

const _clr = new Iris();

const _icon = new Iris();
const _icon_light = new Iris();
const _icon_dark = new Iris();

const _complement = new Iris();
const _triadic1 = new Iris();
const _triadic2 = new Iris();
const _triadic3 = new Iris();
const _triadic4 = new Iris();
const _triadic5 = new Iris();
const _triadic6 = new Iris();

// Save state
let _background = BACKGROUNDS.DARK;
let _color = 0x00b4af; /* (0, 180, 175) - classic aqua */
let _tint = 0.0;
let _saturation = 0.0;

/** Handles scheming CSS for Osui */
class ColorScheme {

    /***** Set Background Style *****/

    static changeBackground(background) {
        if (background === undefined || background === null) return;
        _background = background;
        ColorScheme.updateCSS();
    }

    /***** Set Icon Color *****/

    static changeColor(color, tint, saturation) {
        if (color === undefined || color === null) return;

        _color = _clr.set(color).hex();
        _tint = (tint !== undefined) ? tint : _tint;
        _saturation = (saturation !== undefined) ? saturation : _saturation;

        _icon.set(color)
        _icon_light.copy(_icon).brighten();
        _icon_dark.copy(_icon).darken();
        _complement.copy(_icon).rybRotateHue(180).brighten(0.2);
        _triadic1.copy(_icon).rybRotateHue(120).brighten(0.2);
        _triadic2.copy(_complement).rybRotateHue(120).brighten(0.2);
        _triadic3.copy(_icon).rybRotateHue(90).brighten(0.2);
        _triadic4.copy(_complement).rybRotateHue(90).brighten(0.2);
        _triadic5.copy(_icon).rybRotateHue(150).brighten(0.2);
        _triadic6.copy(_complement).rybRotateHue(150).brighten(0.2);

        ColorScheme.updateCSS();
    }

    /***** Update CSS Variables *****/

    static updateCSS() {
        Css.setVariable('--shadow',             _clr.set(ColorScheme.color(TRAIT.SHADOW)).rgbString());
        Css.setVariable('--darkness',           _clr.set(ColorScheme.color(TRAIT.DARKNESS)).rgbString());
        Css.setVariable('--background-dark',    _clr.set(ColorScheme.color(TRAIT.BACKGROUND_DARK)).rgbString());
        Css.setVariable('--background-light',   _clr.set(ColorScheme.color(TRAIT.BACKGROUND_LIGHT)).rgbString());
        Css.setVariable('--button-dark',        _clr.set(ColorScheme.color(TRAIT.BUTTON_DARK)).rgbString());
        Css.setVariable('--button-light',       _clr.set(ColorScheme.color(TRAIT.BUTTON_LIGHT)).rgbString());

        Css.setVariable('--text-dark',          _clr.set(ColorScheme.color(TRAIT.TEXT_DARK)).rgbString());
        Css.setVariable('--text',               _clr.set(ColorScheme.color(TRAIT.TEXT)).rgbString());
        Css.setVariable('--text-light',         _clr.set(ColorScheme.color(TRAIT.TEXT_LIGHT)).rgbString());

        Css.setVariable('--midlight',           _clr.set(ColorScheme.color(TRAIT.MIDLIGHT)).rgbString());
        Css.setVariable('--darklight',          _clr.set(ColorScheme.color(TRAIT.DARKLIGHT)).rgbString());
        Css.setVariable('--highlight',          _clr.set(ColorScheme.color(TRAIT.HIGHLIGHT)).rgbString());

		Css.setVariable('--icon-dark',          _clr.set(ColorScheme.color(TRAIT.ICON_DARK)).rgbString());
        Css.setVariable('--icon',               _clr.set(ColorScheme.color(TRAIT.ICON)).rgbString());
        Css.setVariable('--icon-light',         _clr.set(ColorScheme.color(TRAIT.ICON_LIGHT)).rgbString());
        Css.setVariable('--complement',         _clr.set(ColorScheme.color(TRAIT.COMPLEMENT)).rgbString());
        Css.setVariable('--triadic1',           _clr.set(ColorScheme.color(TRAIT.TRIADIC1)).rgbString());
        Css.setVariable('--triadic2',           _clr.set(ColorScheme.color(TRAIT.TRIADIC2)).rgbString());
        Css.setVariable('--triadic3',           _clr.set(ColorScheme.color(TRAIT.TRIADIC3)).rgbString());
        Css.setVariable('--triadic4',           _clr.set(ColorScheme.color(TRAIT.TRIADIC4)).rgbString());
        Css.setVariable('--triadic5',           _clr.set(ColorScheme.color(TRAIT.TRIADIC5)).rgbString());
        Css.setVariable('--triadic6',           _clr.set(ColorScheme.color(TRAIT.TRIADIC6)).rgbString());

        Css.setVariable('--invert',             (_background == BACKGROUNDS.LIGHT) ? '0' : '1');

        // Update necessary hue rotation degrees
        let startHue = _clr.set(0x00b4af).hue();
        let newHue = _clr.set(ColorScheme.color(TRAIT.ICON, true /* ignoreSaturation */)).hue();
        let diffHue = `${newHue - startHue}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }

    /***** Get Scheme Color *****/

    static color(guiColor, ignoreSaturation = false) {
        // Reset temp color
        _clr.set(0);

        // Set starting tint, lightness amounts
        let tint = _tint;
        let saturation = _saturation;
        let darkness = 0;
        let lightness = 0;

        switch (_background) {
            case BACKGROUNDS.DARK:      break;
            case BACKGROUNDS.MID:       tint *= 0.2;    lightness = 0.2;    break;
            case BACKGROUNDS.LIGHT:     break;
            case BACKGROUNDS.FADED:     tint *= 0.1;    lightness = 0.4;    break;
        }

        // Background Colors
        if (_background == BACKGROUNDS.LIGHT) {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr.set(140, 140, 140, 'rgb'); break;
                case TRAIT.BACKGROUND_DARK:     _clr.set(180, 180, 180, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr.set(190, 190, 190, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr.set(200, 200, 200, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr.set(210, 210, 210, 'rgb'); break;

                case TRAIT.TEXT_DARK:           _clr.set( 80,  80,  80, 'rgb'); break;
                case TRAIT.TEXT:                _clr.set( 50,  50,  50, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr.set( 25,  25,  25, 'rgb'); break;

                case TRAIT.DARKLIGHT:           _clr.set(230, 230, 230, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr.set(  4,   4,   4, 'rgb'); break;
            }
        } else {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr.set(  0,   0,   0, 'rgb'); tint = 0; break;
                case TRAIT.BACKGROUND_DARK:     _clr.set( 24,  24,  24, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr.set( 32,  32,  32, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr.set( 40,  40,  40, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr.set( 60,  60,  60, 'rgb'); break;

                case TRAIT.TEXT_DARK:           _clr.set(100, 100, 100, 'rgb'); break;
                case TRAIT.TEXT:                _clr.set(190, 190, 190, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr.set(225, 225, 225, 'rgb'); break;

                case TRAIT.DARKLIGHT:           _clr.set(  8,   8,   8, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr.set(255, 255, 255, 'rgb'); break;
            }
        }

        // Darkness
        if (guiColor === TRAIT.DARKNESS) {
            switch (_background) {
                case BACKGROUNDS.DARK:      _clr.set(  0,   0,   0, 'rgb');     break;
                case BACKGROUNDS.MID:       _clr.set( 64,  64,  64, 'rgb');     break;
                case BACKGROUNDS.LIGHT:     _clr.set(128, 128, 128, 'rgb');     break;
                case BACKGROUNDS.FADED:     _clr.set(  0,   0,   0, 'rgb');     break;
            }
        }

        // Icon Colors
        switch (guiColor) {
            case TRAIT.ICON_DARK:   _clr.copy(_icon_dark);  break;
            case TRAIT.ICON:        _clr.copy(_icon);       break;
            case TRAIT.ICON_LIGHT:  _clr.copy(_icon_light); break;
            case TRAIT.COMPLEMENT:  _clr.copy(_complement); break;
            case TRAIT.TRIADIC1:    _clr.copy(_triadic1);   break;
            case TRAIT.TRIADIC2:    _clr.copy(_triadic2);   break;
            case TRAIT.TRIADIC3:    _clr.copy(_triadic3);   break;
            case TRAIT.TRIADIC4:    _clr.copy(_triadic4);   break;
            case TRAIT.TRIADIC5:    _clr.copy(_triadic5);   break;
            case TRAIT.TRIADIC6:    _clr.copy(_triadic6);   break;
        }

        // Tint / Lightness / Saturation
        switch (guiColor) {
            case TRAIT.COMPLEMENT:
            case TRAIT.TRIADIC1:
            case TRAIT.TRIADIC2:
            case TRAIT.TRIADIC3:
            case TRAIT.TRIADIC4:
            case TRAIT.TRIADIC5:
            case TRAIT.TRIADIC6:
                saturation = 0.0;
                /* NO BREAK ON PURPOSE */
            case TRAIT.ICON_DARK:
            case TRAIT.ICON:
            case TRAIT.ICON_LIGHT:
                tint = 0;
                lightness = 0;
                break;
        }

        // Apply icon tint, brightness
        if (tint !== 0) _clr.mix(_icon, tint);
        if (lightness !== 0) _clr.brighten(lightness);
        if (darkness !== 0) _clr.darken(darkness);
        if (saturation !== 0 && ! ignoreSaturation) _clr.hslOffset(0, saturation, 0);

        // Return hex
        return _clr.hex();
    }

}

export { ColorScheme };
