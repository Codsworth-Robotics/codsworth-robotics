import React, {Component} from 'react';

export class Orders extends Component {
  componentDidMount () {
    this.props.getOrderHistory();
  }
  render () {
    return (
      <div>
        <h1>Your Order History</h1>
        <p>Click on any order for details.</p>
        {this.props.orderHistory && this.props.orderHistory.map(order => (
          <div key={order.orderID}>
            <h2>Order ID: {order.orderID}</h2>
            <p>Ordered On: {order.orderDate}</p>
            <p>Status: {order.status}</p>
            <p>Shipping Address: {order.shippingAddress}</p>
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
