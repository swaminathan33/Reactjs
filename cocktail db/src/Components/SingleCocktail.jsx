import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const SingleCocktail = () => {
  const id = useParams().id;
  const [cocktail, setCocktail] = useState(null);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [loading, setLoading] = useState(false);

  const fetchDrink = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          idDrink: id,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
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
          category,
          glass,
          image,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
        setLoading(false);
      } else {
        setCocktail([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDrink();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h1> no cocktail to display</h1>;
  }

  const ingredients = cocktail.ingredients;
  return (
    <div>
      <div className="singlecocktail">
        <button>
          <Link to={"/"}>Back to home </Link>
        </button>
        <div className="image">
          <img src={cocktail.image} alt="" />
        </div>
        <div className="text">
          <div>
            <span>Name: </span> {cocktail.name}
          </div>
          <div>
            <span>Info: </span> {cocktail.info}
          </div>
          <div>
            <span>Glass: </span> {cocktail.glass}
          </div>
          <div>
            <span>Ingredients: </span>{" "}
            {ingredients.map((item) => {
              if (item) {
                return `${item}, `;
              }
            })}
          </div>
          <div>
            <span>Instruction: </span> {cocktail.instructions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
