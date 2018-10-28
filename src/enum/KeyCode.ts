/**
 * $File: KeyCode.ts $
 * $Date: 2018-10-28 22:22:23 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2018 by Shen, Jen-Chieh $
 */


namespace JCSEgret {

    /**
     * @desc Keycode.
     */
    export enum KeyCode {
        BACKSPACE       = 8,
        TAB             = 9,
        CLEAR           = 12,
        RETURN          = 13,
        ESCAPE          = 27,
        SPACE           = 32,
        EXCLAIM         = 33,  /* Exclamation mark key '!'   */
        DOUBLE_QUOTE    = 34,  /* Double quote key '"'       */
        HASH            = 35,  /* Hash key '#'               */
        DOLLAR          = 36,  /* Dollar sign key '$'        */
        AMPERSAND       = 38,  /* Ampersand key '&'          */
        QUOTE           = 39,  /* Quote key '                */
        LEFT_PAREN      = 40,  /* Left Parenthesis key '('.  */
        RIGHT_PAREN     = 41,  /* Right Parenthesis key ')'. */
        ASTERISK        = 42,  /* Asterisk key '*'.          */
        PLUS            = 43,  /* Plus key '+'.              */
        COMMA           = 44,  /* Comma ',' key.             */
        MINUS           = 45,  /* Minus '-' key.             */
        PERIOD          = 46,  /* Period '.' key.            */
        SLASH           = 47,  /* Slash '/' key.             */

        ALPHA_0         = 48,  /* The '0' key on the top of the alphanumeric keyboard. */
        ALPHA_1         = 49,  /* The '1' key on the top of the alphanumeric keyboard. */
        ALPHA_2         = 50,  /* The '2' key on the top of the alphanumeric keyboard. */
        ALPHA_3         = 51,  /* The '3' key on the top of the alphanumeric keyboard. */
        ALPHA_4         = 52,  /* The '4' key on the top of the alphanumeric keyboard. */
        ALPHA_5         = 53,  /* The '5' key on the top of the alphanumeric keyboard. */
        ALPHA_6         = 54,  /* The '6' key on the top of the alphanumeric keyboard. */
        ALPHA_7         = 55,  /* The '7' key on the top of the alphanumeric keyboard. */
        ALPHA_8         = 56,  /* The '8' key on the top of the alphanumeric keyboard. */
        ALPHA_9         = 57,  /* The '9' key on the top of the alphanumeric keyboard. */

        COLON           = 58,  /* Colon ':' key.                */
        SEMICOLON       = 59,  /* Semicolon ';' key.            */
        LESS            = 60,  /* Less than '<' key.            */
        EQUALS          = 61,  /* Equals '=' key.               */
        GREATER         = 62,  /* Greater than '>' key.         */
        QUESTION        = 63,  /* Question mark '?' key.        */
        AT              = 64,  /* At key '@'.                   */
        LEFT_BRACKET    = 91,  /* Left square bracket key '['.  */
        BACKSLASH       = 92,  /* Backslash key '\'.            */
        RIGHTBTACKET    = 93,  /* Right square bracket key ']'. */
        CARET           = 94,  /* Caret key '^'.                */
        UNDERSCORE      = 95,  /* Underscore '_' key.           */
        BACK_QUOTE      = 96,  /* Back quote key '`'.           */

        A               = 65,
        B               = 66,
        C               = 67,
        D               = 68,
        E               = 69,
        F               = 70,
        G               = 71,
        H               = 72,
        I               = 73,
        J               = 74,
        K               = 75,
        L               = 76,
        M               = 77,
        N               = 78,
        O               = 79,
        P               = 80,
        Q               = 81,
        R               = 82,
        S               = 83,
        T               = 84,
        U               = 85,
        V               = 86,
        W               = 87,
        X               = 88,
        Y               = 89,
        Z               = 90,

        DELETE          = 127,  /* The forward delete key. */

        KEYPAD_0        = 256,  /* Numeric keypad 0.     */
        KEYPAD_1        = 257,  /* Numeric keypad 1.     */
        KEYPAD_2        = 258,  /* Numeric keypad 2.     */
        KEYPAD_3        = 259,  /* Numeric keypad 3.     */
        KEYPAD_4        = 260,  /* Numeric keypad 4.     */
        KEYPAD_5        = 261,  /* Numeric keypad 5.     */
        KEYPAD_6        = 262,  /* Numeric keypad 6.     */
        KEYPAD_7        = 263,  /* Numeric keypad 7.     */
        KEYPAD_8        = 264,  /* Numeric keypad 8.     */
        KEYPAD_9        = 265,  /* Numeric keypad 9.     */
        KEYPAD_PERIOD   = 266,  /* Numeric keypad '.'.    */
        KEYPAD_DIVIDE   = 267,  /* Numeric keypad '/'.   */
        KEYPAD_MULTIPLY = 268,  /* Numeric keypad '*'.   */
        KEYPAD_MINUS    = 269,  /* Numeric keypad '-'.   */
        KEYPAD_PLUS     = 270,  /* Numeric keypad '+'.   */
        KEYPAD_ENTER    = 271,  /* Numeric keypad enter. */
        KEYPAD_EQUALS   = 272,  /* Numeric keypad '='.   */

        UP_ARROW        = 273,
        DOWN_ARROW      = 274,
        RIGHT_ARROW     = 275,
        LEFT_ARROW      = 276,
        INSERT          = 277,
        HOME            = 278,
        END             = 279,
        PAGE_UP         = 280,
        PAGE_DOWN       = 281,

        F1              = 282,
        F2              = 283,
        F3              = 284,
        F4              = 285,
        F5              = 286,
        F6              = 287,
        F7              = 288,
        F8              = 289,
        F9              = 290,
        F10             = 291,
        F11             = 292,
        F12             = 293,
        F13             = 294,
        F14             = 295,
        F15             = 296,

        NUM_LOCK        = 300,
        CAPS_LOCK       = 301,
        SCROLL_LOCK     = 302,

        RIGHT_SHIFT     = 303,
        LEFT_SHIFT      = 304,
        RIGHT_CONTROL   = 305,
        LEFT_CONTROL    = 306,
        RIGHT_ALT       = 307,
        LEFT_ALT        = 308,
        RIGHT_COMMAND   = 309,
        LEFT_COMMAND    = 310,
        LEFT_APPLE      = 310,
        LEFT_WINDOWS    = 311,
        RIGHT_WINDOWS   = 312,
        ALT_GR          = 313,
        HELP            = 315,
        PRINT           = 316,
        SYS_REQ         = 317,
        BREAK           = 318,
        MENU            = 319,
    }
}
