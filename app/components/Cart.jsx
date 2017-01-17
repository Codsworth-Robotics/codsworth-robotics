import React from 'react';
import { connect } from 'react-redux';

import CartProduct from 'APP/app/components/CartProduct';
import { deleteFromCart, updateQuantity } from 'APP/app/reducers/cart';
import { checkout } from 'APP/app/reducers/orders';
import { priceString } from 'APP/app/utils';

const Cart = props => {
  return (
    <div className="product-details">
      <h3>Your Cart</h3>
      {props.cart.products.map(product => (
        <CartProduct key={product.id}
          product={product}
          updateQuantity={props.updateQuantity}
          deleteProduct={props.deleteProduct} />
      ))}
      <p>Order Total: ${priceString(props.cart.total)}</p>
      <form onSubmit={evt => {
        evt.preventDefault();
        props.checkout(
          evt.target.email.value,
          evt.target.shippingAddress.value
        );
      }}>
        <input name="email" placeholder="Email" />
        <input name="shippingAddress" placeholder="Shipping Address" />
        <br/>
        <input type="submit" value="Checkout" />
      </form>
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
