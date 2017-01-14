import React from 'react';

import Navbar from '../components/Navbar';

import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);
