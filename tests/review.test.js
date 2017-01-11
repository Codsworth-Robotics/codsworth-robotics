'use strict';

const db = require('APP/db');
const Review = require('APP/db/models/review');
const {expect} = require('chai');

describe('Reviews', () => {
  before('wait for the db', () => db.didSync);

  let createdReview;
  beforeEach(() => {
    createdReview = Review.build({
      title: 'FANTASTIC PRODUCT! WILL DEFINITELY BUY AGAIN!',
      text: 'My butler was absolutely fantastic! Super attentive to my needs. Will be gifting one to every one of my family members.'
    });
  });

  afterEach(() => {
    return Review.truncate({cascade: true});
  });

  describe('attributes definition', () => {
    it('properly creates a review', () => {
      return createdReview.save()
      .then(review => {
        expect(review.title).to.equal('FANTASTIC PRODUCT! WILL DEFINITELY BUY AGAIN!');
        expect(review.text).to.not.be.null;
      });
    });

    it('throws a validation error if description is too short', () => {
      createdReview.text = 'Wonderful.';
      return createdReview.validate()
      .then(review => {
        expect(review).to.be.an.instanceOf(Error);
        expect(review.message).to.contain('Description not long enough.');
      });
    });
  });
});
