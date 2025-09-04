const { expect } = require('chai');
const request = require('supertest');

describe('7-http_express', () => {
  let app;

  beforeEach(() => {
    // Mock process.argv to include the database file
    process.argv = ['node', '7-http_express.js', 'database.csv'];
    
    // Clear the require cache to get a fresh instance
    delete require.cache[require.resolve('../7-http_express')];
    app = require('../7-http_express');
  });

  afterEach((done) => {
    // Express apps don't need to be closed for testing with supertest
    done();
  });

  it('should export the app variable', () => {
    expect(app).to.exist;
    expect(app).to.be.an('function'); // Express app is a function
  });

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

  it('should respond with students list on GET /students', (done) => {
    request(app)
      .get('/students')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('This is the list of our students');
        expect(res.text).to.include('Number of students:');
        expect(res.text).to.include('Number of students in CS:');
        expect(res.text).to.include('Number of students in SWE:');
        done();
      });
  });

  it('should handle missing database file', (done) => {
    // Mock process.argv without database file
    process.argv = ['node', '7-http_express.js'];
    
    // Clear the require cache and reload
    delete require.cache[require.resolve('../7-http_express')];
    const appWithoutDB = require('../7-http_express');
    
    request(appWithoutDB)
      .get('/students')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('This is the list of our students');
        expect(res.text).to.include('Cannot load the database');
        done();
      });
  });

  it('should return 404 for unknown routes', (done) => {
    request(app)
      .get('/unknown')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('Cannot GET /unknown');
        done();
      });
  });

  it('should return plain text content type for root', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return plain text content type for students', (done) => {
    request(app)
      .get('/students')
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
