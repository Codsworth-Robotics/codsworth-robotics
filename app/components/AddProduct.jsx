import React, {Component} from 'react';
import axios from 'axios';

export default class AddProduct extends Component {
	//currently persists new product to DB
	// TODO: redirect to product detail page
  addProduct (productName, desc, price, inventory) {
    axios.post('/api/products/', {
      name: productName,
      description: desc,
      price: price,
      inventory: inventory
    })
    .then(resp => console.log('resp: ', resp))
    .catch((err, next) => {
      console.log(err);
      next();
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={ evt => {
          evt.preventDefault();
          this.addProduct(
            evt.target.name.value,
            evt.target.description.value,
            evt.target.price.value,
            evt.target.inventory.value
          );
        } }>
          Product name: <input name="name" /><br />
          Product desc: <input name="description" /><br />
          Price: <input name="price" /><br />
          Inventory: <input name="inventory" /><br />
          <input type="submit" value="Add Product" /><br />
        </form>
      </div>
    );
  }
}

