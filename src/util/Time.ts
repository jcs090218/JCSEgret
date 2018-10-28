/**
 * $File: Time.ts $
 * $Date: 2018-10-15 01:24:54 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Time handle.
     */
    export class Time {

        public static _instance : Time = new Time();

        private _deltaTime : number = 0.0;

        private _lastTime : number = 0.0;


        /* Singleton */
        public static getInstance() : Time {
            return this._instance;
        }

        private constructor() {
            // empty..
        }

        /**
         * @desc Call every frame.
         */
        public update() : void {
            let currentTime : number = egret.getTimer() / 1000.0;

            this._deltaTime = currentTime - this._lastTime;

            this._lastTime = currentTime;
        }

        /**
         * @desc Returns delta time.
         */
        public static deltaTime() : number {
            return this._instance._deltaTime;
        }
    }
}
