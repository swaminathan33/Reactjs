import React from 'react'
import data from './data'
import Question from './Components/Question'

const App = () => {
  return (
    <div>
      {
        data.map((d) => {
          return (
              <Question data={d} />
          )
        })
      }
    </div>
  )
}

export default App
