const request = require('supertest-as-promised');
const {expect} = require('chai');

const app = require('./start');

describe('/browse', () => {
  describe('hit home page', () => {
    it('GET /browse returns status 115', () => {
      request(app)
        .get(`/browse`)
        .expect(115);
    });
  });
});

