import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktail = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
            strCategory,
            strDrinkThumb,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            glass: strGlass,
            category: strCategory,
            image: strDrinkThumb,
          };
        });
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
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ setSearchTerm, searchTerm, cocktail, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
