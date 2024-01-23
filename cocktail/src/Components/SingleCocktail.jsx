import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState([]);
  const [loading, setloading] = useState(false);
  const id = useParams().id;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const fetchCocktail = async () => {
    try {
      setloading(true);
      const response = await fetch(url);
      const data = await response.json();
      const {
        idDrink: id,
        strDrink: name,
        strAlcoholic: info,
        strGlass: glass,
        strCategory: category,
        strDrinkThumb: image,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = data.drinks[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        id,
        name,
        info,
        glass,
        category,
        image,
        instructions,
        ingredients,
      };
      setCocktail(newCocktail);
    } catch (err) {
      console.log(err);
    }
    setloading(false);
  };
  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="singlecocktail">
        <button>
          <Link to={"/"}>Back to home</Link>
        </button>
        <div className="image">
          <img src={cocktail.image} alt="" />
        </div>
        <div className="text">
          <div>
            <span>Name: </span>
            {cocktail.name}
          </div>
          <div>
            <span>info: </span>
            {cocktail.info}
          </div>
          <div>
            <span>Glass: </span>
            {cocktail.glass}
          </div>
          <div>
            <span>Category: </span>
            {cocktail.category}
          </div>
          <div>
            <span>Ingredients: </span>
            {cocktail.ingredients}
          </div>
          <div>
            <span>Instructions: </span>
            {cocktail.instructions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
