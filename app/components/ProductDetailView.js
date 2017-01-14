import React from 'react';

export const ProductDetailView = (props) => {
  return (
    <div className="container">
      <img src={props.product.images} />
      <h5>{props.product.name}</h5>
      <p>{props.product.category}</p>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <p>{props.product.category}</p>
    </div>
  );
};
