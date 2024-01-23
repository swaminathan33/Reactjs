import React from 'react'
import Home from './Components/Home'
import SideBar from './Components/SideBar'
import Modal from './Components/Modal'
import './App.css'

const App = () => {
  return (
    <div>
      <Home/>
      <Modal />
      <SideBar />
    </div>
  )
}

export default App
