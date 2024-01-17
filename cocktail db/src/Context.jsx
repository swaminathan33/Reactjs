import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const fetchDrinks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      const newCocktail = drinks.map((item) => {
        const {
          idDrink: id,
          strDrink: name,
          strAlcoholic: info,
          strGlass: glass,
          strDrinkThumb: image,
        } = item;
        return {
          id,
          name,
          info,
          glass,
          image,
        };
      });
      setCocktail(newCocktail);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);
  return (
    <AppContext.Provider value={{ setSearchTerm, cocktail, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
