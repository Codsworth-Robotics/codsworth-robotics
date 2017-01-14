import React, {Component} from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

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
    });
  }

  render () {
    return (
      <div>
        <h4>Product detail</h4>
        <p>{this.state.product.name}</p>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    products: state.products.products
  });

export default connect(mapStateToProps)(ProductDetail);
