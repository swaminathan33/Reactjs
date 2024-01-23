import React from "react";
import Navbar from "../Components/Navbar";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
import { useGlobalContext } from "../context";
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
