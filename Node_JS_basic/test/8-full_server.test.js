const { expect } = require('chai');
const request = require('supertest');

describe('8-full_server', () => {
  let app;

  before(() => {
    // Setup babel for ES6 modules
    require('babel-register')({
      presets: ['babel-preset-env'],
      plugins: ['transform-runtime']
    });
  });

  beforeEach(() => {
    // Mock process.argv to include the database file
    process.argv = ['node', 'full_server/server.js', 'database.csv'];
    
    // Clear the require cache to get a fresh instance
    delete require.cache[require.resolve('../full_server/server.js')];
    app = require('../full_server/server.js').default;
  });

  afterEach((done) => {
    // Express apps don't need to be closed for testing with supertest
    done();
  });

  describe('AppController', () => {
    it('should respond with "Hello Holberton School!" on GET /', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello Holberton School!')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should have correct content type for homepage', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('StudentsController - getAllStudents', () => {
    it('should respond with students list on GET /students', (done) => {
      request(app)
        .get('/students')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.include('This is the list of our students');
          expect(res.text).to.include('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
          expect(res.text).to.include('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
          done();
        });
    });

    it('should list fields in alphabetical order', (done) => {
      request(app)
        .get('/students')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          // CS should come before SWE alphabetically in the text
          const csIndex = res.text.indexOf('Number of students in CS:');
          const sweIndex = res.text.indexOf('Number of students in SWE:');
          expect(csIndex).to.be.below(sweIndex);
          expect(csIndex).to.not.equal(-1);
          expect(sweIndex).to.not.equal(-1);
          done();
        });
    });

    it('should handle missing database file gracefully', (done) => {
      // Mock process.argv without database file
      process.argv = ['node', 'full_server/server.js'];
      
      // Clear cache and reload
      delete require.cache[require.resolve('../full_server/server.js')];
      const appWithoutDB = require('../full_server/server.js').default;
      
      request(appWithoutDB)
        .get('/students')
        .expect(500)
        .expect('Cannot load the database')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('StudentsController - getAllStudentsByMajor', () => {
    it('should return CS students list on GET /students/CS', (done) => {
      request(app)
        .get('/students/CS')
        .expect(200)
        .expect('List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should return SWE students list on GET /students/SWE', (done) => {
      request(app)
        .get('/students/SWE')
        .expect(200)
        .expect('List: Guillaume, Joseph, Paul, Tommy')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should return 500 for invalid major', (done) => {
      request(app)
        .get('/students/French')
        .expect(500)
        .expect('Major parameter must be CS or SWE')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should return 500 for other invalid majors', (done) => {
      request(app)
        .get('/students/MATH')
        .expect(500)
        .expect('Major parameter must be CS or SWE')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should handle missing database file for major endpoint', (done) => {
      // Mock process.argv without database file
      process.argv = ['node', 'full_server/server.js'];
      
      // Clear cache and reload
      delete require.cache[require.resolve('../full_server/server.js')];
      const appWithoutDB = require('../full_server/server.js').default;
      
      request(appWithoutDB)
        .get('/students/CS')
        .expect(500)
        .expect('Cannot load the database')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('Express Server Configuration', () => {
    it('should export the app as default', () => {
      expect(app).to.exist;
      expect(app).to.be.a('function'); // Express app is a function
    });

    it('should return 404 for unknown routes', (done) => {
      request(app)
        .get('/unknown-route')
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.include('Cannot GET /unknown-route');
          done();
        });
    });

    it('should handle different HTTP methods correctly', (done) => {
      request(app)
        .post('/')
        .expect(404) // POST is not defined for /
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('Utils readDatabase function', () => {
    let readDatabase;

    before(() => {
      readDatabase = require('../full_server/utils.js').default;
    });

    it('should return a Promise', () => {
      const result = readDatabase('database.csv');
      expect(result).to.be.instanceOf(Promise);
      
      // Clean up promise
      return result.then(() => {}, () => {});
    });

    it('should read database correctly', async () => {
      try {
        const result = await readDatabase('database.csv');
        expect(result).to.be.an('object');
        expect(result).to.have.property('CS');
        expect(result).to.have.property('SWE');
        expect(result.CS).to.be.an('array');
        expect(result.SWE).to.be.an('array');
        expect(result.CS.length).to.equal(6);
        expect(result.SWE.length).to.equal(4);
      } catch (error) {
        // If database.csv is not accessible, should throw error
        expect(error.message).to.equal('Cannot load the database');
      }
    });

    it('should reject for non-existent file', async () => {
      try {
        await readDatabase('non-existent.csv');
        // Should not reach here
        expect.fail('Promise should have been rejected');
      } catch (error) {
        expect(error.message).to.equal('Cannot load the database');
      }
    });
  });
});
