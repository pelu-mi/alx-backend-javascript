const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

// Import code from task 3 here
const countStudents = require('./3-read_file_async');

// Define the app
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((data) => {
      res.end(data.join('\n'));
    }).catch((err) => {
      res.statusCode = 404;
      res.end(`${err.message}`);
    });
  }
});

// Display server info
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
