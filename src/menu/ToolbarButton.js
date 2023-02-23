import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

class ToolbarButton extends Button {

    constructor(innerHtml, position /* left, middle, right */) {
        super(innerHtml)
        this.setClass('ToolbarButton');

        switch (position) {
            case 'left': this.addClass('ButtonLeft'); break;
            case 'middle': this.addClass('ButtonMiddle'); break;
            case 'right': this.addClass('ButtonRight'); break;
        }

        const buttonBackground = new Div().addClass('ButtonBackground');
        const buttonImageHolder = new ShadowBox();
        this.add(buttonBackground, buttonImageHolder);
        this.contents = function() { return buttonImageHolder };
    }

}

export { ToolbarButton };
