import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, info, glass, image }) => {
  return (
    <div>
      <div className="cocktail">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <div className="span">{name}</div>
          <div className="span">{info}</div>
          <div className="span">{glass}</div>
          <div className="span">
            <button>
              <Link to={`/cocktail/${id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
