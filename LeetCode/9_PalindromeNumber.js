/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }

  var string = x.toString();

  if (string.length === 1) {
      return true;
  }

  var counter = string.length - 1;

  var isEven = x % 2;

  if (isEven === 0) {
      for (var i = 0; i < string.length; i++) {
          if (i > counter) {
              return true;
          }
          if (string[i] === string[counter]) {
              counter--;
          } else {
              return false;
          }
      }
  } else {
      for (var i = 0; i < string.length; i++) {
          if (i >= counter) {
              return true;
          }

          if (string[i] === string[counter]) {
              counter--;
          } else {
              return false;
          }
      }
  }

}


/* NOTES:

This was a very brute force solution that beat a lot of others in speed and memory oddly enough. The challenge to not convert to a string is something I'd like to look in to.


*/