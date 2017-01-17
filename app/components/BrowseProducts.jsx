import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { priceString } from 'APP/app/utils.js';
import { addToCart } from 'APP/app/reducers/cart';

  // currently displaying a 'cards' style product browser
  // would like to add a 'list view' toggle option
  // currently only displaying the first image in the array in this view
export const BrowseProducts = (props) => {
  let viewProducts = [];  // filtered subset of all products

  // filter based on category
  // search filters can also be added here as an else-if
  if (props.location.query.category !== undefined) {
    viewProducts = props.products.filter(product => {
      return (product.category.includes(props.location.query.category));
    });
  } else if (props.searchTerm !== undefined) {
    viewProducts = props.products.filter(product => {
      return (product.name.includes(props.searchTerm));
    });
  } else {
    viewProducts = props.products;
  }

  return (
    <div className="products-container">
      {
        viewProducts &&
        viewProducts.map(product => {
          return (
            <div key={product.id} className="col-xs-4 product-card">
              <Link to={'/products/' + product.id}>
                <img src={ product.images[0] } />
                <div className="card-header">
                  <h1>{ product.name }</h1>
                </div>
              </Link>
              <p>{ product.category }</p>
              <p>{ product.description }</p>
              <p>${ priceString(product.price) }</p>
              {
                (product.inventory > 0)
                ? <button className="btn btn-primary"
                    onClick={() => props.addToCart(product.id)}>
                      Add to Cart
                  </button>
                : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
              }
            </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    searchTerm: state.filterText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart (productId) {
      dispatch(addToCart(productId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseProducts);
