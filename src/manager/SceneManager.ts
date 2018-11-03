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

        private _sceneFadeInTime : number = 1.5;  // Time to fade in the scene.
        private _sceneFadeOutTime : number = 1.5;  // Time to fade out the scene.

        // Next scene, use when load the new scene.
        private _nextScene : Scene = null;

        // Current scene object.
        private _currentScene : Scene = null;


        // List of scenes this manager holds.
        private _scenes : Scene[] = new Array();

        // Is currently switching the scene.
        private _switchingScene : boolean = false;

        // Screen/Mask use to fade the scene.
        private _fadeScreen : egret.Shape = null;

        // Fading the screen.
        private _fadingIn : boolean = false;


        /* setter/getter */
        public getCurrentScene() : Scene { return this._currentScene; }


        /**
         * @desc Singleton instance to scene manager.
         */
        public static getInstance() : SceneManager {
            return SceneManager._instance;
        }

        private constructor() {
            // empty..
        }

        public init() : void {
            /* Initialize the fade screen. */
            {
                this._fadeScreen = new egret.Shape();
                this._fadeScreen.graphics.beginFill(0x000000, 1.0);
                this._fadeScreen.graphics.drawRect(0, 0, Screen.width(), Screen.height());
                this._fadeScreen.graphics.endFill();
                GameManager.getInstance().addToLayer(this._fadeScreen);

                Util.moveToLastChild(this._fadeScreen);
            }
        }

        /**
         * @desc Update called every frame.
         */
        public update() : void {
            this.doSwitchScene();
        }

        /**
         * @desc Switch the sceen by using the scene object.
         * @param sceneObj Scene object you want to load.
         */
        public switchSceneByScene(sceneObj : Scene) : void {
            if (this._switchingScene)
                return;

            if (sceneObj == null) {
                Debug.log("Cannot load the scene with scene null references...");
                return;
            }

            // Get the scene buffer.
            this._nextScene = sceneObj;

            /* If current scene is null, meaning the scene is first scene
             * to load. */
            if (this._currentScene == null) {
                // Directly assign the to the current scene.
                this._currentScene = sceneObj;

                this._fadeScreen.alpha = 1.0;

                // Fade out the black screen immediately.
                this._fadingIn = false;
            } else {
                this._fadeScreen.alpha = 0.0;

                // If we currently have scene, we have to fade in the
                // black screen first.
                this._fadingIn = true;
            }

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

        /**
         * @desc Do to fade in/out the scene.
         */
        private doSwitchScene() : void {
            if (!this._switchingScene)
                return;

            let alpha : number = this._fadeScreen.alpha;

            Util.moveToLastChild(this._fadeScreen);

            // Fading in.
            if (this._fadingIn) {
                alpha += (1.0 / this._sceneFadeInTime) * Time.deltaTime();

                if (alpha >= 1) {
                    this._fadeScreen.alpha = 1;

                    // Invoke scene unload.
                    if (this._currentScene.onSceneUnLoad != null)
                        this._currentScene.onSceneUnLoad();

                    // Swap the current scene.
                    this._currentScene = this._nextScene;

                    // Invoke scene loaded callback.
                    if (this._currentScene.onSceneLoaded != null)
                        this._currentScene.onSceneLoaded();

                    // Ready to fade out.
                    this._fadingIn = false;
                } else {
                    this._fadeScreen.alpha = alpha;
                }
            }
            // Fading out.
            else {
                alpha -= (1.0 / this._sceneFadeOutTime) * Time.deltaTime();

                if (alpha <= 0) {
                    this._fadeScreen.alpha = 0;

                    // Done switch scene task.
                    this._switchingScene = false;
                } else {
                    this._fadeScreen.alpha = alpha;
                }
            }
        }

    }
}
