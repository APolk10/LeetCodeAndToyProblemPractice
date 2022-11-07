/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
  var counter = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i].toString().length % 2 === 0) {
          counter++;
      }
  }
  return counter;
};

/* NOTES:


*/