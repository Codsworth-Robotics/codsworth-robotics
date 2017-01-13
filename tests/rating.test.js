'use strict';

const db = require('APP/db');
const Rating = require('APP/db/models/rating');
const Product = require('APP/db/models/product');
const User = require('APP/db/models/user');
const Review = require('APP/db/models/review');
const {assert} = require('chai');

describe('Ratings', () => {
  before('wait for the db', () => db.didSync);

  let createdRating, createdUser, createdProduct, createdReview;
  before((done) => {
    Promise.all([
      User.create({
        firstName: 'John',
        lastName: 'Smith',
        email: 'jsmizzle@whatsup.com',
        password: 'JSmizzleInDaHouse!'
      }),
      Product.create({
        name: 'Codsworth',
        description: 'The robot from Fallout!',
        price: 100
      }),
      Rating.create({
        stars: 5
      }),
      Review.create({
        title: 'Amazing product!',
        text: 'Would highly recommend, I came out of the vault after 200 years and it still recognized me as its master!'
      })
    ])
    .then(creations => {
      [createdUser, createdProduct, createdRating, createdReview] = creations;
      return Promise.all([
        createdRating.setUser(createdUser),
        createdRating.setProduct(createdProduct),
        createdRating.setReview(createdReview)
      ]);
    })
    .then(promises => {
      done();
    });
  });

  after(() => {
    return createdReview.destroy({truncate: true, cascade: true});
  });

  describe('association tests', () => {
    it('properly creates a rating', () => {
      return Rating.findAll({
        where: {
          stars: 5
        }
      })
      .then(ratings => {
        assert.lengthOf(ratings, 1, 'Ratings only returns 1 result');
        assert.equal(ratings[0].id, createdRating.id);
      });
    });
    it('properly makes associations with User and Product', () => {
      return Rating.findById(1)
      .then(rating => {
        assert.equal(rating.user_id, createdUser.id);
        assert.equal(rating.product_id, createdProduct.id);
      });
    });
    it('properly makes associations with Review', () => {
      return Review.findById(1)
      .then(review => {
        assert.equal(review.rating_id, createdRating.id);
      });
    });
  });
});
