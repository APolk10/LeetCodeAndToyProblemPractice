/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // look up kadanes algorithm - at first I thought this would not work with an array of all negative numbers, but upon further investigation I see that the check in line #12 along with the setting of maxTotal to an array value (rather than just 0) would allow for the smallest negative number to be saved as the max total.

  let currentTotal = 0; // this will be the subarray calculation
  let maxTotal = nums[0];

  for (let i = 0; i < nums.length; i++) {
      currentTotal += nums[i]; // add the current index to the subarray

      if (currentTotal > maxTotal) {
          maxTotal = currentTotal;
      }
      if (currentTotal < 0) { // if the subarray is less than zero, restart the subarray at the next index - acts as the left side pointer
          currentTotal = 0;
      }
  }

  return maxTotal;
};