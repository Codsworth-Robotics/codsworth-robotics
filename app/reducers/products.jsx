const initState = {
  products: []
};

/* ----------------- REDUCER -------------------- */

const reducer = (state = initState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {

    case LOAD_ITEMS:
      newState.products.push(action.products);
      break;
  }

  return newState;
};

export default reducer;


/* ------------- ACTION TYPES ------------------- */

const LOAD_ITEMS = 'LOAD_ITEMS';

/* ------------- ACTION CREATORS ---------------- */

export const loadProducts = (products) => {
  return { type: LOAD_ITEMS, products:products };
};
