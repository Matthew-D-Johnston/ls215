"use strict";

// Encoder

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


// encoder('WE ARE DISCOVERED FLEE AT ONCE', 3);
// console.log('');
// console.log('');
// encoder('HOW ARE YOU', 4);
// console.log('');
// console.log('');
// encoder('WHAT IS YOUR NAME', 2);
// console.log('');
// console.log('');
// encoder('GO TO THE STORE', 1);
// console.log('');
// console.log('');
// decoder('WECRLTEERDSOEEFEAOCAIVDEN', 3);
// console.log('');
// console.log('');
// decoder('HYOEOWRUA', 4);
// console.log('');
// console.log('');
// decoder('WAIYUNMHTSORAE', 2);
// console.log('');
// console.log('');
// decoder('GOTOTHESTORE', 1);

cipher('WE ARE DISCOVERED FLEE AT ONCE', 3, true);
console.log('');
console.log('');
cipher('HOW ARE YOU', 4, true);
console.log('');
console.log('');
cipher('WHAT IS YOUR NAME', 2, true);
console.log('');
console.log('');
cipher('GO TO THE STORE', 1, true);
console.log('');
console.log('');

cipher('WECRLTEERDSOEEFEAOCAIVDEN', 3, false);
console.log('');
console.log('');
cipher('HYOEOWRUA', 4, false);
console.log('');
console.log('');
cipher('WAIYUNMHTSORAE', 2, false);
console.log('');
console.log('');
cipher('GOTOTHESTORE', 1, false);

