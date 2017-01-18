import axios from 'axios';

const initialState = {
  products: [],
  total: 0
};

/* ----------------- REDUCERS -------------------- */

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    default: return state;
  }
}

/* ------------- ACTION TYPES ------------------- */

const GET_CART = 'GET_CART';

/* ------------- ACTION CREATORS ---------------- */

export const getCart = cart => {
  return { type: GET_CART, cart };
};

// When the user hits the `/cart/` route, the entire cart is fetched from the back-end
export const loadCart = () =>
  dispatch =>
    axios.get('/api/cart')
      .then(res => dispatch(getCart(res.data)))
      .catch(err => console.error(err));

// Not sure I'll need to dispatch `getCart` here...?
export const addToCart = productId =>
  dispatch =>
    axios.put('/api/cart', {id: productId})
      .then(res => dispatch(getCart(res.data)))
      .catch(err => console.error(err));

export const updateQuantity = (productId, quantity) =>
  dispatch =>
    axios.put('/api/cart', {id: productId, quantity})
      .then(res => dispatch(getCart(res.data)))
      .catch(err => console.error(err));

export const deleteFromCart = productId =>
  dispatch =>
    axios.delete(`/api/cart/${productId}`)
      .then(res => dispatch(getCart(res.data)))
      .catch(err => console.error(err));
