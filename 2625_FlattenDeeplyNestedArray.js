/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {

  // if n is 0 return array with no modifications
  if (n <= 0) {
      return arr
  }

  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          flattenedArray.push(...flat(arr[i], n - 1))
      } else {
          flattenedArray.push(arr[i])
      }
  }

  return flattenedArray;
};

/* NOTES:

Had a hard time making this work with a helper function, but calling the parent function directly allowed for the right sequence of events to populate the new array correctly.

*/