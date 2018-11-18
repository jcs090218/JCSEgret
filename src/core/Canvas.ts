/**
 * $File: Canvas.ts $
 * $Date: 2018-11-18 19:06:10 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Canvas object for the game scene.
     */
    export class Canvas extends DisplayObjectContainer {

        // Interfaces for canvas.
        private _interfaces : Interface[] = new Array();


        /* setter/getter */


        public constructor() {
            super();
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            this._interfaces.forEach(function (inter) {
                inter.addToDOC(doc);
            });
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            this._interfaces.forEach(function (inter) {
                inter.removeFromDOC(doc);
            });
        }


        /**
         * @desc Add the interface to this scene.
         *
         * @param inter Interface to add to this scene.
         * @returns Interface id.
         */
        public addInterface(inter : Interface) : number {
            if (inter == null) {
                Debug.error("Cannot add interface with null references...");
                return -1;
            }

            this._interfaces.push(inter);

            // Assign interface id.
            let interfaceId : number = this._interfaces.length - 1;
            inter.interfaceId = interfaceId;

            // Returns interface id.
            return interfaceId;
        }

        /**
         * @desc Remove interface from the interface list by using
         * interface id.
         *
         * @param id Interface id.
         */
        public removeInterfaceById(id : number) : void {
            delete this._interfaces[id];
        }

        /**
         * @desc Returns the interface by using interface id.
         *
         * @param id Interface id.
         */
        public getInterfaceById(id : number) : Interface {
            return this._interfaces[id];
        }

    }
}
