"use strict";

function validLuhnNumber(number) {
  if (number.length === 0) {
    return false;
  }

  let digits = number.replace(/\D/g, '').split('');

  let luhnDigits = digits.map((digit, index) => {
    digit = parseInt(digit, 10);

    if (index % 2 === 0) {
      digit *= 2;

      if (digit >= 10) {
        digit -= 9;
      }
    }

    return digit;
  });

  let checksum = luhnDigits.reduce((digit, accum) => accum + digit);
  return Number(String(checksum).slice(-1)) === 0;
}

console.log(validLuhnNumber('3456'));
console.log(validLuhnNumber('8763'));
console.log(validLuhnNumber('4533 2356'));
console.log(validLuhnNumber('3211-e45.6'));
console.log(validLuhnNumber(''));
console.log(validLuhnNumber('0000'));
console.log(validLuhnNumber('87-e6.3'));
console.log(validLuhnNumber('8664'));
console.log(validLuhnNumber('2323 2005 7766 3554'));
