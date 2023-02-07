import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { RESIZERS } from '../constants.js';
import { TAB_SIDES } from '../panels/Tabbed.js';

export const CORNERS = {
    TOP_LEFT:       'TopLeft',
    TOP_RIGHT:      'TopRight',
    BOTTOM_LEFT:    'BottomLeft',
    BOTTOM_RIGHT:   'BottomRight',
};

class Docker extends Div {

    constructor() {
        super();

        // Build
        const cornerDivs = {};
        let zIndex = 1;
        for (let key in CORNERS) {
            const cornerName = CORNERS[key];
            const className = `Docker${cornerName}`;
            const corner = new Div().addClass('DockerCorner').addClass(className);
            corner.setStyle('zIndex', `${zIndex}`);
            zIndex++;

            // Bring Corner to top on 'Click' event
            let clickedOnCorner = false;
            corner.dom.addEventListener('pointerdown', event => clickedOnCorner = true);
            corner.dom.addEventListener('pointerup', function(event) {
                if (clickedOnCorner) {
                    // Decrease all zIndex values
                    for (let cornerDiv in cornerDivs) {
                        const style = getComputedStyle(cornerDivs[cornerDiv].dom);
                        let computedZ = style.getPropertyValue('z-index');
                        if (computedZ > 1) computedZ--;
                        cornerDivs[cornerDiv].setStyle('zIndex', `${computedZ}`);
                    };

                    // Set clicked corner to highest zIndex value
                    corner.setStyle('zIndex', `${Object.keys(cornerDivs).length}`);
                }
                clickedOnCorner = false;
            });

            // Add to Docker
            cornerDivs[cornerName] = corner;
            this.add(corner);
        }

        // Add Dock
        this.addDock = function(osuiElement, cornerName = CORNERS.TOP_LEFT) {
            cornerDivs[cornerName].add(osuiElement);

            if (osuiElement.isElement && osuiElement.hasClass('Tabbed')) {
                if (cornerName.includes('Right')) osuiElement.setTabSide(TAB_SIDES.LEFT);
                if (cornerName.includes('Left')) osuiElement.setTabSide(TAB_SIDES.RIGHT);
            }

            if (osuiElement.isElement && osuiElement.hasClass('ResizeFlex')) {
                osuiElement.toggleResize(RESIZERS.LEFT, cornerName.includes('Right'));
                osuiElement.toggleResize(RESIZERS.RIGHT, cornerName.includes('Left'));
                // // TEMP: No vertical resizing for now...
                // osuiElement.toggleResize(RESIZERS.TOP, cornerName.includes('Bottom'));
                // osuiElement.toggleResize(RESIZERS.BOTTOM, cornerName.includes('Top'));
                // osuiElement.toggleResize(RESIZERS.TOP_LEFT, cornerName.includes('BottomRight'));
                // osuiElement.toggleResize(RESIZERS.TOP_RIGHT, cornerName.includes('BottomLeft'));
                // osuiElement.toggleResize(RESIZERS.BOTTOM_RIGHT, cornerName.includes('TopLeft'));
                // osuiElement.toggleResize(RESIZERS.BOTTOM_LEFT, cornerName.includes('TopRight'));
            }
        }

        // Signals
        function windowResizeCallback() {
            let bottomLeftHeight = 0;
            for (let i = 0; i < cornerDivs[CORNERS.BOTTOM_LEFT].children.length; i++) {
                bottomLeftHeight += cornerDivs[CORNERS.BOTTOM_LEFT].children[i].getHeight();
            }
            let newHeightEm = parseFloat(Css.toEm(bottomLeftHeight)) - 0.175;
            cornerDivs[CORNERS.TOP_LEFT].setStyle('bottom', `${newHeightEm}em`);
        }

        signals.windowResize.add(windowResizeCallback);

        this.dom.addEventListener('destroy', function() {
            signals.windowResize.remove(windowResizeCallback);
        }, { once: true });

    } // end ctor

}

export { Docker };
