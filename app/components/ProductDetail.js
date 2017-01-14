import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
        <Link to="/">Back to products</Link>
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
