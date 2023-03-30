/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let tracker = {};
  let k = nums.length;

  for (let i = 0; i < nums.length; i++) {
      let currentNum = nums[i];
      if (!tracker[currentNum]) {
          tracker[currentNum] = true;
      } else {
          // splice returns the removed elements, don't store this in another variable
          nums.splice(i, 1);
          i--;
          k--;
      }
  }

  return k;
};


/* NOTES

Time and Space complexity is bad, probably due to splice. Solution works but generally isn't a good approach as some languaged might not be able to play with arrays so well. (set limits/memory etc)

*/