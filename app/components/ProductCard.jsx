import React from 'react';
import { Link } from 'react-router';
import { addToCart } from 'APP/app/reducers/cart';
import { priceString } from 'APP/app/utils';

export const ProductCardView = (props) => {
  return (
    <div key={props.product.id} className="col-xs-4 product-card">
      <Link to={'/products/' + props.product.id}>
        <img src={ props.product.images[0] } />
        <div className="card-header">
          <h1>{ props.product.name }</h1>
        </div>
      </Link>
      <div className="text-container">
        <p className="weak">{ props.product.category.join(' / ') }</p>
        <p>{ props.product.description }</p>
        <p>${ priceString(props.product.price) }</p>
        {
          (props.product.inventory > 0)
          ? <button className="btn btn-primary"
              onClick={() => addToCart(props.product.id)}>
                Add to Cart
            </button>
          : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
        }
      </div>
    </div>
  );
};

