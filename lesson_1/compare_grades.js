"use strict";

let studentGrades = [
  { name: 'Student A', grade: 90.1 },
  { name: 'Student B', grade: 92 },
  { name: 'Student C', grade: 91.8 },
  { name: 'Student D', grade: 95.23 },
  { name: 'Student E', grade: 91.81 },
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

console.log(studentGrades.sort(compareGrades));


// Or, inline style

// studentGrades.sort((student1, student2) => {
//   if (student1.grade < student2.grade) {
//     return 1;
//   } else if (student1.grade > student2.grade) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
