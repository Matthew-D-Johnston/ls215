"use strict";

// Question 6

// function formatDate(date) {
//   if (!!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
//     let ymd = date.split(/-/);
//     return ymd[2] + '.' + ymd[1] + '.' + ymd[0];
//   } else {
//     return date;
//   }
// }

// console.log(formatDate('2016-06-17'));
// console.log(formatDate('2016/06/17'));


// LS Solution

// function formatDate(date) {
//   return date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
// }

// console.log(formatDate('2016-06-17'));
// console.log(formatDate('2016/06/17'));


// Question 7

function formatDate(date) {
  return date.replace(/^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/, '$4.$3.$1');
}

console.log(formatDate('2016-06-17'));
console.log(formatDate('2017/05/03'));
console.log(formatDate('2015/01-31'));
