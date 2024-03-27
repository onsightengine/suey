import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { ShadowBox } from '../layout/ShadowBox.js';

class ToolbarButton extends Button {

    constructor(buttonText, position /* left, middle, right */, addBackground = true, closesMenus = true) {
        super(buttonText)
        const self = this;
        this.setClass('suey-toolbar-button');
        this.setStyle('pointerEvents', 'all');

        this.closesMenus = closesMenus;

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

    /******************** EVENT OVERRIDES ********************/

    onClick(callback) {
        if (typeof callback !== 'function') return;
        const self = this;
        callback = callback.bind(self);
        const eventHandler = function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!self.hasClass('suey-disabled')) {
                callback(event);
                if (self.closesMenus) document.dispatchEvent(new Event('closemenu'));
            }
        };
        const dom = self.dom;
        dom.addEventListener('click', eventHandler);
        dom.addEventListener('destroy', () => { dom.removeEventListener('click', eventHandler); }, { once: true });
        return self;
    }

}

export { ToolbarButton };
