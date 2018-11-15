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
    export class Camera {

        // Is the component active?
        public active : boolean = true;

        // Singleton, for camera.
        private static instance : Camera = new Camera();

        // Transform Info
        private _x : number = 0.0;
        private _y : number = 0.0;

        private _recordX : number = 0.0;
        private _recordY : number = 0.0;

        // Target to follow.
        private _followTarget : GameObject = null;

        // How fast it stop the camera to follow.
        private _followFrictionX : number = 0.6;
        private _followFrictionY : number = 0.6;


        /* Setter/Getter */
        public setFollowTarget(ft : GameObject) : void { this._followTarget = ft; }
        public getFollowTarget() : GameObject { return this._followTarget; }

        public setFollowFrictionX(ffx : number) : void { this._followFrictionX = ffx; }
        public getFollowFrictionX() : number { return this._followFrictionX; }
        public setFollowFrictionY(ffy : number) : void { this._followFrictionY = ffy; }
        public getFollowFrictionY() : number { return this._followFrictionY; }

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
            // empty..
        }

        /**
         * @desc Run every frame.
         */
        public update() : void {
            // Non-active camera?
            if (!this.active)
                return;

            this.doFollowTarget();

            this.keepInSceneBoundaries();

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

            let inters : Interface[] = currentScene.getInterfaces();

            for (let interIndex = 0;
                 interIndex < inters.length;
                 ++interIndex)
            {
                let inter : Interface = inters[interIndex];

                let dos : GameObject[] = inter.getGameObjects();

                for (let doIndex = 0;
                     doIndex < dos.length;
                     ++doIndex)
                {
                    let gameObj : GameObject = dos[doIndex];

                    /* Position */
                    {
                        let deltaX : number = (this._x - this._recordX) * inter.applyFriction();
                        let deltaY : number = (this._y - this._recordY) * inter.applyFriction();

                        gameObj.setX(gameObj.getX() - deltaX);
                        gameObj.setY(gameObj.getY() - deltaY);
                    }

                    /* Rotation */
                    {
                        // TODO(jenchieh): Implement this..
                    }

                    /* Scale */
                    {
                        // TODO(jenchieh): Implement this..
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
            let currentScene : Scene = SceneManager.getInstance().getCurrentScene();
            if (currentScene == null)
                return;

            let targetX : number = this._followTarget.getX() - (Screen.width() / 2.0);
            let targetY : number = this._followTarget.getY() - (Screen.height() / 2.0);

            let newX : number = this.getX() + (targetX - this.getX()) / this._followFrictionX * Time.deltaTime();
            let newY : number = this.getY() + (targetY - this.getY()) / this._followFrictionY * Time.deltaTime();

            this.setX(newX);
            this.setY(newY);
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

        /**
         * @desc Keep the camera in the scene boundaries.
         */
        private keepInSceneBoundaries() : void {
            // Make sure the current scene exists.
            let currentScene : Scene = SceneManager.getInstance().getCurrentScene();
            if (currentScene == null)
                return;

            // Keep left/right boundary.
            if (this._x < currentScene.min_x_bound)
                this._x = currentScene.min_x_bound;
            else if (this._x > currentScene.max_x_bound)
                this._x = currentScene.max_x_bound;

            // Keep top/bottom boundary.
            if (this._y < currentScene.min_y_bound)
                this._y = currentScene.min_y_bound;
            else if (this._y > currentScene.max_y_bound)
                this._y = currentScene.max_y_bound;
        }

    }
}
