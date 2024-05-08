import { Keyboard } from '../input/Keyboard.js';
import { Pointer } from '../input/Pointer.js';

class EditorControls {

    constructor(renderer) {

        // Pointer / Keyboard Input Handlers
        this.pointer = renderer.pointer;
        this.keyboard = renderer.keyboard;

    }

    update() {




    }

}

export { EditorControls };
