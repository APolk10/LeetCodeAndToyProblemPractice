/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {

  let solutionString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === char.toLowerCase()) {
      solutionString += char;
      continue;
    } else {
      solutionString += " ";
      solutionString += char;
    }
  }

return solutionString;
}
