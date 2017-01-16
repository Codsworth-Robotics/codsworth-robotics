import axios from 'axios';
import { browserHistory } from 'react-router';

const initialState = {
  placeOrder: {
    email: null,
    shippingAddress: null
  },
  orderHistory: null
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_ORDER:
      newState.placeOrder.email = action.email;
      newState.placeOrder.shippingAddress = action.shippingAddress;
      break;

    case VIEW_ORDERS:
      newState.orderHistory = action.orders;
      break;
  }
  return newState;
};

const CREATE_ORDER = 'CREATE_ORDER';
const VIEW_ORDERS = 'VIEW_ORDERS';

export const createOrder = (email, shippingAddress) => ({
  type: CREATE_ORDER, email, shippingAddress
});

export const viewOrders = orders => ({
  type: VIEW_ORDERS,
  orders
});

export const checkout = (email, shippingAddress) =>
  dispatch =>
    axios.post('/api/orders',
      { email, shippingAddress })
        .then(() => dispatch(createOrder(email, shippingAddress)))
        .then(() => browserHistory.push('/checkout/success'));

export const getOrderHistory = () =>
  dispatch =>
    axios.get(`/api/users/account/orders`)
      .then(orders => dispatch(viewOrders(orders.data)));

export default reducer;
