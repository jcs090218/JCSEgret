/**
 * $File: Interface.ts $
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
    export class Interface extends DisplayObject {

        public interfaceId : number = -1;

        private _displayObjects : DisplayObject[] = new Array();

        // How fast the this interface move corresponding to the
        // camera's movement.
        private _friction : number = 1.0;


        /* setter/getter */
        public getFriction() : number { return this._friction; }


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

        /**
         * @desc Add the display object to this interface.
         *
         * @param disObj Display object to add to this interface.
         * @returns Display object id.
         */
        public addDO(disObj : DisplayObject) : number {
            if (disObj == null) {
                Debug.error("Cannot add display object with null references...");
                return -1;
            }

            this._displayObjects.push(disObj);

            // Assign interface id.
            let doId : number = this._displayObjects.length - 1;
            disObj.doId = doId;

            // Returns interface id.
            return doId;
        }

        /**
         * @desc Remove display object from the display object list by using
         * display object id.
         *
         * @param id Display object id.
         */
        public removeDOById(id : number) : void {
            delete this._displayObjects[id];
        }

        /**
         * @desc Returns the display object by using display object id.
         *
         * @param id Display object id.
         */
        public getDOById(id : number) : DisplayObject {
            return this._displayObjects[id];
        }
    }
}
