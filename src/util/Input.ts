/**
 * $File: Input.ts $
 * $Date: 2018-10-28 22:09:50 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Input handle.
     */
    export class Input {

        private static _keysDown : KeyCode[] = [];
        private static _keysReleaseThisFrame : KeyCode[] = [];
        private static _keysPressedThisFrame : KeyCode[] = [];

        private static _frameIdCounter : number = 0;
        private static _frameId : number = 0;

        /**
         * @desc Initialize for input module to get ready to work.
         */
        public static init() : void {
            Input.initKeyboard();
        }

        /**
         * @desc Clean the input buffer every frame.
         */
        public static cleanInputBuffer() : void {
            /* Do frame counter, in order to check if the same frame
             * pressed the same button multiple different places/files. */
            {
                ++Input._frameIdCounter;

                /* NOTE(jenchieh): Not sure javascript will go up to what certain
                 * limit. Just set it to something that would not be easily reach.
                 * In theory, 2 is good enough. [Default: 1000]
                 */
                if (Input._frameIdCounter > 1000)
                    Input._frameIdCounter = 0;
            }

            Input._keysReleaseThisFrame = [];
        }

        /**
         * @desc Check if the key is down?
         * @param keyCode Key code.
         * @returns True, key is down. False, key is not down.
         */
        public static getKeyDown(keyCode : KeyCode) : boolean {
            if (Input.getKey(keyCode)) {
                // Check contains.
                if (Input.containsKey(Input._keysDown, keyCode)) {
                    if (Input._frameIdCounter == Input._frameId)
                        return true;
                    return false;
                } else {
                    // The key is down this frame, add to the check list.
                    // So when the next time it etners will return false.
                    Input.safePushKey(Input._keysDown, keyCode);

                    // Update it so know is the same frame.
                    Input._frameId = Input._frameIdCounter;

                    return true;
                }
            }
            return false;
        }

        /**
         * @desc Check if the key is held down?
         * @param keyCode Key code.
         * @returns True, key is held down. False, key is not held down.
         */
        public static getKey(keyCode : KeyCode) : boolean {
            if (Input.containsKey(Input._keysPressedThisFrame, keyCode))
                return true;
            return false;
        }

        /**
         * @desc Check if the key is up?
         * @param keyCode Key code.
         * @returns True, key is up. False, key is not up.
         */
        public static getKeyUp(keyCode : KeyCode) : boolean {
            for (let index = 0;
                 index < Input._keysReleaseThisFrame.length;
                 ++index)
            {
                let key = Input._keysReleaseThisFrame[index];
                if (key == keyCode)
                    return true;
            }
            return false;
        }

        /**
         * @desc Initialize the keyboard receiver.
         * @param keyCode Key code.
         * @returns True, key is up. False, key is not up.
         */
        private static initKeyboard() {
            // Keyboard handle.
            document.addEventListener("keydown", (e) => {
                let key : KeyCode = <KeyCode>e.keyCode;

                Input.safePushKey(Input._keysPressedThisFrame, key);
            });

            document.addEventListener("keyup", (e) => {
                let key : KeyCode = <KeyCode>e.keyCode;

                Input.safePushKey(Input._keysReleaseThisFrame, key);

                // Remove the key down list.
                Input.removeKeyFromList(Input._keysDown, key);
                Input.removeKeyFromList(Input._keysPressedThisFrame, key);
            });
        }

        /**
         * @desc Check if key is contains in the list.
         */
        private static containsKey(list : KeyCode[], key : KeyCode) {
            return (list.indexOf(key) > -1);
        }

        /**
         * @desc Prevent pushing duplicate keycode.
         * @param list List of keycode.
         * @param key Key code value.
         */
        private static safePushKey(list : KeyCode[], key : KeyCode) {
            // If contain.
            if (Input.containsKey(list, key))
                return;
            list.push(key);
        }

        /**
         * @desc Remove a key from a list.
         * @param list List of keycode.
         * @param key Target key code you want to remove.
         */
        private static removeKeyFromList(list : KeyCode[], key : KeyCode) {
            const searchIndex = list.indexOf(key, 0);
            if (searchIndex > -1) {
                // Remove it.
                list.splice(searchIndex, 1);
            }
        }

    }
}
