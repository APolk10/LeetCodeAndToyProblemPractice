/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  let validMatches = { "{": "}", "[": "]", "(": ")" };
  let openers = { "{": true, "[": true, "(": true};

  // bypass the iteration of uneven number of characters is found.
  if (s.length % 2 === 1) {
      return false;
  }

  /*
  iterate through the string checking for all opening characters.
  When a closing character is found, pop the previous character from the
  stack and validate the match
  */
  for (let i = 0; i < s.length; i++) {
      let symbol = s[i];
      if (openers[symbol]) {
          stack.push(symbol);
      } else {
          let lastChar = stack.pop();
          if (symbol === validMatches[lastChar]) {
              continue;
          } else {
              return false;
          }
      }
  }

  // check to see if the stack has been reduced to 0 characters
  if (stack.length < 1) {
      return true;
  }

  return false;
};