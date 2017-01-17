import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

import { priceString } from 'APP/app/utils.js';
import { addToCart } from 'APP/app/reducers/cart';

export class Orders extends Component {
  componentDidMount () {
    this.props.getOrderHistory();
  }
  formatDate (date) {
    return moment(date).format('MMMM D, YYYY').toString();
  }
  capitalizeOrderStatus (status) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
  render () {
    return (
      <div className="order-container">
        <h1>Your Order History</h1>
        {this.props.orderHistory && this.props.orderHistory.map(order => (
          <div key={order.orderID} className="single-order">
            <div className="order-header">
              <div className="row">
                <div className="col-xs-8">
                  <h5>
                    <span className="glyphicon glyphicon glyphicon-list-alt"></span>
                    Order ID: {order.orderID}
                  </h5>
                </div>
                <div className="col-xs-4 align-right">
                  <h5>Placed: {this.formatDate(order.orderDate)}</h5>
                </div>
              </div>
            </div>
            <div className="order-subheader">
              <div className="row">
                <div className="col-xs-3">
                  <p><strong>Total:</strong> ${priceString(order.totalPrice)}</p>
                </div>
                <div className="col-xs-3">
                  <p><strong>Status:</strong> {this.capitalizeOrderStatus(order.status)}</p>
                </div>
                <div className="col-xs-6 align-right">
                  <p><strong>Ship To:</strong> {order.shippingAddress}</p>
                </div>
              </div>
            </div>
            <div className="product-details">
              <h3>Details</h3>
              {order.products.map(product => (
                <div key={product.id} className="row single-product">
                  <div className="col-xs-3">
                    <img src={`${product.images[0]}`} />
                  </div>
                  <div className="col-xs-4">
                    <Link to={`/products/${product.id}`}>
                      <p>{product.name}</p>
                    </Link>
                    <button className="btn btn-primary"
                      onClick={() => this.props.addToCart(product.id)}>
                        Buy It Again
                    </button>
                  </div>
                  <div className="col-xs-5 align-right">
                    <p>Quantity: {product.orderproducts.quantity}</p>
                    <p>Price: ${priceString(product.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

import {getOrderHistory} from 'APP/app/reducers/orders';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  orderHistory: state.orders.orderHistory
});

const mapDispatchToProps = dispatch => ({
  getOrderHistory () {
    dispatch(getOrderHistory());
  },
  addToCart (productId) {
    dispatch(addToCart(productId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
