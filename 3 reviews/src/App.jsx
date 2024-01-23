import React, { useCallback, useState } from 'react'
import data from './data'
import Review from './Components/Review'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
const App = () => {
  const [index, setIndex] = useState(0);
  const people = data[index]

  const checkNumber = (number) =>{
    if (number > ( data.length - 1 )){
      number = 0
      return number ; 
    }
    else if (number < 0){
      number = data.length
      return number -1 ;
    }
    return number ;

  }


  const nextPerson = () =>{
    setIndex(checkNumber(index + 1));
  }


  const prevPerson = () =>{
    setIndex(checkNumber(index - 1))
  }

  const surpriseMe = () =>{
    const number = Math.floor( Math.random() * data.length )
    setIndex(number)
  }

  return (
    <div> 
      <Review data={people} />
      <button onClick={() => prevPerson()}>
      <FaChevronCircleLeft />
      </button>
      <button onClick={() => nextPerson()}>
      <FaChevronCircleRight />
      </button>
      <button onClick={surpriseMe}>
        Surprise Me
      </button>
    </div>
  )
}

export default App
