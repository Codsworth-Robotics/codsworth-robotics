'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './containers/App';
import Home from './components/Home';
import Checkout from './components/Checkout';
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products/add" component={AddProduct} />
        <Route path="/orders" component={Orders} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
