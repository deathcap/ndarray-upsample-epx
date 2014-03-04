'use strict';

var lena = require('luminance')(require('lena')); // TODO: replace with pixel art test image, like https://en.wikipedia.org/wiki/Pixel_art_scaling_algorithms#hqnx_family
var x = require('zeros')([512*2,512*2]);
require('../')(x, lena);
require('save-pixels')(x, 'png').pipe(process.stdout);
