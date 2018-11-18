/**
 * $File: TextField.ts $
 * $Date: 2018-11-18 20:05:48 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Text filed, wrapper for eui.TextField.
     */
    export class TextField extends UIObject {

        private _textField : egret.TextField = new egret.TextField();

        /* setter/getter */
        public getTextField() : egret.TextField { return this._textField; }


        public constructor(txt : string,
                           x : number,
                           y : number,
                           size : number,
                           color : Color = new Color(0xFF, 0xFF, 0xFF))
        {
            super();

            // Customize default settings.
            this._textField.text = txt;
            this._textField.x = x;
            this._textField.y = y;
            this._textField.size = size;
            this._textField.textColor = color.toColor();

            // Prefer default settings.
            this._textField.textAlign = egret.HorizontalAlign.CENTER;
        }


        /**
         * @desc Add this to the layer/interface/scene that would display
         * this animation.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            doc.addChild(this._textField);
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            doc.removeChild(this._textField);
        }
    }
}
