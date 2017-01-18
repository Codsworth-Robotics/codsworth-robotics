import React from 'react';
import { connect } from 'react-redux';

import CartProduct from 'APP/app/components/CartProduct';
import { deleteFromCart, updateQuantity } from 'APP/app/reducers/cart';
import { checkout } from 'APP/app/reducers/orders';
import { priceString } from 'APP/app/utils';

const Cart = props => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart">
        {props.cart.products.map(product => (
          <CartProduct key={product.id}
            product={product}
            updateQuantity={props.updateQuantity}
            deleteProduct={props.deleteProduct} />
        ))}
      </div>
      <div className="cart order-total center">
        <h3>Order Total: ${priceString(props.cart.total)}</h3>
      </div>
      <h1>Your Information</h1>
      <div className="cart">
        <form className="form-group" onSubmit={evt => {
          evt.preventDefault();
          props.checkout(
            evt.target.email.value,
            evt.target.shippingAddress.value
          );
        }}>
          <div className="input-group checkout-information">
            <label htmlFor="email">Preferred Email:</label>
            <input name="email" type="email" className="form-control" placeholder="example@example.com" />
          </div>
          <div className="input-group checkout-information">
            <label htmlFor="address">Shipping Address:</label>
            <input name="shippingAddress" type="address" className="form-control" placeholder="1234 Example Lane, Candyland, NY 10000" />
          </div>
          <button type="submit" className="btn btn-success button-radius">Checkout</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  deleteProduct (productId) {
    dispatch(deleteFromCart(productId));
  },
  checkout (email, shippingAddress) {
    dispatch(checkout(email, shippingAddress));
  },
  updateQuantity (productId, quantity) {
    dispatch(updateQuantity(productId, quantity));
  }
});

// not sure we need the IntermediateCartContainer...

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
