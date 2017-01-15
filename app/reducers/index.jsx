import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  orders: require('./orders').default,
  products: require('./products').allProductsReducer,
  selectedProduct: require('./products').selectProductReducer
});

export default rootReducer;
