// function addOne(number) {
//   return number + 1;
// }


// let count = [1, 2, 3, 4, 5];

// function iterate(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//   }
// }

// function iterate(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i]);
//   }
// }

// function logger(number) {
//   number += 1;
//   console.log(number);
// }

// iterate(count, logger)

// function oddOrEven(array) {
//   iterate(array, function (number) {
//     if (number % 2 === 0) {
//       console.log('even');
//     } else {
//       console.log('odd');
//     }
//   });
// }

// oddOrEven(count);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];

for (let i = 0; i < array.length; i += 1) {
  if (isOddNumber(array[i])) {
    newArray.push(array[i]);
  }
}

console.log(newArray);

function isOddNumber(number) {
  return number % 2 === 1;
}
