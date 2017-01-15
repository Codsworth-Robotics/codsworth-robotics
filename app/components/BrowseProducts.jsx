import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadProducts} from 'APP/app/reducers/products';
import {Link} from 'react-router';

export class BrowseProducts extends Component {

  render () {
    return (
      <div>
        {
          this.props.products.map(product => {
            return (
              <div key={product.id} className="list-unstyled col-xs-3 product-card">
                  <Link to={'/products/' + product.id}>
                  <img src={product.image} />
                  <h3>{ product.name }</h3>
                  <p>{ product.category }</p>
                  <p>{ product.description }</p>
                  <p>{ product.name }</p>
                  </Link>
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


