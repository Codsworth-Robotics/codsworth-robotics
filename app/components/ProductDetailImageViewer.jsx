import React, { Component } from 'react';

export class ProductDetailImageViewer extends Component {

  constructor () {
    super();
    this.state = {
      currentPicIdx: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (evt) {
    this.setState({currentPicIdx: evt.target.id});
  }

  render () {
    return (
      <div>
      {
        this.props.selectedProduct.name &&
          (
          <div className="row">
              <div className="main-image col-xs-9 card">
                <img src={this.props.selectedProduct.images[this.state.currentPicIdx]} className="main-image"/>
              </div>
              <div className="thumbnails col-xs-3">
                {
                  (this.props.selectedProduct.images.length > 0) &&
                  this.props.selectedProduct.images.map((image, index) =>
                    <row key={index}>
                      <div className="card thumbnails">
                        <img src={image}  onClick={this.handleClick} id={index}/>
                      </div>
                    </row>
                  )
                }
                </div>
          </div>
          )
      }
      </div>
    );
  }
}
