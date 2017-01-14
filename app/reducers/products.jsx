import axios from 'axios';

const initState = {
  products: [{name: 'test object'}],
  selectedProduct: {}
};

/* ----------------- REDUCER -------------------- */

const reducer = (state = initState, action) => {
  console.log('reducer sees', action, action.type);
  const newState = Object.assign({}, state);

  switch (action.type) {

    case LOAD_ITEMS:
      newState.products = action.products;
      break;

    case SELECT_PRODUCT:
      newState.products.selectedProduct = action.product;
      break;
  }
  console.log('newState = ', newState);
  return newState;
};

export default reducer;


/* ------------- ACTION TYPES ------------------- */

const LOAD_ITEMS = 'LOAD_ITEMS';
const SELECT_PRODUCT = 'SELECT_PRODUCT';

/* ------------- ACTION CREATORS ---------------- */

export const getProducts = (products) => {
  return { type: LOAD_ITEMS, products: products };
};

export const selectProduct = (product) => {
  return { type: SELECT_PRODUCT, product: product };
};

export const loadProducts = () => {
  console.log('in load products');
  return dispatch =>
    axios.get('/api/products')
    .then(products => {
      dispatch(getProducts(products.data));
    })
    .catch(err => console.error(err));
};

