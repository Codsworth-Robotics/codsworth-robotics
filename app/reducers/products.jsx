import axios from 'axios';

/* ----------------- REDUCERS -------------------- */

export const allProductsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.products;
    default: return state;
  }
};

export const selectProductReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.product;
    default: return state;
  }
};

/* ------------- ACTION TYPES ------------------- */

const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
const SELECT_PRODUCT = 'SELECT_PRODUCT';

/* ------------- ACTION CREATORS ---------------- */

export const getProducts = (products) => {
  return { type: RECEIVE_ITEMS, products: products };
};

export const setSelectedProduct = (product) => {
  return { type: SELECT_PRODUCT, product: product };
};

// request all products
export const loadProducts = () => {
  return dispatch =>
    axios.get('/api/products')
    .then(res => res.data)
    .then(products => {
      dispatch(getProducts(products));
    })
    .catch(err => console.error(err));
};

// using an axios request here, needed for when a user
// goes directly to /products/:id
export const getAndSetById = (currentProductId) => {
  return dispatch =>
    axios.get(`/api/products/${currentProductId}`)
    .then(res => res.data)
    .then(product => {
      dispatch(setSelectedProduct(product));
    })
    .catch(err => console.error(err));
};

