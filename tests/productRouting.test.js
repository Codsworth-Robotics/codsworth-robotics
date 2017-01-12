'use strict';
const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');

const app = require('APP/server/start');

describe('Product routing', () => {
  before('wait for the db', () => db.didSync);

  describe('Product routing', () => {
    it("get '/' returns an object ", () => {
      request(app)
        .get('/api/products')
        .then(result => {
          expect(result).to.be.an('object');
        });
    });
  });        // This test is B0rked
});
