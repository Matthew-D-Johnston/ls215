"use strict";

function diamond(n) {
  for (let index = 1; index <= n; index += 2) {
    let stars = '*'.repeat(index);
    let margin = ' '.repeat((n - index) / 2);
    console.log(margin + stars);
  }
  for (let index = n - 2; index >= 1; index -= 2) {
    let stars = '*'.repeat(index);
    let margin = ' '.repeat((n - index) / 2);
    console.log(margin + stars); 
  }
}

diamond(1);
diamond(3);
diamond(9);
diamond(23);
