/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  // iterate through both strings, storing the values in an object and setting them equal to 1. If a repetition is found, increment that letter to allow for more uses. The second pass (stringTwo) will decrement those values. If a value is not found on second pass, they are not anagrams. If a numeric value is less than or greater than zero, they are not anagrams.

  const bank = {};

  for (let i = 0; i < s.length; i++) {
      let currentLetter = s[i]
      if (!bank[currentLetter]) {
          bank[currentLetter] = 1;
      } else {
          bank[currentLetter]++;
      }
  }
  for (let i = 0; i < t.length; i++) {
      let currentLetter = t[i];
      if (!bank[currentLetter]) {
          return false;
      } else {
          bank[currentLetter]--;
      }
  }

  for (letter in bank) {
      if (bank[letter] > 0 || bank[letter] < 0) {
          return false;
      }
  }

  return true;
};

/* NOTES:

My original approach was flawed. I wanted to use arrays, but after going down a few paths I realize that made it considerably harder to work with the data in a way that did not send the time and space complexity to the moon. After rerouting to use an object, I realized it was way easier to keep linear time as well as make a readable solution. Fun problem!


*/