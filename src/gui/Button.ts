/**
 * $File: Button.ts $
 * $Date: 2018-10-27 21:51:06 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Button handle.
     */
    export abstract class Button {

        private _button : eui.Button = new eui.Button();

        /* Setter/Getter */
        public getButton() : eui.Button { return this._button; }

        /**
         * @param label Label for the button.
         * @param hc Horizontal center offset position.
         * @param vc Vertical center offset position.
         */
        public constructor(label : string,
                           hc : number = 0,
                           vc : number = 0) {
            this._button.label = label;

            // position.
            this._button.horizontalCenter = hc;
            this._button.verticalCenter = vc;

            // Add onclick event.
            this._button.addEventListener(egret.TouchEvent.TOUCH_TAP,
                                          this.onButtonClick,
                                          this);
        }

        /**
         * @desc Do stuff when button click.
         */
        public abstract onButtonClick() : void;

        /**
         * @desc Add this to the layer/interface/scene that would display
         * this animation.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            doc.addChild(this._button);
        }
    }
}
