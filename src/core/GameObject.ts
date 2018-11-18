/**
 * $File: GameObject.ts $
 * $Date: 2018-10-16 01:53:51 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc GameObject determine the status of this object.
     */
    export class GameObject extends Component {

        // Game Object identity.
        public id : number = -1;

        // List of component this gameobject holds.
        private _components : Component[] = new Array();

        // Point to the interface this game object is on.
        private _interface : Interface = null;

        private _sprite : Sprite = null;
        private _animation : Animation = null;
        private _animator : Animator = null;


        /* Setter/Getter */
        public setInterface(inter : Interface) : void {
            if (this._interface != null)
                Debug.warning("You are trying to set the interface that already exists, overwrite it!");
            this._interface = inter;
        }

        public setSprite(sp : Sprite) : void { this._sprite = sp; }
        public setAnimation(anim : Animation) : void { this._animation = anim; }
        public setAnimator(ator : Animator) : void { this._animator = ator; }

        public getSprite() : Sprite { return this._sprite; }
        public getAnimation() : Animation { return this._animation; }
        public getAnimator() : Animator { return this._animator; }

        public getX() : number { return this.getSpriteData(SpriteData.X); }
        public getY() : number { return this.getSpriteData(SpriteData.Y); }
        public getWidth() : number { return this.getSpriteData(SpriteData.WIDTH); }
        public getHeight() : number { return this.getSpriteData(SpriteData.HEIGHT); }
        public getAnchorOffsetX() : number { return this.getSpriteData(SpriteData.ANCHOR_OFFSET_X); }
        public getAnchorOffsetY() : number { return this.getSpriteData(SpriteData.ANCHOR_OFFSET_Y); }
        public getScaleX() : number { return this.getSpriteData(SpriteData.SCALE_X); }
        public getScaleY() : number { return this.getSpriteData(SpriteData.SCALE_Y); }

        public setX(newX : number) : void { this.setSpriteData(SpriteData.X, newX); }
        public setY(newY : number) : void { this.setSpriteData(SpriteData.Y, newY); }
        public setWidth(w : number) : void { this.setSpriteData(SpriteData.WIDTH, w); }
        public setHeight(h : number) : void { this.setSpriteData(SpriteData.HEIGHT, h); }
        public setAnchorOffsetX(px : number) : void { this.setSpriteData(SpriteData.ANCHOR_OFFSET_X, px); }
        public setAnchorOffsetY(py : number) : void { this.setSpriteData(SpriteData.ANCHOR_OFFSET_Y, py); }
        public setScaleX(sx : number) : void { this.setSpriteData(SpriteData.SCALE_X, sx); }
        public setScaleY(sy : number) : void { this.setSpriteData(SpriteData.SCALE_Y, sy); }

        public deltaX(dx : number) : void { this.setX(this.getX() + dx); }
        public deltaY(dy : number) : void { this.setY(this.getY() + dy); }

        /**
         * @desc Setter to all sprite data.
         */
        private setSpriteData(dt : SpriteData, newVal : number) : void {
            if (this._animator != null) {
                switch (dt) {
                    case SpriteData.X: this._animator.setX(newVal); break;
                    case SpriteData.Y: this._animator.setY(newVal); break;
                    case SpriteData.WIDTH: this._animator.setWidth(newVal); break;
                    case SpriteData.HEIGHT: this._animator.setHeight(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_X: this._animator.setAnchorOffsetX(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_Y: this._animator.setAnchorOffsetY(newVal); break;
                    case SpriteData.SCALE_X: this._animator.setScaleX(newVal); break;
                    case SpriteData.SCALE_Y: this._animator.setScaleY(newVal); break;
                }
            }

            else if (this._animation != null) {
                switch (dt) {
                    case SpriteData.X: this._animation.setX(newVal); break;
                    case SpriteData.Y: this._animation.setY(newVal); break;
                    case SpriteData.WIDTH: this._animation.setWidth(newVal); break;
                    case SpriteData.HEIGHT: this._animation.setHeight(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_X: this._animation.setAnchorOffsetX(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_Y: this._animation.setAnchorOffsetY(newVal); break;
                    case SpriteData.SCALE_X: this._animation.setScaleX(newVal); break;
                    case SpriteData.SCALE_Y: this._animation.setScaleY(newVal); break;
                }
            }

            else if (this._sprite != null) {
                switch (dt) {
                    case SpriteData.X: this._sprite.setX(newVal); break;
                    case SpriteData.Y: this._sprite.setY(newVal); break;
                    case SpriteData.WIDTH: this._sprite.setWidth(newVal); break;
                    case SpriteData.HEIGHT: this._sprite.setHeight(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_X: this._sprite.setAnchorOffsetX(newVal); break;
                    case SpriteData.ANCHOR_OFFSET_Y: this._sprite.setAnchorOffsetY(newVal); break;
                    case SpriteData.SCALE_X: this._sprite.setScaleX(newVal); break;
                    case SpriteData.SCALE_Y: this._sprite.setScaleY(newVal); break;
                }
            }
        }

        /**
         * @desc Getter to all sprite data.
         * @param dt Type of the data you want to get.
         */
        private getSpriteData(dt : SpriteData) : number {
            if (this._animator != null) {
                switch (dt) {
                    case SpriteData.X: return this._animator.getX();
                    case SpriteData.Y: return this._animator.getY();
                    case SpriteData.WIDTH: this._animator.getWidth();
                    case SpriteData.HEIGHT: this._animator.getHeight();
                    case SpriteData.ANCHOR_OFFSET_X: this._animator.getAnchorOffsetX();
                    case SpriteData.ANCHOR_OFFSET_Y: this._animator.getAnchorOffsetY();
                    case SpriteData.SCALE_X: this._animator.getScaleX();
                    case SpriteData.SCALE_Y: this._animator.getScaleY();
                }
            }

            else if (this._animation != null) {
                switch (dt) {
                    case SpriteData.X: return this._animation.getX();
                    case SpriteData.Y: return this._animation.getY();
                    case SpriteData.WIDTH: this._animation.getWidth();
                    case SpriteData.HEIGHT: this._animation.getHeight();
                    case SpriteData.ANCHOR_OFFSET_X: this._animation.getAnchorOffsetX();
                    case SpriteData.ANCHOR_OFFSET_Y: this._animation.getAnchorOffsetY();
                    case SpriteData.SCALE_X: this._animation.getScaleX();
                    case SpriteData.SCALE_Y: this._animation.getScaleY();
                }
            }

            else if (this._sprite != null) {
                switch (dt) {
                    case SpriteData.X: return this._sprite.getX();
                    case SpriteData.Y: return this._sprite.getY();
                    case SpriteData.WIDTH: this._sprite.getWidth();
                    case SpriteData.HEIGHT: this._sprite.getHeight();
                    case SpriteData.ANCHOR_OFFSET_X: this._sprite.getAnchorOffsetX();
                    case SpriteData.ANCHOR_OFFSET_Y: this._sprite.getAnchorOffsetY();
                    case SpriteData.SCALE_X: this._sprite.getScaleX();
                    case SpriteData.SCALE_Y: this._sprite.getScaleY();
                }
            }
        }


        /**
         * @param main Container that can be register the update event to.
         */
        public constructor() {
            super();
        }

        /**
         * @desc Update is called each frame.
         */
        public update() : void {
            if (!this.active)
                return;

            /* Update Rednerer. */
            if (this._animator != null)
                this._animator.update();
            else if (this._animation != null)
                this._animation.update();
            else if (this._sprite != null)
                this._sprite.update();

            /* Update all the components. */
            this._components.forEach(function (comp) {
                if (comp != null)
                    comp.update();
            });
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            if (this._animator != null)
                this._animator.addToDOC(doc);
            else if (this._animation != null)
                this._animation.addToDOC(doc);
            else if (this._sprite != null)
                this._sprite.addToDOC(doc);

            this._components.forEach(function (comp) {
                comp.addToDOC(doc);
            });
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            if (this._animator != null)
                this._animator.removeFromDOC(doc);
            else if (this._animation != null)
                this._animation.removeFromDOC(doc);
            else if (this._sprite != null)
                this._sprite.removeFromDOC(doc);

            this._components.forEach(function (comp) {
                comp.removeFromDOC(doc);
            });
        }

        /**
         * @desc Add a component to this gameobject.
         *
         * @param comp Component to add to this gameobject.
         * @returns Component id represent to this component.
         */
        public addComp(comp : Component) : number {
            if (comp == null) {
                Debug.error("Cannot add component with null reference...");
                return;
            }

            this._components.push(comp);

            // Returns component's id.
            let compId : number = this._components.length - 1;
            return compId;
        }

        /**
         * @desc Remove the component by id.
         *
         * @param id Component id.
         */
        public removeCompById(id : number) : void {
            delete this._components[id];
        }

        /**
         * @desc Get the component by component id.
         *
         * @param id Component id.
         */
        public getCompById(id : number) : Component {
            return this._components[id];
        }

        /**
         * @desc Load the sprite by file path.
         *
         * @param imgName Target image name to load.
         */
        public loadSprite(imgName : string) : void {
            this._sprite = new Sprite();
            this._sprite.loadSprite(imgName);
        }

        /**
         * @desc Load the animation by file path.
         *
         * @param prefixName Prefix name of the animation targeting.
         * @param postfixName Postfix name of the animation targeting.
         * @param frameCount Total frame length.
         */
        public loadAnimation(prefixName : string, postfixName : string, frameCount : number) : void {
            this._animation = new Animation();
            this._animation.loadAnimation(prefixName, postfixName, frameCount);
        }

        /**
         * @desc Load the animator with multiple animations.
         *
         * @param anims List of animation.
         */
        public loadAnimator(anims : Animation[]) : void {
            this._animator = new Animator();
            this._animator.loadAnimator(anims);
        }

        /**
         * @desc Switch the current playing animation by id.
         *
         * @param id Animation id.
         */
        public switchAnimById(id : number) : void {
            if (this._animator == null) {
                Debug.log("Cannot switch animation without the animator...");
                return;
            }

            this._animator.switchAnimById(id);
        }

    }
}
