import axios from 'axios';

const initialState = {
  shippingAddress: null,
  totalPrice: null
};

// not sure if we actually need this reducer...?
const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_ORDER:
      newState.shippingAddress = action.shippingAddress;
      newState.totalPrice = action.totalPrice;
      break;
  }
  return newState;
};

const CREATE_ORDER = 'CREATE_ORDER';
export const createOrder = (shippingAddress, totalPrice) => ({
  type: CREATE_ORDER, shippingAddress, totalPrice
});

export const checkout = (shippingAddress, totalPrice) =>
  dispatch =>
    axios.post('/api/orders',
      {shippingAddress, totalPrice})
        .then(() => dispatch(createOrder(shippingAddress, totalPrice)));

export default reducer;
