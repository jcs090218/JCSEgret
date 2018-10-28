/**
 * $File: JCSEgret.ts $
 * $Date: 2018-10-15 01:09:49 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * Initialize for JCSEgret to be ready.
     */
    export function init(main : eui.UILayer) {
        main.addEventListener(egret.Event.ENTER_FRAME, update, true);

        // Add key event.
        Input.init();
    }

    /**
     * Update the call each frame.
     */
    export function update() {
        // Update the game time, calculate delta time.
        Time.getInstance().update();

        // Do clean up.
        Input.cleanInputBuffer();
    }
}
