import React, { useState } from 'react'
import data from './data'

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleText = () =>{
    if (parseInt(count) <= 0){
        setText(data.slice(0,1))
    }
    else if (parseInt(count) > 8 ){
      setText(data.slice(0,9))
    }
    else{
      setText(data.slice(0,count))
    }
  }

  return (
    <div>
      <input type="number" onChange={(e) => setCount(e.target.value)} value={count}/>

      <button onClick={handleText} >Generate</button>
      {
        text.map((t, index) => {
          return <p key={index}>{t}</p>
        })
      }
    </div>
  )
}

export default App
