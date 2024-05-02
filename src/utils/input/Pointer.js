import { Key } from './Key.js';
import { Vector2 } from '../../scene/math/Vector2.js';

class Pointer {

    static LEFT = 0;
    static MIDDLE = 1;
    static RIGHT = 2;
    static BACK = 3;
    static FORWARD = 4;

    constructor(element) {
        if (!element || !element.isElement) {
            console.error(`Pointer: No Suey Element was provided`);
            return;
        }
        const self = this;

        // Raw data
        this._keys = new Array(5);
        this._position = new Vector2(0, 0);
        this._positionUpdated = false;
        this._delta = new Vector2(0, 0);
        this._wheel = 0;
        this._wheelUpdated = false;
        this._doubleClicked = new Array(5);

        this.keys = new Array(5);               // pointer buttons states
        this.position = new Vector2(0, 0);      // position inside of the window (coordinates in window space)
        this.delta = new Vector2(0, 0);         // movement since the last update (coordinates in window space)
        this.wheel = 0;                         // scroll wheel movement since the last update
        this.doubleClicked = new Array(5);      // indicates a button of the pointer was double clicked
        this.pointerInside = false;

        // Initialize key instances
        for (let i = 0; i < 5; i++) {
            this._doubleClicked[i] = false;
            this.doubleClicked[i] = false;
            this._keys[i] = new Key();
            this.keys[i] = new Key();
        }

        // Updates
        function updatePosition(x, y, xDiff, yDiff) {
            if (element && element.dom) {
                const rect = element.dom.getBoundingClientRect();
                x -= rect.left;
                y -= rect.top;
            }
            self._position.set(x, y);
            self._delta.x += xDiff;
            self._delta.y += yDiff;
            self._positionUpdated = true;
        }
        function updateKey(button, action) {
            if (button > -1) self._keys[button].update(action);
        }

        // Touch
        const lastTouch = new Vector2(0, 0);
        element.on('touchstart', (event) => {
            const touch = event.touches[0];
            updatePosition(touch.clientX, touch.clientY, 0, 0);
            updateKey(Pointer.LEFT, Key.DOWN);
            lastTouch.set(touch.clientX, touch.clientY);
        });
        element.on('touchend', (event) => { updateKey(Pointer.LEFT, Key.UP); });
        element.on('touchcancel', (event) => { updateKey(Pointer.LEFT, Key.UP); });
        element.on('touchmove', (event) => {
            const touch = event.touches[0];
            updatePosition(touch.clientX, touch.clientY, touch.clientX - lastTouch.x, touch.clientY - lastTouch.y);
            lastTouch.set(touch.clientX, touch.clientY);
        });

        // Pointer
        element.on('pointermove', (event) => { updatePosition(event.clientX, event.clientY, event.movementX, event.movementY); });
        element.on('pointerdown', (event) => { updateKey(event.which - 1, Key.DOWN); });
        element.on('pointerup', (event) => { updateKey(event.which - 1, Key.UP); });
        element.on('pointerenter', () => { self.pointerInside = true; });
        element.on('pointerleave', () => { self.pointerInside = false; });

        // Wheel
        element.on('wheel', (event) => {
            self._wheel = event.deltaY;
            self._wheelUpdated = true;
        });

        // Drag
        element.on('dragstart', (event) => { updateKey(event.which - 1, Key.UP); });

        // Double Click
        element.on('dblclick', (event) => { self._doubleClicked[event.which - 1] = true; });
    }

    buttonPressed(button)       { return this.keys[button].pressed; }
    buttonDoubleClicked(button) { return this.doubleClicked[button] }
    buttonJustPressed(button)   { return this.keys[button].justPressed; }
    buttonJustReleased(button)  { return this.keys[button].justReleased; }

    insideDom() {
        return this.pointerInside;
    }

    update() {
        // Key States
        for (let i = 0; i < 5; i++) {
            // Pressed
            if (this._keys[i].justPressed && this.keys[i].justPressed) this._keys[i].justPressed = false;
            if (this._keys[i].justReleased && this.keys[i].justReleased) this._keys[i].justReleased = false;
            this.keys[i].set(this._keys[i].justPressed, this._keys[i].pressed, this._keys[i].justReleased);

            // Double Click
            if (this._doubleClicked[i] === true) {
                this.doubleClicked[i] = true;
                this._doubleClicked[i] = false;
            } else {
                this.doubleClicked[i] = false;
            }
        }

        // Wheel
        if (this._wheelUpdated) {
            this.wheel = this._wheel;
            this._wheelUpdated = false;
        } else {
            this.wheel = 0;
        }

        // Pointer Position
        if (this._positionUpdated) {
            this.delta.copy(this._delta);
            this.position.copy(this._position);
            this._delta.set(0,0);
            this._positionUpdated = false;
        } else {
            this.delta.x = 0;
            this.delta.y = 0;
        }
    }

}

export { Pointer };
