/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // To keep this in a 0(log n) time you would need to divide the collection by 2 to track down the value you need => binary search
  // the basic logic would be to check the midpoint of the array (%2 +/- 1) and then go the "direction" required (b/c it is sorted) to track down the minimum

  let lowest = Infinity;

  // check for an un-rotated array
  let alreadySorted = nums[0] < nums[nums.length - 1];

  function binarySearch(numsArray) {

      let startVal = numsArray[0];
      let endVal = numsArray[numsArray.length - 1];

      let midpointIndex = Math.round((numsArray.length) / 2) - 1;
      // console.log("midpoint Index", midpointIndex);
      let midpoint = numsArray[midpointIndex];
      // console.log("midpoint Value", midpoint);

      let subArray = numsArray;

      if (startVal > midpoint) {
          subArray = numsArray.slice(0, midpointIndex + 1);
          // console.log("left subarray", subArray);
      } else if (midpoint > endVal) {
          subArray = numsArray.slice(midpointIndex);
          // console.log("right subarray", subArray);
      } else {
          lowest = midpoint;
          // console.log("midpoint val is lowest", lowest);
          return;
      }

      if (subArray.length <= 2) {
          lowest = Math.min(subArray[0], subArray[1]);
      } else {
          binarySearch(subArray);
      }
  }

  // edge cases - my algorithm doesn't work on non rotated arrays or arrays of length = 1
  if (alreadySorted || nums.length === 1) {
      return nums[0];
  }

  // begin the recursive loop
  binarySearch(nums);

  return lowest;
};