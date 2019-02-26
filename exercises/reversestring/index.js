// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
//   //   console.log(str);
// }

// Solution 2
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//     // console.log(reversed);
//   }
//   return reversed;
// }

// Solution 3
function reverse(str) {
  // reduce takes all the value of an array and condensed them into one single value
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '');
}

// console.log(reverse('hello'));
module.exports = reverse;
