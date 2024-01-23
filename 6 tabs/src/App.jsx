import React, { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [items, setItems] = useState([]);
  const [showing, setShowing] = useState('TOMMY');
  const fetchData = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    setItems(data);
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const display = (d) =>{
    setShowing(d);
  }
  return (
    <div>
      {
        items.map((c) => {
          return <button onClick={() => display(c.company)}>{c.company}</button>
        })
      }
      {
        items.map((k) => {
          if(k.company == showing){
            return (
              <div key={k.id}>
                <h1>{k.title}</h1>
                <h4>{k.company}</h4>
                <p>
                  {
                    k.duties
                  }
                </p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default App
