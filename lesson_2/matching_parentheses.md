##### LS215 Computational Thinking and Problem Solving > String and Text Processing

---

## Matching Parentheses

### Problem

Write a function that takes a string as an argument and returns `true` if the string contains properly balanced parentheses, `false` otherwise. Parentheses are propertly balanced only when `'('` and `')'` occur in matching pairs, with each pair starting with `'('`.  

---

### Examples / Test Cases

Examples:

```javascript
isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false
```

---

### Data Structure

**Input**

* A string.

**Output**

* A boolean value.

---

### Algorithm

**Abstractions:**

* Check to see see whether we have balanced parentheses.
* If there is even one set of unbalanced parentheses, we must return `false`. That means all parentheses that appear in the input string are balanced.
* I think that I can solve this by using employing a counter technique.
* Start at 0 and increment by 1 whenever iterating over the string comes across a `(` and decrement by 1 whenever we come across a `)`. If we ever fall below zero, then we can immediately return `false`. Otherwise, if we get to the end of the string and the counter variable is 0 then we can return `true`.

**Implementation Steps:**

* Declare a `counter` variable and initialize it with the value of `0`.
* Begin a `for` loop that allows us to iterate over each character of the input string.
* `if` the current character is `(` then increment `counter` by `1`.
* `if` the current character is `)` then decrement `counter` by `1`.
* `if (counter < 0)` then `return false`.
* After the loop has completed, `if  counter === 0` then `return true`, otherwise `return false`.

---

### Code

```javascript
function isBalanced(text) {
  let counter = 0;

  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '(') {
      counter += 1;
    } else if (text[index] === ')') {
      counter -= 1;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter === 0;
}
```

---

### LS Solution

##### Logic and Structure

Each left parenthesis must have a matching right parenthesis. We can keep track with a running tally of the parentheses encountered. Each left parenthesis increments the tally by 1, while each right parenthesis decrements the tally. If the tally never goes negative, and the final tally is 0, then we have properly balanced parentheses.  

Note that the tally can never go negative: if it does, we have parentheses that are out of balance, and should immediately quit iterating and return `false`. Since the logic requires a potentially early return, we should use a low-level loop instead of an abstraction.  

##### Solution

```javascript
function isBalanced(string) {
  let parensCount = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      parensCount += 1;
    } else if (string[i] === ')') {
      parensCount -= 1;
    }
    
    if (parensCount < 0) {
      return false;
    }
  }
  
  return parensCount === 0;
}
```

