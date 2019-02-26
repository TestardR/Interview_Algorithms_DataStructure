// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = str
    .split('')
    .reverse()
    .join('')
    .replace(',', '');
  //   console.log(reversedString);
  return reversedString;
}

// reverse('hello');

module.exports = reverse;
