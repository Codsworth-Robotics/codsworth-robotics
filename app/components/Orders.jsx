import React, {Component} from 'react';

export class Orders extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
        <h1>Your Order History</h1>
        <p>Click on any order for details.</p>
        <button onClick={() => this.props.getOrderHistory(this.props.user.id)}>Get Order History</button>
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
  user: state.auth,
  orderHistory: state.orders.orderHistory
});

const mapDispatchToProps = dispatch => ({
  getOrderHistory (userId) {
    dispatch(getOrderHistory(userId));
  }
});

export default connect(
  // ({ auth, orders }) => ({ user: auth, orderHistory: orders }),
  // {getOrderHistory}
  mapStateToProps,
  mapDispatchToProps
)(Orders
  // class IntermediateOrdersContainer extends Component {
  //   componentDidMount () {
  //     this.props.user ? this.props.getOrderHistory(this.props.user.id) : null;
  //   }
  //   render () {
  //     return <Orders {...this.props} />;
  //   }
  // }
);
