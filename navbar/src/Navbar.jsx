import React, { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.svg'
import { FaTwitter } from "react-icons/fa";
import './App.css'
import { IoMenu } from "react-icons/io5";
import {links, social} from './data'

const Navbar = () => {
  const navRef = useRef();
  const listRef = useRef();
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    if(showLinks){
      navRef.current.style.height = `${listRef.current.getBoundingClientRect().height}px`
    }
  },[showLinks])
  return (
    <div>
      <nav>
        <div className="toggle-menu">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
          {
            showLinks && 
            <div className="menu-items" ref={navRef}>
            <ul ref={listRef}>
            {
              links.map((link) => {
                return <li key={link.id}>{link.text}</li>
              })
            }
          </ul>
          </div>
          }
        </div>
        <div className="social-icons">
          <FaTwitter />
          <FaTwitter />
          <FaTwitter />
          <FaTwitter />
        </div>
        <div className="menu" onClick={() => setShowLinks(!showLinks)}>
            <IoMenu />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
