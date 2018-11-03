/**
 * $File: Util.ts $
 * $Date: 2018-10-15 23:56:27 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Utility static class.
     */
    export class Util {

        /**
         * @desc Ensure the number is between mininum number and the maxinum number.
         *
         * @param val Current value to check if is inbound.
         * @param min Mininum number.
         * @param max Maxinum number.
         *
         * @returns Number between min ~ max.
         */
        public static clamp(val : number, min : number, max : number) : number {
            // TODO(jenchieh): Check if min and max value is correct input?
            if (val < min)
                val = min;
            if (val > max)
                val = max;
            return val;
        }

        /**
         * @desc Move the display object to the last child of the render layer.
         * @param dis Display object in the render layer.
         * @param layer Layer that will remove `dis` and add the `dis` back to
         * render queue.
         */
        public static moveToLastChild(dis : egret.DisplayObject, layer : eui.UILayer = null) : void {
            let tmpLayer = layer;

            if (dis == null)
                return;

            // If the layer is null, assign the global layer.
            if (layer == null)
                tmpLayer = GameManager.getInstance().getLayer();

            // NOTE(jenchieh): By removing and adding the child will move the
            // child to the last of the child index, which the render oder
            // will be modified to the top of the scene.
            tmpLayer.removeChild(dis);
            tmpLayer.addChild(dis);
        }
    }
}
