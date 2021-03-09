"use strict";

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function myOwnEvery(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    if (Boolean(func(array[index])) === false) {
      return false;
    }
  }

  return true;
}


console.log(areAllNumbers([1, 5, 6, 7, '1']));
console.log(areAllNumbers([1, 5, 6, 7, 1]));
console.log(areAllNumbers([1, 5, 6, 7, NaN]));
