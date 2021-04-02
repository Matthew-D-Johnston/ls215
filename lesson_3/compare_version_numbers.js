"use strict";

function compareVersions(version1, version2) {
  if (invalidInput(version1, version2)) {
    return null;
  }

  let integers1 = version1.split('.').map(Number);
  let integers2 = version2.split('.').map(Number);

  makeEqualLength(integers1, integers2);

  for (let index = 0; index < integers1.length; index += 1) {
    if (integers1[index] > integers2[index]) {
      return 1;
    } else if (integers2[index] > integers1[index]) {
      return -1;
    }
  }

  return 0;
}


function invalidInput(arg1, arg2) {
  return (/[^.0-9]/g.test(arg1)) || (/[^.0-9]/g.test(arg2));
}

function makeEqualLength(array1, array2) {
  while (array1.length !== array2.length) {
    if (array1.length < array2.length) {
      array1.push(0);
    } else {
      array2.push(0);
    }
  }
}

console.log(compareVersions('1.2', '1.2.0.0'));
console.log(compareVersions('1.18.2', '1.0'));
console.log(compareVersions('0.1', '1'));
console.log(compareVersions('13.7', '1.18.2'));
console.log(compareVersions('1.18.2', '13.7'));
console.log(compareVersions('1.2', '1.2.r.0'));
