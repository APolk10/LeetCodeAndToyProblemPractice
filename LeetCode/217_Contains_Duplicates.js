/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var tracker = {};
    // iterate over the array and tracks entries in an object
    for (var i = 0; i < nums.length; i++) {
        if (tracker[nums[i]]) {
            return true;
        } else {
            tracker[nums[i]] = 1;
        }
    }
    return false;
};