/**
 * EventManager is used to manager DOM events creating and destruction in a single function call.
 * It is used by objects to make it easier to add and remove events from global DOM objects.
 */
class EventManager {

    constructor() {
        this.events = [];
    }

    add(target, event, callback) {
        this.events.push([target, event, callback, false]);
    }

    clear() {
        this.destroy();
        this.events = [];
    }

    create() {
        for (let i = 0; i < this.events.length; i++) {
            const event = this.events[i];
            event[0].addEventListener(event[1], event[2]);
            event[3] = true;
        }
    }

    destroy() {
        for (let i = 0; i < this.events.length; i++) {
            const event = this.events[i];
            event[0].removeEventListener(event[1], event[2]);
            event[3] = false;
        }
    }

}

export { EventManager };
