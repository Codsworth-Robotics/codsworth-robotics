import React from 'react';

export const Login = ({ login, signup }) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login/Signup <span className="caret"></span></a>
    <ul className="dropdown-menu">
      <li><b>Login</b></li>
      <form className="navbar-form" onSubmit={evt => {
        evt.preventDefault();
        login(evt.target.email.value, evt.target.password.value);
      }}>
        <li>Email: <input className="form-control" name="email" /></li>
        <li>Password: <input className="form-control form-password" name="password" type="password" /></li>
        <li><div className="align-right"><button type="submit" className="btn btn-default">Login</button></div></li>
      </form>
      <li role="separator" className="divider"></li>
      <li><b>Signup</b></li>
      <form className="navbar-form" onSubmit={evt => {
        evt.preventDefault();
        signup(evt.target.firstname.value, evt.target.lastname.value, evt.target.email.value, evt.target.password.value);
      }}>
        <li>First Name: <input className="form-control" name="firstname" /></li>
        <li>Last Name: <input className="form-control" name="lastname" /></li>
        <li>Email: <input className="form-control" name="email" /></li>
        <li>Password: <input className="form-control form-password" name="password" type="password" /></li>
        <li><div className="align-right"><button type="submit" className="btn btn-default">Register</button></div></li>
      </form>
    </ul>
  </li>
);

import {login, signup} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect(
  state => ({}),
  {login, signup},
)(Login);
