## Practice Problem: Class Records Summary

### Problem

At the end of each term, faculty members need to prepare a class record summary for students based on the weighted scores of exams and exercises. In this practice problem, we will prepare one such summary from some provided student records.  

#### Exams and Exercises

Grading areas include exams and exercises, with the following weights:

| Grading Area | Weight |
| :----------- | -----: |
| Exam         |    65% |
| Exercises    |    35% |

Each term has four exams, and several exercises. Every exam has a fixed maximum score of 100, while exercises have varied maximum score values and counts. The total maximum point value for all exercises in any term is always 100, regardless of how many exercises the students had to complete. For example, a term may have five exercises with possible score maximums of `[30, 20, 10, 20, 20]` while another term may have three exercises with possible score maximums of `[20, 30, 50]`.  

To determine a student's grade, we first determine the student's average score from the four exams, then sum all the exercise scores. We then apply the weights to compute the student's final percent grade. Finally, we determine the letter equivalent grade from the student's percent grade we just computed.  

| Percent Grade | Letter Equivalent |
| ------------: | ----------------: |
|      93 - 100 |                 A |
|       85 - 92 |                 B |
|       77 - 84 |                 C |
|       69 - 76 |                 D |
|       60 - 68 |                 E |
|        0 - 59 |                 F |

For example, let's assume a term with three exercises with maximum scores of `[20, 30, 50]`. A student got `[90, 80, 95, 71]` on her four exams, and `[20, 15, 40]` on her exercises. To determine her final grade, we follow these steps:

1. Compute the student's average exam score: `(90 + 80 + 95 + 71) / 4 = 84`
2. Compute the student's total exercise score: `20 + 15 + 40 = 75`
3. Apply weight to determine the final percent grade: `84 * .65 + 75 * .35 = 80.85`
4. Round the percent grade to the nearest integer: `81`
5. Lookup the letter grade in the table above: `C`
6. Combine the percent grade and letter grade: `"81 (C)"`

#### Source Data and Class Record Summary Format

We store the student data in an object that looks like this:

```javascript
let studentScores = {
  student1: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
  student2: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
  student3: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
  studentN: {
    id: <idNumber>,
    scores: {
      exams: [],
      exercises: [],
    },
  },
};
```

The output class record summary should look like this:

```javascript
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
```

Round the exam averages to one digit after the decimal point.

---

### Examples / Test Cases

#### Function Requirements

Given this information, implement a function that takes a `studentScores` object and returns a class record summary object.  

You can use the following code to test your implementation:  

```javascript
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // ...
}

generateClassRecordSummary(studentScores);

// returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
```

---

### Data Structure

**Input**

* An Object (`studentScores`) whose properties are Object representations of individual students (e.g. `student1`.
* Each student Object has two properties: 1) an Integer `id` property; and 2) an Object `scores` property.
* The `scores` Object has two properties: 1) an Array `exams` property; and 2) an Array `exercises` property.
* Both the `exams` and `exercises` properties are populated with Integer elements.

**Output**

* An Object with two properties: 1) an Array `studentGrades` property; and 2) an Array `exams` property.
* The `studentGrades` Array is populated with String representations of each student's numerical and letter grade (e.g. `'87 (B)'`).
* The `exams` Array is populated with Object elements. These Objects contain the following three properties: 1) an Integer `average` property; 2) an Integer `minimum` property; and 3) an Integer `maximum` property.

---

### Algorithm

**Abstractions:**

* Given an Array of exam scores, make a function that calculates the average score.
* Given an Array of exercise scores, make a function that calculates the sum of the scores.
* Make a function that takes the average exam score and the sum of the exercise scores, then calculates the weighted average to get the student's number grade.
* Create a function for obtaining the letter grade based on the numerical grade.
* Create four Arrays, each one representing one of the exams: `exam1`, `exam2`, `exam3`, and `exam4`. We should populate the scores from each student for each exam. From these Array of exam scores we will be able to then calculate the average, minimum, and maximum for each exam.
* Create a function that takes an Array of exam scores. It will return an Object with the following properties: `average`, `minimum`, and `maximum`.

**Functions**

* `averageExamScore(scores)`: takes an Array of scores and sums them, then divides by the total number (which should be four); it returns the sum divided by the total number.
* `exerciseScoresTotal(scores)`: takes an Array of scores and sums them; it returns the sum.
* Based on the above two functions, we should create a callback function to be used in conjunction with the `reduce` method. This function will be a `sum(score1, score2)` function.
* `numericalGrade(examAvgScore, exerciseTotalScore)`: calculate the weighted average using `0.65` for the `examAvgScore` and `0.35` for the `exerciseTotalScore`.
* `letterGrade(numericalGrade)`: we can employ a `switch` statement that will take the `numericalGrade` argument and apply the appropriate case in order to return the corresponding letter grade.
* `examStats(exam)`: takes an Array argument and returns an Object with three properties: 1) `average` of the elements of the Array; 2) `minimum` value of the Array; and 3) `maximum` value of the Array.

**Implementation Steps**

* Create the four exam arrays and initialize them with the empty array `[]` value.
* Create a `studentGrades` Array.
* Iterate over the student Objects:
  * calculate the average exam scores;
  * calculate the sum of the exercise scores;
  * Find the weighted average of scores;
  * Use the weighted average of scores to find the letter grade;
  * push the String representation of the numeric and letter grade to the `studentGrades` Array;
  * extract each of the exam scores and push them to their corresponding exam Arrays.
* Create an `exams` Array.
* Populate the `exams` Array with Objects that represent each of the four exams.
* The Objects will be created using the `examStats` function and we will pass the four exam Array variables to it.

---

### Code

```javascript
function generateClassRecordSummary(scores) {
  const Exam1 = [];
  const Exam2 = [];
  const Exam3 = [];
  const Exam4 = [];
  const Exams = [];
  const StudentGrades = [];

  for (let student in scores) {
    let examScores = scores[student]['scores']['exams'];
    let exerciseScores = scores[student]['scores']['exercises'];

    let avgExamScore = averageExamScore(examScores);
    let exerciseScore = exerciseScoresTotal(exerciseScores);

    let numericGrade = numericalGrade(avgExamScore, exerciseScore);
    let alphaGrade = letterGrade(numericGrade);

    StudentGrades.push(`${numericGrade} (${alphaGrade})`);

    collectExamData(Exam1, Exam2, Exam3, Exam4, examScores);
  }

  generateExamStatistics(Exam1, Exam2, Exam3, Exam4, Exams);

  return {
    studentGrades: StudentGrades,
    exams: Exams,
  };
}

function averageExamScore(scores) {
  let total = scores.reduce(sum);
  return total / scores.length;
}

function exerciseScoresTotal(scores) {
  return scores.reduce(sum);
}

function sum(score1, score2) {
  return score1 + score2;
}

function numericalGrade(examAvgScore, exerciseTotalScore) {
  return Math.round((examAvgScore * 0.65) + (exerciseTotalScore * 0.35));
}

function letterGrade(numericalGrade) {
  if (numericalGrade >= 93) {
    return 'A';
  } else if (numericalGrade >= 85) {
    return 'B';
  } else if (numericalGrade >= 77) {
    return 'C';
  } else if (numericalGrade >= 69) {
    return 'D';
  } else if (numericalGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function collectExamData(exam1, exam2, exam3, exam4, examScores) {
  exam1.push(examScores[0]);
  exam2.push(examScores[1]);
  exam3.push(examScores[2]);
  exam4.push(examScores[3]);
}

function examStats(exam) {
  let stats = {};

  stats['average'] = averageExamScore(exam);
  stats['minimum'] = Math.min(...exam);
  stats['maximum'] = Math.max(...exam);

  return stats;
}

function generateExamStatistics(exam1, exam2, exam3, exam4, combined) {
  [exam1, exam2, exam3, exam4].forEach(exam => combined.push(examStats(exam)));
}
```

