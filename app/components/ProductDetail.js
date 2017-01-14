import React from 'react';
import { connect } from 'react-redux';


export const ProductDetail = (props) => (
  <div>
    <h4>Product detail</h4>
    <p>{props.name}</p>
  </div>
);

export default connect(mapStateToProps)(ProductDetail);

const mapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct
});
