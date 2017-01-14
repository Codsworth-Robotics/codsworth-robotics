'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import App from './containers/App';
import Jokes from './components/Jokes';
import Signup from './components/Signup';
import Login from './components/Login';
import WhoAmI from './components/WhoAmI';
import Checkout from './components/Checkout';
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';
import ProductDetail from './components/ProductDetail';
import BrowseProducts from './components/BrowseProducts';


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

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products/add" component={AddProduct} />
        <Route path="/orders" component={Orders} />
        <Route path="/products/browse" component={BrowseProducts} />
        <Route path="/products/:id" component={ProductDetail} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
