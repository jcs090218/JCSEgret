/**
 * $File: DisplayObject.ts $
 * $Date: 2018-10-27 23:05:55 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * Display object.
     */
    export abstract class DisplayObject {

        // Display object id.
        public doId : number = -1;

        public constructor() {
            // empty..
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public abstract addToDOC(doc : egret.DisplayObjectContainer) : void;
    }
}
