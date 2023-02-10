/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // create an object with the symbols and values
  let romNums = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }

  // create a total variable
  let total = 0;
  // iterate through string
  for (var i = 0; i < s.length; i++) {
      // find value at the index
      let currentVal = romNums[s[i]];
      // if we are at last index, just add value
      if (i === s.length - 1) {
          total += currentVal;
          break;
      }

      let nextVal = romNums[s[i + 1]];
      // if the index following our current value is the same or lesser
      if (currentVal >= nextVal) {
          total += currentVal;
          continue;
      }
      // if the index following is greater, subract it
      if (currentVal < nextVal) {
          total -= currentVal;
      }
  }

  return total;
};