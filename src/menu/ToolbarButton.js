import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

class ToolbarButton extends Button {

    constructor(buttonText, position /* left, middle, right */, addBackground = true, closesMenus = true) {
        super(buttonText, closesMenus);
        this.setClass('suey-toolbar-button');
        this.setStyle('pointerEvents', 'all');

        switch (position) {
            case 'left': this.addClass('suey-button-left'); break;
            case 'middle': this.addClass('suey-button-middle'); break;
            case 'right': this.addClass('suey-button-right'); break;
        }

        const buttonBackground = new Div().addClass('suey-button-background');
        if (addBackground) this.add(buttonBackground);

        const buttonImageHolder = new ShadowBox().setStyle('pointer-events', 'none');
        this.add(buttonImageHolder);

        this.contents = function() { return buttonImageHolder };

        // Events
        this.on('pointerdown', (event) => { event.stopPropagation(); });
        this.on('pointerup', (event) => { event.stopPropagation(); });
    }

}

export { ToolbarButton };
