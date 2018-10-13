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
     * @class JCS_2DAnimation
     * @desc 2D animation handler. Handle frame by frame animation.
     */
    export class JCS_2DAnimation {

        // Is the current animation active?
        private active : boolean = false;

        // Frame per seconds for this animation.
        private fps : number = 0.5;

        // Timer to calculate the animation.
        private frameTimer : number = 0.0;

        public constructor() {

        }

        /**
         * @func update
         * @desc Run the animation.
         */
        public update() : void {
            if (!this.active)
                return;


        }

    }
}
