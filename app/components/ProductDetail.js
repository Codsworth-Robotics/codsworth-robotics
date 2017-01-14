import React, {Component} from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import {ProductDetailView} from './ProductDetailView';

export class ProductDetail extends Component {

  constructor () {
    super();
    this.state = {
      product: {}
    };
  }

  componentDidMount () {
    axios.get(`/api/products/${this.props.params.id}`)
    .then(res => {
      this.setState({product: res.data});
    });   // will be adding request for reviews/ratings/etc
  }

  render () {
    return (
      <div>
        <h4>Product detail</h4>
        <p>{this.state.product.name}</p>
        <ProductDetailView product={this.state.product}/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    products: state.products.products
  });

export default connect(mapStateToProps)(ProductDetail);
