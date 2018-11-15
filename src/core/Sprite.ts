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

        public setTexture(tex : egret.Texture) : void {
            this.getBitmap().texture = tex;
            this.autoPivot();  // Auto pivot once after the new texture is come in.
        }

        public getX() : number { return this.getBitmap().x; }
        public getY() : number { return this.getBitmap().y; }
        public getWidth() : number { return this.getBitmap().width; }
        public getHeight() : number { return this.getBitmap().height; }
        public getAnchorOffsetX() : number { return this.getBitmap().anchorOffsetX; }
        public getAnchorOffsetY() : number { return this.getBitmap().anchorOffsetY; }
        public getScaleX() : number { return this.getBitmap().scaleX; }
        public getScaleY() : number { return this.getBitmap().scaleY; }

        public setX(newX : number) : void {
            let camView = (-Camera.getInstance().getX() + newX);
            this.getBitmap().x = camView;
        }
        public setY(newY : number) : void {
            let camView = (-Camera.getInstance().getY() + newY);
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

            this.autoPivot();
        }

        /**
         * @desc Auto pivot the sprite.
         */
        public autoPivot(ap : boolean = true) : void {
            if (ap) {
                let offX : number = this.getWidth() / 2.0;
                let offY : number = this.getHeight() / 2.0;
                this.setAnchorOffsetX(offX);
                this.setAnchorOffsetY(offY);
            } else {
                this.setAnchorOffsetX(0.0);
                this.setAnchorOffsetY(0.0);
            }
        }

    }
}
