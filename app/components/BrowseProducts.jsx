import React, {Component} from 'react';

import {loadProducts} from 'APP/app/reducers/products';
import {selectProduct} from 'APP/app/reducers/products';
import {connect} from 'react-redux';

import {Link} from 'react-router';

export class BrowseProducts extends Component {
  componentDidMount () {
    this.props.loadProducts();
  }
  render () {
    return (
      <div>
        <h3>BrowseProducts</h3>
        {
          this.props.products && this.props.products.map(product => {
            return (
              <div key={product.name}>
                <p><Link to={`/products/${product.id}`}>{product.name}</Link></p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
    mapStateToProps,
  {
    loadProducts: loadProducts,
    selectProduct: selectProduct
  }
)(BrowseProducts);
