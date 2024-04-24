import { Div } from '../core/Div.js';
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

        // Windows
        const windows = new Div().addClass('suey-window-holder');
        windows.getPrimary = function() { return docker; };
        this.add(windows);
        this.windows = windows;
    }

    getPrimary() {
        return this.docker;
    }

    /******************** DOCKERS */

    clearDocks() {
        this.docker.clearDocks();
    }

    /******************** WINDOWS */

    addWindow(options, focus = true) {
        let window = undefined;
        if (options && options.isElement && options.hasClass('suey-window')) {
            window = options;
        } else {
            window = new Window(options);
        }
        this.windows.addToSelf(window);
        window.display();
        if (focus) window.focus();
        return window;
    }

    clearWindows() {
        this.windows.clearContents();
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
        if (id == undefined || id === '' || typeof id !== 'string') return undefined;
        return this.floaters().find((floater) => (floater.id === id));
    }

}

export { MainWindow };
