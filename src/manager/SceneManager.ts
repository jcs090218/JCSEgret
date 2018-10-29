/**
 * $File: SceneManager.ts $
 * $Date: 2018-10-28 21:20:36 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Scene handler.
     */
    export class SceneManager {

        // Singleton.
        private static _instance : SceneManager = new SceneManager();

        // Is currently switching the scene.
        private _switchingScene : boolean = false;

        // List of scenes this manager holds.
        private _scenes : Scene[] = new Array();

        // Previous scene, use when load the new scene.
        private _prevScene : Scene = null;

        // Current scene object.
        private _currentScene : Scene = null;


        /* setter/getter */


        /**
         * @desc Singleton instance to scene manager.
         */
        public static getInstance() : SceneManager {
            return SceneManager._instance;
        }

        private constructor() {
            // empty..
        }

        /**
         * @desc Update called every frame.
         */
        public update() : void {

        }

        /**
         * @desc Switch the sceen by using the scene object.
         * @param sceneObj Scene object you want to load.
         */
        public switchSceneByScene(sceneObj : Scene) : void {

            // Enable the flag.
            this._switchingScene = true;
        }

        /**
         * @desc Switch the scene by using the name of the scene.
         * @caution Complement information when load scene failed.
         * Faild Conditions:
         *
         *   1) Scene name are exactlly the same, it will load the
         *      first scene we found.
         *   2) Scene does not exists at all.
         *
         * @param sceneName Name of the scene.
         * @returns True, successfully switch to the new scene. False, vice versa.
         */
        public switchSceneByName(sceneName: string) : boolean {
            for (let index = 0;
                 index < this._scenes.length;
                 ++index)
            {
                let sceneObj = this._scenes[index];

                if (sceneObj.name != sceneName)
                    continue;

                // Load the scene.
                this.switchSceneByScene(sceneObj);

                return true;
            }
            return false;
        }

        /**
         * @desc Switch the scene by using the scene id.
         * @param sceneId Scene id.
         */
        public switchSceneById(sceneId : number) : void {
            let sceneObj = this.getSceneById(sceneId);  // Find it.
            this.switchSceneByScene(sceneObj);  // Load it.
        }

        /**
         * Add the scene to scene manager.
         * @returns Scene id.
         */
        public addScene(sceneObj : Scene) : number {
            this._scenes.push(sceneObj);

            // Get the scene id simply by just the index in the array.
            let sceneId : number = this._scenes.length - 1;

            // Assign scene id to currently new added scene object.
            sceneObj.sceneId = sceneId;

            // Returns the scene id.
            return sceneId;
        }

        /**
         * @desc Remove the scene by scene id.
         */
        public removeSceneById(sceneId : number) : void {
            delete this._scenes[sceneId];
        }

        /**
         * @desc Returns the scene object by using the scene id.
         */
        public getSceneById(sceneId : number) : Scene {
            return this._scenes[sceneId];
        }

    }
}
