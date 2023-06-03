import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';
import { ShadowBox } from './ShadowBox.js';

class AssetBox extends Div {

    constructor(title = '', iconOnly = true, isMini = true) {
        super();
        this.setClass('AssetBox');
        this.dom.tabIndex = 0; /* enables user focus / selection */

        // Tooltip
        if (title !== '') this.dom.setAttribute('tooltip', title);

        // Set Name
        if (typeof title !== 'string' || title === '') title = 'Unknown';
        this.setName(title.toLowerCase());

        // Image
        const assetImageHolder = new ShadowBox();
        assetImageHolder.dom.draggable = true;

        // Display Format
        if (iconOnly) {
            if (isMini) {
                this.addClass('AssetBoxMini');
                this.addClass('AssetBoxSelectable');
            }
            this.add(assetImageHolder);
        } else {
            this.addClass('AssetBoxRow');
            this.addClass('AssetBoxSelectable');
            const spanIcon = new Span().setClass('AssetBoxIcon').add(assetImageHolder);
            const spanText = new Span(title).setClass('AssetBoxText');
            this.add(spanIcon, spanText);
        }

        // Contents Function
        this.contents = function() { return assetImageHolder };
    }

}

export { AssetBox };
