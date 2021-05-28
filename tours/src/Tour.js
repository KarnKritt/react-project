import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <div className="col desc">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 150)}...`}{" "}
          <button
            className="readmore"
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? "Show less" : "Show more"}
          </button>
        </p>
        <button className="delBtn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
