import React from 'react';
import { browserHistory } from 'react-router';
import store from '../store';
import { connect } from 'react-redux';
import { changeSearchValue, submitSearch } from '../reducers/search';

import Navbar from '../components/Navbar';

const mapStateToProps = state => {
  return {
    user: state.auth,
    searchValue: state.filtertext.searchValue,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  handleChange (event) {
    dispatch(changeSearchValue(event.target.value));
  },
  handleSubmit (event) {
    event.preventDefault();
    dispatch(submitSearch());
    browserHistory.push(`/products`);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
