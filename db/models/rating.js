'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Rating = db.define('ratings', {
  stars: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
});

module.exports = Rating;
