import React from 'react';
import { Link, IndexLink } from 'react-router';
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
          <IndexLink className="navbar-brand" to="/">Brand</IndexLink>
        </div>
        { /* Collect the nav links, forms, and other content for toggling */ }
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><b>Categories</b></li>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/products?category=butler">Butlers</Link></li>
                <li><Link to="/products?category=chef">Chefs</Link></li>
                <li><Link to="/products?category=gardener">Gardeners</Link></li>
                <li role="separator" className="divider"></li>
                <li><Link to="/products">This is nothing atm</Link></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            { /* Login and Logout are here temporarily, they will be moved to the Account dropdown menu eventually */ }
            <li className="nav-user">{props.user ? null : <Signup/>}{props.user === null || Object.keys(props.user).length === 0 ? <Login/> : <WhoAmI/>}</li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><Link to="/account">Your Account</Link></li>
                <li><Link to="/orders">Your Orders</Link></li>
                { /* not 100% sure how to implement this */}
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </li>
            <li><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
          </ul>
        </div>{ /* /.navbar-collapse */ }
      </div>{ /* /.container-fluid */ }
    </nav>
  );
}
