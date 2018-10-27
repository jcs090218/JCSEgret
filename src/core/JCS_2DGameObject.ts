/**
 * $File: JCS_2DGameObject.ts $
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
    export class JCS_2DGameObject extends JCS_Component {

        private _components : JCS_Component[] = new Array();


        /* Setter/Getter */


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

            /* Update all the components. */
            this._components.forEach(function (comp) {
                comp.update();
            });
        }

        /**
         * @desc Add a component to this gameobject.
         *
         * @param comp Component to add to this gameobject.
         * @returns Component id represent to this component.
         */
        public addComp(comp : JCS_Component) : number {
            if (comp == null) {
                JCS_Debug.error("Cannot add component with null reference...");
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
        public getCompById(id : number) : JCS_Component {
            return this._components[id];
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            this._components.forEach(function (comp) {
                comp.addToDOC(doc);
            });
        }
    }
}
