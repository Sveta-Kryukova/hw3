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
        return a.localeCompare(b);
      }
      if (direction === 'desc') {
        return b.localeCompare(a);
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
    const wordsArray = splitString(str);
    const uniqueWords = [];

    for (let i = 0; i < wordsArray.length; i++) {
      if (!uniqueWords.includes(wordsArray[i])) {
        uniqueWords.push(wordsArray[i]);
      }
    }

    return sortArray(uniqueWords);
  }

  return 'Invalid input';
}

//helper function
function getStudentsGrades (students) {
  return students.map((student) => student.grades).flat()
}

//helper function
function getGradesTotal (grades) {
  return grades.reduce((total, grade) => total + grade, 0)
}

function getAverageGrade (students) {
  const grades = getStudentsGrades(students)
  const gradesTotal = getGradesTotal(grades)

  return gradesTotal / grades.length
}
