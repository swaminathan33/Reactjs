import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import '../App.css'
import {links, social} from './data'
import { useGlobalContext } from '../context'

const SideBar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <div className={`${isSidebarOpen ? '' : 'show-sidebar'}`}>
      <div className="side-bar">
        <div className="top">
            <div className='logo'>
            <img src={logo} alt="" />
            </div>
            <div className='sidebar-times'>
                <FaTimes color='red' onClick={closeSidebar} />
            </div>
        </div>
        <div className='list-items'>
        <ul>
        {
            links.map((link) => {
                return <li key={link.id}>{link.text}</li>
            })
        }
        </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
