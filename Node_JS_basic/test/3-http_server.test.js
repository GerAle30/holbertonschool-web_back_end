const { expect } = require('chai');
const request = require('supertest');

describe('3-http_server', () => {
  let app;
  
  beforeEach(() => {
    // Clear the require cache to get a fresh instance
    delete require.cache[require.resolve('../3-http_server')];
    app = require('../3-http_server');
  });

  afterEach((done) => {
    if (app && app.listening) {
      app.close(done);
    } else {
      done();
    }
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

  it('should respond with status 200 for any route', (done) => {
    request(app)
      .get('/any-route')
      .expect(200)
      .expect('Hello Holberton School!')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should respond with correct headers', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/plain')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
