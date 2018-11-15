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
     * @desc Display object.
     */
    export abstract class DisplayObject {

        // Display object identity.
        public doId : number = -1;


        /* setter/getter */
        public abstract setX(newX : number) : void;
        public abstract setY(newY : number) : void;

        public abstract getX() : number;
        public abstract getY() : number;


        public constructor() {
            // empty..
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public abstract addToDOC(doc : egret.DisplayObjectContainer) : void;

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public abstract removeFromDOC(doc : egret.DisplayObjectContainer) : void
    }
}
