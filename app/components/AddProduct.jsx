import React, {Component} from 'react';
import axios from 'axios';

import {loadProducts} from 'APP/app/reducers/products';
import {connect} from 'react-redux';

export class AddProduct extends Component {
// currently persists new product to DB
// TODO: redirect to product detail page

  addProduct (productName, desc, price, inventory) {
    axios.post('/api/products/', {
      name: productName,
      description: desc,
      price: price,
      inventory: inventory
    })
    .then(resp => resp.config.data)
    .catch((err, next) => {
      console.error(err);
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={ evt => {
          evt.preventDefault();
          this.addProduct(
            evt.target.name.value,
            evt.target.category.value,
            evt.target.description.value,
            evt.target.price.value,
            evt.target.inventory.value
          );
        } }>
          Product name: <input name="name" /><br />
          Product category: <input name="category" /><br />
          Product desc: <input name="description" /><br />
          Price: <input name="price" /><br />
          Inventory: <input name="inventory" /><br />
          <input type="submit" value="Add Product" /><br />
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  loadProducts () {
    dispatch(loadProducts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

