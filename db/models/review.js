'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      // validateTextLength will ensure each review's text is greater than 20 characters before being persisted to database.
      validateTextLength: function (text) {
        if (text.length < 20) {
          throw new Error('Description not long enough.');
        }
      }
    }
  }
}, {
});

module.exports = Review;
