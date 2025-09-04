const { expect } = require('chai');
const request = require('supertest');

describe('4-http', () => {
  let app;
  
  beforeEach(() => {
    // Clear the require cache to get a fresh instance
    delete require.cache[require.resolve('../4-http')];
    app = require('../4-http');
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

  it('should respond with "Hello Holberton School!" on any endpoint', (done) => {
    request(app)
      .get('/any_endpoint')
      .expect(200)
      .expect('Hello Holberton School!')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should respond with "Hello Holberton School!" on POST requests too', (done) => {
    request(app)
      .post('/test')
      .expect(200)
      .expect('Hello Holberton School!')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should have correct headers', (done) => {
    request(app)
      .get('/test')
      .expect('Content-Type', 'text/plain')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
