"use strict";

function isUrl(text) {
  return Boolean(text.match(/^https?:\/\/\S+$/));
}

console.log(isUrl('http://launchschool.com'));
console.log(isUrl('https://example.com'));
console.log(isUrl('https://example.com hello'));
console.log(isUrl('   https://example.com'));
