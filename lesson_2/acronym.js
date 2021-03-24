"use strict";

function acronym(string) {
  let words = string.match(/\b\w+\b/gi);
  return words.map(word => word[0].toUpperCase())
              .join('');
}

console.log(acronym('Portable Network Graphics'));
console.log(acronym('First In, First Out'));
console.log(acronym('PHP: HyperText Preprocessor'));
console.log(acronym('Complementary metal-oxide semiconductor'));
console.log(acronym('Hyper-text Markup Language'));
