import React, { useState } from 'react'

const App = () => {
  const [movieName, setMovieName] = useState('')

  const handleSubmit = async () =>{
    await fetch(`https://www.omdbapi.com/?apikey=f1af5951&t=${movieName}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <input type="text" onChange={(e) => setMovieName(e.target.value)} />
      <button type='submit' onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default App
