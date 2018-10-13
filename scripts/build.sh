#!/bin/bash
# ========================================================================
# $File: build.sh $
# $Date: 2018-10-14 00:17:41 $
# $Revision: $
# $Creator: Jen-Chieh Shen $
# $Notice: See LICENSE.txt for modification and distribution information
#                   Copyright © 2018 by Shen, Jen-Chieh $
# ========================================================================


# Back to root directory.
cd ..

# Clean the previous build.
rm -rf bin

# Build the library.
egret build

# Pause
read -n1 -r -p "Press any key to continue..." key
