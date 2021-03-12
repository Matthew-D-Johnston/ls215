"use strict";

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

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));