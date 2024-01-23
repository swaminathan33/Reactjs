import React from 'react'

const Item = ({data}) => {
  return (
    <div>
        <h4>
            {data.title}
        </h4>
        <img src={data.img} alt="" width={'100px'} height={'100px'} />
        <p>{data.desc}</p>
    </div>
  )
}

export default Item
