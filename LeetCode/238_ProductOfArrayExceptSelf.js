/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // for every element in the given array, return an array with the products of each element excluding the element at the "i" index
  var products = [];

  var multiplicationHelper = function(array, index) {
      var product = 1;

      for (var i = 0; i < array.length; i++) {
          if (i === index) {
              continue;
          } else {
              product *= array[i];
          }
      }

      return product;
  }

  for (var i = 0; i < nums.length; i++) {
      products.push(multiplicationHelper(nums, i));
  }

  return products;
};

/* NOTES:
  I noticed my answer is in the bottom 5% of time taken, but very high in the memory taken. Interesting tradeoff and I am SURE there is a way to optimize this brute/naive solution.


*/