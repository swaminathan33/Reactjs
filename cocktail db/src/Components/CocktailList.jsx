import React from "react";
import { useGlobalContext } from "../Context";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { cocktail } = useGlobalContext();

  return (
    <div>
      <div className="cocktaillist">
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
