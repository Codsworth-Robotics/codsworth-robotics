import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadProducts} from 'APP/app/reducers/products';
import {Link} from 'react-router';

export class BrowseProducts extends Component {
  // this function is repeated in both the browse and detail view
  // where else should it go so both components can access it?
  priceString (priceInCents) {
    const priceDollars = Math.floor(priceInCents / 100);
    return '$' + priceDollars + '.' + (priceInCents + '').substr(-2);
  }

  render () {
    // currently displaying a 'cards' style product browser
    // would like to add a 'list view' toggle option
    // currently only displaying the first image in the array in this view
    return (
      <div className="products-container">
        {
          this.props.products.map(product => {
            return (
              <div key={product.id} className="list-unstyled col-xs-4 product-card">
                <Link to={'/products/' + product.id}>
                  <h3>{ product.name }</h3>
                  <img src={ product.images[0] } />
                </Link>
                <p>{ product.category }</p>
                <p>{ product.description }</p>
                <p>{ this.priceString(product.price) }</p>
                {
                  (product.inventory > 0)
                  ? <button>Add to Cart</button>
                  : <button disabled="true">Out of Stock</button>
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadProducts: function () {
      const thunk = loadProducts();
      dispatch(thunk);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseProducts);


