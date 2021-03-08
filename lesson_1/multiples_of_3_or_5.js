"use strict";

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

function myFilter(array, func) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (func(array[index])) {
      result.push(array[index]);
    }
  }

  return result;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));
