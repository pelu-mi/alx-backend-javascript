/* eslint-disable no-const-assign */
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) { reject(new Error('Cannot load the database')); }
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const logs = [];
      const studentsArray = data.trim().split('\n').slice(1);
      const studentNumber = `Number of students: ${studentsArray.length}`;

      logs.push(studentNumber);
      console.log(studentNumber);

      const students = studentsArray.map((student) => {
        const fields = student.replace('\r', '').split(',');
        return fields;
      });

      const categories = [...new Set(students.map((student) => student[student.length - 1]))];

      categories.forEach((category) => {
        const filteredStudents = students
          .filter((student) => student[student.length - 1] === category)
          .map((student) => student[0]);

        const categoryInfo = `Number of students in ${category
        }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`;

        logs.push(categoryInfo);
        console.log(categoryInfo);

        resolve(logs);
      });
    }
  });
});

module.exports = countStudents;
