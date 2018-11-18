/**
 * $File: UIObject.ts $
 * $Date: 2018-11-18 19:27:38 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc UI game object class.
     */
    export abstract class UIObject extends DisplayObject {

        // Object id.
        public id : number = -1;


        /* setter/getter */
        

        public constructor() {
            super();
        }

    }
}
