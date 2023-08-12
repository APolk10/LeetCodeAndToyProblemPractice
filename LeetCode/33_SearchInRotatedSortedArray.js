/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let targetIndexIfFound = -1;

  let binarySearch = function(array) {
      let midpointIndex = Math.round(array.length / 2);
      let leftSubArray = array.slice(0, midpointIndex - 1);
      let rightSubArray = array.slice(midpointIndex);

      // if the value is in the left subArray
      if (leftSubArray.includes(target)) {

          if (leftSubArray.length > 1) {
              binarySearch(leftSubArray);
          } else {
              for (let i = 0; i < leftSubArray.length; i++) {
                  targetIndexIfFound++;
                  if (leftSubArray[i] === target) {
                      break;
                  }
              }
              // end closure
              return;
          }
          // if the value is in the right subArray
      } else if (rightSubArray.includes(target)) {

          targetIndexIfFound += leftSubArray.length + 1;

          if (rightSubArray.length > 1) {
              binarySearch(rightSubArray);
          } else {
              for (let i = 0; i < rightSubArray.length; i++) {
                  targetIndexIfFound++;
                  if (rightSubArray[i] === target) {
                      break;
                  }
              }
              // end closure
              return;
          }
      } else {
          // the collection is odd and the midpoint is the target
          targetIndexIfFound += leftSubArray.length + 1;
          return;
      }
  }

  // if the array does not include the target, return -1
  if (!nums.includes(target)) {
      return -1;
  }

  // if the array contains 1 value
  if (nums.length === 1) {
          return 0;
  }

  // if the array is larger than 2 values, begin search
  if (nums.length > 1) {
      binarySearch(nums);
  }

  return targetIndexIfFound;
};