import React from 'react';
import { connect } from 'react-redux';

// export const connect(mapStateToProps, mapDispatchToProps)();

// export const mapStateToProps = (state, ownProps) => {
//   return {
//     name: state.products[0].name
//   };
// };

export const ProductDetail = (props) => (
  <div>
    <h4>Product detail</h4>
  </div>
);

export default connect(
  (state => ({}))
  (ProductDetail)
