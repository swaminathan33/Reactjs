import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({items, deleteList, editItem}) => {

  return (
    <div>
      {
        items.map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <button onClick={() => editItem(item.id)}>
                        <FaEdit />
                    </button>
                    <button onClick={() => deleteList(item.id)}>
                        <FaTrash />
                    </button>
                </div>
            )
        })
      }
    </div>
  )
}

export default List
