##### LS215 Computational Thinking and Problem Solving > A General Problem Solving Approach

---

## Problem 5: Rail Fence Cipher

### Problem

**Problem Description:**

Implement encoding and decoding for the rail fence cipher.  

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.  

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.  

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:  

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
```

Then reads off:

```
WECRLTEERDSOEEFEAOCAIVDEN
```

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

```
? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
```

The first row has seven spots that can be filled with "WECRLTE".

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
```

Now the 2nd row takes "ERDSOEEFEAOC".

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
```

Leaving "AIVDEN" for the last row.

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
```

If you now read along the zig-zag shape you can read the original message.

**Definitions and Rules (explicit and implicit):**

* The cipher has two functions: encoding and decoding.
* Encoding:
  * We are given a message. The message contains characters and white spaces.
  * There is also a "rails" variable.
  * Given say 3 rails, the encoding process must split the message into individual characters, ignoring the white spaces.
  * Starting with the first position of the first rail, we must insert the first character.
  * The second character will go in the second position of the second rail. The third in the third position of the third rail. However, the fourth must now go into the fourth position of the second rail.
  * Thus, the positioning must always increment by 1, whereas the rail increments by 1 until it reaches its limit and then decrements by 1. 
  * The positions of the rail that do not take a character from the given message are filled in with periods.
  * Since the number of rails is specified, the length of each rail will vary depending on the number of characters in the message. Is there some sort of formula we might derive given the number of rails and the number of non-white-space characters????
  * It appears that there is two outputs: 1) The zig-zag encoding and 2) all of the non-white-space characters strung together according to their positioning in the zig-zag pattern, with all of the characters on the first rail strung together first and followed by the characters of successive rails.
  * 
* Decoding:
  * Decoding takes a string of characters without any white spaces.
  * When decoding, one must be given the number of rails that was used to encode the original message (when encoding, the encoder can choose the number of rails, but the decoder must use the same number of rails in order to accurately decipher the message).
  * To decode the message we just fill in the appropriate positions of the rails with successive characters of the message. We do this line by line, or rather, rail by rail.
  * Again, given the number of characters in the message and the number of rails, we should be able to determine the length of each rail.
  * Again, we have two outputs: 1) the zig-zag pattern filled with the characters from the input message and 2) the decoded message, but without white spaces since we have no idea where the white spaces should go.

**Inputs/Outputs:**

* Encoding Inputs: A string of characters with white spaces; and the number of rails.
* Encoding Outputs: the zig-zag pattern; and the encoded message.
* Decoding Inputs: A string of characters without white spaces; and the number of rails (must be given from the encoder).
* Decoding Outputs: the zig-zag pattern; and the decoded message, but without the white spaces.
* We're probably going to construct to separate functions, an encoder and a decoder. But we might encompass these two functions into one bigger cipher function, and that cipher function will thus need another input that determines whether we are encoding a message or decoding a message.

**Mental Model:**

There are two main branches to the cipher: an encoding branch and a decoding branch. We must specify which branch we are intending to use and that will depend on whether we are trying to encode a coherent message or decode an incoherent one.  

To encode a message we must strip out the white spaces, construct a zig-zag pattern with the number of rows equivalent to the number of rails specified, and the number of columns (i.e. length of the rows/rails) will thus be determined by the length of the message. We must fill out the zig-zag pattern with successive characters from the original message (stripped of the white spaces) by incrementing each column position by 1 and each row position by 1 until we reach the last row, where we then decrement the row position.  

To decode a message, we must construct a zigzag pattern given a specified number of rails. The number of rows in the pattern will correspond to the number of rails and the number of columns will vary depending on the length of the message. We fill in the zigzag pattern by taking each successive character from the message and filling in the appropriate spaces of the first row, then we move onto the second row, and so on and so forth until we have filled in the last row.

---

### Examples / Test Cases

**Encoding:**

Message: "HOW ARE YOU"

Rails: 4

```
H . . . . . Y . .
. O . . . E . O .
. . W . R . . . U 
. . . A . . . . . 

HYOEOWRUA
```

Message: "WHAT IS YOUR NAME"

Rails: 2

```
W . A . I . Y . U . N . M .
. H . T . S . O . R . A . E

WAIYUNMHTSORAE
```

Message: "GO TO THE STORE"

Rails: 1

```
G O T O T H E S T O R E

GOTOTHESTORE
```

Message: "WHERE DO YOU THINK YOU ARE GOING"

Rails 5:

```
W . . . . . . . O . . . . . . . O . . . . . . . N .
. H . . . . . Y . U . . . . . Y . U . . . . . I . G
. . E . . . O . . . T . . . K . . . A . . . O . . .
. . . R . D . . . . . H . N . . . . . R . G . . . .
. . . . E . . . . . . . I . . . . . . . E . . . . .
```



**Decoding:**

Encoded Message: HYOEOWRUA

Rails: 4

```
H . . . . . Y . .
. O . . . E . O .
. . W . R . . . U
. . . A . . . . .

HOWAREYOU
```

Encoded Message: WAIYUNMHTSORAE

Rails: 2

```
W . A . I . Y . U . N . M .
. H . T . S . O . R . A . E
```

Encoded Message: GOTOTHESTORE

Rails: 1

```
G O T O T H E S T O R E

GOTOTHESTORE
```

---

### Data Structure

**Inputs:**

* Cipher: 
  * 1) A string representing a message (it may or may not have white spaces).
  * 2) An integer representing the number of rails.
  * 3) A string that is either `'encode'` or `'decode'`.
* Encoder:
  * 1) A string representing a message containing alphabetic characters and white spaces.
  * 2) An integer representing the number of rails.
* Decoder:
  * 1) A string representing a message containing alphabetic characters and white spaces.
  * 2) An integer representing the number of rails.

**Outputs:**

* Cipher:
  * 1) A zig-zag pattern in the form of consecutive string outputs, one for each row of the pattern.
  * 2) Either an encoded message or a decoded message.
* Encoder:
  * 1) A zig-zag pattern in the form of consecutive string outputs, one for each row of the pattern.
  * 2) An econded string message.
* Decoder:
  * 1) A zig-zag pattern in the form of consecutive string outputs, one for each row of the pattern.
  * 2) A decoded string message.

**Intermediate Data Structures:**

* We might try using an array with nested arrays to model the zig-zag pattern. 
* Each nested sub-array would represent a row of the zig-zag pattern. 
* Its elements will represent the columns of the pattern. Elements will consist of alphabetic characters and `'.'`s.
* The number of nested sub-arrays will correspond to the number of rails.
* The length of each nested sub-array will correspond to the number of non-white-space characters in the message.

---

### Algorithm

The main algorithm we need to think about first is constructing the zig-pattern giving a particular message and number of rails. We already know we want to model it based on an array with nested arrays. Now we need to think about how we want to populate those nested arrays.

* Given 4 rails and a message that is 25 characters long, we will have four sub-arrays that each have a length of 25 characters.
* We must iterate over the 25 characters, we could perhaps do this with a `forEach` method.
* We might want to declare `rowPosition` and `columnPosition` variables. 
* The max `rowPosition` will be the number of rows, in this case `4`.
* The max `columnPosition` will be `24`, one less than the total length of `25` (this is because arrays start with a `0` index).
* The `columnPosition` is relatively straight forward to deal with: we just need to increment it by `1` on each iteration.
* However, the `rowPosition` increments by `1` until it hits its limit, in this case `4`. It must then start decrementing by `1`. Then, once it returns to `1` it must start incrementing again.
* We might be able to model this using some kind of switch variable that takes a boolean value. For example, `increment = true`. Once the `rowPosition` hits its limit, the `increment` variable will be assigned the boolean `false`.
* Let's create some implementation steps for this algorithm.

Zig-zag Pattern Implementation Steps:

* Declare a `zigzagMatrix` variable and assign it to an empty array, `[]`.
* Do a `for` loop that iterates from `0` up to one less than the number of rails.
* On each loop, push an empty array of appropriate length to the `zigzagMatrix`.
* Declare a `rowPosition` variable and initialize it with the value `0`.
* Declare a `columnPosition` variable and initialize it with the value `0`.
* Declare a `rowLimit` variable and initialize it with a value equal to the number of rails.
* Declare an `increment` variable and initialize it with the value `true`.
* Iterate over the characters of the message using a `forEach` method.
* Use the `rowPosition` to return the appropriate "row" from the `zigzagMatrix`.
* Use the `columnPosition` to return the appropriate "column" from the "row".
* Assign the current letter to this row-column combination.
* If the `rowPosition` is equal to the `rowLimit - 1` or equal to `-1`, then we need to change the value of the `increment` variable to `increment = !increment`.
* Then, `increment ? rowPosition +=1 : rowPosition -= 1;`

Code:

```javascript
function createZigZagPattern(message, rails) {
  let zigZagMatrix = createEmptyMatrix(rails, message.length);

  let rowPosition = 0;
  let columnPosition = 0;
  let rowLimit = rails;
  let increment = true;

  message.split('').forEach(char => {
    zigZagMatrix[rowPosition][columnPosition] = char;

    columnPosition += 1;
    increment ? rowPosition += 1 : rowPosition -= 1;

    if ((rowPosition === (rowLimit - 1)) || (rowPosition === 0)) {
      increment = !increment;
    }
  });

  fillEmptyMatrixSpacesWithDots(zigZagMatrix);

  return zigZagMatrix;
}

function createEmptyMatrix(rows, columns) {
  let matrix = [];

  for (let index = 0; index < rows; index += 1) {
    let row = [];
    row.length = columns;
    matrix.push(row);
  }

  return matrix;
}

function fillEmptyMatrixSpacesWithDots(matrix) {
  matrix.forEach(row => {
    for (let index = 0; index < row.length; index += 1) {
      if (!(/[A-Z]/.test(row[index]))) {
        row[index] = '.';
      }
    }
  });
}
```

Based on this created zig-zag pattern, we can now create a separate function that takes this pattern, extracts the alphabetic characters row-by-row, and strings them together.

* Input: zig-zag pattern.
* Declare a `message` variable and initialize it with an empty string, `''`.
* Iterate over the rows of the input matrix.
* Extract only the alphabetic characters, and append them to the `message` variable.
* Return the `message` variable

Implementation Steps:

* Declare a `message = ''`.
* Call `matrix.forEach(row => {})`.
* For each `row`, call `message += row.filter(char => char.match(/[A-Z]/)).join('')`

Code:

```javascript
function createEncodedMessage(matrix) {
  let message = '';

  matrix.forEach(row => {
    message += row.filter(char => char.match(/[A-Z]/)).join('');
  });

  return message;
}
```

Now, if we combine this function with our above `createZigZagPattern` function, we can create our encoder function:

* It will take a `message` and `rails` variable.
* It will call the the `createZigZagPattern` function and iterate over each of the resulting matrix's rows, outputting each row to the console.
* Then it will output the return value of our `createEncodedMessage` function.

Code:

```javascript
function encoder(message, rails) {
  let messageWithoutWhiteSpace = message.replace(/\s+/g, '');

  if (rails === 1) {
    console.log(messageWithoutWhiteSpace.split('').join(' '));
    console.log('');
    console.log(messageWithoutWhiteSpace);
  } else {
    let encodedMatrix = createZigZagPattern(messageWithoutWhiteSpace, rails);

    encodedMatrix.forEach(row => console.log(row.join(' ')));
    console.log('');
    console.log(createEncodedMessage(encodedMatrix));
  } 
}
```

Now, we need to reverse the process and think about the decoding algorithm. 

* We can reuse the `createZigZagPattern` function and pass in as the message a string of `?`s that is equal to the length of the message.

* We have to use the same number of rails that was used to encode the message.

* The return value will give us a matrix of `'.'`s and `'?'`s. Once we have this matrix we can take the encoded message and character by chacter we can replace the `'?'`s with the current character and do this row-by-row, column-by-column.

* Thus, we will need a main outer loop that iterates over the characters of the message string. A `forEach` method should work after we split the string into an array of individual characters. `message.split('').forEach(char => {})`.

* Given, for example, the following zig-zag pattern:

  ```
  ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
  . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
  ```

  We need to take our message -- `'WECRLTEERDSOEEFEAOCAIVDEN'` -- and replace each `'?'` in the pattern with consecutive characters from the message string.  

  However, the matrix pattern we have actually looks like the following:

  ```javascript
  [
    [
      '?', '.', '.', '.', '?', '.',
      '.', '.', '?', '.', '.', '.',
      '?', '.', '.', '.', '?', '.',
      '.', '.', '?', '.', '.', '.',
      '?'
    ],
    [
      '.', '?', '.', '?', '.', '?',
      '.', '?', '.', '?', '.', '?',
      '.', '?', '.', '?', '.', '?',
      '.', '?', '.', '?', '.', '?',
      '.'
    ],
    [
      '.', '.', '?', '.', '.', '.',
      '?', '.', '.', '.', '?', '.',
      '.', '.', '?', '.', '.', '.',
      '?', '.', '.', '.', '?', '.',
      '.'
    ]
  ]
  ```

Code:

```javascript
function createDecodedZigZagPattern(message, rails) {
  let messageLength = message.length;
  let questionMarkMatrix = createZigZagPattern('?'.repeat(messageLength), rails);

  let messageIdx = 0;
  let decodedZigZagPattern;

  while (messageIdx < messageLength) {
    decodedZigZagPattern = questionMarkMatrix.map(row => {
      return row.map(column => {
        let char = column;
        if (column === '?') {
          char = message[messageIdx];
          messageIdx += 1;
        }
        return char;
      });
    });
  }

  return decodedZigZagPattern;
}
```

Now I need to create the decoded message from the decoded zig-zag pattern. The matrix I am working with looks like this:

```javascript
[
  [
    'W', '.', '.', '.', 'E', '.',
    '.', '.', 'C', '.', '.', '.',
    'R', '.', '.', '.', 'L', '.',
    '.', '.', 'T', '.', '.', '.',
    'E'
  ],
  [
    '.', 'E', '.', 'R', '.', 'D',
    '.', 'S', '.', 'O', '.', 'E',
    '.', 'E', '.', 'F', '.', 'E',
    '.', 'A', '.', 'O', '.', 'C',
    '.'
  ],
  [
    '.', '.', 'A', '.', '.', '.',
    'I', '.', '.', '.', 'V', '.',
    '.', '.', 'D', '.', '.', '.',
    'E', '.', '.', '.', 'N', '.',
    '.'
  ]
]
```

When formatted for output, it looks like this:

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
```

* Thus, we want to start off with a `message` variable that references an empty string.
* Essentially, the algorithm we want to follow is taking one character from each row and then jumping to the next.
* The starting `rowPosition` is `0` and the starting `columnPosition` is `0`. Get the `char` at this positioning.
* Then increment both positions by `1`. Get the `char` at this positioning.
* Continue this incrementing until the `rowPosition` hits its `limit`. Then start decrementing, meanwhile continuing to increment the `columnPosition`.

Code:

```javascript
function createDecodedMessage(matrix) {
  let message = '';
  let messageLength = matrix[0].length;

  let rowPosition = 0;
  let columnPosition = 0;
  let rowLimit = matrix.length;
  let increment = true;

  while (columnPosition < messageLength) {
    message += matrix[rowPosition][columnPosition];

    increment ? rowPosition += 1 : rowPosition -= 1;
    columnPosition += 1;

    if (rowPosition === (rowLimit - 1) || rowPosition === 0) {
      increment = !increment;
    }
  }

  return message;
}
```

Code for the `decoder` function

```javascript
function decoder(message, rails) {
  if (rails === 1) {
    console.log(message.split('').join(' '));
    console.log('');
    console.log(message);
  } else {
    let decodedMatrix = createDecodedZigZagPattern(message, rails);
    let decodedMessage = createDecodedMessage(decodedMatrix);

    decodedMatrix.forEach(row => console.log(row.join(' ')));
    console.log('');
    console.log(decodedMessage);
  } 
}
```

---

### Code

```javascript
function createZigZagPattern(message, rails) {
  let zigZagMatrix = createEmptyMatrix(rails, message.length);

  let rowPosition = 0;
  let columnPosition = 0;
  let rowLimit = rails;
  let increment = true;

  message.split('').forEach(char => {
    zigZagMatrix[rowPosition][columnPosition] = char;

    columnPosition += 1;
    increment ? rowPosition += 1 : rowPosition -= 1;

    if ((rowPosition === (rowLimit - 1)) || (rowPosition === 0)) {
      increment = !increment;
    }
  });

  fillEmptyMatrixSpacesWithDots(zigZagMatrix);

  return zigZagMatrix;
}

function createEmptyMatrix(rows, columns) {
  let matrix = [];

  for (let index = 0; index < rows; index += 1) {
    let row = [];
    row.length = columns;
    matrix.push(row);
  }

  return matrix;
}

function fillEmptyMatrixSpacesWithDots(matrix) {
  matrix.forEach(row => {
    for (let index = 0; index < row.length; index += 1) {
      if (!(/[A-Z\?]/.test(row[index]))) {
        row[index] = '.';
      }
    }
  });
}

function createEncodedMessage(matrix) {
  let message = '';

  matrix.forEach(row => {
    message += row.filter(char => char.match(/[A-Z]/)).join('');
  });

  return message;
}

function encoder(message, rails) {
  let messageWithoutWhiteSpace = message.replace(/\s+/g, '');

  if (rails === 1) {
    console.log(messageWithoutWhiteSpace.split('').join(' '));
    console.log('');
    console.log(messageWithoutWhiteSpace);
  } else {
    let encodedMatrix = createZigZagPattern(messageWithoutWhiteSpace, rails);

    encodedMatrix.forEach(row => console.log(row.join(' ')));
    console.log('');
    console.log(createEncodedMessage(encodedMatrix));
  } 
}

// Decoder

function createDecodedZigZagPattern(message, rails) {
  let messageLength = message.length;
  let questionMarkMatrix = createZigZagPattern('?'.repeat(messageLength), rails);

  let messageIdx = 0;
  let decodedZigZagPattern;

  while (messageIdx < messageLength) {
    decodedZigZagPattern = questionMarkMatrix.map(row => {
      return row.map(column => {
        let char = column;
        if (column === '?') {
          char = message[messageIdx];
          messageIdx += 1;
        }
        return char;
      });
    });
  }

  return decodedZigZagPattern;
}

function createDecodedMessage(matrix) {
  let message = '';
  let messageLength = matrix[0].length;

  let rowPosition = 0;
  let columnPosition = 0;
  let rowLimit = matrix.length;
  let increment = true;

  while (columnPosition < messageLength) {
    message += matrix[rowPosition][columnPosition];

    increment ? rowPosition += 1 : rowPosition -= 1;
    columnPosition += 1;

    if (rowPosition === (rowLimit - 1) || rowPosition === 0) {
      increment = !increment;
    }
  }

  return message;
}

function decoder(message, rails) {
  if (rails === 1) {
    console.log(message.split('').join(' '));
    console.log('');
    console.log(message);
  } else {
    let decodedMatrix = createDecodedZigZagPattern(message, rails);
    let decodedMessage = createDecodedMessage(decodedMatrix);

    decodedMatrix.forEach(row => console.log(row.join(' ')));
    console.log('');
    console.log(decodedMessage);
  } 
}

function cipher(message, rails, encode) {
  if (encode) {
    encoder(message, rails);
  } else {
    decoder(message, rails);
  }
}
```





