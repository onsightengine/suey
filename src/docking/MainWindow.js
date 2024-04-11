import { Docker } from './Docker.js';
import { Dom } from '../utils/Dom.js';
import { Panel } from '../panels/Panel.js';
import { Window } from './Window.js';

import { PANEL_STYLES } from '../constants.js';

class MainWindow extends Panel {

    constructor() {
        super({ style: PANEL_STYLES.NONE });
        this.addClass('suey-main-window');

        // Prototype
        this.isMainWindow = true;

        // Docks
        const docker = new Docker();
        this.add(docker);
        this.docker = docker;
    }

    getPrimary() {
        return this.docker;
    }

    /******************** DOCKERS */

    clearDocks() {
        this.docker.clearDocks();
    }

    /******************** WINDOWS */

    addWindow(options) {
        let window = undefined;
        if (options && options.isElement && options.hasClass('suey-window')) {
            window = options;
        } else {
            window = new Window(options);
        }
        this.addToSelf(window);
        window.display();
        return window;
    }

    clearWindows() {
        const windows = Dom.childrenWithClass(this, 'suey-window', true /* recursive? */, false /* searchChildrenOfTarget */);
        this.remove(...windows);
    }

    /******************** FLOATERS */

    clearFloaters() {
        this.clearDocks();
        this.clearWindows();
    }

    floaters() {
        return Dom.childrenWithClass(this, 'suey-floater', true /* recursive? */, false /* searchChildrenOfTarget */);
    }

    getFloaterByID(id) {
        if (id == undefined || id === '') return undefined;
        return this.floaters().find((floater) => (floater.id === id));
    }

}

export { MainWindow };
