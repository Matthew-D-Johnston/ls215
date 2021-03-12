## Practice Problem: Formatting Bands

We have the following Array of information for some popular bands: 

```javascript
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];
```

There are problems with this data, though, so we first have to clean it up before we can use it:

* The band countries are wrong: all the bands should have 'Canada' as the country.
* The band name should have all words capitalized.
* Remove all dots from the band names.

---

### Examples / Test Cases

Write a function that can process the input band Array and return an Array that contains the fixed information: 

```javascript
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  // ...
}

processBands(bands);

// should return:
[ 
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
```

---

### Data Structure

**Input**

* An Array of Objects.
* The Objects have three properties each: `name` (String), `country` (String), and `active` (Boolean).

**Output**

* An Array of Objects.
* The Objects have the same three properties as the originals; however, both the `name` and the `country` properties have been modified.

---

### Algorithm

**Abstractions:**

* We need a function to modify the `name` property so that each of the words that comprise a name are capitalized.
* Essentially, we want a transformation of the entire Array, and more precisely each Object.

**Functions:**

* 

**Implementation Steps:**

* Iterate over the original array using the `map` method.
* Create a new object for each iteration.
* Use a `switch` statement that performs a different operation for each property of the current Object.
  * for `name`: capitalize each word of the name property and add to the newly created Object.
  * for `country`: change to `Canada` and add to the newly created Object.
  * for `active`: keep as is and add to newly created Object.
* `return` the newly created Object for each iteration.

---

### Code

```javascript
function processBands(bands) {
  return bands.map(band => {
    let processedBand = {};

    for (let property in band) {
      switch (property) {
        case 'name':
          let words = band[property].split(' ');
          let capitalizedWords = capitalizeFirstLetter(words);
          processedBand[property] = removeDots(capitalizedWords.join(' '));
          break;
        case 'country':
          processedBand[property] = 'Canada';
          break;
        default:
          processedBand[property] = band[property];
      }
    }

    return processedBand;
  });
}

function capitalizeFirstLetter(list) {
  return list.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });
}

function removeDots(text) {
  let count = text.match(/[.]/g);
  
  if (count) {
    for (let index = 1; index <= count.length; index += 1) {
      text = text.replace('.', '');
    }
  }
  
  return text;
}
```

---

### LS Solution

#### Thinking in Abstractions

Since we have an Array of Objects and expect an Array result with the same number of Objects, a map operation seems appropriate:

```javascript
bands.map(band => {
  // transform a single band here
});
```

We must perform three tasks to transform the data for each band:

- Update the country.
- Capitalize the band name.
- Remove dots from the band name.

This means your code can look something like this:

```javascript
bands.map(band => {
  updateCountry(band);
  capitalizeBandName(band);
  removeDotsInBandName(band);
  return band;
});

function updateCountry(band) {
  // ...
}

function capitalizeBandName(band) {
  // ...
}

function removeDotsInBandName(band) {
  // ...
}
```

Use the side effects of the three functions to mutate the argument, then return the Array as the transformation's result. When you work on `capitalizeBandName`, don't be afraid to create your own abstraction functions to make the process easier.

#### Solution with Side Effects

```javascript
function processBands(bands) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name
                  .split(' ')
                  .map(word => capitalizeString(word))
                  .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}
```

#### Taming Side Effects

Our solution works, but every step along the way produces side effects. Specifically, this process mutates the original `bands` Array, and each of the transformative functions works on different content. If you no longer need the original `bands` data, this may be OK, but it can cause problems if you don't expect the mutation. Generally, you should aim to reduce side effects in your functions; this contains the effects on the rest of your program.  

A version of this program that is free from side effects may look like this:

```javascript
function processBands(bands) {
  return bands.map(band => {
    let capitalizedName = capitalizePhrase(band.name);
    let newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    };
  });
}

function capitalizePhrase(phrase) {
  return phrase.split(' ')
               .map(word => capitalizeString(word))
               .join(' ');
}

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}
```

