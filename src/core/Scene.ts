/**
 * $File: Scene.ts $
 * $Date: 2018-10-27 23:09:06 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Scene object, handle multiple interfaces.
     */
    export class Scene extends DisplayObject {

        // Scene id.
        public sceneId : number = -1;

        // Name of the scene.
        public name : string = "Default Scene";

        private _interfaces : Interface[] = new Array();


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
