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

        /***** EVENTS *****/

        function onPointerDown(event) {
            event.stopPropagation();

        }

        function onPointerUp(event) {
            event.stopPropagation();

        }

        this.dom.addEventListener('pointerdown', onPointerDown);
        this.dom.addEventListener('pointerup', onPointerUp);

        this.dom.addEventListener('destroy', () => {
            self.dom.removeEventListener('pointerdown', onPointerDown);
            self.dom.removeEventListener('pointerup', onPointerUp);
        }, { once: true });
    }

    /******************** EVENT OVERRIDES ********************/

    onPointerDown(callback) {
        console.trace(`ToolbarButton.onPointerDown() deprecated, use onClick() instead, from: ${this.getName()}`);
        this.onClick(callback);
        return this;
    }

    onPointerUp(callback) {
        console.trace(`ToolbarButton.onPointerUp() deprecated, use onClick() instead, from: ${this.getName()}`);
        this.onClick(callback);
        return this;
    }

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
