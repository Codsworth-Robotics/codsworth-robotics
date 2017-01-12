'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const OrderProduct = db.define('orderproducts', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
  }
});

module.exports = OrderProduct;
