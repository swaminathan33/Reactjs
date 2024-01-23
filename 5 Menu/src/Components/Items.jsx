import React from 'react'
import Item from './Item'

const Items = ({data}) => {
  return (
    <div>
      {
        data.map(d => {
            return (
                <Item data={d} />
            )
        })
      }
    </div>
  )
}

export default Items
