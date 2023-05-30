/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  // this will always test the entire length of the matrix first "longest rectangle" and then it will move the left and right pointers inward based on their value. Smaller values move inward whereas greater values remain unless a larger one is found. Otherwise you have to test every single solution individually and it times out.

  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {

      let leftVal = height[left];
      let rightVal = height[right];
      let distance = right - left;

      let subArea = Math.min(leftVal, rightVal) * distance;

      if (subArea > maxArea) {
          maxArea = subArea;
      }

      if (leftVal > rightVal) {
          right--;
      } else {
          left++;
      }
  }


  return maxArea;
};

/* NOTES:

I had a working solution that timed out because every single solution had to be tested. This solution allows for the pointers to move inward in the array of numbers based on equality. This solution allows for a much less taxing time complexity.



*/