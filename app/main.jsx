'use strict';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import BrowseProducts from './components/BrowseProducts';

import { loadProducts, setSelectedProduct, loadReviews } from './reducers/products';
import { loadCart } from './reducers/cart';


const onBrowse = function () {
  store.dispatch(loadProducts());
};

// load the cart when the user hits `/cart`
const onCartEnter = function () {
  store.dispatch(loadCart());
};

// (state.products.length == 0) when a user visits a product
//   detail page through a bookmark or direct url
//   in this case, loadProducts(id) will set the selected product
//   after first loading all products
const setProduct = function (nextRouterState) {
  store.dispatch(loadReviews(+nextRouterState.params.id));
  if (store.getState().products.length === 0) {
    store.dispatch(loadProducts(+nextRouterState.params.id));
  } else {
    store.dispatch(
      setSelectedProduct(
        store.getState().products.find(product => {
          return (product.id === (+nextRouterState.params.id));
        })
      )
    );
  }
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/cart" component={Cart} onEnter={onCartEnter} />
        <Route path="/products" component={BrowseProducts} onEnter={onBrowse} />
        <Route path="/products/:id" component={ProductDetail} onEnter={setProduct} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
