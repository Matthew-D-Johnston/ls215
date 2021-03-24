"use strict";

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));
console.log(reverse('The quick brown fox'));
