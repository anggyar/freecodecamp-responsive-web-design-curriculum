/**
 * parameter adalah sekumpulan nilai, dan return adalah nilai rata-rata
 */
function getAverage(arrayGrades) {
  let averageScore = 0;
  let totalScore = 0;
  const nData = arrayGrades.length;

  for (let i = 0; i <= nData - 1; i++) {
    totalScore += arrayGrades[i];
  }

  averageScore = totalScore / nData;
  return averageScore;
}

/**
 * parameternya adalah nilai siswa, dan return nya adalah string huruf representasi dari grade nilai nya.
 */
function getGrade(studentScore) {
  let studentGrade = "";

  if (studentScore === 100) {
    studentGrade = "A+";
  } else if (studentScore >= 90 && studentScore <= 99) {
    studentGrade = "A";
  } else if (studentScore >= 80 && studentScore <= 89) {
    studentGrade = "B";
  } else if (studentScore >= 70 && studentScore <= 79) {
    studentGrade = "C";
  } else if (studentScore >= 60 && studentScore <= 69) {
    studentGrade = "D";
  } else if (studentScore >= 0 && studentScore <= 59) {
    studentGrade = "F";
  }
  return studentGrade;
}

/**
 * score sebagai parameter dan mengembalikan true atau false tergantung apakah nilai tersebut melewati pasing grade.
 * Gunakan getGrade untuk dapatin huruf grade nya, dan gunakan untuk mengetahui apakah lulus passing grade atau tidak.
 * Passsing grade adalah apapun selain "F"
 */
function hasPassingGrade(studentScore) {
  let studentGrade = getGrade(studentScore);

  if (studentGrade !== "F") {
    return true;
  } else {
    return false;
  }
}

function studentMsg(arrayStudentScore, studentScore) {
  let averageClassScore = getAverage(arrayStudentScore);
  let studentGrade = getGrade(studentScore);
  let studentStatus = hasPassingGrade(studentScore);

  if (studentStatus === true) {
    return `Class average: ${averageClassScore}. Your grade: ${studentGrade}. You passed the course.`;
  } else if (studentStatus === false) {
    return `Class average: ${averageClassScore}. Your grade: ${studentGrade}. You failed the course.`;
  }
}

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
