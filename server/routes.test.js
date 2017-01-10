const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
// const User = require('APP/db/models/user');
const app = require('./start');

describe('/browse', () => {
  describe('hit home page', () => {
    it('GET /browse returns status 115', () =>
      request(app)
        .get(`/browse`)
        .expect(115)
    );

    // it('POST creates a user', () =>
    //   request(app)
    //     .post('/api/users')
    //     .send({
    //       firstName: 'Beth',
    //       lastName: 'Secrets',
    //       email: 'beth@secrets.org',
    //       password: '12345'
    //     })
    //     .expect(201)
    // );

    // it('POST redirects to the user it just made', () =>
    //   request(app)
    //     .post('/api/users')
    //     .send({
    //       firstName: 'Eve',
    //       lastName: 'Adam',
    //       email: 'eve@interloper.com',
    //       password: '23456'
    //     })
    //     .redirects(1)
    //     .then(res => expect(res.body).to.contain({
    //       email: 'eve@interloper.com'
    //     }))
    // );
  });
});
