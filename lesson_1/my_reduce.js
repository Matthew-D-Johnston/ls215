"use strict";

function myReduce(array, func, initial) {
  let result;

  if (initial === undefined) {
    result = array[0];

    for (let index = 1; index < array.length; index += 1) {
      result = func(result, array[index]);
    }
  } else {
    result = initial;

    for (let index = 0; index < array.length; index += 1) {
      result = func(result, array[index]);
    }
  }

  return result;
}


// LS Solution

// function myReduce(array, func, initial) {
//   let value;
//   let index;

//   if (initial === undefined) {
//     value = array[0];
//     index = 1;
//   } else {
//     value = initial;
//     index = 0;
//   }

//   array.slice(index).forEach(element => value = func(value, element));
//   return value;
// }

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));
