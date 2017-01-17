import React from 'react';
import { connect } from 'react-redux';

export const ProductReviews = (props) => (
  <div className="card product-detail-container col-xs-9">
    <h2>User Reviews</h2>
  </div>
);

const mapStateToProps = state => {
  return {
    product: state.selectedProduct
  };
};

export default connect(mapStateToProps)(ProductReviews);
