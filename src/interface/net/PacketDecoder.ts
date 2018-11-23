/**
 * $File: PacketDecoder.ts $
 * $Date: 2018-11-23 23:11:42 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Packet decoder.
     */
    export interface PacketDecoder {
        /**
         * @desc Decode the packet before getting the packet data.
         * @param ba Byte array holder.
         */
        decode(ba : egret.ByteArray) : egret.ByteArray;
    }
}
