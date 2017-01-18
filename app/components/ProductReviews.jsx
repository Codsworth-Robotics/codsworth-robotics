import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProductReviews extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="card product-detail-container col-xs-9">
        <h2>User Reviews</h2>
        {
          (this.props.reviews.length > 0) &&
          (
          <p>{this.props.reviews[0].title}</p>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.selectedProduct,
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(ProductReviews);
