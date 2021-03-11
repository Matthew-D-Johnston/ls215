## Practice Problem: Processing Releases

### Problem

Write a Function named `processReleaseData` that processes the following movie release data:

```javascript
let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];
```

The Function should generate an Array of Objects that contain only the `id` and `title` key/value pairs. You may assume that `id` and `title`, when existing, is an integer greater than `0` and non-empty string respectively. Here are the rules:  

* Keep only releases that have both `id` and `title` property present.
* Keep only the `id` and `title` data for each release.

---

### Examples / Test Cases

```javascript
function processReleaseData(data) {
  // ...
}

processReleaseData(newReleases);

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
```

---

### Data Structures

**Input:**

* An Array whose elements are Objects.
* Objects may contain the following properties: `id`, `title`, `boxart`, `uri`, `rating`, and `bookmark`.

**Output:**

* An Array whose elements are Objects.
* Only Objects with the following two properties: `id` and `title`.

---

### Algorithm

**Initial Abstractions:**

* Check whether an Object has both an `id` and `title` property.
* Filter through an Array to select only the Objects that have the `id` and `title` property.
* Populate a new Array with Objects that have an `id` and `title` property, the values of which correspond to the values associated with those properties from the original Objects.

**Functions:**

* `hasIdAndTitleProperties(object)` (this will be part of some conditional statement).

**Implementation/Steps:**

* Create a new empty `resultsArray`.
* Iterate over the original Array.
* Use a conditional statement to check if the current Object has the `id` and `title` properties (use above function).
* if the Object has the properties, create a new Object with those properties and the associated values from the current Object and push them to the `resultsArray`.
* return the `resultsArray` after iteration.

---

### Code

```javascript
function hasIdAndTitleProperties(object) {
  return Boolean(object.id) && Boolean(object.title);
}

function processReleaseData(data) {
  let resultsArray = [];

  data.forEach(obj => {
    if (hasIdAndTitleProperties(obj)) {
      let newObj = {};
      newObj.id = obj.id;
      newObj.title = obj.title;
      resultsArray.push(newObj);
    }
  });

  return resultsArray;
}
```

---

### LS Solution

#### Thinking in Abstractions

Our input is an Array of Objects. The first rule needs a `filter` to select the releases that satisfy a certain condition; the second rule needs a `map` to transform the array of objects by keeping only the `id` and `title` fields. So our solution should look something like this:

```javascript
function processReleaseData(data) {
  return data.filter(release => {
    // select the releases with both id and title properties
  }).map(release => {
    // map each release to an object with only id and title
  });
}
```

#### Solution

```javascript
function processReleaseData(data) {
  return data.filter(release => release.id && release.title)
  					 .map(release => {
    					 return {
                 id: release.id,
                 title: release.title,
               };
  					 });
}
```

#### Further Exploration

The current solution assumes that the value of `id` will be an integer value greater than `0`. If it was possible to have a value of `0` for `id`, what would the implications be to the current solution? What changes, if any, would need to be made in order to handle the `0` value? 

**My Solution**

We would need to make sure that we check whether the `id` property had a `0` value. `0` is a falsy value and thus would lead to objects whose `id` key was associated with a `0` value being excluded from our results. Below, we modify the `hasIdAndTitleProperties` function so that it checks whether the `id` property has a `0` value.

```javascript
function hasIdAndTitleProperties(object) {
  return (object.id === 0 || Boolean(object.id)) && Boolean(object.title);
}
```



