import imageCheck from '../files/images/check.svg';
import imageClose from '../files/images/close.svg';
import imageEmpty from '../files/images/empty.svg';
export const IMAGE_CHECK = imageCheck;
export const IMAGE_CLOSE = imageClose;
export const IMAGE_EMPTY = imageEmpty;

export const GRID_SIZE = 25;

export const TOOLTIP_Y_OFFSET = '0.3em';

export const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
}

export const TRAIT = {
    SHADOW:             'shadow',
    DARKNESS:           'darkness',

    BACKGROUND_DARK:    'background-dark',
    BACKGROUND_LIGHT:   'background-light',
    BUTTON_DARK:        'button-dark',
    BUTTON_LIGHT:       'button-light',

    DARKLIGHT:          'darklight',
    MIDLIGHT:           'midlight',
    HIGHLIGHT:          'highlight',

    TEXT_DARK:          'text-dark',
    TEXT:               'text',
    TEXT_LIGHT:         'text-light',

    ICON_DARK:          'icon-dark',
    ICON:               'icon',                 // Main palette color
    ICON_LIGHT:         'icon-light',
    COMPLEMENT:	        'complement',           // Complimentary (opposite) color
    TRIADIC1:           'triadic1',             // Triadic color 1 (icon shifted 120°)
    TRIADIC2:           'triadic2',             // Triadic color 2 (complement shifted 120°)
    TRIADIC3:           'triadic3',             // Triadic color 3 (icon shifted 90°)
    TRIADIC4:           'triadic4',             // Triadic color 4 (complement shifted 90°)
    TRIADIC5:           'triadic5',             // Triadic color 5 (icon shifted 150°)
    TRIADIC6:           'triadic6',             // Triadic color 6 (complement shifted 150°)
};

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

export const GRAPH_LINE_TYPES = {
    STRAIGHT:   'straight',
    CURVE:      'curve',
    ZIGZAG:     'zigzag',
};

export const GRAPH_GRID_TYPES = {
    LINES:      'lines',
    DOTS:       'dots',
};

export const NODE_TYPES = {
    INPUT:      'input',
    OUTPUT:     'output',
};
