const { expect } = require('chai');
const request = require('supertest');

describe('6-http_express', () => {
  let app;
  
  beforeEach(() => {
    // Clear the require cache to get a fresh instance
    delete require.cache[require.resolve('../6-http_express')];
    app = require('../6-http_express');
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

  it('should return 404 for unknown routes', (done) => {
    request(app)
      .get('/any_endpoint')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('Cannot GET /any_endpoint');
        done();
      });
  });

  it('should return Express error page for unknown routes', (done) => {
    request(app)
      .get('/lskdlskd')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<!DOCTYPE html>');
        expect(res.text).to.include('Cannot GET /lskdlskd');
        done();
      });
  });

  it('should handle different HTTP methods on root', (done) => {
    request(app)
      .post('/')
      .expect(404) // POST is not defined for /, so it should return 404
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should have correct content type for root endpoint', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
