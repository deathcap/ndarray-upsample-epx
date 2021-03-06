'use strict';

var epx = function(out, inp) {

  var nx = inp.shape[0];
  var ny = inp.shape[1];

  var w = nx - 1;
  var h = ny - 1;

  for (var i = 0; i < nx; i += 1) {
    for (var j = 0; j < ny; j += 1) {
      //out.set(i, j, inp.get(i, j));

      // https://en.wikipedia.org/wiki/Image_scaling#EPX.2FScale2.C3.97.2FAdvMAME2.C3.97
      /*
        A    --\ 1 2
      C P B  --/ 3 4
        D 
       1=P; 2=P; 3=P; 4=P;
       IF C==A AND C!=D AND A!=B => 1=A
       IF A==B AND A!=C AND B!=D => 2=B
       IF B==D AND B!=A AND D!=C => 4=D
       IF D==C AND D!=B AND C!=A => 3=C
      */

      var p =         inp.get(i    , j    );
      var a = j > 0 ? inp.get(i    , j - 1) : p;
      var b = i < w ? inp.get(i + 1, j    ) : p;
      var c = i > 0 ? inp.get(i - 1, j    ) : p;
      var d = j < h ? inp.get(i    , j + 1) : p;

      out.set(i * 2    , j * 2    , (c === a && c !== d && a !== b) ? a : p);
      out.set(i * 2 + 1, j * 2    , (a === b && a !== c && b !== d) ? b : p);
      out.set(i * 2 + 1, j * 2 + 1, (b === d && b !== a && d !== c) ? d : p);
      out.set(i * 2    , j * 2 + 1, (d === c && d !== b && c !== a) ? c : p);
    }
  }
};

module.exports = epx;

