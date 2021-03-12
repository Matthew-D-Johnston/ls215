## Practice Problem: Octal

### Problem

Write a Function named `octalToDecimal` that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.  

Decimal, the numbering system we're most familiar with, is a base-10 system. You can understand the number 233 in base 10 notation as a linear combination of powers of 10:

* The rightmost digit gets multiplied by 10<sup>0</sup> = 1
* The next number gets multiplied by 10<sup>1</sup> = 10
* ...
* The n<sup>th</sup> number gets multiplied by 10<sup>n-1</sup>
* All these values are summed

Here is an example:

```
	233													// decimal
= 2*10^ + 3*10^1 + 3*10^0
= 2*100 + 3*10 + + 3*1
```

Octal works in a similar way, but uses powers of 8 rather than powers of 10 (and is called a base-8 system as a result):

```
	233													// octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8		+ 3*1
= 128		+ 24		+ 3
= 155													// decimal
```

---

### Examples / Test Cases

```javascript
function octalToDecimal(numberString) {
  // ...
}

octalToDecimal('1');				// 1
octalToDecimal('10');				// 8
octalToDecimal('130');			// 88
octalToDecimal('17');				// 15
octalToDecimal('2047');			// 1063
octalToDecimal('011');			// 9
```

---

### Data Structure

**Input**

* A String representation of an octal number.

**Output**

* A Number representation of the decimal version of the octal number input.

---

### Algorithm

**Abstractions:**

* Find the max power for the calculations that are going to take place.
* Split the String into individual digits that are converted to Numbers.
* Iterate over the digits.
* Multiply the digit by the number 8 raised to the max power for the first iteration.
* Decrement the max power and then perform the same operation on successive digits, each time decrementing the max power.

**Functions:**

* Function that performs the decimal conversion on an individual digit. Something like, `octalDigitToDecimal(digit, power)`, which returns `decimalDigit`.

---

### Code

```javascript
function octalToDecimal(numberString) {
  let power = numberString.length - 1;
  let decimalNumber = 0;

  numberString.split('').forEach(charDigit => {
    decimalNumber += octalDigitToDecimal(charDigit, power);
    power -= 1;
  });

  return decimalNumber;
}


function octalDigitToDecimal(digit, power) {
  return Number(digit) * (8**power);
}
```

---

### LS Solution

#### Thinking in Abstractions

The example of converting Octal 233 to Decimal 155 tells us the shape of the solution:

* Split the input into an array of digits (`[2, 3, 3]`).
* Map this "digit" array to an array of digits multiplied by powers of eight (`[128, 24, 3]`).
* Reduce all the numbers to get the total decimal value (155).

```javascript
function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map(digitChar => {
    // convert digitChar to numbers and apply power of eights
  });
  
  return decimalParts.reduce(parts => {
    // sum them up
  });
}
```

#### Solution

```javascript
function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, index) => {
    return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });
  
  return decimalParts.reduce((sum, number) => sum + number);
}
```

#### Alternative Solution

```javascript
function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}
```

