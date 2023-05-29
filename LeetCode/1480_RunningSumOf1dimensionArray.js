/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {

  runningSumArray = [];

  for (var i = 0; i < nums.length; i++) {
      if (i === 0) {
          runningSumArray.push(nums[0]);
      } else {
          runningSumArray.push(runningSumArray[i - 1] + nums[i]);
      }
  }

  return runningSumArray;
};

/* NOTES:


*/