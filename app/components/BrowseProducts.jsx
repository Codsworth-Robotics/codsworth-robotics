import React, {Component} from 'react';

import {Link} from 'react-router';

export default class BrowseProducts extends Component {

  render () {
    return (
      <div>
        {
          this.props.products.map(product => {
            return (
              <ul key={product.id} className="list-unstyled">
                <li>
                  <Link to={'/products/' + product.id}> { product.name }</Link>
                </li>
              </ul>
            );
          })
        }
      </div>
    );
  }
}


