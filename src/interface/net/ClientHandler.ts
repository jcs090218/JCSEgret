/**
 * $File: ClientHandler.ts $
 * $Date: 2018-11-23 22:58:26 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Handle connection IO events.
     */
    export interface ClientHandler {
        /**
         * @desc Callback when is connect.
         */
        onConnect() : void;

        /**
         * @desc Callback when is close connection.
         */
        onClose() : void;

        /**
         * @desc Callback when there is error.
         */
        onError() : void;

        /**
         * @desc Callback when there is data come in.
         *
         * @param evt Event.
         * @param ba egret.ByteArray that hold binary data.
         */
        onReceive(evt : egret.Event, ba : egret.ByteArray) : void;
    }
}
