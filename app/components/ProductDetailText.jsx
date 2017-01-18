import React from 'react';

import { priceString } from 'APP/app/utils.js';

export const ProductDetailText = (props) => {
  return (
      <div>
        <div>
          <h1>{props.selectedProduct.name}</h1>
          <p className="weak">{ props.selectedProduct.category.join(' / ') }</p>
          <p>{props.selectedProduct.description}</p>
          <p>${priceString(props.selectedProduct.price)}</p>
          {
            (props.selectedProduct.inventory > 0)
            ? <button className="btn-primary"
              onClick={() => props.addToCart(props.selectedProduct.id)}>
                Add to Cart
              </button>
            : <button className="btn btn-disabled" disabled="true">Out of Stock</button>
          }
        </div>
      </div>
  );
};
