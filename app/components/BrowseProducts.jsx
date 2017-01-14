import React, {Component} from 'react';

import {loadProducts, selectProduct} from 'APP/app/reducers/products';

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
              <Link to={`/products/${product.id}`}>
                <div key={product.name}>
                  <img src="http://thecatapi.com/api/images/get?format=src&type=gif"
                    style={{width: '128px', height: '128px'}}/>
                  <p>{product.name}</p>
                  <p>{product.category}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <button>Add to Cart</button>
                </div>
                <hr />
              </Link>
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
