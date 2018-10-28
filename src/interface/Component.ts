/**
 * $File: Component.ts $
 * $Date: 2018-10-27 13:50:16 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Component base class for JCSEgret.
     */
    export abstract class Component extends DisplayObject {

        // Is the component active?
        public active : boolean = true;

        // Flag to check if the current component registered the update event.
        protected _registerUpdate : boolean = false;

        /* Setter/Getter */


        public constructor() {
            super();
        }

        /**
         * @desc Update is called each frame.
         */
        public abstract update() : void;

        /**
         * @desc Register the update event.
         * @param main Container that can be register the update event to.
         */
        public registerUpdate(main : eui.UILayer) : number {
            if (main == null) {
                Debug.error("Cannot register the update event with group null reference...");
                return;
            }

            if (this._registerUpdate) {
                Debug.warning("Register event have already been register...");
                return;
            }

            // Register it.
            main.addEventListener(egret.Event.ENTER_FRAME,
                                  this.update,
                                  this);

            // Make sure the register update can only be register once.
            this._registerUpdate = true;
        }
    }
}
