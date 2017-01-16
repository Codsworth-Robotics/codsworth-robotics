'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');
const OrderProduct = require('./orderProduct');

const Orders = db.define('orders', {
  orderID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  shippingAddress: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('processing', 'shipping', 'delivered'),
    defaultValue: 'processing',
    validate: {
      notEmpty: true
    },
    allowNull: false
  },
  orderDate: {
    type: Sequelize.DATE,
    noUpdate: true,
    allowNull: false
  }
}, {
  hooks: {
    beforeValidate: function (order) {
      if (!order.orderDate) {
        order.orderDate = Date.now();
      }
    }
  },
  instanceMethods: {
    addProductToOrder: function (product, quantity) {
      return this.addProduct(product)
      .then(result => {
        return OrderProduct.findOne({
          where: {
            product_id: product.id,
            order_orderID: this.orderID
          }
        });
      })
      .then(orderproduct => {
        return orderproduct.update({quantity, price: product.price});
      })
      .then(orderproduct => {
        return this.update({ totalPrice: this.totalPrice + product.price * quantity });
      });
    },
    removeProductFromOrder: function (product) {
      return OrderProduct.findOne({
        where: {
          product_id: product.id,
          order_orderID: this.orderID
        }
      })
      .then(orderproduct => {
        return orderproduct.quantity === 1 ? this.removeProduct(product) : orderproduct.update({quantity: orderproduct.quantity - 1});
      });
    }
  }
});

module.exports = Orders;
