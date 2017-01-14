import React, {Component} from 'react';
import moment from 'moment';

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
      <div className="container">
        <h1>Your Order History</h1>
        {this.props.orderHistory && this.props.orderHistory.map(order => (
          <div key={order.orderID}>
            <div className="order-header">
              <div className="row">
                <div className="col-xs-8">
                  <h4>Order ID: {order.orderID}</h4>
                </div>
                <div className="col-xs-4 align-right">
                  <h4>Placed: {this.formatDate(order.orderDate)}</h4>
                </div>
              </div>
            </div>
            <div className="order-subheader">
              <div className="row">
                <div className="col-xs-3">
                  <p><strong>Total:</strong> ${order.totalPrice}</p>
                </div>
                <div className="col-xs-3">
                  <p><strong>Status:</strong> {this.capitalizeOrderStatus(order.status)}</p>
                </div>
                <div className="col-xs-6 align-right">
                  <p><strong>Ship To:</strong> {order.shippingAddress}</p>
                </div>
              </div>
            </div>
            <h3>Details</h3>
            {order.products.map(product => (
              <div key={product.id}>
                <img src={`${product.images[0]}`} />
                <p>{product.name}</p>
                <p>Quantity: {product.orderproducts.quantity}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
            <hr />
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
