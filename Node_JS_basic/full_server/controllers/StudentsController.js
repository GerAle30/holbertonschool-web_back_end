import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];

    if (!databasePath) {
      response.status(500).send('Cannot load the database');
      return;
    }

    try {
      const students = await readDatabase(databasePath);
      
      let responseText = 'This is the list of our students\n';
      
      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(students).sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      
      sortedFields.forEach((field) => {
        const studentList = students[field];
        responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });
      
      // Remove the last newline
      responseText = responseText.trim();
      response.status(200).send(responseText);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    if (!databasePath) {
      response.status(500).send('Cannot load the database');
      return;
    }

    try {
      const students = await readDatabase(databasePath);
      
      if (!students[major]) {
        response.status(200).send('List: ');
        return;
      }
      
      const studentList = students[major];
      response.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
