import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div className="search-form">
      <div className="input-title">Search your cocktail</div>
      <div className="input">
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
  );
};

export default SearchForm;
