/**
 * @description JS Signals
 * @about       Event broadcaster for JavaScript. Inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
 *
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @version     v1.0.2
 * @author      stevinz (module)
 * @source      https://github.com/stevinz/salinity
 *
 * @license     MIT - Copyright (c) 2012 Miller Medeiros
 * @version:    1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 * @author      Miller Medeiros
 * @source      https://github.com/millermedeiros/js-signals/
 */

/** Object that represents a binding between a Signal and a listener function */
class SignalBinding {

    active = true;      // {Boolean} If binding is active and should be executed
    params = null;      // {Array} Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`
    onceOnly = false;   // {Boolean} Call once then delete?

    constructor(signal, listener, onceOnly, priority = 0) {
        this.listener = listener;       // {Function} Handler function bound to the signal
        this.onceOnly = onceOnly;       // {Bool} If binding should be executed just once
        this.signal = signal;           // {Signal} Reference to Signal object that listener is currently bound to
        this.priority = priority;       // {Number} Priority level of the event listener (default = 0)
    }

    /**
     * Call listener passing arbitrary parameters.
     * If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue
     * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
     * @return {*} Value returned by the listener
     */
    execute(paramsArr) {
        let handlerReturn;
        let params;
        if (this.active && !!this.listener) {
            params = this.params ? this.params.concat(paramsArr) : paramsArr;
            handlerReturn = this.listener.apply(null, params);
            if (this.onceOnly) this.detach();
        }
        return handlerReturn;
    }

    /**
     * Detach binding from signal - alias to: mySignal.remove(myBinding.getListener());
     * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached
     */
    detach() {
        return this.isBound() ? this.signal.remove(this.listener) : null;
    }

    /**
     * @return {Boolean} `true` if binding is still bound to the signal and have a listener
     */
    isBound() {
        return (!!this.signal && !!this.listener);
    }

    /**
     * @return {boolean} If SignalBinding will only be executed once
     */
    isOnce() {
        return this.onceOnly;
    }

    /**
     * @return {Function} Handler function bound to the signal
     */
    getListener() {
        return this.listener;
    }

    /**
     * @return {Signal} Signal that listener is currently bound to
     */
    getSignal() {
        return this.signal;
    }

    /** Delete instance properties */
    destroy() {
        delete this.signal;
        delete this.listener;
    }

    /** @return {string} String representation of the object */
    toString() {
        return '[SignalBinding onceOnly:' + this.onceOnly +', isBound:'+ this.isBound() +', active:' + this.active + ']';
    }

}

/** Custom event broadcaster */
class Signal {

    VERSION = '1.0.2';

    active = true;          // Signal is active / should broadcast? (to stop propagation of a signal during listeners use `halt()`)
    memorize = false;       // Keep record of previously dispatched parameters and auto execute listener during `add()`/`addOnce()` if Signal was already dispatched before?
    shouldPropagate = true; // Internal, used for halting

    constructor() {
        this._bindings = []; /* Array of 'SignalBinding's */
        this._prevParams = null;
    }

    #registerListener(listener, onceOnly, priority) {
        let prevIndex = this.#indexOfListener(listener);
        let binding;

        if (prevIndex !== -1) {
            binding = this._bindings[prevIndex];
            if (binding.isOnce() !== onceOnly) {
                throw new Error('You cannot add' + (onceOnly ? '' : 'Once') +'() then add'+ (!onceOnly ? '' : 'Once') +'() the same listener without removing the relationship first');
            }
        } else {
            binding = new SignalBinding(this, listener, onceOnly, priority);
            // Add Binding
            let n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
            this._bindings.splice(n + 1, 0, binding);
        }

        if (this.memorize && this._prevParams){
            binding.execute(this._prevParams);
        }

        return binding;
    }

    #indexOfListener(listener) {
        let n = this._bindings.length;
        let cur;
        while (n--) {
            cur = this._bindings[n];
            if (cur.listener === listener) return n;
        }
        return -1;
    }

    /** Check if listener was attached to Signal */
    has(listener) {
        return this.#indexOfListener(listener) !== -1;
    }

    /**
     * Add a listener to the signal.
     * @param {Function} listener Signal handler function
     * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
     * @return {SignalBinding} An Object representing the binding between the Signal and listener
     */
    add(listener, priority) {
        validateListener(listener, 'add');
        return this.#registerListener(listener, false, priority);
    }

    /** Add listener to the signal, will be removed after first execution (will be executed only once) */
    addOnce(listener, priority) {
        validateListener(listener, 'addOnce');
        return this.#registerListener(listener, true, priority);
    }

    /**
     * Remove a single listener from the dispatch queue
     * @param {Function} listener Handler function that should be removed
     */
    remove(listener) {
        validateListener(listener, 'remove');
        const index = this.#indexOfListener(listener);
        if (index !== -1) {
            this._bindings[index].destroy();
            this._bindings.splice(index, 1);
        }
        return listener;
    }

    /** Remove all listeners from the Signal */
    removeAll() {
        let n = this._bindings.length;
        while (n--) this._bindings[n].destroy();
        this._bindings.length = 0;
    }

    /** Returns number of listeners attached to the Signal */
    getNumListeners() {
        return this._bindings.length;
    }

    /** Stop propagation event, blocking further dispatch to additional listeners (to be called during signal dispatch) */
    halt() {
        this.shouldPropagate = false;
    }

    /** Broadcast Signal to all listeners added to the queue */
    dispatch(/* any number of comma separated arguments */) {
        if (!this.active) return;

        let paramsArr = [...arguments];
        let n = this._bindings.length;
        if (this.memorize) this._prevParams = paramsArr;
        if (!n) return;

        const bindings = [...this._bindings];   // clone array in case add/remove items during dispatch
        this.shouldPropagate = true;            // in case `halt` called during dispatching

        // execute all callbacks until end of the list or until a callback returns `false` or stops propagation
        // reverse loop since listeners with higher priority will be added at the end of the list
        do { n--; } while (bindings[n] && this.shouldPropagate && bindings[n].execute(paramsArr) !== false);
    }

    /** Forget memorized arguments */
    forget() {
        this._prevParams = null;
    }

    /** Remove all bindings from signal and destroy any reference to external objects */
    dispose() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
    }

    /** Return string representation of the object */
    toString() {
        return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
    }

}

export { SignalBinding, Signal };

/******************** INTERNAL ********************/

function validateListener(listener, fnName) {
    if (typeof listener !== 'function') {
        throw new Error(`'listener' is a required param of ${fnName}() and should be a Function!`);
    }
}
