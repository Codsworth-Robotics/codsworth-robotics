import React from 'react';

export const Checkout = ({ checkout }) => (
  <form onSubmit={evt => {
    evt.preventDefault();
    checkout(
      evt.target.shippingAddress.value,
      evt.target.totalPrice.value
    );
  } }>
    <input name="shippingAddress" />
    <input name="totalPrice" />
    <input type="submit" value="Checkout" />
  </form>
);

import {checkout} from 'APP/app/reducers/orders';
import {connect} from 'react-redux';

export default connect(
  state => ({}),
  {checkout},
)(Checkout);
