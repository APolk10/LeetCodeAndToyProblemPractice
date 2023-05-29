/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  let square = 1;
  let closest = 0;

  while (square * square <= x) {
      closest = square;
      square++;
  }

  return closest;
};


/* NOTES:

Pretty straightforward, not allowed to use some of the native math functions, this could be optimized further.

*/