/**
 * @description Osui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021 Stephens Nunnally
 * @source      https://github.com/scidian/osui
 */

//  ---CATEGORY---              ---NODE TYPE---         ---CLASS NAME---
//
//  CORE
//      Break                   br                      -
//      Canvas                  canvas                  -
//      Div                     div                     -
//      Element                 base class              -
//      Image                   img                     .osui-image
//      Span                    span                    -
//      Text                    span                    .osui-text
//
//  DATA
//      PropertyList            div                     .osui-property-list
//      TreeList                div                     .osui-tree-list
//
//  INPUT
//      Button                  button                  .osui-button
//      Checkbox                input['checkbox']       .osui-checkbox
//      Color                   input['color']          .osui-color-button
//      Dropdown                button                  .osui-dropdown, .osui-drop-arrow
//      NumberBox               input['number']         .osui-number
//      NumberScroll            input['number']         .osui-number-scroll
//      Slider                  input['range']          .osui-slider
//      TextArea                textarea                .osui-text-area
//      TextBox                 input['text']           .osui-text-box
//
//  LAYOUT
//      AbsoluteBox             div                     .osui-absolute-box
//      AssetBox                div                     .osui-asset-box
//      Docker                  div                     .osui-docker-left, .osui-docker-right
//      FlexBox                 div                     .osui-flex-box
//      FlexSpacer              span                    -
//      Row                     div                     .osui-row
//      ShadowBox               div                     .osui-shadow-box
//      VectorBox               div                     .osui-vector-box
//
//  MENU
//      Menu                    div                     .osui-menu, .osui-menu-show
//      MenuItem                div                     .osui-menu-item
//      MenuSeparator           div                     .osui-menu-separator
//      MenuShortcut            div                     .osui-menu-shortcut
//      ToolbarButton           button                  .osui-toolbar-button
//      ToolbarSeparator        div                     .osui-toolbar-separator
//      ToolbarSpacer           div                     .osui-toolbar-spacer
//
//  NODE
//      Graph                   div                     -- many --
//      Node                    div                     osui-node
//      NodeItem                div                     osui-node-item
//
//  PANELS
//      Panel                   div                     .osui-panel
//      Shrinkable              div                     .osui-shrinkable
//      Tabbed                  div                     .osui-tabbed, .osui-tab-button
//      Titled                  div                     .osui-titled
//      Window                  div                     .osui-window
//

/***** CONSTANTS *****/

export * from './constants.js';

export { ALIGN, OVERFLOW, POSITION } from './utils/Popper.js';

/***** UTILS *****/

export { ColorScheme } from './utils/ColorScheme.js';
export { Css } from './utils/Css.js';
export { Interaction } from './utils/Interaction.js';
export { Iris } from './utils/Iris.js';
export { Popper } from './utils/Popper.js';
export { Signal } from './utils/Signal.js';
export { Utils } from './utils/Utils.js';

import { tooltipper } from './utils/Tooltipper.js';
export { tooltipper } from './utils/Tooltipper.js';

/***** WIDGETS *****/

// Little Property Gui
export { Gooey } from './Gooey.js';

// Core
export { Break } from './core/Break.js';
export { Canvas } from './core/Canvas.js';
export { Div } from './core/Div.js';
export { Element } from './core/Element.js';
export { Image } from './core/Image.js';
export { Span } from './core/Span.js';
export { Text } from './core/Text.js';

// Data
export { PropertyList } from './data/PropertyList.js';
export { TreeList } from './data/TreeList.js';

// Inputs
export { Button } from './input/Button.js';
export { Checkbox } from './input/Checkbox.js';
export { Color } from './input/Color.js';
export { Dropdown } from './input/Dropdown.js';
export { NumberBox } from './input/Number.js';
export { NumberScroll } from './input/Number.js';
export { Slider } from './input/Slider.js';
export { TextArea } from './input/TextArea.js';
export { TextBox } from './input/TextBox.js';

// Layout
export { AbsoluteBox } from './layout/AbsoluteBox.js';
export { AssetBox } from './layout/AssetBox.js';
export { Docker } from './layout/Docker.js';
export { FlexBox } from './layout/FlexBox.js';
export { FlexSpacer } from './layout/FlexSpacer.js';
export { Row } from './layout/Row.js';
export { ShadowBox } from './layout/ShadowBox.js';
export { VectorBox } from './layout/VectorBox.js';

// Menu
export { Menu } from './menu/Menu.js';
export { MenuItem } from './menu/MenuItem.js';
export { MenuSeparator } from './menu/MenuSeparator.js';
export { MenuShortcut } from './menu/MenuShortcut.js';
export { ToolbarButton } from './menu/ToolbarButton.js';
export { ToolbarSeparator } from './menu/ToolbarSeparator.js';
export { ToolbarSpacer } from './menu/ToolbarSpacer.js';

// Node
export { Graph } from './node/Graph.js';
export { Node } from './node/Node.js';
export { NodeItem } from './node/NodeItem.js';

// Panels
export { Panel } from './panels/Panel.js';
export { Shrinkable } from './panels/Shrinkable.js';
export { Tabbed } from './panels/Tabbed.js';
export { Titled } from './panels/Titled.js';
export { Window } from './panels/Window.js';

// Enums
export { CLOSE_SIDES } from './utils/Interaction.js';
export { CORNERS } from './layout/Docker.js';
export { LEFT_SPACING } from './data/PropertyList.js';
export { PANEL_STYLES } from './panels/Panel.js';
export { TAB_SIDES } from './panels/Tabbed.js';

// CSS
import '../css/variables.css';
import '../css/core.css';
import '../css/inputs.css';
import '../css/layout.css';
import '../css/menu.css';
import '../css/panels.css';
import '../css/gooey.css';
import '../css/data.css';
import '../css/node.css';
import '../css/interactive.css';
import '../css/tooltip.css';
import '../css/options.css';
