#!/bin/bash

# Builds minfiied assets then moves them
# to a predictable location - for our widget
# we don't actually want to hash our filenames
set -euxo pipefail


npm run build
cd build
mv static/js/main.*.js main.js
mv static/css/main.*.css main.css
