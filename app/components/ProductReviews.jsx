import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ReviewOutput } from './ReviewOutput';

export class ProductReviews extends Component {
  constructor () {
    super();
    this.state = {
      currentViewReviews: true
    };
  }

  togglePane (evt) {
    evt.preventDefault();
  }

  render () {
    return (
      <div className="card product-reviews-box col-xs-10">
        <h2>User Reviews</h2> | <Link to="#" onClick={this.togglePane}>Write a Review</Link>
        {
          (this.props.reviews.length > 0) &&
          (this.props.reviews.map((review, index) => {
            return (
              <ReviewOutput review={review} key={index}/>
            );
          }))
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
