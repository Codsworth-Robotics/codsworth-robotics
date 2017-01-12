'use strict';

const db = require('APP/db');
const Product = require('APP/db/models/product');
const {expect} = require('chai');

describe('Product', () => {
  before('wait for the db', () => db.didSync);

  let testProduct;

  beforeEach(() => {
    testProduct = Product.create({ name: 'Hoover', description: 'something here', price: 5.50 });
  });

  // OB/EPS: watch out for undead code, keep it out of master
  // afterEach( () => {
  //   testProduct.destroy();
  // });

  describe('Product table', () => {

  // We have no tests now!!!!!!
    // it('properly persists to database', () =>
    //   User.create({ password: 'ok' })
    // it("does not leave a null value in a required column", () => {
    //   testProduct.validate()
    //   // return testProduct.then(res => {
    //   // return res.update({ description: '' }) })
    //   .then( result => expect(result).to.be.an.instanceOf(Error));
    // });

    // it('fills in a default value if category is updated to something empty', () => {
    //   return testProduct
    //   .then(result => {
    //     return result.update({ category: [] });
    //   })
    //   .then(otherresult => {
    //     expect(otherresult.category).to.equal(['Butler']);
    //   })
    //   .catch(err => console.log(err));
    // });
  });
});
