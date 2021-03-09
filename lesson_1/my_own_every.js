"use strict";

// Solution 1

function myOwnEvery(array, func) {
  let selected = array.filter(element => func(element));

  return selected.length === array.length;
}

// Solution 2

// function myOwnEvery(array, func) {
//   for (let index = 0; index < array.length; index += 1) {
//     if (Boolean(func(array[index])) === false) {
//       return false;
//     }
//   }

//   return true;
// }

function odd(number) {
  return number % 2 === 1;
}

console.log(myOwnEvery([1, 3, 4, 5], odd));
