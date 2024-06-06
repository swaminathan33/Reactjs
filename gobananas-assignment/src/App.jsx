import React, { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {TextField} from '@mui/material'

const App = () => {
  const [movieName, setMovieName] = useState('')

  const handleSubmit = async () =>{
    await fetch(`https://www.omdbapi.com/?apikey=f1af5951&s=${movieName}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:'30vh', height:'4px', fontSize:'10px'}} />
      <input type="text" onChange={(e) => setMovieName(e.target.value)} />
      <button type='submit' onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default App
