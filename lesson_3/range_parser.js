"use strict";

function rangeParser(numberString) {
  let listElements = numberString.split(', ');
  let numberList = [];

  listElements.forEach((element, index) => {
    if (/-|:|\.\./.test(element)) {
      let listOfRangeElements = element.split(/-|:|\.\./);
      let listOfRangePairs = createRangePairs(listOfRangeElements);
      listOfRangePairs.forEach(pair => {
        let rangeList = makeListFromRange(pair[0], pair[1]);
        rangeList.forEach(num => {
          numberList.push(num);
        });
      });
    } else {
      if (index === 0) {
        numberList.push(element);
      } else {
        let previousElement = numberList.slice(-1)[0];
        let transformedNumber = transformTruncatedNumber(previousElement, element);
        numberList.push(transformedNumber);
      }
    }
  });

  return newNumberList.join(', ');
}

function transformTruncatedNumber(comparison, target) {
  let prefixLength = comparison.length - target.length;
  
  if (Number(comparison) < Number(target)) {
    return target;
  } else if (prefixLength === 0) {
    return '1' + target;
  }

  let numberPrefix = Number(comparison.slice(0, prefixLength));
  let transformed = String(numberPrefix) + target;

  while (Number(transformed) < Number(comparison)) {
    let digits = transformed.split('');
    let incrementedFirstDigit = String(Number(transformed[prefixLength - 1]) + 1)
    digits.splice(prefixLength - 1, 1, incrementedFirstDigit);
    transformed = digits.join('');
  }

  return transformed;
}

function makeListFromRange(start, end) {
  let list = [];

  for (let num = Number(start); num <= Number(end); num += 1) {
    list.push(String(num));
  }

  return list;
}

function createRangePairs(list) {
  let formattedList = [];

  list.forEach((element, index) => {
    if (index === 0) {
      formattedList.push(element);
    } else {
      let previousElement = formattedList.slice(-1)[0];
      formattedList.push(transformTruncatedNumber(previousElement, element));
    }
  });

  let rangePairs = [];

  for (let index = 0; index < (formattedList.length - 1); index += 1) {
    rangePairs.push([formattedList[index], formattedList[index + 1]]);
  }

  return rangePairs;
}

// console.log(transformTruncatedNumber('1', '3'));
// console.log(makeListFromRange('4', '35'));
// console.log(createRangePairs(['1', '5', '2']));

console.log(rangeParser('1, 3, 7, 2, 4, 1'));
console.log(rangeParser('1-3, 1-2'));
console.log(rangeParser('1:5:2'));
console.log(rangeParser('104-2'));
console.log(rangeParser('104-02'));
console.log(rangeParser('545, 64:11'));

