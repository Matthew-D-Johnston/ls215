## Practice Problem: Total Square Area

### Problem

For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.  

Write a Function named `totalArea` that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.  

---

### Examples / Test Cases

```javascript
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);		// 141
```

---

### Data Types

**Inputs**

* An array of arrays.
* The inner arrays contain two integer values.

**Outputs**

* An integer value.

---

### Algorithm

**Steps**

* Calculate area for each rectangle (i.e. inner array).
* Collect rectangle areas into a single array.
* Add the areas of each rectangle

**Intermediate Functions**

* `area(rectangle)`: multiplies each element of the inner rectangle arrays.

---

### Code

```javascript
function area(rectangle) {
  return rectangle[0] * rectangle[1];
}

function totalArea(rectangles) {
  let sum = 0;
  rectangles.forEach(rectangle => sum += area(rectangle));
  return sum;
}
```

----

Based on Launch School's "Thinking in Abstractions" advice: The solution should first `map` the two dimensional array into a single dimensional array of rectangle areas, then `reduce` this array to a single number by summling all the areas.

**My Solution**

```javascript
function addAreas(area1, area2) {
  return area1 + area2;
}

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
 	return areas.reduce(addAreas);
}
```

**LS Solution**

```javascript
function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}
```

---

### Second Function

Now, write a second Function named `totalSquareArea`. This function should calculate the total area of a set of rectangles, just like `totalArea`. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

**My Solution**

```javascript
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}
```

**LS Solution**

```javascript
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}
```

You may also reuse the `totalArea` function from the previous problem:

```javascript
function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}
```

