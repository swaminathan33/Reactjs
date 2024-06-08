import React, { useEffect, useState } from "react";
import './App.css'
import Card from "./Card";

const App = () => {
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const handleSubmit = async () => {
    setLoading(true)
    await fetch(`https://www.omdbapi.com/?apikey=f1af5951&s=${movieName}`)
      .then((response) => response.json())
      .then((data) => setData(data.Search))
      .catch((err) => console.log(err));
      setLoading(false)
  };


  return (
    <div>
     
      <div className="button">
      <input type="text" onChange={(e) => setMovieName(e.target.value)} placeholder="search..."/>
      <button onClick={handleSubmit}>Search</button>
      </div>
      {
        loading ? <h3>Loading...</h3> : <div className="images">
        {
          data.length == 0 ? <h3>No results found</h3> : data.map((i) => {
            return <Card data={i} />

          })
        }
      </div>
      }
    </div>
  );
};

export default App;
