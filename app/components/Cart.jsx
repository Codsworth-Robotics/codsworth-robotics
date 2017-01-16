import React from 'react';

const Cart = props => {
  return (
    <div className="product-details">
      <h3>Your Cart</h3>
      {props.cart.map(product => (
        <div key={product.id} className="row single-product">
          <div className="col-xs-3">
            <img src={`${product.images[0]}`} />
          </div>
          <div className="col-xs-3">
            { /* name should link to product when FE product route is completed */ }
            <p>{product.name}</p>
          </div>
          <div className="col-xs-3">
            <p>Price: ${product.price / 100}</p>
          </div>
          <div className="col-xs-3">
            <p>Quantity: {product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


import {connect} from 'react-redux';

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps
)(Cart);
