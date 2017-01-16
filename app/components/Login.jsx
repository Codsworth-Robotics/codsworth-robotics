import React from 'react';
import { Link } from 'react-router';

export const Login = ({ login }) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login/Signup <span className="caret"></span></a>
    <ul className="dropdown-menu">
      <form className="navbar-form" onSubmit={evt => {
        evt.preventDefault();
        login(evt.target.username.value, evt.target.password.value);
      }}>
        <li>Username: <input className="form-control" name="username" /></li>
        <li>Password: <input className="form-control" name="password" type="password" /></li>
        <li><button type="submit" className="btn btn-default">Login</button></li>
      </form>
      <li><Link to="/orders">Your Orders</Link></li>
    </ul>
  </li>
);

import {login} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect(
  state => ({}),
  {login},
)(Login);
// <form onSubmit={evt => {
  //   evt.preventDefault();
  //   login(
  //     evt.target.username.value,
  //     evt.target.password.value
  //   );
  // } }>
  //   <input name="username" />
  //   <input name="password" type="password" />
  //   <input type="submit" value="Login" />
  // </form>
