import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ item }) => {
  return (
    <div>
      <div className="cocktail">
        <div className="image">
          <img src={item.image} alt="" />
          {/* <img alt={item.name} /> */}
        </div>
        <div className="text">
          <h4>{item.name}</h4>
          <h4>{item.info}</h4>
          <h4>{item.glass}</h4>
          <h4>{item.category}</h4>
          <button>
            <Link to={`/cocktail/${item.id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
