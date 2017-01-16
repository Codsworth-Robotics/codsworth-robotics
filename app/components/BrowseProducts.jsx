import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

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
      return (product.category[0].toLowerCase() === props.location.query.category);
    });
  } else {
    viewProducts = props.products;
  }

  return (
    <div className="products-container col-xs-12">
      {
        viewProducts &&
        viewProducts.map(product => {
          return (
            <div key={product.id} className="list-unstyled col-xs-3 product-card">
              <Link to={'/products/' + product.id}>
                <h3>{ product.name }</h3>
                <img src={ product.images[0] } />
              </Link>
              <p>{ product.category }</p>
              <p>{ product.description }</p>
              <p>${ priceString(product.price) }</p>
              {
                (product.inventory > 0)
                ? <button className="btn btn-primary">Add to Cart</button>
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
    products: state.products
  };
};

export default connect(
  mapStateToProps
)(BrowseProducts);
