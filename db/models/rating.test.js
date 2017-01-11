'use strict';

const db = require('APP/db');
const Rating = require('./rating');
const Product = require('./product');
const User = require('./user');
const Review = require('./review');
const {expect} = require('chai');

describe('Ratings', () => {
  before('wait for the db', () => db.didSync);

  let createdRating, createdUser, createdProduct, createdReview;
  beforeEach(() => {
    createdUser = User.build({
      firstName: 'John',
      lastName: 'Smith',
      email: 'jsmizzle@whatsup.com',
      password: 'JSmizzleInDaHouse!'
    });
    createdProduct = Product.build({
      name: 'Codsworth',
      description: 'The robot from Fallout!',
      price: 1.00
    });
    createdRating = Rating.build({
      stars: 5
    });
    createdReview = Review.build({
      title: 'Amazing product!',
      text: 'Would highly recommend, I came out of the vault after 200 years and it still recognized me as its master!'
    });
  });

  afterEach(() => {
    return Rating.truncate({cascade: true});
  });

  describe('attributes definition', () => {
    it('properly creates a review', () => {
      return createdReview.save()
      .then(review => {
        expect(review.title).to.equal('FANTASTIC PRODUCT! WILL DEFINITELY BUY AGAIN!');
        expect(review.text).to.not.be.null;
      });
    });
  });
});
