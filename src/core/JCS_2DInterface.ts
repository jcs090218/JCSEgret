/**
 * $File: JCS_2DInterface.ts $
 * $Date: 2018-10-27 23:01:32 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Interface contain list of display object and ready
     * to display as a group instead of individual component.
     */
    export class JCS_2DInterface extends JCS_DisplayObject {

        public interfaceId : number = -1;

        private _displayObjects : JCS_DisplayObject[] = new Array();


        public constructor() {
            super();
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            this._displayObjects.forEach(function (displayObject) {
                displayObject.addToDOC(doc);
            });
        }
    }
}
