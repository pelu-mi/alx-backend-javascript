module.exports = function countStudents(path) {
  const fs = require('fs');

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const data_array = data.split("\n").slice(1, 11);
    console.log(`Number of students: ${data_array.length}`);

    // Find all the different fields in the database and count them
    let fields = {};
    for (let record of data_array) {
      let field = record.split(',')[3];
      if (!fields[field]) {
        fields[field] = 0;
      }
      fields[field] += 1;
    }

    // Print out all the first names per field using the format
    for (const [field, fVal] of Object.entries(fields)) {
      process.stdout.write(`Number of students in ${field}: ${fVal}. List: `);
      let flag = 0;
      for (let record of data_array) {
        if (record.split(',')[3] == field){
          if (flag == 1) { process.stdout.write(', ') }
	  process.stdout.write(`${record.split(',')[0]}`);
          flag = 1;
	}
      }
      process.stdout.write('\n');
    }
  });
};
