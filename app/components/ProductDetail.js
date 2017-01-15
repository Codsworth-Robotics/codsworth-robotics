import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class ProductDetail extends Component {
  render () {
    return (
    <div className="container">
      <Link to='/products'>Back To Products</Link>
      <h5>{this.props.selectedProduct.name}</h5>
      <p>{this.props.selectedProduct.category}</p>
      <p>{this.props.selectedProduct.description}</p>
      <p>{this.props.selectedProduct.price}</p>
      <button>Add to Cart</button>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
