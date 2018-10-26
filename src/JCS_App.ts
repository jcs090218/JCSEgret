/**
 * $File: JCS_App.ts $
 * $Date: 2018-10-15 01:09:49 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Application wrapper for JCSEgret.
     */
    export class JCS_App {

        public constructor() {
            // empty..
        }

        /**
         * Initialize for JCSEgret to be ready.
         */
        public static init(main : eui.UILayer) : void {
            main.addEventListener(egret.Event.ENTER_FRAME, JCS_App.update, true);
        }

        /**
         * Update the call each frame.
         */
        public static update() : void {
            // Update the game time, calculate delta time.
            JCS_Time.getInstance().update();
        }
    }
}
