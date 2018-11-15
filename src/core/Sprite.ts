/**
 * $File: Sprite.ts $
 * $Date: 2018-11-15 02:44:18 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Handle sprite info.
     */
    export class Sprite extends Component {

        // Bitmap hold image data.
        private _bitmap : egret.Bitmap = new egret.Bitmap();


        /* setter/getter */
        public getBitmap() : egret.Bitmap { return this._bitmap; }
        public getTexture() : egret.Texture { return this.getBitmap().texture; }

        public setTexture(tex : egret.Texture) : void { this.getBitmap().texture = tex; }

        public getX() : number { return this.getBitmap().x; }
        public getY() : number { return this.getBitmap().y; }
        public getWidth() : number { return this.getBitmap().width; }
        public getHeight() : number { return this.getBitmap().height; }
        public getAnchorOffsetX() : number { return this.getBitmap().anchorOffsetX; }
        public getAnchorOffsetY() : number { return this.getBitmap().anchorOffsetY; }
        public getScaleX() : number { return this.getBitmap().scaleX; }
        public getScaleY() : number { return this.getBitmap().scaleY; }

        public setX(x : number) : void {
            let camView = (-Camera.getInstance().getX() + x);
            this.getBitmap().x = camView;
        }
        public setY(y : number) : void {
            let camView = (-Camera.getInstance().getY() + y);
            this.getBitmap().y = camView;
        }
        public setWidth(w : number) : void { this.getBitmap().width = w; }
        public setHeight(h : number) : void { this.getBitmap().height = h; }
        public setAnchorOffsetX(px : number) : void { this.getBitmap().anchorOffsetX = px; }
        public setAnchorOffsetY(py : number) : void { this.getBitmap().anchorOffsetY = py; }
        public setScaleX(sx : number) : void { this.getBitmap().scaleX = sx; }
        public setScaleY(sy : number) : void { this.getBitmap().scaleY = sy; }


        /**
         * @param imgName Target image name to load.
         */
        public constructor(imgName : string = "") {
            super();

            this.loadSprite(imgName);
        }

        /**
         * @desc Run the animation.
         */
        public update() : void {
            // Empty..
        }

        /**
         * @desc Add this to the layer/interface/scene that would display
         * this animation.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            doc.addChild(this._bitmap);
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            doc.removeChild(this._bitmap);
        }

        /**
         * @desc Load the sprite by file path.
         *
         * @param imgName Target image name to load.
         */
        public loadSprite(imgName : string) : void {
            // Cannot load the image name with empty string.
            if (imgName == "")
                return;

            this.getBitmap().texture = RES.getRes(imgName);
        }

    }
}
