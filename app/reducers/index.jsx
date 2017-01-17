import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  orders: require('./orders').default,
  products: require('./products').allProductsReducer,
  selectedProduct: require('./products').selectProductReducer,
  cart: require('./cart').default,
  filtertext: require('./search').default,
  reviews: require('./products').reviewsReducer
});

export default rootReducer;
