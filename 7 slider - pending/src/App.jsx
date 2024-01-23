import React, { useState } from 'react'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  return (
    <div>
      {
        people.map((person) => {
          return(
            <div key={person.id}>
              <img src={person.image} alt="" width={150} height={150} />
              <p>{person.name}</p>
              <p>{person.title}</p>
              <p>{person.quote}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
