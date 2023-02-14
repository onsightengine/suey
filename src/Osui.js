/**
 * @description Osui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally
 * @source      https://github.com/onsightengine/osui
 */

//  ---CATEGORY---              ---NODE TYPE---         ---CLASS NAME---
//
//  CORE
//      Break                   br                      -
//      Div                     div                     -
//      Element                 base class              -
//      Image                   img                     .Image
//      Span                    span                    -
//      Text                    span                    .Text
//
//  DATA
//      TreeList                div                     .TreeList
//
//  INPUT
//      Button                  button                  .Button
//      Checkbox                input['checkbox']       .Checkbox
//      Color                   input['color']          .ColorButton
//      Dropdown                button                  .Dropdown, .DropArrow
//      NumberBox               input['number']         .NumberBox
//      NumberScroll            input['number']         .NumberScroll
//		Slider                  input['range']          .Slider
//      TextArea                textarea                .TextArea
//      TextBox                 input['text']           .TextBox
//
//  INTERACTIVE
//      CloseButton
//      Window                  div (.Panel)            .Window
//
//  LAYOUT
//      AbsoluteBox             div                     .AbsoluteBox
//		AssetBox                div                     .AssetBox, .MiniAssetBox
//      Docker                  div                     .DockerLeft, .DockerRight
//		FlexBox                 div                     -
//		FlexBreak               div                     -
//      FlexSpacer              span                    -
//      Row                     div                     .Row
//      ShadowBox               div                     .ShadowBox
//		VectorBox               div                     .VectorBox
//
//  MENU
//      Menu                    div                     .Menu / .MenuShow
//      MenuItem                div                     .MenuItem
//      MenuSeparator           div                     .MenuSeparator
//      MenuShortcut            div                     .MenuShortcut
//		ToolbarButton           button                  .ToolbarButton
//		ToolbarSeparator        div                     .ToolbarSeparator
//
//  PANELS
//      Panel                   div                     .Panel
//      ResizeFlex              div                     .ResizeFlex
//      Shrinkable              div                     .Shrinkable
//      Stacked                 div                     .Stacked
//      Tabbed                  div                     .Tabbed
//      - Tab                   span                    .Tab
//      Titled                  div                     .Titled

/***** CONSTANTS *****/

export * from './constants.js';

export { ALIGN, OVERFLOW, POSITION } from './utils/Popper.js';

/***** UTILS *****/

export { ColorScheme } from './utils/ColorScheme.js';
export { Css } from './utils/Css.js';
export { Iris } from './utils/Iris.js';
export { Html } from './utils/Html.js';
export { Popper } from './utils/Popper.js';

import { tooltipper } from './utils/Tooltipper.js';
export { tooltipper } from './utils/Tooltipper.js';

/***** WIDGETS *****/

// Little Property Gui
export { Gooey } from './Gooey.js';

// Core
export { Break } from './core/Break.js';
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

// Interactive
export { CloseButton } from './interactive/CloseButton.js';
export { TitleBar } from './interactive/TitleBar.js';
export { Window } from './interactive/Window.js';

// Layout
export { AbsoluteBox } from './layout/AbsoluteBox.js';
export { AssetBox } from './layout/AssetBox.js';
export { Docker } from './layout/Docker.js';
export { FlexBox } from './layout/FlexBox.js';
export { FlexBreak } from './layout/FlexBreak.js';
export { FlexSpacer } from './layout/FlexSpacer.js';
export { Row } from './layout/Row.js';
export { ShadowBox } from './layout/ShadowBox.js';
export { VectorBox } from './layout/VectorBox.js';

// Menu
export { Menu } from './menu/Menu.js';
export { MenuItem } from './menu/MenuItem.js';
export { MenuSeparator } from './menu/MenuSeperator.js';
export { MenuShortcut } from './menu/MenuShortcut.js';
export { ToolbarButton } from './menu/ToolbarButton.js';
export { ToolbarSeparator } from './menu/ToolbarSeparator.js';

// Node
export { Graph } from './node/Graph.js';
export { Node } from './node/Node.js';

// Panels
export { Panel } from './panels/Panel.js';
export { ResizeFlex } from './panels/ResizeFlex.js';
export { Shrinkable } from './panels/Shrinkable.js';
export { Tabbed } from './panels/Tabbed.js';
export { Titled } from './panels/Titled.js';

// Enums
export { CLOSE_SIDES } from './interactive/CloseButton.js';
export { CORNERS } from './layout/Docker.js';
export { PROPERTY_SIZE, LEFT_SPACING } from './data/PropertyList.js';
export { PANEL_STYLES } from './panels/Panel.js';
export { RESIZE_MODE } from './interactive/Window.js';
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
import '../css/interactive.css';
import '../css/tooltip.css';
