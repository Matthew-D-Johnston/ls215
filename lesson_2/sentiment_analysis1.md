##### LS215 Computational Thinking and Problem Solving > String and Text Processing

---

## Sentiment Analysis 1

### Problem

Sentiment analysis, sometimes known as opinion mining, attempts to ascertain subjective information from a text and convert it to something concrete. For example, by using lists of positive and negative words, we can analyze the words in some text to determine whether the mood is positive, negative, or neutral.  

Sentiment analysis adds a dimension to content that is mostly text based. Its main task is to classify the polarity of the text. In this practice problem, we will build a tool that determines the mood of some text. Note that we will take a simplistic approach. We don't recommend this approach for live sentiment analysis.  

There are many ways to implement sentiment analysis. Here, we will use two arrays of words. One array contains words that connote a *"positive"* sentiment, while the other contains words that connote a *"negative"* sentiment. Given the counts of positive and negative words in our text, we can compute a sentiment score as the difference between the two counts, "positive word count - negative word count." The sentiment of the text is positive if the difference is positive, negative if the difference is negative, and neutral if the difference is 0 (the word counts are equal).  

Implement a function that takes some text as an argument and logs some information about whether the text has a positive, negative, or neutral sentiment.  

Here's an excerpt of some text taken from a [Wikipedia article](https://en.wikipedia.org/wiki/To_be,_or_not_to_be) that compares different versions of "To be, or not to be".  

```javascript
let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';
```

---

### Examples / Test Cases

Example:

```javascript
let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  // ...
}

sentiment(textExcerpt);

// console output

There are 5 positive words in the text.
Positive sentiments: fortune, dream, respect, love, resolution

There are 6 negative words in the text.
Negative sentiments: die, heartache, die, death, weary, death

The sentiment of the text is Negative.
```

---

### Data Structure

**Input**

* A string.

**Output**

* Logs some text indicating the number of positive words, what those positive words are, the number of negative words, what those negative words are, and whether the overall text is positive or negative.

---

### Algorithm

* Given a list of positive words and a list of negative words, we must compare these lists against the given input text.
* We want to track the number of occurrences of each type of word and copies of the positive words that occur.
* It might be simplest to transform our word lists into regex. 
* We might want to create some `createRegExpFromWordList` method.
* Once this method is created we can use it with a `match` method call on the input text to get an array of all matches.
* We can then count the number of matches using the `length` property on the array.
* We can then obtain just the unique words in the array to get the unique occurrences of the words.
* Then we compare the difference between the number of positive and negative words to check the overall sentiment of the text.
* Then we can construct our messages to output to the console.



---

### Code

```javascript
let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let positiveRegExp = createWordListRegExp(positiveWords);
  let negativeRexExp = createWordListRegExp(negativeWords);

  let positiveMatches = text.match(positiveRegExp);
  let negativeMatches = text.match(negativeRexExp);

  sentimentMessages(positiveMatches, negativeMatches);
}

function createWordListRegExp(word_list) {
  let joinedWords = word_list.join('|');
  let regex = `\\b(${joinedWords})\\b`;
  return new RegExp(regex, 'gi');
}

function sentimentMessages(positiveMatches, negativeMatches) {
  let positiveMatchCount = positiveMatches.length;
  let negativeMatchCount = negativeMatches.length;
  let overallSentiment = positiveMatchCount - negativeMatchCount;

  let positiveString = positiveMatches.join(', ');
  let negativeString = negativeMatches.join(', ');
 
  console.log(`There are ${positiveMatchCount} positive words in the text.`);
  console.log(`Positive sentiments: ${positiveString}`);
  console.log('');
  console.log(`There are ${negativeMatchCount} negative words in the text.`);
  console.log(`Negative sentiments: ${negativeString}`);
  console.log('');
  if (overallSentiment > 0) {
    console.log('The sentiment of the text is Positive');
  } else if (overallSentiment < 0) {
    console.log('The sentiment of the text is Negative');
  } else {
    console.log('The sentiment of the text is Netural');
  }
}
```

---

### LS Solution

##### Thinking in Abstractions

Our solution should take the shape of a `filter`: we need to filter the text into two lists, one that contains positive words, and one that contains negative words. Once we have these lists, an output summary is easy.  

##### Hint: Getting the list of words in the text

You can generate a suitable list of words from the text with this statement:

```javascript
let wordList = text.toLowerCase().match(/[a-z']+/g);
```

This statement converts all characters to lowercase, and then constructs an Array that contains every sequence of letters and apostrophes, which it stores in `wordList`.  

##### Solution

```javascript
let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g);

  let positives = wordList.filter(word => positiveWords.indexOf(word) >= 0);
  let negatives = wordList.filter(word => negativeWords.indexOf(word) >= 0);

  console.log('There are ' + String(positives.length) + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(', '));
  console.log('');
  console.log('There are ' + String(negatives.length) + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(', '));
  console.log('');

  let textSentiment;
  if (positives.length > negatives.length) {
    textSentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    textSentiment = 'Negative';
  } else {
    textSentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + textSentiment + '.');
}
```

