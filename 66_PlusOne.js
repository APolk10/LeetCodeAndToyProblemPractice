/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {

  let plusOne = digits.join('');

  plusOne = BigInt(plusOne);
  plusOne++;
  plusOne = plusOne.toString();

  return plusOne.split('');
};



/* NOTES:


Gotcha in the test cases with numbers that are too large, so BigInt is necessary.


*/