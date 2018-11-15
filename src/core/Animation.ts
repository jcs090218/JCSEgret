/**
 * $File: Animation.ts $
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
    export class Animation extends Component {

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
        private _sprite : Sprite = new Sprite();


        /* setter/getter */
        public getSprite() : Sprite { return this._sprite; }

        public getX() : number { return this.getSprite().getX(); }
        public getY() : number { return this.getSprite().getY(); }
        public getWidth() : number { return this.getSprite().getWidth(); }
        public getHeight() : number { return this.getSprite().getHeight(); }
        public getAnchorOffsetX() : number { return this.getSprite().getAnchorOffsetX(); }
        public getAnchorOffsetY() : number { return this.getSprite().getAnchorOffsetY(); }
        public getScaleX() : number { return this.getSprite().getScaleX(); }
        public getScaleY() : number { return this.getSprite().getScaleY(); }

        public setX(x : number) : void { this.getSprite().setX(x); }
        public setY(y : number) : void { this.getSprite().setY(y); }
        public setWidth(w : number) : void { this.getSprite().setWidth(w); }
        public setHeight(h : number) : void { this.getSprite().setHeight(h); }
        public setAnchorOffsetX(px : number) : void { this.getSprite().setAnchorOffsetX(px); }
        public setAnchorOffsetY(py : number) : void { this.getSprite().setAnchorOffsetY(py); }
        public setScaleX(sx : number) : void { this.getSprite().setScaleX(sx); }
        public setScaleY(sy : number) : void { this.getSprite().setScaleY(sy); }


        /**
         * @param prefixName Prefix name of the animation targeting.
         * @param postfixName Postfix name of the animation targeting.
         * @param frameCount Total frame length.
         */
        public constructor(prefixName : string = "", postfixName : string = "", frameCount : number = 0) {
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

            this._fpsTimer += Time.deltaTime();

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
            this.getSprite().addToDOC(doc);
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            this.getSprite().removeFromDOC(doc);
        }

        /**
         * @desc Load the animation into buffer.
         *
         * @param prefixName Prefix name of the animation targeting.
         * @param postfixName Postfix name of the animation targeting.
         * @param frameCount Total frame length.
         */
        public loadAnimation(prefixName : string, postfixName : string, frameCount : number) {
            // Cannot load the animation with empty frame.
            if (frameCount <= 0)
                return;

            // Cannot load the animation with empty stirng.
            if (prefixName == "" && postfixName == "")
                return;

            this._textures = new Array(frameCount);

            for (let index : number = 0;
                 index < frameCount;
                 ++index) {
                let resPath : string = prefixName + index + postfixName;

                this._textures[index] = RES.getRes(resPath);
            }
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
            this.getSprite().setTexture(null);

            // Reset frame.
            this._currentFrame = 0;

            // Reset timer.
            this._fpsTimer = 0.0;
        }

        /**
         * @desc Un-pause the animation.
         */
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
            frameIndex = Util.clamp(frameIndex, 0, this._textures.length - 1);

            // Play it.
            this.getSprite().setTexture(this._textures[frameIndex]);
        }

    }
}
