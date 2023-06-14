const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) { reject(new Error('Cannot load the database')); }
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const studentsArray = data.trim().split('\n').slice(1);

      const students = studentsArray.map((student) => {
        const fields = student.replace('\r', '').split(',');
        return fields;
      });

      const categories = [...new Set(students.map((student) => student[student.length - 1]))];

      const fields = {};

      categories.forEach((category) => {
        fields[category] = students
          .filter((student) => student[student.length - 1] === category)
          .map((student) => student[0]);
      });

      resolve(fields);
    }
  });
});

module.exports = readDatabase;
