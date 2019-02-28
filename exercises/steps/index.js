// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // if (n === row), we have reached the end of our problem
  if (n === row) {
    return;
  }
  // if 'stair' string has a length === n, then we are at the end of a row
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }
  // if the length of the stair string is less than or equal to the row number, we add a '#', otherwise add a space
  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  const add = stair.length <= row ? '#' : ' ';

  // call the process again
  steps(n, row, stair + add);
  // steps(n, row, stair);
}

// Exemple recursion
/* function printNumber(n, dec = 1) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumber(n - dec);
}

printNumber(10); */

// Solution 1
// function steps(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // Create an empty string, 'stair'
//     let stair = '';
//     // From 0 to n (iterate through columns)
//     for (let column = 0; column < n; column++) {
//       // If the current column is equal to or less than the current row
//       if (column <= row) {
//         // Add a '#' to 'stair'
//         stair += '#';
//       } else {
//         // Add a space to 'stair'
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

console.log(steps(8));

module.exports = steps;
