/**
 * $File: JCS_2DAnimator.ts $
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
    export class JCS_2DAnimator {

        private active : boolean = true;

        // Animation that this animator handle.
        private _animations : JCS_2DAnimation[] = new Array();

        // Current animation playing.
        private _currentAnim : JCS_2DAnimation = null;

        /* setter/getter */
        public getX() : number { return this._currentAnim.getX(); }
        public getY() : number { return this._currentAnim.getY(); }
        public getWidth() : number { return this._currentAnim.getWidth(); }
        public getHeight() : number { return this._currentAnim.getHeight(); }
        public getPivotX() : number { return this._currentAnim.getPivotX(); }
        public getPivotY() : number { return this._currentAnim.getPivotY(); }
        public getScaleX() : number { return this._currentAnim.getScaleX(); }
        public getScaleY() : number { return this._currentAnim.getScaleY(); }

        public setX(newX : number) : void { this.setAnimData(JCS_2DAnimData.X, newX); }
        public setY(newY : number) : void { this.setAnimData(JCS_2DAnimData.Y, newY); }
        public setWidth(newWidth : number) : void { this.setAnimData(JCS_2DAnimData.WIDTH, newWidth); }
        public setHeight(newHeight : number) : void { this.setAnimData(JCS_2DAnimData.HEIGHT, newHeight); }
        public setPivotX(px : number) : void { this.setAnimData(JCS_2DAnimData.PIVOT_X, px); }
        public setPivotY(py : number) : void { this.setAnimData(JCS_2DAnimData.PIVOT_Y, py); }
        public setScaleX(px : number) : void { this.setAnimData(JCS_2DAnimData.SCALE_X, px); }
        public setScaleY(py : number) : void { this.setAnimData(JCS_2DAnimData.SCALE_Y, py); }

        /**
         * @desc Setter to all animation data.
         */
        private setAnimData(dt : JCS_2DAnimData, newVal : number) {
            this._animations.forEach(function (anim) {
                switch (dt) {
                    case JCS_2DAnimData.X: anim.setX(newVal); break;
                    case JCS_2DAnimData.Y: anim.setY(newVal); break;
                    case JCS_2DAnimData.WIDTH: anim.setWidth(newVal); break;
                    case JCS_2DAnimData.HEIGHT: anim.setHeight(newVal); break;
                    case JCS_2DAnimData.PIVOT_X: anim.setPivotX(newVal); break;
                    case JCS_2DAnimData.PIVOT_Y: anim.setPivotY(newVal); break;
                    case JCS_2DAnimData.SCALE_X: anim.setScaleX(newVal); break;
                    case JCS_2DAnimData.SCALE_Y: anim.setScaleY(newVal); break;
                }
            });
        }


        public constructor() {
            // empty..
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
         * @desc Switch the current playing animation by id.
         */
        public switchAnimation(id : number) : void {
            // Ensure the animation is valid.
            let targetId = JCS_Util.clamp(id, 0, this._animations.length - 1);

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
         * @desc Add the animation to this animator.
         *
         * @param anim Animation to add to.
         * @returns Animation id for this animation.
         */
        public addAnimation(anim : JCS_2DAnimation) : number {
            if (anim == null) {
                JCS_Debug.error("Cannot add animation with null references...");
                return;
            }

            this._animations.push(anim);

            let animId : number = this._animations.length - 1;

            // Initialize the animator the play the first animation
            // as default.
            if (animId == 0)
                this.switchAnimation(0);

            // Returns the animation id.
            return animId;
        }

        /**
         * @desc Remove the animation by animation id.
         *
         * @param id Animation id.
         */
        public removeAnimation(id : number) : void {
            delete this._animations[id];
        }

    }
}
