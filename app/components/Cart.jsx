import React from 'react';
import { connect } from 'react-redux';

import { deleteFromCart } from 'APP/app/reducers/cart';
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
            { /* name should link to product when FE product route is completed */ }
            <p>{product.name}</p>
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
      <button>Checkout</button>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  deleteProduct (productId) {
    dispatch(deleteFromCart(productId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
