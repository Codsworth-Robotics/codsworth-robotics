import React from 'react';
import { connect } from 'react-redux';

import { priceString } from 'APP/app/utils.js';
import { addToCart } from 'APP/app/reducers/cart';

import { ProductDetailImageViewer } from './ProductDetailImageViewer';
import ProductReviews from './ProductReviews';


export const ProductDetail = (props) => (
  <div className="container-fluid product-detail-container">
    <div className="row">
      <div className="col-sm-12 ">
        <div className="col-sm-3 card">
        {
          props.selectedProduct.name &&
        <ProductDetailText selectedProduct={props.selectedProduct} />
        }
        </div> {}
        <div className="test-border col-sm-9">
        {
          props.selectedProduct.name &&
          <ProductDetailImageViewer selectedProduct={props.selectedProduct} />
        }
        </div>
      </div>
    </div>
    <div className="row">
      <ProductReviews />
    </div>
  </div>
);


export const ProductDetailText = (props) => {
  return (
    // props.selectedProduct.name &&
    //   (
      <div className="">
        <div className="">
          <h1>{props.selectedProduct.name}</h1>
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
        </div>
      </div>
      // )
  );
};


const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct,
    reviews: state.reviews
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
