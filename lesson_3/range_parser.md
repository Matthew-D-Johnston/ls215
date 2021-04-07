##### LS215 Computational Thinking and Problem Solving > A General Problem Solving Approach

---

## Problem 4: Range Parser

### Problem

**Description:**

You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents `[1, 3, 7, 12, 14, 21]`). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers `[1, 2, 3, 11, 12]`). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: `["-", ":", ".."]`

- "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
- "1-3, 1-2" --> 1, 2, 3, 11, 12
- "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
- "104-2" --> 104, 105, ... 112
- "104-02" --> 104, 105, ... 202
- "545, 64:11" --> 545, 564, 565, .. 611

**Definitions/Rules (explicit and implicit):**

* Given a list of numbers, only the significant part of the next number is written.
* The numbers are always increasing.
* Separators may be used, such as `'-'`, `':'`, `'..'`. These separators indicate a range. But separators may not always be given.
* Each range compoment is then separated by a comma.
* Range limits are always inclusive.
* Is the given list a string or an array? It doesn't say explicitly, but the examples are given as strings. Thus, we will assume the list is given as a single string.
* Only the significant part of the number is written. To fill in the rest of the number, we must look at the number that comes before it. Compare the number of digits. 

**Inputs/Outputs:**

* Input: a list of numbers. May contain other characters that denote a range.
* Output: a list of numbers.

**Mental Model:**

Take a list of numbers. The list will contain number ranges, separted by commas. A range may be a single number. If it is not a single number, then the range will be separated by `'-'`, `':'`, or `'..'`. The numbers will always be increasing. Thus, if a number is smaller than the number that came before it, that is because only the significant parts of the number are written.  

There are a number of separate problems that need to be solved:

1) Converting a range to a list of numbers.

2) Determining which numbers are complete numbers and which numbers have been truncated.

3) Determining how to modify truncated numbers. This will be the biggest problem to solve.

---

### Examples / Test Cases

```javascript
function rangeParser(numbers) {
  ...
}
  
console.log(rangeParser("1, 3, 7, 2, 4, 1")) => "1, 3, 7, 12, 14, 21"
console.log(rangeParser("1-3, 1-2")) => "1, 2, 3, 11, 12"
console.log(rangeParser("1:5:2")) => "1, 2, 3, 4, 5, 6, ... 12"
console.log(rangeParser("104-2")) => "104, 105, ... 112"
console.log(rangeParser("104-02")) => "104, 105, ... 202"
console.log(rangeParser("545, 64:11")) => "545, 564, 565, .. 611"
```

---

### Data Structure

**Input:**

* A string representing a list of numbers.

**Output:**

* A string representing a list of numbers.

**Intermediate Data Structures:**

* An array containing nested arrays.
* The nested arrays contain all the numbers from each separate range.

---

### Algorithm

* Let's reiterate the three problems that we need to deal with, but in order of priority:

  1) Determine when we are dealing with a truncated number.

  2) Making a truncated number complete.

  3) Converting a range to a list of numbers.

* For the first problem, we know we are dealing with a truncated number if the number before it is greater.

* The second problem, transforming the truncated number into its complete version is the real tricky part.

Transforming a Truncated Number

* We always need to transform a truncated number based on the number that came before it.

* If each number has the same number of digits, then the truncated number should be given have the digit `'1'` prepended to it. That should solve it.

* Otherwise, the second number will always have less digits.

  ```javascript
  function transformTruncatedNumber(comparison, target) {
    let prefixLength = comparison.length - target.length;
    
    if (Number(comparison) < Number(target)) {
      return target;
    } else if (prefixLength === 0) {
      return '1' + target;
    }
  
    let numberPrefix = Number(comparison.slice(0, prefixLength));
    let transformed = String(numberPrefix) + target;
  
    while (Number(transformed) < Number(comparison)) {
      let digits = transformed.split('');
      let incrementedFirstDigit = String(Number(transformed[prefixLength - 1]) + 1)
      digits.splice(prefixLength - 1, 1, incrementedFirstDigit);
      transformed = digits.join('');
    }
  
    return transformed;
  }
  ```

* The next thing we need to do is given to numbers that delimit the start and end of range we need to return the complete list of numbers between those two numbers.

Make List from Start and End Points of a Range

* Create a for loop that starts with the first argument and ends at the last argument.
* Push each consecutive integer to an array.
* The function should return an array.