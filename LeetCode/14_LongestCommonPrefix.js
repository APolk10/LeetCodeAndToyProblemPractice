/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  if (!strs) {
      return '';
  }

  let sharedPrefix = '';
  let firstWord = strs[0];

  for (var i = 0; i < firstWord.length; i++) {
      let currentLetter = firstWord[i];
      for (var j = 0; j < strs.length; j++) {
          let currentWord = strs[j];
          if (currentWord[i] !== currentLetter) {
              return sharedPrefix;
          }
      }
      sharedPrefix += currentLetter;


  }
  return sharedPrefix;

};

/*   NOTES:

Had the return statement at the end in the wrong set of brackets for a while before I noticed it. After that change my solution was fine. Line 19 returns the current state of sharedPrefix so that iteration stops when a falsey value for the expression is reached.

*/