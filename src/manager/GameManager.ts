/**
 * $File: GameManager.ts $
 * $Date: 2018-11-03 15:32:49 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Game manager, handle the game behaviours.
     */
    export class GameManager {

        private static instance : GameManager = new GameManager();

        // Hold the main layer.
        private _layer : eui.UILayer = null;

        // Main program loop.
        private _mainLoopsFunc : Array<() => void> = new Array();  // Operations.
        private _mainLoopsObj : Array<any> = new Array();  // Preserve data pointer, to get the operations.


        /* setter/getter */
        public getLayer() : eui.UILayer { return this._layer; }


        /**
         * @desc Singleton, game manager.
         */
        public static getInstance() : GameManager {
            return GameManager.instance;
        }

        private constructor() {
            // empty..
        }

        /**
         * @desc Initialize the game manager.
         * @param layer Layer the program entrance.
         */
        public init(layer : eui.UILayer) : void {
            this._layer = layer;
        }

        /**
         * @desc Update called every frame.
         */
        public update() : void {
            this.processEvent();
        }

        /**
         * @desc Add a display object to the layer.
         * @param child Display object to add to.
         */
        public addToLayer(child : egret.DisplayObject) {
            this.getLayer().addChild(child);
        }

        /**
         * @desc Register one main loop execution.
         * @param func Main loop function pointer.
         * @param thisObj Data pointer.
         * @returns Program Id.
         */
        public registerMainLoop(func : () => void, thisObj : any) : number {
            if (func == null) {
                Debug.log("Cannot register the main loop with null references...");
                return -1;
            }

            this._mainLoopsFunc.push(func);
            this._mainLoopsObj.push(thisObj);

            let programId = this._mainLoopsFunc.length - 1;
            return programId;
        }

        /**
         * @desc Deregister one main loop execution by program id.
         * @param id Program id.
         */
        public deregisterMainLoop(id : number) {
            delete this._mainLoopsFunc[id];
            delete this._mainLoopsObj[id];
        }

        /**
         * @desc Process the main loop.
         */
        private processEvent() : void {
            for (let index = 0;
                 index < this._mainLoopsFunc.length;
                 ++index) {
                let func = this._mainLoopsFunc[index];

                if (func == null)
                    continue;

                func.apply(this._mainLoopsObj[index]);
            }
        }
    }
}
