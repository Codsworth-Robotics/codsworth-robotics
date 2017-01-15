'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Jokes from './components/Jokes';
import Signup from './components/Signup';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import Checkout from './components/Checkout';
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';

import ProductDetailContainer from './components/ProductDetailContainer';
import BrowseProductsContainer from './components/BrowseProductsContainer';

import {loadProducts, setSelectedProductId} from './reducers/products';

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? null : <Signup/>}
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
);

const onBrowse = function () {
  const thunk = loadProducts();
  store.dispatch(thunk);
};

const setProduct = function (nextRouterState) {
  store.dispatch(setSelectedProductId(nextRouterState.params.id));
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/products" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products/add" component={AddProduct} />
        <Route path="/orders" component={Orders} />
        <Route path="/products" component={BrowseProductsContainer} onEnter={onBrowse} />
        <Route path="/products/:id" component={ProductDetailContainer} onEnter={setProduct} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
