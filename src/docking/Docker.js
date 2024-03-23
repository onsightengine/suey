import { Div } from '../core/Div.js';

import { TAB_SIDES } from '../constants.js';

class Docker extends Div {

    #corners = {};

    constructor() {
        super();
        const self = this;

        // Build Corners
        let zIndex = 1;
        for (let key in DOCK_LOCATIONS) {
            const cornerName = DOCK_LOCATIONS[key];
            const className = `suey-docker-${cornerName}`;
            const corner = new Div().addClass('suey-docker-corner').addClass(className);
            corner.setStyle('zIndex', `${zIndex}`);
            zIndex++;

            // Bring corner div to top on 'Click' event
            function bringCornerToTop() {
                for (let cornerDiv in self.#corners) {
                    const style = getComputedStyle(self.#corners[cornerDiv].dom);
                    let computedZ = style.getPropertyValue('z-index');
                    if (computedZ > 1) computedZ--;
                    self.#corners[cornerDiv].setStyle('zIndex', `${computedZ}`);
                };
                corner.setStyle('zIndex', `${Object.keys(self.#corners).length}`);
            }
            corner.dom.addEventListener('pointerdown', bringCornerToTop);
            corner.dom.addEventListener('resizeStart', bringCornerToTop);

            // Add to Docker
            this.#corners[cornerName] = corner;
            this.add(corner);
        }
    }

    addDockPanel(dockPanel, cornerName = DOCK_LOCATIONS.TOP_LEFT) {
        if (!dockPanel) return;
        const corner = this.getCorner(cornerName);
        corner.add(dockPanel);

        dockPanel.dom.addEventListener('resized', () => {
            corner.dom.dispatchEvent(new Event('resized'));
        });

        if (dockPanel.isElement) {
            if (dockPanel.hasClass('suey-tabbed')) {
                if (cornerName.includes('right')) dockPanel.setTabSide(TAB_SIDES.LEFT);
                if (cornerName.includes('left')) dockPanel.setTabSide(TAB_SIDES.RIGHT);
            }
        }
    }

    getCorner(cornerName = DOCK_LOCATIONS.TOP_LEFT) {
        return this.#corners[cornerName];
    }

}

export { Docker };
