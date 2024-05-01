import { EventManager } from '../utils/EventManager.js';
import { Key } from './Key.js';
import { Vector2 } from '../math/Vector2.js';

class Pointer {

    static LEFT = 0;
    static MIDDLE = 1;
    static RIGHT = 2;
    static BACK = 3;
    static FORWARD = 4;

    constructor(domElement, canvas) {
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

        this.domElement = domElement ?? window;
        this.canvas = null;
        if (canvas) this.setCanvas(canvas);
        this.events = new EventManager();

        // Initialize key instances
        for (let i = 0; i < 5; i++) {
            this._doubleClicked[i] = false;
            this.doubleClicked[i] = false;
            this._keys[i] = new Key();
            this.keys[i] = new Key();
        }

        // Scroll Wheel
        this.events.add(this.domElement, 'wheel', function(event) {
            self._wheel = event.deltaY;
            self._wheelUpdated = true;
        });

        // Touch Start
        const lastTouch = new Vector2(0, 0);
        this.events.add(this.domElement, 'touchstart', function(event) {
            const touch = event.touches[0];
            self.updatePosition(touch.clientX, touch.clientY, 0, 0);
            self.updateKey(Pointer.LEFT, Key.DOWN);
            lastTouch.set(touch.clientX, touch.clientY);
        });

        // Touch End
        this.events.add(this.domElement, 'touchend', function(event) {
            self.updateKey(Pointer.LEFT, Key.UP);
        });

        // Touch Cancel
        this.events.add(this.domElement, 'touchcancel', function(event) {
            self.updateKey(Pointer.LEFT, Key.UP);
        });

        // Touch Move
        this.events.add(document.body, 'touchmove', function(event) {
            const touch = event.touches[0];
            self.updatePosition(touch.clientX, touch.clientY, touch.clientX - lastTouch.x, touch.clientY - lastTouch.y);
            lastTouch.set(touch.clientX, touch.clientY);
        });

        // Move
        this.events.add(this.domElement, 'mousemove', function(event) {
            self.updatePosition(event.clientX, event.clientY, event.movementX, event.movementY);
        });

        // Button Press
        this.events.add(this.domElement, 'mousedown', function(event) {
            self.updateKey(event.which - 1, Key.DOWN);
        });

        // Button Release
        this.events.add(this.domElement, 'mouseup', function(event) {
            self.updateKey(event.which - 1, Key.UP);
        });

        // Drag Start
        this.events.add(this.domElement, 'dragstart', function(event) {
            self.updateKey(event.which - 1, Key.UP);
        });

        // Double Click
        this.events.add(this.domElement, 'dblclick', function(event) {
            self._doubleClicked[event.which - 1] = true;
        });

        this.create();
    }

    dispose() {
        this.events.destroy();
    }

    create() {
        this.events.create();
    }

    setCanvas(element) {
        this.canvas = element;
        element.pointerInside = false;
        element.addEventListener('mouseenter', function() { this.pointerInside = true; });
        element.addEventListener('mouseleave', function() { this.pointerInside = false; });
    }

    insideCanvas() {
        if (!this.canvas) return false;
        return this.canvas.pointerInside;
    }

    updatePosition(x, y, xDiff, yDiff) {
        if (this.canvas) {
            const rect = this.canvas.getBoundingClientRect();
            x -= rect.left;
            y -= rect.top;
        }
        this._position.set(x, y);
        this._delta.x += xDiff;
        this._delta.y += yDiff;
        this._positionUpdated = true;
    }

    updateKey(button, action) {
        if (button > -1) this._keys[button].update(action);
    }

    buttonPressed(button) { return this.keys[button].pressed; }
    buttonDoubleClicked(button) { return this.doubleClicked[button] }
    buttonJustPressed(button) { return this.keys[button].justPressed; }
    buttonJustReleased(button) { return this.keys[button].justReleased; }

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
