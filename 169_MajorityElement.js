/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var counter = {};
    for (var i = 0; i < nums.length; i++) {
        if (!counter[nums[i]]) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]]++;
        }
    }
    var highestCount = 0;
    var value = 0;
    for (key in counter) {
        if (counter[key] > highestCount) {
            value = key;
            highestCount = counter[key];
        }
    }
    return value;
};

/* NOTES:
 This solution beat out 80% of the time complexities of other solutions and 90% of the space complexities of other solutions. Iterating twice in different areas and using objects to store counts/values seems to be the way to keep the workload lighter. Originally I was having trouble with the object iteration until I kept track of both the highest tally and the associated key (original number from the array).

*/