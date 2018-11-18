/**
 * $File: Interface.ts $
 * $Date: 2018-10-27 23:01:32 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Interface contain list of game object and ready
     * to game as a group instead of individual component.
     */
    export class Interface extends DisplayObjectContainer {

        public interfaceId : number = -1;

        // List of gameobject going to display in this scene.
        private _gameObjects : GameObject[] = new Array();

        // List of UI object going to display in this scene.
        private _uiObjects : UIObject[] = new Array();


        // How fast the this interface move corresponding to the
        // camera's movement.
        private _friction : number = 1.0;


        /* setter/getter */
        public getGameObjects() : GameObject[] { return this._gameObjects; }
        public getUIObjects() : UIObject[] { return this._uiObjects; }

        public getFriction() : number { return this._friction; }
        public setFriction(val : number) : void { this._friction = MathUtil.abs(val); }


        public constructor() {
            super();
        }

        /**
         * @desc Add this to the layer/interface/scene that
         * would game this object.
         */
        public addToDOC(doc : egret.DisplayObjectContainer) : void {
            this._gameObjects.forEach(function (gameObj) {
                gameObj.addToDOC(doc);
            });

            this._uiObjects.forEach(function (uiObj) {
                uiObj.addToDOC(doc);
            });
        }

        /**
         * @desc Remove the game object fomr this game object container.
         */
        public removeFromDOC(doc : egret.DisplayObjectContainer) : void {
            this._gameObjects.forEach(function (gameObj) {
                gameObj.removeFromDOC(doc);
            });

            this._uiObjects.forEach(function (uiObj) {
                uiObj.removeFromDOC(doc);
            });
        }

        /**
         * @desc Add the game object to this interface.
         *
         * @param gameObj Game object to add to this interface.
         * @returns Game object id.
         */
        public addGO(gameObj : GameObject) : number {
            if (gameObj == null) {
                Debug.error("Cannot add game object with null references...");
                return -1;
            }

            this._gameObjects.push(gameObj);

            // Assign parent interface.
            gameObj.setInterface(this);

            // Assign gameobject id.
            let id : number = this._gameObjects.length - 1;
            gameObj.id = id;

            // Returns gameobject id.
            return id;
        }

        /**
         * @desc Remove game object from the game object list by using
         * game object id.
         *
         * @param id Game object id.
         */
        public removeGOById(id : number) : void {
            delete this._gameObjects[id];
        }

        /**
         * @desc Returns the game object by using game object id.
         *
         * @param id Game object id.
         */
        public getGOById(id : number) : GameObject {
            return this._gameObjects[id];
        }

        /**
         * @desc Apply friction to the velocity of the interface.
         *
         * @note Just have it here so we can design how the friction work when
         * applying to each interface.
         *
         * @returns Friction's multiplication result.
         */
        public applyFriction() : number {
            if (this._friction == 0.0)
                return 1.0;
            return 1.0 / this._friction;
        }

        /**
         * @desc Add UI object to this interface.
         */
        public addUIO(uio : UIObject) : number {
            if (uio == null) {
                Debug.error("Cannot add UI object with null references...");
                return -1;
            }

            this._uiObjects.push(uio);

            // Assign ui object id.
            let id : number = this._uiObjects.length - 1;
            uio.id = id;

            // Returns ui object id.
            return id;
        }

        /**
         * @desc Remove UI object from the UI object list by using the UI
         * object id.
         *
         * @param id UI object id.
         */
        public removeUIOById(id : number) : void {
            delete this._uiObjects[id];
        }

        /**
         * @desc Returns the UI object by using the UI object id.
         *
         * @param id UI object id.
         */
        public getUIOById(id : number) : UIObject {
            return this._uiObjects[id];
        }

    }
}
