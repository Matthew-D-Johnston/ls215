##### LS215 Computational Thinking and Problem Solving > A General Problem Solving Approach

---

## Problem 2: Luhn Formula

### Problem

**Description:**

The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

- Counting from the rightmost digit and moving left, double the value of every second digit
- For any digit that thus become 10 or more, subtract 9 from the result
  - 1111 becomes 2121
  - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
- Add all these digits together
  - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
  - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

**Definitions/Rules:**

* Luhn formula validates id numbers, such as credit card numbers.
* Start from rightmost digit.
* Move left.
* Double the value of every second digit, meaning all even index digits.
* If doubling the digit creates a value that is greater or equal to 10, subtract 9 from the result.
* Add all of the digits together.
* If the last digit of this sum is 0, the number is valid.

**Input/Output:**

* The input will be a number in string format. May contain characters that are non-numeric. Ignore those characters.
* Checking for validity, so implicitly it appears we are looking for a boolean value.

**Mental Model:**

Accept a number in string format of varying length. Strip any non-numeric characters from the string. Iterate over the string and for each character at an even index, double its value. If the value is equal to or greater than 10, subtract 9. With this collection of transformed digits, sum them together. If the last digit of this final sum is 0, then we have a valid number and we return `true`; otherwise, the number is invalid and we return `false`.

---

### Examples / Test Cases

```javascript
function validLuhnNumber(number) {
  ...
}

console.log(validLuhnNumber('3456')) => '6416' => '17' => false
console.log(validLuhnNumber('8763')) => '7733' => '20' => true
console.log(validLuhnNumber('4533 2356')) => '85634316' => '36' => false
console.log(validLuhnNumber('3211-e45.6')) => '6221853' => '27' => false
console.log(validLuhnNumber('')) => false
console.log(validLuhnNumber('0000')) => true
```

---

### Data Structure

**Input:**

* A string of variable length.
* It may contain non-numeric characters.

**Output:**

* A boolean.

**Intermediate Data Structures:**

* An array may be useful here keeping track of the individual digits.

---

### Algorithm

**Abstractions:**

* Replace non-numeric characters from the string with empty spaces.
* Split the string into individual digits.
* Transform every digit to a number. Transform every other digit (starting from index `0`) by doubling it; if it is greater than or equal to `10` then subtract `9`.
* Reduce the transformed array to a single sum of all the elements.

---

### Code

```javascript
function validLuhnNumber(number) {
  if (number.length === 0) {
    return false;
  }

  let digits = number.replace(/\D/g, '').split('');

  let luhnDigits = digits.map((digit, index) => {
    digit = parseInt(digit, 10);

    if (index % 2 === 0) {
      digit *= 2;

      if (digit >= 10) {
        digit -= 9;
      }
    }

    return digit;
  });

  let checksum = luhnDigits.reduce((digit, accum) => accum + digit);
  return Number(String(checksum).slice(-1)) === 0;
}
```



