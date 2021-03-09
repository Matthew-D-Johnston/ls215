"use strict";

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

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

console.log(longestWord(['abc', 'launch', 'targets', '']));
