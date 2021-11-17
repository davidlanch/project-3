import React from 'react'
import "./../styles/starRating.css"
import APIHandler from "../api/handler";
import  { useState, useEffect } from "react";

const RatingStars = (props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    console.log("estas aqui", props)
    useEffect(() => {
        fetchRates();
        
        
      }, []);

    const fetchRates = async () => {
        try {
          const res = await APIHandler.get("/rates" + props.match.params.id);
          console.log("what is this",res)
          
        } catch (err) {
          console.error(err);
        }
      };
      console.log("this is rating",rating)
    



    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
}

export default RatingStars
