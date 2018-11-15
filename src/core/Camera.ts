/**
 * $File: Camera.ts $
 * $Date: 2018-10-27 11:40:13 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * 2D Camera.
     */
    export class Camera extends GameObject {

        // Singleton, for camera.
        private static instance : Camera = new Camera();

        // Transform Info
        private _x : number = 0.0;
        private _y : number = 0.0;

        private _recordX : number = 0.0;
        private _recordY : number = 0.0;

        // Target to follow.
        private _followTarget : GameObject = null;


        /* Setter/Getter */
        public setFollowTarget(ft : GameObject) : void { this._followTarget = ft; }
        public getFollowTarget() : GameObject { return this._followTarget; }

        public getX() : number { return this._x; }
        public getY() : number { return this._y; }

        public setX(newX : number) : void { this._x = newX; }
        public setY(newY : number) : void { this._y = newY; }


        /**
         * @desc Singleton, camera.
         */
        public static getInstance() : Camera {
            return Camera.instance;
        }

        public constructor() {
            super();
        }

        /**
         * @desc Run every frame.
         */
        public update() : void {
            // Non-active camera?
            if (!this.active)
                return;

            this.doFollowTarget();

            this.doCamera();
        }

        /**
         * @desc Do the stuff to being as a camera.
         */
        private doCamera() : void {
            let currentScene : Scene = SceneManager.getInstance().getCurrentScene();
            if (currentScene == null)
                return;

            // No need to update.
            if (!this.checkCameraNeedUpdate())
                return;

            /* Prepare info. */
            let deltaX : number = this._x - this._recordX;
            let deltaY : number = this._y - this._recordY;

            let inters : Interface[] = currentScene.getInterfaces();

            for (let interIndex = 0;
                 interIndex < inters.length;
                 ++interIndex)
            {
                let inter : Interface = inters[interIndex];

                let dos : DisplayObject[] = inter.getDisplayObjects();

                for (let doIndex = 0;
                     doIndex < dos.length;
                     ++doIndex)
                {
                    let disObj : DisplayObject = dos[doIndex];

                    /* Position */
                    {
                        let some : number = disObj.getX() - deltaX;

                        disObj.setX(disObj.getX() - deltaX);
                        disObj.setY(disObj.getY() - deltaY);
                    }

                    /* Rotation */
                    {
                        // TODO(jenchieh): ..
                    }

                    /* Scale */
                    {
                        // TODO(jenchieh): ..
                    }
                }
            }

            // Record it once, when done update.
            this.recordCameraStatus();
        }

        /**
         * @desc Do the follow target duty.
         */
        private doFollowTarget() : void {
            // Cannot follow a null object.
            if (this._followTarget == null)
                return;

            // Make sure the current scene exists.
            if (SceneManager.getInstance().getCurrentScene() == null)
                return;


        }

        /**
         * @desc Check to see if the camera need a update.
         * @returns True, need to be update. False, no need to be update.
         */
        private checkCameraNeedUpdate() : boolean {
            return (this._x != this._recordX ||
                   this._y != this._recordY);
        }

        /**
         * @desc Record down the camera status once.
         */
        private recordCameraStatus() : void {
            this._recordX = this._x;
            this._recordY = this._y;
        }

    }
}
