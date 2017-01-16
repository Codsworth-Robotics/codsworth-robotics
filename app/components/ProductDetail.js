import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { priceString } from 'APP/app/utils.js';
import { addToCart } from 'APP/app/reducers/cart';

export const ProductDetail = (props) => (
  <div className="product-detail-container col-md-10 col-xs-12">
    <Link to='/products'>Back To Products</Link>
    { props.selectedProduct.name &&
      (<div>
        <h1>{props.selectedProduct.name}</h1>
        <img src={props.selectedProduct.images[0]} />
        <p className="weak">{ props.selectedProduct.category.join(' / ') }</p>
        <p>{props.selectedProduct.description}</p>
        <p>${priceString(props.selectedProduct.price)}</p>
        {
          (props.selectedProduct.inventory > 0)
          ? <button className="btn-primary"
            onClick={() => props.addToCart(props.selectedProduct.id)}>
              Add to Cart
            </button>
          : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
        }
      </div>)
    }
  </div>
);

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart (productId) {
    dispatch(addToCart(productId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
