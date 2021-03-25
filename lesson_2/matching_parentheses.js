"use strict";

function isBalanced(text) {
  let counter = 0;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '(') {
      counter += 1;
    } else if (text[index] === ')') {
      counter -= 1;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter === 0;
}

console.log(isBalanced('What (is) this?'));
console.log(isBalanced('What is) this?'));
console.log(isBalanced('What (is this?'));
console.log(isBalanced('((What) (is this))?'));
console.log(isBalanced('((What)) (is this))?'));
console.log(isBalanced('Hey!'));
console.log(isBalanced(')Hey!('));
console.log(isBalanced('What ((is))) up('));

