/********** GUI */

export const GRID_SIZE = 25;

export const MOUSE_CLICK = 500;         // milliseconds for "click" event
export const MOUSE_SLOP_SMALL = 2;
export const MOUSE_SLOP_LARGE = 5;

export const TOOLTIP_Y_OFFSET = '0.3em';

/********** COLOR SCHEME */

export const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
}

// Colors
export const THEMES = {
    CLASSIC:            0x00aacc,               // (  0, 170, 204)      classic (aqua)
    STEEL:              0x00c8c3,               // (  0, 200, 195)      light aqua (fully unsaturated)
    NAVY:               0x1a48cf,               // ( 26,  72, 207)      violet blue (navy)
    GRAPE:              0x960ef4,               // (150,  14, 244)      electric violet (purple)
    FLAMINGO:           0xff13ed,               // (255,  19, 237)      fuchsia (hot pink)
    RUST:               0xaf1c19,               // (175,  28,  25)      carnelian (dark red)
    CARROT:             0xfe7700,               // (254, 119,   0)      burnt orange
    COFFEE:             0xb16f1b,               // (177, 111,  27)      copper (brown)
    GOLDEN:             0xd1d855,               // (209, 216,  85)      faded yellow
    EMERALD:            0x1aca22,               // ( 26, 202,  34)      lime green (emerald)
    RANDOM:             -1,
};

export const TRAIT = {
    SHADOW:             'shadow',
    DARKNESS:           'darkness',

    BACKGROUND_DARK:    'background-dark',
    BACKGROUND_LIGHT:   'background-light',
    BUTTON_DARK:        'button-dark',
    BUTTON_LIGHT:       'button-light',

    TEXT_DARK:          'text-dark',
    TEXT:               'text',
    TEXT_LIGHT:         'text-light',

    BLACKLIGHT:         'blacklight',
    DARKLIGHT:          'darklight',
    MIDLIGHT:           'midlight',
    HIGHLIGHT:          'highlight',

    ICON_DARK:          'icon-dark',
    ICON:               'icon',                 // Main palette color
    ICON_LIGHT:         'icon-light',
    COMPLEMENT:         'complement',           // Complimentary (opposite / icon shifted 180°) color
    TRIADIC1:           'triadic1',             // Triadic color 1 (icon shifted 120°)
    TRIADIC2:           'triadic2',             // Triadic color 2 (complement shifted 120°)
    TRIADIC3:           'triadic3',             // Triadic color 3 (icon shifted 90°)
    TRIADIC4:           'triadic4',             // Triadic color 4 (complement shifted 90°)
    TRIADIC5:           'triadic5',             // Triadic color 5 (icon shifted 60°)
    TRIADIC6:           'triadic6',             // Triadic color 6 (complement shifted 60°)
};

/********** PANELS */

export const PANEL_STYLES = {
    NONE:           'none',
    SIMPLE:         'simple',
    FANCY:          'fancy',
};

export const LEFT_SPACING = {
    TABS:           'tabs',
    NORMAL:         'normal',
};

/********** INTERACTION */

export const CLOSE_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    BOTH:           'both',
    NONE:           'none',
};

export const CORNER_BUTTONS = {
    CLOSE:          'close',
    MAX:            'max',
};

/********** DOCKING */

export const DOCK_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    TOP:            'top',
    BOTTOM:         'bottom',
};

export const RESIZERS = {
    // ALL:         'all',
    TOP:            'top',
    BOTTOM:         'bottom',
    LEFT:           'left',
    RIGHT:          'right',
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};

export const TAB_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    TOP:            'top',
    BOTTOM:         'bottom',
};

/********** FEEDBACK */

export const QUESTION_ICONS = {
    QUESTION:       'question',
    INFO:           'info',
    ERROR:          'error',
    WARNING:        'warning',
};

export const QUESTION_COLORS = {
    ICON:           'icon',
    COMPLEMENT:     'complement',
    TRIADIC1:       'triadic1',
    TRIADIC2:       'triadic2',
    TRIADIC3:       'triadic3',
    TRIADIC4:       'triadic4',
    BLUE:           'blue',
    RED:            'red',
    GREEN:          'green',
    YELLOW:         'yellow',
};

export const BUTTON_TYPES = {
    OKAY:           { text: 'Okay',     value: 0 },
    YES:            { text: 'Yes',      value: 1 },
    NO:             { text: 'No',       value: 2 },
    CANCEL:         { text: 'Cancel',   value: 3 },
};

/********** NODES */

export const GRAPH_LINE_TYPES = {
    STRAIGHT:       'straight',
    CURVE:          'curve',
    ZIGZAG:         'zigzag',
};

export const GRAPH_GRID_TYPES = {
    LINES:          'lines',
    DOTS:           'dots',
};

export const NODE_TYPES = {
    INPUT:          'input',
    OUTPUT:         'output',
};

/********** IMAGES */

import imageAdd from '../files/images/add.svg';
import imageCheck from '../files/images/check.svg';
import imageClose from '../files/images/close.svg';
import imageEmpty from '../files/images/empty.svg';
import imageExpand from '../files/images/expand.svg';
export const IMAGE_ADD = imageAdd;
export const IMAGE_CHECK = imageCheck;
export const IMAGE_CLOSE = imageClose;
export const IMAGE_EMPTY = imageEmpty;
export const IMAGE_EXPAND = imageExpand;

import imageQuestion from '../files/images/question/question.svg';
import imageInfo from '../files/images/question/info.svg';
import imageError from '../files/images/question/error.svg';
import imageWarning from '../files/images/question/warning.svg';
export const IMAGE_QUESTION = imageQuestion;
export const IMAGE_INFO = imageInfo;
export const IMAGE_ERROR = imageError;
export const IMAGE_WARNING = imageWarning;
