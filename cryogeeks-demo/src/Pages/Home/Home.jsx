import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Sidebar />
      <div className="dashboard">
        Home content
      </div>
    </div>
  )
}

export default Home
