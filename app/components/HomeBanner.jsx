import React from 'react';

import { Link } from 'react-router';

export default function (props) {
  return (
    <div id="home-banner" className="row">
      <div id="home-carousel" className="carousel slide" data-ride="carousel">
        { /* Indicators */ }
        <ol className="carousel-indicators">
          <li data-target="#home-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#home-carousel" data-slide-to="1"></li>
        </ol>
        { /* Wrapper for slides */ }
        <div className="carousel-inner">
          <div className="item active">
            <img src="images/starwars.png" alt="demo_slide_2" />
            <div className="jumbotron carousel-caption">
              <h1><i className="fa fa-cube"></i> Star Wars!</h1>
            <p>New R2D2 Mechanic coming soon!</p>
              <p><Link to="/products/2" className="btn btn-primary btn-lg" role="button">Buy C3P0 Now &raquo;</Link></p>
            </div>
          </div>
          <div className="item">
            <img src="images/butlers.png" alt="demo_slide_1" />
            <div className="jumbotron carousel-caption left">
              <h1>Butlers!</h1>
              <p>Browse our awesome selection of Butlers!</p>
              <p><Link to="/products?category=butler" className="btn btn-primary btn-lg" role="button">Shop Now &raquo;</Link></p>
            </div>
          </div>
        </div>
        { /* Controls */ }
        <a className="left carousel-control" href="#home-carousel" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="right carousel-control" href="#home-carousel" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}
