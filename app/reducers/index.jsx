import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  orders: require('./orders').default
});

export default rootReducer;
