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

    }
}
