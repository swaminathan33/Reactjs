import React from 'react'

const Category = ({uniqueCategory, categories}) => {
  return (
    <div>
      {
        uniqueCategory.map((d) => {
            return (
                <button onClick={() => categories(d)}>
        {d}
      </button>  
            )
        })
      }
    </div>
  )
}

export default Category
