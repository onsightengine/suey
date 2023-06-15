import { Div } from '../core/Div.js';
import { Span } from '../core/Span.js';
import { ShadowBox } from './ShadowBox.js';

class AssetBox extends Div {

    constructor(title = '', view = 'icon', isMini = true) {
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
        if (view == 'icon') {
            if (isMini) {
                this.addClass('AssetBoxMini');
                this.addClass('AssetBoxSelectable');
            }
            this.add(assetImageHolder);

        } else if (view == 'text') {
            if (isMini) {
                this.addClass('AssetBoxMini');
                this.addClass('AssetBoxCombo');
                this.addClass('AssetBoxSelectable');
            }
            assetImageHolder.setStyle('transform', 'translate(-50%, -65%) scale(0.8)');
            this.add(assetImageHolder);
            const label = new Div(title).setClass('AssetBoxLabel');
            this.add(label);

        } else { /* if (view == 'list') */
            this.addClass('AssetBoxRow');
            this.addClass('AssetBoxSelectable');
            const spanIcon = new Span().setClass('AssetBoxIcon').add(assetImageHolder);
            const spanText = new Span(title).setClass('AssetBoxText');
            this.add(spanIcon, spanText);
        }

        // Contents Function
        this.contents = function() { return assetImageHolder };

        /***** ASSET SELECTION *****/

        this.onKeyDown((event) => {
            const assets = this.parent;
            if (!assets || !assets.isElement) return;
            const index = assets.children.indexOf(this);
            if (index === -1) return;
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    if (index === 0) return;
                    assets.children[index - 1].focus();
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    if (index === (assets.children.length - 1)) return;
                    assets.children[index + 1].focus();
                    break;
            }
        });

    }

}

export { AssetBox };
