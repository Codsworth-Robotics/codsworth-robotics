import React from 'react';
import { Link } from 'react-router';

import { priceString } from 'APP/app/utils';

const CartProduct = props => {
  return (
    <div className="row single-product">
      <div className="col-xs-3">
        <img src={`${props.product.images[0]}`} />
      </div>
      <div className="col-xs-3">
        <Link to={`/products/${props.product.id}`}>
          <p>{props.product.name}</p>
        </Link>
        {props.product.inventory > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
      </div>
      <div className="col-xs-3">
        <p>Price: ${priceString(props.product.price)}</p>
        <form onSubmit={evt => {
          evt.preventDefault();
          props.updateQuantity(
            props.product.id,
            evt.target.quantity.value
          );
        }}>
          <div className="form-group">
            <label htmlFor="product-quantity">Quantity:</label>
            <input
              name="quantity"
              type="number"
              className="form-control"
              placeholder={`${props.product.quantity}`}
              value={props.inputVal}
              onChange={props.handleChange} />
          </div>
          <button type="submit" value="Change" className="btn btn-primary">Change Quantity</button>
        </form>
        <p>Quantity: {props.product.quantity}</p>
      </div>
      <div className="col-xs-3">
        <button
          onClick={() => props.deleteProduct(props.product.id)}>
            Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
