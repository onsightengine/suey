import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { Iris } from '../utils/Iris.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { TRAIT } from '../constants.js';

const _clr = new Iris();

class ToolbarButton extends Button {

    constructor(buttonText, position = 'none' /* OR: 'left', 'middle', 'right' */) {
        super(buttonText, true /* closesMenus */);
        this.setClass('suey-toolbar-button');
        this.setStyle('pointerEvents', 'all');

        switch (position) {
            case 'left': this.addClass('suey-button-left'); break;
            case 'middle': this.addClass('suey-button-middle'); break;
            case 'right': this.addClass('suey-button-right'); break;
        }

        const buttonBackground = new Div().addClass('suey-button-background');
        this.add(buttonBackground);
        this.buttonBackground = buttonBackground;

        const buttonImageHolder = new ShadowBox().setStyle('pointer-events', 'none');
        this.add(buttonImageHolder);

        this.contents = function() { return buttonImageHolder };

        // Events
        this.on('pointerdown', (event) => { event.stopPropagation(); });
        this.on('pointerup', (event) => { event.stopPropagation(); });
    }

    setColor(color) {
        if (typeof color === 'string' && Object.values(TRAIT).includes(color)) color = `var(--${color})`;
        else color = _clr.set(color).rgbString();
        this.buttonBackground.setStyle('background-image', `linear-gradient(to bottom, rgba(${color}, 0.9), rgba(${color}, 0.65))`);
        return this;
    }

}

export { ToolbarButton };
