'use strict';

var epx = require('./');
var ndarray = require('ndarray');
var zeros = require('zeros');

var inp = ndarray(new Uint8Array([
        0, 0, 0, 0, 0,
        0, 1, 1, 1, 0,
        0, 1, 0, 1, 0,
        0, 1, 1, 1, 0,
        0, 0, 0, 0, 0]),
      [5, 5]);

var out = zeros([10, 10]);

epx(out, inp);

for (var i = 0; i < out.shape[0]; i += 1) {
  var s = '';
  for (var j = 0; j < out.shape[1]; j += 1) {
    s += out.get(i, j) + ' ';
  }
  console.log(s);
}

//require('save-pixels')(inp, 'png').pipe(process.stdout);

/* TODO
var lena = require('luminance')(require('lena'));
var x = require('zeroes')([256*2,256*2]);
require('./')(x, lena);
require('save-pixels')(x, 'png').pipe(process.stdout);
*/
