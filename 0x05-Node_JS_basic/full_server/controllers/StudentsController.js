const readDatabase = require('../utils');
const process = require('process');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process[2]).then((data) => {
      const logs = ['This is the list of our students'];
      for (const [k, v] in Object.entries(data)) {
        logs.push(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
      }
      res.status(200).send(logs.join('\n'));
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    const acceptField = ['CS', 'SWE'];

    if (!acceptField.includes(field)) {
      res.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process[2]).then((data) => {
      res.status(200).send(`List: ${data[field].join(', ')}`);
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
