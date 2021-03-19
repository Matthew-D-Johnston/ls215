"use strict";

let readLineSync = require('readline-sync');

let name = readLineSync.question('What is your name? ');

if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
