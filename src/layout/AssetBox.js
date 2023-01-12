import { Div } from '../core/Div.js';
import { ShadowBox } from './ShadowBox.js';

class AssetBox extends Div {

    constructor(title = '', isMini = true) {
        super();
        this.setClass('AssetBox');
        this.dom.tabIndex = 0;				// NOTE: Enables user focus / selection

        // Mini Asset or No?
        if (isMini) {
            this.addClass('MiniAssetBox');
        } else {
            /* NOTHING */
        }

        // Tooltip
        if (title !== '') this.dom.setAttribute('tooltip', title);

        // Set Name
        if (! ((typeof title === 'string' || title instanceof String) && title !== '')) {
            title = 'Unknown';
        }
        this.setName(title.toLowerCase());

        // Image
        const assetImageHolder = new ShadowBox();
        assetImageHolder.dom.draggable = true;
        this.add(assetImageHolder);

        this.contents = function() { return assetImageHolder };
    }

}

export { AssetBox };
