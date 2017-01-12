'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Orders = db.define('orders', {
  orderID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
    // OB/EPS: allowNull false?
  },
  shippingAddress: {
    // OB/EPS: allowNull false?
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  totalPrice: {
    // OB/EPS: allowNull false?
    type: Sequelize.DECIMAL(10, 2)
  },
  status: {
    // OB/EPS: allowNull false?
    type: Sequelize.ENUM('processing', 'shipping', 'delivered'),
    defaultValue: 'processing',
    validate: {
      notEmpty: true
    }
  },
  orderDate: {
    // OB/EPS: allowNull false?
    type: Sequelize.DATE,
    noUpdate: true
  }
}, {
  hooks: {
    beforeCreate: function (order) {
      order.orderDate = Date.now();
    }
  }
});

module.exports = Orders;
