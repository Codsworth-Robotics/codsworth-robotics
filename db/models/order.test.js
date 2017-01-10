'use strict';

const db = require('APP/db');
const Orders = require('./order');
const {expect} = require('chai');

describe('Orders', () => {
  before('wait for the db', () => db.didSync);

  let createdOrder, currentTime;
  beforeEach(() => {
    currentTime = new Date();
    createdOrder = Orders.build({
      shippingAddress: '123 South Nowhere Blvd, MiddleOf, DW 12345',
      totalPrice: 123.45
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
  });
});
