import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { priceString } from 'APP/app/utils.js';

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
    // redirect to product detail page if search results contains only 1 element
    //     disabled for now
    // if (viewProducts.length === 1) browserHistory.push(`{/products/${viewProducts[0].id}}`);
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
              <div className="text-container">
                <p className="weak">{ product.category.join(' / ') }</p>
                <p>{ product.description }</p>
                <p>${ priceString(product.price) }</p>
                {
                  (product.inventory > 0)
                  ? <button className="btn btn-primary">Add to Cart</button>
                  : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
                }
              </div>
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
    searchTerm: state.searchTerm
  };
};

export default connect(
  mapStateToProps
)(BrowseProducts);
