# ndarray-upsample-epx

EPX (Eric's Pixel Expansion) scaling algorithm implementation in JavaScript

[![Build Status](https://travis-ci.org/deathcap/ndarray-upsample-epx.png)](https://travis-ci.org/deathcap/ndarray-upsample-epx)

Usage:
    
    var epx = require('ndarray-upsample-epx');

    epx(out, inp);

where `inp` is a 2-dimensional
[ndarray](https://github.com/mikolalysenko/ndarray),
and `out` is as well but double in size. The image
will be scaled up by 2x.

Example in `demo.js`, input:

    .....
    .***.
    .*.*.
    .***.
    .....
   
output:

    ..........
    ..........
    ...****...
    ..******..
    ..**..**..
    ..**..**..
    ..******..
    ...****...
    ..........
    ..........


## References

* [Wikipedia - Image scaling](https://en.wikipedia.org/wiki/Image_scaling#EPX.2FScale2.C3.97.2FAdvMAME2.C3.97)
* [scale2x.cpp](https://github.com/Themaister/bsnes-Qt/blob/master/snesfilter/scale2x/scale2x.cpp)
* [ndarray-downsample2x](https://github.com/mikolalysenko/ndarray-downsample2x)

## License

MIT

