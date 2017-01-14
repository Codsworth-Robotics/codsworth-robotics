import React from 'react';

export const ProductDetailView = (props) => {
  return (
    <div>
      <h5>{props.product.name}</h5>
      <img src="http://fillmurray.com/200/300" />
    </div>
  );
};
