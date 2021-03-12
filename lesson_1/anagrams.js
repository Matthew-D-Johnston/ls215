"use strict";


function anagram(word, list) {
  let sortedWord = sortWord(word);

  return list.filter(word => sortedWord === sortWord(word));
}

function sortWord(word) {
  return word.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));
