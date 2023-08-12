/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  /*
      Iterate over the given array. For each of the values, compare the products of itself plus the value to its right. Continue adding values to this product expression so that it will also include the original value, the one to its right, and the one to the right of this value i.e. [A, B, C] will become A * B = product, A * B * C = another product etc. After all values are tested, move to the next value in the array and repeat this process. With each sub product, compare this value to a running max total outside the scope of these loops, only overwiting it when necessary.
  */

  let max = -Infinity;

  if (nums.length < 2) {
      return nums[0]
  }

  const findInnerProducts = function(array) {
      for (let i = 0; i < array.length; i++) {

          let nextIndex = i + 1;
          let subProduct = array[i];

          if (subProduct > max) {
              max = subProduct;
          }

          // if (array[i + 1] && array[i] === array[i + 1] && (array[i] >= 0 && array[i + 1] >= 0)) {
          //     continue;
          // }

          while (array[nextIndex]) {
              subProduct *= array[nextIndex];
              nextIndex++;

              if (subProduct > max) {
                  max = subProduct;
              }
          }
      }
  }

  findInnerProducts(nums);

  return max;
};