/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let solutionSet = [];
  let subTotal = 0;

  // sorting allows for reliable skipping of repeated values
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {

      // repeats are skipped
      if (i > 0 && nums[i] === nums[i - 1]) {
          continue;
      }

      let leftValIndex = i;
      let midValIndex = i + 1;
      let rightValIndex = nums.length - 1;

      while (midValIndex < rightValIndex) {
          subTotal = nums[leftValIndex] + nums[midValIndex] + nums[rightValIndex];

          if (subTotal === 0) {
              let solution = [nums[leftValIndex], nums[midValIndex], nums[rightValIndex]];
              solutionSet.push(solution);
              midValIndex++;
              rightValIndex--;

              // if the midValIndex is a repeat, continue shifting right
              while (nums[midValIndex] === nums[midValIndex - 1] && midValIndex < rightValIndex) {
                  midValIndex++;
              }
              // if the rightValIndex is a repeat, continue shifting left
              while (nums[rightValIndex] === nums[rightValIndex + 1] && midValIndex > rightValIndex) {
                  rightValIndex--;
              }
          // if the subtotal is too high, try a new right value
          } else if (subTotal > 0) {
              rightValIndex--;
          // eventually the left pointer will shift
          } else {
              midValIndex++;
          }
      }
  }
  return solutionSet;

};


/* NOTES:

I spent considerable time on this problem approaching it from different angles. Originally (see below) I attempted a cubic solution (really bad) which in theory did work. It did not take advantage sorting the arrays as much as I should have but in theory, the solutions works but would time out on the last two tests.

The second approach was after reading some solutions and realizing I could take better advantage of sorted arrays. With a starter value "left" and two pointers "mid" and "right", I could reduce my complexity to quadratic, though with the skipping of repeated values it is actually better than that, assuming there are repeated values.

I learned a ton in my errors about how to check for equality of like arrays, I originally used a Set to help with that, and stringified my entries. I saw a solution where the array itself was made a key in an obejct which brilliantly solves the same problem without the set.

All in all, I loved this problem and learned a ton.

See below for the gyst of my original attemp

*/

      // here we could skip the two loops and create one that consists of two modulating pointers
      // for (let i = 0; i < nums.length; i++) {
      //    let leftVal = nums[i];
      //    for (let j = (i + 1); j < nums.length; j++) {
      //        let midVal = nums[j];
      //        for (let k = (j + 1); k < nums.length; k++) {
      //            let rightVal = nums[k];
      //            if (leftVal + midVal + rightVal === 0) {
      //                let possibleSolution = [leftVal, midVal, rightVal];
      //                solutionSet.add(possibleSolution.join(','));
      //            }
      //        }
      //    }
      // }
