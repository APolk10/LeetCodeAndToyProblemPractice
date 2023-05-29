/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
  var count = 0;
  var countedArray = [];
  for (var i = 0; i < nums.length; i++) {
      count = 0;
      for (var j = 0; j < nums.length; j++) {
          if (nums[i] > nums[j]) {
              count++;
          }
      }
      countedArray.push(count);
  }
  return countedArray;
};

/* NOTES:


*/