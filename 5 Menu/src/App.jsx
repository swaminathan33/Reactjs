import React, { useState } from 'react'
import data from './data'
import Items from './Components/Items'
import Category from './Components/Category'

const uniqueCategory = ['all', ...new Set(data.map(d => d.category))]


const App = () => {
  const [menu, setMenu] = useState(data)

  const categories = (category) =>{
    if (category == 'all'){
        setMenu(data);
    }
    else{
      const newMenu = data.filter((c) => c.category == category)
      setMenu(newMenu);
    }
  }

  return (
    <div>
      Our Menu
      <Category uniqueCategory={uniqueCategory} categories={categories}  />
      <Items data={menu} />
    </div>
  )
}

export default App
