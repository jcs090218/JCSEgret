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
        private _mainLoop : () => void = null;

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
         * @desc Set the main loop execution.
         * @param func Main loop function pointer.
         */
        public setMainLoop(func : () => void) : void {
            this._mainLoop = func;
        }

        /**
         * @desc Add a display object to the layer.
         */
        public addToLayer(child : egret.DisplayObject) {
            this.getLayer().addChild(child);
        }

        /**
         * @desc Process the main loop.
         */
        private processEvent() : void {
            if (this._mainLoop == null)
                return;

            this._mainLoop();
        }
    }
}
