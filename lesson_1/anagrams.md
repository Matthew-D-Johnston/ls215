## Practice Problem: Anagrams

### Problem

Write a Function named `anagram` that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".  

---

### Examples / Test Cases

```javascript
function anagram(word, list) {
  // ...
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);	// [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);	// [ "enlist", "inlets" ]

```

---

### Data Structure

**Input**

* Two arguments: 1) a String representation of a word; and 2) an Array of words represented by Strings.

**Output**

* An Array of words that are anagrams of the word input.

---

### Algorithm

**Abstractions:**

* An anagram must have the exact same letters in the same amount as the original word.
* If we sort the individual characters of a word and compare it to sorted versions of the words in the Array, then we should be able to get all the anagrams.
* We can iterate over the array and filter for matches to the sorted word.

**Functions:**

* Create a `sortedWord` function.

**Implementation Steps:**

* Sort the initial word.
* Use the `filter` method on the original Array.
* Compare the initial sorted word with sorted versions of each word in the array.
* Return the filtered array.

---

### Code

```javascript
function anagram(word, list) {
  let sortedWord = sortWord(word);

  return list.filter(word => sortedWord === sortWord(word));
}

function sortWord(word) {
  return word.split('').sort().join('');
}
```

---

### LS Solution

#### Thinking in Abstractions

You should see that the general "shape" of the solution is a `filter` - we want a subset of a list of words: those that are anagrams of the main word. Therefore, our solution likely looks something like this:

```javascript
function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}
```

`areAnagrams` is a natural abstraction that tells whether two words are anagrams of each other. How do we decide whether they are, though? One approach we can take is to split the words into arrays of letters, sort those arrays, and then compare the two arrays: they need to have the same length with identically valued elements.

```javascript
function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = // sorted source letters;
  let targetLetters = // sorted target letters;
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  // compare two arrays
}
```

#### Solution

```javascript
function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }
  
  return array1.every((letter, index) => letter === array2[index]);
}
```

