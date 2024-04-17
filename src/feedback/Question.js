import { Button } from '../input/Button.js';
import { Div } from '../core/Div.js';
import { FlexSpacer } from '../layout/FlexSpacer.js';
import { Panel } from '../panels/Panel.js';
import { ShadowBox } from '../layout/ShadowBox.js';
import { Span } from '../core/Span.js';

import { BUTTON_TYPES } from '../constants.js';
import { IMAGE_INFO, IMAGE_QUESTION, IMAGE_WARNING, IMAGE_ERROR } from '../constants.js';
import { PANEL_STYLES } from '../constants.js';
import { QUESTION_TYPES } from '../constants.js';

class Question extends Panel {

    static buttonByValue(value) {
        for (const key in BUTTON_TYPES) {
            if (BUTTON_TYPES[key].value === value) return key;
        }
        return 'unknown';
    }

    constructor(type = QUESTION_TYPES.INFO, content = '', buttons = [ BUTTON_TYPES.OKAY ], defaultButton = BUTTON_TYPES.OKAY) {
        super({ style: PANEL_STYLES.FANCY });
        const self = this;
        this.addClass('suey-question');
        this.allowFocus();

        // Color Window Border
        switch (type) {
            case QUESTION_TYPES.INFO:       this.addClass('suey-question-info');        break;
            case QUESTION_TYPES.QUESTION:   this.addClass('suey-question-question');    break;
            case QUESTION_TYPES.WARNING:    this.addClass('suey-question-warning');     break;
            case QUESTION_TYPES.ERROR:      this.addClass('suey-question-error');       break;
        }

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

        // Dialog Image
        let dialogImage = undefined;
        let colorClass = '', buttonClass = '';
        switch (type) {
            case QUESTION_TYPES.INFO:
                dialogImage = new ShadowBox(IMAGE_INFO);
                colorClass = 'suey-blue-colorize';
                buttonClass = 'suey-blue-button';
                break;
            case QUESTION_TYPES.QUESTION:
                dialogImage = new ShadowBox(IMAGE_QUESTION);
                colorClass = 'suey-green-colorize';
                buttonClass = 'suey-green-button';
                break;
            case QUESTION_TYPES.WARNING:
                dialogImage = new ShadowBox(IMAGE_WARNING);
                colorClass = 'suey-yellow-colorize';
                buttonClass = 'suey-yellow-button';
                break;
            case QUESTION_TYPES.ERROR:
                dialogImage = new ShadowBox(IMAGE_ERROR);
                colorClass = 'suey-red-colorize';
                buttonClass = 'suey-red-button';
                break;
            default:
                dialogImage = new ShadowBox(IMAGE_INFO);
                colorClass = 'suey-icon-colorize';
        }
        dialogImage.firstImage().firstImage().addClass(colorClass);
        divLeft.add(dialogImage);

        // Content
        divTop.add(new Span(content).setStyle('margin', 'auto 0'));

        // Buttons
        buttons = Array.isArray(buttons) ? buttons : [];
        if (buttons.length === 0) buttons.push(BUTTON_TYPES.OKAY);
        divBottom.add(new FlexSpacer());
        let focusedButton = null, lastButton = null;
        for (const buttonInfo of buttons) {
            const text = buttonInfo.text ?? '???';
            const value = buttonInfo.value ?? 0;
            const button = new Button(text).addClass(buttonClass);
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
