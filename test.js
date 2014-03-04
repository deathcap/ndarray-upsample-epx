'use strict';

var epx = require('./');
var test = require('tape');
var ndarray = require('ndarray');
var zeros = require('zeros');

var show = function(a) {
  var lines = [];
  for (var i = 0; i < a.shape[0]; i += 1) {
    var s = '';
    for (var j = 0; j < a.shape[1]; j += 1) {
      s += a.get(i, j) ? '*' : '.';
    }
    lines.push(s);
  }
  return lines.join('\n');
};

test('epx', function(t) {
  var inp = ndarray(new Uint8Array([
          0, 0, 0, 0, 0,
          0, 1, 1, 1, 0,
          0, 1, 0, 1, 0,
          0, 1, 1, 1, 0,
          0, 0, 0, 0, 0]),
        [5, 5]);

  var out = zeros([10, 10]);

  epx(out, inp);

  var aInp = show(inp);
  console.log(aInp);
  t.equal(aInp, [
      '.....',
      '.***.',
      '.*.*.',
      '.***.',
      '.....',
      ].join('\n'));
  var aOut = show(out);
  console.log(aOut); 
  t.equal(aOut, [
      '..........',
      '..........',
      '...****...',
      '..******..',
      '..**..**..',
      '..**..**..',
      '..******..',
      '...****...',
      '..........',
      '..........',
      ].join('\n'));
  t.end();
});

