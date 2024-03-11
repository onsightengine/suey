/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 */

//  ---CATEGORY---              ---NODE TYPE---         ---CLASS NAME---
//
//  CORE
//      Break                   br                      -
//      Canvas                  canvas                  -
//      Div                     div                     -
//      Element                 base class              -
//      Image                   img                     .suey-image
//      Span                    span                    -
//      Text                    span                    .suey-text
//
//  DATA
//      PropertyList            div                     .suey-property-list
//      TreeList                div                     .suey-tree-list
//
//  INPUT
//      Button                  button                  .suey-button
//      Checkbox                input['checkbox']       .suey-checkbox
//      Color                   input['color']          .suey-color-button
//      Dropdown                button                  .suey-dropdown, .suey-drop-arrow
//      NumberBox               input['number']         .suey-number
//      NumberScroll            input['number']         .suey-number-scroll
//      Slider                  input['range']          .suey-slider
//      TextArea                textarea                .suey-text-area
//      TextBox                 input['text']           .suey-text-box
//
//  LAYOUT
//      AbsoluteBox             div                     .suey-absolute-box
//      AssetBox                div                     .suey-asset-box
//      Docker                  div                     .suey-docker-left, .suey-docker-right
//      FlexBox                 div                     .suey-flex-box
//      FlexSpacer              span                    -
//      Row                     div                     .suey-row
//      ShadowBox               div                     .suey-shadow-box
//      VectorBox               div                     .suey-vector-box
//
//  MENU
//      Menu                    div                     .suey-menu, .suey-menu-show
//      MenuItem                div                     .suey-menu-item
//      MenuSeparator           div                     .suey-menu-separator
//      MenuShortcut            div                     .suey-menu-shortcut
//      ToolbarButton           button                  .suey-toolbar-button
//      ToolbarSeparator        div                     .suey-toolbar-separator
//      ToolbarSpacer           div                     .suey-toolbar-spacer
//
//  NODE
//      Graph                   div                     -- many --
//      Node                    div                     suey-node
//      NodeItem                div                     suey-node-item
//
//  PANELS
//      Panel                   div                     .suey-panel
//      Shrinkable              div                     .suey-shrinkable
//      Tabbed                  div                     .suey-tabbed, .suey-tab-button
//      Titled                  div                     .suey-titled
//      Window                  div                     .suey-window
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
export { Utils } from './utils/Utils.js';
export { Signal, SignalBinding } from './utils/Signal.js';

import { tooltipper } from './utils/Tooltipper.js';
export { tooltipper } from './utils/Tooltipper.js';

/***** WIDGETS *****/

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
