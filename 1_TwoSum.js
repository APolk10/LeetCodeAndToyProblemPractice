/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // iterate through the given array
    for (var i = 0; i < nums.length; i++) {
        // iterate within to vet every number at i with every other number at j
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

};


/* NOTES:


*/