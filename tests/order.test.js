'use strict';

const db = require('APP/db');
const Product = require('APP/db/models/product');
const OrderProduct = require('APP/db/models/orderProduct');
const Orders = require('APP/db/models/order');
const {expect} = require('chai');

describe('Orders', () => {
  before('wait for the db', () => db.didSync);

  let createdOrder, currentTime, createdProduct;
  beforeEach(() => {
    currentTime = new Date();
    createdOrder = Orders.build({
      email: 'user@email.com',
      shippingAddress: '123 South Nowhere Blvd, MiddleOf, DW 12345',
      totalPrice: 12345
    });
    createdProduct = Product.build({
      name: 'Fake-Bot',
      description: 'This is an illusion, look away before it\'s too late!',
      price: 12345
    });
  });

  afterEach(() => {
    return Orders.truncate({cascade: true});
  });

  describe('attributes definition', () => {
    it('Generates a new UUID for the order on creation', () => {
      return createdOrder.save()
      .then(order => {
        expect(order.orderID).to.not.be.null;
      });
    });
    it('Sets the date to be the current time', () => {
      return createdOrder.save()
      .then(order => {
        expect(Date.parse(order.orderDate) / 1000).to.be.closeTo(Date.parse(currentTime) / 1000, 5);
      });
    });
    it('not allow Date change', () => {
      return createdOrder.save()
      .then(order => {
        return order.update({
          orderDate: new Date()
        });
      })
      .catch(error => {
        expect(error.message).to.contain('noUpdate Violation');
      });
    });
    it('adds a product to the order with the right quantity and then removes quantity.  If the quantity goes to 0, it removes the association', () => {
      return createdOrder.save()
      .then(order => {
        return createdProduct.save();
      })
      .then(product => {
        return createdOrder.addProductToOrder(createdProduct, 2);
      })
      .then(order => {
        return OrderProduct.findOne({
          where: {
            product_id: createdProduct.id,
            order_orderID: createdOrder.orderID
          }
        });
      })
      .then(foundOrder => {
        expect(foundOrder).to.not.be.null;
        expect(foundOrder.quantity).to.equal(2);
      })
      .then(() => {
        return createdOrder.removeProductFromOrder(createdProduct);
      })
      .then(() => {
        return OrderProduct.findOne({
          where: {
            product_id: createdProduct.id,
            order_orderID: createdOrder.orderID
          }
        });
      })
      .then(foundOrder => {
        expect(foundOrder.quantity).to.equal(1);
        return createdOrder.removeProductFromOrder(createdProduct);
      })
      .then(order => {
        return createdOrder.countProducts();
      })
      .then(count => {
        expect(count).to.equal(0);
      });
    });
  });
});
