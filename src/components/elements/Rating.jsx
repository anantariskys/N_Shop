import React from 'react'

const Rating = ({rating}) => {
    const ratingBulat = Math.round(rating);
    const stars = [];

    
  
    for (let i = 1; i <= 5; i++) {
        let isChecked = false
      if (i <= ratingBulat) {
           isChecked = true;
      }
  
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          checked={isChecked}
        disabled
        
        />
      );
    }
  
    return (
      <div className="rating">
        {stars}
      </div>
    );
}

export default Rating