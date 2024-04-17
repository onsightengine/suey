import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { FlexSpacer } from '../layout/FlexSpacer.js';
import { Panel } from '../panels/Panel.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { Span } from '../core/Span.js';

import { BUTTON_TYPES } from '../constants.js';
import { IMAGE_INFO, IMAGE_QUESTION, IMAGE_WARNING, IMAGE_ERROR } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { QUESTION_ICONS } from '../constants.js';

class Question extends Panel {

    static buttonByValue(value) {
        for (const key in BUTTON_TYPES) {
            if (BUTTON_TYPES[key].value === value) return key;
        }
        return 'unknown';
    }

    constructor({
        icon = QUESTION_ICONS.INFO,
        color,
        text = '',
        buttons = [ BUTTON_TYPES.OKAY ],
        defaultButton = BUTTON_TYPES.OKAY,
    } = {}) {
        super({ style: PANEL_STYLES.FANCY });
        const self = this;
        this.addClass('suey-question');
        this.allowFocus();

        // Single argument, text content only
        if (arguments.length > 0 && typeof arguments[0] === 'string') {
            text = arguments[0];
        }

        // Blackout
        this.blackout = new Div().addClass('suey-screen-blackout');

        // Build Inside Frames
        this.setContentsStyle(
            'flex-direction', 'row',
            'background-color', 'rgba(var(--background-light), 1.0)',
        );
        const divLeft = new Div().addClass('suey-question-left');
        const divRight = new Div().addClass('suey-question-right');
        this.add(divLeft, divRight);

        const divTop = new Div().addClass('suey-question-top');
        const divBottom = new Div().addClass('suey-question-bottom');
        divRight.add(divTop, divBottom);

        // Color Window Border
        if (!color) {
            if (icon === QUESTION_ICONS.INFO) color = 'icon';
            if (icon === QUESTION_ICONS.QUESTION) color = 'triadic2';
            if (icon === QUESTION_ICONS.WARNING) color = 'complement';
            if (icon === QUESTION_ICONS.ERROR) color = 'triadic1';
        }
        let colorClass = '', buttonClass = '';
        if (color && typeof color === 'string' && color != '') {
            this.addClass(`suey-question-color-${color}`);
            colorClass = `suey-${color}-colorize`;
            buttonClass = `suey-${color}-button`;
        }

        // Dialog Image
        if (icon === QUESTION_ICONS.INFO) icon = IMAGE_INFO;
        else if (icon === QUESTION_ICONS.QUESTION) icon = IMAGE_QUESTION;
        else if (icon === QUESTION_ICONS.WARNING) icon = IMAGE_WARNING;
        else if (icon === QUESTION_ICONS.ERROR) icon = IMAGE_ERROR;
        if (icon) {
            const dialogImage = new ShadowBox(icon);
            dialogImage.firstImage().firstImage().addClass(colorClass);
            divLeft.add(dialogImage);
        }

        // Content
        divTop.add(new Span(text).setStyle('margin', 'auto 0'));

        // Buttons
        buttons = Array.isArray(buttons) ? buttons : [];
        if (buttons.length === 0) buttons.push(BUTTON_TYPES.OKAY);
        divBottom.add(new FlexSpacer());
        let focusedButton = null, lastButton = null;
        for (const buttonInfo of buttons) {
            const value = buttonInfo.value ?? 0;
            const button = new Button(buttonInfo.text ?? '???').addClass(buttonClass);
            button.setStyle('margin', '0.1em');
            button.allowFocus();
            button.onPress(() => { self.answered(value); });
            button.dom.buttonValue = value;
            divBottom.add(button);
            if (defaultButton && defaultButton.value === value) focusedButton = button;
            lastButton = button;
        }
        if (!focusedButton) focusedButton = lastButton;
        this.focusedButton = focusedButton;
    }

    destroy() {
        this.blackout.destroy();
        super.destroy();
    }

    alert(callback = (value) => {}) {
        this.callback = callback;
        document.body.appendChild(this.blackout.dom);
        document.body.appendChild(this.dom);
        this.display();
        this.focus();
        this.focusedButton.focus();
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    answered(value) {
        document.body.removeChild(this.dom);
        document.body.removeChild(this.blackout.dom);
        if (this.callback && typeof this.callback === 'function') {
            this.callback(value);
        }
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
        this.callback = null;
        this.removeSelf();
    }

    handleKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            const buttons = Array.from(this.contents().dom.querySelectorAll('button'));
            if (buttons.length > 0) {
                const currentIndex = buttons.findIndex(button => button === document.activeElement);
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].focus();
            }
        }
        if (event.key === 'Escape') {
            event.preventDefault();
            const buttons = Array.from(this.contents().dom.querySelectorAll('button'));
            if (buttons.length > 0) {
                for (const button of buttons) if (button.buttonValue === BUTTON_TYPES.CANCEL.value) return this.answered(BUTTON_TYPES.CANCEL.value);
                for (const button of buttons) if (button.buttonValue === BUTTON_TYPES.NO.value) return this.answered(BUTTON_TYPES.NO.value);
                for (const button of buttons) if (button.buttonValue === BUTTON_TYPES.OKAY.value) return this.answered(BUTTON_TYPES.OKAY.value);
            }
        }
    }

}

export { Question };
