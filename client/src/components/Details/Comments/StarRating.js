import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


import "./Comments.css";

const StarRating = (props) => {
  // const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    
    <div>
      {[...Array(5)].map((start, i) => {
        const ratingValue = i + 1;
        return (
          props.isClickable ? 
          <label key={i}>
            <input
              type="radio"
              name="rating"
              required="required"
              value={ratingValue}
              onClick={() => props.setRatings({name: props.name, value: ratingValue})}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || props.rating) ? "gold" : "gray"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label> 
          :
          <label key={i}>
            <input
              type="radio"
              name="rating"
              required="required"
              value={ratingValue}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || props.rating) ? "gold" : "gray"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
        </label> 
        );
      })}
    {/*   <p>The rating is {rating}</p> */}
    </div>
        
    
  );
};

export default StarRating;
