'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['Butler'],
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  rating: Sequelize.DOUBLE,
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['http://fillmurray.com/140/200']
  }
}, {
  indexes: [{fields: ['name'], unique: true}]

});


module.exports = Product;
