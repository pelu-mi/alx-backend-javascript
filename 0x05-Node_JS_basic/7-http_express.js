const express = require('express');
// import code from task 3
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((data) => {
    data.unshift('This is the list of our students');
    res.send(data.join('\n'));
  }).catch((err) => {
    res.send(`This is the list of our students\n${err.message}`);
  });
});

app.listen(port);

module.exports = app;
