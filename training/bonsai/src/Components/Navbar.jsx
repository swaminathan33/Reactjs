import React from 'react'
import './styling/navbar.css'
import Startfree from './Startfree'

const Navbar = () => {
  return (
    <div>
      <nav>
      <div className="logo">
        Bonsai
      </div>
      <div className="middle">
        <ul>
            <li>Product</li>
            <li>Templates</li>
            <li>Pricing</li>
            <li>Reviews</li>
        </ul>
      </div>
      <div className="buttons" >
        <div className='login'>
            <button>
                Log In
            </button>
        </div>
        <Startfree paddings={'10px 23px 10px 23px'} />
      </div>
      </nav>
    </div>
  )
}

export default Navbar
