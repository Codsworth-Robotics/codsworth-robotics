'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Orders = db.define('orders', {
  shippingAddress: Sequelize.STRING,
  totalPrice: Sequelize.DECIMAL(10, 2),
  status: Sequelize.ENUM('incomplete', 'processing', 'in-delivery', 'completed')
});

module.exports = Orders;
