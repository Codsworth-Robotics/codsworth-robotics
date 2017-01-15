import React from 'react';

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
            <img src="images/boxie-slider-headphones.jpg" alt="demo_slide_2" />
            <div className="jumbotron carousel-caption">
              <h1><i className="fa fa-cube"></i> Boxie!</h1>
              <p>A Responsive LemonStand Theme.</p>
              <p><a href="#" className="btn btn-primary btn-lg" role="button">Learn More &raquo;</a></p>
            </div>
          </div>
          <div className="item">
            <img src="images/boxie-slider-speakers.jpg" alt="demo_slide_1" />
            <div className="jumbotron carousel-caption left">
              <h1>Speakers</h1>
              <p>Cube speakers. Awesome.</p>
              <p><a href="#" className="btn btn-primary btn-lg" role="button">Shop Now &raquo;</a></p>
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
