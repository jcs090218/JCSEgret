@echo off
:: ========================================================================
:: $File: build.bat $
:: $Date: 2018-10-14 00:16:47 $
:: $Revision: $
:: $Creator: Jen-Chieh Shen $
:: $Notice: See LICENSE.txt for modification and distribution information
::                   Copyright © 2018 by Shen, Jen-Chieh $
:: ========================================================================


:: Back to root directory.
cd ..

:: Clean the previous build.
rmdir bin /s /q

:: Build the library.
egret build

pause
