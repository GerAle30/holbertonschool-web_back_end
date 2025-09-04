const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students\n';

  const databasePath = process.argv[2];

  if (!databasePath) {
    responseText += 'Cannot load the database';
    res.send(responseText);
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
    responseText += output;
    res.send(responseText);
  } catch (error) {
    console.log = originalLog; // Restore original console.log
    responseText += 'Cannot load the database';
    res.send(responseText);
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

module.exports = app;
