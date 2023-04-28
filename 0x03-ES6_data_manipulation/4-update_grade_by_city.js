/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const findLocation = (item) => item.location === city;
  // Function to add grade to object
  const assignGrade = (item) => {
    item.grade = 'N/A';
    for (const grades of newGrades) {
      if (item.id === grades.studentId) {
        item.grade = grades.grade;
      }
    }
    return item;
  };
  return students.filter(findLocation).map(assignGrade);
}
