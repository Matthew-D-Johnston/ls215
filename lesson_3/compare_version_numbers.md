##### LS215 Computational Thinking and Problem Solving > A General Problem Solving Approach

---

## Comparing Version Numbers

### Problem

**Instructions:**

While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation for a more complicated number system. The following are all legal version numbers:  

```
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0
```

Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

- If `version1 > version2`, we should return `1`.
- If `version1 < version2`, we should return `-1`.
- If `version1 === version2`, we should return `0`.
- If either version number contains characters other than digits and the `.` character, we should return `null`.

Here is an example of version number ordering:

```
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
```

```javascript
function compareVersions(version1, version2) {
  // ...
}
```

**Rules/Requirements**

* Take 2 version numbers
* A version number must contain only integer values and decimal points.
* Compare the two version numbers; there are only three possibilities.
* Three outcomes: `1`, `-1`, or `0`.
* Each version number is comprised of integers separated by periods.
* A version number is greater than another if, starting from the leftmost integer, that integer is greater than the leftmost integer of the other version number. If they are the same, then move to the next integer set, which is delimited by a period.

**Input/Output:**

* The function will take two arguments, both of which are version numbers.
* It will output either `1`, `-1`, `0`, or `null`.

**Mental Model:**

Take two separate version numbers, compare them, and return an integer value depending on which number is greater. To do the comparison we must check each set of integers delimited by periods, beginning with the leftmost set. If any comparison shows one version greater than the other, then we know that that version number is greater. There are only three valid outcomes: `1`, `-1`, or `0`. If either of the arguments contains a character other than an integer or a period, we should return `null`.

---

### Examples / Test Cases

```javascript
compareVersions(1.2, 1.2.0.0)
=> 0

compareVersions(1.18.2, 1.0)
=> 1

compareVersions(0.1, 1)
= -1
```

---

### Data Structure

**Input:**

* Two arguments.
* Both will have to be string values since there is no valid number with more than one decimal point.

**Output:**

* Either an integer (`1`, `-1`, or `0`) or `null`.

**Intermediate Data Structures:**

* Split the original string arguments along decimal points, storing the resulting integer strings in an array.
* Then transform (i.e. map) these integer strings into actual integer values.

---

### Algorithm

**Abstractions:**

* Split version numbers into an array whose elements are strings.
* Then map those strings into an array of integer values.
* If one of the arrays is longer than the other add some `0`s to the shorter one to make it of comparable length.
* Iterate over the two arrays, comparing the values of each element for each array. As soon as one value is greater than the other return a value. If the integer originating from `version1` is greater than that originating from `version2` then return `1`, but if it's the other way then return `-1`. 
* If on each comparison the two integers are equal, then nothing will occur during the loop. After the loop finishes, we return `0`.

**Methods/Functions/regex/:**

* use `split('.')` to split the version numbers into arrays of string integers.
* chain a `map` method calll to the result of calling `split`: `map(Number)`.
* use regex to validate the input arguments to make sure there are no characters other than integers and `'.'`. Use: `/[^.0-9]/g.test(...)`.

**Implementation Steps:**

* Validate input. If either arguments return true to the following regex test, `/[^.0-9]/g.test(...)`, then return `null`.
* Declare a `integers1` variable and initialize it with the return value of calling `split('.').map(Number)` on `version1`. 
* Do the same with the `version2` argument but with a variable called `integers2`.
* Use a `while` loop that will add push `0`s to either an until they are the same length.
  * `while (arr1.length !== arr2.length)`
  * `if (arr1.length < arr2.length)` => `arr1.push(0)`
  * `else` => `arr2.push(0)`
* Then use a `for` loop starting with an index of `0`, a limit of `index < arr1.length`, and incrementing by `1`.
* For each element of the arrays compare them. If the integer from the first array is greater than that from the second array then return `1`; but if it is less than the other array, return `-1`.
* If the `for` loop does not result in a value being returned, then when it is finished we can return `0`.

---

### Code

```javascript
function compareVersions(version1, version2) {
  if (invalidInput(version1, version2)) {
    return null;
  }

  let integers1 = version1.split('.').map(Number);
  let integers2 = version2.split('.').map(Number);

  makeEqualLength(integers1, integers2);

  for (let index = 0; index < integers1.length; index += 1) {
    if (integers1[index] > integers2[index]) {
      return 1;
    } else if (integers2[index] > integers1[index]) {
      return -1;
    }
  }

  return 0;
}


function invalidInput(arg1, arg2) {
  return (/[^.0-9]/g.test(arg1)) || (/[^.0-9]/g.test(arg2));
}

function makeEqualLength(array1, array2) {
  while (array1.length !== array2.length) {
    if (array1.length < array2.length) {
      array1.push(0);
    } else {
      array2.push(0);
    }
  }
}
```

