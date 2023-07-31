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
const removeSymbols = /[^a-z0-9' ]/gi;

function splitString(str) {
  if (typeof str === 'string') {
    const splitResult = str.toLowerCase().replace(removeSymbols, null).split(' ');
    return splitResult;
  }

  return 'Invalid input';
}

function filterUniqueWords (str) {
  if (typeof str === 'string') {
    const wordsArray = splitString(str);
    
    const uniqueWordsSet = new Set(wordsArray);
    
    const uniqueWords = Array.from(uniqueWordsSet);

    return sortArray(uniqueWords);
  }

  return 'Invalid input';
}
console.log(filterUniqueWords("How HOw To to make MaKe my My SalaRy salary bigger bigGER ?"))
//helper function
function getStudentsGrades (students) {
  return students.map((student) => student.grades).flat()
}

//helper function
function getGradesTotal (grades) {
  return grades.reduce((total, grade) => total + grade, 0)
}

function getAverageGrade (students) {
  if (Array.isArray(students) 
    && students.every((obj) => typeof obj === 'object' 
      && 'grades' in obj)) {
  const grades = getStudentsGrades(students)
  const gradesTotal = getGradesTotal(grades)
  }

  return gradesTotal / grades.length
}
