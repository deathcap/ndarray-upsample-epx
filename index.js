'use strict';

var epx = function(out, inp) {

  var nx = inp.shape[0];
  var ny = inp.shape[1];

  var ishp = inp.shape;
  var oshp = out.shape;

  for (var i = 0; i < nx; i += 1) {
    for (var j = 0; j < ny; j += 1) {
      out.set(i, j, inp.get(i, j));
    }
  }
};

module.exports = epx;

