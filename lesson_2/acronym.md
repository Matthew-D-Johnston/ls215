##### LS215 Computational Thinking and Problem Solving > String and Text Processing

---

## Acronym

### Problem

Write a function that generates and returns an acronym from a string of words. For example, the function should return "PNG" for the string "Portable Network Graphics". Count compound words (words connected with a dash) as separate words.  

---

### Examples / Test Cases

```javascript
function acronym(string) {
  // ...
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"
```

---

### Data Structure

**Input**

* A string of text containing a range of character types.

**Output**

* A string that represents a capitalized acronym derived from the words contained in the input string.

---

### Algorithm

**Abstractions:**

* Identify each word from the input string, including words separated by a hypen.
* Extract the first letter from each word, capitalize it, and join all of the extracted letters into a single string.

**Functions / Methods / Other:**

* Use regex to identify the words. Essentially anything that is separated by either white space or a hyphen can be interpreted as a word.
* We'll assume that the input string always has more than one word (who ever heard of a single-letter acronym?).
* Use the `match` method to obtain an array of words from the input string.

**Implementation Steps:**

* Declare a `words` variable and initialize it to the result of calling `match` with a regex as argument.
* Use the `map` method on the words variable to extract the first letter of each word then use the `toUpperCase()` method on the letter.
* We could chain a `join('')` method to the return value of the `map` method in order to get the string representation of the acronym.

---

### Code

```javascript
function acronym(string) {
  let words = string.match(/\b\w+\b/gi);
  return words.map(word => word[0].toUpperCase())
              .join('');
}
```

---

### LS Solution

##### Thinking in Abstractions

This problem's shape is that of transformation. Given a set of words, we need to transform each word to its capitalized initial letter.  

However, our criteria requires us to treat hyphenated words as multiple words. Thus, we must cleanse or normalize the text first. We can use a regex with the `String.prototype.replace` method to do this. The intent here is to ensure that when we parse the words into an array, we treat the compound words as separate words.

##### Solution

```javascript
function acronym(string) {
  let stringArray = string.replace(/-/g, ' ').split(' ');
  let initials = stringArray.map(word => word[0].toUpperCase());
  return initials.join('');
}
```

We can also write this more succinctly as:

```javascript
function acronym(string) {
  return string.replace(/-/g, ' ')
  						 .split(' ')
  						 .map(word => word[0].toUpperCase())
  						 .join('');
}
```



