import React from 'react';
import { Link, IndexLink } from 'react-router';
import WhoAmI from './WhoAmI';
import Login from './Login';


export default function (props) {
  const calcCartQuantity = () => {
    let total = 0;
    for (let i = 0; i < props.cart.length; i++) {
      total += props.cart[i].quantity;
    }
    return total;
  };
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
                <li role="separator" className="divider"></li>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/products?category=butler">Butlers</Link></li>
                <li><Link to="/products?category=chef">Chefs</Link></li>
                <li><Link to="/products?category=gardener">Gardeners</Link></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" onSubmit={props.handleSubmit}>
            <div className="form-group">
              <input type="text" value={props.searchValue} className="form-control" placeholder="Search" onChange={props.handleChange}/>
            </div>
            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            { /* This is set as a link to /account so I can be lazy and not have to write the css to style it */}
            <li className="nav-user"><Link to='/account'>Hello, {props.user ? props.user.firstName || 'Guest' : 'Guest'}</Link></li>
            {props.user === null || Object.keys(props.user).length === 0 ? <Login/> : <WhoAmI/>}
            <li><Link to="/cart"><i className={props.cart.length > 0 ? 'fa fa-shopping-cart active' : 'fa fa-shopping-cart'}></i> {props.cart.length > 0 ? (<span style={{color: '#337ab7', marginRight: 0}}>{calcCartQuantity()}</span>) : null}</Link></li>
          </ul>
        </div>{ /* /.navbar-collapse */ }
      </div>{ /* /.container-fluid */ }
    </nav>
  );
}
