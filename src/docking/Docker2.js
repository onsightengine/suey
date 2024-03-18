import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { RESIZERS } from '../constants.js';
import { TAB_SIDES } from './Tabbed.js';

export const CORNERS = {
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};

class Docker2 extends Div {

    #corners = {};

    constructor() {
        super();
        const self = this;

        // Build Corners
        let zIndex = 1;
        for (let key in CORNERS) {
            const cornerName = CORNERS[key];
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
            corner.dom.addEventListener('clicked', bringCornerToTop);

            // Add to Docker
            this.#corners[cornerName] = corner;
            this.add(corner);
        }
    }

    addDockPanel(dockPanel, cornerName = CORNERS.TOP_LEFT) {
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
            if (dockPanel.hasClass('suey-resizeable')) {
                dockPanel.toggleResize(RESIZERS.LEFT, cornerName.includes('right'));
                dockPanel.toggleResize(RESIZERS.RIGHT, cornerName.includes('left'));
            }
        }
    }

    getCorner(cornerName = CORNERS.TOP_LEFT) {
        return this.#corners[cornerName];
    }

}

export { Docker2 };
