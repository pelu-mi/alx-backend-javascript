/* eslint-disable no-const-assign */
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const studentsArray = data.trim().split('\n').slice(1);
    console.log(`Number of students: ${studentsArray.length}`);

    const students = studentsArray.map((student) => {
      const fields = student.replace('\r', '').split(',');
      return fields;
    });

    const categories = [...new Set(students.map((student) => student[student.length - 1]))];

    categories.forEach((category) => {
      const filteredStudents = students
        .filter((student) => student[student.length - 1] === category)
        .map((student) => student[0]);
      console.log(`Number of students in ${category
      }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`);
    });
  } catch (err) {
    // console.log(err);
    throw new Error('Cannot load the database');
  }
};
