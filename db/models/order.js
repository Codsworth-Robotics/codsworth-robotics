'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Orders = db.define('orders', {
  orderID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  shippingAddress: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  totalPrice: {
    type: Sequelize.DECIMAL(10, 2)
  },
  status: {
    type: Sequelize.ENUM('processing', 'shipping', 'delivered'),
    defaultValue: 'processing',
    validate: {
      notEmpty: true
    }
  },
  orderDate: {
    type: Sequelize.DATE(6),
    defaultValue: new Date(),
    noUpdate: true
  }
});

module.exports = Orders;
