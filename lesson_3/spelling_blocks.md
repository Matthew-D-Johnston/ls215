##### LS215 Computational Thinking and Problem Solving > A General Problem Solving Approach

---

## Problem 3: Spelling Blocks

### Problem

**Description:**

A collection of spelling blocks has two letters per block, as shown in this list:

```
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
```

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.  

Write a function that takes a word string as an argument, and returns `true` if the word can be spelled using the set of blocks, or `false` otherwise. You can consider the letters to be case-insensitive when you apply the rules.  

**Definitions/Rules (implicit and explicit):**

* Collection block: 2 letters per block (see above)
* Words cannot be spelt with both letters from each block and blocks can only be used once.
* Function takes a string representing a word. Can the string contain characters other than letters? What should I do about these? Let's assume that the only characters in the string will be alphabetic characters.
* What about an empty string? Let's say that it will return `true` for empty strings. There has been no violation of the block rules.
* When checking to see if the word can be spelt, the checker is case insensitive.

**Input/Output:**

* Input is a string. 
* Output is a boolean: `true` if the word can be spelled using the set of blocks; `false` otherwise.

**Mental Model:**

Given an input string that represents a word, verify that the word is spelt in a way that it never uses any of the blocks more than once. If it passes this test, then we return `true`. But if it fails, we return `false`.

---

### Examples / Test Cases

```javascript
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('');					 // true
```

We are making the assumption that the string passed to the function contains only alphabetic characters.

---

### Data Structure

**Input:**

* A string containing alphabetic characters.

**Output:**

* A boolean.

**Intermediate Data Structures:**

* Create an array as a way to structure the blocks. Each element of the array will be a two-letter string representing the blocks (e.g. `'BO'` or `'XK'`).

  ```
  ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
  ```

* I'll also create another array that will collect only the blocks that match a letter from the given word.

---

### Algorithm

**Abstractions:**

* Iterate over each character of the input string.
* Create an empty array that will store the letter-block matchs with our word.
* Each character needs to be checked against the elements in the array of letter blocks.
* Take the matching block and then check to see if our array already includes that block. If so, we can immediately return `false`.
* If we get to the end of the iteration without returning `false`, we can then return `true`.
* Create a separate method that takes a single letter as an input and returns the two letter string that represents one of the blocks.

**Tools (Methods/Functions/regex):**

* create a `letterBlock` function. This function will contain a constant that references our array of the separate block elements. It will take the input letter and lookup within the array which block matches that letter and return the appropriate block.

**Implementation Steps:**

* First create the `letterBlock(char)` function.

* It will take a single argument.

* Within the function, declare a constant `Blocks` variable and assign it to: 

  ```javascript
  const Blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
  ```

* Iterate over this array and match it with the given `char` variable using the `includes` method. Use an `if` statement to find the match and then take the current index to extract the element that matches, and return that element.

* For our `isBlockWord` function, it will take a single argument called `word`.

* Declare a `matchingBlocks` variable and initialize with an empty array, `[]`.

* Use a `for` loop to iterate over the `word` string.

* Use the `letterBlock` function we created to obtain our two-character block for the current character. If that character block is already contained in our `matchingBlocks` array, then we can return `false` immediately. 

* If after we get through the complete loop over the string without returning `false` we then return `true`.

---

### Code

```javascript
function letterBlock(char) {
  const Blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let index = 0; index < Blocks.length; index += 1) {
    if (Blocks[index].includes(char.toUpperCase())) {
      return Blocks[index];
    }
  }
}

function isBlockWord(word) {
  let matchingBlocks = [];

  for (let index = 0; index < word.length; index += 1) {
    let currentBlock = letterBlock(word[index]);

    if (matchingBlocks.includes(currentBlock)) {
      return false;
    }

    matchingBlocks.push(currentBlock);
  }

  return true;
}
```