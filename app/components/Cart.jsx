import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { deleteFromCart } from 'APP/app/reducers/cart';
import {checkout} from 'APP/app/reducers/orders';
import { priceString } from 'APP/app/utils';

const Cart = props => {
  return (
    <div className="product-details">
      <h3>Your Cart</h3>
      {props.cart.products.map(product => (
        <div key={product.id} className="row single-product">
          <div className="col-xs-3">
            <img src={`${product.images[0]}`} />
          </div>
          <div className="col-xs-3">
            <Link to={`/products/${product.id}`}>
              <p>{product.name}</p>
            </Link>
            {product.inventory > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
          </div>
          <div className="col-xs-3">
            <p>Price: ${priceString(product.price)}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
          <div className="col-xs-3">
            <button
              onClick={() => props.deleteProduct(product.id)}>
                Remove from Cart
            </button>
          </div>
        </div>
      ))}
      <p>Order Total: ${priceString(props.cart.total)}</p>
      <form onSubmit={evt => {
        evt.preventDefault();
        props.checkout(
          evt.target.email.value,
          evt.target.shippingAddress.value
        );
      } }>
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
