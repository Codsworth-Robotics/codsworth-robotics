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

export const loadProducts = () => {
  return dispatch =>
    axios.get('/api/products')
    .then(res => res.data)
    .then(products => {
      const action = getProducts(products);
      dispatch(action);
    })
    .catch(err => console.error(err));
};

export const setSelectedProductId = (currentProductId) => {
  return dispatch =>
    axios.get(`/api/products/${currentProductId}`)
    .then(res => res.data)
    .then(product => {
      const action = setSelectedProduct(product);
      dispatch(action);
    })
    .catch(err => console.error(err));
};

