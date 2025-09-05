import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    try {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1); // Remove header
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (field && firstname) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
});

export default readDatabase;
