'use strict';

var epx = function(out, inp) {

  var nx = inp.shape[0];
  var ny = inp.shape[1];

  var ishp = inp.shape;
  var oshp = out.shape;

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

      var p = inp.get(i, j);
      var a = inp.get(i, j - 1); // TODO: OOB?
      var b = inp.get(i + 1, j);
      var c = inp.get(i - 1, j);
      var d = inp.get(i, j + 1);

      var o1 = p;
      var o2 = p;
      var o3 = p;
      var o4 = p;

      if (c === a && c !== d && a !== b) o1 = a;
      if (a === b && a !== c && b !== d) o2 = b;
      if (b === d && b !== a && d !== c) o4 = d;
      if (d === c && d !== b && c !== a) o3 = c;

      out.set(i * 2    , j * 2    , o1);
      out.set(i * 2 + 1, j * 2    , o2);
      out.set(i * 2    , j * 2 + 1, o3);
      out.set(i * 2 + 1, j * 2 + 1, o4);
    }
  }
};

module.exports = epx;

