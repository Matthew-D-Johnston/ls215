##### LS215 Computational Thinking and Problem Solving > String and Text Processing

---

## Code Review: Longest Sentence

Write a program that determines the sentence with the most words in some text. Sentences may end with periods (`.`), exclamation points (`!`), or question marks (`?`). Sentences always begin with a word character. You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).  

---

### Examples / Test Cases

Example:

```javascript
let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  // ...
}

longestSentence(longText);

// console output
It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText);

// console output
Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

The longest sentence has 30 words.
```

---

### Data Structure

**Input**

* A string of text.

**Output**

* Log a string representing the longest sentence in the text.
* Log a string statement that indicates how many words comprise the longest sentence.

---

### Algorithm

**Abstractions:**

* Split the input text into separate sentences, which are delimited by either `.`, `!`, or `?`.
* Each sentence must be split into its word components.
* Thus we must iterate over an array of the separate sentences.
  * Each sentence must be split into its separate word components. We must then count the total number of words in each sentence.
  * We should create some variables that keep track of the longest sentence and its size, so that during each iteration we compare with the current longest sentence and the size that is currently the longest.
* Count the number of words for each sentence.
* The sentence with the most words is the longest sentence. Log it to the console and log a statement about its word count.

**regex**

* The first split of the entire text may be done with a regex like, `/[.?!]+ /g`.
* The second split we can simply do along white spaces, like this `/\s/`.

**Implementation Steps:**

* Declare a `sentences` variable that is initialized with the value associated with `inputText.split(/[.?!]+ /g)`.
* Scratch the first step, and we'll try assigning the return value of `inputText.match(/\b[^.?!]+[.?!]/g)`.
* Declare a `theLongestSentence` variable and initiailize it with an empty string, `''` value.
* Declare a `wordCountOfLongestSentence` variable and initialize it with a value of `0`.
* Iterate over the `sentences` array with a `forEach` method with the variable `sentence` representing each element of the `sentences` array.
  * Declare a `currentWordCount` variable and assign it to the return value of the following method call: `sentence.split(/\s/g).length`.
  * Use an `if` statement to check if `(currentWordCount > wordCountOfLongestSentence)`. If it is, then assign `theLongestSentence` to `sentence.join(' ')` and assign `wordCountOfLongestSentence` to `currentWordCount`.
* Log the `theLongestSentence` variable to the console.
* And log a statement indicating the number of words in the longest sentence to the console.

---

### Code

```javascript
function longestSentence(text) {
  let sentences = text.match(/\b[^.?!]+[.?!]/g);
  let theLongestSentence = '';
  let longestSentenceCount = 0;

  sentences.forEach(sentence => {
    let currentWordCount = sentence.split(/\s/g).length;

    if (currentWordCount > longestSentenceCount) {
      theLongestSentence = sentence;
      longestSentenceCount = currentWordCount;
    }
  });

  console.log(theLongestSentence);
  console.log(`The longest sentence has ${longestSentenceCount} words.`);
}
```

