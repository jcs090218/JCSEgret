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
     * @desc Initialize for JCSEgret to be ready.
     * @param layer Stage of Egret engine provided.
     */
    export function init(layer : eui.UILayer) {
        /* Initialize managers. */
        {
            GameManager.getInstance().init(layer);
            SceneManager.getInstance().init();
            SoundManager.getInstance();
        }

        /* Initialize input handler. */
        Input.init();

        /* Register pro loop for JCSEgret. */
        layer.addEventListener(egret.Event.ENTER_FRAME, update, true);
    }

    /**
     * @desc Update the call each frame.
     */
    export function update() {
        // Update the game time, calculate delta time.
        Time.getInstance().update();

        GameManager.getInstance().update();
        SceneManager.getInstance().update();
        SoundManager.getInstance().update();

        // Do clean up.
        Input.cleanInputBuffer();
    }

    /**
     * @desc Set the main loop execution.
     * @param func Main loop function pointer.
     */
    export function setMainLoop(func : () => void) {
        GameManager.getInstance().setMainLoop(func);
    }
}
