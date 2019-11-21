#!/bin/bash

# Builds minfiied assets then moves them
# to a predictable location - for our widget
# we don't actually want to hash our filenames
set -euxo pipefail


npm run build
cd build
cp static/js/main.*.js main.js
cp static/js/runtime-main.*.js runtime.js
cp static/js/2.*.js 2.js
cp static/css/main.*.css main.css
