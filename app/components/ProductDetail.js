import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from 'APP/app/reducers/cart';

import { ProductDetailImageViewer } from './ProductDetailImageViewer';
import ProductReviews from './ProductReviews';
import { ProductDetailText } from './ProductDetailText';


export const ProductDetail = (props) => (
  <div className="container-fluid product-detail-container">
  {
    props.selectedProduct.name && (
      <div>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-3 card">
              <ProductDetailText selectedProduct={props.selectedProduct} addToCart={props.addToCart}/>
            </div>
            <div className="test-border col-sm-9">
              <ProductDetailImageViewer selectedProduct={props.selectedProduct} />
            </div>
          </div>
        </div>
        <div className="row">
          <ProductReviews />
        </div>
      </div>
      )
  }
  </div>
);

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
