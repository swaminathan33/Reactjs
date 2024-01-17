import React from "react";
import SearchForm from "../Components/SearchForm";
import CocktailList from "../Components/CocktailList";
import { useGlobalContext } from "../Context";
import Loading from "../Components/Loading";

const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <div>
      <SearchForm />
      {loading ? <Loading /> : <CocktailList />}
    </div>
  );
};

export default Home;
