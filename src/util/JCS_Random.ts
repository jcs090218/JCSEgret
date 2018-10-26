/**
 * $File: JCS_Random.ts $
 * $Date: 2018-10-26 20:35:51 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Random util.
     */
    export class JCS_Random {

        /**
         * Returns a random floating point number between `min` (inclusive)
         * and `max` (exclusive).
         *
         * @param min Mininum number.
         * @param max Maxinum number.
         * @returns Random number between mininum and maxinum number.
         */
        public static rangeFloat(min, max) : number {
            return Math.random() * (max - min) + min;
        }

        /**
         * Returns a random floating point number between `min` (inclusive)
         * and `max` (inclusive).
         *
         * @param min Mininum number.
         * @param max Maxinum number.
         * @returns Random number between mininum and maxinum number.
         */
        public static rangeFloatInclude(min, max) : number {
            return Math.random() * (max - min + 1) + min;
        }


        /**
         * Returns a random integer between `min` (inclusive)
         * and `max` (exclusive).
         *
         * @param min Mininum number.
         * @param max Maxinum number.
         * @returns Random number between mininum and maxinum number.
         */
        public static rangeInt(min, max) : number {
            return Math.floor(JCS_Random.rangeFloat(min, max));
        }

        /**
         * Returns a random integer between `min` (inclusive)
         * and `max` (inclusive).
         *
         * @param min Mininum number.
         * @param max Maxinum number.
         * @returns Random number between mininum and maxinum number.
         */
        public static randIncludeInt(min, max) : number {
            return Math.floor(JCS_Random.rangeFloatInclude(min, max));
        }
    }
}
