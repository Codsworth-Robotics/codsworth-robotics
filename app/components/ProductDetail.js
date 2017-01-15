import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export class ProductDetail extends Component {

  // function is repeated in BrowseProducts page
  // can (should) probably be moved somewhere else
  priceString () {
    const priceDollars = Math.floor(this.props.selectedProduct.price / 100);
    return '$' + priceDollars + '.' + (this.props.selectedProduct.price + '').substr(-2);
  }

  render () {
    return (
    <div className="container">
      <Link to='/products'>Back To Products</Link>
      <h4>{this.props.selectedProduct.name}</h4>

      <p>{this.props.selectedProduct.category}</p>
      <p>{this.props.selectedProduct.description}</p>
      <p>{this.priceString()}</p>
      {
        (this.props.selectedProduct.inventory > 0)
        ? <button className="btn" >Add to Cart</button>
        : <button className="btn" disabled="true">Out of Stock</button>
      }
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
