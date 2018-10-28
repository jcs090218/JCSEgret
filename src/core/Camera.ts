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

        // Is the camera active?
        public active : boolean = true;

        // Target to follow.
        private _followTarget : GameObject = null;


        /* Setter/Getter */
        public setFollowTarget(ft : GameObject) : void { this._followTarget = ft; }
        public getFollowTarget() : GameObject { return this._followTarget; }


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
        }

        /**
         * @desc Do the follow target duty.
         */
        private doFollowTarget() : void {
            // Cannot follow a null object.
            if (this._followTarget == null)
                return;


        }
    }
}
