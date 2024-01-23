import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { cocktail } = useGlobalContext();

  return (
    <div className="cocktaillist">
      {cocktail.map((item, index) => {
        return (
          <div key={index}>
            <Cocktail item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CocktailList;
