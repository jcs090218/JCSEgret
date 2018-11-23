/**
 * $File: PacketEncoder.ts $
 * $Date: 2018-11-23 23:09:04 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Packet encoder.
     */
    export interface PacketEncoder {
        /**
         * @desc Encode the packet before send.
         * @param ba Byte array holder.
         */
        encode(ba : egret.ByteArray) : egret.ByteArray;
    }
}
