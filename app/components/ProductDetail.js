import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { priceString } from 'APP/app/utils.js';

export const ProductDetail = (props) => (

  <div className="container">
    <Link to='/products'>Back To Products</Link>
    <h4>{props.selectedProduct.name}</h4>
    <em>Pictures to be added soon</em>
    <p>{props.selectedProduct.category}</p>
    <p>{props.selectedProduct.description}</p>
    <p>${priceString(props.selectedProduct.price)}</p>
    {
      (props.selectedProduct.inventory > 0)
      ? <button className="btn btn-primary" >Add to Cart</button>
      : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
    }
  </div>
);

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  };
};

export default connect(
  mapStateToProps
)(ProductDetail);
