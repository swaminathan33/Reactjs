import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card'>
       <div className="img">
       <img src={data.Poster} alt="" />
       </div>
        <div className="content">
        <div className="title">{data.Title}</div>
        <div className="year">{data.Year}</div>
        </div>

    </div>
  )
}

export default Card
