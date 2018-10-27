/**
 * $File: JCS_Debug.ts $
 * $Date: 2018-10-17 20:57:20 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Debugging util class for developer to use and easier to see
     * the debug informations.
     */
    export class JCS_Debug {

        /**
         * @desc Private customize logging util.
         *
         * @param logHeader Logging purpose.
         * @param msg Logging message.
         */
        private static _log(logHeader : string, msg : string) : void {
            if (!DEBUG)
                return;

            console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
            console.log("=-" + logHeader + " : " + msg);
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        }

        /**
         * @desc Log out INFO information.
         */
        public static log(msg : string) : void {
            JCS_Debug._log("INFO", msg);
        }

        /**
         * @desc Log out ERROR information.
         */
        public static error(msg : string) : void {
            JCS_Debug._log("ERROR", msg);
        }

        /**
         * @desc Log out WARNING information.
         */
        public static warning(msg : string) : void {
            JCS_Debug._log("WARNING", msg);
        }

        /**
         * @desc Log out REMINDER information.
         */
        public static reminder(msg : string) : void {
            JCS_Debug._log("REMINDER", msg);
        }

    }
}
