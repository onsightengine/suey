/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/suey
 */

/***** CONSTANTS *****/

export * from './constants.js';

/***** UTILS *****/

// Utils
export { Css } from './utils/Css.js';
export { Dom } from './utils/Dom.js';

// Utils, Color
export { ColorizeFilter } from './utils/color/ColorizeFilter.js';
export { ColorScheme } from './utils/color/ColorScheme.js';
export { Iris } from './utils/color/Iris.js';

// Utils, Input
export { Key } from './utils/input/Key.js';
export { Pointer } from './utils/input/Pointer.js';

/***** WIDGETS *****/

// Core
export { Element } from './core/Element.js';

// Scene
export * as Scene from './scene/Scene.js';

// CSS
import '../files/css/variables.css';
import '../files/css/core.css';
import '../files/css/inputs.css';
import '../files/css/layout.css';
import '../files/css/menu.css';
import '../files/css/panels.css';
import '../files/css/feedback.css';
import '../files/css/docking.css';
import '../files/css/gooey.css';
import '../files/css/data.css';
import '../files/css/node.css';
import '../files/css/interaction.css';
import '../files/css/tooltip.css';
import '../files/css/options.css';
