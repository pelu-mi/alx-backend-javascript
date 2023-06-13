/* eslint-disable no-const-assign */
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const dataArray = data.split('\n').slice(1, 11);
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
    for (const [field, fVal] of Object.entries(fields)) {
      process.stdout.write(`Number of students in ${field}: ${fVal}. List: `);
      let flag = 0;
      for (const record of dataArray) {
        if (record.split(',')[3] === field) {
          if (flag === 1) { process.stdout.write(', '); }
          process.stdout.write(`${record.split(',')[0]}`);
          flag = 1;
        }
      }
      process.stdout.write('\n');
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
