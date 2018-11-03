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
     * @desc Game manager.
     */
    export class GameManager {

        private static instance : GameManager = new GameManager();

        private _layer : eui.UILayer = null;


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
         * Initialize the game manager.
         * @param layer Layer the program entrance.
         */
        public init(layer : eui.UILayer) {
            this._layer = layer;
        }

        public addToLayer(child : egret.DisplayObject) {
            this.getLayer().addChild(child);
        }
    }
}
