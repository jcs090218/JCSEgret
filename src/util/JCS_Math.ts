/**
 * $File: JCS_Math.ts $
 * $Date: 2018-10-26 21:34:31 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * Math util.
     */
    export class JCS_Math {

        /**
         * Absolute value.
         * @param val Value to pass in to get the absolute value.
         * @returns Absolute value of the target number.
         */
        public static abs(val) : number {
            if (val < 0)
                return -val;
            return val;
        }

        /**
         * Make the `val` positive number.
         * @param val Value to pass in to get the positive value.
         * @returns Positive number of the target number.
         */
        public static toPositive(val) : number {
            return JCS_Math.abs(val);
        }

        /**
         * Make the `val` negative number.
         * @param val Value to pass in to get the negative value.
         * @returns Negative number of the target number.
         */
        public static toNegative(val) : number {
            return -JCS_Math.abs(val);
        }

        /**
         * Check if the `val` positive number.
         * @param val Value to check is positive number.
         */
        public static isPositive(val) : boolean {
            if (val > 0 && val != 0.0)
                return true;
            return false;
        }

        /**
         * Check if the `val` negative number.
         * @param val Value to check is negative number.
         */
        public static isNegative(val) : boolean {
            if (val < 0 && val != 0.0)
                return true;
            return false;
        }

        /**
         * Reserve the value, positive number to negative number. Negative number
         * to positive number.
         * @param val Value to do reverse.
         * @returns Reversed value.
         */
        public static reverse(val) : number {
            return -val;
        }

        /**
         * Reciprocal of the value.
         * @param val Value to do reciprocal.
         * @returns Reciprocaled value.
         */
        public static reciprocal(val) : number {
            return (1 / val);
        }

        /**
         * Square the number.
         * @param val Number to square.
         * @returns Sqared value.
         */
        public static sqr(val) : number {
            return (val * val);
        }

        /**
         * Is the number odd number?
         * @param val Value to check is odd number.
         * @returns True, is odd number. False, vice versa.
         */
        public static isOdd(val) : boolean {
            return ((val % 2) != 0);
        }

        /**
         * Is the number even number?
         * @param val Value to check is even number.
         * @returns True, is even number. False, vice versa.
         */
        public static isEven(val) : boolean {
            return ((val % 2) == 0);
        }

        /**
         * Find the center of the number.
         */
        public static findMiddleIndex(len) {
            return (len / 2);
        }

        /**
         * Check if something is possible by percentage.
         * 0% ~ 100%.
         *
         * @param val Value percentage.
         * @returns True, is possible. False, not possible.
         */
        public static isPossible(val) : boolean {
            let possibility = JCS_Random.rangeFloat(0, 100);
            return (val > possibility) ? true : false;
        }
    }
}
