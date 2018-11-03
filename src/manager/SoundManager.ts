/**
 * $File: SoundManager.ts $
 * $Date: 2018-10-29 15:51:30 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Sound handler.
     */
    export class SoundManager {

        private static _instance : SoundManager = new SoundManager();

        /* Background Music */
        private _currentBGM : egret.Sound = null;
        private _nextBGM = egret.Sound = null;
        private _switchingBGM : boolean = false;

        // Background music volume.
        private _bgmStartingVolume = 1.0;

        private _bgmFadeInTime : number = 1.5;
        private _bgmFadeOutTime : number = 1.5;

        // NOTE(jenchieh): How long the time need to add/subtract from
        // the volume per frame.
        //
        // `fade split time` = `bgm volume` / `total fade time`
        private _bgmFadeInSplitTime : number = 0.0;
        private _bgmFadeOutSplitTime : number = 0.0;

        // Sound Channel object to control the volume, audio length,
        // all kind of audio data, etc.
        private _currentBGMSoundChannel : egret.SoundChannel = null;

        // Fading in/out the sound flag.
        private _fadingIn : boolean = false;


        /* setter/getter */
        public setBGMFadeInTime(time : number) { this._bgmFadeInTime = MathUtil.abs(time); }
        public setBGMFadeOutTime(time : number) { this._bgmFadeOutTime = MathUtil.abs(time); }
        public setBGMVolume(volume : number) { this._currentBGMSoundChannel.volume = volume; }
        public getBGMVolume() : number { return this._currentBGMSoundChannel.volume; }


        // Singleton.
        private constructor() { }
        public static getInstance() { return SoundManager._instance; }


        /**
         * @desc Udpate called every frame.
         */
        public update() : void {
            this.doSwitchBGM();
        }


        /**
         * @desc Play the background music by name.
         * @param name Name of the background music.
         */
        public switchBGMByName(name : string) : void {
            let sound = RES.getRes(name);
            this.switchBGMBySound(sound);
        }

        /**
         * @desc Play the background music by sound.
         * @param sound Sound object.
         */
        public switchBGMBySound(sound : egret.Sound) : void {
            if (sound == null) {
                Debug.log("Cannot load background music with sound null references...");
                return;
            }

            // First assign the preload, wait util the sound is fade out.
            this._nextBGM = sound;

            /* If current bgm is null, meaning the bgm is first bgm
             * to load. */
            if (this._currentBGM == null) {
                // Directly assign the to the current bgm.
                this._currentBGM = sound;

                this._currentBGMSoundChannel = this._currentBGM.play();  // Get the sound channel.
                this._currentBGMSoundChannel.volume = 0;  // Start with no sound.

                // Calculate the fade time related variables.
                this._bgmFadeInSplitTime = this._bgmStartingVolume / this._bgmFadeInTime;
                this._bgmFadeOutSplitTime = this._bgmStartingVolume / this._bgmFadeOutTime;

                // Fade in immediately.
                this._fadingIn = true;
            } else {

                // Calculate the fade time related variables.
                this._bgmFadeInSplitTime = this._currentBGMSoundChannel.volume / this._bgmFadeInTime;
                this._bgmFadeOutSplitTime = this._currentBGMSoundChannel.volume / this._bgmFadeOutTime;

                // If we currently have BGM, we need to fade out first.
                this._fadingIn = false;
            }

            // Enable switch BGM flag.
            this._switchingBGM = true;
        }

        /**
         * @desc Play one shot the sound by using the name.
         * @param name Name of the resource name.
         */
        public playOneShotByName(name : string) : void {
            let sound = RES.getRes(name);
            this.playOneShotBySound(sound);
        }

        /**
         * @desc Play one shot the sound by using the sound itself.
         * @param sound Sound object.
         */
        public playOneShotBySound(sound : egret.Sound) : void {
            if (sound == null)
                return;

            sound.play(
                0,   // Start time. (Default: 0)
                1);  // Loops. (Default : 0, 0 means loop forever.)
        }

        /**
         * @desc Do the fade in/out to switch the background music.
         */
        private doSwitchBGM() : void {
            if (!this._switchingBGM)
                return;

            let volume : number = this._currentBGMSoundChannel.volume;

            // Fading In.
            if (this._fadingIn) {
                volume += this._bgmFadeInSplitTime * Time.deltaTime();

                if (volume >= 1) {
                    this._currentBGMSoundChannel.volume = 1;

                    // Done switching BGM task.
                    this._switchingBGM = false;
                } else {
                    this._currentBGMSoundChannel.volume = volume;
                }
            }
            // Fading out.
            else {
                volume -= this._bgmFadeOutSplitTime * Time.deltaTime();

                if (volume <= 0) {
                    // NOTE(jenchieh): We do not know what happens when the volume
                    // is lower than 0. Just ensure is 0.
                    this._currentBGMSoundChannel.volume = 0;

                    this._currentBGMSoundChannel.stop();

                    // Update the current BGM to next BGM.
                    this._currentBGM = this._nextBGM;

                    this._currentBGMSoundChannel = this._currentBGM.play();  // Get the sound channel.
                    this._currentBGMSoundChannel.volume = 0;  // Start with no sound.

                    // Ready to switch current BGM, and fade the sound in.
                    this._fadingIn = true;
                } else {
                    this._currentBGMSoundChannel.volume = volume;
                }
            }

        }

    }
}
