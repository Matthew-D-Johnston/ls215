"use strict";

// function area(rectangle) {
//   return rectangle[0] * rectangle[1];
// }

// function totalArea(rectangles) {
//   let sum = 0;
//   rectangles.forEach(rectangle => sum += area(rectangle));
//   return sum;
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));

// Solution #2

function addAreas(area1, area2) {
  return area1 + area2;
}

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce(addAreas);
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));
console.log(totalSquareArea(rectangles));

