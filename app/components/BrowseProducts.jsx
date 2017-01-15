import React from 'react';
import {connect} from 'react-redux';
import {loadProducts} from 'APP/app/reducers/products';
import {Link} from 'react-router';

import {priceString} from 'APP/app/utils.js';

export const BrowseProducts = (props) => (
  // currently displaying a 'cards' style product browser
  // would like to add a 'list view' toggle option
  // currently only displaying the first image in the array in this view
  <div className="products-container">
    {
      props.products.map(product => {
        return (
          <div key={product.id} className="list-unstyled col-xs-4 product-card">
            <Link to={'/products/' + product.id}>
              <h3>{ product.name }</h3>
              <img src={ product.images[0] } />
            </Link>
            <p>{ product.category }</p>
            <p>{ product.description }</p>
            <p>${ priceString(product.price) }</p>
            {
              (product.inventory > 0)
              ? <button className="btn">Add to Cart</button>
              : <button className="btn" disabled="true">Out of Stock</button>
            }
          </div>
        );
      })
    }
  </div>
);

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadProducts: function () {
      dispatch(loadProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseProducts);
