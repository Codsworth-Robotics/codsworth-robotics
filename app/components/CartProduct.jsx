import React from 'react';
import { Link } from 'react-router';

import { priceString } from 'APP/app/utils';

const CartProduct = props => {
  return (
    <div className="row single-product">
      <div className="col-xs-3">
        <img src={`${props.product.images[0]}`} />
      </div>
      <div className="col-xs-4">
        <Link to={`/products/${props.product.id}`}>
          <p><strong>{props.product.name}</strong></p>
        </Link>
        {props.product.inventory > 0
          ? <p><strong>In Stock</strong></p>
          : <p><strong>Out of Stock</strong></p>}
        <p><strong>Price: </strong>${priceString(props.product.price)}</p>
      </div>
      <div className="col-xs-5 center">
        <form className="form-inline" onSubmit={evt => {
          evt.preventDefault();
          props.updateQuantity(
            props.product.id,
            evt.target.quantity.value
          );
        }}>
          <label htmlFor="inputsm">Quantity:</label>
          <div className="input-group">
            <input
              name="quantity"
              type="number"
              className="form-control input-sm"
              id="inputsm"
              placeholder={`${props.product.quantity}`}
              value={props.inputVal}
              onChange={props.handleChange} />
            <span className="input-group-btn">
              <button type="submit" value="update" className="btn btn-sm btn-primary button-radius"><i className="fa fa-refresh"></i></button>
            </span>
          </div>
        </form>
      </div>
      <div className="remove-from-cart center">
        <button
          className="btn btn-sm btn-danger button-radius"
          onClick={() => props.deleteProduct(props.product.id)}>
            Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
