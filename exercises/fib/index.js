// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Solution 1
// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

// Solution 2
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// Solution 2 # Memoization
function memoize(fn) {
  // store calls to fast versions and respective results
  const cache = {};
  // assign the arguments given to slowFib and assign them to an array
  return function(...args) {
    // if a result has been registered, return it
    if (cache[args]) {
      return cache[args];
    }
    // if passed the if, it means that it is the first time that this result is called
    // call slow fib, whenever we call a function with an array of arguments with have to use the apply helper
    const result = fn.apply(this, args); // here = fn(args)
    // at the key args, store the result we just created
    cache[args] = result;
    return result;
  };
}

fib = memoize(fib);

// console.log(fib(6));

module.exports = fib;
