"use strict";

function octalToDecimal(numberString) {
  let power = numberString.length - 1;
  let decimalNumber = 0;

  numberString.split('').forEach(charDigit => {
    decimalNumber += octalDigitToDecimal(charDigit, power);
    power -= 1;
  });

  return decimalNumber;
}


function octalDigitToDecimal(digit, power) {
  return Number(digit) * (8**power);
}


console.log(octalToDecimal('1'));
console.log(octalToDecimal('10'));
console.log(octalToDecimal('130'));
console.log(octalToDecimal('17'));
console.log(octalToDecimal('2047'));
console.log(octalToDecimal('011'));


// Version 2 -- Based on LS's Thinking in Abstractions

// function octalToDecimal(numberString) {
//   let decimalParts = numberString.split('').reverse().map((digitChar, index) => {
//     return Number(digitChar) * (8**index);
//   });

//   return decimalParts.reduce((accumulator, parts) => {
//     return accumulator + parts;
//   });
// }


// console.log(octalToDecimal('1'));
// console.log(octalToDecimal('10'));
// console.log(octalToDecimal('130'));
// console.log(octalToDecimal('17'));
// console.log(octalToDecimal('2047'));
// console.log(octalToDecimal('011'));
