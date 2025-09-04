const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];

    if (!databasePath) {
      res.write('Cannot load the database');
      res.end();
      return;
    }

    // Capture console.log output
    const originalLog = console.log;
    let output = '';
    console.log = (message) => {
      output += `${message}\n`;
    };

    try {
      await countStudents(databasePath);
      console.log = originalLog; // Restore original console.log
      res.write(output);
      res.end();
    } catch (error) {
      console.log = originalLog; // Restore original console.log
      res.write('Cannot load the database');
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
