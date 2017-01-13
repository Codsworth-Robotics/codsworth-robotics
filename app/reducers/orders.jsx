import axios from 'axios';

const initialState = {
  placeOrder: {
    shippingAddress: null,
    totalPrice: null
  },
  orderHistory: null
};

// not sure if we actually need this reducer...?
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_ORDER:
      newState.placeOrder.shippingAddress = action.shippingAddress;
      newState.placeOrder.totalPrice = action.totalPrice;
      break;

    case VIEW_ORDERS:
      newState.orderHistory = action.orders;
      break;
  }
  return newState;
};

const CREATE_ORDER = 'CREATE_ORDER';
const VIEW_ORDERS = 'VIEW_ORDERS';

export const createOrder = (shippingAddress, totalPrice) => ({
  type: CREATE_ORDER, shippingAddress, totalPrice
});

export const viewOrders = orders => ({
  type: VIEW_ORDERS,
  orders
});

export const checkout = (shippingAddress, totalPrice) =>
  dispatch =>
    axios.post('/api/orders',
      {shippingAddress, totalPrice})
        .then(() => dispatch(createOrder(shippingAddress, totalPrice)));

export const getOrderHistory = userId =>
  dispatch =>
    axios.get(`/api/users/${userId}/orders`)
      .then(orders => dispatch(viewOrders(orders.data)));

export default reducer;
