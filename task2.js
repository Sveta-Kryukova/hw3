function getFullName (obj) {
  if (obj.firstName && obj.lastName) {
    const fullName = `${obj.firstName} ${obj.lastName}`

    return fullName
  }

  return 'Invalid object'
}
//helper function
function sortArray(arr, direction = 'asc') {
  if (Array.isArray(arr)) {
    const sortedArr = arr.sort((a, b) => {
      if (direction === 'asc') {
        return a - b;
      } else if (direction === 'desc') {
        return b - a;
      }
      return 0;
    });

    return sortedArr;
  }

  return 'Invalid input';
}
//helper function
function splitString(str, divider = ' ') {
  if (typeof str === 'string') {
    const splitString = (str) => str.split(divider);
    return splitString(str);
  }

  return 'Invalid input';
}

function filterUniqueWords (str) {
  if (typeof str === 'string') {
    const uniqueWords = [...new Set(splitString(str))];
    return sortArray(uniqueWords);
  }

  return 'Invalid input';
}
//helper function
function getStudentsGrades (students) {
  return students.map((student) => student.grade)
}
//helper function
function getGradesTotal (grades) {
  return grades.reduce((total, grade) => total + grade)
}

function getAverageGrade (students) {
  const grades = getStudentsGrades(students)
  const gradesTotal = getGradesTotal(grades)

  return gradesTotal / grades.length
}