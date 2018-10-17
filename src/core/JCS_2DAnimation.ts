/**
 * $File: JCS_2DAnimation.ts $
 * $Date: 2018-10-13 22:33:28 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc 2D animation handler. Handle frame by frame animation.
     */
    export class JCS_2DAnimation {

        // Is the current animation active?
        public active : boolean = true;

        // Frame per seconds for this animation.
        public fps : number = 0.2;

        // Loop the animation?
        public loop : boolean = true;


        // Timer to calculate the animation.
        private _fpsTimer : number = 0.0;

        // Current frame count/index.
        private _currentFrame : number = 0;

        // All textures
        private _textures : egret.Texture[] = null;

        // Display object.
        private _bitmap : egret.Bitmap = new egret.Bitmap();

        private _x : number = 0.0;
        private _y : number = 0.0;

        private _pivotX : number = 0.0;
        private _pivotY : number = 0.0;

        private _width : number = 0.0;
        private _height : number = 0.0;

        private _scaleX : number = 1.0;
        private _scaleY : number = 1.0;


        /* setter/getter */
        public getBitmap() : egret.Bitmap { return this._bitmap; }

        public getX() : number { return this._x; }
        public getY() : number { return this._y; }
        public getWidth() : number { return this._width; }
        public getHeight() : number { return this._height; }
        public getPivotX() : number { return this._pivotX; }
        public getPivotY() : number { return this._pivotY; }
        public getScaleX() : number { return this._scaleX; }
        public getScaleY() : number { return this._scaleY; }

        public setX(x : number) : void { this._x = x; this.updatePosition(); }
        public setY(y : number) : void { this._y = y; this.updatePosition(); }
        public setWidth(w : number) : void { this._width = w; this.updateScale(); }
        public setHeight(h : number) : void { this._height = h; this.updateScale(); }
        public setPivotX(px : number) : void { this._pivotX = px; this.updatePosition(); }
        public setPivotY(py : number) : void { this._pivotY = py; this.updatePosition(); }
        public setScaleX(sx : number) : void { this._scaleX = sx; this.updateScale(); }
        public setScaleY(sy : number) : void { this._scaleY = sy; this.updateScale(); }


        /**
         * @param prefixName Prefix name of the animation targeting.
         * @param postfixName Postfix name of the animation targeting.
         * @param frameCount Total frame length.
         */
        public constructor(prefixName : string, postfixName : string, frameCount : number) {
            // Load the initial animation frames.
            this.loadAnimation(prefixName, postfixName, frameCount);

            // Play the first frame as default.
            this.playFrame(0);
        }

        /**
         * @desc Run the animation.
         */
        public update() : void {
            if (!this.active)
                return;

            this._fpsTimer += JCS_Time.deltaTime();

            if (this._fpsTimer < this.fps)
                return;

            // Reset timer.
            this._fpsTimer = 0;

            ++this._currentFrame;

            if (this._currentFrame >= this._textures.length) {
                // Loop implementation.
                if (this.loop)
                    this._currentFrame = 0;
                // Set it to maxinum frame.
                else
                    this._currentFrame = this._textures.length - 1;
            }

            this.playFrame(this._currentFrame);
        }

        /**
         * Add this to the layer/interface/scene that would display
         * this animation.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            doc.addChild(this._bitmap);
        }

        /**
         * Play the animation.
         */
        public playAnim() : void {
            this.active = true;

            // show the current playing frame.
            this.playFrame(this._currentFrame);
        }

        /**
         * @desc Stop the animation, the animation will not remain showing.
         */
        public stopAnim() : void {
            this.pauseAnim();

            // Make the bitmap to null.
            this._bitmap.texture = null;

            // Reset frame.
            this._currentFrame = 0;

            // Reset timer.
            this._fpsTimer = 0.0;
        }

        /* Un-pause the animation. */
        public unPauseAnim() : void {
            this.active = true;
        }

        /**
         * @desc Pause the animation, the animation will remain showing on
         * the screen.
         */
        public pauseAnim() : void {
            this.active = false;
        }

        /**
         * @desc Play the frame by texture id/index.
         * @param frameIndex Frame id/index.
         */
        private playFrame(frameIndex : number) {
            // Ensure the frame is valid.
            frameIndex = JCS_Util.clamp(frameIndex, 0, this._textures.length - 1);

            // Play it.
            this._bitmap.texture = this._textures[frameIndex];

            this.updateTextureInfo();
        }

        /**
         * @desc Load the animation into buffer.
         *
         * @param prefixName Prefix name of the animation targeting.
         * @param postfixName Postfix name of the animation targeting.
         * @param frameCount Total frame length.
         */
        private loadAnimation(prefixName : string, postfixName : string, frameCount : number) {
            this._textures = new Array(frameCount);

            for (let index : number = 0;
                 index < frameCount;
                 ++index) {
                let resPath : string = prefixName + index + postfixName;

                this._textures[index] = RES.getRes(resPath);
            }
        }

        /**
         * @desc Update the bitmap position once include calculating all
         * the necessary factors.
         */
        private updatePosition() : void {
            this.getBitmap().x = this._x + this._pivotX;
            this.getBitmap().y = this._y + this._pivotY;
        }

        /**
         * @desc Update the scale of the bitmap by calculating all the
         * necessary factors.
         */
        private updateScale() : void {
            this.getBitmap().width = this._width * this._scaleX;
            this.getBitmap().height = this._height * this._scaleY;
        }

        /* Update the texture info. */
        private updateTextureInfo() : void {
            if (this._bitmap.texture == null) {
                this._width = 0.0;
                this._height = 0.0;
            } else {
                this._width = this.getBitmap().width;
                this._height = this.getBitmap().height;
            }
        }

    }
}
