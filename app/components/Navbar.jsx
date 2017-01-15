import React from 'react';
import Signup from './Signup';
import WhoAmI from './WhoAmI';
import Login from './Login';


export default function (props) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        { /* Brand and toggle get grouped for better mobile display */ }
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        { /* Collect the nav links, forms, and other content for toggling */ }
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><b>Categories</b></li>
                <li><a href="#">All Products</a></li>
                <li><a href="#">Butlers</a></li>
                <li><a href="#">Chefs</a></li>
                <li><a href="#">Gardeners</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            { /* Login and Logout are here temporarily, they will be moved to the Account dropdown menu eventually */ }
            <li className="nav-user">{props.user ? null : <Signup/>}{props.user === null || Object.keys(props.user).length === 0 ? <Login/> : <WhoAmI/>}</li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>{ /* /.navbar-collapse */ }
      </div>{ /* /.container-fluid */ }
    </nav>
  );
}
