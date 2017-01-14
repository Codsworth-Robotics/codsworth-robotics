import axios from 'axios';

const initState = {
  products: []
};

/* ----------------- REDUCER -------------------- */

const reducer = (state = initState, action) => {
  const newState = Object.assign({}, state);


  switch (action.type) {

    case LOAD_ITEMS:
      newState.products = action.products;
      break;

  }

  return newState;
};

export default reducer;


/* ------------- ACTION TYPES ------------------- */

const LOAD_ITEMS = 'LOAD_ITEMS';

/* ------------- ACTION CREATORS ---------------- */

export const getProducts = (products) => {
  return { type: LOAD_ITEMS, products: products };
};

export const loadProducts = () => {
  return dispatch =>
    axios.get('/api/products')
    .then(products => {
      dispatch(getProducts(products.data));
    })
    .catch(err => console.error(err));
};
