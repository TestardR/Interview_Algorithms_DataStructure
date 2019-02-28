// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 2
function vowels(str) {
  // g makes sure we don't stop at the first match
  // i makes our match case insensitive
  // it will return an array of matches if any OR null if no match
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Solution 1
// function vowels(str) {
//   let count = 0;
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if (vowel.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

console.log(vowels('hello'));

module.exports = vowels;
