import React from 'react';

export const ReviewOutput = props => {
  console.log(props);
  return (
    <div>
      <h4>{props.review.title}</h4>
      <p>{props.review.text}</p>
    </div>
  );
};
