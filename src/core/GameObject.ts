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


        /* Setter/Getter */
        public setX(newX : number) : void {
            this._components.forEach(function (comp) {
                comp.setX(newX);
            });
        }
        public setY(newY : number) : void {
            this._components.forEach(function (comp) {
                comp.setX(newY);
            });
        }

        public getX() : number {
            if (this._components.length <= 1)
                return this._components[0].getX();
            else
                return 0.0 ;
        }
        public getY() : number {
            if (this._components.length <= 1)
                return this._components[0].getY();
            else
                return 0.0 ;
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
         * @desc Add this to the layer/interface/scene that
         * would display this object.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            this._components.forEach(function (comp) {
                comp.addToDOC(doc);
            });
        }

        /**
         * @desc Remove the display object fomr this display object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            this._components.forEach(function (comp) {
                comp.removeFromDOC(doc);
            });
        }

    }
}
