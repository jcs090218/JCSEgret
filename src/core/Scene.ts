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
    export class Scene extends DisplayObjectContainer {

        /* Scene Boundaries. */
        public min_x_bound : number = Number.NEGATIVE_INFINITY;
        public max_x_bound : number = Number.POSITIVE_INFINITY;
        public min_y_bound : number = Number.NEGATIVE_INFINITY;
        public max_y_bound : number = Number.POSITIVE_INFINITY;

        // Scene id.
        public sceneId : number = -1;

        // Name of the scene.
        public name : string = "Default Scene";

        // Initialize the scene after the scene is loaded.
        public onSceneLoaded : () => void = null;
        // Cleanup when the scene is going to unload.
        public onSceneUnLoad : () => void = null;

        // All the interfaces this scene holds.
        private _interfaces : Interface[] = new Array();

        // UI, every scene have an isolated canvas.
        private _canvas : Canvas = new Canvas();


        /* setter/getter */
        public getInterfaces() : Interface[] { return this._interfaces; }
        public getCanvas() : Canvas { return this._canvas; }


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

            this._canvas.addToDOC(doc);
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            this._interfaces.forEach(function (inter) {
                inter.removeFromDOC(doc);
            });

            this._canvas.removeFromDOC(doc);
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
