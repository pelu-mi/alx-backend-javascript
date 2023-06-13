/* eslint-disable no-const-assign */
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    // Testing original theory
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
    /*/ Working theory
    const dataPath = path
    const fileLines = fs
      .readFileSync(dataPath, 'utf-8')
      .toString('utf-8')
      .trim()
      .split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[3];
      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object
      .values(studentGroups)
      .reduce((pre, cur) => (pre || []).length + cur.length);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }*/
  } catch (err) {
    console.log(err);
    // throw new Error('Cannot load the database');
  }
};
