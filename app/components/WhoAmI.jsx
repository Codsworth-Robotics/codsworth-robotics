import React from 'react';
import { Link } from 'react-router';

export const WhoAmI = ({ user, logout }) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
    <ul className="dropdown-menu">
      <li><Link to="/account">Your Account</Link></li>
      <li><Link to="/orders">Your Orders</Link></li>
      <li onClick={logout}><Link to="/logout">Logout</Link></li>
    </ul>
  </li>
);

import {logout} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI);
