/**
 * $File: WebSocket.ts $
 * $Date: 2018-11-23 22:08:17 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc egret.WebSocket wrapper.
     * @source http://developer.egret.com/en/apidoc/index/name/egret.WebSocket
     */
    export class WebSocket {

        private _webSocket : egret.WebSocket = null;

        private _clientHandler : ClientHandler = null;

        private _encoder : PacketEncoder = null;
        private _decoder : PacketDecoder = null;


        /* setter/getter */
        public getWebSocket() : egret.WebSocket { return this._webSocket; }

        public setClientHandler(ch : ClientHandler) : void { this._clientHandler = ch; }
        public getClientHandler() : ClientHandler { return this._clientHandler; }

        public getPacketEncoder() : PacketEncoder { return this._encoder; }
        public getPacketDecoder() : PacketDecoder { return this._decoder; }

        public setPacketEncoder(en : PacketEncoder) : void { this._encoder = en; }
        public setPacketDecoder(de : PacketDecoder) : void { this._decoder = de; }


        /**
         * @param host Host name.
         * @param port Post number.
         */
        public constructor(host : string, port : number) {
            this.initWebSocket(host, port);
        }

        /**
         * @desc Initilaize the web socket.
         *
         * @param host Host name.
         * @param port Post number.
         */
        private initWebSocket(host : string, port : number) : void {
            this._webSocket = new egret.WebSocket();

            this._webSocket.type = egret.WebSocket.TYPE_BINARY;

            // On connect callback.
            this._webSocket.addEventListener(egret.Event.CONNECT,
                                             this.onConnect,
                                             this);

            // On close callback.
            this._webSocket.addEventListener(egret.Event.CLOSE,
                                             this.onClose,
                                             this);

            // On error callback.
            this._webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR,
                                             this.onError,
                                             this);

            // On receive callback.
            this._webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,
                                             this.onReceive,
                                             this);

            if (host != "" && port != -1)
                this._webSocket.connect(host, port);
        }

        /**
         * @desc When the socket is connect.
         */
        private onConnect() : void {
            if (this._clientHandler == null)
                return;

            this._clientHandler.onConnect();
        }

        /**
         * @desc When the socket close.
         */
        private onClose() : void {
            if (this._clientHandler == null)
                return;

            this._clientHandler.onClose();
        }

        /**
         * @desc When the socket error.
         */
        private onError() : void {
            if (this._clientHandler == null)
                return;

            this._clientHandler.onError();
        }

        /**
         * @desc When receive data.
         */
        private onReceive(evt : egret.Event) : void {
            if (this._clientHandler == null)
                return;

            var ba : egret.ByteArray = new egret.ByteArray();

            this._webSocket.readBytes(ba);

            // Decode after getting the packet.
            if (this._decoder != null)
                ba = this._decoder.decode(ba);

            this._clientHandler.onReceive(evt, ba);
        }

        /**
         * @desc Send the data.
         *
         * @param ba egret.ByteArray that hold binary data.
         */
        private send(ba : egret.ByteArray) : void {
            // Encode before sending the data.
            if (this._encoder != null)
                ba = this._encoder.encode(ba);

            // Cannot send data without the byte array.
            if (ba != null)
                this._webSocket.writeBytes(ba, 0, ba.bytesAvailable);
        }

    }
}
