import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRate = ({ rate }) => {
  return (
      <StarRatingComponent
        value={ rate / 2 }
        editing={false}
        size={20}
        disabled={true} />
  );
};

export default StarRate;
