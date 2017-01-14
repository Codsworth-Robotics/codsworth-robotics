import React, {Component} from 'react';

import {loadProducts} from 'APP/app/reducers/products';
import {connect} from 'react-redux';

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
                <p>{product.name}</p>
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

const mapDispatchToProps = dispatch => ({
  loadProducts () {
    dispatch(loadProducts());
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseProducts);
