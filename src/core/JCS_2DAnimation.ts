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
        public active : boolean = false;

        // Frame per seconds for this animation.
        public fps : number = 0.5;

        // Loop the animation?
        public loop : boolean = false;


        // Timer to calculate the animation.
        private _fpsTimer : number = 0.0;

        // Current frame count/index.
        private _frame : number = 0;

        // All textures
        private _textures : egret.Texture[] = null;

        // Display object.
        private _bitmap : egret.Bitmap = new egret.Bitmap();


        /* setter/getter */
        public getBitmap() : egret.Bitmap { return this._bitmap; }


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

            if (this.fps < this._fpsTimer)
                return;

            // Reset timer.
            this._fpsTimer = 0;

            ++this._frame;

            this.playFrame(this._frame);

            if (this._frame >= this._textures.length) {
                // Loop implementation.
                if (this.loop)
                    this._frame = 0;
                // Set it to maxinum frame.
                else
                    this._frame = this._textures.length - 1;
            }
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
