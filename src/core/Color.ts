/**
 * $File: Color.ts $
 * $Date: 2018-11-03 15:15:22 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Color container.
     */
    export class Color {

        /* List of static color defines. */
        public static black = new Color(0x00, 0x00, 0x00);
        public static white = new Color(0xFF, 0xFF, 0xFF);

        public static red = new Color(0xFF, 0x00, 0x00);
        public static green = new Color(0x00, 0xFF, 0x00);
        public static blue = new Color(0x00, 0x00, 0xFF);

        public static yellow = new Color(0xFF, 0xFF, 0x00);
        public static magenta = new Color(0xFF, 0x00, 0xFF);
        public static cyan = new Color(0x00, 0xFF, 0xFF);

        public r : number = 0x00;
        public g : number = 0x00;
        public b : number = 0x00;

        /**
         * @param newR Color red.
         * @param newG Color green.
         * @param newB Color blue.
         */
        public constructor(newR : number = 0x00, newG : number = 0x00, newB : number = 0x00) {
            this.r = newR;
            this.g = newG;
            this.b = newB;
        }

        /**
         * @desc Returns the color code in number.
         */
        public toColor() : number {
            return (this.r << 32) & (this.g << 16) & this.b;
        }
    }
}
