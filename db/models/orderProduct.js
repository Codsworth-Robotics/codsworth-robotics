'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const OrderProduct = db.define('orderproducts', {
  // OB/EPS: consider adding price
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }
});

module.exports = OrderProduct;
