const { expect } = require('chai');
const request = require('supertest');

describe('5-http', () => {
  let app;

  beforeEach(() => {
    // Mock process.argv to include the database file
    process.argv = ['node', '5-http.js', 'database.csv'];
    
    // Clear the require cache to get a fresh instance
    delete require.cache[require.resolve('../5-http')];
    app = require('../5-http');
  });

  afterEach((done) => {
    if (app && app.listening) {
      app.close(done);
    } else {
      done();
    }
  });

  it('should export the app variable', () => {
    expect(app).to.exist;
    expect(app).to.be.an('object');
  });

  it('should respond with "Hello Holberton School!" on GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/plain')
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
      .expect('Content-Type', 'text/plain')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('This is the list of our students');
        expect(res.text).to.include('Number of students:');
        done();
      });
  });

  it('should handle missing database file', (done) => {
    // Mock process.argv without database file
    process.argv = ['node', '5-http.js'];
    
    // Clear the require cache and reload
    delete require.cache[require.resolve('../5-http')];
    const appWithoutDB = require('../5-http');
    
    request(appWithoutDB)
      .get('/students')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('This is the list of our students');
        expect(res.text).to.include('Cannot load the database');
        
        // Clean up
        if (appWithoutDB && appWithoutDB.listening) {
          appWithoutDB.close(() => done());
        } else {
          done();
        }
      });
  });

  it('should return 404 for unknown routes', (done) => {
    request(app)
      .get('/unknown')
      .expect(404)
      .expect('Not Found')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
