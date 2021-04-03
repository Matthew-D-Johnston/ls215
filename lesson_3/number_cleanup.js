"use strict";

function numberCleanup(number) {
  let cleansed = number.replace(/[^0-9]/g, '');
  let cleansedLength = cleansed.length;
  const BadNumber = '0000000000';

  if (cleansedLength === 10) {
    return cleansed;
  } else if (cleansedLength === 11) {
    if (cleansed[0] === '1') {
      return cleansed.slice(1);
    } else {
      return BadNumber;
    }
  } else {
    return BadNumber;
  }
}

console.log(numberCleanup('514-268-2645'));
console.log(numberCleanup('1-524-345-8439'));
console.log(numberCleanup('2-345-823-6934'));
console.log(numberCleanup('3445.fd.23455.fae.35323502'));
console.log(numberCleanup('er3.321.-433fee891'));
console.log(numberCleanup('34543'));
console.log(numberCleanup(''));

