import React from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <div className="searchform">
        <div className="title">Search your Cocktail</div>
        <div className="input">
          <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
