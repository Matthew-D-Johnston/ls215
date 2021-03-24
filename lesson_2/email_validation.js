"use strict";

function isValidEmail(email) {
  let regex = /^[a-z0-9]+@[a-z]+(\.[a-z]+)+$/gi;
  return Boolean(email.match(regex));
}

console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));
console.log(isValidEmail('foo@baz.com'));
console.log(isValidEmail('foo@baz.ph'));
console.log(isValidEmail('HELLO123@baz'));
console.log(isValidEmail('foo.bar@baz.to'));
console.log(isValidEmail('foo@baz.'));
console.log(isValidEmail('foo_bat@baz'));
console.log(isValidEmail('foo@bar.a12'));
console.log(isValidEmail('foo_bar@baz.com'));
console.log(isValidEmail('foo@bar.....com'));
