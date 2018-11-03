/**
 * $File: Screen.ts $
 * $Date: 2018-11-03 15:23:04 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Screen.
     */
    export class Screen {

        // Screen with and height.
        private static _width : number = 0.0;
        private static _height : number = 0.0;

        /* setter/getter */
        public static width() : number { Screen.updateScreenInfoOnce(); return Screen._width; }
        public static height() : number { Screen.updateScreenInfoOnce(); return Screen._height; }

        private constructor() {
            // empty..
        }

        private static updateScreenInfoOnce() {
            let layer : eui.UILayer = GameManager.getInstance().getLayer();
            Screen._width = layer.stage.stageWidth;
            Screen._height = layer.stage.stageHeight;
        }
    }
}
