"use strict";

function fields(text) {
  return text.split(/[ \t,]+/g);
}

console.log(fields("Pete,201,Student"));
console.log(fields("Pete \t 201    ,  TA"));
console.log(fields("Pete \t 201"));
console.log(fields("Pete \n 201"));
