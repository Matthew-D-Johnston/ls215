"use strict";

function mysteryMath(text) {
  return text.replace(/[+\-*\/]/, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));

function mysteriousMath(text) {
  return text.replace(/[+\-*\/]/g, '?');
}

console.log(mysteriousMath('4 + 3 - 5 = 2'));
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'));
