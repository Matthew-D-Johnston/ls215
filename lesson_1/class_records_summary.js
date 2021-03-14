"use strict";

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

console.log(generateClassRecordSummary(studentScores));
