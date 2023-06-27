import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

class ToolbarButton extends Button {

    constructor(innerHtml, position /* left, middle, right */) {
        super(innerHtml)
        this.setClass('osui-toolbar-button');
        this.setStyle('pointerEvents', 'all');

        switch (position) {
            case 'left': this.addClass('osui-button-left'); break;
            case 'middle': this.addClass('osui-button-middle'); break;
            case 'right': this.addClass('osui-button-right'); break;
        }

        const buttonBackground = new Div().addClass('osui-button-background');
        const buttonImageHolder = new ShadowBox();
        buttonImageHolder.setStyle('pointer-events', 'none');
        this.add(buttonBackground, buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
    }

}

export { ToolbarButton };
