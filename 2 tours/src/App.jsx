import React, { useEffect, useState } from "react";
import Review from "./Components/Review";
import Loading from "./Components/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () =>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const data = await  response.json();
      setLoading(false)
      setData(data)
    } 
    catch (err){
        console.log(err)
    }
  }

  const remove = ({ id }) => {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Our Tours</h1>
          {data.map((d) => {
            return <Review key={d.id} data={d} remove={remove} />;
          })}
          <button onClick={() => fetchTours()}>Refresh</button>
        </div>
      )}
    </div>
  );
};
export default App;

