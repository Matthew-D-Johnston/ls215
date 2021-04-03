##### LS215 Computational Thinking and Problem Solving > A General Problem Solving Approach

---

## Problem 1: Number Cleanup

### Problem

**Instructions:**

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

- If the phone number is less than 10 digits, assume that it is a bad number.
- If the phone number is 10 digits, assume that it is good.
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
- If the phone number is 11 digits and the first number is not 1, then it is a bad number.
- If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 `0`s.

**Definitions/Rules (explicit and implicit):**

* Phone numbers are entered by the user.
* The number may contain special characters, _**such as**_ spaces, dashes, dots, and parentheses. These special characters should be ignored. 
* Thus, we only want the digits regardless of whatever other characters are included.
* If the number has less than 10 digits, then it is bad.
* If the number is 10 digits, it is good, regardless of what those digits are.
* If it has 11 digits and the first digit is a 1, then keep only the next 10 digits.
* If it has 11 digits and the first digit is not 1, it is bad.
* If it is more than 11 digits it is bad.
* If number is bad, return a string of 10 `0`s.

**Input/Output:**

* The input will be a number that has been entered by a user.
* The output will be a cleaned-up version of this number; it will either be the 10 digits that were input by the user, cleansed of all unnecessary characters, or it will be 10 `0`s because the input was invalid.

**Mental Model:**

We must take a number given by a user and check to see if it contains 10, and only 10 digits. The one exception is if there are 11 digits but the first digit is a 1. If the input fails on this point then we can simply return 10 `0`s because the input is invalid. All other characters that are not digits, must be omitted from the number.

---

### Examples / Test Cases

```javascript
function numberCleanup(number) {
  ...
}
  
console.log(numberCleanup('514-268-2645')) => '5142682645'
console.log(numberCleanup('1-524-345-8439')) => '5243458439'
console.log(numberCleanup('2-345-823-6934')) => '0000000000'
console.log(numberCleanup('3445.fd.23455.fae.35323502')) => '0000000000'
console.log(numberCleanup('er3.321.-433fee891')) => '3321433891'
console.log(numberCleanup('34543')) => '0000000000'
console.log(numberCleanup('')) => '0000000000'
```

---

### Data Structure

**Input:**

* A string of characters and of variable length.

**Output:**

* A string of 10 digits.

**Intermediate Data Structures:**

* ???

---

### Algorithm

**Abstractions:**

* Replace non-digit characters with an empty space.
* Check the length of the resulting string.
* If it is less than 10 or greater than 11, it is a bad number, return `0000000000`;
* If it is equal to 11 and the first digit isn't 1 it is a bad number, return `0000000000`;
* If it is equal to 11 and the first digit is 1, it is a good number but we need to remove the 1 and then return the remaining 10 digits.
* If it is equal to 10, it is a good number, and we simply return those 10 digits.

**Tools (i.e. methods/functions/regex):**

* `replace(/[^0-9}/g, ''])`
* `if`, `else if`, and `if` statements.

**Implementation Steps:**

* Declare a `cleansed` variable and initialize it with the return value from calling the `replace` method on the `number` variable with the arguments `/[^0-9]/g` and `''`.
* Declare a `cleansedLength` variable and initialize it with the return value from calling `cleansed.length`.
* Declare a `badNumber` constant and intiailize it with the value `0000000000`.
*  `if (cleansedLength === 10)`, then `return cleansed`;
* `else if (cleansedLength === 11)` then:
  * `if (cleansed[0] === '1')`, then return `cleansed.slice(1)`
  * `else`, `return badNumber`.
* `else`, `return badNumber`.

---

### Code

```javascript
function numberCleanup(number) {
  let cleansed = number.replace(/[^0-9]/g, '');
  let cleansedLength = cleansed.length;
  const BadNumber = '0000000000';

  if (cleansedLength === 10) {
    return cleansed;
  } else if (cleansedLength === 11) {
    if (cleansed[0] === '1') {
      return cleansed.slice(1);
    } else {
      return BadNumber;
    }
  } else {
    return BadNumber;
  }
}
```

