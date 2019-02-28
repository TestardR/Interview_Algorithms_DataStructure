// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution 2
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

// Solution 1
/* function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  // From 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // Create an empty string, 'step'
    let level = '';
    // From 0 to n (iterate through columns)
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        // Add a '#' to 'level'
        level += '#';
      } else {
        // Add a space to 'level'
        level += ' ';
      }
    }
    console.log(level);
  }
} */

console.log(pyramid(8));

module.exports = pyramid;
