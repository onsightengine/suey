/**
 * Color Reference(s)
 * Triadic / RYB        https://paletton.com
 * Material Palette     https://material.io/design/color/the-color-system.html
 */

import { ColorizeFilter } from './ColorizeFilter.js';
import { Css } from './Css.js';
import { Iris } from './Iris.js';

import { BACKGROUNDS, THEMES, TRAIT } from '../constants.js';

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
const DEFAULT_CLR = 0x00b4af; /* classic icon aqua */
let _background = BACKGROUNDS.DARK;
let _color = DEFAULT_CLR;
let _tint = 0.0;
let _saturation = 0.0;

/** Handles CSS for setting color schemes */
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
        _triadic5.copy(_icon).rybRotateHue(60).brighten(0.2);
        _triadic6.copy(_complement).rybRotateHue(60).brighten(0.2);

        ColorScheme.updateCSS();
    }

    /***** Update CSS Variables *****/

    static updateCSS() {
        // Update Trait Colors
        for (const key in TRAIT) {
            const guiColor = TRAIT[key];
            Css.setVariable(`--${guiColor}`, _clr.set(ColorScheme.color(guiColor)).rgbString());
        }

        // Update Tints
        Css.setVariable('--tint-icon', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.ICON)));
        Css.setVariable('--tint-complement', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.COMPLEMENT)));
        Css.setVariable('--tint-triadic1', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC1)));
        Css.setVariable('--tint-triadic2', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC2)));
        Css.setVariable('--tint-triadic3', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC3)));
        Css.setVariable('--tint-triadic4', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC4)));
        Css.setVariable('--tint-triadic5', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC5)));
        Css.setVariable('--tint-triadic6', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC6)));
        Css.setVariable('--tint-text', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TEXT)));

        // Update Light/Dark Value
        Css.setVariable('--bright', (_background == BACKGROUNDS.LIGHT) ? '0' : '1');

        // Update necessary hue rotation degrees
        const startHue = _clr.set(DEFAULT_CLR).hue();
        const newHue = _clr.set(ColorScheme.color(TRAIT.ICON, true /* ignoreSaturation */)).hue();
        const diffHue = `${newHue - startHue}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }

    /** Returns string of color keys and values */
    static toString() {
        const COLUMN_LENGTH = 20;
        let output = '';
        for (const key in TRAIT) {
            const guiColor = TRAIT[key];
            _clr.set(ColorScheme.color(guiColor));
            output += `${guiColor}`.padEnd(COLUMN_LENGTH, ' ');
            output += `${_clr.rgbString()}`.padEnd(COLUMN_LENGTH, ' ');
            output += `${_clr.hexString()}\n`;
        }
        return output;
    }

    /***** Get Scheme Color *****/

    static color(guiColor, ignoreSaturation = false) {
        // Reset temp color
        _clr.set(0);

        // No Valid Scheme Color
        if (guiColor == null) return _clr.hex();
        if (Object.values(TRAIT).includes(guiColor) === false) return _clr.set(guiColor).hex();

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

                case TRAIT.BLACKLIGHT:          _clr.set(255, 255, 255, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr.set(200, 200, 200, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr.set(  0,   0,   0, 'rgb'); break;
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

                case TRAIT.BLACKLIGHT:          _clr.set(  0,   0,   0, 'rgb'); lightness = 0; break;
                case TRAIT.DARKLIGHT:           _clr.set(  8,   8,   8, 'rgb'); lightness = 0; break;
                case TRAIT.MIDLIGHT:            _clr.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr.set(255, 255, 255, 'rgb'); break;
            }
            if (_background == BACKGROUNDS.MID && guiColor == TRAIT.DARKLIGHT) {
                _clr.set( 64,  64,  64, 'rgb');
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
        if (saturation !== 0 && !ignoreSaturation) _clr.hslOffset(0, saturation, 0);

        // Return hex
        return _clr.hex();
    }

}

ColorScheme.changeColor(THEMES.CLASSIC, 0, 0);

export { ColorScheme };
