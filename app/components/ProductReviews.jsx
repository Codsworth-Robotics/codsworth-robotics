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

    this.togglePane = this.togglePane.bind(this);
  }

  togglePane (evt) {
    evt.preventDefault();
    this.setState({currentViewReviews: !this.state.currentViewReviews});
  }

  render () {
    if (this.state.currentViewReviews) {
      return (
        <div className="card product-reviews-box col-xs-10">
          <strong>User Reviews</strong> | <Link to="#" onClick={this.togglePane}>Write a Review</Link>
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
    } else {
      return (
        <div className="card product-reviews-box col-xs-10">
           <Link to="#" onClick={this.togglePane}>User Reviews</Link> | <strong>Write a Review</strong>
          <h3>Write a Review</h3>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.selectedProduct,
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(ProductReviews);
