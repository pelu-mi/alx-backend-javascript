/* eslint-disable no-const-assign */
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    /* Testing original theory
    const data = fs.readFileSync(path, 'utf-8').toString('utf-8').trim();
    const dataArray = data.split('\n').slice(1);
    console.log(`Number of students: ${dataArray.length}`);

    // Find all the different fields in the database and count them
    const fields = {};
    for (const record of dataArray) {
      const field = record.split(',')[3];
      if (!fields[field]) {
        fields[field] = 0;
      }
      fields[field] += 1;
    }

    // Print out all the first names per field using the format
    let output_str = "";
    for (const [field, fVal] of Object.entries(fields)) {
      output_str += `Number of students in ${field}: ${fVal}. List: `;
      let flag = 0;
      for (const record of dataArray) {
        if (record.split(',')[3] === field) {
          if (flag === 1) { output_str += ', '; }
          output_str += `${record.split(',')[0]}`;
          flag = 1;
        }
      }
      output_str += '\n';
    }
    console.log(output_str.substring(0, output_str.length - 1));
    /*/// Working theory
    const data = fs.readFileSync(path, 'utf8');

    const studentsArray = data.trim().split('\n').slice(1);
    console.log(`Number of students: ${studentsArray.length}`);

    const students = studentsArray.map((student) => {
      const fields = student.replace('\r', '').split(',');
      return fields;
    });

    const categories = [...new Set(students.map((student) => student[student.length - 1]))];

    categories.forEach((category) => {
      const filteredStudents = students.filter(
        (student) => student[student.length - 1] === category,
      ).map((student) => student[0]);
      console.log(`Number of students in ${category
      }: ${filteredStudents.length}. List: ${filteredStudents.join(', ')}`);
    });
  } catch (err) {
    console.log(err);
    // throw new Error('Cannot load the database');
  }
};
