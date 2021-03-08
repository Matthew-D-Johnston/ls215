"use strict";

// let min = Infinity;
// let max = -Infinity;

// let getMinMax = function (value) {
//   if (value >= max) {
//     max = value;
//   }

//   if (value <= min) {
//     min = value;
//   }
// }

// let numbers = [4, 5, 12, 23, 3];

// numbers.forEach(getMinMax);

// console.log(min, max);


// Or, you can also pass `getMinMax` as an anonymous function expression instead:

let min = Infinity;
let max = -Infinity;

[4, 5, 12, 23, 3].forEach(value => {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max);
