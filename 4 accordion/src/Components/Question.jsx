import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const Question = ({data}) => {
    const [show, setShow] = useState(false)
  return (
    <div>
    {data.title}
    <button onClick={() => setShow(!show)}>
    <FaPlus />
    </button>
    {
        show ? data.info : ''
    }
    </div>
  )
}

export default Question
