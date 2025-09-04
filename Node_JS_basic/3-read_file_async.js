const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
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
        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        Object.keys(fields).forEach((field) => {
          const studentList = fields[field];
          console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        });

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
