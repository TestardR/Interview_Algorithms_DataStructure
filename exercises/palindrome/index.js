// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//   let reversedStr = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === reversedStr;
// }

function palindrome(str) {
  // .every() for every element in the array we call the function inside every(). We receive each character (char) with its index (i). The first time the loop runs, char = 'a'
  // and i = 0
  // Not the best of solving the problem, as we only need to iterate through half of the word. Here we will iterate through each character until the end, lack of performance.
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

console.log(palindrome('abba'));
module.exports = palindrome;
