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

var show = function(a) {
  for (var i = 0; i < a.shape[0]; i += 1) {
    var s = '';
    for (var j = 0; j < a.shape[1]; j += 1) {
      s += a.get(i, j) ? '*' : '.';
    }
    console.log(s);
  }
};

var out = zeros([10, 10]);

epx(out, inp);

show(inp);
console.log();
show(out);


//require('save-pixels')(inp, 'png').pipe(process.stdout);

/* TODO
var lena = require('luminance')(require('lena'));
var x = require('zeroes')([256*2,256*2]);
require('./')(x, lena);
require('save-pixels')(x, 'png').pipe(process.stdout);
*/
