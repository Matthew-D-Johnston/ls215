"use strict";

function isAllUnique(string) {
  let characters = [];
  let lowerCasedString = string.toLowerCase();

  for (let index = 0; index < lowerCasedString.length; index += 1) {
    if (characters.includes(lowerCasedString[index])) {
      return false;
    }

    if (lowerCasedString[index] !== ' ') {
      characters.push(lowerCasedString[index]);
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));
console.log(isAllUnique('123,456,789'));
console.log(isAllUnique('The big apple'));
console.log(isAllUnique('The big apPlE'));
console.log(isAllUnique('!@#$%^&*()'));
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));
