/**
 * $File: Animator.ts $
 * $Date: 2018-10-16 01:51:59 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Animator that controls multiple animations.
     */
    export class Animator extends Component {

        // Animation that this animator handle.
        private _animations : Animation[] = new Array();

        // Current animation playing.
        private _currentAnim : Animation = null;


        /* setter/getter */
        public getX() : number { return this._currentAnim.getX(); }
        public getY() : number { return this._currentAnim.getY(); }
        public getWidth() : number { return this._currentAnim.getWidth(); }
        public getHeight() : number { return this._currentAnim.getHeight(); }
        public getAnchorOffsetX() : number { return this._currentAnim.getAnchorOffsetX(); }
        public getAnchorOffsetY() : number { return this._currentAnim.getAnchorOffsetY(); }
        public getScaleX() : number { return this._currentAnim.getScaleX(); }
        public getScaleY() : number { return this._currentAnim.getScaleY(); }

        public setX(newX : number) : void { this.setSpriteData(SpriteData.X, newX); }
        public setY(newY : number) : void { this.setSpriteData(SpriteData.Y, newY); }
        public setWidth(newWidth : number) : void { this.setSpriteData(SpriteData.WIDTH, newWidth); }
        public setHeight(newHeight : number) : void { this.setSpriteData(SpriteData.HEIGHT, newHeight); }
        public setAnchorOffsetX(px : number) : void { this.setSpriteData(SpriteData.ANCHOR_OFFSET_X, px); }
        public setAnchorOffsetY(py : number) : void { this.setSpriteData(SpriteData.ANCHOR_OFFSET_Y, py); }
        public setScaleX(px : number) : void { this.setSpriteData(SpriteData.SCALE_X, px); }
        public setScaleY(py : number) : void { this.setSpriteData(SpriteData.SCALE_Y, py); }

        /**
         * @desc Setter to all sprite data.
         */
        private setSpriteData(dt : SpriteData, newVal : number) : void {
            this._animations.forEach(function (anim) {
                switch (dt) {
                    case SpriteData.X: anim.setX(newVal); break;
                    case SpriteData.Y: anim.setY(newVal); break;
                    case SpriteData.WIDTH: anim.setWidth(newVal); break;
                    case SpriteData.HEIGHT: anim.setHeight(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_X: anim.setAnchorOffsetX(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_Y: anim.setAnchorOffsetY(newVal); break;
                    case SpriteData.SCALE_X: anim.setScaleX(newVal); break;
                    case SpriteData.SCALE_Y: anim.setScaleY(newVal); break;
                }
            });
        }


        public constructor() {
            super();
        }

        /**
         * @desc Updating the animator.
         */
        public update() : void {
            if (!this.active)
                return;

            if (this._currentAnim == null)
                return;

            // Don't forget to update the current animation
            // this animator currently want to play.
            this._currentAnim.update();
        }

        /**
         * Add this to the layer/interface/scene that would display
         * this animation.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            this._animations.forEach(function (anim) {
                anim.addToDOC(doc);
            });
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            this._animations.forEach(function (anim) {
                anim.removeFromDOC(doc);
            });
        }

        /**
         * @desc Switch the current playing animation by id.
         *
         * @param id Animation id.
         */
        public switchAnimById(id : number) : void {
            // Ensure the animation is valid.
            let targetId = Util.clamp(id, 0, this._animations.length - 1);

            // Point to the animation targeting.
            this._currentAnim = this._animations[targetId];

            // Stop all the animations.
            this._animations.forEach(function (anim) {
                anim.stopAnim();
            });

            // Only play this animation.
            this._currentAnim.playAnim();
        }

        /**
         * @desc Load the animator with multiple animations.
         *
         * @param anims List of animation.
         */
        public loadAnimator(anims : Animation[]) : void {
            for (let index = 0;
                 index < anims.length;
                 ++index)
            {
                if (anims[index] == null) {
                    Debug.log("Cannot load animator with [" + index + "] index animtion is null references...");
                    continue;
                }

                this.addAnim(anims[index]);
            }
        }

        /**
         * @desc Add the animation to this animator.
         *
         * @param anim Animation to add to.
         * @returns Animation id for this animation.
         */
        public addAnim(anim : Animation) : number {
            if (anim == null) {
                Debug.error("Cannot add animation with null references...");
                return -1;
            }

            this._animations.push(anim);

            let animId : number = this._animations.length - 1;

            // Initialize the animator the play the first animation
            // as default.
            {
                if (animId == 0)
                    this.switchAnimById(0);
                else
                    anim.stopAnim();
            }

            anim.animId = animId;

            // Returns the animation id.
            return animId;
        }

        /**
         * @desc Remove the animation by animation id.
         *
         * @param id Animation id.
         */
        public removeAnimById(id : number) : void {
            delete this._animations[id];
        }

        /**
         * @desc Get the animation by animation id.
         *
         * @param id Animation id.
         */
        public getAnimById(id : number) : Animation {
            return this._animations[id];
        }

    }
}
