// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* Similar questions : 
    What is the most common character in the string ?
    Does string A have the same characters as string B (is it an anagram) ?
    Does the given string have any repeated characters in it ?
*/

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  // for of is used to iterate through an array or a string
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  // for in is used to iterate through an object
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// function maxChar(str) {
//     const chars = {};

//     for (let char of str) {
//       if (!chars[char]) {
//         chars[char] = 1;
//       } else {
//         chars[char]++;
//       }
//     }
//     return chars;
//   }

console.log(maxChar('Hel22lo111'));

module.exports = maxChar;
