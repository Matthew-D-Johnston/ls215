##### JS210 - Small Problems > Interpretive Problem Solving

---

## Diamonds

### Problem

**Instructions:**

Write a function that displays a four-pointed diamond in an `n`X`n` grid, where `n` is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.  

**Requirements/Rules:**

* `n` must be odd
* diamond has four points
* `n`X`n` grid
* assume that argument is always an _odd_ integer.

**Input/Output:**

* Input: odd integer
* Output: `n`X`n` grid pattern of `*`

**Mental Model:**

Based on the odd integer given as an argument create a pattern that has `n` rows and `n` columns of `*`s. Log this pattern to the console.

---

### Examples / Test Cases

Examples: 

```javascript
diamond(1);
// logs
*
```

```javascript
diamond(3);
// logs
 *
***
 *
```

```javascript
diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

---

### Data Structure

**Input:**

* An integer.

**Output:**

* Successive rows of strings that will contain white spaces and `*`s.

**Intermediate Data Structures:**

* ???

---

### Algorithm

**Abstractions:**

* We will want to probably do some kind of loop that iterates from `1` up to `n`, which is the integer given as an argument.
* On each iteration we need to construct some string that will we log to the console.
* For the first iteration, we need just one `*`, and a number of spaces on either side of that star. The number of spaces on each side will be equal to `(n - 1) / 2`. 
* For each successive iteration we will want the number of `*`s to increase by `2` and our formula must also factor in this increase so that on the second iteration we have, `(n - 3) / 2`, on the third `(n - 5) / 2`, and so on and so on.

**Methods/Functions/regex/loops:**

* Use a `for` loop that starts at an `index` equal to `1`, a limit of `n`, and which increments by `2` on each iteration.

**Implementation Steps:**

* Begin a `for` loop where `index = 1`; `index <= n`; `index += 2`.
* Declare a `stars` variable and initialize it with the value associated with the following bit of code: `'*'.repeat(index)`.
* Declare a `margin` variable and initialize it with the following bit of code that utilizes our formula `(n - index) / 2`: `' '.repeat((n - index) / 2))`
* Log the following code to the console: `margin + stars + margin`.

---

### Code

```javascript
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
```



