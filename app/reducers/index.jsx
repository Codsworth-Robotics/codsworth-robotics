import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  order: require('./orders').default
});

export default rootReducer;
