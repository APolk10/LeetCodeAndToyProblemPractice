/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // create a string that will serve as the comparison
  var longestSubstring = '';

  var checkLengthFromIndex = function(index) {
      var tracker = {};
      var currSubstring = '';
      for (var i = index; i < s.length; i++) {
          var currLetter = s[i];
          if (!tracker[currLetter]) {
              tracker[currLetter] = 1;
              currSubstring += currLetter;
          } else {
              return;
          }
          if (currSubstring.length > longestSubstring.length) {
              longestSubstring = currSubstring;
          }
      }
  }

  // iterate through the string calling the helper function on each letter
  for (var i = 0; i < s.length; i++) {
      checkLengthFromIndex(i);
  }

  // return the longest string
  return longestSubstring.length;
};



/* NOTES:

  I know there's a lot of more efficient ways to solve this one. I want to research a way to solve this related algorithms that is more efficient as I am seeing a lot of "all possible combinations" - style problems that warrant an efficient approach.


*/