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
    export class JCS_2DAnimation extends JCS_Component {

        // Frame per seconds for this animation.
        public fps : number = 0.2;

        // Loop the animation?
        public loop : boolean = true;

        public animId : number = -1;


        // Timer to calculate the animation.
        private _fpsTimer : number = 0.0;

        // Current frame count/index.
        private _currentFrame : number = 0;

        // All textures
        private _textures : egret.Texture[] = null;

        // Display object.
        private _bitmap : egret.Bitmap = new egret.Bitmap();


        /* setter/getter */
        public getBitmap() : egret.Bitmap { return this._bitmap; }

        public getX() : number { return this.getBitmap().x; }
        public getY() : number { return this.getBitmap().y; }
        public getWidth() : number { return this.getBitmap().width; }
        public getHeight() : number { return this.getBitmap().height; }
        public getPivotX() : number { return this.getBitmap().anchorOffsetX; }
        public getPivotY() : number { return this.getBitmap().anchorOffsetY; }
        public getScaleX() : number { return this.getBitmap().scaleX; }
        public getScaleY() : number { return this.getBitmap().scaleY; }

        public setX(x : number) : void { this.getBitmap().x = x; }
        public setY(y : number) : void { this.getBitmap().y = y; }
        public setWidth(w : number) : void { this.getBitmap().width = w; }
        public setHeight(h : number) : void { this.getBitmap().height = h; }
        public setPivotX(px : number) : void { this.getBitmap().anchorOffsetX = px; }
        public setPivotY(py : number) : void { this.getBitmap().anchorOffsetY = py; }
        public setScaleX(sx : number) : void { this.getBitmap().scaleX = sx; }
        public setScaleY(sy : number) : void { this.getBitmap().scaleY = sy; }


        /**
         * @param prefixName Prefix name of the animation targeting.
         * @param postfixName Postfix name of the animation targeting.
         * @param frameCount Total frame length.
         */
        public constructor(prefixName : string, postfixName : string, frameCount : number) {
            super();

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
         * @desc Add this to the layer/interface/scene that would display
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

    }
}
